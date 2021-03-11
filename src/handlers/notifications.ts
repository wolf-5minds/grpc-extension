import * as grpc from '@grpc/grpc-js';
import { v4 as uuidv4 } from 'uuid';
import { OnFlowNodeSuspendedNotification } from '../proto/notifications/notifications_pb';
import { NotificationsService, INotificationsServer } from '../proto/notifications/notifications_grpc_pb';
import { AtlasEngineEvent } from '@atlas-engine/atlas_engine_sdk';
import { AtlasEngineEventType } from '@atlas-engine/persistence.contracts';

interface INotificationSubscription {
    applies(event: AtlasEngineEvent): boolean;
    notify(event: AtlasEngineEvent): void;
}

class OnFlowNodeSuspendedSubscription implements INotificationSubscription {
    private readonly stream: grpc.ServerWritableStream<{}, OnFlowNodeSuspendedNotification>;

    constructor(stream: grpc.ServerWritableStream<{}, OnFlowNodeSuspendedNotification>) {
        this.stream = stream;
    }

    public applies = (event: AtlasEngineEvent) => {
        return event.eventType == AtlasEngineEventType.OnFlowNodeSuspended;
    }

    public notify = (event: AtlasEngineEvent) => {
        const reply: OnFlowNodeSuspendedNotification = new OnFlowNodeSuspendedNotification();

        reply.setProcessmodelid(event.processModelId);
        reply.setProcessinstanceid(event.processInstanceId);
        reply.setFlownodeid(event.flowNodeId);
        
        this.stream.write(reply);
    }
}

class NotificationBroker {
    private readonly subscriptions: INotificationSubscription[] = [];

    public subscribe = (subscription: INotificationSubscription) => {
        this.subscriptions.push(subscription)
    }

    public notify = (event: AtlasEngineEvent) => {
        if (event.eventType == AtlasEngineEventType.OnFlowNodeSuspended) {
            this.subscriptions
                .filter(p => p.applies)
                .forEach(p => p.notify(event));
        }
    }
}

const DefaultNotificationBroker: NotificationBroker = new NotificationBroker();

const NotificationsHandler: INotificationsServer = {
    getFlowNodeSuspendedNotifications: (call: grpc.ServerWritableStream<{}, OnFlowNodeSuspendedNotification>): void => {
        const subscription = new OnFlowNodeSuspendedSubscription(call);
        DefaultNotificationBroker.subscribe(subscription);
    }
};

export default {
    service: NotificationsService,
    broker: DefaultNotificationBroker,
    handler: NotificationsHandler,
};

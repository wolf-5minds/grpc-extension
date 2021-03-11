// package: greet
// file: notifications.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as notifications_pb from "./notifications_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface INotificationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getFlowNodeSuspendedNotifications: INotificationsService_IGetFlowNodeSuspendedNotifications;
}

interface INotificationsService_IGetFlowNodeSuspendedNotifications extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, notifications_pb.OnFlowNodeSuspendedNotification> {
    path: "/greet.Notifications/GetFlowNodeSuspendedNotifications";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<notifications_pb.OnFlowNodeSuspendedNotification>;
    responseDeserialize: grpc.deserialize<notifications_pb.OnFlowNodeSuspendedNotification>;
}

export const NotificationsService: INotificationsService;

export interface INotificationsServer extends grpc.UntypedServiceImplementation {
    getFlowNodeSuspendedNotifications: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, notifications_pb.OnFlowNodeSuspendedNotification>;
}

export interface INotificationsClient {
    getFlowNodeSuspendedNotifications(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<notifications_pb.OnFlowNodeSuspendedNotification>;
    getFlowNodeSuspendedNotifications(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<notifications_pb.OnFlowNodeSuspendedNotification>;
}

export class NotificationsClient extends grpc.Client implements INotificationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getFlowNodeSuspendedNotifications(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<notifications_pb.OnFlowNodeSuspendedNotification>;
    public getFlowNodeSuspendedNotifications(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<notifications_pb.OnFlowNodeSuspendedNotification>;
}

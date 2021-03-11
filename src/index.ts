import {AtlasEngine, OnLoad} from '@atlas-engine/atlas_engine_sdk';
import 'dotenv/config';
import * as grpc from '@grpc/grpc-js';
import notifications from './handlers/notifications';

export const onLoad: OnLoad = (engine: AtlasEngine) => {
  console.log('Starting up grpc server...');
  engine.onReady(startServer);
  engine.registerEventMiddleware(event => {
      try {
        notifications.broker.notify(event);
      } catch (error) {
          console.error("Error notifying clients", event, error);
      }
  });
};

const port: string | number = process.env.PORT || 50051;

type StartServerType = () => void;
export const startServer: StartServerType = (): void => {
    const server: grpc.Server = new grpc.Server();

    // @ts-ignore
    server.addService(notifications.service, notifications.handler);

    server.bindAsync(
        `0.0.0.0:${port}`,
        grpc.ServerCredentials.createInsecure(),
        (err: Error, port: number) => {
            if (err != null) {
                return console.error(err);
            }
            console.log(`gRPC listening on ${ port }`);
            server.start();
        },
    );
};

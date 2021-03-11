// package: greet
// file: notifications.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class OnFlowNodeSuspendedNotification extends jspb.Message { 
    getProcessmodelid(): string;
    setProcessmodelid(value: string): OnFlowNodeSuspendedNotification;
    getProcessinstanceid(): string;
    setProcessinstanceid(value: string): OnFlowNodeSuspendedNotification;
    getFlownodeid(): string;
    setFlownodeid(value: string): OnFlowNodeSuspendedNotification;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnFlowNodeSuspendedNotification.AsObject;
    static toObject(includeInstance: boolean, msg: OnFlowNodeSuspendedNotification): OnFlowNodeSuspendedNotification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnFlowNodeSuspendedNotification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnFlowNodeSuspendedNotification;
    static deserializeBinaryFromReader(message: OnFlowNodeSuspendedNotification, reader: jspb.BinaryReader): OnFlowNodeSuspendedNotification;
}

export namespace OnFlowNodeSuspendedNotification {
    export type AsObject = {
        processmodelid: string,
        processinstanceid: string,
        flownodeid: string,
    }
}

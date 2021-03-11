// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var notifications_pb = require('./notifications_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_OnFlowNodeSuspendedNotification(arg) {
  if (!(arg instanceof notifications_pb.OnFlowNodeSuspendedNotification)) {
    throw new Error('Expected argument of type greet.OnFlowNodeSuspendedNotification');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_OnFlowNodeSuspendedNotification(buffer_arg) {
  return notifications_pb.OnFlowNodeSuspendedNotification.deserializeBinary(new Uint8Array(buffer_arg));
}


var NotificationsService = exports.NotificationsService = {
  getFlowNodeSuspendedNotifications: {
    path: '/greet.Notifications/GetFlowNodeSuspendedNotifications',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: notifications_pb.OnFlowNodeSuspendedNotification,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_greet_OnFlowNodeSuspendedNotification,
    responseDeserialize: deserialize_greet_OnFlowNodeSuspendedNotification,
  },
};

exports.NotificationsClient = grpc.makeGenericClientConstructor(NotificationsService);

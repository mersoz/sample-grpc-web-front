/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.api = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.SampleServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.SampleServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.SampleRequest,
 *   !proto.api.SampleResponse>}
 */
const methodInfo_SampleService_GetSampleSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.SampleResponse,
  /** @param {!proto.api.SampleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.SampleResponse.deserializeBinary
);


/**
 * @param {!proto.api.SampleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.SampleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.SampleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.SampleServiceClient.prototype.getSampleSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.SampleService/GetSampleSummary',
      request,
      metadata || {},
      methodInfo_SampleService_GetSampleSummary,
      callback);
};


/**
 * @param {!proto.api.SampleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.SampleResponse>}
 *     A native promise that resolves to the response
 */
proto.api.SampleServicePromiseClient.prototype.getSampleSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.SampleService/GetSampleSummary',
      request,
      metadata || {},
      methodInfo_SampleService_GetSampleSummary);
};


module.exports = proto.api;


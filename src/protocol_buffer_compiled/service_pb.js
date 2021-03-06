/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.api.Address', null, global);
goog.exportSymbol('proto.api.Attributes', null, global);
goog.exportSymbol('proto.api.Coordinates', null, global);
goog.exportSymbol('proto.api.Images', null, global);
goog.exportSymbol('proto.api.PropertyType', null, global);
goog.exportSymbol('proto.api.SampleRequest', null, global);
goog.exportSymbol('proto.api.SampleResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Coordinates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Coordinates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Coordinates.displayName = 'proto.api.Coordinates';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Address.displayName = 'proto.api.Address';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Images = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.Images.repeatedFields_, null);
};
goog.inherits(proto.api.Images, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Images.displayName = 'proto.api.Images';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Attributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Attributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.Attributes.displayName = 'proto.api.Attributes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.SampleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.SampleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.SampleRequest.displayName = 'proto.api.SampleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.SampleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.SampleResponse.repeatedFields_, null);
};
goog.inherits(proto.api.SampleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.SampleResponse.displayName = 'proto.api.SampleResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Coordinates.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Coordinates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Coordinates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Coordinates.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitude: jspb.Message.getFieldWithDefault(msg, 1, 0),
    longitude: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Coordinates}
 */
proto.api.Coordinates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Coordinates;
  return proto.api.Coordinates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Coordinates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Coordinates}
 */
proto.api.Coordinates.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setLatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setLongitude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Coordinates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Coordinates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Coordinates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Coordinates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitude();
  if (f !== 0) {
    writer.writeFixed64(
      1,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0) {
    writer.writeFixed64(
      2,
      f
    );
  }
};


/**
 * optional fixed64 latitude = 1;
 * @return {number}
 */
proto.api.Coordinates.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.api.Coordinates.prototype.setLatitude = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed64 longitude = 2;
 * @return {number}
 */
proto.api.Coordinates.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.api.Coordinates.prototype.setLongitude = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    fulladdress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postcode: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Address}
 */
proto.api.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Address;
  return proto.api.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Address}
 */
proto.api.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFulladdress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFulladdress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostcode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string fullAddress = 1;
 * @return {string}
 */
proto.api.Address.prototype.getFulladdress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.Address.prototype.setFulladdress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string postcode = 2;
 * @return {string}
 */
proto.api.Address.prototype.getPostcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.api.Address.prototype.setPostcode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.Images.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Images.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Images.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Images} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Images.toObject = function(includeInstance, msg) {
  var f, obj = {
    floorplanList: jspb.Message.getRepeatedField(msg, 1),
    photosList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Images}
 */
proto.api.Images.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Images;
  return proto.api.Images.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Images} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Images}
 */
proto.api.Images.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFloorplan(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPhotos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Images.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Images.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Images} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Images.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFloorplanList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPhotosList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string floorPlan = 1;
 * @return {!Array<string>}
 */
proto.api.Images.prototype.getFloorplanList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.api.Images.prototype.setFloorplanList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.api.Images.prototype.addFloorplan = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.Images.prototype.clearFloorplanList = function() {
  this.setFloorplanList([]);
};


/**
 * repeated string photos = 2;
 * @return {!Array<string>}
 */
proto.api.Images.prototype.getPhotosList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.api.Images.prototype.setPhotosList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.api.Images.prototype.addPhotos = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.Images.prototype.clearPhotosList = function() {
  this.setPhotosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Attributes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Attributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Attributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Attributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    numbedrooms: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numbathrooms: jspb.Message.getFieldWithDefault(msg, 2, 0),
    parking: jspb.Message.getFieldWithDefault(msg, 3, false),
    parkingtype: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Attributes}
 */
proto.api.Attributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Attributes;
  return proto.api.Attributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Attributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Attributes}
 */
proto.api.Attributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumbedrooms(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumbathrooms(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setParking(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParkingtype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Attributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.Attributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.Attributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.Attributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumbedrooms();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNumbathrooms();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getParking();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getParkingtype();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 numBedrooms = 1;
 * @return {number}
 */
proto.api.Attributes.prototype.getNumbedrooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.api.Attributes.prototype.setNumbedrooms = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 numBathrooms = 2;
 * @return {number}
 */
proto.api.Attributes.prototype.getNumbathrooms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.api.Attributes.prototype.setNumbathrooms = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool parking = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.Attributes.prototype.getParking = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.api.Attributes.prototype.setParking = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string parkingType = 4;
 * @return {string}
 */
proto.api.Attributes.prototype.getParkingtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.api.Attributes.prototype.setParkingtype = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.SampleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.SampleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.SampleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.SampleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    wanterr: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.SampleRequest}
 */
proto.api.SampleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.SampleRequest;
  return proto.api.SampleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.SampleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.SampleRequest}
 */
proto.api.SampleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWanterr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.SampleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.SampleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.SampleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.SampleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWanterr();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.api.SampleRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.api.SampleRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool wantErr = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.SampleRequest.prototype.getWanterr = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.api.SampleRequest.prototype.setWanterr = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.SampleResponse.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.SampleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.SampleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.SampleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.SampleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    coordinates: (f = msg.getCoordinates()) && proto.api.Coordinates.toObject(includeInstance, f),
    address: (f = msg.getAddress()) && proto.api.Address.toObject(includeInstance, f),
    attributes: (f = msg.getAttributes()) && proto.api.Attributes.toObject(includeInstance, f),
    propertytype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    images: (f = msg.getImages()) && proto.api.Images.toObject(includeInstance, f),
    price: jspb.Message.getFieldWithDefault(msg, 6, 0),
    historicalsalesList: jspb.Message.toObjectList(msg.getHistoricalsalesList(),
    google_protobuf_struct_pb.Struct.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.SampleResponse}
 */
proto.api.SampleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.SampleResponse;
  return proto.api.SampleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.SampleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.SampleResponse}
 */
proto.api.SampleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.Coordinates;
      reader.readMessage(value,proto.api.Coordinates.deserializeBinaryFromReader);
      msg.setCoordinates(value);
      break;
    case 2:
      var value = new proto.api.Address;
      reader.readMessage(value,proto.api.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 3:
      var value = new proto.api.Attributes;
      reader.readMessage(value,proto.api.Attributes.deserializeBinaryFromReader);
      msg.setAttributes(value);
      break;
    case 4:
      var value = /** @type {!proto.api.PropertyType} */ (reader.readEnum());
      msg.setPropertytype(value);
      break;
    case 5:
      var value = new proto.api.Images;
      reader.readMessage(value,proto.api.Images.deserializeBinaryFromReader);
      msg.setImages(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.addHistoricalsales(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.SampleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.SampleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.SampleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.SampleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoordinates();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.Coordinates.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.Address.serializeBinaryToWriter
    );
  }
  f = message.getAttributes();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.Attributes.serializeBinaryToWriter
    );
  }
  f = message.getPropertytype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getImages();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.api.Images.serializeBinaryToWriter
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHistoricalsalesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional Coordinates coordinates = 1;
 * @return {?proto.api.Coordinates}
 */
proto.api.SampleResponse.prototype.getCoordinates = function() {
  return /** @type{?proto.api.Coordinates} */ (
    jspb.Message.getWrapperField(this, proto.api.Coordinates, 1));
};


/** @param {?proto.api.Coordinates|undefined} value */
proto.api.SampleResponse.prototype.setCoordinates = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.SampleResponse.prototype.clearCoordinates = function() {
  this.setCoordinates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.SampleResponse.prototype.hasCoordinates = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Address address = 2;
 * @return {?proto.api.Address}
 */
proto.api.SampleResponse.prototype.getAddress = function() {
  return /** @type{?proto.api.Address} */ (
    jspb.Message.getWrapperField(this, proto.api.Address, 2));
};


/** @param {?proto.api.Address|undefined} value */
proto.api.SampleResponse.prototype.setAddress = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.SampleResponse.prototype.clearAddress = function() {
  this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.SampleResponse.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Attributes attributes = 3;
 * @return {?proto.api.Attributes}
 */
proto.api.SampleResponse.prototype.getAttributes = function() {
  return /** @type{?proto.api.Attributes} */ (
    jspb.Message.getWrapperField(this, proto.api.Attributes, 3));
};


/** @param {?proto.api.Attributes|undefined} value */
proto.api.SampleResponse.prototype.setAttributes = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.SampleResponse.prototype.clearAttributes = function() {
  this.setAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.SampleResponse.prototype.hasAttributes = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PropertyType propertyType = 4;
 * @return {!proto.api.PropertyType}
 */
proto.api.SampleResponse.prototype.getPropertytype = function() {
  return /** @type {!proto.api.PropertyType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.api.PropertyType} value */
proto.api.SampleResponse.prototype.setPropertytype = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Images Images = 5;
 * @return {?proto.api.Images}
 */
proto.api.SampleResponse.prototype.getImages = function() {
  return /** @type{?proto.api.Images} */ (
    jspb.Message.getWrapperField(this, proto.api.Images, 5));
};


/** @param {?proto.api.Images|undefined} value */
proto.api.SampleResponse.prototype.setImages = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.api.SampleResponse.prototype.clearImages = function() {
  this.setImages(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.SampleResponse.prototype.hasImages = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 Price = 6;
 * @return {number}
 */
proto.api.SampleResponse.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.api.SampleResponse.prototype.setPrice = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated google.protobuf.Struct historicalSales = 7;
 * @return {!Array<!proto.google.protobuf.Struct>}
 */
proto.api.SampleResponse.prototype.getHistoricalsalesList = function() {
  return /** @type{!Array<!proto.google.protobuf.Struct>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_struct_pb.Struct, 7));
};


/** @param {!Array<!proto.google.protobuf.Struct>} value */
proto.api.SampleResponse.prototype.setHistoricalsalesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.protobuf.Struct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Struct}
 */
proto.api.SampleResponse.prototype.addHistoricalsales = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.protobuf.Struct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.api.SampleResponse.prototype.clearHistoricalsalesList = function() {
  this.setHistoricalsalesList([]);
};


/**
 * @enum {number}
 */
proto.api.PropertyType = {
  DETACHED: 0,
  SEMIDETACHED: 1,
  TERRACED: 2,
  FLATMAISONETTE: 3
};

goog.object.extend(exports, proto.api);

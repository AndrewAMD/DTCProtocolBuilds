/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!


goog.provide('proto.DTC_PB.AccountBalanceReject');
goog.provide('proto.DTC_PB.AccountBalanceRequest');
goog.provide('proto.DTC_PB.AccountBalanceUpdate');
goog.provide('proto.DTC_PB.AlertMessage');
goog.provide('proto.DTC_PB.AtBidOrAskEnum');
goog.provide('proto.DTC_PB.AtBidOrAskEnum8');
goog.provide('proto.DTC_PB.BuySellEnum');
goog.provide('proto.DTC_PB.CancelOrder');
goog.provide('proto.DTC_PB.CancelReplaceOrder');
goog.provide('proto.DTC_PB.CancelReplaceOrderInt');
goog.provide('proto.DTC_PB.CurrentPositionsReject');
goog.provide('proto.DTC_PB.CurrentPositionsRequest');
goog.provide('proto.DTC_PB.DTCMessageType');
goog.provide('proto.DTC_PB.DTCVersion');
goog.provide('proto.DTC_PB.DepthEntry');
goog.provide('proto.DTC_PB.EncodingEnum');
goog.provide('proto.DTC_PB.EncodingRequest');
goog.provide('proto.DTC_PB.EncodingResponse');
goog.provide('proto.DTC_PB.ExchangeListRequest');
goog.provide('proto.DTC_PB.ExchangeListResponse');
goog.provide('proto.DTC_PB.GeneralLogMessage');
goog.provide('proto.DTC_PB.Heartbeat');
goog.provide('proto.DTC_PB.HistoricalAccountBalanceResponse');
goog.provide('proto.DTC_PB.HistoricalAccountBalancesReject');
goog.provide('proto.DTC_PB.HistoricalAccountBalancesRequest');
goog.provide('proto.DTC_PB.HistoricalDataIntervalEnum');
goog.provide('proto.DTC_PB.HistoricalOrderFillResponse');
goog.provide('proto.DTC_PB.HistoricalOrderFillsReject');
goog.provide('proto.DTC_PB.HistoricalOrderFillsRequest');
goog.provide('proto.DTC_PB.HistoricalPriceDataRecordResponse');
goog.provide('proto.DTC_PB.HistoricalPriceDataRecordResponse_Int');
goog.provide('proto.DTC_PB.HistoricalPriceDataReject');
goog.provide('proto.DTC_PB.HistoricalPriceDataRejectReasonCodeEnum');
goog.provide('proto.DTC_PB.HistoricalPriceDataRequest');
goog.provide('proto.DTC_PB.HistoricalPriceDataResponseHeader');
goog.provide('proto.DTC_PB.HistoricalPriceDataResponseTrailer');
goog.provide('proto.DTC_PB.HistoricalPriceDataTickRecordResponse');
goog.provide('proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int');
goog.provide('proto.DTC_PB.JournalEntriesReject');
goog.provide('proto.DTC_PB.JournalEntriesRequest');
goog.provide('proto.DTC_PB.JournalEntryAdd');
goog.provide('proto.DTC_PB.JournalEntryResponse');
goog.provide('proto.DTC_PB.Logoff');
goog.provide('proto.DTC_PB.LogonRequest');
goog.provide('proto.DTC_PB.LogonResponse');
goog.provide('proto.DTC_PB.LogonStatusEnum');
goog.provide('proto.DTC_PB.MarketDataFeedStatus');
goog.provide('proto.DTC_PB.MarketDataFeedStatusEnum');
goog.provide('proto.DTC_PB.MarketDataFeedSymbolStatus');
goog.provide('proto.DTC_PB.MarketDataReject');
goog.provide('proto.DTC_PB.MarketDataRequest');
goog.provide('proto.DTC_PB.MarketDataSnapshot');
goog.provide('proto.DTC_PB.MarketDataSnapshot_Int');
goog.provide('proto.DTC_PB.MarketDataUpdateBidAsk');
goog.provide('proto.DTC_PB.MarketDataUpdateBidAskCompact');
goog.provide('proto.DTC_PB.MarketDataUpdateBidAsk_Int');
goog.provide('proto.DTC_PB.MarketDataUpdateLastTradeSnapshot');
goog.provide('proto.DTC_PB.MarketDataUpdateOpenInterest');
goog.provide('proto.DTC_PB.MarketDataUpdateSessionHigh');
goog.provide('proto.DTC_PB.MarketDataUpdateSessionHigh_Int');
goog.provide('proto.DTC_PB.MarketDataUpdateSessionLow');
goog.provide('proto.DTC_PB.MarketDataUpdateSessionLow_Int');
goog.provide('proto.DTC_PB.MarketDataUpdateSessionNumTrades');
goog.provide('proto.DTC_PB.MarketDataUpdateSessionOpen');
goog.provide('proto.DTC_PB.MarketDataUpdateSessionOpen_Int');
goog.provide('proto.DTC_PB.MarketDataUpdateSessionSettlement');
goog.provide('proto.DTC_PB.MarketDataUpdateSessionSettlement_Int');
goog.provide('proto.DTC_PB.MarketDataUpdateSessionVolume');
goog.provide('proto.DTC_PB.MarketDataUpdateTrade');
goog.provide('proto.DTC_PB.MarketDataUpdateTradeCompact');
goog.provide('proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator');
goog.provide('proto.DTC_PB.MarketDataUpdateTrade_Int');
goog.provide('proto.DTC_PB.MarketDataUpdateTradingSessionDate');
goog.provide('proto.DTC_PB.MarketDepthFullUpdate10');
goog.provide('proto.DTC_PB.MarketDepthFullUpdate20');
goog.provide('proto.DTC_PB.MarketDepthReject');
goog.provide('proto.DTC_PB.MarketDepthRequest');
goog.provide('proto.DTC_PB.MarketDepthSnapshotLevel');
goog.provide('proto.DTC_PB.MarketDepthSnapshotLevel_Int');
goog.provide('proto.DTC_PB.MarketDepthUpdateLevel');
goog.provide('proto.DTC_PB.MarketDepthUpdateLevelCompact');
goog.provide('proto.DTC_PB.MarketDepthUpdateLevelCompact2');
goog.provide('proto.DTC_PB.MarketDepthUpdateLevel_Int');
goog.provide('proto.DTC_PB.MarketDepthUpdateTypeEnum');
goog.provide('proto.DTC_PB.MessageSupportedEnum');
goog.provide('proto.DTC_PB.OpenCloseTradeEnum');
goog.provide('proto.DTC_PB.OpenOrdersReject');
goog.provide('proto.DTC_PB.OpenOrdersRequest');
goog.provide('proto.DTC_PB.OrderStatusEnum');
goog.provide('proto.DTC_PB.OrderTypeEnum');
goog.provide('proto.DTC_PB.OrderUpdate');
goog.provide('proto.DTC_PB.OrderUpdateReasonEnum');
goog.provide('proto.DTC_PB.PartialFillHandlingEnum');
goog.provide('proto.DTC_PB.PositionUpdate');
goog.provide('proto.DTC_PB.PriceDisplayFormatEnum');
goog.provide('proto.DTC_PB.PutCallEnum');
goog.provide('proto.DTC_PB.RequestActionEnum');
goog.provide('proto.DTC_PB.SearchTypeEnum');
goog.provide('proto.DTC_PB.SecurityDefinitionForSymbolRequest');
goog.provide('proto.DTC_PB.SecurityDefinitionReject');
goog.provide('proto.DTC_PB.SecurityDefinitionResponse');
goog.provide('proto.DTC_PB.SecurityTypeEnum');
goog.provide('proto.DTC_PB.SubmitNewOCOOrder');
goog.provide('proto.DTC_PB.SubmitNewOCOOrderInt');
goog.provide('proto.DTC_PB.SubmitNewSingleOrder');
goog.provide('proto.DTC_PB.SubmitNewSingleOrderInt');
goog.provide('proto.DTC_PB.SymbolSearchRequest');
goog.provide('proto.DTC_PB.SymbolsForExchangeRequest');
goog.provide('proto.DTC_PB.SymbolsForUnderlyingRequest');
goog.provide('proto.DTC_PB.TimeInForceEnum');
goog.provide('proto.DTC_PB.TradeAccountResponse');
goog.provide('proto.DTC_PB.TradeAccountsRequest');
goog.provide('proto.DTC_PB.TradeModeEnum');
goog.provide('proto.DTC_PB.TradingStatusEnum');
goog.provide('proto.DTC_PB.TradingSymbolStatus');
goog.provide('proto.DTC_PB.UnbundledTradeIndicatorEnum');
goog.provide('proto.DTC_PB.UnderlyingSymbolsForExchangeRequest');
goog.provide('proto.DTC_PB.UserMessage');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


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
proto.DTC_PB.EncodingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.EncodingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.EncodingRequest.displayName = 'proto.DTC_PB.EncodingRequest';
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
proto.DTC_PB.EncodingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.EncodingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.EncodingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.EncodingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolversion: jspb.Message.getField(msg, 1),
    encoding: jspb.Message.getField(msg, 2),
    protocoltype: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.EncodingRequest}
 */
proto.DTC_PB.EncodingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.EncodingRequest;
  return proto.DTC_PB.EncodingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.EncodingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.EncodingRequest}
 */
proto.DTC_PB.EncodingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolversion(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.EncodingEnum} */ (reader.readEnum());
      msg.setEncoding(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocoltype(value);
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
proto.DTC_PB.EncodingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.EncodingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.EncodingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.EncodingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.EncodingEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 ProtocolVersion = 1;
 * @return {number}
 */
proto.DTC_PB.EncodingRequest.prototype.getProtocolversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.EncodingRequest.prototype.setProtocolversion = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.EncodingRequest.prototype.clearProtocolversion = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.EncodingRequest.prototype.hasProtocolversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EncodingEnum Encoding = 2;
 * @return {!proto.DTC_PB.EncodingEnum}
 */
proto.DTC_PB.EncodingRequest.prototype.getEncoding = function() {
  return /** @type {!proto.DTC_PB.EncodingEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.EncodingEnum} value */
proto.DTC_PB.EncodingRequest.prototype.setEncoding = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.EncodingRequest.prototype.clearEncoding = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.EncodingRequest.prototype.hasEncoding = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ProtocolType = 3;
 * @return {string}
 */
proto.DTC_PB.EncodingRequest.prototype.getProtocoltype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.EncodingRequest.prototype.setProtocoltype = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.EncodingRequest.prototype.clearProtocoltype = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.EncodingRequest.prototype.hasProtocoltype = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.EncodingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.EncodingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.EncodingResponse.displayName = 'proto.DTC_PB.EncodingResponse';
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
proto.DTC_PB.EncodingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.EncodingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.EncodingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.EncodingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolversion: jspb.Message.getField(msg, 1),
    encoding: jspb.Message.getField(msg, 2),
    protocoltype: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.EncodingResponse}
 */
proto.DTC_PB.EncodingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.EncodingResponse;
  return proto.DTC_PB.EncodingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.EncodingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.EncodingResponse}
 */
proto.DTC_PB.EncodingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolversion(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.EncodingEnum} */ (reader.readEnum());
      msg.setEncoding(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocoltype(value);
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
proto.DTC_PB.EncodingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.EncodingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.EncodingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.EncodingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.EncodingEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 ProtocolVersion = 1;
 * @return {number}
 */
proto.DTC_PB.EncodingResponse.prototype.getProtocolversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.EncodingResponse.prototype.setProtocolversion = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.EncodingResponse.prototype.clearProtocolversion = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.EncodingResponse.prototype.hasProtocolversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EncodingEnum Encoding = 2;
 * @return {!proto.DTC_PB.EncodingEnum}
 */
proto.DTC_PB.EncodingResponse.prototype.getEncoding = function() {
  return /** @type {!proto.DTC_PB.EncodingEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.EncodingEnum} value */
proto.DTC_PB.EncodingResponse.prototype.setEncoding = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.EncodingResponse.prototype.clearEncoding = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.EncodingResponse.prototype.hasEncoding = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ProtocolType = 3;
 * @return {string}
 */
proto.DTC_PB.EncodingResponse.prototype.getProtocoltype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.EncodingResponse.prototype.setProtocoltype = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.EncodingResponse.prototype.clearProtocoltype = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.EncodingResponse.prototype.hasProtocoltype = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.LogonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.LogonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.LogonRequest.displayName = 'proto.DTC_PB.LogonRequest';
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
proto.DTC_PB.LogonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.LogonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.LogonRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.LogonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolversion: jspb.Message.getField(msg, 1),
    username: jspb.Message.getField(msg, 2),
    password: jspb.Message.getField(msg, 3),
    generaltextdata: jspb.Message.getField(msg, 4),
    integer1: jspb.Message.getField(msg, 5),
    integer2: jspb.Message.getField(msg, 6),
    heartbeatintervalinseconds: jspb.Message.getField(msg, 7),
    trademode: jspb.Message.getField(msg, 8),
    tradeaccount: jspb.Message.getField(msg, 9),
    hardwareidentifier: jspb.Message.getField(msg, 10),
    clientname: jspb.Message.getField(msg, 11)
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
 * @return {!proto.DTC_PB.LogonRequest}
 */
proto.DTC_PB.LogonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.LogonRequest;
  return proto.DTC_PB.LogonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.LogonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.LogonRequest}
 */
proto.DTC_PB.LogonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGeneraltextdata(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInteger1(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInteger2(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeartbeatintervalinseconds(value);
      break;
    case 8:
      var value = /** @type {!proto.DTC_PB.TradeModeEnum} */ (reader.readEnum());
      msg.setTrademode(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setHardwareidentifier(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientname(value);
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
proto.DTC_PB.LogonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.LogonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.LogonRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.LogonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TradeModeEnum} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional int32 ProtocolVersion = 1;
 * @return {number}
 */
proto.DTC_PB.LogonRequest.prototype.getProtocolversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonRequest.prototype.setProtocolversion = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.LogonRequest.prototype.clearProtocolversion = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasProtocolversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Username = 2;
 * @return {string}
 */
proto.DTC_PB.LogonRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.LogonRequest.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.LogonRequest.prototype.clearUsername = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasUsername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Password = 3;
 * @return {string}
 */
proto.DTC_PB.LogonRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.LogonRequest.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.LogonRequest.prototype.clearPassword = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasPassword = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string GeneralTextData = 4;
 * @return {string}
 */
proto.DTC_PB.LogonRequest.prototype.getGeneraltextdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.LogonRequest.prototype.setGeneraltextdata = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.LogonRequest.prototype.clearGeneraltextdata = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasGeneraltextdata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 Integer_1 = 5;
 * @return {number}
 */
proto.DTC_PB.LogonRequest.prototype.getInteger1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonRequest.prototype.setInteger1 = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.LogonRequest.prototype.clearInteger1 = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasInteger1 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 Integer_2 = 6;
 * @return {number}
 */
proto.DTC_PB.LogonRequest.prototype.getInteger2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonRequest.prototype.setInteger2 = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.LogonRequest.prototype.clearInteger2 = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasInteger2 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 HeartbeatIntervalInSeconds = 7;
 * @return {number}
 */
proto.DTC_PB.LogonRequest.prototype.getHeartbeatintervalinseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonRequest.prototype.setHeartbeatintervalinseconds = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.LogonRequest.prototype.clearHeartbeatintervalinseconds = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasHeartbeatintervalinseconds = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TradeModeEnum TradeMode = 8;
 * @return {!proto.DTC_PB.TradeModeEnum}
 */
proto.DTC_PB.LogonRequest.prototype.getTrademode = function() {
  return /** @type {!proto.DTC_PB.TradeModeEnum} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.DTC_PB.TradeModeEnum} value */
proto.DTC_PB.LogonRequest.prototype.setTrademode = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.LogonRequest.prototype.clearTrademode = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasTrademode = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string TradeAccount = 9;
 * @return {string}
 */
proto.DTC_PB.LogonRequest.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.DTC_PB.LogonRequest.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.LogonRequest.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string HardwareIdentifier = 10;
 * @return {string}
 */
proto.DTC_PB.LogonRequest.prototype.getHardwareidentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.DTC_PB.LogonRequest.prototype.setHardwareidentifier = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.LogonRequest.prototype.clearHardwareidentifier = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasHardwareidentifier = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string ClientName = 11;
 * @return {string}
 */
proto.DTC_PB.LogonRequest.prototype.getClientname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.DTC_PB.LogonRequest.prototype.setClientname = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.LogonRequest.prototype.clearClientname = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonRequest.prototype.hasClientname = function() {
  return jspb.Message.getField(this, 11) != null;
};



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
proto.DTC_PB.LogonResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.LogonResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.LogonResponse.displayName = 'proto.DTC_PB.LogonResponse';
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
proto.DTC_PB.LogonResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.LogonResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.LogonResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.LogonResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolversion: jspb.Message.getField(msg, 1),
    result: jspb.Message.getField(msg, 2),
    resulttext: jspb.Message.getField(msg, 3),
    reconnectaddress: jspb.Message.getField(msg, 4),
    integer1: jspb.Message.getField(msg, 5),
    servername: jspb.Message.getField(msg, 6),
    marketdepthupdatesbestbidandask: jspb.Message.getField(msg, 7),
    tradingissupported: jspb.Message.getField(msg, 8),
    ocoorderssupported: jspb.Message.getField(msg, 9),
    ordercancelreplacesupported: jspb.Message.getField(msg, 10),
    symbolexchangedelimiter: jspb.Message.getField(msg, 11),
    securitydefinitionssupported: jspb.Message.getField(msg, 12),
    historicalpricedatasupported: jspb.Message.getField(msg, 13),
    resubscribewhenmarketdatafeedavailable: jspb.Message.getField(msg, 14),
    marketdepthissupported: jspb.Message.getField(msg, 15),
    onehistoricalpricedatarequestperconnection: jspb.Message.getField(msg, 16),
    bracketorderssupported: jspb.Message.getField(msg, 17),
    useintegerpriceordermessages: jspb.Message.getField(msg, 18),
    usesmultiplepositionspersymbolandtradeaccount: jspb.Message.getField(msg, 19),
    marketdatasupported: jspb.Message.getField(msg, 20)
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
 * @return {!proto.DTC_PB.LogonResponse}
 */
proto.DTC_PB.LogonResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.LogonResponse;
  return proto.DTC_PB.LogonResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.LogonResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.LogonResponse}
 */
proto.DTC_PB.LogonResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolversion(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.LogonStatusEnum} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResulttext(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReconnectaddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInteger1(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServername(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMarketdepthupdatesbestbidandask(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingissupported(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOcoorderssupported(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrdercancelreplacesupported(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbolexchangedelimiter(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecuritydefinitionssupported(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHistoricalpricedatasupported(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setResubscribewhenmarketdatafeedavailable(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMarketdepthissupported(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOnehistoricalpricedatarequestperconnection(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBracketorderssupported(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUseintegerpriceordermessages(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUsesmultiplepositionspersymbolandtradeaccount(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMarketdatasupported(value);
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
proto.DTC_PB.LogonResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.LogonResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.LogonResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.LogonResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.LogonStatusEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeUint32(
      20,
      f
    );
  }
};


/**
 * optional int32 ProtocolVersion = 1;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getProtocolversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setProtocolversion = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.LogonResponse.prototype.clearProtocolversion = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasProtocolversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LogonStatusEnum Result = 2;
 * @return {!proto.DTC_PB.LogonStatusEnum}
 */
proto.DTC_PB.LogonResponse.prototype.getResult = function() {
  return /** @type {!proto.DTC_PB.LogonStatusEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/** @param {!proto.DTC_PB.LogonStatusEnum} value */
proto.DTC_PB.LogonResponse.prototype.setResult = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.LogonResponse.prototype.clearResult = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ResultText = 3;
 * @return {string}
 */
proto.DTC_PB.LogonResponse.prototype.getResulttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.LogonResponse.prototype.setResulttext = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.LogonResponse.prototype.clearResulttext = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasResulttext = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string ReconnectAddress = 4;
 * @return {string}
 */
proto.DTC_PB.LogonResponse.prototype.getReconnectaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.LogonResponse.prototype.setReconnectaddress = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.LogonResponse.prototype.clearReconnectaddress = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasReconnectaddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 Integer_1 = 5;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getInteger1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setInteger1 = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.LogonResponse.prototype.clearInteger1 = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasInteger1 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string ServerName = 6;
 * @return {string}
 */
proto.DTC_PB.LogonResponse.prototype.getServername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.DTC_PB.LogonResponse.prototype.setServername = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.LogonResponse.prototype.clearServername = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasServername = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 MarketDepthUpdatesBestBidAndAsk = 7;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getMarketdepthupdatesbestbidandask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setMarketdepthupdatesbestbidandask = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.LogonResponse.prototype.clearMarketdepthupdatesbestbidandask = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasMarketdepthupdatesbestbidandask = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 TradingIsSupported = 8;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getTradingissupported = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setTradingissupported = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.LogonResponse.prototype.clearTradingissupported = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasTradingissupported = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 OCOOrdersSupported = 9;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getOcoorderssupported = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setOcoorderssupported = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.LogonResponse.prototype.clearOcoorderssupported = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasOcoorderssupported = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 OrderCancelReplaceSupported = 10;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getOrdercancelreplacesupported = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setOrdercancelreplacesupported = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.LogonResponse.prototype.clearOrdercancelreplacesupported = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasOrdercancelreplacesupported = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string SymbolExchangeDelimiter = 11;
 * @return {string}
 */
proto.DTC_PB.LogonResponse.prototype.getSymbolexchangedelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.DTC_PB.LogonResponse.prototype.setSymbolexchangedelimiter = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.LogonResponse.prototype.clearSymbolexchangedelimiter = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasSymbolexchangedelimiter = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint32 SecurityDefinitionsSupported = 12;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getSecuritydefinitionssupported = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setSecuritydefinitionssupported = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.LogonResponse.prototype.clearSecuritydefinitionssupported = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasSecuritydefinitionssupported = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint32 HistoricalPriceDataSupported = 13;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getHistoricalpricedatasupported = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setHistoricalpricedatasupported = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.LogonResponse.prototype.clearHistoricalpricedatasupported = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasHistoricalpricedatasupported = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint32 ResubscribeWhenMarketDataFeedAvailable = 14;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getResubscribewhenmarketdatafeedavailable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setResubscribewhenmarketdatafeedavailable = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.LogonResponse.prototype.clearResubscribewhenmarketdatafeedavailable = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasResubscribewhenmarketdatafeedavailable = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional uint32 MarketDepthIsSupported = 15;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getMarketdepthissupported = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setMarketdepthissupported = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.DTC_PB.LogonResponse.prototype.clearMarketdepthissupported = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasMarketdepthissupported = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional uint32 OneHistoricalPriceDataRequestPerConnection = 16;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getOnehistoricalpricedatarequestperconnection = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setOnehistoricalpricedatarequestperconnection = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.DTC_PB.LogonResponse.prototype.clearOnehistoricalpricedatarequestperconnection = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasOnehistoricalpricedatarequestperconnection = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional uint32 BracketOrdersSupported = 17;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getBracketorderssupported = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setBracketorderssupported = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.DTC_PB.LogonResponse.prototype.clearBracketorderssupported = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasBracketorderssupported = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional uint32 UseIntegerPriceOrderMessages = 18;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getUseintegerpriceordermessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setUseintegerpriceordermessages = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.DTC_PB.LogonResponse.prototype.clearUseintegerpriceordermessages = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasUseintegerpriceordermessages = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional uint32 UsesMultiplePositionsPerSymbolAndTradeAccount = 19;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getUsesmultiplepositionspersymbolandtradeaccount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setUsesmultiplepositionspersymbolandtradeaccount = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.DTC_PB.LogonResponse.prototype.clearUsesmultiplepositionspersymbolandtradeaccount = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasUsesmultiplepositionspersymbolandtradeaccount = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint32 MarketDataSupported = 20;
 * @return {number}
 */
proto.DTC_PB.LogonResponse.prototype.getMarketdatasupported = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.DTC_PB.LogonResponse.prototype.setMarketdatasupported = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.DTC_PB.LogonResponse.prototype.clearMarketdatasupported = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.LogonResponse.prototype.hasMarketdatasupported = function() {
  return jspb.Message.getField(this, 20) != null;
};



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
proto.DTC_PB.Logoff = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.Logoff, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.Logoff.displayName = 'proto.DTC_PB.Logoff';
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
proto.DTC_PB.Logoff.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.Logoff.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.Logoff} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.Logoff.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getField(msg, 1),
    donotreconnect: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.Logoff}
 */
proto.DTC_PB.Logoff.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.Logoff;
  return proto.DTC_PB.Logoff.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.Logoff} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.Logoff}
 */
proto.DTC_PB.Logoff.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDonotreconnect(value);
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
proto.DTC_PB.Logoff.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.Logoff.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.Logoff} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.Logoff.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string Reason = 1;
 * @return {string}
 */
proto.DTC_PB.Logoff.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.Logoff.prototype.setReason = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.Logoff.prototype.clearReason = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.Logoff.prototype.hasReason = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 DoNotReconnect = 2;
 * @return {number}
 */
proto.DTC_PB.Logoff.prototype.getDonotreconnect = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.Logoff.prototype.setDonotreconnect = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.Logoff.prototype.clearDonotreconnect = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.Logoff.prototype.hasDonotreconnect = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.Heartbeat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.Heartbeat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.Heartbeat.displayName = 'proto.DTC_PB.Heartbeat';
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
proto.DTC_PB.Heartbeat.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.Heartbeat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.Heartbeat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.Heartbeat.toObject = function(includeInstance, msg) {
  var f, obj = {
    numdroppedmessages: jspb.Message.getField(msg, 1),
    currentdatetime: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.Heartbeat}
 */
proto.DTC_PB.Heartbeat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.Heartbeat;
  return proto.DTC_PB.Heartbeat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.Heartbeat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.Heartbeat}
 */
proto.DTC_PB.Heartbeat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumdroppedmessages(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setCurrentdatetime(value);
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
proto.DTC_PB.Heartbeat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.Heartbeat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.Heartbeat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.Heartbeat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeSfixed64(
      2,
      f
    );
  }
};


/**
 * optional uint32 NumDroppedMessages = 1;
 * @return {number}
 */
proto.DTC_PB.Heartbeat.prototype.getNumdroppedmessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.Heartbeat.prototype.setNumdroppedmessages = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.Heartbeat.prototype.clearNumdroppedmessages = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.Heartbeat.prototype.hasNumdroppedmessages = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sfixed64 CurrentDateTime = 2;
 * @return {number}
 */
proto.DTC_PB.Heartbeat.prototype.getCurrentdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.Heartbeat.prototype.setCurrentdatetime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.Heartbeat.prototype.clearCurrentdatetime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.Heartbeat.prototype.hasCurrentdatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.MarketDataFeedStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataFeedStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataFeedStatus.displayName = 'proto.DTC_PB.MarketDataFeedStatus';
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
proto.DTC_PB.MarketDataFeedStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataFeedStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataFeedStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataFeedStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getField(msg, 1)
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
 * @return {!proto.DTC_PB.MarketDataFeedStatus}
 */
proto.DTC_PB.MarketDataFeedStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataFeedStatus;
  return proto.DTC_PB.MarketDataFeedStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataFeedStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataFeedStatus}
 */
proto.DTC_PB.MarketDataFeedStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.DTC_PB.MarketDataFeedStatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.DTC_PB.MarketDataFeedStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataFeedStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataFeedStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataFeedStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.DTC_PB.MarketDataFeedStatusEnum} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional MarketDataFeedStatusEnum Status = 1;
 * @return {!proto.DTC_PB.MarketDataFeedStatusEnum}
 */
proto.DTC_PB.MarketDataFeedStatus.prototype.getStatus = function() {
  return /** @type {!proto.DTC_PB.MarketDataFeedStatusEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.DTC_PB.MarketDataFeedStatusEnum} value */
proto.DTC_PB.MarketDataFeedStatus.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataFeedStatus.prototype.clearStatus = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataFeedStatus.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.DTC_PB.MarketDataFeedSymbolStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataFeedSymbolStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataFeedSymbolStatus.displayName = 'proto.DTC_PB.MarketDataFeedSymbolStatus';
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
proto.DTC_PB.MarketDataFeedSymbolStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataFeedSymbolStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataFeedSymbolStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataFeedSymbolStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    status: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.MarketDataFeedSymbolStatus}
 */
proto.DTC_PB.MarketDataFeedSymbolStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataFeedSymbolStatus;
  return proto.DTC_PB.MarketDataFeedSymbolStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataFeedSymbolStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataFeedSymbolStatus}
 */
proto.DTC_PB.MarketDataFeedSymbolStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.MarketDataFeedStatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.DTC_PB.MarketDataFeedSymbolStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataFeedSymbolStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataFeedSymbolStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataFeedSymbolStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.MarketDataFeedStatusEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataFeedSymbolStatus.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataFeedSymbolStatus.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataFeedSymbolStatus.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataFeedSymbolStatus.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MarketDataFeedStatusEnum Status = 2;
 * @return {!proto.DTC_PB.MarketDataFeedStatusEnum}
 */
proto.DTC_PB.MarketDataFeedSymbolStatus.prototype.getStatus = function() {
  return /** @type {!proto.DTC_PB.MarketDataFeedStatusEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/** @param {!proto.DTC_PB.MarketDataFeedStatusEnum} value */
proto.DTC_PB.MarketDataFeedSymbolStatus.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataFeedSymbolStatus.prototype.clearStatus = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataFeedSymbolStatus.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.TradingSymbolStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.TradingSymbolStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.TradingSymbolStatus.displayName = 'proto.DTC_PB.TradingSymbolStatus';
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
proto.DTC_PB.TradingSymbolStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.TradingSymbolStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.TradingSymbolStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.TradingSymbolStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    status: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.TradingSymbolStatus}
 */
proto.DTC_PB.TradingSymbolStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.TradingSymbolStatus;
  return proto.DTC_PB.TradingSymbolStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.TradingSymbolStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.TradingSymbolStatus}
 */
proto.DTC_PB.TradingSymbolStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.TradingStatusEnum} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.DTC_PB.TradingSymbolStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.TradingSymbolStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.TradingSymbolStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.TradingSymbolStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TradingStatusEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.TradingSymbolStatus.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.TradingSymbolStatus.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.TradingSymbolStatus.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.TradingSymbolStatus.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TradingStatusEnum Status = 2;
 * @return {!proto.DTC_PB.TradingStatusEnum}
 */
proto.DTC_PB.TradingSymbolStatus.prototype.getStatus = function() {
  return /** @type {!proto.DTC_PB.TradingStatusEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.TradingStatusEnum} value */
proto.DTC_PB.TradingSymbolStatus.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.TradingSymbolStatus.prototype.clearStatus = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.TradingSymbolStatus.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.MarketDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataRequest.displayName = 'proto.DTC_PB.MarketDataRequest';
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
proto.DTC_PB.MarketDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestaction: jspb.Message.getField(msg, 1),
    symbolid: jspb.Message.getField(msg, 2),
    symbol: jspb.Message.getField(msg, 3),
    exchange: jspb.Message.getField(msg, 4)
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
 * @return {!proto.DTC_PB.MarketDataRequest}
 */
proto.DTC_PB.MarketDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataRequest;
  return proto.DTC_PB.MarketDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataRequest}
 */
proto.DTC_PB.MarketDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.DTC_PB.RequestActionEnum} */ (reader.readEnum());
      msg.setRequestaction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
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
proto.DTC_PB.MarketDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.DTC_PB.RequestActionEnum} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional RequestActionEnum RequestAction = 1;
 * @return {!proto.DTC_PB.RequestActionEnum}
 */
proto.DTC_PB.MarketDataRequest.prototype.getRequestaction = function() {
  return /** @type {!proto.DTC_PB.RequestActionEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.DTC_PB.RequestActionEnum} value */
proto.DTC_PB.MarketDataRequest.prototype.setRequestaction = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataRequest.prototype.clearRequestaction = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataRequest.prototype.hasRequestaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 SymbolID = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataRequest.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataRequest.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataRequest.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataRequest.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Symbol = 3;
 * @return {string}
 */
proto.DTC_PB.MarketDataRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.MarketDataRequest.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataRequest.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataRequest.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string Exchange = 4;
 * @return {string}
 */
proto.DTC_PB.MarketDataRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.MarketDataRequest.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataRequest.prototype.clearExchange = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.DTC_PB.MarketDepthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDepthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDepthRequest.displayName = 'proto.DTC_PB.MarketDepthRequest';
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
proto.DTC_PB.MarketDepthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDepthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDepthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestaction: jspb.Message.getField(msg, 1),
    symbolid: jspb.Message.getField(msg, 2),
    symbol: jspb.Message.getField(msg, 3),
    exchange: jspb.Message.getField(msg, 4),
    numlevels: jspb.Message.getField(msg, 5)
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
 * @return {!proto.DTC_PB.MarketDepthRequest}
 */
proto.DTC_PB.MarketDepthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDepthRequest;
  return proto.DTC_PB.MarketDepthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDepthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDepthRequest}
 */
proto.DTC_PB.MarketDepthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.DTC_PB.RequestActionEnum} */ (reader.readEnum());
      msg.setRequestaction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumlevels(value);
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
proto.DTC_PB.MarketDepthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDepthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDepthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.DTC_PB.RequestActionEnum} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional RequestActionEnum RequestAction = 1;
 * @return {!proto.DTC_PB.RequestActionEnum}
 */
proto.DTC_PB.MarketDepthRequest.prototype.getRequestaction = function() {
  return /** @type {!proto.DTC_PB.RequestActionEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.DTC_PB.RequestActionEnum} value */
proto.DTC_PB.MarketDepthRequest.prototype.setRequestaction = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDepthRequest.prototype.clearRequestaction = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthRequest.prototype.hasRequestaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 SymbolID = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDepthRequest.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthRequest.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDepthRequest.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthRequest.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Symbol = 3;
 * @return {string}
 */
proto.DTC_PB.MarketDepthRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.MarketDepthRequest.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDepthRequest.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthRequest.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string Exchange = 4;
 * @return {string}
 */
proto.DTC_PB.MarketDepthRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.MarketDepthRequest.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDepthRequest.prototype.clearExchange = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 NumLevels = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDepthRequest.prototype.getNumlevels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthRequest.prototype.setNumlevels = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDepthRequest.prototype.clearNumlevels = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthRequest.prototype.hasNumlevels = function() {
  return jspb.Message.getField(this, 5) != null;
};



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
proto.DTC_PB.MarketDataReject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataReject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataReject.displayName = 'proto.DTC_PB.MarketDataReject';
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
proto.DTC_PB.MarketDataReject.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataReject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataReject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataReject.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    rejecttext: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.MarketDataReject}
 */
proto.DTC_PB.MarketDataReject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataReject;
  return proto.DTC_PB.MarketDataReject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataReject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataReject}
 */
proto.DTC_PB.MarketDataReject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejecttext(value);
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
proto.DTC_PB.MarketDataReject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataReject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataReject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataReject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataReject.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataReject.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataReject.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataReject.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string RejectText = 2;
 * @return {string}
 */
proto.DTC_PB.MarketDataReject.prototype.getRejecttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.MarketDataReject.prototype.setRejecttext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataReject.prototype.clearRejecttext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataReject.prototype.hasRejecttext = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.MarketDataSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataSnapshot.displayName = 'proto.DTC_PB.MarketDataSnapshot';
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
proto.DTC_PB.MarketDataSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    sessionsettlementprice: jspb.Message.getOptionalFloatingPointField(msg, 2),
    sessionopenprice: jspb.Message.getOptionalFloatingPointField(msg, 3),
    sessionhighprice: jspb.Message.getOptionalFloatingPointField(msg, 4),
    sessionlowprice: jspb.Message.getOptionalFloatingPointField(msg, 5),
    sessionvolume: jspb.Message.getOptionalFloatingPointField(msg, 6),
    sessionnumtrades: jspb.Message.getField(msg, 7),
    openinterest: jspb.Message.getField(msg, 8),
    bidprice: jspb.Message.getOptionalFloatingPointField(msg, 9),
    askprice: jspb.Message.getOptionalFloatingPointField(msg, 10),
    askquantity: jspb.Message.getOptionalFloatingPointField(msg, 11),
    bidquantity: jspb.Message.getOptionalFloatingPointField(msg, 12),
    lasttradeprice: jspb.Message.getOptionalFloatingPointField(msg, 13),
    lasttradevolume: jspb.Message.getOptionalFloatingPointField(msg, 14),
    lasttradedatetime: jspb.Message.getOptionalFloatingPointField(msg, 15),
    bidaskdatetime: jspb.Message.getOptionalFloatingPointField(msg, 16),
    sessionsettlementdatetime: jspb.Message.getField(msg, 17),
    tradingsessiondate: jspb.Message.getField(msg, 18),
    tradingstatus: jspb.Message.getField(msg, 19)
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
 * @return {!proto.DTC_PB.MarketDataSnapshot}
 */
proto.DTC_PB.MarketDataSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataSnapshot;
  return proto.DTC_PB.MarketDataSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataSnapshot}
 */
proto.DTC_PB.MarketDataSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionsettlementprice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionopenprice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionhighprice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionlowprice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSessionvolume(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSessionnumtrades(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOpeninterest(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidprice(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAskprice(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAskquantity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidquantity(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLasttradeprice(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLasttradevolume(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLasttradedatetime(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidaskdatetime(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSessionsettlementdatetime(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
      break;
    case 19:
      var value = /** @type {!proto.DTC_PB.TradingStatusEnum} */ (reader.readEnum());
      msg.setTradingstatus(value);
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
proto.DTC_PB.MarketDataSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TradingStatusEnum} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeEnum(
      19,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double SessionSettlementPrice = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getSessionsettlementprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setSessionsettlementprice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearSessionsettlementprice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasSessionsettlementprice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double SessionOpenPrice = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getSessionopenprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setSessionopenprice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearSessionopenprice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasSessionopenprice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double SessionHighPrice = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getSessionhighprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setSessionhighprice = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearSessionhighprice = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasSessionhighprice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double SessionLowPrice = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getSessionlowprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setSessionlowprice = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearSessionlowprice = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasSessionlowprice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double SessionVolume = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getSessionvolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setSessionvolume = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearSessionvolume = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasSessionvolume = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 SessionNumTrades = 7;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getSessionnumtrades = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setSessionnumtrades = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearSessionnumtrades = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasSessionnumtrades = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 OpenInterest = 8;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getOpeninterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setOpeninterest = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearOpeninterest = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasOpeninterest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double BidPrice = 9;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getBidprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setBidprice = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearBidprice = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasBidprice = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double AskPrice = 10;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getAskprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setAskprice = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearAskprice = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasAskprice = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double AskQuantity = 11;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getAskquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 11, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setAskquantity = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearAskquantity = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasAskquantity = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double BidQuantity = 12;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getBidquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 12, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setBidquantity = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearBidquantity = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasBidquantity = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double LastTradePrice = 13;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getLasttradeprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 13, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setLasttradeprice = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearLasttradeprice = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasLasttradeprice = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional double LastTradeVolume = 14;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getLasttradevolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 14, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setLasttradevolume = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearLasttradevolume = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasLasttradevolume = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double LastTradeDateTime = 15;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getLasttradedatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 15, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setLasttradedatetime = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearLasttradedatetime = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasLasttradedatetime = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional double BidAskDateTime = 16;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getBidaskdatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 16, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setBidaskdatetime = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearBidaskdatetime = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasBidaskdatetime = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional uint32 SessionSettlementDateTime = 17;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getSessionsettlementdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setSessionsettlementdatetime = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearSessionsettlementdatetime = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasSessionsettlementdatetime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional uint32 TradingSessionDate = 18;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional TradingStatusEnum TradingStatus = 19;
 * @return {!proto.DTC_PB.TradingStatusEnum}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.getTradingstatus = function() {
  return /** @type {!proto.DTC_PB.TradingStatusEnum} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {!proto.DTC_PB.TradingStatusEnum} value */
proto.DTC_PB.MarketDataSnapshot.prototype.setTradingstatus = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.DTC_PB.MarketDataSnapshot.prototype.clearTradingstatus = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot.prototype.hasTradingstatus = function() {
  return jspb.Message.getField(this, 19) != null;
};



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
proto.DTC_PB.MarketDataSnapshot_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataSnapshot_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataSnapshot_Int.displayName = 'proto.DTC_PB.MarketDataSnapshot_Int';
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
proto.DTC_PB.MarketDataSnapshot_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataSnapshot_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataSnapshot_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataSnapshot_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    sessionsettlementprice: jspb.Message.getField(msg, 2),
    sessionopenprice: jspb.Message.getField(msg, 3),
    sessionhighprice: jspb.Message.getField(msg, 4),
    sessionlowprice: jspb.Message.getField(msg, 5),
    sessionvolume: jspb.Message.getField(msg, 6),
    sessionnumtrades: jspb.Message.getField(msg, 7),
    openinterest: jspb.Message.getField(msg, 8),
    bidprice: jspb.Message.getField(msg, 9),
    askprice: jspb.Message.getField(msg, 10),
    askquantity: jspb.Message.getField(msg, 11),
    bidquantity: jspb.Message.getField(msg, 12),
    lasttradeprice: jspb.Message.getField(msg, 13),
    lasttradevolume: jspb.Message.getField(msg, 14),
    lasttradedatetime: jspb.Message.getOptionalFloatingPointField(msg, 15),
    bidaskdatetime: jspb.Message.getOptionalFloatingPointField(msg, 16),
    sessionsettlementdatetime: jspb.Message.getField(msg, 17),
    tradingsessiondate: jspb.Message.getField(msg, 18),
    tradingstatus: jspb.Message.getField(msg, 19)
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
 * @return {!proto.DTC_PB.MarketDataSnapshot_Int}
 */
proto.DTC_PB.MarketDataSnapshot_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataSnapshot_Int;
  return proto.DTC_PB.MarketDataSnapshot_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataSnapshot_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataSnapshot_Int}
 */
proto.DTC_PB.MarketDataSnapshot_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSessionsettlementprice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSessionopenprice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSessionhighprice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSessionlowprice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSessionvolume(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSessionnumtrades(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOpeninterest(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBidprice(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAskprice(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAskquantity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBidquantity(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLasttradeprice(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLasttradevolume(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLasttradedatetime(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidaskdatetime(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSessionsettlementdatetime(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
      break;
    case 19:
      var value = /** @type {!proto.DTC_PB.TradingStatusEnum} */ (reader.readEnum());
      msg.setTradingstatus(value);
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
proto.DTC_PB.MarketDataSnapshot_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataSnapshot_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataSnapshot_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataSnapshot_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TradingStatusEnum} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeEnum(
      19,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 SessionSettlementPrice = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getSessionsettlementprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setSessionsettlementprice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearSessionsettlementprice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasSessionsettlementprice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 SessionOpenPrice = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getSessionopenprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setSessionopenprice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearSessionopenprice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasSessionopenprice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 SessionHighPrice = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getSessionhighprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setSessionhighprice = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearSessionhighprice = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasSessionhighprice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 SessionLowPrice = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getSessionlowprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setSessionlowprice = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearSessionlowprice = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasSessionlowprice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 SessionVolume = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getSessionvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setSessionvolume = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearSessionvolume = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasSessionvolume = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 SessionNumTrades = 7;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getSessionnumtrades = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setSessionnumtrades = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearSessionnumtrades = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasSessionnumtrades = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 OpenInterest = 8;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getOpeninterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setOpeninterest = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearOpeninterest = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasOpeninterest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 BidPrice = 9;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getBidprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setBidprice = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearBidprice = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasBidprice = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 AskPrice = 10;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getAskprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setAskprice = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearAskprice = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasAskprice = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 AskQuantity = 11;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getAskquantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setAskquantity = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearAskquantity = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasAskquantity = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 BidQuantity = 12;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getBidquantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setBidquantity = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearBidquantity = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasBidquantity = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int32 LastTradePrice = 13;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getLasttradeprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setLasttradeprice = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearLasttradeprice = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasLasttradeprice = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 LastTradeVolume = 14;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getLasttradevolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setLasttradevolume = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearLasttradevolume = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasLasttradevolume = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double LastTradeDateTime = 15;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getLasttradedatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 15, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setLasttradedatetime = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearLasttradedatetime = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasLasttradedatetime = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional double BidAskDateTime = 16;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getBidaskdatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 16, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setBidaskdatetime = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearBidaskdatetime = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasBidaskdatetime = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional uint32 SessionSettlementDateTime = 17;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getSessionsettlementdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setSessionsettlementdatetime = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearSessionsettlementdatetime = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasSessionsettlementdatetime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional uint32 TradingSessionDate = 18;
 * @return {number}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional TradingStatusEnum TradingStatus = 19;
 * @return {!proto.DTC_PB.TradingStatusEnum}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.getTradingstatus = function() {
  return /** @type {!proto.DTC_PB.TradingStatusEnum} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {!proto.DTC_PB.TradingStatusEnum} value */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.setTradingstatus = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.DTC_PB.MarketDataSnapshot_Int.prototype.clearTradingstatus = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataSnapshot_Int.prototype.hasTradingstatus = function() {
  return jspb.Message.getField(this, 19) != null;
};



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
proto.DTC_PB.DepthEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.DepthEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.DepthEntry.displayName = 'proto.DTC_PB.DepthEntry';
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
proto.DTC_PB.DepthEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.DepthEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.DepthEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.DepthEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getOptionalFloatingPointField(msg, 1),
    quantity: jspb.Message.getOptionalFloatingPointField(msg, 12)
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
 * @return {!proto.DTC_PB.DepthEntry}
 */
proto.DTC_PB.DepthEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.DepthEntry;
  return proto.DTC_PB.DepthEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.DepthEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.DepthEntry}
 */
proto.DTC_PB.DepthEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQuantity(value);
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
proto.DTC_PB.DepthEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.DepthEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.DepthEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.DepthEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeFloat(
      12,
      f
    );
  }
};


/**
 * optional double Price = 1;
 * @return {number}
 */
proto.DTC_PB.DepthEntry.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.DTC_PB.DepthEntry.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.DepthEntry.prototype.clearPrice = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.DepthEntry.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float Quantity = 12;
 * @return {number}
 */
proto.DTC_PB.DepthEntry.prototype.getQuantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 12, 0.0));
};


/** @param {number} value */
proto.DTC_PB.DepthEntry.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.DepthEntry.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.DepthEntry.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 12) != null;
};



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
proto.DTC_PB.MarketDepthFullUpdate20 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DTC_PB.MarketDepthFullUpdate20.repeatedFields_, null);
};
goog.inherits(proto.DTC_PB.MarketDepthFullUpdate20, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDepthFullUpdate20.displayName = 'proto.DTC_PB.MarketDepthFullUpdate20';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DTC_PB.MarketDepthFullUpdate20.repeatedFields_ = [2,3];



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
proto.DTC_PB.MarketDepthFullUpdate20.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDepthFullUpdate20.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDepthFullUpdate20} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthFullUpdate20.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    biddepthList: jspb.Message.toObjectList(msg.getBiddepthList(),
    proto.DTC_PB.DepthEntry.toObject, includeInstance),
    askdepthList: jspb.Message.toObjectList(msg.getAskdepthList(),
    proto.DTC_PB.DepthEntry.toObject, includeInstance)
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
 * @return {!proto.DTC_PB.MarketDepthFullUpdate20}
 */
proto.DTC_PB.MarketDepthFullUpdate20.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDepthFullUpdate20;
  return proto.DTC_PB.MarketDepthFullUpdate20.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDepthFullUpdate20} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDepthFullUpdate20}
 */
proto.DTC_PB.MarketDepthFullUpdate20.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = new proto.DTC_PB.DepthEntry;
      reader.readMessage(value,proto.DTC_PB.DepthEntry.deserializeBinaryFromReader);
      msg.addBiddepth(value);
      break;
    case 3:
      var value = new proto.DTC_PB.DepthEntry;
      reader.readMessage(value,proto.DTC_PB.DepthEntry.deserializeBinaryFromReader);
      msg.addAskdepth(value);
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
proto.DTC_PB.MarketDepthFullUpdate20.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDepthFullUpdate20.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDepthFullUpdate20} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthFullUpdate20.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBiddepthList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.DTC_PB.DepthEntry.serializeBinaryToWriter
    );
  }
  f = message.getAskdepthList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.DTC_PB.DepthEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDepthFullUpdate20.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthFullUpdate20.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDepthFullUpdate20.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthFullUpdate20.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DepthEntry BidDepth = 2;
 * @return {!Array<!proto.DTC_PB.DepthEntry>}
 */
proto.DTC_PB.MarketDepthFullUpdate20.prototype.getBiddepthList = function() {
  return /** @type{!Array<!proto.DTC_PB.DepthEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DTC_PB.DepthEntry, 2));
};


/** @param {!Array<!proto.DTC_PB.DepthEntry>} value */
proto.DTC_PB.MarketDepthFullUpdate20.prototype.setBiddepthList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.DTC_PB.DepthEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DTC_PB.DepthEntry}
 */
proto.DTC_PB.MarketDepthFullUpdate20.prototype.addBiddepth = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.DTC_PB.DepthEntry, opt_index);
};


proto.DTC_PB.MarketDepthFullUpdate20.prototype.clearBiddepthList = function() {
  this.setBiddepthList([]);
};


/**
 * repeated DepthEntry AskDepth = 3;
 * @return {!Array<!proto.DTC_PB.DepthEntry>}
 */
proto.DTC_PB.MarketDepthFullUpdate20.prototype.getAskdepthList = function() {
  return /** @type{!Array<!proto.DTC_PB.DepthEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DTC_PB.DepthEntry, 3));
};


/** @param {!Array<!proto.DTC_PB.DepthEntry>} value */
proto.DTC_PB.MarketDepthFullUpdate20.prototype.setAskdepthList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.DTC_PB.DepthEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DTC_PB.DepthEntry}
 */
proto.DTC_PB.MarketDepthFullUpdate20.prototype.addAskdepth = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.DTC_PB.DepthEntry, opt_index);
};


proto.DTC_PB.MarketDepthFullUpdate20.prototype.clearAskdepthList = function() {
  this.setAskdepthList([]);
};



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
proto.DTC_PB.MarketDepthFullUpdate10 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DTC_PB.MarketDepthFullUpdate10.repeatedFields_, null);
};
goog.inherits(proto.DTC_PB.MarketDepthFullUpdate10, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDepthFullUpdate10.displayName = 'proto.DTC_PB.MarketDepthFullUpdate10';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DTC_PB.MarketDepthFullUpdate10.repeatedFields_ = [2,3];



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
proto.DTC_PB.MarketDepthFullUpdate10.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDepthFullUpdate10.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDepthFullUpdate10} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthFullUpdate10.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    biddepthList: jspb.Message.toObjectList(msg.getBiddepthList(),
    proto.DTC_PB.DepthEntry.toObject, includeInstance),
    askdepthList: jspb.Message.toObjectList(msg.getAskdepthList(),
    proto.DTC_PB.DepthEntry.toObject, includeInstance)
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
 * @return {!proto.DTC_PB.MarketDepthFullUpdate10}
 */
proto.DTC_PB.MarketDepthFullUpdate10.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDepthFullUpdate10;
  return proto.DTC_PB.MarketDepthFullUpdate10.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDepthFullUpdate10} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDepthFullUpdate10}
 */
proto.DTC_PB.MarketDepthFullUpdate10.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = new proto.DTC_PB.DepthEntry;
      reader.readMessage(value,proto.DTC_PB.DepthEntry.deserializeBinaryFromReader);
      msg.addBiddepth(value);
      break;
    case 3:
      var value = new proto.DTC_PB.DepthEntry;
      reader.readMessage(value,proto.DTC_PB.DepthEntry.deserializeBinaryFromReader);
      msg.addAskdepth(value);
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
proto.DTC_PB.MarketDepthFullUpdate10.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDepthFullUpdate10.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDepthFullUpdate10} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthFullUpdate10.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBiddepthList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.DTC_PB.DepthEntry.serializeBinaryToWriter
    );
  }
  f = message.getAskdepthList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.DTC_PB.DepthEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDepthFullUpdate10.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthFullUpdate10.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDepthFullUpdate10.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthFullUpdate10.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DepthEntry BidDepth = 2;
 * @return {!Array<!proto.DTC_PB.DepthEntry>}
 */
proto.DTC_PB.MarketDepthFullUpdate10.prototype.getBiddepthList = function() {
  return /** @type{!Array<!proto.DTC_PB.DepthEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DTC_PB.DepthEntry, 2));
};


/** @param {!Array<!proto.DTC_PB.DepthEntry>} value */
proto.DTC_PB.MarketDepthFullUpdate10.prototype.setBiddepthList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.DTC_PB.DepthEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DTC_PB.DepthEntry}
 */
proto.DTC_PB.MarketDepthFullUpdate10.prototype.addBiddepth = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.DTC_PB.DepthEntry, opt_index);
};


proto.DTC_PB.MarketDepthFullUpdate10.prototype.clearBiddepthList = function() {
  this.setBiddepthList([]);
};


/**
 * repeated DepthEntry AskDepth = 3;
 * @return {!Array<!proto.DTC_PB.DepthEntry>}
 */
proto.DTC_PB.MarketDepthFullUpdate10.prototype.getAskdepthList = function() {
  return /** @type{!Array<!proto.DTC_PB.DepthEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DTC_PB.DepthEntry, 3));
};


/** @param {!Array<!proto.DTC_PB.DepthEntry>} value */
proto.DTC_PB.MarketDepthFullUpdate10.prototype.setAskdepthList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.DTC_PB.DepthEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DTC_PB.DepthEntry}
 */
proto.DTC_PB.MarketDepthFullUpdate10.prototype.addAskdepth = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.DTC_PB.DepthEntry, opt_index);
};


proto.DTC_PB.MarketDepthFullUpdate10.prototype.clearAskdepthList = function() {
  this.setAskdepthList([]);
};



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
proto.DTC_PB.MarketDepthSnapshotLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDepthSnapshotLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDepthSnapshotLevel.displayName = 'proto.DTC_PB.MarketDepthSnapshotLevel';
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
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDepthSnapshotLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDepthSnapshotLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthSnapshotLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    side: jspb.Message.getField(msg, 2),
    price: jspb.Message.getOptionalFloatingPointField(msg, 3),
    quantity: jspb.Message.getOptionalFloatingPointField(msg, 4),
    level: jspb.Message.getField(msg, 5),
    isfirstmessageinbatch: jspb.Message.getField(msg, 6),
    islastmessageinbatch: jspb.Message.getField(msg, 7),
    datetime: jspb.Message.getOptionalFloatingPointField(msg, 8),
    numorders: jspb.Message.getField(msg, 9)
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
 * @return {!proto.DTC_PB.MarketDepthSnapshotLevel}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDepthSnapshotLevel;
  return proto.DTC_PB.MarketDepthSnapshotLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDepthSnapshotLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDepthSnapshotLevel}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsfirstmessageinbatch(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIslastmessageinbatch(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumorders(value);
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
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDepthSnapshotLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDepthSnapshotLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthSnapshotLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AtBidOrAskEnum Side = 2;
 * @return {!proto.DTC_PB.AtBidOrAskEnum}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.getSide = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum} value */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.setSide = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel.prototype.clearSide = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.hasSide = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double Price = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel.prototype.clearPrice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double Quantity = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.getQuantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 Level = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.setLevel = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel.prototype.clearLevel = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.hasLevel = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 IsFirstMessageInBatch = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.getIsfirstmessageinbatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.setIsfirstmessageinbatch = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel.prototype.clearIsfirstmessageinbatch = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.hasIsfirstmessageinbatch = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 IsLastMessageInBatch = 7;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.getIslastmessageinbatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.setIslastmessageinbatch = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel.prototype.clearIslastmessageinbatch = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.hasIslastmessageinbatch = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double DateTime = 8;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 NumOrders = 9;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.getNumorders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.setNumorders = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel.prototype.clearNumorders = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel.prototype.hasNumorders = function() {
  return jspb.Message.getField(this, 9) != null;
};



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
proto.DTC_PB.MarketDepthSnapshotLevel_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDepthSnapshotLevel_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDepthSnapshotLevel_Int.displayName = 'proto.DTC_PB.MarketDepthSnapshotLevel_Int';
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
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDepthSnapshotLevel_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDepthSnapshotLevel_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    side: jspb.Message.getField(msg, 2),
    price: jspb.Message.getField(msg, 3),
    quantity: jspb.Message.getField(msg, 4),
    level: jspb.Message.getField(msg, 5),
    isfirstmessageinbatch: jspb.Message.getField(msg, 6),
    islastmessageinbatch: jspb.Message.getField(msg, 7),
    datetime: jspb.Message.getOptionalFloatingPointField(msg, 8),
    numorders: jspb.Message.getField(msg, 9)
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
 * @return {!proto.DTC_PB.MarketDepthSnapshotLevel_Int}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDepthSnapshotLevel_Int;
  return proto.DTC_PB.MarketDepthSnapshotLevel_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDepthSnapshotLevel_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDepthSnapshotLevel_Int}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsfirstmessageinbatch(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIslastmessageinbatch(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumorders(value);
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
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDepthSnapshotLevel_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDepthSnapshotLevel_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AtBidOrAskEnum Side = 2;
 * @return {!proto.DTC_PB.AtBidOrAskEnum}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.getSide = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum} value */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.setSide = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.clearSide = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.hasSide = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 Price = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.clearPrice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 Quantity = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 Level = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.setLevel = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.clearLevel = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.hasLevel = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 IsFirstMessageInBatch = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.getIsfirstmessageinbatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.setIsfirstmessageinbatch = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.clearIsfirstmessageinbatch = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.hasIsfirstmessageinbatch = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 IsLastMessageInBatch = 7;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.getIslastmessageinbatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.setIslastmessageinbatch = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.clearIslastmessageinbatch = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.hasIslastmessageinbatch = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double DateTime = 8;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 NumOrders = 9;
 * @return {number}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.getNumorders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.setNumorders = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.clearNumorders = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthSnapshotLevel_Int.prototype.hasNumorders = function() {
  return jspb.Message.getField(this, 9) != null;
};



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
proto.DTC_PB.MarketDepthUpdateLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDepthUpdateLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDepthUpdateLevel.displayName = 'proto.DTC_PB.MarketDepthUpdateLevel';
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
proto.DTC_PB.MarketDepthUpdateLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDepthUpdateLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDepthUpdateLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthUpdateLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    side: jspb.Message.getField(msg, 2),
    price: jspb.Message.getOptionalFloatingPointField(msg, 3),
    quantity: jspb.Message.getOptionalFloatingPointField(msg, 4),
    updatetype: jspb.Message.getField(msg, 5),
    datetime: jspb.Message.getOptionalFloatingPointField(msg, 6),
    numorders: jspb.Message.getField(msg, 7)
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
 * @return {!proto.DTC_PB.MarketDepthUpdateLevel}
 */
proto.DTC_PB.MarketDepthUpdateLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDepthUpdateLevel;
  return proto.DTC_PB.MarketDepthUpdateLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDepthUpdateLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDepthUpdateLevel}
 */
proto.DTC_PB.MarketDepthUpdateLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity(value);
      break;
    case 5:
      var value = /** @type {!proto.DTC_PB.MarketDepthUpdateTypeEnum} */ (reader.readEnum());
      msg.setUpdatetype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumorders(value);
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
proto.DTC_PB.MarketDepthUpdateLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDepthUpdateLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDepthUpdateLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthUpdateLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.MarketDepthUpdateTypeEnum} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDepthUpdateLevel.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AtBidOrAskEnum Side = 2;
 * @return {!proto.DTC_PB.AtBidOrAskEnum}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.getSide = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum} value */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.setSide = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDepthUpdateLevel.prototype.clearSide = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.hasSide = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double Price = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDepthUpdateLevel.prototype.clearPrice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double Quantity = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.getQuantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDepthUpdateLevel.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MarketDepthUpdateTypeEnum UpdateType = 5;
 * @return {!proto.DTC_PB.MarketDepthUpdateTypeEnum}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.getUpdatetype = function() {
  return /** @type {!proto.DTC_PB.MarketDepthUpdateTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DTC_PB.MarketDepthUpdateTypeEnum} value */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.setUpdatetype = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDepthUpdateLevel.prototype.clearUpdatetype = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.hasUpdatetype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double DateTime = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDepthUpdateLevel.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 NumOrders = 7;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.getNumorders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.setNumorders = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.MarketDepthUpdateLevel.prototype.clearNumorders = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel.prototype.hasNumorders = function() {
  return jspb.Message.getField(this, 7) != null;
};



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
proto.DTC_PB.MarketDepthUpdateLevel_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDepthUpdateLevel_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDepthUpdateLevel_Int.displayName = 'proto.DTC_PB.MarketDepthUpdateLevel_Int';
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
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDepthUpdateLevel_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDepthUpdateLevel_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    side: jspb.Message.getField(msg, 2),
    price: jspb.Message.getField(msg, 3),
    quantity: jspb.Message.getField(msg, 4),
    updatetype: jspb.Message.getField(msg, 5),
    datetime: jspb.Message.getOptionalFloatingPointField(msg, 6),
    numorders: jspb.Message.getField(msg, 7)
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
 * @return {!proto.DTC_PB.MarketDepthUpdateLevel_Int}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDepthUpdateLevel_Int;
  return proto.DTC_PB.MarketDepthUpdateLevel_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDepthUpdateLevel_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDepthUpdateLevel_Int}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 5:
      var value = /** @type {!proto.DTC_PB.MarketDepthUpdateTypeEnum} */ (reader.readEnum());
      msg.setUpdatetype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumorders(value);
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
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDepthUpdateLevel_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDepthUpdateLevel_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.MarketDepthUpdateTypeEnum} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AtBidOrAskEnum Side = 2;
 * @return {!proto.DTC_PB.AtBidOrAskEnum}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.getSide = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum} value */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.setSide = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.clearSide = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.hasSide = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 Price = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.clearPrice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 Quantity = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MarketDepthUpdateTypeEnum UpdateType = 5;
 * @return {!proto.DTC_PB.MarketDepthUpdateTypeEnum}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.getUpdatetype = function() {
  return /** @type {!proto.DTC_PB.MarketDepthUpdateTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DTC_PB.MarketDepthUpdateTypeEnum} value */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.setUpdatetype = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.clearUpdatetype = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.hasUpdatetype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double DateTime = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 NumOrders = 7;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.getNumorders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.setNumorders = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.clearNumorders = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevel_Int.prototype.hasNumorders = function() {
  return jspb.Message.getField(this, 7) != null;
};



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
proto.DTC_PB.MarketDepthUpdateLevelCompact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDepthUpdateLevelCompact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDepthUpdateLevelCompact.displayName = 'proto.DTC_PB.MarketDepthUpdateLevelCompact';
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
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDepthUpdateLevelCompact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDepthUpdateLevelCompact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    side: jspb.Message.getField(msg, 2),
    price: jspb.Message.getOptionalFloatingPointField(msg, 3),
    quantity: jspb.Message.getOptionalFloatingPointField(msg, 4),
    updatetype: jspb.Message.getField(msg, 5),
    datetime: jspb.Message.getField(msg, 6),
    numorders: jspb.Message.getField(msg, 7)
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
 * @return {!proto.DTC_PB.MarketDepthUpdateLevelCompact}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDepthUpdateLevelCompact;
  return proto.DTC_PB.MarketDepthUpdateLevelCompact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDepthUpdateLevelCompact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDepthUpdateLevelCompact}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQuantity(value);
      break;
    case 5:
      var value = /** @type {!proto.DTC_PB.MarketDepthUpdateTypeEnum} */ (reader.readEnum());
      msg.setUpdatetype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDatetime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumorders(value);
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
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDepthUpdateLevelCompact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDepthUpdateLevelCompact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.MarketDepthUpdateTypeEnum} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AtBidOrAskEnum Side = 2;
 * @return {!proto.DTC_PB.AtBidOrAskEnum}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.getSide = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.setSide = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.clearSide = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.hasSide = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float Price = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.clearPrice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float Quantity = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.getQuantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MarketDepthUpdateTypeEnum UpdateType = 5;
 * @return {!proto.DTC_PB.MarketDepthUpdateTypeEnum}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.getUpdatetype = function() {
  return /** @type {!proto.DTC_PB.MarketDepthUpdateTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DTC_PB.MarketDepthUpdateTypeEnum} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.setUpdatetype = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.clearUpdatetype = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.hasUpdatetype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 DateTime = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 NumOrders = 7;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.getNumorders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.setNumorders = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.clearNumorders = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact.prototype.hasNumorders = function() {
  return jspb.Message.getField(this, 7) != null;
};



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
proto.DTC_PB.MarketDepthUpdateLevelCompact2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDepthUpdateLevelCompact2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDepthUpdateLevelCompact2.displayName = 'proto.DTC_PB.MarketDepthUpdateLevelCompact2';
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
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDepthUpdateLevelCompact2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDepthUpdateLevelCompact2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    side: jspb.Message.getField(msg, 2),
    updatetype: jspb.Message.getField(msg, 3),
    numorders: jspb.Message.getField(msg, 4),
    price: jspb.Message.getOptionalFloatingPointField(msg, 5),
    quantity: jspb.Message.getOptionalFloatingPointField(msg, 6),
    datetime: jspb.Message.getField(msg, 7)
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
 * @return {!proto.DTC_PB.MarketDepthUpdateLevelCompact2}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDepthUpdateLevelCompact2;
  return proto.DTC_PB.MarketDepthUpdateLevelCompact2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDepthUpdateLevelCompact2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDepthUpdateLevelCompact2}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSide(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUpdatetype(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumorders(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQuantity(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDatetime(value);
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
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDepthUpdateLevelCompact2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDepthUpdateLevelCompact2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 Side = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.getSide = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.setSide = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.clearSide = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.hasSide = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 UpdateType = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.getUpdatetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.setUpdatetype = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.clearUpdatetype = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.hasUpdatetype = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 NumOrders = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.getNumorders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.setNumorders = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.clearNumorders = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.hasNumorders = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float Price = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.clearPrice = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional float Quantity = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.getQuantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 DateTime = 7;
 * @return {number}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthUpdateLevelCompact2.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 7) != null;
};



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
proto.DTC_PB.MarketDataUpdateSessionSettlement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateSessionSettlement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateSessionSettlement.displayName = 'proto.DTC_PB.MarketDataUpdateSessionSettlement';
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
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateSessionSettlement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateSessionSettlement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    price: jspb.Message.getOptionalFloatingPointField(msg, 2),
    datetime: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateSessionSettlement}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateSessionSettlement;
  return proto.DTC_PB.MarketDataUpdateSessionSettlement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionSettlement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateSessionSettlement}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDatetime(value);
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
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateSessionSettlement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionSettlement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double Price = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.clearPrice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 DateTime = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateSessionSettlement_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.displayName = 'proto.DTC_PB.MarketDataUpdateSessionSettlement_Int';
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
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateSessionSettlement_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    price: jspb.Message.getField(msg, 2),
    datetime: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateSessionSettlement_Int}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateSessionSettlement_Int;
  return proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionSettlement_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateSessionSettlement_Int}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDatetime(value);
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
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionSettlement_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 Price = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.clearPrice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 DateTime = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionSettlement_Int.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateSessionOpen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateSessionOpen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateSessionOpen.displayName = 'proto.DTC_PB.MarketDataUpdateSessionOpen';
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
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateSessionOpen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateSessionOpen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionOpen.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    price: jspb.Message.getOptionalFloatingPointField(msg, 2),
    tradingsessiondate: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateSessionOpen}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateSessionOpen;
  return proto.DTC_PB.MarketDataUpdateSessionOpen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionOpen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateSessionOpen}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
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
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateSessionOpen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionOpen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionOpen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double Price = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.clearPrice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 TradingSessionDate = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateSessionOpen_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateSessionOpen_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateSessionOpen_Int.displayName = 'proto.DTC_PB.MarketDataUpdateSessionOpen_Int';
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
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateSessionOpen_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateSessionOpen_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    price: jspb.Message.getField(msg, 2),
    tradingsessiondate: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateSessionOpen_Int}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateSessionOpen_Int;
  return proto.DTC_PB.MarketDataUpdateSessionOpen_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionOpen_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateSessionOpen_Int}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
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
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateSessionOpen_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionOpen_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 Price = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.clearPrice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 TradingSessionDate = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionOpen_Int.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateSessionNumTrades = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateSessionNumTrades, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateSessionNumTrades.displayName = 'proto.DTC_PB.MarketDataUpdateSessionNumTrades';
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
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateSessionNumTrades.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateSessionNumTrades} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    numtrades: jspb.Message.getField(msg, 2),
    tradingsessiondate: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateSessionNumTrades}
 */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateSessionNumTrades;
  return proto.DTC_PB.MarketDataUpdateSessionNumTrades.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionNumTrades} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateSessionNumTrades}
 */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumtrades(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
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
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateSessionNumTrades.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionNumTrades} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 NumTrades = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.getNumtrades = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.setNumtrades = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.clearNumtrades = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.hasNumtrades = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 TradingSessionDate = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionNumTrades.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateTradingSessionDate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateTradingSessionDate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateTradingSessionDate.displayName = 'proto.DTC_PB.MarketDataUpdateTradingSessionDate';
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
proto.DTC_PB.MarketDataUpdateTradingSessionDate.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateTradingSessionDate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateTradingSessionDate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateTradingSessionDate.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    date: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.MarketDataUpdateTradingSessionDate}
 */
proto.DTC_PB.MarketDataUpdateTradingSessionDate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateTradingSessionDate;
  return proto.DTC_PB.MarketDataUpdateTradingSessionDate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateTradingSessionDate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateTradingSessionDate}
 */
proto.DTC_PB.MarketDataUpdateTradingSessionDate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDate(value);
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
proto.DTC_PB.MarketDataUpdateTradingSessionDate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateTradingSessionDate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateTradingSessionDate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateTradingSessionDate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTradingSessionDate.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTradingSessionDate.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateTradingSessionDate.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradingSessionDate.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 Date = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTradingSessionDate.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTradingSessionDate.prototype.setDate = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateTradingSessionDate.prototype.clearDate = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradingSessionDate.prototype.hasDate = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.MarketDepthReject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDepthReject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDepthReject.displayName = 'proto.DTC_PB.MarketDepthReject';
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
proto.DTC_PB.MarketDepthReject.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDepthReject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDepthReject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthReject.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    rejecttext: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.MarketDepthReject}
 */
proto.DTC_PB.MarketDepthReject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDepthReject;
  return proto.DTC_PB.MarketDepthReject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDepthReject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDepthReject}
 */
proto.DTC_PB.MarketDepthReject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejecttext(value);
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
proto.DTC_PB.MarketDepthReject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDepthReject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDepthReject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDepthReject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDepthReject.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDepthReject.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDepthReject.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthReject.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string RejectText = 2;
 * @return {string}
 */
proto.DTC_PB.MarketDepthReject.prototype.getRejecttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.MarketDepthReject.prototype.setRejecttext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDepthReject.prototype.clearRejecttext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDepthReject.prototype.hasRejecttext = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.MarketDataUpdateTrade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateTrade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateTrade.displayName = 'proto.DTC_PB.MarketDataUpdateTrade';
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
proto.DTC_PB.MarketDataUpdateTrade.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateTrade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateTrade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateTrade.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    atbidorask: jspb.Message.getField(msg, 2),
    price: jspb.Message.getOptionalFloatingPointField(msg, 3),
    volume: jspb.Message.getOptionalFloatingPointField(msg, 4),
    datetime: jspb.Message.getOptionalFloatingPointField(msg, 5)
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
 * @return {!proto.DTC_PB.MarketDataUpdateTrade}
 */
proto.DTC_PB.MarketDataUpdateTrade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateTrade;
  return proto.DTC_PB.MarketDataUpdateTrade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateTrade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateTrade}
 */
proto.DTC_PB.MarketDataUpdateTrade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (reader.readEnum());
      msg.setAtbidorask(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
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
proto.DTC_PB.MarketDataUpdateTrade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateTrade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateTrade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateTrade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTrade.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTrade.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateTrade.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTrade.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AtBidOrAskEnum AtBidOrAsk = 2;
 * @return {!proto.DTC_PB.AtBidOrAskEnum}
 */
proto.DTC_PB.MarketDataUpdateTrade.prototype.getAtbidorask = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum} value */
proto.DTC_PB.MarketDataUpdateTrade.prototype.setAtbidorask = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateTrade.prototype.clearAtbidorask = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTrade.prototype.hasAtbidorask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double Price = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTrade.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTrade.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateTrade.prototype.clearPrice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTrade.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double Volume = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTrade.prototype.getVolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTrade.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataUpdateTrade.prototype.clearVolume = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTrade.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double DateTime = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTrade.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTrade.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDataUpdateTrade.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTrade.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 5) != null;
};



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
proto.DTC_PB.MarketDataUpdateTrade_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateTrade_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateTrade_Int.displayName = 'proto.DTC_PB.MarketDataUpdateTrade_Int';
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
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateTrade_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateTrade_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    atbidorask: jspb.Message.getField(msg, 2),
    price: jspb.Message.getField(msg, 3),
    volume: jspb.Message.getField(msg, 4),
    datetime: jspb.Message.getOptionalFloatingPointField(msg, 5)
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
 * @return {!proto.DTC_PB.MarketDataUpdateTrade_Int}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateTrade_Int;
  return proto.DTC_PB.MarketDataUpdateTrade_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateTrade_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateTrade_Int}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (reader.readEnum());
      msg.setAtbidorask(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVolume(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
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
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateTrade_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateTrade_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AtBidOrAskEnum AtBidOrAsk = 2;
 * @return {!proto.DTC_PB.AtBidOrAskEnum}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.getAtbidorask = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum} value */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.setAtbidorask = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.clearAtbidorask = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.hasAtbidorask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 Price = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.clearPrice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 Volume = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.clearVolume = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double DateTime = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTrade_Int.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 5) != null;
};



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
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.displayName = 'proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator';
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
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    atbidorask: jspb.Message.getField(msg, 2),
    unbundledtradeindicator: jspb.Message.getField(msg, 3),
    price: jspb.Message.getOptionalFloatingPointField(msg, 4),
    volume: jspb.Message.getField(msg, 5),
    datetime: jspb.Message.getOptionalFloatingPointField(msg, 6)
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
 * @return {!proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator;
  return proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum8} */ (reader.readEnum());
      msg.setAtbidorask(value);
      break;
    case 3:
      var value = /** @type {!proto.DTC_PB.UnbundledTradeIndicatorEnum} */ (reader.readEnum());
      msg.setUnbundledtradeindicator(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVolume(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
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
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum8} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.UnbundledTradeIndicatorEnum} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AtBidOrAskEnum8 AtBidOrAsk = 2;
 * @return {!proto.DTC_PB.AtBidOrAskEnum8}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.getAtbidorask = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum8} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum8} value */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.setAtbidorask = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.clearAtbidorask = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.hasAtbidorask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UnbundledTradeIndicatorEnum UnbundledTradeIndicator = 3;
 * @return {!proto.DTC_PB.UnbundledTradeIndicatorEnum}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.getUnbundledtradeindicator = function() {
  return /** @type {!proto.DTC_PB.UnbundledTradeIndicatorEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.DTC_PB.UnbundledTradeIndicatorEnum} value */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.setUnbundledtradeindicator = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.clearUnbundledtradeindicator = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.hasUnbundledtradeindicator = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double Price = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.clearPrice = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 Volume = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.clearVolume = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double DateTime = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeWithUnbundledIndicator.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 6) != null;
};



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
proto.DTC_PB.MarketDataUpdateBidAsk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateBidAsk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateBidAsk.displayName = 'proto.DTC_PB.MarketDataUpdateBidAsk';
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
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateBidAsk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateBidAsk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateBidAsk.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    bidprice: jspb.Message.getOptionalFloatingPointField(msg, 2),
    bidquantity: jspb.Message.getOptionalFloatingPointField(msg, 3),
    askprice: jspb.Message.getOptionalFloatingPointField(msg, 4),
    askquantity: jspb.Message.getOptionalFloatingPointField(msg, 5),
    datetime: jspb.Message.getField(msg, 6)
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
 * @return {!proto.DTC_PB.MarketDataUpdateBidAsk}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateBidAsk;
  return proto.DTC_PB.MarketDataUpdateBidAsk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateBidAsk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateBidAsk}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidprice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBidquantity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAskprice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAskquantity(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setDatetime(value);
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
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateBidAsk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateBidAsk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateBidAsk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeSfixed32(
      6,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double BidPrice = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.getBidprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.setBidprice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk.prototype.clearBidprice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.hasBidprice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float BidQuantity = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.getBidquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.setBidquantity = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk.prototype.clearBidquantity = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.hasBidquantity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double AskPrice = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.getAskprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.setAskprice = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk.prototype.clearAskprice = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.hasAskprice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float AskQuantity = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.getAskquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.setAskquantity = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk.prototype.clearAskquantity = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.hasAskquantity = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional sfixed32 DateTime = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 6) != null;
};



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
proto.DTC_PB.MarketDataUpdateBidAsk_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateBidAsk_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateBidAsk_Int.displayName = 'proto.DTC_PB.MarketDataUpdateBidAsk_Int';
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
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateBidAsk_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateBidAsk_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    bidprice: jspb.Message.getField(msg, 2),
    bidquantity: jspb.Message.getField(msg, 3),
    askprice: jspb.Message.getField(msg, 4),
    askquantity: jspb.Message.getField(msg, 5),
    datetime: jspb.Message.getField(msg, 6)
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
 * @return {!proto.DTC_PB.MarketDataUpdateBidAsk_Int}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateBidAsk_Int;
  return proto.DTC_PB.MarketDataUpdateBidAsk_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateBidAsk_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateBidAsk_Int}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBidprice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBidquantity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAskprice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAskquantity(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setDatetime(value);
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
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateBidAsk_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateBidAsk_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeSfixed32(
      6,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 BidPrice = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.getBidprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.setBidprice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.clearBidprice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.hasBidprice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 BidQuantity = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.getBidquantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.setBidquantity = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.clearBidquantity = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.hasBidquantity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 AskPrice = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.getAskprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.setAskprice = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.clearAskprice = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.hasAskprice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 AskQuantity = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.getAskquantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.setAskquantity = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.clearAskquantity = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.hasAskquantity = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional sfixed32 DateTime = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAsk_Int.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 6) != null;
};



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
proto.DTC_PB.MarketDataUpdateBidAskCompact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateBidAskCompact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateBidAskCompact.displayName = 'proto.DTC_PB.MarketDataUpdateBidAskCompact';
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
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateBidAskCompact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateBidAskCompact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.toObject = function(includeInstance, msg) {
  var f, obj = {
    bidprice: jspb.Message.getOptionalFloatingPointField(msg, 1),
    bidquantity: jspb.Message.getOptionalFloatingPointField(msg, 2),
    askprice: jspb.Message.getOptionalFloatingPointField(msg, 3),
    askquantity: jspb.Message.getOptionalFloatingPointField(msg, 4),
    datetime: jspb.Message.getField(msg, 5),
    symbolid: jspb.Message.getField(msg, 6)
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
 * @return {!proto.DTC_PB.MarketDataUpdateBidAskCompact}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateBidAskCompact;
  return proto.DTC_PB.MarketDataUpdateBidAskCompact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateBidAskCompact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateBidAskCompact}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBidprice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBidquantity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAskprice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAskquantity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setDatetime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
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
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateBidAskCompact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateBidAskCompact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeSfixed32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional float BidPrice = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.getBidprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.setBidprice = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.clearBidprice = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.hasBidprice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float BidQuantity = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.getBidquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.setBidquantity = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.clearBidquantity = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.hasBidquantity = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float AskPrice = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.getAskprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.setAskprice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.clearAskprice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.hasAskprice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float AskQuantity = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.getAskquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.setAskquantity = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.clearAskquantity = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.hasAskquantity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional sfixed32 DateTime = 5;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 SymbolID = 6;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateBidAskCompact.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 6) != null;
};



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
proto.DTC_PB.MarketDataUpdateTradeCompact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateTradeCompact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateTradeCompact.displayName = 'proto.DTC_PB.MarketDataUpdateTradeCompact';
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
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateTradeCompact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateTradeCompact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getOptionalFloatingPointField(msg, 1),
    volume: jspb.Message.getOptionalFloatingPointField(msg, 2),
    datetime: jspb.Message.getField(msg, 3),
    symbolid: jspb.Message.getField(msg, 4),
    atbidorask: jspb.Message.getField(msg, 5)
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
 * @return {!proto.DTC_PB.MarketDataUpdateTradeCompact}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateTradeCompact;
  return proto.DTC_PB.MarketDataUpdateTradeCompact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateTradeCompact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateTradeCompact}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVolume(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setDatetime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 5:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (reader.readEnum());
      msg.setAtbidorask(value);
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
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateTradeCompact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateTradeCompact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeSfixed32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional float Price = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.clearPrice = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float Volume = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.getVolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.clearVolume = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional sfixed32 DateTime = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 SymbolID = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AtBidOrAskEnum AtBidOrAsk = 5;
 * @return {!proto.DTC_PB.AtBidOrAskEnum}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.getAtbidorask = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum} value */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.setAtbidorask = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.clearAtbidorask = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateTradeCompact.prototype.hasAtbidorask = function() {
  return jspb.Message.getField(this, 5) != null;
};



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
proto.DTC_PB.MarketDataUpdateSessionVolume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateSessionVolume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateSessionVolume.displayName = 'proto.DTC_PB.MarketDataUpdateSessionVolume';
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
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateSessionVolume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateSessionVolume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionVolume.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    volume: jspb.Message.getOptionalFloatingPointField(msg, 2),
    tradingsessiondate: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateSessionVolume}
 */
proto.DTC_PB.MarketDataUpdateSessionVolume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateSessionVolume;
  return proto.DTC_PB.MarketDataUpdateSessionVolume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionVolume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateSessionVolume}
 */
proto.DTC_PB.MarketDataUpdateSessionVolume.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
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
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateSessionVolume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionVolume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionVolume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double Volume = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.getVolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.clearVolume = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 TradingSessionDate = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionVolume.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateOpenInterest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateOpenInterest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateOpenInterest.displayName = 'proto.DTC_PB.MarketDataUpdateOpenInterest';
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
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateOpenInterest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateOpenInterest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateOpenInterest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    openinterest: jspb.Message.getField(msg, 2),
    tradingsessiondate: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateOpenInterest}
 */
proto.DTC_PB.MarketDataUpdateOpenInterest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateOpenInterest;
  return proto.DTC_PB.MarketDataUpdateOpenInterest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateOpenInterest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateOpenInterest}
 */
proto.DTC_PB.MarketDataUpdateOpenInterest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOpeninterest(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
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
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateOpenInterest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateOpenInterest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateOpenInterest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 OpenInterest = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.getOpeninterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.setOpeninterest = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.clearOpeninterest = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.hasOpeninterest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 TradingSessionDate = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateOpenInterest.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateSessionHigh = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateSessionHigh, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateSessionHigh.displayName = 'proto.DTC_PB.MarketDataUpdateSessionHigh';
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
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateSessionHigh.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateSessionHigh} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionHigh.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    price: jspb.Message.getOptionalFloatingPointField(msg, 2),
    tradingsessiondate: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateSessionHigh}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateSessionHigh;
  return proto.DTC_PB.MarketDataUpdateSessionHigh.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionHigh} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateSessionHigh}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
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
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateSessionHigh.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionHigh} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionHigh.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double Price = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.clearPrice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 TradingSessionDate = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateSessionHigh_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateSessionHigh_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateSessionHigh_Int.displayName = 'proto.DTC_PB.MarketDataUpdateSessionHigh_Int';
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
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateSessionHigh_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateSessionHigh_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    price: jspb.Message.getField(msg, 2),
    tradingsessiondate: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateSessionHigh_Int}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateSessionHigh_Int;
  return proto.DTC_PB.MarketDataUpdateSessionHigh_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionHigh_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateSessionHigh_Int}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
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
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateSessionHigh_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionHigh_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 Price = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.clearPrice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 TradingSessionDate = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionHigh_Int.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateSessionLow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateSessionLow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateSessionLow.displayName = 'proto.DTC_PB.MarketDataUpdateSessionLow';
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
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateSessionLow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateSessionLow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionLow.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    price: jspb.Message.getOptionalFloatingPointField(msg, 2),
    tradingsessiondate: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateSessionLow}
 */
proto.DTC_PB.MarketDataUpdateSessionLow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateSessionLow;
  return proto.DTC_PB.MarketDataUpdateSessionLow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionLow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateSessionLow}
 */
proto.DTC_PB.MarketDataUpdateSessionLow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
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
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateSessionLow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionLow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionLow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateSessionLow.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double Price = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateSessionLow.prototype.clearPrice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 TradingSessionDate = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateSessionLow.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionLow.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateSessionLow_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateSessionLow_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateSessionLow_Int.displayName = 'proto.DTC_PB.MarketDataUpdateSessionLow_Int';
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
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateSessionLow_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateSessionLow_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    price: jspb.Message.getField(msg, 2),
    tradingsessiondate: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.MarketDataUpdateSessionLow_Int}
 */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateSessionLow_Int;
  return proto.DTC_PB.MarketDataUpdateSessionLow_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionLow_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateSessionLow_Int}
 */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradingsessiondate(value);
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
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateSessionLow_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateSessionLow_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 Price = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.clearPrice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 TradingSessionDate = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.getTradingsessiondate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.setTradingsessiondate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.clearTradingsessiondate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateSessionLow_Int.prototype.hasTradingsessiondate = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.MarketDataUpdateLastTradeSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.displayName = 'proto.DTC_PB.MarketDataUpdateLastTradeSnapshot';
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
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.MarketDataUpdateLastTradeSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolid: jspb.Message.getField(msg, 1),
    lasttradeprice: jspb.Message.getOptionalFloatingPointField(msg, 2),
    lasttradevolume: jspb.Message.getOptionalFloatingPointField(msg, 3),
    lasttradedatetime: jspb.Message.getOptionalFloatingPointField(msg, 4)
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
 * @return {!proto.DTC_PB.MarketDataUpdateLastTradeSnapshot}
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.MarketDataUpdateLastTradeSnapshot;
  return proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.MarketDataUpdateLastTradeSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.MarketDataUpdateLastTradeSnapshot}
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSymbolid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLasttradeprice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLasttradevolume(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLasttradedatetime(value);
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
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.MarketDataUpdateLastTradeSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional uint32 SymbolID = 1;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.getSymbolid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.setSymbolid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.clearSymbolid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.hasSymbolid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double LastTradePrice = 2;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.getLasttradeprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.setLasttradeprice = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.clearLasttradeprice = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.hasLasttradeprice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double LastTradeVolume = 3;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.getLasttradevolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.setLasttradevolume = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.clearLasttradevolume = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.hasLasttradevolume = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double LastTradeDateTime = 4;
 * @return {number}
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.getLasttradedatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.setLasttradedatetime = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.clearLasttradedatetime = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.MarketDataUpdateLastTradeSnapshot.prototype.hasLasttradedatetime = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.DTC_PB.SubmitNewSingleOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.SubmitNewSingleOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.SubmitNewSingleOrder.displayName = 'proto.DTC_PB.SubmitNewSingleOrder';
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
proto.DTC_PB.SubmitNewSingleOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.SubmitNewSingleOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.SubmitNewSingleOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SubmitNewSingleOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getField(msg, 1),
    exchange: jspb.Message.getField(msg, 2),
    tradeaccount: jspb.Message.getField(msg, 3),
    clientorderid: jspb.Message.getField(msg, 4),
    ordertype: jspb.Message.getField(msg, 5),
    buysell: jspb.Message.getField(msg, 6),
    price1: jspb.Message.getOptionalFloatingPointField(msg, 7),
    price2: jspb.Message.getOptionalFloatingPointField(msg, 8),
    quantity: jspb.Message.getOptionalFloatingPointField(msg, 9),
    timeinforce: jspb.Message.getField(msg, 10),
    goodtilldatetime: jspb.Message.getField(msg, 11),
    isautomatedorder: jspb.Message.getField(msg, 12),
    isparentorder: jspb.Message.getField(msg, 13),
    freeformtext: jspb.Message.getField(msg, 14),
    openorclose: jspb.Message.getField(msg, 15)
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
 * @return {!proto.DTC_PB.SubmitNewSingleOrder}
 */
proto.DTC_PB.SubmitNewSingleOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.SubmitNewSingleOrder;
  return proto.DTC_PB.SubmitNewSingleOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.SubmitNewSingleOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.SubmitNewSingleOrder}
 */
proto.DTC_PB.SubmitNewSingleOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid(value);
      break;
    case 5:
      var value = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (reader.readEnum());
      msg.setOrdertype(value);
      break;
    case 6:
      var value = /** @type {!proto.DTC_PB.BuySellEnum} */ (reader.readEnum());
      msg.setBuysell(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice1(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice2(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity(value);
      break;
    case 10:
      var value = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setGoodtilldatetime(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsautomatedorder(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsparentorder(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setFreeformtext(value);
      break;
    case 15:
      var value = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (reader.readEnum());
      msg.setOpenorclose(value);
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
proto.DTC_PB.SubmitNewSingleOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.SubmitNewSingleOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.SubmitNewSingleOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SubmitNewSingleOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeSfixed64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
};


/**
 * optional string Symbol = 1;
 * @return {string}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Exchange = 2;
 * @return {string}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearExchange = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string TradeAccount = 3;
 * @return {string}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string ClientOrderID = 4;
 * @return {string}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getClientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setClientorderid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearClientorderid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasClientorderid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OrderTypeEnum OrderType = 5;
 * @return {!proto.DTC_PB.OrderTypeEnum}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getOrdertype = function() {
  return /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DTC_PB.OrderTypeEnum} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setOrdertype = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearOrdertype = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasOrdertype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional BuySellEnum BuySell = 6;
 * @return {!proto.DTC_PB.BuySellEnum}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getBuysell = function() {
  return /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.DTC_PB.BuySellEnum} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setBuysell = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearBuysell = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasBuysell = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double Price1 = 7;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getPrice1 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setPrice1 = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearPrice1 = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasPrice1 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double Price2 = 8;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getPrice2 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setPrice2 = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearPrice2 = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasPrice2 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double Quantity = 9;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getQuantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional TimeInForceEnum TimeInForce = 10;
 * @return {!proto.DTC_PB.TimeInForceEnum}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getTimeinforce = function() {
  return /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.DTC_PB.TimeInForceEnum} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setTimeinforce = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearTimeinforce = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasTimeinforce = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional sfixed64 GoodTillDateTime = 11;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getGoodtilldatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setGoodtilldatetime = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearGoodtilldatetime = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasGoodtilldatetime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint32 IsAutomatedOrder = 12;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getIsautomatedorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setIsautomatedorder = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearIsautomatedorder = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasIsautomatedorder = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint32 IsParentOrder = 13;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getIsparentorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setIsparentorder = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearIsparentorder = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasIsparentorder = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string FreeFormText = 14;
 * @return {string}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getFreeformtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setFreeformtext = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearFreeformtext = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasFreeformtext = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional OpenCloseTradeEnum OpenOrClose = 15;
 * @return {!proto.DTC_PB.OpenCloseTradeEnum}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.getOpenorclose = function() {
  return /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {!proto.DTC_PB.OpenCloseTradeEnum} value */
proto.DTC_PB.SubmitNewSingleOrder.prototype.setOpenorclose = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.DTC_PB.SubmitNewSingleOrder.prototype.clearOpenorclose = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrder.prototype.hasOpenorclose = function() {
  return jspb.Message.getField(this, 15) != null;
};



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
proto.DTC_PB.SubmitNewSingleOrderInt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.SubmitNewSingleOrderInt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.SubmitNewSingleOrderInt.displayName = 'proto.DTC_PB.SubmitNewSingleOrderInt';
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
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.SubmitNewSingleOrderInt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.SubmitNewSingleOrderInt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SubmitNewSingleOrderInt.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getField(msg, 1),
    exchange: jspb.Message.getField(msg, 2),
    tradeaccount: jspb.Message.getField(msg, 3),
    clientorderid: jspb.Message.getField(msg, 4),
    ordertype: jspb.Message.getField(msg, 5),
    buysell: jspb.Message.getField(msg, 6),
    price1: jspb.Message.getField(msg, 7),
    price2: jspb.Message.getField(msg, 8),
    divisor: jspb.Message.getOptionalFloatingPointField(msg, 9),
    quantity: jspb.Message.getField(msg, 10),
    timeinforce: jspb.Message.getField(msg, 11),
    goodtilldatetime: jspb.Message.getField(msg, 12),
    isautomatedorder: jspb.Message.getField(msg, 13),
    isparentorder: jspb.Message.getField(msg, 14),
    freeformtext: jspb.Message.getField(msg, 15),
    openorclose: jspb.Message.getField(msg, 16)
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
 * @return {!proto.DTC_PB.SubmitNewSingleOrderInt}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.SubmitNewSingleOrderInt;
  return proto.DTC_PB.SubmitNewSingleOrderInt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.SubmitNewSingleOrderInt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.SubmitNewSingleOrderInt}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid(value);
      break;
    case 5:
      var value = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (reader.readEnum());
      msg.setOrdertype(value);
      break;
    case 6:
      var value = /** @type {!proto.DTC_PB.BuySellEnum} */ (reader.readEnum());
      msg.setBuysell(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrice1(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrice2(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDivisor(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 11:
      var value = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setGoodtilldatetime(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsautomatedorder(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsparentorder(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setFreeformtext(value);
      break;
    case 16:
      var value = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (reader.readEnum());
      msg.setOpenorclose(value);
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
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.SubmitNewSingleOrderInt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.SubmitNewSingleOrderInt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SubmitNewSingleOrderInt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeSfixed64(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeEnum(
      16,
      f
    );
  }
};


/**
 * optional string Symbol = 1;
 * @return {string}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Exchange = 2;
 * @return {string}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearExchange = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string TradeAccount = 3;
 * @return {string}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string ClientOrderID = 4;
 * @return {string}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getClientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setClientorderid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearClientorderid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasClientorderid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OrderTypeEnum OrderType = 5;
 * @return {!proto.DTC_PB.OrderTypeEnum}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getOrdertype = function() {
  return /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DTC_PB.OrderTypeEnum} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setOrdertype = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearOrdertype = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasOrdertype = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional BuySellEnum BuySell = 6;
 * @return {!proto.DTC_PB.BuySellEnum}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getBuysell = function() {
  return /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.DTC_PB.BuySellEnum} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setBuysell = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearBuysell = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasBuysell = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 Price1 = 7;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getPrice1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setPrice1 = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearPrice1 = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasPrice1 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 Price2 = 8;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getPrice2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setPrice2 = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearPrice2 = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasPrice2 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional float Divisor = 9;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getDivisor = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setDivisor = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearDivisor = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasDivisor = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 Quantity = 10;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional TimeInForceEnum TimeInForce = 11;
 * @return {!proto.DTC_PB.TimeInForceEnum}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getTimeinforce = function() {
  return /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.DTC_PB.TimeInForceEnum} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setTimeinforce = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearTimeinforce = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasTimeinforce = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional sfixed64 GoodTillDateTime = 12;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getGoodtilldatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setGoodtilldatetime = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearGoodtilldatetime = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasGoodtilldatetime = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint32 IsAutomatedOrder = 13;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getIsautomatedorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setIsautomatedorder = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearIsautomatedorder = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasIsautomatedorder = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint32 IsParentOrder = 14;
 * @return {number}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getIsparentorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setIsparentorder = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearIsparentorder = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasIsparentorder = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string FreeFormText = 15;
 * @return {string}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getFreeformtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setFreeformtext = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearFreeformtext = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasFreeformtext = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional OpenCloseTradeEnum OpenOrClose = 16;
 * @return {!proto.DTC_PB.OpenCloseTradeEnum}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.getOpenorclose = function() {
  return /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {!proto.DTC_PB.OpenCloseTradeEnum} value */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.setOpenorclose = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.DTC_PB.SubmitNewSingleOrderInt.prototype.clearOpenorclose = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewSingleOrderInt.prototype.hasOpenorclose = function() {
  return jspb.Message.getField(this, 16) != null;
};



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
proto.DTC_PB.CancelReplaceOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.CancelReplaceOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.CancelReplaceOrder.displayName = 'proto.DTC_PB.CancelReplaceOrder';
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
proto.DTC_PB.CancelReplaceOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.CancelReplaceOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.CancelReplaceOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.CancelReplaceOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverorderid: jspb.Message.getField(msg, 1),
    clientorderid: jspb.Message.getField(msg, 2),
    price1: jspb.Message.getOptionalFloatingPointField(msg, 3),
    price2: jspb.Message.getOptionalFloatingPointField(msg, 4),
    quantity: jspb.Message.getOptionalFloatingPointField(msg, 5),
    price1isset: jspb.Message.getField(msg, 6),
    price2isset: jspb.Message.getField(msg, 7),
    timeinforce: jspb.Message.getField(msg, 9),
    goodtilldatetime: jspb.Message.getField(msg, 10),
    updateprice1offsettoparent: jspb.Message.getField(msg, 11)
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
 * @return {!proto.DTC_PB.CancelReplaceOrder}
 */
proto.DTC_PB.CancelReplaceOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.CancelReplaceOrder;
  return proto.DTC_PB.CancelReplaceOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.CancelReplaceOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.CancelReplaceOrder}
 */
proto.DTC_PB.CancelReplaceOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerorderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice1(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice2(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrice1isset(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrice2isset(value);
      break;
    case 9:
      var value = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGoodtilldatetime(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUpdateprice1offsettoparent(value);
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
proto.DTC_PB.CancelReplaceOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.CancelReplaceOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.CancelReplaceOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.CancelReplaceOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
};


/**
 * optional string ServerOrderID = 1;
 * @return {string}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.getServerorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.CancelReplaceOrder.prototype.setServerorderid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.CancelReplaceOrder.prototype.clearServerorderid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.hasServerorderid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string ClientOrderID = 2;
 * @return {string}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.getClientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.CancelReplaceOrder.prototype.setClientorderid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.CancelReplaceOrder.prototype.clearClientorderid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.hasClientorderid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double Price1 = 3;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.getPrice1 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrder.prototype.setPrice1 = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.CancelReplaceOrder.prototype.clearPrice1 = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.hasPrice1 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double Price2 = 4;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.getPrice2 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrder.prototype.setPrice2 = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.CancelReplaceOrder.prototype.clearPrice2 = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.hasPrice2 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double Quantity = 5;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.getQuantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrder.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.CancelReplaceOrder.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 Price1IsSet = 6;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.getPrice1isset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrder.prototype.setPrice1isset = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.CancelReplaceOrder.prototype.clearPrice1isset = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.hasPrice1isset = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 Price2IsSet = 7;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.getPrice2isset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrder.prototype.setPrice2isset = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.CancelReplaceOrder.prototype.clearPrice2isset = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.hasPrice2isset = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TimeInForceEnum TimeInForce = 9;
 * @return {!proto.DTC_PB.TimeInForceEnum}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.getTimeinforce = function() {
  return /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.DTC_PB.TimeInForceEnum} value */
proto.DTC_PB.CancelReplaceOrder.prototype.setTimeinforce = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.CancelReplaceOrder.prototype.clearTimeinforce = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.hasTimeinforce = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint64 GoodTillDateTime = 10;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.getGoodtilldatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrder.prototype.setGoodtilldatetime = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.CancelReplaceOrder.prototype.clearGoodtilldatetime = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.hasGoodtilldatetime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 UpdatePrice1OffsetToParent = 11;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.getUpdateprice1offsettoparent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrder.prototype.setUpdateprice1offsettoparent = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.CancelReplaceOrder.prototype.clearUpdateprice1offsettoparent = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrder.prototype.hasUpdateprice1offsettoparent = function() {
  return jspb.Message.getField(this, 11) != null;
};



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
proto.DTC_PB.CancelReplaceOrderInt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.CancelReplaceOrderInt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.CancelReplaceOrderInt.displayName = 'proto.DTC_PB.CancelReplaceOrderInt';
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
proto.DTC_PB.CancelReplaceOrderInt.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.CancelReplaceOrderInt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.CancelReplaceOrderInt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.CancelReplaceOrderInt.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverorderid: jspb.Message.getField(msg, 1),
    clientorderid: jspb.Message.getField(msg, 2),
    price1: jspb.Message.getField(msg, 3),
    price2: jspb.Message.getField(msg, 4),
    divisor: jspb.Message.getOptionalFloatingPointField(msg, 5),
    quantity: jspb.Message.getField(msg, 6),
    price1isset: jspb.Message.getField(msg, 7),
    price2isset: jspb.Message.getField(msg, 8),
    timeinforce: jspb.Message.getField(msg, 10),
    goodtilldatetime: jspb.Message.getField(msg, 11),
    updateprice1offsettoparent: jspb.Message.getField(msg, 12)
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
 * @return {!proto.DTC_PB.CancelReplaceOrderInt}
 */
proto.DTC_PB.CancelReplaceOrderInt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.CancelReplaceOrderInt;
  return proto.DTC_PB.CancelReplaceOrderInt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.CancelReplaceOrderInt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.CancelReplaceOrderInt}
 */
proto.DTC_PB.CancelReplaceOrderInt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerorderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrice1(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrice2(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDivisor(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrice1isset(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrice2isset(value);
      break;
    case 10:
      var value = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGoodtilldatetime(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUpdateprice1offsettoparent(value);
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
proto.DTC_PB.CancelReplaceOrderInt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.CancelReplaceOrderInt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.CancelReplaceOrderInt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.CancelReplaceOrderInt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeUint32(
      12,
      f
    );
  }
};


/**
 * optional string ServerOrderID = 1;
 * @return {string}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getServerorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setServerorderid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearServerorderid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasServerorderid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string ClientOrderID = 2;
 * @return {string}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getClientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setClientorderid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearClientorderid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasClientorderid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 Price1 = 3;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getPrice1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setPrice1 = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearPrice1 = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasPrice1 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 Price2 = 4;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getPrice2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setPrice2 = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearPrice2 = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasPrice2 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float Divisor = 5;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getDivisor = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setDivisor = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearDivisor = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasDivisor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 Quantity = 6;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 Price1IsSet = 7;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getPrice1isset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setPrice1isset = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearPrice1isset = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasPrice1isset = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 Price2IsSet = 8;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getPrice2isset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setPrice2isset = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearPrice2isset = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasPrice2isset = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TimeInForceEnum TimeInForce = 10;
 * @return {!proto.DTC_PB.TimeInForceEnum}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getTimeinforce = function() {
  return /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.DTC_PB.TimeInForceEnum} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setTimeinforce = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearTimeinforce = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasTimeinforce = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint64 GoodTillDateTime = 11;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getGoodtilldatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setGoodtilldatetime = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearGoodtilldatetime = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasGoodtilldatetime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint32 UpdatePrice1OffsetToParent = 12;
 * @return {number}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.getUpdateprice1offsettoparent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.DTC_PB.CancelReplaceOrderInt.prototype.setUpdateprice1offsettoparent = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.CancelReplaceOrderInt.prototype.clearUpdateprice1offsettoparent = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelReplaceOrderInt.prototype.hasUpdateprice1offsettoparent = function() {
  return jspb.Message.getField(this, 12) != null;
};



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
proto.DTC_PB.CancelOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.CancelOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.CancelOrder.displayName = 'proto.DTC_PB.CancelOrder';
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
proto.DTC_PB.CancelOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.CancelOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.CancelOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.CancelOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverorderid: jspb.Message.getField(msg, 1),
    clientorderid: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.CancelOrder}
 */
proto.DTC_PB.CancelOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.CancelOrder;
  return proto.DTC_PB.CancelOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.CancelOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.CancelOrder}
 */
proto.DTC_PB.CancelOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerorderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid(value);
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
proto.DTC_PB.CancelOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.CancelOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.CancelOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.CancelOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string ServerOrderID = 1;
 * @return {string}
 */
proto.DTC_PB.CancelOrder.prototype.getServerorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.CancelOrder.prototype.setServerorderid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.CancelOrder.prototype.clearServerorderid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelOrder.prototype.hasServerorderid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string ClientOrderID = 2;
 * @return {string}
 */
proto.DTC_PB.CancelOrder.prototype.getClientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.CancelOrder.prototype.setClientorderid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.CancelOrder.prototype.clearClientorderid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CancelOrder.prototype.hasClientorderid = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.SubmitNewOCOOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.SubmitNewOCOOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.SubmitNewOCOOrder.displayName = 'proto.DTC_PB.SubmitNewOCOOrder';
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
proto.DTC_PB.SubmitNewOCOOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.SubmitNewOCOOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.SubmitNewOCOOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SubmitNewOCOOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getField(msg, 1),
    exchange: jspb.Message.getField(msg, 2),
    clientorderid1: jspb.Message.getField(msg, 3),
    ordertype1: jspb.Message.getField(msg, 4),
    buysell1: jspb.Message.getField(msg, 5),
    price11: jspb.Message.getOptionalFloatingPointField(msg, 6),
    price21: jspb.Message.getOptionalFloatingPointField(msg, 7),
    quantity1: jspb.Message.getOptionalFloatingPointField(msg, 8),
    clientorderid2: jspb.Message.getField(msg, 9),
    ordertype2: jspb.Message.getField(msg, 10),
    buysell2: jspb.Message.getField(msg, 11),
    price12: jspb.Message.getOptionalFloatingPointField(msg, 12),
    price22: jspb.Message.getOptionalFloatingPointField(msg, 13),
    quantity2: jspb.Message.getOptionalFloatingPointField(msg, 14),
    timeinforce: jspb.Message.getField(msg, 15),
    goodtilldatetime: jspb.Message.getField(msg, 16),
    tradeaccount: jspb.Message.getField(msg, 17),
    isautomatedorder: jspb.Message.getField(msg, 18),
    parenttriggerclientorderid: jspb.Message.getField(msg, 19),
    freeformtext: jspb.Message.getField(msg, 20),
    openorclose: jspb.Message.getField(msg, 21),
    partialfillhandling: jspb.Message.getField(msg, 22),
    useoffsets: jspb.Message.getField(msg, 23),
    offsetfromparent1: jspb.Message.getOptionalFloatingPointField(msg, 24),
    offsetfromparent2: jspb.Message.getOptionalFloatingPointField(msg, 25)
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
 * @return {!proto.DTC_PB.SubmitNewOCOOrder}
 */
proto.DTC_PB.SubmitNewOCOOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.SubmitNewOCOOrder;
  return proto.DTC_PB.SubmitNewOCOOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.SubmitNewOCOOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.SubmitNewOCOOrder}
 */
proto.DTC_PB.SubmitNewOCOOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid1(value);
      break;
    case 4:
      var value = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (reader.readEnum());
      msg.setOrdertype1(value);
      break;
    case 5:
      var value = /** @type {!proto.DTC_PB.BuySellEnum} */ (reader.readEnum());
      msg.setBuysell1(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice11(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice21(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity1(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid2(value);
      break;
    case 10:
      var value = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (reader.readEnum());
      msg.setOrdertype2(value);
      break;
    case 11:
      var value = /** @type {!proto.DTC_PB.BuySellEnum} */ (reader.readEnum());
      msg.setBuysell2(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice12(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice22(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity2(value);
      break;
    case 15:
      var value = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setGoodtilldatetime(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsautomatedorder(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setParenttriggerclientorderid(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setFreeformtext(value);
      break;
    case 21:
      var value = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (reader.readEnum());
      msg.setOpenorclose(value);
      break;
    case 22:
      var value = /** @type {!proto.DTC_PB.PartialFillHandlingEnum} */ (reader.readEnum());
      msg.setPartialfillhandling(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUseoffsets(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOffsetfromparent1(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOffsetfromparent2(value);
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
proto.DTC_PB.SubmitNewOCOOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.SubmitNewOCOOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.SubmitNewOCOOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SubmitNewOCOOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeSfixed64(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeString(
      20,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.PartialFillHandlingEnum} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeUint32(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeDouble(
      24,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeDouble(
      25,
      f
    );
  }
};


/**
 * optional string Symbol = 1;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Exchange = 2;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearExchange = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ClientOrderID_1 = 3;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getClientorderid1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setClientorderid1 = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearClientorderid1 = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasClientorderid1 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OrderTypeEnum OrderType_1 = 4;
 * @return {!proto.DTC_PB.OrderTypeEnum}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getOrdertype1 = function() {
  return /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.DTC_PB.OrderTypeEnum} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setOrdertype1 = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearOrdertype1 = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasOrdertype1 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BuySellEnum BuySell_1 = 5;
 * @return {!proto.DTC_PB.BuySellEnum}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getBuysell1 = function() {
  return /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DTC_PB.BuySellEnum} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setBuysell1 = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearBuysell1 = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasBuysell1 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double Price1_1 = 6;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getPrice11 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setPrice11 = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearPrice11 = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasPrice11 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double Price2_1 = 7;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getPrice21 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setPrice21 = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearPrice21 = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasPrice21 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double Quantity_1 = 8;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getQuantity1 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setQuantity1 = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearQuantity1 = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasQuantity1 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string ClientOrderID_2 = 9;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getClientorderid2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setClientorderid2 = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearClientorderid2 = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasClientorderid2 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional OrderTypeEnum OrderType_2 = 10;
 * @return {!proto.DTC_PB.OrderTypeEnum}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getOrdertype2 = function() {
  return /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.DTC_PB.OrderTypeEnum} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setOrdertype2 = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearOrdertype2 = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasOrdertype2 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional BuySellEnum BuySell_2 = 11;
 * @return {!proto.DTC_PB.BuySellEnum}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getBuysell2 = function() {
  return /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.DTC_PB.BuySellEnum} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setBuysell2 = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearBuysell2 = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasBuysell2 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double Price1_2 = 12;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getPrice12 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 12, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setPrice12 = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearPrice12 = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasPrice12 = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double Price2_2 = 13;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getPrice22 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 13, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setPrice22 = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearPrice22 = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasPrice22 = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional double Quantity_2 = 14;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getQuantity2 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 14, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setQuantity2 = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearQuantity2 = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasQuantity2 = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional TimeInForceEnum TimeInForce = 15;
 * @return {!proto.DTC_PB.TimeInForceEnum}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getTimeinforce = function() {
  return /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {!proto.DTC_PB.TimeInForceEnum} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setTimeinforce = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearTimeinforce = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasTimeinforce = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional sfixed64 GoodTillDateTime = 16;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getGoodtilldatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setGoodtilldatetime = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearGoodtilldatetime = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasGoodtilldatetime = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string TradeAccount = 17;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional uint32 IsAutomatedOrder = 18;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getIsautomatedorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setIsautomatedorder = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearIsautomatedorder = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasIsautomatedorder = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string ParentTriggerClientOrderID = 19;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getParenttriggerclientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setParenttriggerclientorderid = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearParenttriggerclientorderid = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasParenttriggerclientorderid = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string FreeFormText = 20;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getFreeformtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setFreeformtext = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearFreeformtext = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasFreeformtext = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional OpenCloseTradeEnum OpenOrClose = 21;
 * @return {!proto.DTC_PB.OpenCloseTradeEnum}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getOpenorclose = function() {
  return /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/** @param {!proto.DTC_PB.OpenCloseTradeEnum} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setOpenorclose = function(value) {
  jspb.Message.setField(this, 21, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearOpenorclose = function() {
  jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasOpenorclose = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional PartialFillHandlingEnum PartialFillHandling = 22;
 * @return {!proto.DTC_PB.PartialFillHandlingEnum}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getPartialfillhandling = function() {
  return /** @type {!proto.DTC_PB.PartialFillHandlingEnum} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/** @param {!proto.DTC_PB.PartialFillHandlingEnum} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setPartialfillhandling = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearPartialfillhandling = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasPartialfillhandling = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional uint32 UseOffsets = 23;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getUseoffsets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setUseoffsets = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearUseoffsets = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasUseoffsets = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional double OffsetFromParent1 = 24;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getOffsetfromparent1 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 24, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setOffsetfromparent1 = function(value) {
  jspb.Message.setField(this, 24, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearOffsetfromparent1 = function() {
  jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasOffsetfromparent1 = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional double OffsetFromParent2 = 25;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.getOffsetfromparent2 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 25, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrder.prototype.setOffsetfromparent2 = function(value) {
  jspb.Message.setField(this, 25, value);
};


proto.DTC_PB.SubmitNewOCOOrder.prototype.clearOffsetfromparent2 = function() {
  jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrder.prototype.hasOffsetfromparent2 = function() {
  return jspb.Message.getField(this, 25) != null;
};



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
proto.DTC_PB.SubmitNewOCOOrderInt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.SubmitNewOCOOrderInt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.SubmitNewOCOOrderInt.displayName = 'proto.DTC_PB.SubmitNewOCOOrderInt';
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
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.SubmitNewOCOOrderInt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.SubmitNewOCOOrderInt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SubmitNewOCOOrderInt.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbol: jspb.Message.getField(msg, 1),
    exchange: jspb.Message.getField(msg, 2),
    clientorderid1: jspb.Message.getField(msg, 3),
    ordertype1: jspb.Message.getField(msg, 4),
    buysell1: jspb.Message.getField(msg, 5),
    price11: jspb.Message.getField(msg, 6),
    price21: jspb.Message.getField(msg, 7),
    quantity1: jspb.Message.getField(msg, 8),
    clientorderid2: jspb.Message.getField(msg, 9),
    ordertype2: jspb.Message.getField(msg, 10),
    buysell2: jspb.Message.getField(msg, 11),
    price12: jspb.Message.getField(msg, 12),
    price22: jspb.Message.getField(msg, 13),
    quantity2: jspb.Message.getField(msg, 14),
    timeinforce: jspb.Message.getField(msg, 15),
    goodtilldatetime: jspb.Message.getField(msg, 16),
    tradeaccount: jspb.Message.getField(msg, 17),
    isautomatedorder: jspb.Message.getField(msg, 18),
    parenttriggerclientorderid: jspb.Message.getField(msg, 19),
    freeformtext: jspb.Message.getField(msg, 20),
    divisor: jspb.Message.getOptionalFloatingPointField(msg, 21),
    openorclose: jspb.Message.getField(msg, 22),
    partialfillhandling: jspb.Message.getField(msg, 23)
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
 * @return {!proto.DTC_PB.SubmitNewOCOOrderInt}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.SubmitNewOCOOrderInt;
  return proto.DTC_PB.SubmitNewOCOOrderInt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.SubmitNewOCOOrderInt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.SubmitNewOCOOrderInt}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid1(value);
      break;
    case 4:
      var value = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (reader.readEnum());
      msg.setOrdertype1(value);
      break;
    case 5:
      var value = /** @type {!proto.DTC_PB.BuySellEnum} */ (reader.readEnum());
      msg.setBuysell1(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrice11(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrice21(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity1(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid2(value);
      break;
    case 10:
      var value = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (reader.readEnum());
      msg.setOrdertype2(value);
      break;
    case 11:
      var value = /** @type {!proto.DTC_PB.BuySellEnum} */ (reader.readEnum());
      msg.setBuysell2(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrice12(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrice22(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuantity2(value);
      break;
    case 15:
      var value = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setGoodtilldatetime(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsautomatedorder(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setParenttriggerclientorderid(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setFreeformtext(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDivisor(value);
      break;
    case 22:
      var value = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (reader.readEnum());
      msg.setOpenorclose(value);
      break;
    case 23:
      var value = /** @type {!proto.DTC_PB.PartialFillHandlingEnum} */ (reader.readEnum());
      msg.setPartialfillhandling(value);
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
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.SubmitNewOCOOrderInt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.SubmitNewOCOOrderInt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SubmitNewOCOOrderInt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeSfixed64(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeString(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeFloat(
      21,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.PartialFillHandlingEnum} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeEnum(
      23,
      f
    );
  }
};


/**
 * optional string Symbol = 1;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Exchange = 2;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearExchange = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ClientOrderID_1 = 3;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getClientorderid1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setClientorderid1 = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearClientorderid1 = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasClientorderid1 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OrderTypeEnum OrderType_1 = 4;
 * @return {!proto.DTC_PB.OrderTypeEnum}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getOrdertype1 = function() {
  return /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.DTC_PB.OrderTypeEnum} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setOrdertype1 = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearOrdertype1 = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasOrdertype1 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BuySellEnum BuySell_1 = 5;
 * @return {!proto.DTC_PB.BuySellEnum}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getBuysell1 = function() {
  return /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DTC_PB.BuySellEnum} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setBuysell1 = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearBuysell1 = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasBuysell1 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 Price1_1 = 6;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getPrice11 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setPrice11 = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearPrice11 = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasPrice11 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 Price2_1 = 7;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getPrice21 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setPrice21 = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearPrice21 = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasPrice21 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 Quantity_1 = 8;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getQuantity1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setQuantity1 = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearQuantity1 = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasQuantity1 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string ClientOrderID_2 = 9;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getClientorderid2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setClientorderid2 = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearClientorderid2 = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasClientorderid2 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional OrderTypeEnum OrderType_2 = 10;
 * @return {!proto.DTC_PB.OrderTypeEnum}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getOrdertype2 = function() {
  return /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.DTC_PB.OrderTypeEnum} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setOrdertype2 = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearOrdertype2 = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasOrdertype2 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional BuySellEnum BuySell_2 = 11;
 * @return {!proto.DTC_PB.BuySellEnum}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getBuysell2 = function() {
  return /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.DTC_PB.BuySellEnum} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setBuysell2 = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearBuysell2 = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasBuysell2 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 Price1_2 = 12;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getPrice12 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setPrice12 = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearPrice12 = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasPrice12 = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional int64 Price2_2 = 13;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getPrice22 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setPrice22 = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearPrice22 = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasPrice22 = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int64 Quantity_2 = 14;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getQuantity2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setQuantity2 = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearQuantity2 = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasQuantity2 = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional TimeInForceEnum TimeInForce = 15;
 * @return {!proto.DTC_PB.TimeInForceEnum}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getTimeinforce = function() {
  return /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {!proto.DTC_PB.TimeInForceEnum} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setTimeinforce = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearTimeinforce = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasTimeinforce = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional sfixed64 GoodTillDateTime = 16;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getGoodtilldatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setGoodtilldatetime = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearGoodtilldatetime = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasGoodtilldatetime = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string TradeAccount = 17;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional uint32 IsAutomatedOrder = 18;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getIsautomatedorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setIsautomatedorder = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearIsautomatedorder = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasIsautomatedorder = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string ParentTriggerClientOrderID = 19;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getParenttriggerclientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setParenttriggerclientorderid = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearParenttriggerclientorderid = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasParenttriggerclientorderid = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string FreeFormText = 20;
 * @return {string}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getFreeformtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setFreeformtext = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearFreeformtext = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasFreeformtext = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional float Divisor = 21;
 * @return {number}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getDivisor = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 21, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setDivisor = function(value) {
  jspb.Message.setField(this, 21, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearDivisor = function() {
  jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasDivisor = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional OpenCloseTradeEnum OpenOrClose = 22;
 * @return {!proto.DTC_PB.OpenCloseTradeEnum}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getOpenorclose = function() {
  return /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/** @param {!proto.DTC_PB.OpenCloseTradeEnum} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setOpenorclose = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearOpenorclose = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasOpenorclose = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional PartialFillHandlingEnum PartialFillHandling = 23;
 * @return {!proto.DTC_PB.PartialFillHandlingEnum}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.getPartialfillhandling = function() {
  return /** @type {!proto.DTC_PB.PartialFillHandlingEnum} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {!proto.DTC_PB.PartialFillHandlingEnum} value */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.setPartialfillhandling = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.DTC_PB.SubmitNewOCOOrderInt.prototype.clearPartialfillhandling = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SubmitNewOCOOrderInt.prototype.hasPartialfillhandling = function() {
  return jspb.Message.getField(this, 23) != null;
};



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
proto.DTC_PB.OpenOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.OpenOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.OpenOrdersRequest.displayName = 'proto.DTC_PB.OpenOrdersRequest';
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
proto.DTC_PB.OpenOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.OpenOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.OpenOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.OpenOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    requestallorders: jspb.Message.getField(msg, 2),
    serverorderid: jspb.Message.getField(msg, 3),
    tradeaccount: jspb.Message.getField(msg, 4)
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
 * @return {!proto.DTC_PB.OpenOrdersRequest}
 */
proto.DTC_PB.OpenOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.OpenOrdersRequest;
  return proto.DTC_PB.OpenOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.OpenOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.OpenOrdersRequest}
 */
proto.DTC_PB.OpenOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestallorders(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerorderid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
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
proto.DTC_PB.OpenOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.OpenOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.OpenOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.OpenOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.OpenOrdersRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.OpenOrdersRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.OpenOrdersRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OpenOrdersRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 RequestAllOrders = 2;
 * @return {number}
 */
proto.DTC_PB.OpenOrdersRequest.prototype.getRequestallorders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.OpenOrdersRequest.prototype.setRequestallorders = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.OpenOrdersRequest.prototype.clearRequestallorders = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OpenOrdersRequest.prototype.hasRequestallorders = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ServerOrderID = 3;
 * @return {string}
 */
proto.DTC_PB.OpenOrdersRequest.prototype.getServerorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.OpenOrdersRequest.prototype.setServerorderid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.OpenOrdersRequest.prototype.clearServerorderid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OpenOrdersRequest.prototype.hasServerorderid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string TradeAccount = 4;
 * @return {string}
 */
proto.DTC_PB.OpenOrdersRequest.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.OpenOrdersRequest.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.OpenOrdersRequest.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OpenOrdersRequest.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.DTC_PB.HistoricalOrderFillsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalOrderFillsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalOrderFillsRequest.displayName = 'proto.DTC_PB.HistoricalOrderFillsRequest';
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
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalOrderFillsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalOrderFillsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalOrderFillsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    serverorderid: jspb.Message.getField(msg, 2),
    numberofdays: jspb.Message.getField(msg, 3),
    tradeaccount: jspb.Message.getField(msg, 4)
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
 * @return {!proto.DTC_PB.HistoricalOrderFillsRequest}
 */
proto.DTC_PB.HistoricalOrderFillsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalOrderFillsRequest;
  return proto.DTC_PB.HistoricalOrderFillsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalOrderFillsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalOrderFillsRequest}
 */
proto.DTC_PB.HistoricalOrderFillsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerorderid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofdays(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
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
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalOrderFillsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalOrderFillsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalOrderFillsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalOrderFillsRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string ServerOrderID = 2;
 * @return {string}
 */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.getServerorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.setServerorderid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalOrderFillsRequest.prototype.clearServerorderid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.hasServerorderid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 NumberOfDays = 3;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.getNumberofdays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.setNumberofdays = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalOrderFillsRequest.prototype.clearNumberofdays = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.hasNumberofdays = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string TradeAccount = 4;
 * @return {string}
 */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.HistoricalOrderFillsRequest.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillsRequest.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.DTC_PB.HistoricalOrderFillsReject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalOrderFillsReject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalOrderFillsReject.displayName = 'proto.DTC_PB.HistoricalOrderFillsReject';
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
proto.DTC_PB.HistoricalOrderFillsReject.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalOrderFillsReject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalOrderFillsReject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalOrderFillsReject.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    rejecttext: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.HistoricalOrderFillsReject}
 */
proto.DTC_PB.HistoricalOrderFillsReject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalOrderFillsReject;
  return proto.DTC_PB.HistoricalOrderFillsReject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalOrderFillsReject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalOrderFillsReject}
 */
proto.DTC_PB.HistoricalOrderFillsReject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejecttext(value);
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
proto.DTC_PB.HistoricalOrderFillsReject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalOrderFillsReject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalOrderFillsReject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalOrderFillsReject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillsReject.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillsReject.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalOrderFillsReject.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillsReject.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string RejectText = 2;
 * @return {string}
 */
proto.DTC_PB.HistoricalOrderFillsReject.prototype.getRejecttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalOrderFillsReject.prototype.setRejecttext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalOrderFillsReject.prototype.clearRejecttext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillsReject.prototype.hasRejecttext = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.CurrentPositionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.CurrentPositionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.CurrentPositionsRequest.displayName = 'proto.DTC_PB.CurrentPositionsRequest';
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
proto.DTC_PB.CurrentPositionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.CurrentPositionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.CurrentPositionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.CurrentPositionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    tradeaccount: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.CurrentPositionsRequest}
 */
proto.DTC_PB.CurrentPositionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.CurrentPositionsRequest;
  return proto.DTC_PB.CurrentPositionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.CurrentPositionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.CurrentPositionsRequest}
 */
proto.DTC_PB.CurrentPositionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
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
proto.DTC_PB.CurrentPositionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.CurrentPositionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.CurrentPositionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.CurrentPositionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.CurrentPositionsRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.CurrentPositionsRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.CurrentPositionsRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CurrentPositionsRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string TradeAccount = 2;
 * @return {string}
 */
proto.DTC_PB.CurrentPositionsRequest.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.CurrentPositionsRequest.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.CurrentPositionsRequest.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CurrentPositionsRequest.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.CurrentPositionsReject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.CurrentPositionsReject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.CurrentPositionsReject.displayName = 'proto.DTC_PB.CurrentPositionsReject';
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
proto.DTC_PB.CurrentPositionsReject.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.CurrentPositionsReject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.CurrentPositionsReject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.CurrentPositionsReject.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    rejecttext: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.CurrentPositionsReject}
 */
proto.DTC_PB.CurrentPositionsReject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.CurrentPositionsReject;
  return proto.DTC_PB.CurrentPositionsReject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.CurrentPositionsReject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.CurrentPositionsReject}
 */
proto.DTC_PB.CurrentPositionsReject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejecttext(value);
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
proto.DTC_PB.CurrentPositionsReject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.CurrentPositionsReject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.CurrentPositionsReject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.CurrentPositionsReject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.CurrentPositionsReject.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.CurrentPositionsReject.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.CurrentPositionsReject.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CurrentPositionsReject.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string RejectText = 2;
 * @return {string}
 */
proto.DTC_PB.CurrentPositionsReject.prototype.getRejecttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.CurrentPositionsReject.prototype.setRejecttext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.CurrentPositionsReject.prototype.clearRejecttext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.CurrentPositionsReject.prototype.hasRejecttext = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.OrderUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.OrderUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.OrderUpdate.displayName = 'proto.DTC_PB.OrderUpdate';
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
proto.DTC_PB.OrderUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.OrderUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.OrderUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.OrderUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    totalnummessages: jspb.Message.getField(msg, 2),
    messagenumber: jspb.Message.getField(msg, 3),
    symbol: jspb.Message.getField(msg, 4),
    exchange: jspb.Message.getField(msg, 5),
    previousserverorderid: jspb.Message.getField(msg, 6),
    serverorderid: jspb.Message.getField(msg, 7),
    clientorderid: jspb.Message.getField(msg, 8),
    exchangeorderid: jspb.Message.getField(msg, 9),
    orderstatus: jspb.Message.getField(msg, 10),
    orderupdatereason: jspb.Message.getField(msg, 11),
    ordertype: jspb.Message.getField(msg, 12),
    buysell: jspb.Message.getField(msg, 13),
    price1: jspb.Message.getOptionalFloatingPointField(msg, 14),
    price2: jspb.Message.getOptionalFloatingPointField(msg, 15),
    timeinforce: jspb.Message.getField(msg, 16),
    goodtilldatetime: jspb.Message.getField(msg, 17),
    orderquantity: jspb.Message.getOptionalFloatingPointField(msg, 18),
    filledquantity: jspb.Message.getOptionalFloatingPointField(msg, 19),
    remainingquantity: jspb.Message.getOptionalFloatingPointField(msg, 20),
    averagefillprice: jspb.Message.getOptionalFloatingPointField(msg, 21),
    lastfillprice: jspb.Message.getOptionalFloatingPointField(msg, 22),
    lastfilldatetime: jspb.Message.getField(msg, 23),
    lastfillquantity: jspb.Message.getOptionalFloatingPointField(msg, 24),
    lastfillexecutionid: jspb.Message.getField(msg, 25),
    tradeaccount: jspb.Message.getField(msg, 26),
    infotext: jspb.Message.getField(msg, 27),
    noorders: jspb.Message.getField(msg, 28),
    parentserverorderid: jspb.Message.getField(msg, 29),
    ocolinkedorderserverorderid: jspb.Message.getField(msg, 30),
    openorclose: jspb.Message.getField(msg, 31),
    previousclientorderid: jspb.Message.getField(msg, 32),
    freeformtext: jspb.Message.getField(msg, 33),
    orderreceiveddatetime: jspb.Message.getField(msg, 34)
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
 * @return {!proto.DTC_PB.OrderUpdate}
 */
proto.DTC_PB.OrderUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.OrderUpdate;
  return proto.DTC_PB.OrderUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.OrderUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.OrderUpdate}
 */
proto.DTC_PB.OrderUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalnummessages(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessagenumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreviousserverorderid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerorderid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientorderid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchangeorderid(value);
      break;
    case 10:
      var value = /** @type {!proto.DTC_PB.OrderStatusEnum} */ (reader.readEnum());
      msg.setOrderstatus(value);
      break;
    case 11:
      var value = /** @type {!proto.DTC_PB.OrderUpdateReasonEnum} */ (reader.readEnum());
      msg.setOrderupdatereason(value);
      break;
    case 12:
      var value = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (reader.readEnum());
      msg.setOrdertype(value);
      break;
    case 13:
      var value = /** @type {!proto.DTC_PB.BuySellEnum} */ (reader.readEnum());
      msg.setBuysell(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice1(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice2(value);
      break;
    case 16:
      var value = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setGoodtilldatetime(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOrderquantity(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFilledquantity(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRemainingquantity(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAveragefillprice(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastfillprice(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setLastfilldatetime(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastfillquantity(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastfillexecutionid(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfotext(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNoorders(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentserverorderid(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setOcolinkedorderserverorderid(value);
      break;
    case 31:
      var value = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (reader.readEnum());
      msg.setOpenorclose(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreviousclientorderid(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setFreeformtext(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setOrderreceiveddatetime(value);
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
proto.DTC_PB.OrderUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.OrderUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.OrderUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.OrderUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OrderStatusEnum} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OrderUpdateReasonEnum} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeSfixed64(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeDouble(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeDouble(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeDouble(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeDouble(
      21,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeDouble(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeSfixed64(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeDouble(
      24,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeString(
      25,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeString(
      26,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeString(
      27,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeUint32(
      28,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeString(
      29,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeString(
      30,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeEnum(
      31,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 32));
  if (f != null) {
    writer.writeString(
      32,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeString(
      33,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeSfixed64(
      34,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 TotalNumMessages = 2;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getTotalnummessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setTotalnummessages = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearTotalnummessages = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasTotalnummessages = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 MessageNumber = 3;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getMessagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setMessagenumber = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearMessagenumber = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasMessagenumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string Symbol = 4;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string Exchange = 5;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearExchange = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string PreviousServerOrderID = 6;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getPreviousserverorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setPreviousserverorderid = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearPreviousserverorderid = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasPreviousserverorderid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string ServerOrderID = 7;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getServerorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setServerorderid = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearServerorderid = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasServerorderid = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string ClientOrderID = 8;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getClientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setClientorderid = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearClientorderid = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasClientorderid = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string ExchangeOrderID = 9;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getExchangeorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setExchangeorderid = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearExchangeorderid = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasExchangeorderid = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional OrderStatusEnum OrderStatus = 10;
 * @return {!proto.DTC_PB.OrderStatusEnum}
 */
proto.DTC_PB.OrderUpdate.prototype.getOrderstatus = function() {
  return /** @type {!proto.DTC_PB.OrderStatusEnum} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {!proto.DTC_PB.OrderStatusEnum} value */
proto.DTC_PB.OrderUpdate.prototype.setOrderstatus = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearOrderstatus = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasOrderstatus = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional OrderUpdateReasonEnum OrderUpdateReason = 11;
 * @return {!proto.DTC_PB.OrderUpdateReasonEnum}
 */
proto.DTC_PB.OrderUpdate.prototype.getOrderupdatereason = function() {
  return /** @type {!proto.DTC_PB.OrderUpdateReasonEnum} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.DTC_PB.OrderUpdateReasonEnum} value */
proto.DTC_PB.OrderUpdate.prototype.setOrderupdatereason = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearOrderupdatereason = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasOrderupdatereason = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional OrderTypeEnum OrderType = 12;
 * @return {!proto.DTC_PB.OrderTypeEnum}
 */
proto.DTC_PB.OrderUpdate.prototype.getOrdertype = function() {
  return /** @type {!proto.DTC_PB.OrderTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {!proto.DTC_PB.OrderTypeEnum} value */
proto.DTC_PB.OrderUpdate.prototype.setOrdertype = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearOrdertype = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasOrdertype = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional BuySellEnum BuySell = 13;
 * @return {!proto.DTC_PB.BuySellEnum}
 */
proto.DTC_PB.OrderUpdate.prototype.getBuysell = function() {
  return /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {!proto.DTC_PB.BuySellEnum} value */
proto.DTC_PB.OrderUpdate.prototype.setBuysell = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearBuysell = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasBuysell = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional double Price1 = 14;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getPrice1 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 14, 0.0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setPrice1 = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearPrice1 = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasPrice1 = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double Price2 = 15;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getPrice2 = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 15, 0.0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setPrice2 = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearPrice2 = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasPrice2 = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional TimeInForceEnum TimeInForce = 16;
 * @return {!proto.DTC_PB.TimeInForceEnum}
 */
proto.DTC_PB.OrderUpdate.prototype.getTimeinforce = function() {
  return /** @type {!proto.DTC_PB.TimeInForceEnum} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {!proto.DTC_PB.TimeInForceEnum} value */
proto.DTC_PB.OrderUpdate.prototype.setTimeinforce = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearTimeinforce = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasTimeinforce = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional sfixed64 GoodTillDateTime = 17;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getGoodtilldatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setGoodtilldatetime = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearGoodtilldatetime = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasGoodtilldatetime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional double OrderQuantity = 18;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getOrderquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 18, 0.0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setOrderquantity = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearOrderquantity = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasOrderquantity = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional double FilledQuantity = 19;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getFilledquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 19, 0.0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setFilledquantity = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearFilledquantity = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasFilledquantity = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional double RemainingQuantity = 20;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getRemainingquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 20, 0.0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setRemainingquantity = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearRemainingquantity = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasRemainingquantity = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional double AverageFillPrice = 21;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getAveragefillprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 21, 0.0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setAveragefillprice = function(value) {
  jspb.Message.setField(this, 21, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearAveragefillprice = function() {
  jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasAveragefillprice = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional double LastFillPrice = 22;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getLastfillprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 22, 0.0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setLastfillprice = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearLastfillprice = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasLastfillprice = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional sfixed64 LastFillDateTime = 23;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getLastfilldatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setLastfilldatetime = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearLastfilldatetime = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasLastfilldatetime = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional double LastFillQuantity = 24;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getLastfillquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 24, 0.0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setLastfillquantity = function(value) {
  jspb.Message.setField(this, 24, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearLastfillquantity = function() {
  jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasLastfillquantity = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional string LastFillExecutionID = 25;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getLastfillexecutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setLastfillexecutionid = function(value) {
  jspb.Message.setField(this, 25, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearLastfillexecutionid = function() {
  jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasLastfillexecutionid = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional string TradeAccount = 26;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 26, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional string InfoText = 27;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getInfotext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setInfotext = function(value) {
  jspb.Message.setField(this, 27, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearInfotext = function() {
  jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasInfotext = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional uint32 NoOrders = 28;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getNoorders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setNoorders = function(value) {
  jspb.Message.setField(this, 28, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearNoorders = function() {
  jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasNoorders = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional string ParentServerOrderID = 29;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getParentserverorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setParentserverorderid = function(value) {
  jspb.Message.setField(this, 29, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearParentserverorderid = function() {
  jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasParentserverorderid = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional string OCOLinkedOrderServerOrderID = 30;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getOcolinkedorderserverorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setOcolinkedorderserverorderid = function(value) {
  jspb.Message.setField(this, 30, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearOcolinkedorderserverorderid = function() {
  jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasOcolinkedorderserverorderid = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional OpenCloseTradeEnum OpenOrClose = 31;
 * @return {!proto.DTC_PB.OpenCloseTradeEnum}
 */
proto.DTC_PB.OrderUpdate.prototype.getOpenorclose = function() {
  return /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/** @param {!proto.DTC_PB.OpenCloseTradeEnum} value */
proto.DTC_PB.OrderUpdate.prototype.setOpenorclose = function(value) {
  jspb.Message.setField(this, 31, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearOpenorclose = function() {
  jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasOpenorclose = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional string PreviousClientOrderID = 32;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getPreviousclientorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setPreviousclientorderid = function(value) {
  jspb.Message.setField(this, 32, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearPreviousclientorderid = function() {
  jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasPreviousclientorderid = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional string FreeFormText = 33;
 * @return {string}
 */
proto.DTC_PB.OrderUpdate.prototype.getFreeformtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/** @param {string} value */
proto.DTC_PB.OrderUpdate.prototype.setFreeformtext = function(value) {
  jspb.Message.setField(this, 33, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearFreeformtext = function() {
  jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasFreeformtext = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional sfixed64 OrderReceivedDateTime = 34;
 * @return {number}
 */
proto.DTC_PB.OrderUpdate.prototype.getOrderreceiveddatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/** @param {number} value */
proto.DTC_PB.OrderUpdate.prototype.setOrderreceiveddatetime = function(value) {
  jspb.Message.setField(this, 34, value);
};


proto.DTC_PB.OrderUpdate.prototype.clearOrderreceiveddatetime = function() {
  jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OrderUpdate.prototype.hasOrderreceiveddatetime = function() {
  return jspb.Message.getField(this, 34) != null;
};



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
proto.DTC_PB.OpenOrdersReject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.OpenOrdersReject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.OpenOrdersReject.displayName = 'proto.DTC_PB.OpenOrdersReject';
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
proto.DTC_PB.OpenOrdersReject.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.OpenOrdersReject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.OpenOrdersReject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.OpenOrdersReject.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    rejecttext: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.OpenOrdersReject}
 */
proto.DTC_PB.OpenOrdersReject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.OpenOrdersReject;
  return proto.DTC_PB.OpenOrdersReject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.OpenOrdersReject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.OpenOrdersReject}
 */
proto.DTC_PB.OpenOrdersReject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejecttext(value);
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
proto.DTC_PB.OpenOrdersReject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.OpenOrdersReject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.OpenOrdersReject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.OpenOrdersReject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.OpenOrdersReject.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.OpenOrdersReject.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.OpenOrdersReject.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OpenOrdersReject.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string RejectText = 2;
 * @return {string}
 */
proto.DTC_PB.OpenOrdersReject.prototype.getRejecttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.OpenOrdersReject.prototype.setRejecttext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.OpenOrdersReject.prototype.clearRejecttext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.OpenOrdersReject.prototype.hasRejecttext = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.HistoricalOrderFillResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalOrderFillResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalOrderFillResponse.displayName = 'proto.DTC_PB.HistoricalOrderFillResponse';
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
proto.DTC_PB.HistoricalOrderFillResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalOrderFillResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalOrderFillResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalOrderFillResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    totalnumbermessages: jspb.Message.getField(msg, 2),
    messagenumber: jspb.Message.getField(msg, 3),
    symbol: jspb.Message.getField(msg, 4),
    exchange: jspb.Message.getField(msg, 5),
    serverorderid: jspb.Message.getField(msg, 6),
    buysell: jspb.Message.getField(msg, 7),
    price: jspb.Message.getOptionalFloatingPointField(msg, 8),
    datetime: jspb.Message.getField(msg, 9),
    quantity: jspb.Message.getOptionalFloatingPointField(msg, 10),
    uniqueexecutionid: jspb.Message.getField(msg, 11),
    tradeaccount: jspb.Message.getField(msg, 12),
    openclose: jspb.Message.getField(msg, 13),
    noorderfills: jspb.Message.getField(msg, 14),
    infotext: jspb.Message.getField(msg, 15),
    highpriceduringposition: jspb.Message.getOptionalFloatingPointField(msg, 16),
    lowpriceduringposition: jspb.Message.getOptionalFloatingPointField(msg, 17),
    positionquantity: jspb.Message.getOptionalFloatingPointField(msg, 18)
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
 * @return {!proto.DTC_PB.HistoricalOrderFillResponse}
 */
proto.DTC_PB.HistoricalOrderFillResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalOrderFillResponse;
  return proto.DTC_PB.HistoricalOrderFillResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalOrderFillResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalOrderFillResponse}
 */
proto.DTC_PB.HistoricalOrderFillResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalnumbermessages(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessagenumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerorderid(value);
      break;
    case 7:
      var value = /** @type {!proto.DTC_PB.BuySellEnum} */ (reader.readEnum());
      msg.setBuysell(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setDatetime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueexecutionid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 13:
      var value = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (reader.readEnum());
      msg.setOpenclose(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNoorderfills(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfotext(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighpriceduringposition(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowpriceduringposition(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPositionquantity(value);
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
proto.DTC_PB.HistoricalOrderFillResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalOrderFillResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalOrderFillResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalOrderFillResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeSfixed64(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeDouble(
      18,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 TotalNumberMessages = 2;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getTotalnumbermessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setTotalnumbermessages = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearTotalnumbermessages = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasTotalnumbermessages = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 MessageNumber = 3;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getMessagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setMessagenumber = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearMessagenumber = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasMessagenumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string Symbol = 4;
 * @return {string}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string Exchange = 5;
 * @return {string}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearExchange = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string ServerOrderID = 6;
 * @return {string}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getServerorderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setServerorderid = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearServerorderid = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasServerorderid = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional BuySellEnum BuySell = 7;
 * @return {!proto.DTC_PB.BuySellEnum}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getBuysell = function() {
  return /** @type {!proto.DTC_PB.BuySellEnum} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.DTC_PB.BuySellEnum} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setBuysell = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearBuysell = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasBuysell = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double Price = 8;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearPrice = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional sfixed64 DateTime = 9;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double Quantity = 10;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getQuantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string UniqueExecutionID = 11;
 * @return {string}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getUniqueexecutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setUniqueexecutionid = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearUniqueexecutionid = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasUniqueexecutionid = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string TradeAccount = 12;
 * @return {string}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional OpenCloseTradeEnum OpenClose = 13;
 * @return {!proto.DTC_PB.OpenCloseTradeEnum}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getOpenclose = function() {
  return /** @type {!proto.DTC_PB.OpenCloseTradeEnum} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {!proto.DTC_PB.OpenCloseTradeEnum} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setOpenclose = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearOpenclose = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasOpenclose = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint32 NoOrderFills = 14;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getNoorderfills = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setNoorderfills = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearNoorderfills = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasNoorderfills = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string InfoText = 15;
 * @return {string}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getInfotext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setInfotext = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearInfotext = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasInfotext = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional double HighPriceDuringPosition = 16;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getHighpriceduringposition = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 16, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setHighpriceduringposition = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearHighpriceduringposition = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasHighpriceduringposition = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional double LowPriceDuringPosition = 17;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getLowpriceduringposition = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 17, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setLowpriceduringposition = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearLowpriceduringposition = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasLowpriceduringposition = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional double PositionQuantity = 18;
 * @return {number}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.getPositionquantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 18, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.setPositionquantity = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.DTC_PB.HistoricalOrderFillResponse.prototype.clearPositionquantity = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalOrderFillResponse.prototype.hasPositionquantity = function() {
  return jspb.Message.getField(this, 18) != null;
};



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
proto.DTC_PB.PositionUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.PositionUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.PositionUpdate.displayName = 'proto.DTC_PB.PositionUpdate';
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
proto.DTC_PB.PositionUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.PositionUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.PositionUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.PositionUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    totalnumbermessages: jspb.Message.getField(msg, 2),
    messagenumber: jspb.Message.getField(msg, 3),
    symbol: jspb.Message.getField(msg, 4),
    exchange: jspb.Message.getField(msg, 5),
    quantity: jspb.Message.getOptionalFloatingPointField(msg, 6),
    averageprice: jspb.Message.getOptionalFloatingPointField(msg, 7),
    positionidentifier: jspb.Message.getField(msg, 8),
    tradeaccount: jspb.Message.getField(msg, 9),
    nopositions: jspb.Message.getField(msg, 10),
    unsolicited: jspb.Message.getField(msg, 11),
    marginrequirement: jspb.Message.getOptionalFloatingPointField(msg, 12)
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
 * @return {!proto.DTC_PB.PositionUpdate}
 */
proto.DTC_PB.PositionUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.PositionUpdate;
  return proto.DTC_PB.PositionUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.PositionUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.PositionUpdate}
 */
proto.DTC_PB.PositionUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalnumbermessages(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessagenumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setQuantity(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageprice(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionidentifier(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNopositions(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnsolicited(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarginrequirement(value);
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
proto.DTC_PB.PositionUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.PositionUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.PositionUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.PositionUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.PositionUpdate.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.PositionUpdate.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 TotalNumberMessages = 2;
 * @return {number}
 */
proto.DTC_PB.PositionUpdate.prototype.getTotalnumbermessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.PositionUpdate.prototype.setTotalnumbermessages = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearTotalnumbermessages = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasTotalnumbermessages = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 MessageNumber = 3;
 * @return {number}
 */
proto.DTC_PB.PositionUpdate.prototype.getMessagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.PositionUpdate.prototype.setMessagenumber = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearMessagenumber = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasMessagenumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string Symbol = 4;
 * @return {string}
 */
proto.DTC_PB.PositionUpdate.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.PositionUpdate.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string Exchange = 5;
 * @return {string}
 */
proto.DTC_PB.PositionUpdate.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.DTC_PB.PositionUpdate.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearExchange = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double Quantity = 6;
 * @return {number}
 */
proto.DTC_PB.PositionUpdate.prototype.getQuantity = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DTC_PB.PositionUpdate.prototype.setQuantity = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearQuantity = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double AveragePrice = 7;
 * @return {number}
 */
proto.DTC_PB.PositionUpdate.prototype.getAverageprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.DTC_PB.PositionUpdate.prototype.setAverageprice = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearAverageprice = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasAverageprice = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string PositionIdentifier = 8;
 * @return {string}
 */
proto.DTC_PB.PositionUpdate.prototype.getPositionidentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.DTC_PB.PositionUpdate.prototype.setPositionidentifier = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearPositionidentifier = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasPositionidentifier = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string TradeAccount = 9;
 * @return {string}
 */
proto.DTC_PB.PositionUpdate.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.DTC_PB.PositionUpdate.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 NoPositions = 10;
 * @return {number}
 */
proto.DTC_PB.PositionUpdate.prototype.getNopositions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.DTC_PB.PositionUpdate.prototype.setNopositions = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearNopositions = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasNopositions = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 Unsolicited = 11;
 * @return {number}
 */
proto.DTC_PB.PositionUpdate.prototype.getUnsolicited = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.DTC_PB.PositionUpdate.prototype.setUnsolicited = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearUnsolicited = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasUnsolicited = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double MarginRequirement = 12;
 * @return {number}
 */
proto.DTC_PB.PositionUpdate.prototype.getMarginrequirement = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 12, 0.0));
};


/** @param {number} value */
proto.DTC_PB.PositionUpdate.prototype.setMarginrequirement = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.PositionUpdate.prototype.clearMarginrequirement = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.PositionUpdate.prototype.hasMarginrequirement = function() {
  return jspb.Message.getField(this, 12) != null;
};



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
proto.DTC_PB.TradeAccountsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.TradeAccountsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.TradeAccountsRequest.displayName = 'proto.DTC_PB.TradeAccountsRequest';
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
proto.DTC_PB.TradeAccountsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.TradeAccountsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.TradeAccountsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.TradeAccountsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1)
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
 * @return {!proto.DTC_PB.TradeAccountsRequest}
 */
proto.DTC_PB.TradeAccountsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.TradeAccountsRequest;
  return proto.DTC_PB.TradeAccountsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.TradeAccountsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.TradeAccountsRequest}
 */
proto.DTC_PB.TradeAccountsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
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
proto.DTC_PB.TradeAccountsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.TradeAccountsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.TradeAccountsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.TradeAccountsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.TradeAccountsRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.TradeAccountsRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.TradeAccountsRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.TradeAccountsRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.DTC_PB.TradeAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.TradeAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.TradeAccountResponse.displayName = 'proto.DTC_PB.TradeAccountResponse';
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
proto.DTC_PB.TradeAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.TradeAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.TradeAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.TradeAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalnumbermessages: jspb.Message.getField(msg, 1),
    messagenumber: jspb.Message.getField(msg, 2),
    tradeaccount: jspb.Message.getField(msg, 3),
    requestid: jspb.Message.getField(msg, 4)
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
 * @return {!proto.DTC_PB.TradeAccountResponse}
 */
proto.DTC_PB.TradeAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.TradeAccountResponse;
  return proto.DTC_PB.TradeAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.TradeAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.TradeAccountResponse}
 */
proto.DTC_PB.TradeAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalnumbermessages(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessagenumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
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
proto.DTC_PB.TradeAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.TradeAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.TradeAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.TradeAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 TotalNumberMessages = 1;
 * @return {number}
 */
proto.DTC_PB.TradeAccountResponse.prototype.getTotalnumbermessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.TradeAccountResponse.prototype.setTotalnumbermessages = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.TradeAccountResponse.prototype.clearTotalnumbermessages = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.TradeAccountResponse.prototype.hasTotalnumbermessages = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 MessageNumber = 2;
 * @return {number}
 */
proto.DTC_PB.TradeAccountResponse.prototype.getMessagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.TradeAccountResponse.prototype.setMessagenumber = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.TradeAccountResponse.prototype.clearMessagenumber = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.TradeAccountResponse.prototype.hasMessagenumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string TradeAccount = 3;
 * @return {string}
 */
proto.DTC_PB.TradeAccountResponse.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.TradeAccountResponse.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.TradeAccountResponse.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.TradeAccountResponse.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 RequestID = 4;
 * @return {number}
 */
proto.DTC_PB.TradeAccountResponse.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.TradeAccountResponse.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.TradeAccountResponse.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.TradeAccountResponse.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.DTC_PB.ExchangeListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.ExchangeListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.ExchangeListRequest.displayName = 'proto.DTC_PB.ExchangeListRequest';
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
proto.DTC_PB.ExchangeListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.ExchangeListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.ExchangeListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.ExchangeListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1)
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
 * @return {!proto.DTC_PB.ExchangeListRequest}
 */
proto.DTC_PB.ExchangeListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.ExchangeListRequest;
  return proto.DTC_PB.ExchangeListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.ExchangeListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.ExchangeListRequest}
 */
proto.DTC_PB.ExchangeListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
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
proto.DTC_PB.ExchangeListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.ExchangeListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.ExchangeListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.ExchangeListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.ExchangeListRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.ExchangeListRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.ExchangeListRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.ExchangeListRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.DTC_PB.ExchangeListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.ExchangeListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.ExchangeListResponse.displayName = 'proto.DTC_PB.ExchangeListResponse';
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
proto.DTC_PB.ExchangeListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.ExchangeListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.ExchangeListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.ExchangeListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    exchange: jspb.Message.getField(msg, 2),
    isfinalmessage: jspb.Message.getField(msg, 3),
    description: jspb.Message.getField(msg, 4)
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
 * @return {!proto.DTC_PB.ExchangeListResponse}
 */
proto.DTC_PB.ExchangeListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.ExchangeListResponse;
  return proto.DTC_PB.ExchangeListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.ExchangeListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.ExchangeListResponse}
 */
proto.DTC_PB.ExchangeListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsfinalmessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.DTC_PB.ExchangeListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.ExchangeListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.ExchangeListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.ExchangeListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.ExchangeListResponse.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.ExchangeListResponse.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.ExchangeListResponse.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.ExchangeListResponse.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Exchange = 2;
 * @return {string}
 */
proto.DTC_PB.ExchangeListResponse.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.ExchangeListResponse.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.ExchangeListResponse.prototype.clearExchange = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.ExchangeListResponse.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 IsFinalMessage = 3;
 * @return {number}
 */
proto.DTC_PB.ExchangeListResponse.prototype.getIsfinalmessage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.ExchangeListResponse.prototype.setIsfinalmessage = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.ExchangeListResponse.prototype.clearIsfinalmessage = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.ExchangeListResponse.prototype.hasIsfinalmessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string Description = 4;
 * @return {string}
 */
proto.DTC_PB.ExchangeListResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.ExchangeListResponse.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.ExchangeListResponse.prototype.clearDescription = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.ExchangeListResponse.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.DTC_PB.SymbolsForExchangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.SymbolsForExchangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.SymbolsForExchangeRequest.displayName = 'proto.DTC_PB.SymbolsForExchangeRequest';
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
proto.DTC_PB.SymbolsForExchangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.SymbolsForExchangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.SymbolsForExchangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SymbolsForExchangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    exchange: jspb.Message.getField(msg, 2),
    securitytype: jspb.Message.getField(msg, 3),
    requestaction: jspb.Message.getField(msg, 4),
    symbol: jspb.Message.getField(msg, 5)
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
 * @return {!proto.DTC_PB.SymbolsForExchangeRequest}
 */
proto.DTC_PB.SymbolsForExchangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.SymbolsForExchangeRequest;
  return proto.DTC_PB.SymbolsForExchangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.SymbolsForExchangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.SymbolsForExchangeRequest}
 */
proto.DTC_PB.SymbolsForExchangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 3:
      var value = /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (reader.readEnum());
      msg.setSecuritytype(value);
      break;
    case 4:
      var value = /** @type {!proto.DTC_PB.RequestActionEnum} */ (reader.readEnum());
      msg.setRequestaction(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
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
proto.DTC_PB.SymbolsForExchangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.SymbolsForExchangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.SymbolsForExchangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SymbolsForExchangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.RequestActionEnum} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.SymbolsForExchangeRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Exchange = 2;
 * @return {string}
 */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.SymbolsForExchangeRequest.prototype.clearExchange = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SecurityTypeEnum SecurityType = 3;
 * @return {!proto.DTC_PB.SecurityTypeEnum}
 */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.getSecuritytype = function() {
  return /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.DTC_PB.SecurityTypeEnum} value */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.setSecuritytype = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.SymbolsForExchangeRequest.prototype.clearSecuritytype = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.hasSecuritytype = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RequestActionEnum RequestAction = 4;
 * @return {!proto.DTC_PB.RequestActionEnum}
 */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.getRequestaction = function() {
  return /** @type {!proto.DTC_PB.RequestActionEnum} */ (jspb.Message.getFieldWithDefault(this, 4, 1));
};


/** @param {!proto.DTC_PB.RequestActionEnum} value */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.setRequestaction = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.SymbolsForExchangeRequest.prototype.clearRequestaction = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.hasRequestaction = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string Symbol = 5;
 * @return {string}
 */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.SymbolsForExchangeRequest.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolsForExchangeRequest.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 5) != null;
};



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
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.UnderlyingSymbolsForExchangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.displayName = 'proto.DTC_PB.UnderlyingSymbolsForExchangeRequest';
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
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.UnderlyingSymbolsForExchangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    exchange: jspb.Message.getField(msg, 2),
    securitytype: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.UnderlyingSymbolsForExchangeRequest}
 */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.UnderlyingSymbolsForExchangeRequest;
  return proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.UnderlyingSymbolsForExchangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.UnderlyingSymbolsForExchangeRequest}
 */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 3:
      var value = /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (reader.readEnum());
      msg.setSecuritytype(value);
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
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.UnderlyingSymbolsForExchangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Exchange = 2;
 * @return {string}
 */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.clearExchange = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SecurityTypeEnum SecurityType = 3;
 * @return {!proto.DTC_PB.SecurityTypeEnum}
 */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.getSecuritytype = function() {
  return /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.DTC_PB.SecurityTypeEnum} value */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.setSecuritytype = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.clearSecuritytype = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.UnderlyingSymbolsForExchangeRequest.prototype.hasSecuritytype = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.SymbolsForUnderlyingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.SymbolsForUnderlyingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.SymbolsForUnderlyingRequest.displayName = 'proto.DTC_PB.SymbolsForUnderlyingRequest';
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
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.SymbolsForUnderlyingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.SymbolsForUnderlyingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    underlyingsymbol: jspb.Message.getField(msg, 2),
    exchange: jspb.Message.getField(msg, 3),
    securitytype: jspb.Message.getField(msg, 4)
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
 * @return {!proto.DTC_PB.SymbolsForUnderlyingRequest}
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.SymbolsForUnderlyingRequest;
  return proto.DTC_PB.SymbolsForUnderlyingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.SymbolsForUnderlyingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.SymbolsForUnderlyingRequest}
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnderlyingsymbol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 4:
      var value = /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (reader.readEnum());
      msg.setSecuritytype(value);
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
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.SymbolsForUnderlyingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.SymbolsForUnderlyingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string UnderlyingSymbol = 2;
 * @return {string}
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.getUnderlyingsymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.setUnderlyingsymbol = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.clearUnderlyingsymbol = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.hasUnderlyingsymbol = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Exchange = 3;
 * @return {string}
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.clearExchange = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SecurityTypeEnum SecurityType = 4;
 * @return {!proto.DTC_PB.SecurityTypeEnum}
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.getSecuritytype = function() {
  return /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.DTC_PB.SecurityTypeEnum} value */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.setSecuritytype = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.clearSecuritytype = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolsForUnderlyingRequest.prototype.hasSecuritytype = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.DTC_PB.SymbolSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.SymbolSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.SymbolSearchRequest.displayName = 'proto.DTC_PB.SymbolSearchRequest';
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
proto.DTC_PB.SymbolSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.SymbolSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.SymbolSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SymbolSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    searchtext: jspb.Message.getField(msg, 2),
    exchange: jspb.Message.getField(msg, 3),
    securitytype: jspb.Message.getField(msg, 4),
    searchtype: jspb.Message.getField(msg, 5)
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
 * @return {!proto.DTC_PB.SymbolSearchRequest}
 */
proto.DTC_PB.SymbolSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.SymbolSearchRequest;
  return proto.DTC_PB.SymbolSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.SymbolSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.SymbolSearchRequest}
 */
proto.DTC_PB.SymbolSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchtext(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 4:
      var value = /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (reader.readEnum());
      msg.setSecuritytype(value);
      break;
    case 5:
      var value = /** @type {!proto.DTC_PB.SearchTypeEnum} */ (reader.readEnum());
      msg.setSearchtype(value);
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
proto.DTC_PB.SymbolSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.SymbolSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.SymbolSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SymbolSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.SearchTypeEnum} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.SymbolSearchRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.SymbolSearchRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.SymbolSearchRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolSearchRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string SearchText = 2;
 * @return {string}
 */
proto.DTC_PB.SymbolSearchRequest.prototype.getSearchtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.SymbolSearchRequest.prototype.setSearchtext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.SymbolSearchRequest.prototype.clearSearchtext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolSearchRequest.prototype.hasSearchtext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Exchange = 3;
 * @return {string}
 */
proto.DTC_PB.SymbolSearchRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.SymbolSearchRequest.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.SymbolSearchRequest.prototype.clearExchange = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolSearchRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SecurityTypeEnum SecurityType = 4;
 * @return {!proto.DTC_PB.SecurityTypeEnum}
 */
proto.DTC_PB.SymbolSearchRequest.prototype.getSecuritytype = function() {
  return /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.DTC_PB.SecurityTypeEnum} value */
proto.DTC_PB.SymbolSearchRequest.prototype.setSecuritytype = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.SymbolSearchRequest.prototype.clearSecuritytype = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolSearchRequest.prototype.hasSecuritytype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SearchTypeEnum SearchType = 5;
 * @return {!proto.DTC_PB.SearchTypeEnum}
 */
proto.DTC_PB.SymbolSearchRequest.prototype.getSearchtype = function() {
  return /** @type {!proto.DTC_PB.SearchTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DTC_PB.SearchTypeEnum} value */
proto.DTC_PB.SymbolSearchRequest.prototype.setSearchtype = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.SymbolSearchRequest.prototype.clearSearchtype = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SymbolSearchRequest.prototype.hasSearchtype = function() {
  return jspb.Message.getField(this, 5) != null;
};



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
proto.DTC_PB.SecurityDefinitionForSymbolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.SecurityDefinitionForSymbolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.SecurityDefinitionForSymbolRequest.displayName = 'proto.DTC_PB.SecurityDefinitionForSymbolRequest';
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
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.SecurityDefinitionForSymbolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.SecurityDefinitionForSymbolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    symbol: jspb.Message.getField(msg, 2),
    exchange: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.SecurityDefinitionForSymbolRequest}
 */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.SecurityDefinitionForSymbolRequest;
  return proto.DTC_PB.SecurityDefinitionForSymbolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.SecurityDefinitionForSymbolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.SecurityDefinitionForSymbolRequest}
 */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
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
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.SecurityDefinitionForSymbolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.SecurityDefinitionForSymbolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Symbol = 2;
 * @return {string}
 */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Exchange = 3;
 * @return {string}
 */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.clearExchange = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionForSymbolRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.SecurityDefinitionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.SecurityDefinitionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.SecurityDefinitionResponse.displayName = 'proto.DTC_PB.SecurityDefinitionResponse';
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
proto.DTC_PB.SecurityDefinitionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.SecurityDefinitionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.SecurityDefinitionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SecurityDefinitionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    symbol: jspb.Message.getField(msg, 2),
    exchange: jspb.Message.getField(msg, 3),
    securitytype: jspb.Message.getField(msg, 4),
    description: jspb.Message.getField(msg, 5),
    minpriceincrement: jspb.Message.getOptionalFloatingPointField(msg, 6),
    pricedisplayformat: jspb.Message.getField(msg, 7),
    currencyvalueperincrement: jspb.Message.getOptionalFloatingPointField(msg, 8),
    isfinalmessage: jspb.Message.getField(msg, 9),
    floattointpricemultiplier: jspb.Message.getOptionalFloatingPointField(msg, 10),
    inttofloatpricedivisor: jspb.Message.getOptionalFloatingPointField(msg, 11),
    underlyingsymbol: jspb.Message.getField(msg, 12),
    updatesbidaskonly: jspb.Message.getField(msg, 13),
    strikeprice: jspb.Message.getOptionalFloatingPointField(msg, 14),
    putorcall: jspb.Message.getField(msg, 15),
    shortinterest: jspb.Message.getField(msg, 16),
    securityexpirationdate: jspb.Message.getField(msg, 17),
    buyrolloverinterest: jspb.Message.getOptionalFloatingPointField(msg, 18),
    sellrolloverinterest: jspb.Message.getOptionalFloatingPointField(msg, 19),
    earningspershare: jspb.Message.getOptionalFloatingPointField(msg, 20),
    sharesoutstanding: jspb.Message.getField(msg, 21),
    inttofloatquantitydivisor: jspb.Message.getOptionalFloatingPointField(msg, 22),
    hasmarketdepthdata: jspb.Message.getField(msg, 23),
    displaypricemultiplier: jspb.Message.getOptionalFloatingPointField(msg, 24),
    exchangesymbol: jspb.Message.getField(msg, 25),
    initialmarginrequirement: jspb.Message.getOptionalFloatingPointField(msg, 26),
    maintenancemarginrequirement: jspb.Message.getOptionalFloatingPointField(msg, 27),
    currency: jspb.Message.getField(msg, 28)
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
 * @return {!proto.DTC_PB.SecurityDefinitionResponse}
 */
proto.DTC_PB.SecurityDefinitionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.SecurityDefinitionResponse;
  return proto.DTC_PB.SecurityDefinitionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.SecurityDefinitionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.SecurityDefinitionResponse}
 */
proto.DTC_PB.SecurityDefinitionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 4:
      var value = /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (reader.readEnum());
      msg.setSecuritytype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinpriceincrement(value);
      break;
    case 7:
      var value = /** @type {!proto.DTC_PB.PriceDisplayFormatEnum} */ (reader.readEnum());
      msg.setPricedisplayformat(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCurrencyvalueperincrement(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsfinalmessage(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloattointpricemultiplier(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setInttofloatpricedivisor(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnderlyingsymbol(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUpdatesbidaskonly(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStrikeprice(value);
      break;
    case 15:
      var value = /** @type {!proto.DTC_PB.PutCallEnum} */ (reader.readEnum());
      msg.setPutorcall(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setShortinterest(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setSecurityexpirationdate(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBuyrolloverinterest(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSellrolloverinterest(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setEarningspershare(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSharesoutstanding(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setInttofloatquantitydivisor(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHasmarketdepthdata(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDisplaypricemultiplier(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchangesymbol(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setInitialmarginrequirement(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaintenancemarginrequirement(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
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
proto.DTC_PB.SecurityDefinitionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.SecurityDefinitionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.SecurityDefinitionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SecurityDefinitionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.PriceDisplayFormatEnum} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.PutCallEnum} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeSfixed32(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeFloat(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeFloat(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeFloat(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeUint32(
      21,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeFloat(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeUint32(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeFloat(
      24,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeString(
      25,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeFloat(
      26,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeFloat(
      27,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeString(
      28,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Symbol = 2;
 * @return {string}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Exchange = 3;
 * @return {string}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearExchange = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SecurityTypeEnum SecurityType = 4;
 * @return {!proto.DTC_PB.SecurityTypeEnum}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getSecuritytype = function() {
  return /** @type {!proto.DTC_PB.SecurityTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.DTC_PB.SecurityTypeEnum} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setSecuritytype = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearSecuritytype = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasSecuritytype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string Description = 5;
 * @return {string}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearDescription = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional float MinPriceIncrement = 6;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getMinpriceincrement = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setMinpriceincrement = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearMinpriceincrement = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasMinpriceincrement = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PriceDisplayFormatEnum PriceDisplayFormat = 7;
 * @return {!proto.DTC_PB.PriceDisplayFormatEnum}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getPricedisplayformat = function() {
  return /** @type {!proto.DTC_PB.PriceDisplayFormatEnum} */ (jspb.Message.getFieldWithDefault(this, 7, -1));
};


/** @param {!proto.DTC_PB.PriceDisplayFormatEnum} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setPricedisplayformat = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearPricedisplayformat = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasPricedisplayformat = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional float CurrencyValuePerIncrement = 8;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getCurrencyvalueperincrement = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setCurrencyvalueperincrement = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearCurrencyvalueperincrement = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasCurrencyvalueperincrement = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 IsFinalMessage = 9;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getIsfinalmessage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setIsfinalmessage = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearIsfinalmessage = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasIsfinalmessage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional float FloatToIntPriceMultiplier = 10;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getFloattointpricemultiplier = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setFloattointpricemultiplier = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearFloattointpricemultiplier = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasFloattointpricemultiplier = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional float IntToFloatPriceDivisor = 11;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getInttofloatpricedivisor = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 11, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setInttofloatpricedivisor = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearInttofloatpricedivisor = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasInttofloatpricedivisor = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string UnderlyingSymbol = 12;
 * @return {string}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getUnderlyingsymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setUnderlyingsymbol = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearUnderlyingsymbol = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasUnderlyingsymbol = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint32 UpdatesBidAskOnly = 13;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getUpdatesbidaskonly = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setUpdatesbidaskonly = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearUpdatesbidaskonly = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasUpdatesbidaskonly = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional float StrikePrice = 14;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getStrikeprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 14, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setStrikeprice = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearStrikeprice = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasStrikeprice = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional PutCallEnum PutOrCall = 15;
 * @return {!proto.DTC_PB.PutCallEnum}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getPutorcall = function() {
  return /** @type {!proto.DTC_PB.PutCallEnum} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {!proto.DTC_PB.PutCallEnum} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setPutorcall = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearPutorcall = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasPutorcall = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional uint32 ShortInterest = 16;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getShortinterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setShortinterest = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearShortinterest = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasShortinterest = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional sfixed32 SecurityExpirationDate = 17;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getSecurityexpirationdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setSecurityexpirationdate = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearSecurityexpirationdate = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasSecurityexpirationdate = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional float BuyRolloverInterest = 18;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getBuyrolloverinterest = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 18, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setBuyrolloverinterest = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearBuyrolloverinterest = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasBuyrolloverinterest = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional float SellRolloverInterest = 19;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getSellrolloverinterest = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 19, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setSellrolloverinterest = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearSellrolloverinterest = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasSellrolloverinterest = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional float EarningsPerShare = 20;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getEarningspershare = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 20, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setEarningspershare = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearEarningspershare = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasEarningspershare = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional uint32 SharesOutstanding = 21;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getSharesoutstanding = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setSharesoutstanding = function(value) {
  jspb.Message.setField(this, 21, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearSharesoutstanding = function() {
  jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasSharesoutstanding = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional float IntToFloatQuantityDivisor = 22;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getInttofloatquantitydivisor = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 22, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setInttofloatquantitydivisor = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearInttofloatquantitydivisor = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasInttofloatquantitydivisor = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional uint32 HasMarketDepthData = 23;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getHasmarketdepthdata = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setHasmarketdepthdata = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearHasmarketdepthdata = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasHasmarketdepthdata = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional float DisplayPriceMultiplier = 24;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getDisplaypricemultiplier = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 24, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setDisplaypricemultiplier = function(value) {
  jspb.Message.setField(this, 24, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearDisplaypricemultiplier = function() {
  jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasDisplaypricemultiplier = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional string ExchangeSymbol = 25;
 * @return {string}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getExchangesymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/** @param {string} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setExchangesymbol = function(value) {
  jspb.Message.setField(this, 25, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearExchangesymbol = function() {
  jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasExchangesymbol = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional float InitialMarginRequirement = 26;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getInitialmarginrequirement = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 26, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setInitialmarginrequirement = function(value) {
  jspb.Message.setField(this, 26, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearInitialmarginrequirement = function() {
  jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasInitialmarginrequirement = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional float MaintenanceMarginRequirement = 27;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getMaintenancemarginrequirement = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 27, 0.0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setMaintenancemarginrequirement = function(value) {
  jspb.Message.setField(this, 27, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearMaintenancemarginrequirement = function() {
  jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasMaintenancemarginrequirement = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional string Currency = 28;
 * @return {string}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/** @param {string} value */
proto.DTC_PB.SecurityDefinitionResponse.prototype.setCurrency = function(value) {
  jspb.Message.setField(this, 28, value);
};


proto.DTC_PB.SecurityDefinitionResponse.prototype.clearCurrency = function() {
  jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionResponse.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 28) != null;
};



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
proto.DTC_PB.SecurityDefinitionReject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.SecurityDefinitionReject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.SecurityDefinitionReject.displayName = 'proto.DTC_PB.SecurityDefinitionReject';
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
proto.DTC_PB.SecurityDefinitionReject.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.SecurityDefinitionReject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.SecurityDefinitionReject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SecurityDefinitionReject.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    rejecttext: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.SecurityDefinitionReject}
 */
proto.DTC_PB.SecurityDefinitionReject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.SecurityDefinitionReject;
  return proto.DTC_PB.SecurityDefinitionReject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.SecurityDefinitionReject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.SecurityDefinitionReject}
 */
proto.DTC_PB.SecurityDefinitionReject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejecttext(value);
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
proto.DTC_PB.SecurityDefinitionReject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.SecurityDefinitionReject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.SecurityDefinitionReject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.SecurityDefinitionReject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.SecurityDefinitionReject.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.SecurityDefinitionReject.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.SecurityDefinitionReject.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionReject.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string RejectText = 2;
 * @return {string}
 */
proto.DTC_PB.SecurityDefinitionReject.prototype.getRejecttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.SecurityDefinitionReject.prototype.setRejecttext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.SecurityDefinitionReject.prototype.clearRejecttext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.SecurityDefinitionReject.prototype.hasRejecttext = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.AccountBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.AccountBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.AccountBalanceRequest.displayName = 'proto.DTC_PB.AccountBalanceRequest';
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
proto.DTC_PB.AccountBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.AccountBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.AccountBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.AccountBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    tradeaccount: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.AccountBalanceRequest}
 */
proto.DTC_PB.AccountBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.AccountBalanceRequest;
  return proto.DTC_PB.AccountBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.AccountBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.AccountBalanceRequest}
 */
proto.DTC_PB.AccountBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
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
proto.DTC_PB.AccountBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.AccountBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.AccountBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.AccountBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.AccountBalanceRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string TradeAccount = 2;
 * @return {string}
 */
proto.DTC_PB.AccountBalanceRequest.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.AccountBalanceRequest.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.AccountBalanceRequest.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceRequest.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.AccountBalanceReject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.AccountBalanceReject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.AccountBalanceReject.displayName = 'proto.DTC_PB.AccountBalanceReject';
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
proto.DTC_PB.AccountBalanceReject.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.AccountBalanceReject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.AccountBalanceReject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.AccountBalanceReject.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    rejecttext: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.AccountBalanceReject}
 */
proto.DTC_PB.AccountBalanceReject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.AccountBalanceReject;
  return proto.DTC_PB.AccountBalanceReject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.AccountBalanceReject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.AccountBalanceReject}
 */
proto.DTC_PB.AccountBalanceReject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejecttext(value);
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
proto.DTC_PB.AccountBalanceReject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.AccountBalanceReject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.AccountBalanceReject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.AccountBalanceReject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceReject.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceReject.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.AccountBalanceReject.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceReject.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string RejectText = 2;
 * @return {string}
 */
proto.DTC_PB.AccountBalanceReject.prototype.getRejecttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.AccountBalanceReject.prototype.setRejecttext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.AccountBalanceReject.prototype.clearRejecttext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceReject.prototype.hasRejecttext = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.AccountBalanceUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.AccountBalanceUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.AccountBalanceUpdate.displayName = 'proto.DTC_PB.AccountBalanceUpdate';
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
proto.DTC_PB.AccountBalanceUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.AccountBalanceUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.AccountBalanceUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.AccountBalanceUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    cashbalance: jspb.Message.getOptionalFloatingPointField(msg, 2),
    balanceavailablefornewpositions: jspb.Message.getOptionalFloatingPointField(msg, 3),
    accountcurrency: jspb.Message.getField(msg, 4),
    tradeaccount: jspb.Message.getField(msg, 5),
    securitiesvalue: jspb.Message.getOptionalFloatingPointField(msg, 6),
    marginrequirement: jspb.Message.getOptionalFloatingPointField(msg, 7),
    totalnumbermessages: jspb.Message.getField(msg, 8),
    messagenumber: jspb.Message.getField(msg, 9),
    noaccountbalances: jspb.Message.getField(msg, 10),
    unsolicited: jspb.Message.getField(msg, 11),
    openpositionsprofitloss: jspb.Message.getOptionalFloatingPointField(msg, 12),
    dailyprofitloss: jspb.Message.getOptionalFloatingPointField(msg, 13),
    infotext: jspb.Message.getField(msg, 14)
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
 * @return {!proto.DTC_PB.AccountBalanceUpdate}
 */
proto.DTC_PB.AccountBalanceUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.AccountBalanceUpdate;
  return proto.DTC_PB.AccountBalanceUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.AccountBalanceUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.AccountBalanceUpdate}
 */
proto.DTC_PB.AccountBalanceUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCashbalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBalanceavailablefornewpositions(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountcurrency(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSecuritiesvalue(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMarginrequirement(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalnumbermessages(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessagenumber(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNoaccountbalances(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnsolicited(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpenpositionsprofitloss(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDailyprofitloss(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfotext(value);
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
proto.DTC_PB.AccountBalanceUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.AccountBalanceUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.AccountBalanceUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.AccountBalanceUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double CashBalance = 2;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getCashbalance = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setCashbalance = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearCashbalance = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasCashbalance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double BalanceAvailableForNewPositions = 3;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getBalanceavailablefornewpositions = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setBalanceavailablefornewpositions = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearBalanceavailablefornewpositions = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasBalanceavailablefornewpositions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string AccountCurrency = 4;
 * @return {string}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getAccountcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setAccountcurrency = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearAccountcurrency = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasAccountcurrency = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string TradeAccount = 5;
 * @return {string}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double SecuritiesValue = 6;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getSecuritiesvalue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setSecuritiesvalue = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearSecuritiesvalue = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasSecuritiesvalue = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double MarginRequirement = 7;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getMarginrequirement = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setMarginrequirement = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearMarginrequirement = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasMarginrequirement = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 TotalNumberMessages = 8;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getTotalnumbermessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setTotalnumbermessages = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearTotalnumbermessages = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasTotalnumbermessages = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 MessageNumber = 9;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getMessagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setMessagenumber = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearMessagenumber = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasMessagenumber = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 NoAccountBalances = 10;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getNoaccountbalances = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setNoaccountbalances = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearNoaccountbalances = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasNoaccountbalances = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 Unsolicited = 11;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getUnsolicited = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setUnsolicited = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearUnsolicited = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasUnsolicited = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double OpenPositionsProfitLoss = 12;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getOpenpositionsprofitloss = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 12, 0.0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setOpenpositionsprofitloss = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearOpenpositionsprofitloss = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasOpenpositionsprofitloss = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double DailyProfitLoss = 13;
 * @return {number}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getDailyprofitloss = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 13, 0.0));
};


/** @param {number} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setDailyprofitloss = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearDailyprofitloss = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasDailyprofitloss = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string InfoText = 14;
 * @return {string}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.getInfotext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.DTC_PB.AccountBalanceUpdate.prototype.setInfotext = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.DTC_PB.AccountBalanceUpdate.prototype.clearInfotext = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AccountBalanceUpdate.prototype.hasInfotext = function() {
  return jspb.Message.getField(this, 14) != null;
};



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
proto.DTC_PB.HistoricalAccountBalancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalAccountBalancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalAccountBalancesRequest.displayName = 'proto.DTC_PB.HistoricalAccountBalancesRequest';
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
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalAccountBalancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalAccountBalancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalAccountBalancesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    tradeaccount: jspb.Message.getField(msg, 2),
    startdatetime: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.HistoricalAccountBalancesRequest}
 */
proto.DTC_PB.HistoricalAccountBalancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalAccountBalancesRequest;
  return proto.DTC_PB.HistoricalAccountBalancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalAccountBalancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalAccountBalancesRequest}
 */
proto.DTC_PB.HistoricalAccountBalancesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setStartdatetime(value);
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
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalAccountBalancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalAccountBalancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalAccountBalancesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeSfixed64(
      3,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string TradeAccount = 2;
 * @return {string}
 */
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional sfixed64 StartDateTime = 3;
 * @return {number}
 */
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.getStartdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.setStartdatetime = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.clearStartdatetime = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalancesRequest.prototype.hasStartdatetime = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.HistoricalAccountBalancesReject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalAccountBalancesReject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalAccountBalancesReject.displayName = 'proto.DTC_PB.HistoricalAccountBalancesReject';
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
proto.DTC_PB.HistoricalAccountBalancesReject.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalAccountBalancesReject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalAccountBalancesReject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalAccountBalancesReject.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    rejecttext: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.HistoricalAccountBalancesReject}
 */
proto.DTC_PB.HistoricalAccountBalancesReject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalAccountBalancesReject;
  return proto.DTC_PB.HistoricalAccountBalancesReject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalAccountBalancesReject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalAccountBalancesReject}
 */
proto.DTC_PB.HistoricalAccountBalancesReject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejecttext(value);
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
proto.DTC_PB.HistoricalAccountBalancesReject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalAccountBalancesReject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalAccountBalancesReject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalAccountBalancesReject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalAccountBalancesReject.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalAccountBalancesReject.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalAccountBalancesReject.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalancesReject.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string RejectText = 2;
 * @return {string}
 */
proto.DTC_PB.HistoricalAccountBalancesReject.prototype.getRejecttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalAccountBalancesReject.prototype.setRejecttext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalAccountBalancesReject.prototype.clearRejecttext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalancesReject.prototype.hasRejecttext = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.HistoricalAccountBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalAccountBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalAccountBalanceResponse.displayName = 'proto.DTC_PB.HistoricalAccountBalanceResponse';
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
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalAccountBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalAccountBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    datetime: jspb.Message.getOptionalFloatingPointField(msg, 2),
    cashbalance: jspb.Message.getOptionalFloatingPointField(msg, 3),
    accountcurrency: jspb.Message.getField(msg, 4),
    tradeaccount: jspb.Message.getField(msg, 5),
    totalnumbermessages: jspb.Message.getField(msg, 6),
    messagenumber: jspb.Message.getField(msg, 7),
    noaccountbalances: jspb.Message.getField(msg, 8),
    infotext: jspb.Message.getField(msg, 9),
    transactionid: jspb.Message.getField(msg, 10)
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
 * @return {!proto.DTC_PB.HistoricalAccountBalanceResponse}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalAccountBalanceResponse;
  return proto.DTC_PB.HistoricalAccountBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalAccountBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalAccountBalanceResponse}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCashbalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountcurrency(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalnumbermessages(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMessagenumber(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNoaccountbalances(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfotext(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionid(value);
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
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalAccountBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalAccountBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double DateTime = 2;
 * @return {number}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double CashBalance = 3;
 * @return {number}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.getCashbalance = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.setCashbalance = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.clearCashbalance = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.hasCashbalance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string AccountCurrency = 4;
 * @return {string}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.getAccountcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.setAccountcurrency = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.clearAccountcurrency = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.hasAccountcurrency = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string TradeAccount = 5;
 * @return {string}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 TotalNumberMessages = 6;
 * @return {number}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.getTotalnumbermessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.setTotalnumbermessages = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.clearTotalnumbermessages = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.hasTotalnumbermessages = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 MessageNumber = 7;
 * @return {number}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.getMessagenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.setMessagenumber = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.clearMessagenumber = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.hasMessagenumber = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 NoAccountBalances = 8;
 * @return {number}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.getNoaccountbalances = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.setNoaccountbalances = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.clearNoaccountbalances = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.hasNoaccountbalances = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string InfoText = 9;
 * @return {string}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.getInfotext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.setInfotext = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.clearInfotext = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.hasInfotext = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string TransactionId = 10;
 * @return {string}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.getTransactionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.setTransactionid = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.clearTransactionid = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalAccountBalanceResponse.prototype.hasTransactionid = function() {
  return jspb.Message.getField(this, 10) != null;
};



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
proto.DTC_PB.UserMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.UserMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.UserMessage.displayName = 'proto.DTC_PB.UserMessage';
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
proto.DTC_PB.UserMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.UserMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.UserMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.UserMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    usermessage: jspb.Message.getField(msg, 1),
    ispopupmessage: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.UserMessage}
 */
proto.DTC_PB.UserMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.UserMessage;
  return proto.DTC_PB.UserMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.UserMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.UserMessage}
 */
proto.DTC_PB.UserMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsermessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIspopupmessage(value);
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
proto.DTC_PB.UserMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.UserMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.UserMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.UserMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string UserMessage = 1;
 * @return {string}
 */
proto.DTC_PB.UserMessage.prototype.getUsermessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.UserMessage.prototype.setUsermessage = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.UserMessage.prototype.clearUsermessage = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.UserMessage.prototype.hasUsermessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 IsPopupMessage = 2;
 * @return {number}
 */
proto.DTC_PB.UserMessage.prototype.getIspopupmessage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.UserMessage.prototype.setIspopupmessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.UserMessage.prototype.clearIspopupmessage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.UserMessage.prototype.hasIspopupmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.GeneralLogMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.GeneralLogMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.GeneralLogMessage.displayName = 'proto.DTC_PB.GeneralLogMessage';
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
proto.DTC_PB.GeneralLogMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.GeneralLogMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.GeneralLogMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.GeneralLogMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagetext: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.GeneralLogMessage}
 */
proto.DTC_PB.GeneralLogMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.GeneralLogMessage;
  return proto.DTC_PB.GeneralLogMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.GeneralLogMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.GeneralLogMessage}
 */
proto.DTC_PB.GeneralLogMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetext(value);
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
proto.DTC_PB.GeneralLogMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.GeneralLogMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.GeneralLogMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.GeneralLogMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string MessageText = 3;
 * @return {string}
 */
proto.DTC_PB.GeneralLogMessage.prototype.getMessagetext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.GeneralLogMessage.prototype.setMessagetext = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.GeneralLogMessage.prototype.clearMessagetext = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.GeneralLogMessage.prototype.hasMessagetext = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.JournalEntryAdd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.JournalEntryAdd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.JournalEntryAdd.displayName = 'proto.DTC_PB.JournalEntryAdd';
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
proto.DTC_PB.JournalEntryAdd.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.JournalEntryAdd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.JournalEntryAdd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.JournalEntryAdd.toObject = function(includeInstance, msg) {
  var f, obj = {
    journalentry: jspb.Message.getField(msg, 1),
    datetime: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.JournalEntryAdd}
 */
proto.DTC_PB.JournalEntryAdd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.JournalEntryAdd;
  return proto.DTC_PB.JournalEntryAdd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.JournalEntryAdd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.JournalEntryAdd}
 */
proto.DTC_PB.JournalEntryAdd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJournalentry(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setDatetime(value);
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
proto.DTC_PB.JournalEntryAdd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.JournalEntryAdd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.JournalEntryAdd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.JournalEntryAdd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeSfixed64(
      2,
      f
    );
  }
};


/**
 * optional string JournalEntry = 1;
 * @return {string}
 */
proto.DTC_PB.JournalEntryAdd.prototype.getJournalentry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.JournalEntryAdd.prototype.setJournalentry = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.JournalEntryAdd.prototype.clearJournalentry = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.JournalEntryAdd.prototype.hasJournalentry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sfixed64 DateTime = 2;
 * @return {number}
 */
proto.DTC_PB.JournalEntryAdd.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.JournalEntryAdd.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.JournalEntryAdd.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.JournalEntryAdd.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.JournalEntriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.JournalEntriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.JournalEntriesRequest.displayName = 'proto.DTC_PB.JournalEntriesRequest';
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
proto.DTC_PB.JournalEntriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.JournalEntriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.JournalEntriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.JournalEntriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    startdatetime: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.JournalEntriesRequest}
 */
proto.DTC_PB.JournalEntriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.JournalEntriesRequest;
  return proto.DTC_PB.JournalEntriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.JournalEntriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.JournalEntriesRequest}
 */
proto.DTC_PB.JournalEntriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setStartdatetime(value);
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
proto.DTC_PB.JournalEntriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.JournalEntriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.JournalEntriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.JournalEntriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeSfixed64(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.JournalEntriesRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.JournalEntriesRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.JournalEntriesRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.JournalEntriesRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sfixed64 StartDateTime = 2;
 * @return {number}
 */
proto.DTC_PB.JournalEntriesRequest.prototype.getStartdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.JournalEntriesRequest.prototype.setStartdatetime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.JournalEntriesRequest.prototype.clearStartdatetime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.JournalEntriesRequest.prototype.hasStartdatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.JournalEntriesReject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.JournalEntriesReject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.JournalEntriesReject.displayName = 'proto.DTC_PB.JournalEntriesReject';
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
proto.DTC_PB.JournalEntriesReject.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.JournalEntriesReject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.JournalEntriesReject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.JournalEntriesReject.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    rejecttext: jspb.Message.getField(msg, 2)
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
 * @return {!proto.DTC_PB.JournalEntriesReject}
 */
proto.DTC_PB.JournalEntriesReject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.JournalEntriesReject;
  return proto.DTC_PB.JournalEntriesReject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.JournalEntriesReject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.JournalEntriesReject}
 */
proto.DTC_PB.JournalEntriesReject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejecttext(value);
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
proto.DTC_PB.JournalEntriesReject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.JournalEntriesReject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.JournalEntriesReject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.JournalEntriesReject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.JournalEntriesReject.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.JournalEntriesReject.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.JournalEntriesReject.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.JournalEntriesReject.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string RejectText = 2;
 * @return {string}
 */
proto.DTC_PB.JournalEntriesReject.prototype.getRejecttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.JournalEntriesReject.prototype.setRejecttext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.JournalEntriesReject.prototype.clearRejecttext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.JournalEntriesReject.prototype.hasRejecttext = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.DTC_PB.JournalEntryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.JournalEntryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.JournalEntryResponse.displayName = 'proto.DTC_PB.JournalEntryResponse';
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
proto.DTC_PB.JournalEntryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.JournalEntryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.JournalEntryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.JournalEntryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    journalentry: jspb.Message.getField(msg, 1),
    datetime: jspb.Message.getField(msg, 2),
    isfinalresponse: jspb.Message.getField(msg, 3)
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
 * @return {!proto.DTC_PB.JournalEntryResponse}
 */
proto.DTC_PB.JournalEntryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.JournalEntryResponse;
  return proto.DTC_PB.JournalEntryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.JournalEntryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.JournalEntryResponse}
 */
proto.DTC_PB.JournalEntryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJournalentry(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setDatetime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsfinalresponse(value);
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
proto.DTC_PB.JournalEntryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.JournalEntryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.JournalEntryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.JournalEntryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeSfixed64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string JournalEntry = 1;
 * @return {string}
 */
proto.DTC_PB.JournalEntryResponse.prototype.getJournalentry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DTC_PB.JournalEntryResponse.prototype.setJournalentry = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.JournalEntryResponse.prototype.clearJournalentry = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.JournalEntryResponse.prototype.hasJournalentry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sfixed64 DateTime = 2;
 * @return {number}
 */
proto.DTC_PB.JournalEntryResponse.prototype.getDatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.JournalEntryResponse.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.JournalEntryResponse.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.JournalEntryResponse.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 IsFinalResponse = 3;
 * @return {number}
 */
proto.DTC_PB.JournalEntryResponse.prototype.getIsfinalresponse = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.JournalEntryResponse.prototype.setIsfinalresponse = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.JournalEntryResponse.prototype.clearIsfinalresponse = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.JournalEntryResponse.prototype.hasIsfinalresponse = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.DTC_PB.AlertMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.AlertMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.AlertMessage.displayName = 'proto.DTC_PB.AlertMessage';
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
proto.DTC_PB.AlertMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.AlertMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.AlertMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.AlertMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagetext: jspb.Message.getField(msg, 3),
    tradeaccount: jspb.Message.getField(msg, 4)
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
 * @return {!proto.DTC_PB.AlertMessage}
 */
proto.DTC_PB.AlertMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.AlertMessage;
  return proto.DTC_PB.AlertMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.AlertMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.AlertMessage}
 */
proto.DTC_PB.AlertMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetext(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeaccount(value);
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
proto.DTC_PB.AlertMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.AlertMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.AlertMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.AlertMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string MessageText = 3;
 * @return {string}
 */
proto.DTC_PB.AlertMessage.prototype.getMessagetext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.AlertMessage.prototype.setMessagetext = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.AlertMessage.prototype.clearMessagetext = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AlertMessage.prototype.hasMessagetext = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string TradeAccount = 4;
 * @return {string}
 */
proto.DTC_PB.AlertMessage.prototype.getTradeaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.DTC_PB.AlertMessage.prototype.setTradeaccount = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.AlertMessage.prototype.clearTradeaccount = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.AlertMessage.prototype.hasTradeaccount = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.DTC_PB.HistoricalPriceDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalPriceDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalPriceDataRequest.displayName = 'proto.DTC_PB.HistoricalPriceDataRequest';
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
proto.DTC_PB.HistoricalPriceDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalPriceDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalPriceDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    symbol: jspb.Message.getField(msg, 2),
    exchange: jspb.Message.getField(msg, 3),
    recordinterval: jspb.Message.getField(msg, 4),
    startdatetime: jspb.Message.getField(msg, 5),
    enddatetime: jspb.Message.getField(msg, 6),
    maxdaystoreturn: jspb.Message.getField(msg, 7),
    usezlibcompression: jspb.Message.getField(msg, 8),
    requestdividendadjustedstockdata: jspb.Message.getField(msg, 9),
    flag1: jspb.Message.getField(msg, 10)
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
 * @return {!proto.DTC_PB.HistoricalPriceDataRequest}
 */
proto.DTC_PB.HistoricalPriceDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalPriceDataRequest;
  return proto.DTC_PB.HistoricalPriceDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalPriceDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalPriceDataRequest}
 */
proto.DTC_PB.HistoricalPriceDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchange(value);
      break;
    case 4:
      var value = /** @type {!proto.DTC_PB.HistoricalDataIntervalEnum} */ (reader.readEnum());
      msg.setRecordinterval(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setStartdatetime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setEnddatetime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxdaystoreturn(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUsezlibcompression(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRequestdividendadjustedstockdata(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlag1(value);
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
proto.DTC_PB.HistoricalPriceDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalPriceDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalPriceDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.HistoricalDataIntervalEnum} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeSfixed64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeSfixed64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalPriceDataRequest.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string Symbol = 2;
 * @return {string}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalPriceDataRequest.prototype.clearSymbol = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string Exchange = 3;
 * @return {string}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.setExchange = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalPriceDataRequest.prototype.clearExchange = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional HistoricalDataIntervalEnum RecordInterval = 4;
 * @return {!proto.DTC_PB.HistoricalDataIntervalEnum}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.getRecordinterval = function() {
  return /** @type {!proto.DTC_PB.HistoricalDataIntervalEnum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.DTC_PB.HistoricalDataIntervalEnum} value */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.setRecordinterval = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.HistoricalPriceDataRequest.prototype.clearRecordinterval = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.hasRecordinterval = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional sfixed64 StartDateTime = 5;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.getStartdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.setStartdatetime = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.HistoricalPriceDataRequest.prototype.clearStartdatetime = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.hasStartdatetime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional sfixed64 EndDateTime = 6;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.getEnddatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.setEnddatetime = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.HistoricalPriceDataRequest.prototype.clearEnddatetime = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.hasEnddatetime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 MaxDaysToReturn = 7;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.getMaxdaystoreturn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.setMaxdaystoreturn = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.HistoricalPriceDataRequest.prototype.clearMaxdaystoreturn = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.hasMaxdaystoreturn = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 UseZLibCompression = 8;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.getUsezlibcompression = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.setUsezlibcompression = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.HistoricalPriceDataRequest.prototype.clearUsezlibcompression = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.hasUsezlibcompression = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 RequestDividendAdjustedStockData = 9;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.getRequestdividendadjustedstockdata = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.setRequestdividendadjustedstockdata = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.HistoricalPriceDataRequest.prototype.clearRequestdividendadjustedstockdata = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.hasRequestdividendadjustedstockdata = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 Flag_1 = 10;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.getFlag1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.setFlag1 = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.HistoricalPriceDataRequest.prototype.clearFlag1 = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRequest.prototype.hasFlag1 = function() {
  return jspb.Message.getField(this, 10) != null;
};



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
proto.DTC_PB.HistoricalPriceDataResponseHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalPriceDataResponseHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalPriceDataResponseHeader.displayName = 'proto.DTC_PB.HistoricalPriceDataResponseHeader';
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
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalPriceDataResponseHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalPriceDataResponseHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    recordinterval: jspb.Message.getField(msg, 2),
    usezlibcompression: jspb.Message.getField(msg, 3),
    norecordstoreturn: jspb.Message.getField(msg, 4),
    inttofloatpricedivisor: jspb.Message.getOptionalFloatingPointField(msg, 5)
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
 * @return {!proto.DTC_PB.HistoricalPriceDataResponseHeader}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalPriceDataResponseHeader;
  return proto.DTC_PB.HistoricalPriceDataResponseHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalPriceDataResponseHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalPriceDataResponseHeader}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {!proto.DTC_PB.HistoricalDataIntervalEnum} */ (reader.readEnum());
      msg.setRecordinterval(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUsezlibcompression(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNorecordstoreturn(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setInttofloatpricedivisor(value);
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
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalPriceDataResponseHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalPriceDataResponseHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.HistoricalDataIntervalEnum} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(
      5,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HistoricalDataIntervalEnum RecordInterval = 2;
 * @return {!proto.DTC_PB.HistoricalDataIntervalEnum}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.getRecordinterval = function() {
  return /** @type {!proto.DTC_PB.HistoricalDataIntervalEnum} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.DTC_PB.HistoricalDataIntervalEnum} value */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.setRecordinterval = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.clearRecordinterval = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.hasRecordinterval = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 UseZLibCompression = 3;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.getUsezlibcompression = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.setUsezlibcompression = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.clearUsezlibcompression = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.hasUsezlibcompression = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 NoRecordsToReturn = 4;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.getNorecordstoreturn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.setNorecordstoreturn = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.clearNorecordstoreturn = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.hasNorecordstoreturn = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float IntToFloatPriceDivisor = 5;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.getInttofloatpricedivisor = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.setInttofloatpricedivisor = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.clearInttofloatpricedivisor = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataResponseHeader.prototype.hasInttofloatpricedivisor = function() {
  return jspb.Message.getField(this, 5) != null;
};



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
proto.DTC_PB.HistoricalPriceDataReject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalPriceDataReject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalPriceDataReject.displayName = 'proto.DTC_PB.HistoricalPriceDataReject';
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
proto.DTC_PB.HistoricalPriceDataReject.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalPriceDataReject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalPriceDataReject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataReject.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    rejecttext: jspb.Message.getField(msg, 2),
    rejectreasoncode: jspb.Message.getField(msg, 3),
    retrytimeinseconds: jspb.Message.getField(msg, 4)
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
 * @return {!proto.DTC_PB.HistoricalPriceDataReject}
 */
proto.DTC_PB.HistoricalPriceDataReject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalPriceDataReject;
  return proto.DTC_PB.HistoricalPriceDataReject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalPriceDataReject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalPriceDataReject}
 */
proto.DTC_PB.HistoricalPriceDataReject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRejecttext(value);
      break;
    case 3:
      var value = /** @type {!proto.DTC_PB.HistoricalPriceDataRejectReasonCodeEnum} */ (reader.readEnum());
      msg.setRejectreasoncode(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRetrytimeinseconds(value);
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
proto.DTC_PB.HistoricalPriceDataReject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalPriceDataReject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalPriceDataReject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataReject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.HistoricalPriceDataRejectReasonCodeEnum} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataReject.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataReject.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalPriceDataReject.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataReject.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string RejectText = 2;
 * @return {string}
 */
proto.DTC_PB.HistoricalPriceDataReject.prototype.getRejecttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DTC_PB.HistoricalPriceDataReject.prototype.setRejecttext = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalPriceDataReject.prototype.clearRejecttext = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataReject.prototype.hasRejecttext = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional HistoricalPriceDataRejectReasonCodeEnum RejectReasonCode = 3;
 * @return {!proto.DTC_PB.HistoricalPriceDataRejectReasonCodeEnum}
 */
proto.DTC_PB.HistoricalPriceDataReject.prototype.getRejectreasoncode = function() {
  return /** @type {!proto.DTC_PB.HistoricalPriceDataRejectReasonCodeEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.DTC_PB.HistoricalPriceDataRejectReasonCodeEnum} value */
proto.DTC_PB.HistoricalPriceDataReject.prototype.setRejectreasoncode = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalPriceDataReject.prototype.clearRejectreasoncode = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataReject.prototype.hasRejectreasoncode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 RetryTimeInSeconds = 4;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataReject.prototype.getRetrytimeinseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataReject.prototype.setRetrytimeinseconds = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.HistoricalPriceDataReject.prototype.clearRetrytimeinseconds = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataReject.prototype.hasRetrytimeinseconds = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.DTC_PB.HistoricalPriceDataRecordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalPriceDataRecordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalPriceDataRecordResponse.displayName = 'proto.DTC_PB.HistoricalPriceDataRecordResponse';
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
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalPriceDataRecordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalPriceDataRecordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    startdatetime: jspb.Message.getField(msg, 2),
    openprice: jspb.Message.getOptionalFloatingPointField(msg, 3),
    highprice: jspb.Message.getOptionalFloatingPointField(msg, 4),
    lowprice: jspb.Message.getOptionalFloatingPointField(msg, 5),
    lastprice: jspb.Message.getOptionalFloatingPointField(msg, 6),
    volume: jspb.Message.getOptionalFloatingPointField(msg, 7),
    numtrades: jspb.Message.getField(msg, 8),
    bidvolume: jspb.Message.getOptionalFloatingPointField(msg, 9),
    askvolume: jspb.Message.getOptionalFloatingPointField(msg, 10),
    isfinalrecord: jspb.Message.getField(msg, 11)
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
 * @return {!proto.DTC_PB.HistoricalPriceDataRecordResponse}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalPriceDataRecordResponse;
  return proto.DTC_PB.HistoricalPriceDataRecordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalPriceDataRecordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalPriceDataRecordResponse}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setStartdatetime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpenprice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighprice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowprice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastprice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumtrades(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBidvolume(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAskvolume(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsfinalrecord(value);
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
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalPriceDataRecordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalPriceDataRecordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeSfixed64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sfixed64 StartDateTime = 2;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getStartdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setStartdatetime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearStartdatetime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasStartdatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double OpenPrice = 3;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getOpenprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setOpenprice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearOpenprice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasOpenprice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double HighPrice = 4;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getHighprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setHighprice = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearHighprice = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasHighprice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double LowPrice = 5;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getLowprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setLowprice = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearLowprice = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasLowprice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double LastPrice = 6;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getLastprice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setLastprice = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearLastprice = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasLastprice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double Volume = 7;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getVolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearVolume = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 NumTrades = 8;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getNumtrades = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setNumtrades = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearNumtrades = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasNumtrades = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double BidVolume = 9;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getBidvolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setBidvolume = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearBidvolume = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasBidvolume = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double AskVolume = 10;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getAskvolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setAskvolume = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearAskvolume = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasAskvolume = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 IsFinalRecord = 11;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.getIsfinalrecord = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.setIsfinalrecord = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.clearIsfinalrecord = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse.prototype.hasIsfinalrecord = function() {
  return jspb.Message.getField(this, 11) != null;
};



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
proto.DTC_PB.HistoricalPriceDataTickRecordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalPriceDataTickRecordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalPriceDataTickRecordResponse.displayName = 'proto.DTC_PB.HistoricalPriceDataTickRecordResponse';
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
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalPriceDataTickRecordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalPriceDataTickRecordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    datetime: jspb.Message.getOptionalFloatingPointField(msg, 2),
    atbidorask: jspb.Message.getField(msg, 3),
    price: jspb.Message.getOptionalFloatingPointField(msg, 4),
    volume: jspb.Message.getOptionalFloatingPointField(msg, 5),
    isfinalrecord: jspb.Message.getField(msg, 6)
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
 * @return {!proto.DTC_PB.HistoricalPriceDataTickRecordResponse}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalPriceDataTickRecordResponse;
  return proto.DTC_PB.HistoricalPriceDataTickRecordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalPriceDataTickRecordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalPriceDataTickRecordResponse}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
      break;
    case 3:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (reader.readEnum());
      msg.setAtbidorask(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsfinalrecord(value);
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
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalPriceDataTickRecordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalPriceDataTickRecordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double DateTime = 2;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AtBidOrAskEnum AtBidOrAsk = 3;
 * @return {!proto.DTC_PB.AtBidOrAskEnum}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.getAtbidorask = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.setAtbidorask = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.clearAtbidorask = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.hasAtbidorask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double Price = 4;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.getPrice = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.clearPrice = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double Volume = 5;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.getVolume = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.clearVolume = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 IsFinalRecord = 6;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.getIsfinalrecord = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.setIsfinalrecord = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.clearIsfinalrecord = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse.prototype.hasIsfinalrecord = function() {
  return jspb.Message.getField(this, 6) != null;
};



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
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalPriceDataRecordResponse_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.displayName = 'proto.DTC_PB.HistoricalPriceDataRecordResponse_Int';
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
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalPriceDataRecordResponse_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    startdatetime: jspb.Message.getField(msg, 2),
    openprice: jspb.Message.getField(msg, 3),
    highprice: jspb.Message.getField(msg, 4),
    lowprice: jspb.Message.getField(msg, 5),
    lastprice: jspb.Message.getField(msg, 6),
    volume: jspb.Message.getField(msg, 7),
    numtrades: jspb.Message.getField(msg, 8),
    bidvolume: jspb.Message.getField(msg, 9),
    askvolume: jspb.Message.getField(msg, 10),
    isfinalrecord: jspb.Message.getField(msg, 11)
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
 * @return {!proto.DTC_PB.HistoricalPriceDataRecordResponse_Int}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalPriceDataRecordResponse_Int;
  return proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalPriceDataRecordResponse_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalPriceDataRecordResponse_Int}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setStartdatetime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpenprice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHighprice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLowprice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLastprice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVolume(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumtrades(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBidvolume(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAskvolume(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsfinalrecord(value);
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
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalPriceDataRecordResponse_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeSfixed64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sfixed64 StartDateTime = 2;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getStartdatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setStartdatetime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearStartdatetime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasStartdatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 OpenPrice = 3;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getOpenprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setOpenprice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearOpenprice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasOpenprice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 HighPrice = 4;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getHighprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setHighprice = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearHighprice = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasHighprice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 LowPrice = 5;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getLowprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setLowprice = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearLowprice = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasLowprice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 LastPrice = 6;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getLastprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setLastprice = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearLastprice = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasLastprice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 Volume = 7;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearVolume = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 NumTrades = 8;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getNumtrades = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setNumtrades = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearNumtrades = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasNumtrades = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 BidVolume = 9;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getBidvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setBidvolume = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearBidvolume = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasBidvolume = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 AskVolume = 10;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getAskvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setAskvolume = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearAskvolume = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasAskvolume = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 IsFinalRecord = 11;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.getIsfinalrecord = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.setIsfinalrecord = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.clearIsfinalrecord = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataRecordResponse_Int.prototype.hasIsfinalrecord = function() {
  return jspb.Message.getField(this, 11) != null;
};



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
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.displayName = 'proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int';
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
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    datetime: jspb.Message.getOptionalFloatingPointField(msg, 2),
    price: jspb.Message.getField(msg, 3),
    volume: jspb.Message.getField(msg, 4),
    atbidorask: jspb.Message.getField(msg, 5),
    isfinalrecord: jspb.Message.getField(msg, 6)
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
 * @return {!proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int;
  return proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVolume(value);
      break;
    case 5:
      var value = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (reader.readEnum());
      msg.setAtbidorask(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsfinalrecord(value);
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
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double DateTime = 2;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.setDatetime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.clearDatetime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.hasDatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 Price = 3;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.setPrice = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.clearPrice = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 Volume = 4;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.setVolume = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.clearVolume = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AtBidOrAskEnum AtBidOrAsk = 5;
 * @return {!proto.DTC_PB.AtBidOrAskEnum}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.getAtbidorask = function() {
  return /** @type {!proto.DTC_PB.AtBidOrAskEnum} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DTC_PB.AtBidOrAskEnum} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.setAtbidorask = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.clearAtbidorask = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.hasAtbidorask = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 IsFinalRecord = 6;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.getIsfinalrecord = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.setIsfinalrecord = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.clearIsfinalrecord = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataTickRecordResponse_Int.prototype.hasIsfinalrecord = function() {
  return jspb.Message.getField(this, 6) != null;
};



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
proto.DTC_PB.HistoricalPriceDataResponseTrailer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DTC_PB.HistoricalPriceDataResponseTrailer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTC_PB.HistoricalPriceDataResponseTrailer.displayName = 'proto.DTC_PB.HistoricalPriceDataResponseTrailer';
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
proto.DTC_PB.HistoricalPriceDataResponseTrailer.prototype.toObject = function(opt_includeInstance) {
  return proto.DTC_PB.HistoricalPriceDataResponseTrailer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTC_PB.HistoricalPriceDataResponseTrailer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataResponseTrailer.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestid: jspb.Message.getField(msg, 1),
    finalrecordlastdatetime: jspb.Message.getOptionalFloatingPointField(msg, 2)
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
 * @return {!proto.DTC_PB.HistoricalPriceDataResponseTrailer}
 */
proto.DTC_PB.HistoricalPriceDataResponseTrailer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTC_PB.HistoricalPriceDataResponseTrailer;
  return proto.DTC_PB.HistoricalPriceDataResponseTrailer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTC_PB.HistoricalPriceDataResponseTrailer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTC_PB.HistoricalPriceDataResponseTrailer}
 */
proto.DTC_PB.HistoricalPriceDataResponseTrailer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFinalrecordlastdatetime(value);
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
proto.DTC_PB.HistoricalPriceDataResponseTrailer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTC_PB.HistoricalPriceDataResponseTrailer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTC_PB.HistoricalPriceDataResponseTrailer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTC_PB.HistoricalPriceDataResponseTrailer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional int32 RequestID = 1;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataResponseTrailer.prototype.getRequestid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataResponseTrailer.prototype.setRequestid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DTC_PB.HistoricalPriceDataResponseTrailer.prototype.clearRequestid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataResponseTrailer.prototype.hasRequestid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double FinalRecordLastDateTime = 2;
 * @return {number}
 */
proto.DTC_PB.HistoricalPriceDataResponseTrailer.prototype.getFinalrecordlastdatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DTC_PB.HistoricalPriceDataResponseTrailer.prototype.setFinalrecordlastdatetime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DTC_PB.HistoricalPriceDataResponseTrailer.prototype.clearFinalrecordlastdatetime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DTC_PB.HistoricalPriceDataResponseTrailer.prototype.hasFinalrecordlastdatetime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.DTC_PB.DTCVersion = {
  CURRENT_VERSION: 8
};

/**
 * @enum {number}
 */
proto.DTC_PB.DTCMessageType = {
  LOGON_REQUEST: 1,
  LOGON_RESPONSE: 2,
  HEARTBEAT: 3,
  LOGOFF: 5,
  ENCODING_REQUEST: 6,
  ENCODING_RESPONSE: 7,
  MARKET_DATA_REQUEST: 101,
  MARKET_DATA_REJECT: 103,
  MARKET_DATA_SNAPSHOT: 104,
  MARKET_DATA_SNAPSHOT_INT: 125,
  MARKET_DATA_UPDATE_TRADE: 107,
  MARKET_DATA_UPDATE_TRADE_COMPACT: 112,
  MARKET_DATA_UPDATE_TRADE_INT: 126,
  MARKET_DATA_UPDATE_LAST_TRADE_SNAPSHOT: 134,
  MARKET_DATA_UPDATE_BID_ASK: 108,
  MARKET_DATA_UPDATE_BID_ASK_COMPACT: 117,
  MARKET_DATA_UPDATE_BID_ASK_INT: 127,
  MARKET_DATA_UPDATE_SESSION_OPEN: 120,
  MARKET_DATA_UPDATE_SESSION_OPEN_INT: 128,
  MARKET_DATA_UPDATE_SESSION_HIGH: 114,
  MARKET_DATA_UPDATE_SESSION_HIGH_INT: 129,
  MARKET_DATA_UPDATE_SESSION_LOW: 115,
  MARKET_DATA_UPDATE_SESSION_LOW_INT: 130,
  MARKET_DATA_UPDATE_SESSION_VOLUME: 113,
  MARKET_DATA_UPDATE_OPEN_INTEREST: 124,
  MARKET_DATA_UPDATE_SESSION_SETTLEMENT: 119,
  MARKET_DATA_UPDATE_SESSION_SETTLEMENT_INT: 131,
  MARKET_DATA_UPDATE_SESSION_NUM_TRADES: 135,
  MARKET_DATA_UPDATE_TRADING_SESSION_DATE: 136,
  MARKET_DEPTH_REQUEST: 102,
  MARKET_DEPTH_REJECT: 121,
  MARKET_DEPTH_SNAPSHOT_LEVEL: 122,
  MARKET_DEPTH_SNAPSHOT_LEVEL_INT: 132,
  MARKET_DEPTH_UPDATE_LEVEL: 106,
  MARKET_DEPTH_UPDATE_LEVEL_COMPACT: 118,
  MARKET_DEPTH_UPDATE_LEVEL_COMPACT_2: 139,
  MARKET_DEPTH_UPDATE_LEVEL_INT: 133,
  MARKET_DEPTH_FULL_UPDATE_10: 123,
  MARKET_DEPTH_FULL_UPDATE_20: 105,
  MARKET_DATA_FEED_STATUS: 100,
  MARKET_DATA_FEED_SYMBOL_STATUS: 116,
  TRADING_SYMBOL_STATUS: 138,
  SUBMIT_NEW_SINGLE_ORDER: 208,
  SUBMIT_NEW_SINGLE_ORDER_INT: 206,
  SUBMIT_NEW_OCO_ORDER: 201,
  SUBMIT_NEW_OCO_ORDER_INT: 207,
  CANCEL_ORDER: 203,
  CANCEL_REPLACE_ORDER: 204,
  CANCEL_REPLACE_ORDER_INT: 205,
  OPEN_ORDERS_REQUEST: 300,
  OPEN_ORDERS_REJECT: 302,
  ORDER_UPDATE: 301,
  HISTORICAL_ORDER_FILLS_REQUEST: 303,
  HISTORICAL_ORDER_FILL_RESPONSE: 304,
  HISTORICAL_ORDER_FILLS_REJECT: 308,
  CURRENT_POSITIONS_REQUEST: 305,
  CURRENT_POSITIONS_REJECT: 307,
  POSITION_UPDATE: 306,
  TRADE_ACCOUNTS_REQUEST: 400,
  TRADE_ACCOUNT_RESPONSE: 401,
  EXCHANGE_LIST_REQUEST: 500,
  EXCHANGE_LIST_RESPONSE: 501,
  SYMBOLS_FOR_EXCHANGE_REQUEST: 502,
  UNDERLYING_SYMBOLS_FOR_EXCHANGE_REQUEST: 503,
  SYMBOLS_FOR_UNDERLYING_REQUEST: 504,
  SECURITY_DEFINITION_FOR_SYMBOL_REQUEST: 506,
  SECURITY_DEFINITION_RESPONSE: 507,
  SYMBOL_SEARCH_REQUEST: 508,
  SECURITY_DEFINITION_REJECT: 509,
  ACCOUNT_BALANCE_REQUEST: 601,
  ACCOUNT_BALANCE_REJECT: 602,
  ACCOUNT_BALANCE_UPDATE: 600,
  HISTORICAL_ACCOUNT_BALANCES_REQUEST: 603,
  HISTORICAL_ACCOUNT_BALANCES_REJECT: 604,
  HISTORICAL_ACCOUNT_BALANCE_RESPONSE: 605,
  USER_MESSAGE: 700,
  GENERAL_LOG_MESSAGE: 701,
  ALERT_MESSAGE: 702,
  JOURNAL_ENTRY_ADD: 703,
  JOURNAL_ENTRIES_REQUEST: 704,
  JOURNAL_ENTRIES_REJECT: 705,
  JOURNAL_ENTRY_RESPONSE: 706,
  HISTORICAL_PRICE_DATA_REQUEST: 800,
  HISTORICAL_PRICE_DATA_RESPONSE_HEADER: 801,
  HISTORICAL_PRICE_DATA_REJECT: 802,
  HISTORICAL_PRICE_DATA_RECORD_RESPONSE: 803,
  HISTORICAL_PRICE_DATA_TICK_RECORD_RESPONSE: 804,
  HISTORICAL_PRICE_DATA_RECORD_RESPONSE_INT: 805,
  HISTORICAL_PRICE_DATA_TICK_RECORD_RESPONSE_INT: 806
};

/**
 * @enum {number}
 */
proto.DTC_PB.EncodingEnum = {
  BINARY_ENCODING: 0,
  BINARY_WITH_VARIABLE_LENGTH_STRINGS: 1,
  JSON_ENCODING: 2,
  JSON_COMPACT_ENCODING: 3,
  PROTOCOL_BUFFERS: 4
};

/**
 * @enum {number}
 */
proto.DTC_PB.LogonStatusEnum = {
  LOGON_SUCCESS: 1,
  LOGON_ERROR: 2,
  LOGON_ERROR_NO_RECONNECT: 3,
  LOGON_RECONNECT_NEW_ADDRESS: 4
};

/**
 * @enum {number}
 */
proto.DTC_PB.MessageSupportedEnum = {
  MESSAGE_UNSUPPORTED: 0,
  MESSAGE_SUPPORTED: 1
};

/**
 * @enum {number}
 */
proto.DTC_PB.TradeModeEnum = {
  TRADE_MODE_UNSET: 0,
  TRADE_MODE_DEMO: 1,
  TRADE_MODE_SIMULATED: 2,
  TRADE_MODE_LIVE: 3
};

/**
 * @enum {number}
 */
proto.DTC_PB.RequestActionEnum = {
  SUBSCRIBE: 1,
  UNSUBSCRIBE: 2,
  SNAPSHOT: 3
};

/**
 * @enum {number}
 */
proto.DTC_PB.UnbundledTradeIndicatorEnum = {
  UNBUNDLED_TRADE_NONE: 0,
  FIRST_SUB_TRADE_OF_UNBUNDLED_TRADE: 1,
  LAST_SUB_TRADE_OF_UNBUNDLED_TRADE: 2
};

/**
 * @enum {number}
 */
proto.DTC_PB.OrderStatusEnum = {
  ORDER_STATUS_UNSPECIFIED: 0,
  ORDER_STATUS_ORDER_SENT: 1,
  ORDER_STATUS_PENDING_OPEN: 2,
  ORDER_STATUS_PENDING_CHILD: 3,
  ORDER_STATUS_OPEN: 4,
  ORDER_STATUS_PENDING_CANCEL_REPLACE: 5,
  ORDER_STATUS_PENDING_CANCEL: 6,
  ORDER_STATUS_FILLED: 7,
  ORDER_STATUS_CANCELED: 8,
  ORDER_STATUS_REJECTED: 9,
  ORDER_STATUS_PARTIALLY_FILLED: 10
};

/**
 * @enum {number}
 */
proto.DTC_PB.OrderUpdateReasonEnum = {
  ORDER_UPDATE_REASON_UNSET: 0,
  OPEN_ORDERS_REQUEST_RESPONSE: 1,
  NEW_ORDER_ACCEPTED: 2,
  GENERAL_ORDER_UPDATE: 3,
  ORDER_FILLED: 4,
  ORDER_FILLED_PARTIALLY: 5,
  ORDER_CANCELED: 6,
  ORDER_CANCEL_REPLACE_COMPLETE: 7,
  NEW_ORDER_REJECTED: 8,
  ORDER_CANCEL_REJECTED: 9,
  ORDER_CANCEL_REPLACE_REJECTED: 10
};

/**
 * @enum {number}
 */
proto.DTC_PB.AtBidOrAskEnum = {
  BID_ASK_UNSET: 0,
  AT_BID: 1,
  AT_ASK: 2
};

/**
 * @enum {number}
 */
proto.DTC_PB.AtBidOrAskEnum8 = {
  BID_ASK_UNSET_8: 0,
  AT_BID_8: 1,
  AT_ASK_8: 2
};

/**
 * @enum {number}
 */
proto.DTC_PB.MarketDepthUpdateTypeEnum = {
  DEPTH_UNSET: 0,
  MARKET_DEPTH_INSERT_UPDATE_LEVEL: 1,
  MARKET_DEPTH_DELETE_LEVEL: 2
};

/**
 * @enum {number}
 */
proto.DTC_PB.OrderTypeEnum = {
  ORDER_TYPE_UNSET: 0,
  ORDER_TYPE_MARKET: 1,
  ORDER_TYPE_LIMIT: 2,
  ORDER_TYPE_STOP: 3,
  ORDER_TYPE_STOP_LIMIT: 4,
  ORDER_TYPE_MARKET_IF_TOUCHED: 5,
  ORDER_TYPE_LIMIT_IF_TOUCHED: 6
};

/**
 * @enum {number}
 */
proto.DTC_PB.TimeInForceEnum = {
  TIF_UNSET: 0,
  TIF_DAY: 1,
  TIF_GOOD_TILL_CANCELED: 2,
  TIF_GOOD_TILL_DATE_TIME: 3,
  TIF_IMMEDIATE_OR_CANCEL: 4,
  TIF_ALL_OR_NONE: 5,
  TIF_FILL_OR_KILL: 6
};

/**
 * @enum {number}
 */
proto.DTC_PB.BuySellEnum = {
  BUY_SELL_UNSET: 0,
  BUY: 1,
  SELL: 2
};

/**
 * @enum {number}
 */
proto.DTC_PB.OpenCloseTradeEnum = {
  TRADE_UNSET: 0,
  TRADE_OPEN: 1,
  TRADE_CLOSE: 2
};

/**
 * @enum {number}
 */
proto.DTC_PB.PartialFillHandlingEnum = {
  PARTIAL_FILL_UNSET: 0,
  PARTIAL_FILL_HANDLING_REDUCE_QUANTITY: 1,
  PARTIAL_FILL_HANDLING_IMMEDIATE_CANCEL: 2
};

/**
 * @enum {number}
 */
proto.DTC_PB.MarketDataFeedStatusEnum = {
  MARKET_DATA_FEED_UNAVAILABLE: 1,
  MARKET_DATA_FEED_AVAILABLE: 2
};

/**
 * @enum {number}
 */
proto.DTC_PB.PriceDisplayFormatEnum = {
  PRICE_DISPLAY_FORMAT_UNSET: -1,
  PRICE_DISPLAY_FORMAT_DECIMAL_0: 0,
  PRICE_DISPLAY_FORMAT_DECIMAL_1: 1,
  PRICE_DISPLAY_FORMAT_DECIMAL_2: 2,
  PRICE_DISPLAY_FORMAT_DECIMAL_3: 3,
  PRICE_DISPLAY_FORMAT_DECIMAL_4: 4,
  PRICE_DISPLAY_FORMAT_DECIMAL_5: 5,
  PRICE_DISPLAY_FORMAT_DECIMAL_6: 6,
  PRICE_DISPLAY_FORMAT_DECIMAL_7: 7,
  PRICE_DISPLAY_FORMAT_DECIMAL_8: 8,
  PRICE_DISPLAY_FORMAT_DECIMAL_9: 9,
  PRICE_DISPLAY_FORMAT_DENOMINATOR_256: 356,
  PRICE_DISPLAY_FORMAT_DENOMINATOR_128: 228,
  PRICE_DISPLAY_FORMAT_DENOMINATOR_64: 164,
  PRICE_DISPLAY_FORMAT_DENOMINATOR_32_QUARTERS: 136,
  PRICE_DISPLAY_FORMAT_DENOMINATOR_32_HALVES: 134,
  PRICE_DISPLAY_FORMAT_DENOMINATOR_32: 132,
  PRICE_DISPLAY_FORMAT_DENOMINATOR_16: 116,
  PRICE_DISPLAY_FORMAT_DENOMINATOR_8: 108,
  PRICE_DISPLAY_FORMAT_DENOMINATOR_4: 104,
  PRICE_DISPLAY_FORMAT_DENOMINATOR_2: 102
};

/**
 * @enum {number}
 */
proto.DTC_PB.SecurityTypeEnum = {
  SECURITY_TYPE_UNSET: 0,
  SECURITY_TYPE_FUTURE: 1,
  SECURITY_TYPE_STOCK: 2,
  SECURITY_TYPE_FOREX: 3,
  SECURITY_TYPE_INDEX: 4,
  SECURITY_TYPE_FUTURES_STRATEGY: 5,
  SECURITY_TYPE_FUTURES_OPTION: 7,
  SECURITY_TYPE_STOCK_OPTION: 6,
  SECURITY_TYPE_INDEX_OPTION: 8,
  SECURITY_TYPE_BOND: 9,
  SECURITY_TYPE_MUTUAL_FUND: 10
};

/**
 * @enum {number}
 */
proto.DTC_PB.PutCallEnum = {
  PC_UNSET: 0,
  PC_CALL: 1,
  PC_PUT: 2
};

/**
 * @enum {number}
 */
proto.DTC_PB.SearchTypeEnum = {
  SEARCH_TYPE_UNSET: 0,
  SEARCH_TYPE_BY_SYMBOL: 1,
  SEARCH_TYPE_BY_DESCRIPTION: 2
};

/**
 * @enum {number}
 */
proto.DTC_PB.HistoricalDataIntervalEnum = {
  INTERVAL_TICK: 0,
  INTERVAL_1_SECOND: 1,
  INTERVAL_2_SECONDS: 2,
  INTERVAL_4_SECONDS: 4,
  INTERVAL_5_SECONDS: 5,
  INTERVAL_10_SECONDS: 10,
  INTERVAL_30_SECONDS: 30,
  INTERVAL_1_MINUTE: 60,
  INTERVAL_1_DAY: 86400,
  INTERVAL_1_WEEK: 604800
};

/**
 * @enum {number}
 */
proto.DTC_PB.HistoricalPriceDataRejectReasonCodeEnum = {
  HPDR_UNSET: 0,
  HPDR_UNABLE_TO_SERVE_DATA_RETRY_LATER: 1,
  HPDR_UNABLE_TO_SERVE_DATA_DO_NOT_RETRY: 2,
  HPDR_DATA_REQUEST_OUTSIDE_BOUNDS_OF_AVAILABLE_DATA: 3,
  HPDR_GENERAL_REJECT_ERROR: 4
};

/**
 * @enum {number}
 */
proto.DTC_PB.TradingStatusEnum = {
  TRADING_STATUS_UNKNOWN: 0,
  TRADING_STATUS_PRE_OPEN: 1,
  TRADING_STATUS_OPEN: 2,
  TRADING_STATUS_CLOSE: 3,
  TRADING_STATUS_TRADING_HALT: 4
};


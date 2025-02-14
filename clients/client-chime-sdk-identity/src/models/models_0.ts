// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ChimeSDKIdentityServiceException as __BaseException } from "./ChimeSDKIdentityServiceException";

/**
 * @public
 * @enum
 */
export const AllowMessages = {
  ALL: "ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AllowMessages = (typeof AllowMessages)[keyof typeof AllowMessages];

/**
 * <p>The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging
 *          application.</p>
 * @public
 */
export interface AppInstance {
  /**
   * <p>The ARN of the messaging instance.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The name of an <code>AppInstance</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time at which an <code>AppInstance</code> was created. In epoch milliseconds.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time an <code>AppInstance</code> was last updated. In epoch milliseconds.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The metadata of an <code>AppInstance</code>.</p>
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * <p>The details of a user or bot.</p>
 * @public
 */
export interface Identity {
  /**
   * <p>The ARN in an Identity.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name in an Identity.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The name and ARN of the admin for the <code>AppInstance</code>.</p>
 * @public
 */
export interface AppInstanceAdmin {
  /**
   * <p>The <code>AppInstanceAdmin</code> data.</p>
   * @public
   */
  Admin?: Identity | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code> for which the user is an administrator.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The time at which an administrator was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * <p>Summary of the details of an <code>AppInstanceAdmin</code>.</p>
 * @public
 */
export interface AppInstanceAdminSummary {
  /**
   * <p>The details of the <code>AppInstanceAdmin</code>.</p>
   * @public
   */
  Admin?: Identity | undefined;
}

/**
 * @public
 * @enum
 */
export const StandardMessages = {
  ALL: "ALL",
  AUTO: "AUTO",
  MENTIONS: "MENTIONS",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type StandardMessages = (typeof StandardMessages)[keyof typeof StandardMessages];

/**
 * @public
 * @enum
 */
export const TargetedMessages = {
  ALL: "ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type TargetedMessages = (typeof TargetedMessages)[keyof typeof TargetedMessages];

/**
 * <p>Specifies the type of message that triggers a bot.</p>
 * @public
 */
export interface InvokedBy {
  /**
   * <p>Sets standard messages as the bot trigger. For standard messages:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: The bot processes all standard messages.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTO</code>: The bot responds to ALL messages when the channel has one other non-hidden member, and responds to MENTIONS when the
   *             channel has more than one other non-hidden member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MENTIONS</code>: The bot processes all standard messages that have a message attribute with <code>CHIME.mentions</code> and a
   *             value of the bot ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: The bot processes no standard messages.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StandardMessages: StandardMessages | undefined;

  /**
   * <p>Sets targeted messages as the bot trigger. For targeted messages:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: The bot processes all <code>TargetedMessages</code> sent to it. The bot then responds with a targeted message back to the sender.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: The bot processes no targeted messages.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetedMessages: TargetedMessages | undefined;
}

/**
 * @public
 * @enum
 */
export const RespondsTo = {
  STANDARD_MESSAGES: "STANDARD_MESSAGES",
} as const;

/**
 * @public
 */
export type RespondsTo = (typeof RespondsTo)[keyof typeof RespondsTo];

/**
 * <p>The configuration for an Amazon Lex V2 bot.</p>
 * @public
 */
export interface LexConfiguration {
  /**
   * <important>
   *             <p>
   *                <b>Deprecated</b>. Use <code>InvokedBy</code> instead.</p>
   *          </important>
   *          <p>Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported.</p>
   * @public
   */
  RespondsTo?: RespondsTo | undefined;

  /**
   * <p>Specifies the type of message that triggers a bot.</p>
   * @public
   */
  InvokedBy?: InvokedBy | undefined;

  /**
   * <p>The ARN of the Amazon Lex V2 bot's alias. The ARN uses this format:
   *          <code>arn:aws:lex:REGION:ACCOUNT:bot-alias/MYBOTID/MYBOTALIAS</code>
   *          </p>
   * @public
   */
  LexBotAliasArn: string | undefined;

  /**
   * <p>Identifies the Amazon Lex V2 bot's language and locale. The string must match one of the
   *          supported locales in Amazon Lex V2. All of the intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> in the <i>Amazon Lex V2 Developer Guide</i>.</p>
   * @public
   */
  LocaleId: string | undefined;

  /**
   * <p>The name of the welcome intent configured in the Amazon Lex V2 bot.</p>
   * @public
   */
  WelcomeIntent?: string | undefined;
}

/**
 * <p>A structure that contains configuration data.</p>
 * @public
 */
export interface Configuration {
  /**
   * <p>The configuration for an Amazon Lex V2 bot.</p>
   * @public
   */
  Lex: LexConfiguration | undefined;
}

/**
 * <p>An Amazon Lex V2 chat bot created under an <code>AppInstance</code>.</p>
 * @public
 */
export interface AppInstanceBot {
  /**
   * <p>The ARN of the AppInstanceBot.</p>
   * @public
   */
  AppInstanceBotArn?: string | undefined;

  /**
   * <p>The name of the AppInstanceBot.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The data processing instructions for an AppInstanceBot.</p>
   * @public
   */
  Configuration?: Configuration | undefined;

  /**
   * <p>The time at which the <code>AppInstanceBot</code> was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which the <code>AppInstanceBot</code> was last updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The metadata for an AppInstanceBot.</p>
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * <p>High-level information about an AppInstanceBot.</p>
 * @public
 */
export interface AppInstanceBotSummary {
  /**
   * <p>The ARN of the AppInstanceBot.</p>
   * @public
   */
  AppInstanceBotArn?: string | undefined;

  /**
   * <p>The name of the AppInstanceBox.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The metadata of the AppInstanceBot.</p>
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * <p>Summary of the data for an <code>AppInstance</code>.</p>
 * @public
 */
export interface AppInstanceSummary {
  /**
   * <p>The <code>AppInstance</code> ARN.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstance</code>.</p>
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * <p>The details of the retention settings for a channel.</p>
 * @public
 */
export interface ChannelRetentionSettings {
  /**
   * <p>The time in days to retain the messages in a channel.</p>
   * @public
   */
  RetentionDays?: number | undefined;
}

/**
 * <p>The details of the data-retention settings for an <code>AppInstance</code>.</p>
 * @public
 */
export interface AppInstanceRetentionSettings {
  /**
   * <p>The length of time in days to retain the messages in a channel.</p>
   * @public
   */
  ChannelRetentionSettings?: ChannelRetentionSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const ExpirationCriterion = {
  CREATED_TIMESTAMP: "CREATED_TIMESTAMP",
} as const;

/**
 * @public
 */
export type ExpirationCriterion = (typeof ExpirationCriterion)[keyof typeof ExpirationCriterion];

/**
 * <p>Determines the interval after which an <code>AppInstanceUser</code> is automatically deleted.</p>
 * @public
 */
export interface ExpirationSettings {
  /**
   * <p>The period in days after which an <code>AppInstanceUser</code> will be automatically deleted.</p>
   * @public
   */
  ExpirationDays: number | undefined;

  /**
   * <p>Specifies the conditions under which an <code>AppInstanceUser</code> will expire.</p>
   * @public
   */
  ExpirationCriterion: ExpirationCriterion | undefined;
}

/**
 * <p>The details of an <code>AppInstanceUser</code>.</p>
 * @public
 */
export interface AppInstanceUser {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The time at which the <code>AppInstanceUser</code> was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which the <code>AppInstanceUser</code> was last updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The interval after which an <code>AppInstanceUser</code> is automatically deleted.</p>
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * <p>The attributes of an <code>Endpoint</code>.</p>
 * @public
 */
export interface EndpointAttributes {
  /**
   * <p>The device token for the GCM, APNS, and APNS_SANDBOX endpoint types.</p>
   * @public
   */
  DeviceToken: string | undefined;

  /**
   * <p>The VOIP device token for the APNS and APNS_SANDBOX endpoint types.</p>
   * @public
   */
  VoipDeviceToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/**
 * @public
 * @enum
 */
export const EndpointStatusReason = {
  INVALID_DEVICE_TOKEN: "INVALID_DEVICE_TOKEN",
  INVALID_PINPOINT_ARN: "INVALID_PINPOINT_ARN",
} as const;

/**
 * @public
 */
export type EndpointStatusReason = (typeof EndpointStatusReason)[keyof typeof EndpointStatusReason];

/**
 * <p>A read-only field that represents the state of an <code>AppInstanceUserEndpoint</code>. Supported values:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is active and able to receive messages. When <code>ACTIVE</code>, the <code>EndpointStatusReason</code> remains empty.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is inactive and can't receive
 *                message. When INACTIVE, the corresponding reason will be conveyed through
 *                EndpointStatusReason.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INVALID_DEVICE_TOKEN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to invalid device token</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INVALID_PINPOINT_ARN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to an invalid pinpoint ARN that was input through the <code>ResourceArn</code> field.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface EndpointState {
  /**
   * <p>Enum that indicates the Status of an <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  Status: EndpointStatus | undefined;

  /**
   * <p>The reason for the <code>EndpointStatus</code>.</p>
   * @public
   */
  StatusReason?: EndpointStatusReason | undefined;
}

/**
 * @public
 * @enum
 */
export const AppInstanceUserEndpointType = {
  APNS: "APNS",
  APNS_SANDBOX: "APNS_SANDBOX",
  GCM: "GCM",
} as const;

/**
 * @public
 */
export type AppInstanceUserEndpointType =
  (typeof AppInstanceUserEndpointType)[keyof typeof AppInstanceUserEndpointType];

/**
 * <p>An endpoint under an Amazon Chime <code>AppInstanceUser</code> that receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.</p>
 * @public
 */
export interface AppInstanceUserEndpoint {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  Type?: AppInstanceUserEndpointType | undefined;

  /**
   * <p>The ARN of the resource to which the endpoint belongs.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The attributes of an <code>Endpoint</code>.</p>
   * @public
   */
  EndpointAttributes?: EndpointAttributes | undefined;

  /**
   * <p>The time at which an <code>AppInstanceUserEndpoint</code> was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which an <code>AppInstanceUserEndpoint</code> was last updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>Boolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages.
   *          <code>NONE</code> indicates the endpoint will receive no messages.</p>
   * @public
   */
  AllowMessages?: AllowMessages | undefined;

  /**
   * <p>A read-only field that represents the state of an <code>AppInstanceUserEndpoint</code>. Supported values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is active and able to receive messages. When <code>ACTIVE</code>, the <code>EndpointStatusReason</code> remains empty.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is inactive and can't receive message. When <code>INACTIVE</code>, the corresponding reason will be
   *             conveyed through <code>EndpointStatusReason</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_DEVICE_TOKEN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to invalid device token</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_PINPOINT_ARN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to an invalid pinpoint ARN that was input
   *             through the <code>ResourceArn</code> field.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndpointState?: EndpointState | undefined;
}

/**
 * <p>Summary of the details of an <code>AppInstanceUserEndpoint</code>.</p>
 * @public
 */
export interface AppInstanceUserEndpointSummary {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  Type?: AppInstanceUserEndpointType | undefined;

  /**
   * <p>BBoolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages.
   *          <code>NONE</code> indicates the endpoint will receive no messages.</p>
   * @public
   */
  AllowMessages?: AllowMessages | undefined;

  /**
   * <p>A read-only field that represent the state of an <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  EndpointState?: EndpointState | undefined;
}

/**
 * <p>Summary of the details of an <code>AppInstanceUser</code>.</p>
 * @public
 */
export interface AppInstanceUserSummary {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The name of an <code>AppInstanceUser</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  AccessDenied: "AccessDenied",
  BadRequest: "BadRequest",
  Conflict: "Conflict",
  Forbidden: "Forbidden",
  NotFound: "NotFound",
  PhoneNumberAssociationsExist: "PhoneNumberAssociationsExist",
  PreconditionFailed: "PreconditionFailed",
  ResourceLimitExceeded: "ResourceLimitExceeded",
  ServiceFailure: "ServiceFailure",
  ServiceUnavailable: "ServiceUnavailable",
  Throttled: "Throttled",
  Throttling: "Throttling",
  Unauthorized: "Unauthorized",
  Unprocessable: "Unprocessable",
  VoiceConnectorGroupAssociationsExist: "VoiceConnectorGroupAssociationsExist",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>A tag object containing a key-value pair.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key in a tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value in a tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceRequest {
  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The unique ID of the request. Use different tokens to create different <code>AppInstances</code>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Tags assigned to the <code>AppInstance</code>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;
}

/**
 * <p>The client is permanently forbidden from making the request.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request exceeds the resource limit.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The service encountered an unexpected error.</p>
 * @public
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The service is currently unavailable.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The client exceeded its request rate limit.</p>
 * @public
 */
export class ThrottledClientException extends __BaseException {
  readonly name: "ThrottledClientException" = "ThrottledClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledClientException, __BaseException>) {
    super({
      name: "ThrottledClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The client is not currently authorized to make the request.</p>
 * @public
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedClientException, __BaseException>) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateAppInstanceAdminRequest {
  /**
   * <p>The ARN of the administrator of the current <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceAdminResponse {
  /**
   * <p>The ARN and name of the administrator, the ARN of the <code>AppInstance</code>, and the created and
   *          last-updated timestamps. All timestamps use epoch milliseconds.</p>
   * @public
   */
  AppInstanceAdmin?: Identity | undefined;

  /**
   * <p>The ARN of the of the admin for the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceBotRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code> request.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The user's name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The request metadata. Limited to a 1KB string in UTF-8.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The unique ID for the client making the request. Use different tokens for different <code>AppInstanceBots</code>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags assigned to the <code>AppInstanceBot</code>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Configuration information about the Amazon Lex V2 V2 bot.</p>
   * @public
   */
  Configuration: Configuration | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceBotResponse {
  /**
   * <p>The ARN of the <code>AppinstanceBot</code>.</p>
   * @public
   */
  AppInstanceBotArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code> request.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The user ID of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceUserId: string | undefined;

  /**
   * <p>The user's name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The request's metadata. Limited to a 1KB string in UTF-8.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The unique ID of the request. Use different tokens to request additional <code>AppInstances</code>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Settings that control the interval after which the <code>AppInstanceUser</code> is automatically deleted.</p>
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceUserResponse {
  /**
   * <p>The user's ARN.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>'s administrator.</p>
   * @public
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceBotRequest {
  /**
   * <p>The ARN of the <code>AppInstanceBot</code> being deleted.</p>
   * @public
   */
  AppInstanceBotArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceUserRequest {
  /**
   * <p>The ARN of the user request being deleted.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterAppInstanceUserEndpointRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceResponse {
  /**
   * <p>The ARN, metadata, created and last-updated timestamps, and the name of the
   *             <code>AppInstance</code>. All timestamps use epoch milliseconds.</p>
   * @public
   */
  AppInstance?: AppInstance | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstanceAdmin</code>.</p>
   * @public
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceAdminResponse {
  /**
   * <p>The ARN and name of the <code>AppInstanceUser</code>, the ARN of the
   *             <code>AppInstance</code>, and the created and last-updated timestamps. All timestamps
   *          use epoch milliseconds.</p>
   * @public
   */
  AppInstanceAdmin?: AppInstanceAdmin | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceBotRequest {
  /**
   * <p>The ARN of the <code>AppInstanceBot</code>.</p>
   * @public
   */
  AppInstanceBotArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceBotResponse {
  /**
   * <p>The detials of the <code>AppInstanceBot</code>.</p>
   * @public
   */
  AppInstanceBot?: AppInstanceBot | undefined;
}

/**
 * <p>One or more of the resources in the request does not exist in the system.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserResponse {
  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUser?: AppInstanceUser | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserEndpointRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserEndpointResponse {
  /**
   * <p>The full details of an <code>AppInstanceUserEndpoint</code>: the <code>AppInstanceUserArn</code>, ID, name, type, resource ARN, attributes,
   *          allow messages, state, and created and last updated timestamps. All timestamps use epoch milliseconds.</p>
   * @public
   */
  AppInstanceUserEndpoint?: AppInstanceUserEndpoint | undefined;
}

/**
 * @public
 */
export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppInstanceRetentionSettingsResponse {
  /**
   * <p>The retention settings for the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings | undefined;

  /**
   * <p>The timestamp representing the time at which the specified items are retained, in Epoch
   *          Seconds.</p>
   * @public
   */
  InitiateDeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceAdminsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of administrators that you want to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from previous API requests until the number of administrators is
   *          reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceAdminsResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The information for each administrator.</p>
   * @public
   */
  AppInstanceAdmins?: AppInstanceAdminSummary[] | undefined;

  /**
   * <p>The token returned from previous API requests until the number of administrators is
   *          reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceBotsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of requests to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested bots are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceBotsResponse {
  /**
   * <p>The ARN of the AppInstance.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The information for each requested <code>AppInstanceBot</code>.</p>
   * @public
   */
  AppInstanceBots?: AppInstanceBotSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested bots are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstancesRequest {
  /**
   * <p>The maximum number of <code>AppInstance</code>s that you want to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API requests until you reach the maximum number of
   *             <code>AppInstances</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstancesResponse {
  /**
   * <p>The information for each <code>AppInstance</code>.</p>
   * @public
   */
  AppInstances?: AppInstanceSummary[] | undefined;

  /**
   * <p>The token passed by previous API requests until the maximum number of
   *             <code>AppInstance</code>s is reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceUserEndpointsRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The maximum number of endpoints that you want to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested endpoints are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceUserEndpointsResponse {
  /**
   * <p>The information for each requested <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  AppInstanceUserEndpoints?: AppInstanceUserEndpointSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested endpoints are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceUsersRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of requests that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceUsersResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The information for each requested <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUsers?: AppInstanceUserSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The time in days to retain data. Data type: number.</p>
   * @public
   */
  AppInstanceRetentionSettings: AppInstanceRetentionSettings | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceRetentionSettingsResponse {
  /**
   * <p>The time in days to retain data. Data type: number.</p>
   * @public
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings | undefined;

  /**
   * <p>The time at which the API deletes data.</p>
   * @public
   */
  InitiateDeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceUserExpirationSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>Settings that control the interval after which an <code>AppInstanceUser</code> is automatically deleted.</p>
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceUserExpirationSettingsResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>Settings that control the interval after which an <code>AppInstanceUser</code> is automatically deleted.</p>
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface RegisterAppInstanceUserEndpointRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the <code>AppInstanceUserEndpoint</code>. Supported types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>APNS</code>: The mobile notification service for an Apple device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APNS_SANDBOX</code>: The sandbox environment of the mobile notification service for an Apple device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GCM</code>: The mobile notification service for an Android device.</p>
   *             </li>
   *          </ul>
   *          <p>Populate the <code>ResourceArn</code> value of each type as <code>PinpointAppArn</code>.</p>
   * @public
   */
  Type: AppInstanceUserEndpointType | undefined;

  /**
   * <p>The ARN of the resource to which the endpoint belongs.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The attributes of an <code>Endpoint</code>.</p>
   * @public
   */
  EndpointAttributes: EndpointAttributes | undefined;

  /**
   * <p>The unique ID assigned to the request. Use different tokens to register other endpoints.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Boolean that controls whether the AppInstanceUserEndpoint is opted in to receive messages. <code>ALL</code> indicates the endpoint receives all messages.
   *          <code>NONE</code> indicates the endpoint receives no messages.</p>
   * @public
   */
  AllowMessages?: AllowMessages | undefined;
}

/**
 * @public
 */
export interface RegisterAppInstanceUserEndpointResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  EndpointId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The name that you want to change.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The metadata that you want to change.</p>
   * @public
   */
  Metadata: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceBotRequest {
  /**
   * <p>The ARN of the <code>AppInstanceBot</code>.</p>
   * @public
   */
  AppInstanceBotArn: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceBot</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstanceBot</code>.</p>
   * @public
   */
  Metadata: string | undefined;

  /**
   * <p>The configuration for the bot update.</p>
   * @public
   */
  Configuration?: Configuration | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceBotResponse {
  /**
   * <p>The ARN of the <code>AppInstanceBot</code>.</p>
   * @public
   */
  AppInstanceBotArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Metadata: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserEndpointRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  EndpointId: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Boolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages.
   *          <code>NONE</code> indicates the endpoint will receive no messages.</p>
   * @public
   */
  AllowMessages?: AllowMessages | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserEndpointResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   * @public
   */
  EndpointId?: string | undefined;
}

/**
 * @internal
 */
export const AppInstanceFilterSensitiveLog = (obj: AppInstance): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IdentityFilterSensitiveLog = (obj: Identity): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceAdminFilterSensitiveLog = (obj: AppInstanceAdmin): any => ({
  ...obj,
  ...(obj.Admin && { Admin: IdentityFilterSensitiveLog(obj.Admin) }),
});

/**
 * @internal
 */
export const AppInstanceAdminSummaryFilterSensitiveLog = (obj: AppInstanceAdminSummary): any => ({
  ...obj,
  ...(obj.Admin && { Admin: IdentityFilterSensitiveLog(obj.Admin) }),
});

/**
 * @internal
 */
export const AppInstanceBotFilterSensitiveLog = (obj: AppInstanceBot): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceBotSummaryFilterSensitiveLog = (obj: AppInstanceBotSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceSummaryFilterSensitiveLog = (obj: AppInstanceSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceUserFilterSensitiveLog = (obj: AppInstanceUser): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EndpointAttributesFilterSensitiveLog = (obj: EndpointAttributes): any => ({
  ...obj,
  ...(obj.DeviceToken && { DeviceToken: SENSITIVE_STRING }),
  ...(obj.VoipDeviceToken && { VoipDeviceToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceUserEndpointFilterSensitiveLog = (obj: AppInstanceUserEndpoint): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.EndpointAttributes && { EndpointAttributes: EndpointAttributesFilterSensitiveLog(obj.EndpointAttributes) }),
});

/**
 * @internal
 */
export const AppInstanceUserEndpointSummaryFilterSensitiveLog = (obj: AppInstanceUserEndpointSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceUserSummaryFilterSensitiveLog = (obj: AppInstanceUserSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAppInstanceRequestFilterSensitiveLog = (obj: CreateAppInstanceRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAppInstanceAdminResponseFilterSensitiveLog = (obj: CreateAppInstanceAdminResponse): any => ({
  ...obj,
  ...(obj.AppInstanceAdmin && { AppInstanceAdmin: IdentityFilterSensitiveLog(obj.AppInstanceAdmin) }),
});

/**
 * @internal
 */
export const CreateAppInstanceBotRequestFilterSensitiveLog = (obj: CreateAppInstanceBotRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAppInstanceUserRequestFilterSensitiveLog = (obj: CreateAppInstanceUserRequest): any => ({
  ...obj,
  ...(obj.AppInstanceUserId && { AppInstanceUserId: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribeAppInstanceResponseFilterSensitiveLog = (obj: DescribeAppInstanceResponse): any => ({
  ...obj,
  ...(obj.AppInstance && { AppInstance: AppInstanceFilterSensitiveLog(obj.AppInstance) }),
});

/**
 * @internal
 */
export const DescribeAppInstanceAdminResponseFilterSensitiveLog = (obj: DescribeAppInstanceAdminResponse): any => ({
  ...obj,
  ...(obj.AppInstanceAdmin && { AppInstanceAdmin: AppInstanceAdminFilterSensitiveLog(obj.AppInstanceAdmin) }),
});

/**
 * @internal
 */
export const DescribeAppInstanceBotResponseFilterSensitiveLog = (obj: DescribeAppInstanceBotResponse): any => ({
  ...obj,
  ...(obj.AppInstanceBot && { AppInstanceBot: AppInstanceBotFilterSensitiveLog(obj.AppInstanceBot) }),
});

/**
 * @internal
 */
export const DescribeAppInstanceUserResponseFilterSensitiveLog = (obj: DescribeAppInstanceUserResponse): any => ({
  ...obj,
  ...(obj.AppInstanceUser && { AppInstanceUser: AppInstanceUserFilterSensitiveLog(obj.AppInstanceUser) }),
});

/**
 * @internal
 */
export const DescribeAppInstanceUserEndpointResponseFilterSensitiveLog = (
  obj: DescribeAppInstanceUserEndpointResponse
): any => ({
  ...obj,
  ...(obj.AppInstanceUserEndpoint && {
    AppInstanceUserEndpoint: AppInstanceUserEndpointFilterSensitiveLog(obj.AppInstanceUserEndpoint),
  }),
});

/**
 * @internal
 */
export const ListAppInstanceAdminsRequestFilterSensitiveLog = (obj: ListAppInstanceAdminsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceAdminsResponseFilterSensitiveLog = (obj: ListAppInstanceAdminsResponse): any => ({
  ...obj,
  ...(obj.AppInstanceAdmins && {
    AppInstanceAdmins: obj.AppInstanceAdmins.map((item) => AppInstanceAdminSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceBotsRequestFilterSensitiveLog = (obj: ListAppInstanceBotsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceBotsResponseFilterSensitiveLog = (obj: ListAppInstanceBotsResponse): any => ({
  ...obj,
  ...(obj.AppInstanceBots && {
    AppInstanceBots: obj.AppInstanceBots.map((item) => AppInstanceBotSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstancesRequestFilterSensitiveLog = (obj: ListAppInstancesRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstancesResponseFilterSensitiveLog = (obj: ListAppInstancesResponse): any => ({
  ...obj,
  ...(obj.AppInstances && { AppInstances: obj.AppInstances.map((item) => AppInstanceSummaryFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUserEndpointsRequestFilterSensitiveLog = (
  obj: ListAppInstanceUserEndpointsRequest
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUserEndpointsResponseFilterSensitiveLog = (
  obj: ListAppInstanceUserEndpointsResponse
): any => ({
  ...obj,
  ...(obj.AppInstanceUserEndpoints && {
    AppInstanceUserEndpoints: obj.AppInstanceUserEndpoints.map((item) =>
      AppInstanceUserEndpointSummaryFilterSensitiveLog(item)
    ),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUsersRequestFilterSensitiveLog = (obj: ListAppInstanceUsersRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUsersResponseFilterSensitiveLog = (obj: ListAppInstanceUsersResponse): any => ({
  ...obj,
  ...(obj.AppInstanceUsers && {
    AppInstanceUsers: obj.AppInstanceUsers.map((item) => AppInstanceUserSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RegisterAppInstanceUserEndpointRequestFilterSensitiveLog = (
  obj: RegisterAppInstanceUserEndpointRequest
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.EndpointAttributes && { EndpointAttributes: EndpointAttributesFilterSensitiveLog(obj.EndpointAttributes) }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceRequestFilterSensitiveLog = (obj: UpdateAppInstanceRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceBotRequestFilterSensitiveLog = (obj: UpdateAppInstanceBotRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceUserRequestFilterSensitiveLog = (obj: UpdateAppInstanceUserRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceUserEndpointRequestFilterSensitiveLog = (
  obj: UpdateAppInstanceUserEndpointRequest
): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

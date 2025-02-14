// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SimSpaceWeaverServiceException as __BaseException } from "./SimSpaceWeaverServiceException";

/**
 * <p/>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A collection of TCP/UDP ports for a custom or service app.</p>
 * @public
 */
export interface SimulationAppPortMapping {
  /**
   * <p>The TCP/UDP port number of the app, declared in the simulation schema. SimSpace Weaver maps
   *          the <code>Declared</code> port to the <code>Actual</code> port. The source code for the
   *          app should bind to the <code>Declared</code> port.</p>
   * @public
   */
  Declared?: number | undefined;

  /**
   * <p>The TCP/UDP port number of the running app. SimSpace Weaver dynamically assigns this port
   *          number when the app starts. SimSpace Weaver maps the <code>Declared</code> port to the
   *             <code>Actual</code> port. Clients connect to the app using the app's IP address
   *          and the <code>Actual</code> port number.</p>
   * @public
   */
  Actual?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ClockStatus = {
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type ClockStatus = (typeof ClockStatus)[keyof typeof ClockStatus];

/**
 * @public
 * @enum
 */
export const ClockTargetStatus = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type ClockTargetStatus = (typeof ClockTargetStatus)[keyof typeof ClockTargetStatus];

/**
 * <p>The Amazon CloudWatch Logs log group for the simulation. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log
 *    groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
 * @public
 */
export interface CloudWatchLogsLogGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log group for the simulation.
   *          For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log
   *    groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
    this.Message = opts.Message;
  }
}

/**
 * <p>An Amazon S3 bucket and optional folder (object key prefix) where SimSpace Weaver creates a file.</p>
 * @public
 */
export interface S3Destination {
  /**
   * <p>The name of an Amazon S3 bucket. For more information about buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating,
   *             configuring, and working with Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User
   *             Guide</i>.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>A string prefix for an Amazon S3 object key. It's usually a folder name.
   *          For more information about folders in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html">Organizing objects in the Amazon S3 console using folders</a>
   *    in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   * @public
   */
  ObjectKeyPrefix?: string | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotInput {
  /**
   * <p>The name of the simulation.</p>
   * @public
   */
  Simulation: string | undefined;

  /**
   * <p>The Amazon S3 bucket and optional folder (object key prefix) where SimSpace Weaver creates the snapshot file.</p>
   *          <p>The Amazon S3 bucket must be in the same Amazon Web Services Region as the simulation.</p>
   * @public
   */
  Destination: S3Destination | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotOutput {}

/**
 * <p/>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p/>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p/>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteAppInput {
  /**
   * <p>The name of the simulation of the app.</p>
   * @public
   */
  Simulation: string | undefined;

  /**
   * <p>The name of the domain of the app.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  App: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppOutput {}

/**
 * @public
 */
export interface DeleteSimulationInput {
  /**
   * <p>The name of the simulation.</p>
   * @public
   */
  Simulation: string | undefined;
}

/**
 * @public
 */
export interface DeleteSimulationOutput {}

/**
 * @public
 */
export interface DescribeAppInput {
  /**
   * <p>The name of the simulation of the app.</p>
   * @public
   */
  Simulation: string | undefined;

  /**
   * <p>The name of the domain of the app.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  App: string | undefined;
}

/**
 * <p>Information about the network endpoint that you can use to connect to your custom or
 *          service app. For more information about SimSpace Weaver apps, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_apps">Key concepts: Apps</a>
 *    in the <i>SimSpace Weaver User Guide</i>..</p>
 * @public
 */
export interface SimulationAppEndpointInfo {
  /**
   * <p>The IP address of the app. SimSpace Weaver dynamically assigns this IP address when the
   *          app starts.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The inbound TCP/UDP port numbers of the app. The combination of an IP address and
   *          a port number form a network endpoint.</p>
   * @public
   */
  IngressPortMappings?: SimulationAppPortMapping[] | undefined;
}

/**
 * <p>Options that apply when the app starts. These options override default behavior.</p>
 * @public
 */
export interface LaunchOverrides {
  /**
   * <p>App launch commands and command line parameters that override the launch command
   *          configured in the simulation schema.</p>
   * @public
   */
  LaunchCommands?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SimulationAppStatus = {
  ERROR: "ERROR",
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type SimulationAppStatus = (typeof SimulationAppStatus)[keyof typeof SimulationAppStatus];

/**
 * @public
 * @enum
 */
export const SimulationAppTargetStatus = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type SimulationAppTargetStatus = (typeof SimulationAppTargetStatus)[keyof typeof SimulationAppTargetStatus];

/**
 * @public
 */
export interface DescribeAppOutput {
  /**
   * <p>The name of the app.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the simulation of the app.</p>
   * @public
   */
  Simulation?: string | undefined;

  /**
   * <p>The name of the domain of the app.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The current lifecycle state of the custom app.</p>
   * @public
   */
  Status?: SimulationAppStatus | undefined;

  /**
   * <p>The desired lifecycle state of the custom app.</p>
   * @public
   */
  TargetStatus?: SimulationAppTargetStatus | undefined;

  /**
   * <p>Options that apply when the app starts. These options override default behavior.</p>
   * @public
   */
  LaunchOverrides?: LaunchOverrides | undefined;

  /**
   * <p>The description of the app.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the network endpoint for the custom app. You can use the endpoint to connect to the custom app.</p>
   * @public
   */
  EndpointInfo?: SimulationAppEndpointInfo | undefined;
}

/**
 * @public
 */
export interface DescribeSimulationInput {
  /**
   * <p>The name of the simulation.</p>
   * @public
   */
  Simulation: string | undefined;
}

/**
 * <p>Status information about the simulation clock.</p>
 * @public
 */
export interface SimulationClock {
  /**
   * <p>The current status of the simulation clock.</p>
   * @public
   */
  Status?: ClockStatus | undefined;

  /**
   * <p>The desired status of the simulation clock.</p>
   * @public
   */
  TargetStatus?: ClockTargetStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const LifecycleManagementStrategy = {
  ByRequest: "ByRequest",
  BySpatialSubdivision: "BySpatialSubdivision",
  PerWorker: "PerWorker",
  Unknown: "Unknown",
} as const;

/**
 * @public
 */
export type LifecycleManagementStrategy =
  (typeof LifecycleManagementStrategy)[keyof typeof LifecycleManagementStrategy];

/**
 * <p>A collection of app instances that run the same executable app code and have the same
 *          launch options and commands.</p>
 *          <p>For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_domains">Key concepts: Domains</a>
 *    in the <i>SimSpace Weaver User Guide</i>.</p>
 * @public
 */
export interface Domain {
  /**
   * <p>The name of the domain.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of lifecycle management for apps in the domain. Indicates whether apps in this
   *          domain are <i>managed</i> (SimSpace Weaver starts and stops the apps) or
   *             <i>unmanaged</i> (you must start and stop the apps).</p>
   *          <p class="title">
   *             <b>Lifecycle types</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PerWorker</code> – Managed: SimSpace Weaver starts one app on each
   *                worker.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BySpatialSubdivision</code> – Managed: SimSpace Weaver starts one app for
   *                each spatial partition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ByRequest</code> – Unmanaged: You use the <code>StartApp</code>
   *                API to start the apps and use the <code>StopApp</code> API to stop the apps.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Lifecycle?: LifecycleManagementStrategy | undefined;
}

/**
 * <p>A collection of additional state information, such as
 * domain and clock configuration.</p>
 * @public
 */
export interface LiveSimulationState {
  /**
   * <p>A list of domains for the simulation. For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_domains">Key concepts: Domains</a>
   *    in the <i>SimSpace Weaver User Guide</i>.</p>
   * @public
   */
  Domains?: Domain[] | undefined;

  /**
   * <p>A list of simulation clocks.</p>
   *          <note>
   *             <p>At this time, a simulation has only one clock.</p>
   *          </note>
   * @public
   */
  Clocks?: SimulationClock[] | undefined;
}

/**
 * <p>The location where SimSpace Weaver sends simulation log data.</p>
 * @public
 */
export interface LogDestination {
  /**
   * <p>An Amazon CloudWatch Logs log group that stores simulation log data. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log
   *    groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
   * @public
   */
  CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup | undefined;
}

/**
 * <p>The logging configuration for a simulation.</p>
 * @public
 */
export interface LoggingConfiguration {
  /**
   * <p>A list of the locations where SimSpace Weaver sends simulation log data.</p>
   * @public
   */
  Destinations?: LogDestination[] | undefined;
}

/**
 * <p>A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip
 *          files and schema file. For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
 *                <i>Amazon Simple Storage Service User Guide</i>
 *             </a>.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The name of an Amazon S3 bucket. For more information about buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html">Creating,
   *             configuring, and working with Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User
   *             Guide</i>.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>The key name of an object in Amazon S3. For more information about Amazon S3 objects and object
   *          keys, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/uploading-downloading-objects.html">Uploading,
   *             downloading, and working with objects in Amazon S3</a> in the <i>Amazon Simple Storage Service User
   *             Guide</i>.</p>
   * @public
   */
  ObjectKey: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SimulationStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  SNAPSHOT_IN_PROGRESS: "SNAPSHOT_IN_PROGRESS",
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type SimulationStatus = (typeof SimulationStatus)[keyof typeof SimulationStatus];

/**
 * @public
 * @enum
 */
export const SimulationTargetStatus = {
  DELETED: "DELETED",
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type SimulationTargetStatus = (typeof SimulationTargetStatus)[keyof typeof SimulationTargetStatus];

/**
 * @public
 */
export interface DescribeSimulationOutput {
  /**
   * <p>The name of the simulation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A universally unique identifier (UUID) for this simulation.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The description of the simulation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role
   *    that the simulation assumes to perform actions. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>. For more information about IAM roles,
   *    see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
   *    <i>Identity and Access Management User Guide</i>.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The time when the simulation was created, expressed as the
   *    number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The current lifecycle state of the simulation.</p>
   * @public
   */
  Status?: SimulationStatus | undefined;

  /**
   * <p>The desired lifecycle state of the simulation.</p>
   * @public
   */
  TargetStatus?: SimulationTargetStatus | undefined;

  /**
   * <p>The location of the simulation schema in Amazon Simple Storage Service (Amazon S3).
   *    For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
   *                <i>Amazon Simple Storage Service User Guide</i>
   *             </a>.</p>
   * @public
   */
  SchemaS3Location?: S3Location | undefined;

  /**
   * <p>An error message that SimSpace Weaver returns only if there is a problem with the simulation
   *          schema.</p>
   *
   * @deprecated
   * @public
   */
  SchemaError?: string | undefined;

  /**
   * <p>Settings that control how SimSpace Weaver handles your simulation log data.</p>
   * @public
   */
  LoggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * <p>A collection of additional state information, such as
   * domain and clock configuration.</p>
   * @public
   */
  LiveSimulationState?: LiveSimulationState | undefined;

  /**
   * <p>The maximum running time of the simulation,
   *    specified as a number of minutes (m or M), hours (h or H), or days (d or D). The simulation
   *    stops when it reaches this limit. The maximum value is <code>14D</code>, or its equivalent in the
   *    other units. The default value is <code>14D</code>. A value equivalent to <code>0</code> makes the
   *    simulation immediately transition to <code>Stopping</code> as soon as it reaches <code>Started</code>.</p>
   * @public
   */
  MaximumDuration?: string | undefined;

  /**
   * <p>A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip
   *          files and schema file. For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
   *                <i>Amazon Simple Storage Service User Guide</i>
   *             </a>.</p>
   * @public
   */
  SnapshotS3Location?: S3Location | undefined;

  /**
   * <p>An error message that SimSpace Weaver returns only if a problem occurs when the simulation is in the <code>STARTING</code> state.</p>
   * @public
   */
  StartError?: string | undefined;
}

/**
 * @public
 */
export interface ListAppsInput {
  /**
   * <p>The name of the simulation that you want to list apps for.</p>
   * @public
   */
  Simulation: string | undefined;

  /**
   * <p>The name of the domain that you want to list apps for.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The maximum number of apps to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If SimSpace Weaver returns <code>nextToken</code>, then there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, then you receive an <i>HTTP 400 ValidationException</i> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A collection of metadata about the app.</p>
 * @public
 */
export interface SimulationAppMetadata {
  /**
   * <p>The name of the app.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the simulation of the app.</p>
   * @public
   */
  Simulation?: string | undefined;

  /**
   * <p>The domain of the app. For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_domains">Key concepts: Domains</a>
   *    in the <i>SimSpace Weaver User Guide</i>.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The current status of the app.</p>
   * @public
   */
  Status?: SimulationAppStatus | undefined;

  /**
   * <p>The desired status of the app.</p>
   * @public
   */
  TargetStatus?: SimulationAppTargetStatus | undefined;
}

/**
 * @public
 */
export interface ListAppsOutput {
  /**
   * <p>The list of apps for the given simulation and domain.</p>
   * @public
   */
  Apps?: SimulationAppMetadata[] | undefined;

  /**
   * <p>If SimSpace Weaver returns <code>nextToken</code>, then there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, then you receive an <i>HTTP 400 ValidationException</i> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSimulationsInput {
  /**
   * <p>The maximum number of simulations to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If SimSpace Weaver returns <code>nextToken</code>, then there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, then you receive an <i>HTTP 400 ValidationException</i> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A collection of data about the simulation.</p>
 * @public
 */
export interface SimulationMetadata {
  /**
   * <p>The name of the simulation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time when the simulation was created, expressed as the
   *    number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The current status of the simulation.</p>
   * @public
   */
  Status?: SimulationStatus | undefined;

  /**
   * <p>The desired status of the simulation.</p>
   * @public
   */
  TargetStatus?: SimulationTargetStatus | undefined;
}

/**
 * @public
 */
export interface ListSimulationsOutput {
  /**
   * <p>The list of simulations.</p>
   * @public
   */
  Simulations?: SimulationMetadata[] | undefined;

  /**
   * <p>If SimSpace Weaver returns <code>nextToken</code>, then there are more results available.
   *    The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page,
   *    call the operation again using the returned token. Keep all other arguments unchanged. If no results remain,
   *    then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours.
   *    If you provide a token that isn't valid, then you receive an <i>HTTP 400 ValidationException</i> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tags for the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p/>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartAppInput {
  /**
   * <p>A value that you provide to ensure that repeated calls to this
   *    API operation using the same parameters complete only once. A <code>ClientToken</code> is also known as an
   *    <i>idempotency token</i>. A <code>ClientToken</code> expires after 24 hours.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The name of the simulation of the app.</p>
   * @public
   */
  Simulation: string | undefined;

  /**
   * <p>The name of the domain of the app.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the app.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Options that apply when the app starts. These options override default behavior.</p>
   * @public
   */
  LaunchOverrides?: LaunchOverrides | undefined;
}

/**
 * @public
 */
export interface StartAppOutput {
  /**
   * <p>The name of the app.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The name of the domain of the app.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The name of the simulation of the app.</p>
   * @public
   */
  Simulation?: string | undefined;
}

/**
 * @public
 */
export interface StartClockInput {
  /**
   * <p>The name of the simulation.</p>
   * @public
   */
  Simulation: string | undefined;
}

/**
 * @public
 */
export interface StartClockOutput {}

/**
 * @public
 */
export interface StartSimulationInput {
  /**
   * <p>A value that you provide to ensure that repeated calls to this
   *    API operation using the same parameters complete only once. A <code>ClientToken</code> is also known as an
   *    <i>idempotency token</i>. A <code>ClientToken</code> expires after 24 hours.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The name of the simulation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the simulation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role
   *    that the simulation assumes to perform actions. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>. For more information about IAM roles,
   *    see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
   *    <i>Identity and Access Management User Guide</i>.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The location of the simulation schema in Amazon Simple Storage Service (Amazon S3).
   *    For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
   *                <i>Amazon Simple Storage Service User Guide</i>
   *             </a>.</p>
   *          <p>Provide a <code>SchemaS3Location</code> to start your simulation from a schema.</p>
   *          <p>If you provide a <code>SchemaS3Location</code> then you can't provide a <code>SnapshotS3Location</code>.</p>
   * @public
   */
  SchemaS3Location?: S3Location | undefined;

  /**
   * <p>The maximum running time of the simulation,
   *    specified as a number of minutes (m or M), hours (h or H), or days (d or D). The simulation
   *    stops when it reaches this limit. The maximum value is <code>14D</code>, or its equivalent in the
   *    other units. The default value is <code>14D</code>. A value equivalent to <code>0</code> makes the
   *    simulation immediately transition to <code>Stopping</code> as soon as it reaches <code>Started</code>.</p>
   * @public
   */
  MaximumDuration?: string | undefined;

  /**
   * <p>A list of tags for the simulation. For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the
   *    <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The location of the snapshot .zip file in Amazon Simple Storage Service (Amazon S3).
   *    For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html">
   *                <i>Amazon Simple Storage Service User Guide</i>
   *             </a>.</p>
   *          <p>Provide a <code>SnapshotS3Location</code> to start your simulation from a snapshot.</p>
   *          <p>The Amazon S3 bucket must be in the same Amazon Web Services Region as the simulation.</p>
   *          <p>If you provide a <code>SnapshotS3Location</code> then you can't provide a <code>SchemaS3Location</code>.</p>
   * @public
   */
  SnapshotS3Location?: S3Location | undefined;
}

/**
 * @public
 */
export interface StartSimulationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A universally unique identifier (UUID) for this simulation.</p>
   * @public
   */
  ExecutionId?: string | undefined;

  /**
   * <p>The time when the simulation was created, expressed as the
   *    number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface StopAppInput {
  /**
   * <p>The name of the simulation of the app.</p>
   * @public
   */
  Simulation: string | undefined;

  /**
   * <p>The name of the domain of the app.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  App: string | undefined;
}

/**
 * @public
 */
export interface StopAppOutput {}

/**
 * @public
 */
export interface StopClockInput {
  /**
   * <p>The name of the simulation.</p>
   * @public
   */
  Simulation: string | undefined;
}

/**
 * @public
 */
export interface StopClockOutput {}

/**
 * @public
 */
export interface StopSimulationInput {
  /**
   * <p>The name of the simulation.</p>
   * @public
   */
  Simulation: string | undefined;
}

/**
 * @public
 */
export interface StopSimulationOutput {}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add tags to.
   *          For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tags to apply to the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * <p/>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.
   *          For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>
   *    in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag keys to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @internal
 */
export const StartAppInputFilterSensitiveLog = (obj: StartAppInput): any => ({
  ...obj,
  ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartSimulationInputFilterSensitiveLog = (obj: StartSimulationInput): any => ({
  ...obj,
  ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
});

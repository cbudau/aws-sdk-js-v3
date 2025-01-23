// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCapacityReservationRequest, CreateCapacityReservationResult } from "../models/models_1";
import { de_CreateCapacityReservationCommand, se_CreateCapacityReservationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCapacityReservationCommand}.
 */
export interface CreateCapacityReservationCommandInput extends CreateCapacityReservationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCapacityReservationCommand}.
 */
export interface CreateCapacityReservationCommandOutput extends CreateCapacityReservationResult, __MetadataBearer {}

/**
 * <p>Creates a new Capacity Reservation with the specified attributes. Capacity Reservations enable
 * 			you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any
 * 			duration.</p>
 *          <p>You can create a Capacity Reservation at any time, and you can choose when it starts. You can create a
 * 			Capacity Reservation for immediate use or you can request a Capacity Reservation for a future date.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">
 * 			Reserve compute capacity with On-Demand Capacity Reservations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>Your request to create a Capacity Reservation could fail if:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon EC2 does not have sufficient capacity. In this case, try again at a later
 * 					time, try in a different Availability Zone, or request a smaller Capacity Reservation. If
 * 					your workload is flexible across instance types and sizes, try with different instance
 * 					attributes.</p>
 *             </li>
 *             <li>
 *                <p>The requested quantity exceeds your On-Demand Instance quota. In this case, increase your
 * 					On-Demand Instance quota for the requested instance type and try again. For more information,
 * 					see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">
 * 						Amazon EC2 Service Quotas</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateCapacityReservationRequest
 *   ClientToken: "STRING_VALUE",
 *   InstanceType: "STRING_VALUE", // required
 *   InstancePlatform: "Linux/UNIX" || "Red Hat Enterprise Linux" || "SUSE Linux" || "Windows" || "Windows with SQL Server" || "Windows with SQL Server Enterprise" || "Windows with SQL Server Standard" || "Windows with SQL Server Web" || "Linux with SQL Server Standard" || "Linux with SQL Server Web" || "Linux with SQL Server Enterprise" || "RHEL with SQL Server Standard" || "RHEL with SQL Server Enterprise" || "RHEL with SQL Server Web" || "RHEL with HA" || "RHEL with HA and SQL Server Standard" || "RHEL with HA and SQL Server Enterprise" || "Ubuntu Pro", // required
 *   AvailabilityZone: "STRING_VALUE",
 *   AvailabilityZoneId: "STRING_VALUE",
 *   Tenancy: "default" || "dedicated",
 *   InstanceCount: Number("int"), // required
 *   EbsOptimized: true || false,
 *   EphemeralStorage: true || false,
 *   EndDate: new Date("TIMESTAMP"),
 *   EndDateType: "unlimited" || "limited",
 *   InstanceMatchCriteria: "open" || "targeted",
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   OutpostArn: "STRING_VALUE",
 *   PlacementGroupArn: "STRING_VALUE",
 *   StartDate: new Date("TIMESTAMP"),
 *   CommitmentDuration: Number("long"),
 *   DeliveryPreference: "fixed" || "incremental",
 * };
 * const command = new CreateCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCapacityReservationResult
 * //   CapacityReservation: { // CapacityReservation
 * //     CapacityReservationId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     CapacityReservationArn: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     InstancePlatform: "Linux/UNIX" || "Red Hat Enterprise Linux" || "SUSE Linux" || "Windows" || "Windows with SQL Server" || "Windows with SQL Server Enterprise" || "Windows with SQL Server Standard" || "Windows with SQL Server Web" || "Linux with SQL Server Standard" || "Linux with SQL Server Web" || "Linux with SQL Server Enterprise" || "RHEL with SQL Server Standard" || "RHEL with SQL Server Enterprise" || "RHEL with SQL Server Web" || "RHEL with HA" || "RHEL with HA and SQL Server Standard" || "RHEL with HA and SQL Server Enterprise" || "Ubuntu Pro",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     Tenancy: "default" || "dedicated",
 * //     TotalInstanceCount: Number("int"),
 * //     AvailableInstanceCount: Number("int"),
 * //     EbsOptimized: true || false,
 * //     EphemeralStorage: true || false,
 * //     State: "active" || "expired" || "cancelled" || "pending" || "failed" || "scheduled" || "payment-pending" || "payment-failed" || "assessing" || "delayed" || "unsupported",
 * //     StartDate: new Date("TIMESTAMP"),
 * //     EndDate: new Date("TIMESTAMP"),
 * //     EndDateType: "unlimited" || "limited",
 * //     InstanceMatchCriteria: "open" || "targeted",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OutpostArn: "STRING_VALUE",
 * //     CapacityReservationFleetId: "STRING_VALUE",
 * //     PlacementGroupArn: "STRING_VALUE",
 * //     CapacityAllocations: [ // CapacityAllocations
 * //       { // CapacityAllocation
 * //         AllocationType: "used" || "future",
 * //         Count: Number("int"),
 * //       },
 * //     ],
 * //     ReservationType: "default" || "capacity-block",
 * //     UnusedReservationBillingOwnerId: "STRING_VALUE",
 * //     CommitmentInfo: { // CapacityReservationCommitmentInfo
 * //       CommittedInstanceCount: Number("int"),
 * //       CommitmentEndDate: new Date("TIMESTAMP"),
 * //     },
 * //     DeliveryPreference: "fixed" || "incremental",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCapacityReservationCommandInput - {@link CreateCapacityReservationCommandInput}
 * @returns {@link CreateCapacityReservationCommandOutput}
 * @see {@link CreateCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CreateCapacityReservationCommand extends $Command
  .classBuilder<
    CreateCapacityReservationCommandInput,
    CreateCapacityReservationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateCapacityReservation", {})
  .n("EC2Client", "CreateCapacityReservationCommand")
  .f(void 0, void 0)
  .ser(se_CreateCapacityReservationCommand)
  .de(de_CreateCapacityReservationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCapacityReservationRequest;
      output: CreateCapacityReservationResult;
    };
    sdk: {
      input: CreateCapacityReservationCommandInput;
      output: CreateCapacityReservationCommandOutput;
    };
  };
}

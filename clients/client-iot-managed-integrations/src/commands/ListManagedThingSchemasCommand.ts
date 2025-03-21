// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { ListManagedThingSchemasRequest, ListManagedThingSchemasResponse } from "../models/models_0";
import { de_ListManagedThingSchemasCommand, se_ListManagedThingSchemasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedThingSchemasCommand}.
 */
export interface ListManagedThingSchemasCommandInput extends ListManagedThingSchemasRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedThingSchemasCommand}.
 */
export interface ListManagedThingSchemasCommandOutput extends ListManagedThingSchemasResponse, __MetadataBearer {}

/**
 * <p>List schemas associated with a managed thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListManagedThingSchemasCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListManagedThingSchemasCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListManagedThingSchemasRequest
 *   Identifier: "STRING_VALUE", // required
 *   EndpointIdFilter: "STRING_VALUE",
 *   CapabilityIdFilter: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListManagedThingSchemasCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedThingSchemasResponse
 * //   Items: [ // ManagedThingSchemaListDefinition
 * //     { // ManagedThingSchemaListItem
 * //       EndpointId: "STRING_VALUE",
 * //       CapabilityId: "STRING_VALUE",
 * //       Schema: "DOCUMENT_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedThingSchemasCommandInput - {@link ListManagedThingSchemasCommandInput}
 * @returns {@link ListManagedThingSchemasCommandOutput}
 * @see {@link ListManagedThingSchemasCommandInput} for command's `input` shape.
 * @see {@link ListManagedThingSchemasCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *          is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 * @public
 */
export class ListManagedThingSchemasCommand extends $Command
  .classBuilder<
    ListManagedThingSchemasCommandInput,
    ListManagedThingSchemasCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "ListManagedThingSchemas", {})
  .n("IoTManagedIntegrationsClient", "ListManagedThingSchemasCommand")
  .f(void 0, void 0)
  .ser(se_ListManagedThingSchemasCommand)
  .de(de_ListManagedThingSchemasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedThingSchemasRequest;
      output: ListManagedThingSchemasResponse;
    };
    sdk: {
      input: ListManagedThingSchemasCommandInput;
      output: ListManagedThingSchemasCommandOutput;
    };
  };
}

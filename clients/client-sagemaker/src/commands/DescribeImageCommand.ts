// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageRequest, DescribeImageResponse } from "../models/models_3";
import { de_DescribeImageCommand, se_DescribeImageCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageCommand}.
 */
export interface DescribeImageCommandInput extends DescribeImageRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageCommand}.
 */
export interface DescribeImageCommandOutput extends DescribeImageResponse, __MetadataBearer {}

/**
 * <p>Describes a SageMaker image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeImageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeImageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeImageRequest
 *   ImageName: "STRING_VALUE", // required
 * };
 * const command = new DescribeImageCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageResponse
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   FailureReason: "STRING_VALUE",
 * //   ImageArn: "STRING_VALUE",
 * //   ImageName: "STRING_VALUE",
 * //   ImageStatus: "CREATING" || "CREATED" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   RoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImageCommandInput - {@link DescribeImageCommandInput}
 * @returns {@link DescribeImageCommandOutput}
 * @see {@link DescribeImageCommandInput} for command's `input` shape.
 * @see {@link DescribeImageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DescribeImageCommand extends $Command
  .classBuilder<
    DescribeImageCommandInput,
    DescribeImageCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeImage", {})
  .n("SageMakerClient", "DescribeImageCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImageCommand)
  .de(de_DescribeImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImageRequest;
      output: DescribeImageResponse;
    };
    sdk: {
      input: DescribeImageCommandInput;
      output: DescribeImageCommandOutput;
    };
  };
}

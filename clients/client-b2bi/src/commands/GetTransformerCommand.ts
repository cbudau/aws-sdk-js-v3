// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTransformerRequest, GetTransformerResponse } from "../models/models_0";
import { de_GetTransformerCommand, se_GetTransformerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransformerCommand}.
 */
export interface GetTransformerCommandInput extends GetTransformerRequest {}
/**
 * @public
 *
 * The output of {@link GetTransformerCommand}.
 */
export interface GetTransformerCommandOutput extends GetTransformerResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details for the transformer specified by the transformer ID. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively,
 *     a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, GetTransformerCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, GetTransformerCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // GetTransformerRequest
 *   transformerId: "STRING_VALUE", // required
 * };
 * const command = new GetTransformerCommand(input);
 * const response = await client.send(command);
 * // { // GetTransformerResponse
 * //   transformerId: "STRING_VALUE", // required
 * //   transformerArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "active" || "inactive", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   modifiedAt: new Date("TIMESTAMP"),
 * //   fileFormat: "XML" || "JSON" || "NOT_USED",
 * //   mappingTemplate: "STRING_VALUE",
 * //   ediType: { // EdiType Union: only one key present
 * //     x12Details: { // X12Details
 * //       transactionSet: "X12_100" || "X12_101" || "X12_102" || "X12_103" || "X12_104" || "X12_105" || "X12_106" || "X12_107" || "X12_108" || "X12_109" || "X12_110" || "X12_111" || "X12_112" || "X12_113" || "X12_120" || "X12_121" || "X12_124" || "X12_125" || "X12_126" || "X12_127" || "X12_128" || "X12_129" || "X12_130" || "X12_131" || "X12_132" || "X12_133" || "X12_135" || "X12_138" || "X12_139" || "X12_140" || "X12_141" || "X12_142" || "X12_143" || "X12_144" || "X12_146" || "X12_147" || "X12_148" || "X12_149" || "X12_150" || "X12_151" || "X12_152" || "X12_153" || "X12_154" || "X12_155" || "X12_157" || "X12_158" || "X12_159" || "X12_160" || "X12_161" || "X12_163" || "X12_170" || "X12_175" || "X12_176" || "X12_179" || "X12_180" || "X12_185" || "X12_186" || "X12_187" || "X12_188" || "X12_189" || "X12_190" || "X12_191" || "X12_194" || "X12_195" || "X12_196" || "X12_197" || "X12_198" || "X12_199" || "X12_200" || "X12_201" || "X12_202" || "X12_203" || "X12_204" || "X12_205" || "X12_206" || "X12_210" || "X12_211" || "X12_212" || "X12_213" || "X12_214" || "X12_215" || "X12_216" || "X12_217" || "X12_218" || "X12_219" || "X12_220" || "X12_222" || "X12_223" || "X12_224" || "X12_225" || "X12_227" || "X12_228" || "X12_240" || "X12_242" || "X12_244" || "X12_245" || "X12_248" || "X12_249" || "X12_250" || "X12_251" || "X12_252" || "X12_255" || "X12_256" || "X12_259" || "X12_260" || "X12_261" || "X12_262" || "X12_263" || "X12_264" || "X12_265" || "X12_266" || "X12_267" || "X12_268" || "X12_269" || "X12_270" || "X12_271" || "X12_272" || "X12_273" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_280" || "X12_283" || "X12_284" || "X12_285" || "X12_286" || "X12_288" || "X12_290" || "X12_300" || "X12_301" || "X12_303" || "X12_304" || "X12_309" || "X12_310" || "X12_311" || "X12_312" || "X12_313" || "X12_315" || "X12_317" || "X12_319" || "X12_322" || "X12_323" || "X12_324" || "X12_325" || "X12_326" || "X12_350" || "X12_352" || "X12_353" || "X12_354" || "X12_355" || "X12_356" || "X12_357" || "X12_358" || "X12_361" || "X12_362" || "X12_404" || "X12_410" || "X12_412" || "X12_414" || "X12_417" || "X12_418" || "X12_419" || "X12_420" || "X12_421" || "X12_422" || "X12_423" || "X12_424" || "X12_425" || "X12_426" || "X12_429" || "X12_431" || "X12_432" || "X12_433" || "X12_434" || "X12_435" || "X12_436" || "X12_437" || "X12_440" || "X12_451" || "X12_452" || "X12_453" || "X12_455" || "X12_456" || "X12_460" || "X12_463" || "X12_466" || "X12_468" || "X12_470" || "X12_475" || "X12_485" || "X12_486" || "X12_490" || "X12_492" || "X12_494" || "X12_500" || "X12_501" || "X12_503" || "X12_504" || "X12_511" || "X12_517" || "X12_521" || "X12_527" || "X12_536" || "X12_540" || "X12_561" || "X12_567" || "X12_568" || "X12_601" || "X12_602" || "X12_620" || "X12_625" || "X12_650" || "X12_715" || "X12_753" || "X12_754" || "X12_805" || "X12_806" || "X12_810" || "X12_811" || "X12_812" || "X12_813" || "X12_814" || "X12_815" || "X12_816" || "X12_818" || "X12_819" || "X12_820" || "X12_821" || "X12_822" || "X12_823" || "X12_824" || "X12_826" || "X12_827" || "X12_828" || "X12_829" || "X12_830" || "X12_831" || "X12_832" || "X12_833" || "X12_834" || "X12_835" || "X12_836" || "X12_837" || "X12_838" || "X12_839" || "X12_840" || "X12_841" || "X12_842" || "X12_843" || "X12_844" || "X12_845" || "X12_846" || "X12_847" || "X12_848" || "X12_849" || "X12_850" || "X12_851" || "X12_852" || "X12_853" || "X12_854" || "X12_855" || "X12_856" || "X12_857" || "X12_858" || "X12_859" || "X12_860" || "X12_861" || "X12_862" || "X12_863" || "X12_864" || "X12_865" || "X12_866" || "X12_867" || "X12_868" || "X12_869" || "X12_870" || "X12_871" || "X12_872" || "X12_873" || "X12_874" || "X12_875" || "X12_876" || "X12_877" || "X12_878" || "X12_879" || "X12_880" || "X12_881" || "X12_882" || "X12_883" || "X12_884" || "X12_885" || "X12_886" || "X12_887" || "X12_888" || "X12_889" || "X12_891" || "X12_893" || "X12_894" || "X12_895" || "X12_896" || "X12_920" || "X12_924" || "X12_925" || "X12_926" || "X12_928" || "X12_940" || "X12_943" || "X12_944" || "X12_945" || "X12_947" || "X12_980" || "X12_990" || "X12_993" || "X12_996" || "X12_997" || "X12_998" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 * //       version: "VERSION_4010" || "VERSION_4030" || "VERSION_4050" || "VERSION_4060" || "VERSION_5010" || "VERSION_5010_HIPAA",
 * //     },
 * //   },
 * //   sampleDocument: "STRING_VALUE",
 * //   inputConversion: { // InputConversion
 * //     fromFormat: "X12", // required
 * //     formatOptions: { // FormatOptions Union: only one key present
 * //       x12: {
 * //         transactionSet: "X12_100" || "X12_101" || "X12_102" || "X12_103" || "X12_104" || "X12_105" || "X12_106" || "X12_107" || "X12_108" || "X12_109" || "X12_110" || "X12_111" || "X12_112" || "X12_113" || "X12_120" || "X12_121" || "X12_124" || "X12_125" || "X12_126" || "X12_127" || "X12_128" || "X12_129" || "X12_130" || "X12_131" || "X12_132" || "X12_133" || "X12_135" || "X12_138" || "X12_139" || "X12_140" || "X12_141" || "X12_142" || "X12_143" || "X12_144" || "X12_146" || "X12_147" || "X12_148" || "X12_149" || "X12_150" || "X12_151" || "X12_152" || "X12_153" || "X12_154" || "X12_155" || "X12_157" || "X12_158" || "X12_159" || "X12_160" || "X12_161" || "X12_163" || "X12_170" || "X12_175" || "X12_176" || "X12_179" || "X12_180" || "X12_185" || "X12_186" || "X12_187" || "X12_188" || "X12_189" || "X12_190" || "X12_191" || "X12_194" || "X12_195" || "X12_196" || "X12_197" || "X12_198" || "X12_199" || "X12_200" || "X12_201" || "X12_202" || "X12_203" || "X12_204" || "X12_205" || "X12_206" || "X12_210" || "X12_211" || "X12_212" || "X12_213" || "X12_214" || "X12_215" || "X12_216" || "X12_217" || "X12_218" || "X12_219" || "X12_220" || "X12_222" || "X12_223" || "X12_224" || "X12_225" || "X12_227" || "X12_228" || "X12_240" || "X12_242" || "X12_244" || "X12_245" || "X12_248" || "X12_249" || "X12_250" || "X12_251" || "X12_252" || "X12_255" || "X12_256" || "X12_259" || "X12_260" || "X12_261" || "X12_262" || "X12_263" || "X12_264" || "X12_265" || "X12_266" || "X12_267" || "X12_268" || "X12_269" || "X12_270" || "X12_271" || "X12_272" || "X12_273" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_280" || "X12_283" || "X12_284" || "X12_285" || "X12_286" || "X12_288" || "X12_290" || "X12_300" || "X12_301" || "X12_303" || "X12_304" || "X12_309" || "X12_310" || "X12_311" || "X12_312" || "X12_313" || "X12_315" || "X12_317" || "X12_319" || "X12_322" || "X12_323" || "X12_324" || "X12_325" || "X12_326" || "X12_350" || "X12_352" || "X12_353" || "X12_354" || "X12_355" || "X12_356" || "X12_357" || "X12_358" || "X12_361" || "X12_362" || "X12_404" || "X12_410" || "X12_412" || "X12_414" || "X12_417" || "X12_418" || "X12_419" || "X12_420" || "X12_421" || "X12_422" || "X12_423" || "X12_424" || "X12_425" || "X12_426" || "X12_429" || "X12_431" || "X12_432" || "X12_433" || "X12_434" || "X12_435" || "X12_436" || "X12_437" || "X12_440" || "X12_451" || "X12_452" || "X12_453" || "X12_455" || "X12_456" || "X12_460" || "X12_463" || "X12_466" || "X12_468" || "X12_470" || "X12_475" || "X12_485" || "X12_486" || "X12_490" || "X12_492" || "X12_494" || "X12_500" || "X12_501" || "X12_503" || "X12_504" || "X12_511" || "X12_517" || "X12_521" || "X12_527" || "X12_536" || "X12_540" || "X12_561" || "X12_567" || "X12_568" || "X12_601" || "X12_602" || "X12_620" || "X12_625" || "X12_650" || "X12_715" || "X12_753" || "X12_754" || "X12_805" || "X12_806" || "X12_810" || "X12_811" || "X12_812" || "X12_813" || "X12_814" || "X12_815" || "X12_816" || "X12_818" || "X12_819" || "X12_820" || "X12_821" || "X12_822" || "X12_823" || "X12_824" || "X12_826" || "X12_827" || "X12_828" || "X12_829" || "X12_830" || "X12_831" || "X12_832" || "X12_833" || "X12_834" || "X12_835" || "X12_836" || "X12_837" || "X12_838" || "X12_839" || "X12_840" || "X12_841" || "X12_842" || "X12_843" || "X12_844" || "X12_845" || "X12_846" || "X12_847" || "X12_848" || "X12_849" || "X12_850" || "X12_851" || "X12_852" || "X12_853" || "X12_854" || "X12_855" || "X12_856" || "X12_857" || "X12_858" || "X12_859" || "X12_860" || "X12_861" || "X12_862" || "X12_863" || "X12_864" || "X12_865" || "X12_866" || "X12_867" || "X12_868" || "X12_869" || "X12_870" || "X12_871" || "X12_872" || "X12_873" || "X12_874" || "X12_875" || "X12_876" || "X12_877" || "X12_878" || "X12_879" || "X12_880" || "X12_881" || "X12_882" || "X12_883" || "X12_884" || "X12_885" || "X12_886" || "X12_887" || "X12_888" || "X12_889" || "X12_891" || "X12_893" || "X12_894" || "X12_895" || "X12_896" || "X12_920" || "X12_924" || "X12_925" || "X12_926" || "X12_928" || "X12_940" || "X12_943" || "X12_944" || "X12_945" || "X12_947" || "X12_980" || "X12_990" || "X12_993" || "X12_996" || "X12_997" || "X12_998" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 * //         version: "VERSION_4010" || "VERSION_4030" || "VERSION_4050" || "VERSION_4060" || "VERSION_5010" || "VERSION_5010_HIPAA",
 * //       },
 * //     },
 * //   },
 * //   mapping: { // Mapping
 * //     templateLanguage: "XSLT" || "JSONATA", // required
 * //     template: "STRING_VALUE",
 * //   },
 * //   outputConversion: { // OutputConversion
 * //     toFormat: "X12", // required
 * //     formatOptions: {//  Union: only one key present
 * //       x12: {
 * //         transactionSet: "X12_100" || "X12_101" || "X12_102" || "X12_103" || "X12_104" || "X12_105" || "X12_106" || "X12_107" || "X12_108" || "X12_109" || "X12_110" || "X12_111" || "X12_112" || "X12_113" || "X12_120" || "X12_121" || "X12_124" || "X12_125" || "X12_126" || "X12_127" || "X12_128" || "X12_129" || "X12_130" || "X12_131" || "X12_132" || "X12_133" || "X12_135" || "X12_138" || "X12_139" || "X12_140" || "X12_141" || "X12_142" || "X12_143" || "X12_144" || "X12_146" || "X12_147" || "X12_148" || "X12_149" || "X12_150" || "X12_151" || "X12_152" || "X12_153" || "X12_154" || "X12_155" || "X12_157" || "X12_158" || "X12_159" || "X12_160" || "X12_161" || "X12_163" || "X12_170" || "X12_175" || "X12_176" || "X12_179" || "X12_180" || "X12_185" || "X12_186" || "X12_187" || "X12_188" || "X12_189" || "X12_190" || "X12_191" || "X12_194" || "X12_195" || "X12_196" || "X12_197" || "X12_198" || "X12_199" || "X12_200" || "X12_201" || "X12_202" || "X12_203" || "X12_204" || "X12_205" || "X12_206" || "X12_210" || "X12_211" || "X12_212" || "X12_213" || "X12_214" || "X12_215" || "X12_216" || "X12_217" || "X12_218" || "X12_219" || "X12_220" || "X12_222" || "X12_223" || "X12_224" || "X12_225" || "X12_227" || "X12_228" || "X12_240" || "X12_242" || "X12_244" || "X12_245" || "X12_248" || "X12_249" || "X12_250" || "X12_251" || "X12_252" || "X12_255" || "X12_256" || "X12_259" || "X12_260" || "X12_261" || "X12_262" || "X12_263" || "X12_264" || "X12_265" || "X12_266" || "X12_267" || "X12_268" || "X12_269" || "X12_270" || "X12_271" || "X12_272" || "X12_273" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_280" || "X12_283" || "X12_284" || "X12_285" || "X12_286" || "X12_288" || "X12_290" || "X12_300" || "X12_301" || "X12_303" || "X12_304" || "X12_309" || "X12_310" || "X12_311" || "X12_312" || "X12_313" || "X12_315" || "X12_317" || "X12_319" || "X12_322" || "X12_323" || "X12_324" || "X12_325" || "X12_326" || "X12_350" || "X12_352" || "X12_353" || "X12_354" || "X12_355" || "X12_356" || "X12_357" || "X12_358" || "X12_361" || "X12_362" || "X12_404" || "X12_410" || "X12_412" || "X12_414" || "X12_417" || "X12_418" || "X12_419" || "X12_420" || "X12_421" || "X12_422" || "X12_423" || "X12_424" || "X12_425" || "X12_426" || "X12_429" || "X12_431" || "X12_432" || "X12_433" || "X12_434" || "X12_435" || "X12_436" || "X12_437" || "X12_440" || "X12_451" || "X12_452" || "X12_453" || "X12_455" || "X12_456" || "X12_460" || "X12_463" || "X12_466" || "X12_468" || "X12_470" || "X12_475" || "X12_485" || "X12_486" || "X12_490" || "X12_492" || "X12_494" || "X12_500" || "X12_501" || "X12_503" || "X12_504" || "X12_511" || "X12_517" || "X12_521" || "X12_527" || "X12_536" || "X12_540" || "X12_561" || "X12_567" || "X12_568" || "X12_601" || "X12_602" || "X12_620" || "X12_625" || "X12_650" || "X12_715" || "X12_753" || "X12_754" || "X12_805" || "X12_806" || "X12_810" || "X12_811" || "X12_812" || "X12_813" || "X12_814" || "X12_815" || "X12_816" || "X12_818" || "X12_819" || "X12_820" || "X12_821" || "X12_822" || "X12_823" || "X12_824" || "X12_826" || "X12_827" || "X12_828" || "X12_829" || "X12_830" || "X12_831" || "X12_832" || "X12_833" || "X12_834" || "X12_835" || "X12_836" || "X12_837" || "X12_838" || "X12_839" || "X12_840" || "X12_841" || "X12_842" || "X12_843" || "X12_844" || "X12_845" || "X12_846" || "X12_847" || "X12_848" || "X12_849" || "X12_850" || "X12_851" || "X12_852" || "X12_853" || "X12_854" || "X12_855" || "X12_856" || "X12_857" || "X12_858" || "X12_859" || "X12_860" || "X12_861" || "X12_862" || "X12_863" || "X12_864" || "X12_865" || "X12_866" || "X12_867" || "X12_868" || "X12_869" || "X12_870" || "X12_871" || "X12_872" || "X12_873" || "X12_874" || "X12_875" || "X12_876" || "X12_877" || "X12_878" || "X12_879" || "X12_880" || "X12_881" || "X12_882" || "X12_883" || "X12_884" || "X12_885" || "X12_886" || "X12_887" || "X12_888" || "X12_889" || "X12_891" || "X12_893" || "X12_894" || "X12_895" || "X12_896" || "X12_920" || "X12_924" || "X12_925" || "X12_926" || "X12_928" || "X12_940" || "X12_943" || "X12_944" || "X12_945" || "X12_947" || "X12_980" || "X12_990" || "X12_993" || "X12_996" || "X12_997" || "X12_998" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 * //         version: "VERSION_4010" || "VERSION_4030" || "VERSION_4050" || "VERSION_4060" || "VERSION_5010" || "VERSION_5010_HIPAA",
 * //       },
 * //     },
 * //   },
 * //   sampleDocuments: { // SampleDocuments
 * //     bucketName: "STRING_VALUE", // required
 * //     keys: [ // KeyList // required
 * //       { // SampleDocumentKeys
 * //         input: "STRING_VALUE",
 * //         output: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTransformerCommandInput - {@link GetTransformerCommandInput}
 * @returns {@link GetTransformerCommandOutput}
 * @see {@link GetTransformerCommandInput} for command's `input` shape.
 * @see {@link GetTransformerCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @public
 * @example Sample GetTransformer call
 * ```javascript
 * //
 * const input = {
 *   "transformerId": "tr-974c129999f84d8c9"
 * };
 * const command = new GetTransformerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "name": "transformX12",
 *   "createdAt": "2023-11-01T21:51:05.504Z",
 *   "inputConversion": {
 *     "formatOptions": {
 *       "x12": {
 *         "version": "VERSION_4010",
 *         "transactionSet": "X12_110"
 *       }
 *     },
 *     "fromFormat": "X12"
 *   },
 *   "mapping": {
 *     "template": "{}",
 *     "templateLanguage": "JSONATA"
 *   },
 *   "sampleDocuments": {
 *     "bucketName": "test-bucket",
 *     "keys": [
 *       {
 *         "input": "sampleDoc.txt"
 *       }
 *     ]
 *   },
 *   "status": "inactive",
 *   "transformerArn": "arn:aws:b2bi:us-west-2:123456789012:transformer/tr-974c129999f84d8c9",
 *   "transformerId": "tr-974c129999f84d8c9"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class GetTransformerCommand extends $Command
  .classBuilder<
    GetTransformerCommandInput,
    GetTransformerCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "GetTransformer", {})
  .n("B2biClient", "GetTransformerCommand")
  .f(void 0, void 0)
  .ser(se_GetTransformerCommand)
  .de(de_GetTransformerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransformerRequest;
      output: GetTransformerResponse;
    };
    sdk: {
      input: GetTransformerCommandInput;
      output: GetTransformerCommandOutput;
    };
  };
}

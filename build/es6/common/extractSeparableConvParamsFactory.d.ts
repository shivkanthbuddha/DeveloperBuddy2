import { ExtractWeightsFunction, ParamMapping } from 'tfjs-image-recognition-base';
import { SeparableConvParams } from './types';
export declare function extractSeparableConvParamsFactory(extractWeights: ExtractWeightsFunction, paramMappings: ParamMapping[]): (channelsIn: number, channelsOut: number, mappedPrefix: string) => SeparableConvParams;
export declare function loadSeparableConvParamsFactory(extractWeightEntry: <T>(originalPath: string, paramRank: number) => T): (prefix: string) => SeparableConvParams;

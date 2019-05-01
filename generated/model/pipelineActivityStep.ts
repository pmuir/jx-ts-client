/**
 * Jenkins X
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PreviewActivityStep } from './previewActivityStep';
import { PromoteActivityStep } from './promoteActivityStep';
import { StageActivityStep } from './stageActivityStep';

/**
* PipelineActivityStep represents a step in a pipeline activity
*/
export class PipelineActivityStep {
    'kind'?: string;
    'preview'?: PreviewActivityStep;
    'promote'?: PromoteActivityStep;
    'stage'?: StageActivityStep;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "preview",
            "baseName": "preview",
            "type": "PreviewActivityStep"
        },
        {
            "name": "promote",
            "baseName": "promote",
            "type": "PromoteActivityStep"
        },
        {
            "name": "stage",
            "baseName": "stage",
            "type": "StageActivityStep"
        }    ];

    static getAttributeTypeMap() {
        return PipelineActivityStep.attributeTypeMap;
    }
}


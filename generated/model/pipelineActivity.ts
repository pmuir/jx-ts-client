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

import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';
import { PipelineActivitySpec } from './pipelineActivitySpec';
import { PipelineActivityStatus } from './pipelineActivityStatus';

/**
* PipelineActivity represents pipeline activity for a particular run of a pipeline
*/
export class PipelineActivity {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    'spec'?: PipelineActivitySpec;
    'status'?: PipelineActivityStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "PipelineActivitySpec"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PipelineActivityStatus"
        }    ];

    static getAttributeTypeMap() {
        return PipelineActivity.attributeTypeMap;
    }
}


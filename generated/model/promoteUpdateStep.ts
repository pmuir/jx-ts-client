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

import { GitStatus } from './gitStatus';

/**
* PromoteUpdateStep is the step for updating a promotion after the Pull Request merges to master
*/
export class PromoteUpdateStep {
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'completedTimestamp'?: Date;
    'description'?: string;
    'name'?: string;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'startedTimestamp'?: Date;
    'status'?: string;
    'statuses'?: Array<GitStatus>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "completedTimestamp",
            "baseName": "completedTimestamp",
            "type": "Date"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "startedTimestamp",
            "baseName": "startedTimestamp",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "statuses",
            "baseName": "statuses",
            "type": "Array<GitStatus>"
        }    ];

    static getAttributeTypeMap() {
        return PromoteUpdateStep.attributeTypeMap;
    }
}


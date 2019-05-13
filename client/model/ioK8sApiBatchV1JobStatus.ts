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

import { IoK8sApiBatchV1JobCondition } from './ioK8sApiBatchV1JobCondition';

/**
* JobStatus represents the current state of a Job.
*/
export class IoK8sApiBatchV1JobStatus {
    /**
    * The number of actively running pods.
    */
    'active'?: number;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'completionTime'?: Date;
    /**
    * The latest available observations of an object's current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
    */
    'conditions'?: Array<IoK8sApiBatchV1JobCondition>;
    /**
    * The number of pods which reached phase Failed.
    */
    'failed'?: number;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'startTime'?: Date;
    /**
    * The number of pods which reached phase Succeeded.
    */
    'succeeded'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "number"
        },
        {
            "name": "completionTime",
            "baseName": "completionTime",
            "type": "Date"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sApiBatchV1JobCondition>"
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date"
        },
        {
            "name": "succeeded",
            "baseName": "succeeded",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiBatchV1JobStatus.attributeTypeMap;
    }
}

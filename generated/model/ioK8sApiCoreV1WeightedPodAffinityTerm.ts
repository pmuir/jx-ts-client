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

import { IoK8sApiCoreV1PodAffinityTerm } from './ioK8sApiCoreV1PodAffinityTerm';

/**
* The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
*/
export class IoK8sApiCoreV1WeightedPodAffinityTerm {
    'podAffinityTerm': IoK8sApiCoreV1PodAffinityTerm;
    /**
    * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
    */
    'weight': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "podAffinityTerm",
            "baseName": "podAffinityTerm",
            "type": "IoK8sApiCoreV1PodAffinityTerm"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1WeightedPodAffinityTerm.attributeTypeMap;
    }
}


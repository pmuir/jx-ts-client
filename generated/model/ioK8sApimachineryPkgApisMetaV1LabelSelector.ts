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

import { IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement } from './ioK8sApimachineryPkgApisMetaV1LabelSelectorRequirement';

/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
*/
export class IoK8sApimachineryPkgApisMetaV1LabelSelector {
    /**
    * matchExpressions is a list of label selector requirements. The requirements are ANDed.
    */
    'matchExpressions'?: Array<IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement>;
    /**
    * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed.
    */
    'matchLabels'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement>"
        },
        {
            "name": "matchLabels",
            "baseName": "matchLabels",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApimachineryPkgApisMetaV1LabelSelector.attributeTypeMap;
    }
}


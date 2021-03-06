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

import { ExtensionParameterValue } from './extensionParameterValue';

/**
* ExtensionConfig is the configuration and enablement for an extension inside an app
*/
export class ExtensionConfig {
    'name': string;
    'namespace': string;
    'parameters': Array<ExtensionParameterValue>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<ExtensionParameterValue>"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionConfig.attributeTypeMap;
    }
}


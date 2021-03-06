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

import { ExtensionConfig } from './extensionConfig';

/**
* ExtensionsConfigList contains a list of ExtensionConfig items
*/
export class ExtensionConfigList {
    'extensions': Array<ExtensionConfig>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "Array<ExtensionConfig>"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionConfigList.attributeTypeMap;
    }
}


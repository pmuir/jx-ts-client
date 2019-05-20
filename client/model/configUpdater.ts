/**
 * Jenkins X
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConfigMapSpec } from './configMapSpec';

/**
* ConfigUpdater holds configuration for the config updater plugin
*/
export interface ConfigUpdater {
    'configMap'?: ConfigMapSpec;
    'configFile'?: string;
    'map'?: { [key: string]: ConfigMapSpec; };
    'pluginFile'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configMap",
            "baseName": "ConfigMap",
            "type": "ConfigMapSpec"
        },
        {
            "name": "configFile",
            "baseName": "configFile",
            "type": "string"
        },
        {
            "name": "map",
            "baseName": "map",
            "type": "{ [key: string]: ConfigMapSpec; }"
        },
        {
            "name": "pluginFile",
            "baseName": "pluginFile",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConfigUpdater.attributeTypeMap;
    }
}

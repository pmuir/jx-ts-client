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


/**
* SELinuxOptions are the labels to be applied to the container
*/
export class IoK8sApiCoreV1SELinuxOptions {
    /**
    * Level is SELinux level label that applies to the container.
    */
    'level'?: string;
    /**
    * Role is a SELinux role label that applies to the container.
    */
    'role'?: string;
    /**
    * Type is a SELinux type label that applies to the container.
    */
    'type'?: string;
    /**
    * User is a SELinux user label that applies to the container.
    */
    'user'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "level",
            "baseName": "level",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1SELinuxOptions.attributeTypeMap;
    }
}


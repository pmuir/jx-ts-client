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
* volumeDevice describes a mapping of a raw block device within a container.
*/
export class IoK8sApiCoreV1VolumeDevice {
    /**
    * devicePath is the path inside of the container that the device will be mapped to.
    */
    'devicePath': string;
    /**
    * name must match the name of a persistentVolumeClaim in the pod
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "devicePath",
            "baseName": "devicePath",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1VolumeDevice.attributeTypeMap;
    }
}


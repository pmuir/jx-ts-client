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

import { IoK8sApiBatchV1Job } from './ioK8sApiBatchV1Job';
import { QuickStartLocation } from './quickStartLocation';
import { StorageLocation } from './storageLocation';

/**
* TeamSettings the default settings for a team
*/
export class TeamSettings {
    'appsRepository'?: string;
    'askOnCreate'?: boolean;
    'branchPatterns'?: string;
    'buildPackName'?: string;
    'buildPackRef'?: string;
    'buildPackUrl'?: string;
    'deployKind'?: string;
    'dockerRegistryOrg'?: string;
    'envOrganisation'?: string;
    'forkBranchPatterns'?: string;
    'gitPrivate'?: boolean;
    'gitServer'?: string;
    'helmBinary'?: string;
    'helmTemplate'?: boolean;
    /**
    * ImportMode indicates what kind of
    */
    'importMode'?: string;
    'kubeProvider'?: string;
    'noTiller'?: boolean;
    'organisation'?: string;
    'pipelineUsername'?: string;
    'postPreviewJobs'?: Array<IoK8sApiBatchV1Job>;
    'promotionEngine'?: string;
    /**
    * ProwEngine is the kind of prow engine used such as knative build or build pipeline
    */
    'prowEngine'?: string;
    'quickstartLocations'?: Array<QuickStartLocation>;
    'storageLocations'?: Array<StorageLocation>;
    'useGitOps'?: boolean;
    /**
    * VersionStreamRef contains the git ref (tag or branch) in the VersionStreamURL repository to use as the version stream
    */
    'versionStreamRef'?: string;
    /**
    * VersionStreamURL contains the git clone URL for the Version Stream which is the set of versions to use for charts, images, packages etc
    */
    'versionStreamUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appsRepository",
            "baseName": "appsRepository",
            "type": "string"
        },
        {
            "name": "askOnCreate",
            "baseName": "askOnCreate",
            "type": "boolean"
        },
        {
            "name": "branchPatterns",
            "baseName": "branchPatterns",
            "type": "string"
        },
        {
            "name": "buildPackName",
            "baseName": "buildPackName",
            "type": "string"
        },
        {
            "name": "buildPackRef",
            "baseName": "buildPackRef",
            "type": "string"
        },
        {
            "name": "buildPackUrl",
            "baseName": "buildPackUrl",
            "type": "string"
        },
        {
            "name": "deployKind",
            "baseName": "deployKind",
            "type": "string"
        },
        {
            "name": "dockerRegistryOrg",
            "baseName": "dockerRegistryOrg",
            "type": "string"
        },
        {
            "name": "envOrganisation",
            "baseName": "envOrganisation",
            "type": "string"
        },
        {
            "name": "forkBranchPatterns",
            "baseName": "forkBranchPatterns",
            "type": "string"
        },
        {
            "name": "gitPrivate",
            "baseName": "gitPrivate",
            "type": "boolean"
        },
        {
            "name": "gitServer",
            "baseName": "gitServer",
            "type": "string"
        },
        {
            "name": "helmBinary",
            "baseName": "helmBinary",
            "type": "string"
        },
        {
            "name": "helmTemplate",
            "baseName": "helmTemplate",
            "type": "boolean"
        },
        {
            "name": "importMode",
            "baseName": "importMode",
            "type": "string"
        },
        {
            "name": "kubeProvider",
            "baseName": "kubeProvider",
            "type": "string"
        },
        {
            "name": "noTiller",
            "baseName": "noTiller",
            "type": "boolean"
        },
        {
            "name": "organisation",
            "baseName": "organisation",
            "type": "string"
        },
        {
            "name": "pipelineUsername",
            "baseName": "pipelineUsername",
            "type": "string"
        },
        {
            "name": "postPreviewJobs",
            "baseName": "postPreviewJobs",
            "type": "Array<IoK8sApiBatchV1Job>"
        },
        {
            "name": "promotionEngine",
            "baseName": "promotionEngine",
            "type": "string"
        },
        {
            "name": "prowEngine",
            "baseName": "prowEngine",
            "type": "string"
        },
        {
            "name": "quickstartLocations",
            "baseName": "quickstartLocations",
            "type": "Array<QuickStartLocation>"
        },
        {
            "name": "storageLocations",
            "baseName": "storageLocations",
            "type": "Array<StorageLocation>"
        },
        {
            "name": "useGitOps",
            "baseName": "useGitOps",
            "type": "boolean"
        },
        {
            "name": "versionStreamRef",
            "baseName": "versionStreamRef",
            "type": "string"
        },
        {
            "name": "versionStreamUrl",
            "baseName": "versionStreamUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TeamSettings.attributeTypeMap;
    }
}


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

import { IoK8sApiCoreV1Affinity } from './ioK8sApiCoreV1Affinity';
import { IoK8sApiCoreV1Container } from './ioK8sApiCoreV1Container';
import { IoK8sApiCoreV1HostAlias } from './ioK8sApiCoreV1HostAlias';
import { IoK8sApiCoreV1LocalObjectReference } from './ioK8sApiCoreV1LocalObjectReference';
import { IoK8sApiCoreV1PodDNSConfig } from './ioK8sApiCoreV1PodDNSConfig';
import { IoK8sApiCoreV1PodReadinessGate } from './ioK8sApiCoreV1PodReadinessGate';
import { IoK8sApiCoreV1PodSecurityContext } from './ioK8sApiCoreV1PodSecurityContext';
import { IoK8sApiCoreV1Toleration } from './ioK8sApiCoreV1Toleration';
import { IoK8sApiCoreV1Volume } from './ioK8sApiCoreV1Volume';

/**
* PodSpec is a description of a pod.
*/
export class IoK8sApiCoreV1PodSpec {
    /**
    * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
    */
    'activeDeadlineSeconds'?: number;
    'affinity'?: IoK8sApiCoreV1Affinity;
    /**
    * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
    */
    'automountServiceAccountToken'?: boolean;
    /**
    * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
    */
    'containers': Array<IoK8sApiCoreV1Container>;
    'dnsConfig'?: IoK8sApiCoreV1PodDNSConfig;
    /**
    * Set DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
    */
    'dnsPolicy'?: string;
    /**
    * HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods.
    */
    'hostAliases'?: Array<IoK8sApiCoreV1HostAlias>;
    /**
    * Use the host's ipc namespace. Optional: Default to false.
    */
    'hostIPC'?: boolean;
    /**
    * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
    */
    'hostNetwork'?: boolean;
    /**
    * Use the host's pid namespace. Optional: Default to false.
    */
    'hostPID'?: boolean;
    /**
    * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
    */
    'hostname'?: string;
    /**
    * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
    */
    'imagePullSecrets'?: Array<IoK8sApiCoreV1LocalObjectReference>;
    /**
    * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, or Liveness probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
    */
    'initContainers'?: Array<IoK8sApiCoreV1Container>;
    /**
    * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
    */
    'nodeName'?: string;
    /**
    * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
    */
    'nodeSelector'?: { [key: string]: string; };
    /**
    * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
    */
    'priority'?: number;
    /**
    * If specified, indicates the pod's priority. \"system-node-critical\" and \"system-cluster-critical\" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
    */
    'priorityClassName'?: string;
    /**
    * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to \"True\" More info: https://github.com/kubernetes/community/blob/master/keps/sig-network/0007-pod-ready%2B%2B.md
    */
    'readinessGates'?: Array<IoK8sApiCoreV1PodReadinessGate>;
    /**
    * Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
    */
    'restartPolicy'?: string;
    /**
    * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the \"legacy\" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://github.com/kubernetes/community/blob/master/keps/sig-node/0014-runtime-class.md This is an alpha feature and may change in the future.
    */
    'runtimeClassName'?: string;
    /**
    * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
    */
    'schedulerName'?: string;
    'securityContext'?: IoK8sApiCoreV1PodSecurityContext;
    /**
    * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
    */
    'serviceAccount'?: string;
    /**
    * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
    */
    'serviceAccountName'?: string;
    /**
    * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. This field is beta-level and may be disabled with the PodShareProcessNamespace feature.
    */
    'shareProcessNamespace'?: boolean;
    /**
    * If specified, the fully qualified Pod hostname will be \"<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>\". If not specified, the pod will not have a domainname at all.
    */
    'subdomain'?: string;
    /**
    * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
    */
    'terminationGracePeriodSeconds'?: number;
    /**
    * If specified, the pod's tolerations.
    */
    'tolerations'?: Array<IoK8sApiCoreV1Toleration>;
    /**
    * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
    */
    'volumes'?: Array<IoK8sApiCoreV1Volume>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activeDeadlineSeconds",
            "baseName": "activeDeadlineSeconds",
            "type": "number"
        },
        {
            "name": "affinity",
            "baseName": "affinity",
            "type": "IoK8sApiCoreV1Affinity"
        },
        {
            "name": "automountServiceAccountToken",
            "baseName": "automountServiceAccountToken",
            "type": "boolean"
        },
        {
            "name": "containers",
            "baseName": "containers",
            "type": "Array<IoK8sApiCoreV1Container>"
        },
        {
            "name": "dnsConfig",
            "baseName": "dnsConfig",
            "type": "IoK8sApiCoreV1PodDNSConfig"
        },
        {
            "name": "dnsPolicy",
            "baseName": "dnsPolicy",
            "type": "string"
        },
        {
            "name": "hostAliases",
            "baseName": "hostAliases",
            "type": "Array<IoK8sApiCoreV1HostAlias>"
        },
        {
            "name": "hostIPC",
            "baseName": "hostIPC",
            "type": "boolean"
        },
        {
            "name": "hostNetwork",
            "baseName": "hostNetwork",
            "type": "boolean"
        },
        {
            "name": "hostPID",
            "baseName": "hostPID",
            "type": "boolean"
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string"
        },
        {
            "name": "imagePullSecrets",
            "baseName": "imagePullSecrets",
            "type": "Array<IoK8sApiCoreV1LocalObjectReference>"
        },
        {
            "name": "initContainers",
            "baseName": "initContainers",
            "type": "Array<IoK8sApiCoreV1Container>"
        },
        {
            "name": "nodeName",
            "baseName": "nodeName",
            "type": "string"
        },
        {
            "name": "nodeSelector",
            "baseName": "nodeSelector",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "priorityClassName",
            "baseName": "priorityClassName",
            "type": "string"
        },
        {
            "name": "readinessGates",
            "baseName": "readinessGates",
            "type": "Array<IoK8sApiCoreV1PodReadinessGate>"
        },
        {
            "name": "restartPolicy",
            "baseName": "restartPolicy",
            "type": "string"
        },
        {
            "name": "runtimeClassName",
            "baseName": "runtimeClassName",
            "type": "string"
        },
        {
            "name": "schedulerName",
            "baseName": "schedulerName",
            "type": "string"
        },
        {
            "name": "securityContext",
            "baseName": "securityContext",
            "type": "IoK8sApiCoreV1PodSecurityContext"
        },
        {
            "name": "serviceAccount",
            "baseName": "serviceAccount",
            "type": "string"
        },
        {
            "name": "serviceAccountName",
            "baseName": "serviceAccountName",
            "type": "string"
        },
        {
            "name": "shareProcessNamespace",
            "baseName": "shareProcessNamespace",
            "type": "boolean"
        },
        {
            "name": "subdomain",
            "baseName": "subdomain",
            "type": "string"
        },
        {
            "name": "terminationGracePeriodSeconds",
            "baseName": "terminationGracePeriodSeconds",
            "type": "number"
        },
        {
            "name": "tolerations",
            "baseName": "tolerations",
            "type": "Array<IoK8sApiCoreV1Toleration>"
        },
        {
            "name": "volumes",
            "baseName": "volumes",
            "type": "Array<IoK8sApiCoreV1Volume>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PodSpec.attributeTypeMap;
    }
}


export const configValues = {
    ANSWER_FILE_PATH: "/tmp/he-setup-answerfile.conf",
    ANSIBLE_PLAYBOOK_PATH: "/usr/share/cockpit/ovirt-dashboard/hostedEngineAnsibleFiles/heSetup.yml",
    APPLIANCE_PATH_PREFIX: "/usr/share/ovirt-engine-appliance/"
};

export const configFileTypes = {
    NONE: "none",
    BOOLEAN: "bool",
    STRING: "str",
    INTEGER: "int"
};

export const answerFilePrefixes = {
    CORE: "OVEHOSTED_CORE/",
    NETWORK: "OVEHOSTED_NETWORK/",
    ENGINE: "OVEHOSTED_ENGINE/",
    STORAGE: "OVEHOSTED_STORAGE/",
    VDSM: "OVEHOSTED_VDSM/",
    VM: "OVEHOSTED_VM/",
    NOTIFICATIONS: "OVEHOSTED_NOTIF/"
};

export const deploymentStatus = {
    SUCCESS: 0,
    RUNNING: 1,
    FAILURE: -1
};

export const heSetupState = {
    EMPTY: "empty",
    POLLING: "polling",
    REGISTERED: "registered",
    GDEPLOY: "gdeploy",
    HOSTED_ENGINE: "he"
};

export const status = {
    EMPTY: "empty",
    POLLING: "polling",
    SUCCESS: "success",
    FAILURE: "failure"
};

export const deploymentOption = {
    REGULAR: "regular",
    HYPERCONVERGED: "hci"
};

export const resourceConstants = {
    VDSM_HOST_OVERHEAD_MB: 256,
    VDSM_VM_OVERHEAD_MB: 64
};

export const messages = {
    GENERAL_ERROR_MSG: "Please correct errors before moving to the next step.",
    PASSWORD_MISMATCH: "Passwords do not match",
    IP_NOT_PINGABLE: "Unable to ping address. Please enter a pingable address.",
    VIRT_NOT_SUPPORTED: "Error! Hardware virtualization not supported on this host!",
    SYS_DATA_UNRETRIEVABLE: "Error! System data could not be retrieved!",
    DEPLOYMENT_SUCCESSFUL: "Hosted Engine has been successfully deployed!",
    DEPLOYMENT_FAILED: "Deployment failed",
    DEPLOYMENT_IN_PROGRESS: "Deployment in progress",
    ADD_GDEPLOY_PROPS_TO_ANS_FILE: "Attempting to add gdeploy properties to the answer file.",
    NO_GDEPLOY_ANSWER_FILES_FOUND: "No gdeploy answer files found."
};

export const intelCpuTypes = [
    { key: "Skylake-Client", title: "Intel Skylake-Client Family" },
    { key: "Skylake", title: "Intel Skylake Family" },
    { key: "Broadwell", title: "Intel Broadwell Family" },
    { key: "Broadwell-noTSX", title: "Intel Broadwell-noTSX Family" },
    { key: "Haswell", title: "Intel Haswell Family" },
    { key: "Haswell-noTSX", title: "Intel Haswell-noTSX Family" },
    { key: "IvyBridge", title: "Intel IvyBridge Family" },
    { key: "SandyBridge", title: "Intel SandyBridge Family" },
    { key: "Westmere", title: "Intel Westmere Family" },
    { key: "Nehalem", title: "Intel Nehalem Family" },
    { key: "Penryn", title: "Intel Penryn Family" },
    { key: "Conroe", title: "Intel Conroe Family" }
];

export const amdCpuTypes = [
    { key: "Opteron_G5", title: "AMD Opteron G5" },
    { key: "Opteron_G4", title: "AMD Opteron G4" },
    { key: "Opteron_G3", title: "AMD Opteron G3" },
    { key: "Opteron_G2", title: "AMD Opteron G2" },
    { key: "Opteron_G1", title: "AMD Opteron G1" }
];

export const defaultInterfaces = [
    { key: "None Found", title: "None Found" }
];
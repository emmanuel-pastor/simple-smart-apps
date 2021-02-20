//Returns NON LOCALIZED app name given the app id
export function fromAppIdToAppName(id) {
    switch (id) {
        case 0: return 'Battery Temperature'
        case 1: return 'Daoda'
        default: return undefined
    }
}
export function emailIsValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function fileIsAvailable(filepath) {
    const regexp = /^(?:\w:|\\)(\\[ёа-яa-z_\-\s0-9.]+)+\.(png|gif|jpeg|jpg|tiff|pcx)$/;
    return regexp.test(String(filepath).toLowerCase());
}

export function nameIsValid(name) {
    const regexp = /^([ёа-яa-z\-\s`']+)+$/;
    return regexp.test(String(name).toLowerCase());
}
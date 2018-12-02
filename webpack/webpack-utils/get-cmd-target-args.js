/**
 * Get the target property from an Object
 */

const proxyHandler = {
    get: (target, name) => name in target
                            ? target[name]
                            : new Error('Err getObjectPropertyValue: Key does not exist')
}

const getObjectPropertyValue = (argsObject, targetKey) => {
    const getKey = new Proxy(argsObject, proxyHandler);
    return  getKey[targetKey];
}

 module.exports = getObjectPropertyValue;

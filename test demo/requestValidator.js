function solve(object) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegex = /(^[\w.]+$)/;
    const messageRegex = /([<>\\&'"])/;

    if(!object.method || !validMethods.includes(object.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
        
    };
    if (!object.uri || object.uri == '' || !uriRegex.test(object.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    };
    if (!object.version || !validVersions.includes(object.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    };
    if (object.message == undefined || messageRegex.test(object.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    };

    return object;
}



const obj = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    };

console.log(solve(obj));

const obj2 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
    };
console.log(solve(obj2));
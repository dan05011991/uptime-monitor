import client from './'

export function fetch() {
    return client.get('/monitor');
}
export default {
    async fetch(request, env) {
        let url = new URL(request.url);
        url.hostname = 'wiki.wesalpixel.ir'
        let new_request = new Request(url, request);
        console.log('-----', new_request.url)
        return fetch(new_request);
    },
};

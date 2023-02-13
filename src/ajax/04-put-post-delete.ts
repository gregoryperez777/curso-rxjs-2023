import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

// ajax.post, ajax.put, ajax.delete
// ajax.post(url, {
//     id: 1,
//     name: 'Gregory'
// },{
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

// para mas control
ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        name: 'Gregory'
    }
}).subscribe(console.log)
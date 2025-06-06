import http from 'k6/http';

export let options = {
  stages: [
    { duration: '30s', target: 0 },
    { duration: '1m', target: 100 },  // peak of 100 vu
    { duration: '2m', target: 0 },
  ],
};

export default function () {
  http.get('https://restful-booker.herokuapp.com/booking/1');
}

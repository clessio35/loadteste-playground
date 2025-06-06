import http from 'k6/http';

export let options = {
  stages: [
    { duration: '2m', target: 50 },  // Scaling up to 50 VUs
    { duration: '3m', target: 50 },  // Maintaining at 50 VUs
    { duration: '2m', target: 0 },   // Scaling down to 0
  ],
};

export default function () {
  http.get('https://restful-booker.herokuapp.com/booking/1');
}

import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 1,
  duration: '10s',
};

export default function () {
  let res = http.get('https://restful-booker.herokuapp.com/booking/1');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
}

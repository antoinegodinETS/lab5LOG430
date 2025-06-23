import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 20,              // Nombre d'utilisateurs virtuels
  duration: '10s',      // Durée du test
};

export default function () {
  const clientId = 1;  // À adapter selon les données en BD
  let res = http.get(`http://localhost:8080/panier/${clientId}`);
  
  check(res, {
    'status is 200': (r) => r.status === 200
  });
}

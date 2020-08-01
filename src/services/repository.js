import api from './api';

export default class Repository {
  getProperties = async () => api.get('/jsvini/desafio-frontend/master/assets/api.json');
}

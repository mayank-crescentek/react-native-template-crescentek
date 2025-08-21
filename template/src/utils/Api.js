import axios from 'axios';
import { BASE_URL } from '../constants/env';
import NetInfo from '@react-native-community/netinfo';

class Api {
  defaultHeader(object) {
    Object.keys(object).forEach((key) => {
      axios.defaults.headers.common[key] = object[key];
    });
  }

  GET(endpoint, params) {
    return new Promise((resolve) => {
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          axios({
            method: 'GET',
            url: this.normalizePath(endpoint),
            params,
            headers: { 'Content-Type': 'application/json' },
            responseType: 'json',
          })
            .then((response) => {
              resolve({
                status: response.status,
                response: response.data,
              });
            })
            .catch((error) => {
              resolve({
                status: error.response?.status || false,
                response: error.response?.data || 'Internal Server Error',
              });
            });
        } else {
          resolve({
            status: 502,
            response: 'Network Error',
          });
        }
      });
    });
  }

  POST(endpoint, params, headers) {
    return new Promise((resolve) => {
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          axios({
            method: 'post',
            url: this.normalizePath(endpoint),
            data: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json', ...headers },
          })
            .then((response) => {
              resolve({
                status: response.status,
                response: response.data,
              });
            })
            .catch((error) => {
              resolve({
                status: error.response?.status || false,
                response: error.response?.data || 'Internal Server Error',
              });
            });
        } else {
          resolve({
            status: 502,
            response: 'Network Error',
          });
        }
      });
    });
  }

  PUT(endpoint, params, headers) {
    return new Promise((resolve) => {
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          axios({
            method: 'PUT',
            url: this.normalizePath(endpoint),
            data: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json', ...headers },
          })
            .then((response) => {
              resolve({
                status: response.status,
                response: response.data,
              });
            })
            .catch((error) => {
              resolve({
                status: error.response?.status || false,
                response: error.response?.data || 'Internal Server Error',
              });
            });
        } else {
          resolve({
            status: 502,
            response: 'Network Error',
          });
        }
      });
    });
  }

  DELETE(endpoint, params, headers) {
    return new Promise((resolve) => {
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          axios({
            method: 'DELETE',
            url: this.normalizePath(endpoint),
            data: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json', ...headers },
          })
            .then((response) => {
              resolve({
                status: response.status,
                response: response.data,
              });
            })
            .catch((error) => {
              resolve({
                status: error.response?.status || false,
                response: error.response?.data || 'Internal Server Error',
              });
            });
        } else {
          resolve({
            status: 502,
            response: 'Network Error',
          });
        }
      });
    });
  }

  normalizePath(endpoint) {
    return `${BASE_URL}/${endpoint}`;
  }
}

export default new Api();

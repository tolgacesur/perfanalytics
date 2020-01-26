import axios from 'axios';
import Metric from '../models/metric';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

axios.interceptors.response.use(function (response) {
	return response ? response.data || {} : {};
}, function (err) {
	if (!err.response || !err.response.data || !err.response.data.message){
		return Promise.reject({message : 'Oops Something Went Wrong!'});
	}

	return Promise.reject(err.response.data);
});

export default class ApiService {

    static getMetrics(token) {
        return axios.get(`/api/metrics/${token}`).then(metrics => {
            return metrics.map(m => new Metric(m));
        });
    }

}
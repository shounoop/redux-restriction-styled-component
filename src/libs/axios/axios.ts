import axios from 'axios';

const { REACT_APP_API_SERVER } = process.env;
const _axios = axios.create({
	baseURL: REACT_APP_API_SERVER,
});

const mainAxios = {
	request: async (parameters: any) => {
		const { method, url, data, config, params } = parameters;

		return new Promise((resolve, reject) => {
			const headers = config && config.headers ? config.headers : {};

			_axios
				.request({ url, method, data, headers, params })
				.then((response) => {
					resolve(response.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
};

export default mainAxios;

import { mainAxios } from '../../../libs';

const loginAuthentication = (data: any) => {
	return mainAxios.request({
		method: 'POST',
		url: `/api/general/auth/login`,
		data,
		config: {
			headers: {
				contentType: 'application/json',
			},
		},
	});
};

export default loginAuthentication;

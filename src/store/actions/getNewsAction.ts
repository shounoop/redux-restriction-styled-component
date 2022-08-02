import axios from 'axios';
import { ADD_NEWS } from './actionNames';

const getNewsAction = (page: any, token: any) => async (dispatch: any) => {
	try {
		const response = await axios({
			method: 'get',
			url: `https://api.simplize.dev/api/company/news-event/list?page=${page}&size=15`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		dispatch({
			type: ADD_NEWS,
			payload: response.data.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export default getNewsAction;

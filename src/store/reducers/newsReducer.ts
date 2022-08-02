import { GET_NEWS, ADD_NEWS } from '../actions/actionNames';

const initialState = {
	newsItems: [],
	isModalVisible: false,
	onCancel: () => {},
};

const newsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GET_NEWS:
			return {
				...state,
				newsItems: action.payload,
			};
		case ADD_NEWS:
			return {
				...state,
				newsItems: [...state.newsItems, ...action.payload],
			};
		default:
			return state;
	}
};

export default newsReducer;

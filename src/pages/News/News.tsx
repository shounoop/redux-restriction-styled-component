import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { StyledWrapper } from './StyledComponents';
import { getNews } from '../../store/actions';
import { NewsItem } from '../../components';
import NewsModal from '../../components/NewsModal/NewsModal';
import Loading from '../../components/Loading';

interface Props {
	newsItems?: any;
	getNews?: any;
}

const News: React.FC<Props> = ({ newsItems, getNews }) => {
	const [newsId, setNewsId] = useState(null);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [currentNews, setCurrentNews] = useState(null);
	const [page, setPage] = useState(0);

	const token = localStorage.getItem('idToken');

	useEffect(() => {
		getNews(page, token);
	}, []);

	useEffect(() => {
		if (newsId) {
			axios({
				method: 'get',
				url: `https://api.simplize.dev/api/company/news-event/detail/${newsId}`,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}).then((res) => {
				const data = res.data.data;
				setCurrentNews(data);
			});
		}
	}, [newsId]);

	const showModal = (id: any) => {
		setNewsId(id);
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
		setCurrentNews(null);
	};

	const fetMoreData = () => {
		setPage(page + 1);
		getNews(page, token);
	};

	return (
		<StyledWrapper>
			<InfiniteScroll
				dataLength={newsItems.length}
				next={fetMoreData}
				hasMore={true}
				loader={<Loading />}
			>
				{newsItems.map((newsItem: any, index: any) => (
					<NewsItem newsItem={newsItem} onClick={() => showModal(newsItem.id)} key={index} />
				))}
			</InfiniteScroll>

			{currentNews && (
				<NewsModal isModalVisible={isModalVisible} onCancel={handleCancel} newsItem={currentNews} />
			)}
		</StyledWrapper>
	);
};

const mapStateToProps = (state: any) => ({
	newsItems: state.newsReducer.newsItems,
});

export default connect(mapStateToProps, { getNews })(News);

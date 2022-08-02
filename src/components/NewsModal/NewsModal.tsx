import convertHtmlToReact from '@hedgedoc/html-to-react';

import {
	StyledBtn,
	StyledContainer,
	StyledContent,
	StyledDate,
	StyledPublication,
	StyledPublisher,
	StyledTitle,
	StyledModal,
} from './styledComponents';

interface Props {
	isModalVisible?: any;
	onCancel?: any;
	newsItem?: any;
}

const NewsModal: React.FC<Props> = ({ isModalVisible, onCancel, newsItem }) => {
	const transform = (node: any) => {
		if (node.type === 'text' && node.data === ' ') return null;
	};

	return (
		<StyledModal
			title={(newsItem.ticker && `${newsItem.ticker} | ${newsItem.companyName}`) || null}
			visible={isModalVisible}
			width={944}
			footer={null}
			onCancel={onCancel}
			centered={true}
			// style={{ margin: 32 }}
		>
			<StyledContainer>
				<StyledPublication>
					<StyledPublisher>{newsItem.sourceNameDisplay}</StyledPublisher>
					<div>|</div>
					<StyledDate>{newsItem.createdDate}</StyledDate>
				</StyledPublication>
				<StyledTitle>{newsItem.title}</StyledTitle>
				<StyledContent>
					{convertHtmlToReact(newsItem.content, { decodeEntities: true, transform })}
				</StyledContent>

				{newsItem.ticker && <StyledBtn>Xem phân tích</StyledBtn>}
			</StyledContainer>
		</StyledModal>
	);
};

export default NewsModal;

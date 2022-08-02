import {
	StyledWrapper,
	StyledContainer,
	StyledDescription,
	StyledDotIcon,
	StyledImage,
	StyledMain,
	StyledNewspaperName,
	StyledTime,
	StyledTitle,
	StyledFooter,
	StyledImg,
} from './styledComponents';

interface Props {
	onClick?: any;
	newsItem?: any;
	title?: any;
}

const NewsItem: React.FC<Props> = ({ newsItem, onClick }) => {
	return (
		<StyledWrapper onClick={onClick}>
			<StyledContainer>
				<StyledMain>
					<StyledTitle>{newsItem.title}</StyledTitle>

					<StyledDescription>{newsItem.description}</StyledDescription>
					<StyledFooter>
						<StyledNewspaperName>{newsItem.sourceNameDisplay}</StyledNewspaperName>
						<StyledDotIcon>•</StyledDotIcon>
						<StyledTime>{newsItem.createdDateTimeAgo}</StyledTime>
					</StyledFooter>
				</StyledMain>

				<StyledImage>
					<StyledImg src={newsItem.thumbUrl} alt=""></StyledImg>
				</StyledImage>
			</StyledContainer>
		</StyledWrapper>
	);
};

export default NewsItem;

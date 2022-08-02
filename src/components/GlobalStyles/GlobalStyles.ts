import './GlobalStyles.css';

interface Props {
	children?: any;
}

const GlobalStyles: React.FC<Props> = (props) => {
	const { children } = props;
	return children;
};

export default GlobalStyles;

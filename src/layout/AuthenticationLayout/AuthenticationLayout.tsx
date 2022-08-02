import { StyledWrapper } from './StyledComponents';

interface Props {
	children: React.ReactNode;
}

const AuthenticationLayout: React.FC<Props> = (props) => {
	const { children, ...rest } = props;

	return <StyledWrapper {...rest}>{children}</StyledWrapper>;
};

export default AuthenticationLayout;

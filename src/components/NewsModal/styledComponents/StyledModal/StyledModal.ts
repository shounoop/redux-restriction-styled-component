import styled from 'styled-components';
import { Modal } from 'antd';

const StyledModal = styled(Modal)`
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	padding: 0 !important;
  margin: 32px;

	.ant-modal-content {
		width: 100%;
		padding: 0 0 64px;
		background-color: transparent;
	}

	.ant-modal-close {
		color: #333;
		border-radius: 50%;
	}

	&.ant-modal-close:hover {
		color: #fff;
		background-color: rgba(0, 0, 0, 0.25);
	}

	.ant-modal-header {
		background-color: #fff;
		border-bottom: 0.5px solid #e4e6eb;
		padding-left: 84px;
		padding-right: 84px;
	}

	.ant-modal-title {
		color: #050505;
		font-size: 18px;
		font-weight: 400;
	}

	.ant-modal-body {
		padding: 32px 84px 0;
	}
`;

export default StyledModal;

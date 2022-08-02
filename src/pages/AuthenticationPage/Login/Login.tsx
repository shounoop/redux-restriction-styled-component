import { Button, Checkbox, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';

import { loginAuthentication } from '../../../apis/authentication';
import { AuthenticationLayout } from '../../../layout';
import { StyledWrapper } from './StyledComponents';

const Login: React.FC = () => {
	const history = useHistory();

	const onFinish = (info: any) => {
		loginAuthentication(info).then((res: any) => {
			localStorage.setItem('idToken', res.data.accessToken);

			history.push('/news');
		});
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<AuthenticationLayout>
			<StyledWrapper>
				<h1 style={{ textAlign: 'center' }}>Đăng nhập</h1>
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 14 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					// layout="vertical"
				>
					<Form.Item
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập email của bạn.',
							},
						]}
					>
						<Input placeholder="Email của bạn..." />
					</Form.Item>

					<Form.Item
						label="Mật khẩu"
						name="password"
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập mật khẩu của bạn.',
							},
						]}
					>
						<Input.Password placeholder="Mật khẩu của bạn..." />
					</Form.Item>

					<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Login
						</Button>
					</Form.Item>
				</Form>
			</StyledWrapper>
		</AuthenticationLayout>
	);
};

export default Login;

import { Button, Form, Input, InputNumber } from "antd";
import { useLanguageCreateInvitationUU } from "../../../utils/translations/i18n";

interface Invitation {
    familyName: string;
    numberTickets: number;
}

const CreateInvitation: React.FC = () => {
    const { t } = useLanguageCreateInvitationUU();

    const onFinish = (values: Invitation) => {
        console.log('Success:', values);
    };

    return (
        <>
            <Form
                onFinish={onFinish}
                layout='vertical'
            >
                <Form.Item
                    label={t('CI1')}
                    name="familyName"
                    rules={[{ required: true, message: t('CI1W') }]}
                >
                    <Input placeholder={t('CI1P')} />
                </Form.Item>

                <Form.Item
                    label={t('CI2')}
                    name="numberTickets"
                    rules={[
                        { required: true, message: t('CI2W') },
                    ]}
                >
                    <InputNumber style={{width: '100%'}} placeholder={t('CI2P')} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {t('CI3')}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default CreateInvitation;
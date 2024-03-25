import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import "../../../utils/GeneralStyles.css"
import ErrorModal from "../global/ErrorModal";
import { useState } from "react";
import SuccessModal from "../global/SuccessModal";
import { useLanguageCreateInvitation } from "../../../utils/translations/i18n";
import { CheckOutlined } from "@ant-design/icons";

interface CreateInvitationData {
    familyName: string;
    fechaIni: string;
    fechaFin: string;
}

interface CreateInvitationProps {
    isCreating: (value: boolean) => void;
}

const CreateInvitation: React.FC<CreateInvitationProps> = ({ isCreating }) => {
    const { t } = useLanguageCreateInvitation();

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");

    const onFinish = (values: CreateInvitationData) => {
        const fechaIniObject = new Date(values.fechaIni);
        const fechaFinObject = new Date(values.fechaFin);

        if (fechaIniObject > fechaFinObject) {
            setErrorMessage("La fecha de inicio no puede ser mayor a la fecha de fin");
            return;
        }

        const formattedFechaIni = `${fechaIniObject.getFullYear()}-${fechaIniObject.getMonth() + 1}-${fechaIniObject.getDate()}`;
        const formattedFechaFin = `${fechaFinObject.getFullYear()}-${fechaFinObject.getMonth() + 1}-${fechaFinObject.getDate()}`;

        values.fechaIni = formattedFechaIni;
        values.fechaFin = formattedFechaFin;

        console.log('Success:', values);
        setSuccessMessage("Invitación creada exitosamente");
    };

    return (
        <>
            <Form onFinish={onFinish} layout='vertical' style={{ width: '95%', marginTop: "20px" }}>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            style={{ marginRight: "30px" }}
                            label={t('CI1')}
                            name="familyName"
                            rules={[{ required: true, message: t('CI1W') }]}
                        >
                            <Input placeholder={t('CI1P')} />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item
                            label={t('CI2')}
                            name="fechaIni"
                            rules={[{ required: true, message: t('CI2W') }]}
                        >
                            <DatePicker style={{ width: '90%' }} placeholder={t('CI2P')} />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item
                            label={t('CI3')}
                            name="fechaFin"
                            rules={[{ required: true, message: t('CI3W') }]}
                        >
                            <DatePicker style={{ width: '90%' }} placeholder={t('CI3P')} />
                        </Form.Item>
                    </Col>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                        <CheckOutlined />{t('CI4')}
                        </Button>
                    </Form.Item>
                </Row>
            </Form>

            {errorMessage !== "" && <ErrorModal error={errorMessage} onClose={() => setErrorMessage("")} />}
            {successMessage !== "" && <SuccessModal success={successMessage} onclose={() => { setSuccessMessage(""), isCreating(false) }} />}
        </>
    );
}

export default CreateInvitation;
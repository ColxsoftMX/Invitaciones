import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import "../../../utils/GeneralStyles.css"
import ErrorModal from "../global/ErrorModal";
import { useState } from "react";
import SuccessModal from "../global/SuccessModal";
import { useNavigate } from "react-router-dom";

interface CreateInvitationData {
    familyName: string;
    fechaIni: string;
    fechaFin: string;
}

const CreateInvitation: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");

    const navigate = useNavigate();

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
        navigate('/invitaciones/')
        setSuccessMessage("Invitación creada exitosamente");
    };

    return (
        <>
            <Form onFinish={onFinish} layout='vertical' style={{ width: '95%', marginTop: "20px" }}>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            style={{ marginRight: "30px" }}
                            label="Nombre de la familia"
                            name="familyName"
                            rules={[{ required: true, message: 'Por favor ingrese el nombre de la familia' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item
                            label="Fecha de inicio"
                            name="fechaIni"
                            rules={[{ required: true, message: 'Por favor ingrese la fecha de inicio' }]}
                        >
                            <DatePicker style={{ width: '90%' }} />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item
                            label="Fecha de fin"
                            name="fechaFin"
                            rules={[{ required: true, message: 'Por favor ingrese la fecha de fin' }]}
                        >
                            <DatePicker style={{ width: '90%' }} />
                        </Form.Item>
                    </Col>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Crear invitación
                        </Button>
                    </Form.Item>
                </Row>
            </Form>

            {errorMessage !== "" && <ErrorModal error={errorMessage} onClose={() => setErrorMessage("")} />}
            {successMessage !== "" && <SuccessModal success={successMessage} onclose={() => setSuccessMessage("")} />}
        </>
    );
}

export default CreateInvitation;
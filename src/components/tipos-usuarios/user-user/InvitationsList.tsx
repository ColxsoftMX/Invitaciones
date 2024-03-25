import { Row } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

interface Invitation {
    aceptado: boolean;
    token: string;
    data: {
        familia: string;
        boletos: number;
    };
}

interface InvitationsListProps {
    invitations: Invitation[];
}

const InvitatiosList: React.FC<InvitationsListProps> = ({ invitations }) => {
    return (
        <>


            {invitations.map((invitation, index) => (
                <>
                    <hr className="hr-gray my-10" />
                    <Row key={index} style={{ fontSize: '13px' }}>
                        {invitation.aceptado ? (
                            <>
                                <CheckCircleOutlined style={{ color: 'green', marginRight: '5px', fontSize: '25px' }} />
                                <p><strong>Invitación aceptada</strong></p>
                            </>
                        ) : (
                            <>
                                <ClockCircleOutlined style={{ color: 'red', marginRight: '5px', fontSize: '25px' }} />
                                <p><strong>Invitación pendiente</strong></p>
                            </>
                        )}
                    </Row>

                    <Row style={{ fontSize: '13px', color: 'gray', margin: '0 0 0 30px' }}>
                        <p className="m-0">Familia: {invitation.data.familia}</p>
                    </Row>
                </>
            ))}
        </>
    );
}

export default InvitatiosList;
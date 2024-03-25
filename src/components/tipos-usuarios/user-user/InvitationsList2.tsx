import { Row } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, StopOutlined } from "@ant-design/icons";
import { useLanguageInvitationsList } from "../../../utils/translations/i18n";

interface Invitation {
    aceptado: number;
    token: string;
    data: {
        familia: string;
        boletos: number;
    };
}

interface InvitationsListProps {
    invitations: Invitation[];
}

const InvitatiosList2: React.FC<InvitationsListProps> = ({ invitations }) => {
    const { t } = useLanguageInvitationsList();

    return (
        <>


            {invitations.map((invitation, index) => (
                <>
                    <hr className="hr-gray my-10" />
                    <Row key={index} style={{ fontSize: '13px' }}>
                        {invitation.aceptado === 1 && (
                            <>
                                <ClockCircleOutlined style={{ color: 'black', marginRight: '5px', fontSize: '25px' }} />
                                <p><strong>{t('IL1')}</strong></p>
                            </>
                        )}

                        {invitation.aceptado === 2 && (
                            <>
                                <CheckCircleOutlined style={{ color: 'green', marginRight: '5px', fontSize: '25px' }} />
                                <p><strong>{t('IL2')}</strong></p>
                            </>
                        )}

                        {invitation.aceptado === 3 && (
                            <>
                                <StopOutlined style={{ color: 'red', marginRight: '5px', fontSize: '25px' }} />
                                <p><strong>{t('IL3')}</strong></p>
                            </>
                        )}

                        {invitation.aceptado === 4 && (
                            <>
                                <CloseCircleOutlined style={{ color: 'red', marginRight: '5px', fontSize: '25px' }} />
                                <p><strong>{t('IL4')}</strong></p>
                            </>
                        )}
                    </Row>

                    <Row style={{ fontSize: '13px', color: 'gray', margin: '0 0 0 30px' }}>
                        <p className="m-0">{t('IL5')} {invitation.data.familia}</p>
                    </Row>
                </>
            ))}
        </>
    );
}

export default InvitatiosList2;
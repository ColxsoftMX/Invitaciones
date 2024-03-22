import { Col, Row } from "antd";
import { useLanguageInvitationsAdmin } from "../../../utils/translations/i18n";
import { UserList } from "../../Interfaces";
import "../../../utils/GeneralStyles.css";
import { EyeOutlined } from "@ant-design/icons";

interface UserListProps {
    data: UserList[];
}

const UsersList: React.FC<UserListProps> = ({ data }) => {
    const { t } = useLanguageInvitationsAdmin();

    return (
        <div style={{ border: '1px solid #a5a5a5', padding: '0 20px 20px', borderRadius: '10px', margin: '20px 60px 0 0' }}>
            <Row>
                <Col span={24} style={{ textAlign: 'start', fontSize: '20px', fontWeight: 'bold' }}>
                    <p className="mb-0">{t('IA2')}</p>
                </Col>
            </Row>

            <Row>
                {data.map((item) => (
                    <>
                        <Col span={24} key={item.id_invitation}>
                            <hr className="hr-gray my-15" />
                            <Row style={{ margin: '0 0 0 20px', padding: '0' }}>
                                <Col span={22} style={{ fontSize: '13px', fontWeight: 'bold' }}>
                                    <p className="mt-5">{item.name_invitation}</p>
                                </Col>

                                <Col span={2} style={{ textAlign: 'center', margin: '15px 0 0 0'}}>
                                    <EyeOutlined href={item.url_invitation} />
                                </Col>
                            </Row>
                            <Row style={{ margin: '0 0 0 20px', padding: '0' }}>
                                <Col span={24} style={{ fontSize: '13px' }}>
                                    <p className="mt-5 fc-gray">{item.name_user}</p>
                                </Col>
                            </Row>
                        </Col>
                    </>
                ))}
            </Row>
        </div>
    );
}

export default UsersList;
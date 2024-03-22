import { Button, Col, Row } from "antd";
import { useLanguageInvitationsAdmin } from "../../../utils/translations/i18n";
import UsersList from "./UsersList";

const UserAdminView: React.FC = () => {
    const { t } = useLanguageInvitationsAdmin();

    const data = [
        {
            "id_invitation": "1",
            "url_invitation": "daniela/daniela/boda",
            "date_invitation": "2023-06-22",
            "name_invitation": "Xv - Aby",
            "status_invitation": "1",
            "name_user": "Cinthya"
        },
        {
            "id_invitation": "2",
            "url_invitation": "sad",
            "date_invitation": "2024-02-22",
            "name_invitation": "inmvi",
            "status_invitation": "1",
            "name_user": "Angel Salvador [Admin]"
        },
        {
            "id_invitation": "3",
            "url_invitation": "daniela/daniela/boda",
            "date_invitation": "2024-02-21",
            "name_invitation": "Xv - Aby",
            "status_invitation": "1",
            "name_user": "Pablo"
        }
    ];

    return (
        <>
            <Row>
                <Col span={24} style={{ textAlign: 'end' }}>
                    <Button type="primary" style={{ margin: '20px 60px 0 0' }}>{t('IA1')}</Button>
                </Col>
            </Row>

            <UsersList data={data} />
        </>
    );
}

export default UserAdminView;
import { Button, Col, Row } from "antd";
import { useLanguageInvitationsAdmin } from "../../../utils/translations/i18n";
import UsersList from "./UsersList";
import { useState } from "react";
import CreateInvitation from "./CreateInvitation";

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

    const [createInvitation, setCreateInvitation] = useState<boolean>(false);

    const handleCreateInvitation = () => {
        if (createInvitation) {
            setCreateInvitation(false);
        }
        else {
            setCreateInvitation(true);
        }
    }

    return (
        <>
            <Row>
                <Col span={24} style={{ textAlign: 'end' }}>
                    {createInvitation ? (
                        <Button type="primary" style={{ margin: '5px 60px 0 0' }} onClick={handleCreateInvitation} danger>{t('IA3')}</Button>
                    ) : (
                        <Button type="primary" style={{ margin: '5px 60px 0 0' }} onClick={handleCreateInvitation}>{t('IA1')}</Button>
                    )}
                </Col>
            </Row>

            {createInvitation ? (
                <CreateInvitation />
            ) : (
                <UsersList data={data} />
            )}
        </>
    );
}

export default UserAdminView;
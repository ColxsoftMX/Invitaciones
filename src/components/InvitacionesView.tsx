import { Row } from "antd";
import UserAdminView from "./tipos-usuarios/user-admin/UserAdminView";
import UserUserView from "./tipos-usuarios/user-user/UserUserView";
import { useLanguageInvitations } from "../utils/translations/i18n";

const InvitacionesView: React.FC = () => {
    const { t } = useLanguageInvitations();

    // ADMIN
    // const userDat = localStorage.getItem('userData');
    // USER
    const userDat = localStorage.getItem('userData2');
    const userData = userDat ? JSON.parse(userDat) : null;

    return (
        <div
            style={{
                height: '100%',
                background: '#fff',
                borderRadius: 8,
            }}
        >
            <Row style={{ margin: '0 0 0 30px', height: '60px' }}>
                <h1 style={{ margin: '10px 20px' }}>{t('I1')}</h1>
            </Row>

            <div style={{ margin: '0 0 0 60px', height: '100%' }}>
                {userData && userData.id_type === '1' ? <UserAdminView /> : <UserUserView />}
            </div>
        </div>
    );
}

export default InvitacionesView;
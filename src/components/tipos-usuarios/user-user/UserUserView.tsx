import { Tabs } from "antd";
// import InvitatiosList from "./InvitationsList";
// import { data } from "./datPrueb";
import { data2 } from "./datPrueb";
import CreateInvitation from "./CreateInvitation";
import InvitatiosList2 from "./InvitationsList2";
import { useLanguageUserUserView } from "../../../utils/translations/i18n";

const UserUserView: React.FC = () => {
    const { t } = useLanguageUserUserView();

    return (
        <>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab={t('UUV1')} key="1">
                    {/* <InvitatiosList invitations={data} /> */}
                    <InvitatiosList2 invitations={data2} />
                </Tabs.TabPane>
                <Tabs.TabPane tab={t('UUV2')} key="2">
                    <CreateInvitation />
                </Tabs.TabPane>
            </Tabs>
        </>
    );
}

export default UserUserView;
import { Button, Modal } from "antd";


const SuccessModal = ({ success, onclose }: { success: string, onclose: () => void }) => {
    const lang = localStorage.getItem('language');
    
    const customizedFooter = (
        <div>
            <Button key="submit" type="primary" onClick={onclose}>
                Ok
            </Button>
        </div>
    );

    return (
        <>
            <Modal
                title={lang === 'en' ? "Success" : "Éxito"}
                visible={true}
                closable={false}
                footer={customizedFooter}
            >
                <p>{success}</p>
            </Modal>
        </>
    );
};

export default SuccessModal;
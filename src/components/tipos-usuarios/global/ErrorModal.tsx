import { Button, Modal } from "antd";

const ErrorModal = ({ error, onClose }: { error: string, onClose: () => void }) => {

    const customizedFooter = (
        <div>
            <Button key="submit" type="primary" danger onClick={onClose}>
                Ok
            </Button>
        </div>
    );

    return (
        <>
            <Modal
                title="Error"
                visible={true}
                closable={false}
                footer={customizedFooter}
            >
                <p>{error}</p>
            </Modal>
        </>
    );
};

export default ErrorModal;
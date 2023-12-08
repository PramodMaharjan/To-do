import { Button, Modal, Input,Typography } from "antd";
import { useEffect, useState } from "react";
import { SelectOption } from "./Button";
const ModalContent = ({
    modalOpen,
    handleAddTask,
    handleCancel,
    handleUpdate,
    handleUpdateTask,
    handleUpdateSelectClick,
    handleEditInputChange,
    changedTask,
    messageIncoming
}) => {
    const [message, setMessage] = useState('')
    const [selectMessage, setSelectMessage] = useState('incomplete')
    useEffect(()=> {
        if (handleUpdate && messageIncoming) {
            setMessage(messageIncoming.value)
            setSelectMessage(messageIncoming.status)
        } else {
            setMessage('')
            setSelectMessage('incomplete')
        }
    }, [handleUpdate, messageIncoming, modalOpen])
    const handleChange = (event) => {
        setMessage(event.target.value)
    }
    const handleSelectClick = (value) => {
        setSelectMessage(value)
    }
    const { Title } = Typography
    return (
        <>
            <Modal
                title="Add TODO"
                open={modalOpen}
                onCancel={handleCancel}
                footer={[
                    <Button
                        key="task"
                        type="primary"
                        onClick={() => handleUpdate ? handleUpdateTask() : handleAddTask(message, selectMessage)}
                    >
                        {handleUpdate ? "Update Task" : "Add Task"}
                    </Button>,
                    <Button key="cancel" onClick={handleCancel}>Cancel</Button>
                ]}
            >    
                <Title level={5}>Title</Title>
                {
                    handleUpdate ?
                        <Input
                            onChange={handleEditInputChange}
                            type="text"
                            name="changedTask"
                            value={changedTask.value}
                            allowClear
                        /> :
                        <Input
                            placeholder="Enter"
                            onChange={handleChange}
                            type="text"
                            name="title"
                            value={message}
                            allowClear
                        />
                }
                <Title level={5}>Status</Title>
                <SelectOption
                    handleSelectClick={handleSelectClick}
                    handleUpdateSelectClick={handleUpdateSelectClick}
                    handleUpdate={handleUpdate}
                    changedTask={changedTask}
                    selectMessage={selectMessage}
                />
            </Modal>
        </>
    )
}
export default ModalContent;
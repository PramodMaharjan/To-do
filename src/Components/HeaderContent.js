import { AddButton, MainSelect } from "./Button";
import ModalContent from "./ModalContent";
import DataDisplay from "./DataDisplay";
import { useEffect, useState } from "react";
import { Row, Col } from "antd";

const HeaderContent = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [messageIncoming, setMessageIncoming] = useState([]);
    const [updateTask, setUpdateTask] = useState(false);
    const [changedTask, setChangedTask] = useState({})
    const [mainSelect, setMainSelect] = useState('all')
    useEffect(() => {
        localStorage.setItem('messageIncoming', JSON.stringify(messageIncoming));
    },[messageIncoming])
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('messageIncoming'));
        if (items) {
            setMessageIncoming(items);
        }
    },[])
    const handleClick = () => {
        setModalOpen(true)
    }
    const handleAddTask = (message, selectMessage) => {
        setModalOpen(false)
        if (message !== "") {
            const taskList = {
                id: Math.floor(Math.random()*100),
                value: message,
                status: selectMessage,
                date: new Date().toLocaleString(),
            }
            setMessageIncoming([...messageIncoming, taskList])
        }
    }
    const handleDelete = (item) => {
        const filteredItems = messageIncoming.filter((msg) => msg.id !== item.id )
        setMessageIncoming(filteredItems)
    }
    const handleEdit = (item) => {
        setModalOpen(true)
        setUpdateTask(true)
        setChangedTask({ ...item })
    }
    const handleEditInputChange = (changedItem) => {
        setChangedTask({ ...changedTask, value: changedItem.target.value })
    }
    const handleUpdateSelectClick = (updatedStatus) => {
        setChangedTask({ ...changedTask, status: updatedStatus })
    }
    const handleUpdateTask = () => {
        const editedTask = messageIncoming.map((task) => {
            if (changedTask.id === task.id) {
                return changedTask
            } else {
                return task
            }
        })
        setMessageIncoming(editedTask)
        setModalOpen(false)
        setUpdateTask(false)
    }
    const handleCancel = () => {
        setModalOpen(false)
        setUpdateTask(false)
    }
    const handleMainSelectClick = (value) => {
        setMainSelect(value)
    }
    return (
        <div>
            <Row justify={"center"}>
                <Col span={6}>
                    <AddButton
                        handleClick={handleClick}
                    >
                        Add Task
                    </AddButton>
                </Col>    
                <Col span={6}>
                    <MainSelect handleMainSelectClick={handleMainSelectClick}/>
                </Col>
            </Row>
            <ModalContent
                modalOpen={modalOpen}
                handleAddTask={handleAddTask}
                handleCancel={handleCancel}
                handleUpdate={updateTask}
                handleUpdateTask={handleUpdateTask}
                handleUpdateSelectClick={handleUpdateSelectClick}
                handleEditInputChange={handleEditInputChange}
                changedTask={changedTask}
                messageIncoming={messageIncoming}
            />
            <DataDisplay
                messageIncoming={messageIncoming}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                mainSelect={mainSelect}
            />
        </div>
    )
    
}
export default HeaderContent;
import { Button, Select } from "antd";

const items = [
    {
        value: "completed",
        label: "Completed"
    },
    {
        value: "incomplete",
        label: "Incomplete"
    }
]

const mainItems = [
    {
        value: "all",
        label: "All"
    },
    {
        value: "completed",
        label: "Completed"
    },
    {
        value: "incomplete",
        label: "Incomplete"
    }
]

export const AddButton = ({ children, handleClick }) => {
    return (
        <Button type="primary" onClick={handleClick}>
            {children}
        </Button>
    )
}

export const SelectOption = ({ handleSelectClick, handleUpdateSelectClick, handleUpdate, changedTask, selectMessage }) => {
    return (        
        handleUpdate ?
            <Select
                options={items}
                onChange = { handleUpdateSelectClick }
                style={{ width: 120 }}
                defaultValue="incomplete"
                value={changedTask.status}
            /> :
             <Select
                options={items}
                defaultValue="incomplete"
                onChange = { handleSelectClick }
                style={{ width: 120 }}
                value={selectMessage}
            />       
        )}
export const MainSelect = ({ handleMainSelectClick }) => {
    return (
        <Select
            options={mainItems}
            defaultValue="All"
            onChange={handleMainSelectClick}
            style={{width: 120}}         
    />
)}

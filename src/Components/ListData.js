import { List, Typography, Checkbox } from "antd";
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

const { Text } = Typography 
const ListData = ({ handleDelete, handleEdit, item, handleCheckbox }) => {
    return (
        <List.Item
            actions={[
                <Text type="secondary">
                    {item.date}
                </Text>,
                <DeleteTwoTone onClick={() => handleDelete(item)} />,
                <EditTwoTone onClick={() => handleEdit(item)} />,
            ]}
        >
            <Checkbox
                checked={item.status === "completed" ? true : false}
                onChange={(e) => handleCheckbox(item)}
            >
                {
                    item.status === "completed" ?
                    <Text type="danger" delete keyboard>{item.value}</Text> :
                    <Text keyboard>{item.value}</Text>
                }
            </Checkbox>    
        </List.Item>
    )

}
export default ListData;
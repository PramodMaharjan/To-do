import { List, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const { Text } = Typography 
const ListData = ({ handleDelete, handleEdit, item }) => {
    return (
        <List.Item
            actions={[
                <Text type="secondary">
                    {item.date}
                </Text>,
                <DeleteOutlined onClick={() => handleDelete(item)} />,
                <EditOutlined onClick={() => handleEdit(item)} />,
            ]}
        >
            {item.status === "completed" ?
                <Text type="danger" delete keyboard>{item.value}</Text> :
                <Text keyboard>{item.value}</Text>
            }           
        </List.Item>
    )

}
export default ListData;
import { Card, Row, Col, List, Empty } from "antd";
import ListData from "./ListData";

const DataDisplay = ({ messageIncoming, handleDelete, handleEdit, mainSelect }) => {
    const filteredMessageIncoming = messageIncoming.filter((item) => {
        if (mainSelect === "all") {
            return true;
        }
        return item.status === mainSelect;
    })
    return (
        <Row justify={"center"}>     
            <Col>            
                <Card style={{ width: 600, background: "rgb(224 224 209 / 70%)", marginTop: "5px" }}>  
                    {filteredMessageIncoming && filteredMessageIncoming.length > 0 ?
                        <List
                            itemLayout="horizontal"
                            size="small"
                            bordered
                            dataSource={filteredMessageIncoming}
                            renderItem={(item) => (
                                <ListData
                                    item={item}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                />                  
                        )}
                        /> :
                        <Empty />
                    }
                </Card>
            </Col>
        </Row>
    )
}

export default DataDisplay;
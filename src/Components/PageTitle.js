import { Typography } from "antd";
const PageTitle =({ children })=> {
    return (
            <Typography.Title level={1} style={{color:"rgb(22 119 255)", fontWeight:"bold"}}>{children}</Typography.Title>
    )
}
export default PageTitle;

import { Row, Col } from 'antd';
import { Input } from 'antd';
import {
  SearchOutlined
} from '@ant-design/icons';
const HomeHeader = ( children, className ) => {
  return (
    <Row>
      <Col flex="auto"></Col>
      <Col flex="none">
        <Input suffix={
          <SearchOutlined />
        }></Input>
      </Col>
    </Row>
  )
}
export default HomeHeader
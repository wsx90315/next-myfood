
import { Row, Col } from 'antd';
import { Input } from 'antd';
import styles from './HomeHeader.module.sass'
import BaseInput from '../common/BaseInput'
import {
  SearchOutlined
} from '@ant-design/icons';
const HomeHeader = (children, className) => {
  const { title, inputLayout } = styles
  return (
    <Row style={{ height: '100%' }}>
      <Col flex="auto">
        <h1 className={title}>Today Menu</h1>
      </Col>
      <Col flex="none" className={inputLayout}>
        <BaseInput></BaseInput>
      </Col>
    </Row>
  )
}
export default HomeHeader
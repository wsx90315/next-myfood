import { Row, Col, Avatar } from "antd"
import { DownOutlined } from '@ant-design/icons';

import styles from './AccountUserSelect.module.sass'
const AccountUserSelect = () => {
  const main = styles['AccountUserSelect']
  const title = styles['AccountUserSelect-title']
  const second = styles['AccountUserSelect-second']
  return (
    <Row align="middle" className={main} justify="center" wrap>
      <Col flex="auto">
        <Avatar style={{ color: '#000', backgroundColor: '#d6f5ff' }}>U</Avatar>
      </Col>
      <Col flex="100px">
        <div className={title}>Rex</div>
        <div className={second}>user</div>
      </Col>
      <Col flex="auto">
        <DownOutlined style={{fontSize: '12px'}} />
      </Col>
    </Row>
  )
}
export default AccountUserSelect
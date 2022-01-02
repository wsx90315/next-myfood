import { Row, Col } from "antd"
import { Badge, Button } from 'antd';
import AccountUserSelect from '../AccountUserSelect'
import AccountUserBell from '../AccountUserBell'
import AccountUserCard from '../AccountUserCard'
import { AccoutShopCartLayout } from './AccoutShopCart.module.sass'

const AccoutShopCart = () => {
  return (
    <>
    <Row gutter={16} align="middle" justify="end" className={AccoutShopCartLayout}>
      <Col flex="none">
        <AccountUserBell></AccountUserBell>
      </Col>
      <Col flex="200px">
        <AccountUserSelect />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <AccountUserCard />
      </Col>
    </Row>
    </>
  )
}

export default AccoutShopCart
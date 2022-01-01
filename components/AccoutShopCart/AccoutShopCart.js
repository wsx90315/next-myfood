import { Row, Col } from "antd"
import { Badge, Button } from 'antd';
import AccountUserSelect from '../AccountUserSelect'
import { AccoutShopCartLayout, button } from './AccoutShopCart.module.sass'
import {
  BellOutlined
} from '@ant-design/icons';
const AccoutShopCart = () => {
  return (
    <Row align="middle" className={AccoutShopCartLayout}>
      <Col>
        <Button size="large" className={button} shape="circle" type="text">
          <Badge count={5}>
            <BellOutlined style={{fontSize: '20px'}}/>
          </Badge>
        </Button>
      </Col>
      <Col>
        <AccountUserSelect />
      </Col>
    </Row>
  )
}

export default AccoutShopCart
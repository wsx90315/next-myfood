
import { Badge, Button } from 'antd';
import { button } from './AccountUserBell.module.sass'
import {
  BellOutlined
} from '@ant-design/icons';
const AccountUserBell = () => {
  const BedgeStyle = {
    background: '#fc9302',
    boxShadow: 'rgba(222, 146, 59, 0.5) 0px 25px 20px -20px;'
  }
  return (
    <Button size="large" className={button} shape="circle" type="text">
      <Badge count={5} style={BedgeStyle}>
        <BellOutlined style={{ fontSize: '20px' }} />
      </Badge>
    </Button>
  )
}

export default AccountUserBell
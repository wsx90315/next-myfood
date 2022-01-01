import { Row, Col } from 'antd';
import {
  HeartOutlined,
  MessageOutlined,
  HomeOutlined,
  FileTextOutlined,
  CameraOutlined,
  SettingOutlined
} from '@ant-design/icons';
import styles from './HomeSider.module.sass'
import ActiveLink from '../common/ActiveLink'
const HomeSider = ({ children, className }) => {
  let antColClassName = styles['ant-col'];
  let iconLinkClassName = styles['icon-link'];
  const linkList = [
    { id: 1, href: '/', icon: HomeOutlined },
    { id: 2, href: '/photo-share', icon: CameraOutlined },
    { id: 3, href: '/favorite', icon: HeartOutlined },
    // { id: 4, href: '/4', icon: FileTextOutlined },
    { id: 4, href: '/messages', icon: MessageOutlined },
    { id: 5, href: '/edit', icon: SettingOutlined }
  ]
  const ListDom = linkList.map(it => {
    return (
      <Col span={24} className={antColClassName} key={it.id}>
        <ActiveLink activeClassName="active" href={it.href}>
          <it.icon className={iconLinkClassName} />
        </ActiveLink>
      </Col>
    )
  })
  return (
    <Row className="homeSider">
      {ListDom}
    </Row>
  )
}

export default HomeSider
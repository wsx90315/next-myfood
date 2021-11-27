import Head from 'next/head'
import styles from './HomeLayout.module.sass'
import { Layout } from 'antd';
import HomeSider from '../HomeSider'
import HomeHeader from '../HomeHeader'
const { Header, Content, Sider } = Layout;
const HomeLayout = ({ children, className }) => {
  let mainLayoutClassName = styles['main-layout'];
  let mainSiteHeaderClassName = styles['main-site-header'];

  if (className) {
    mainLayoutClassName = `${mainLayoutClassName} ${className}`;
  }

  return (
    <>
      <Head>
        <title>Layout Title</title>
      </Head>
      <main>
        <Layout className={mainLayoutClassName}>
          {/* {children} */}
          <Sider width={120} theme={'light'}>
            <HomeSider></HomeSider>
          </Sider>
          <Layout className="main-site-layout">
            <Header style={{ background: '#fff' }}>
              <HomeHeader></HomeHeader>
            </Header>
            <Header className={mainSiteHeaderClassName} style={{ padding: 0 }} />
            <Content>{children}</Content>
          </Layout>
          <Sider width={300} theme={'light'}>
            uese Data
          </Sider>
        </Layout>
      </main>
    </>
  )
}
export default HomeLayout;
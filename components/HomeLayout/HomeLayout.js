import Head from 'next/head'
import styles from './HomeLayout.module.sass'
import { Layout } from 'antd';
const { Header, Content } = Layout;
const HomeLayout = ({ children, className }) => {
  console.log(styles);
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
          {children}
          <Layout className="main-site-layout" style={{ marginLeft: 200 }}>
            <Header className={mainSiteHeaderClassNam} style={{ padding: 0 }} />
          </Layout>
        </Layout>
      </main>
    </>
  )
}
export default HomeLayout;
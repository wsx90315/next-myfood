import '../styles/index.sass'
import 'antd/dist/antd.css'
import HomeLayout from '../components/HomeLayout'

export default function MyApp ({ Component, pageProps }) {
  // Use the layout defined at the page level, if available

  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  )
}
import HomeLayout from '../components/HomeLayout'
export default function Index() {
  return (
    <div className="container">
        
    </div>
  )
}
Index.getLayout = function getLayout (page) {
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  )
}
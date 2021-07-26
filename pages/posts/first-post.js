import Link from 'next/link'

export default function FirstPost () {
  return (
    <>
      <h1>Frist Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
         </Link>
      </h2>
      </>
  )
}

async function xxxx2 () {
  // for (let index = 0; index < 10; index++) {
  //     xxx()
  // }
  // const studentArray = await 學生()
  // const res2 = await 成績本()
  
}
function 學生 (id) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('xxxx')
    }, 3000)
  })
}
function 成績本 (id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('xxxx')
    }, 3000)
  })
}
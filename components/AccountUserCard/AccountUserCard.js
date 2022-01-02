import { main, background, layout, card, cardBg } from './AccountUserCard.module.sass'

const AccountUserCard = () => {
  return (
    <div className={main}>
      <div className={card}>
        <div className={background}></div>
        <div className={layout}>
          內容拉
        </div>
      </div>
      <div className={cardBg}></div>
    </div>
  )
}
export default AccountUserCard
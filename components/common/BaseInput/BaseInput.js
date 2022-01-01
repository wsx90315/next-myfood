
import styles from './BaseInput.module.sass'
import {
  SearchOutlined
} from '@ant-design/icons';
const BaseInput = (children, className) => {
  const inputClass = styles['base-input-wrapper']
  return (
    <div className={inputClass}>
      <input placeholder="Search by food name"></input>
      <SearchOutlined />
    </div>
  )
}

export default BaseInput
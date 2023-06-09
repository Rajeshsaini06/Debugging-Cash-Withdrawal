import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onUpdate = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button type="button" onClick={onUpdate}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem

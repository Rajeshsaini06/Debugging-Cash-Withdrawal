import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name">
            <p className="letter">{initial}</p>
            <h1 className="person">{name}</h1>
          </div>

          <div className="balance-container">
            <p className="heading">Your Balance</p>
            <div className="amount">
              <p className="rupees">{balance}</p>
              <p className="tag">In Rupees</p>
            </div>
          </div>

          <div>
            <p className="person">Withdraw</p>
            <p className="heading">Choose SUM (IN RUPEES)</p>
          </div>
          <ul>
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationDetails={eachItem}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

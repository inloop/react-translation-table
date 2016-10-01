import React, { Component } from 'react'

export default class LangMenu extends Component {
  static propTypes = {
    dictionary: React.PropTypes.object,
    changeActive: React.PropTypes.func,
    active: React.PropTypes.string
  }

  render() {
    const { dictionary, changeActive, active } = this.props

    const list = []

    for (const key in dictionary) {
      if (dictionary.hasOwnProperty(key)) {
        list.push(
          <li key={key} style={{ color: (active === key ? 'red' : 'black') }}>
            <button type='button' onClick={() => changeActive(key)}>{key}</button>
          </li>
        )
      }
    }

    return (
      <ul>
        LeftMenu
        {list}
      </ul>
    )
  }
}

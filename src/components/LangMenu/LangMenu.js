import React, { Component } from 'react'

export default class LangMenu extends Component {
  static propTypes = {
    langMap: React.PropTypes.any
  }

  render() {
    console.log('langMap', this.props.langMap)

    return (
      <ul>
        LeftMenu
        {this.props.langMap.map((item, index) =>
          <li key={index}>
            {item}
          </li>
        )}
      </ul>
    )
  }
}

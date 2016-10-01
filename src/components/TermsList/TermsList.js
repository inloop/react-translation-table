import React, { Component } from 'react'

export default class TermsList extends Component {
  static propTypes = {
    terms: React.PropTypes.object
  }

  render() {
    const { terms } = this.props

    const list = []

    for (const key in terms) {
      if (terms.hasOwnProperty(key)) {
        list.push(
          <div key={key}>{key}: {terms[key]}</div>
        )
      }
    }
    return (
      <div>
        TermsList
        {list}
      </div>
    )
  }
}

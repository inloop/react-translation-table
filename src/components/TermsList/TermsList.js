import React, { Component } from 'react'

export default class TermsList extends Component {
  static propTypes = {
    terms: React.PropTypes.object,
    editItem: React.PropTypes.func
  }

  render() {
    const { terms, editItem } = this.props

    const list = []

    for (const key in terms) {
      if (terms.hasOwnProperty(key)) {
        list.push(
          <div key={key}>
            {key}: {terms[key]}
            <button onClick={() => editItem(key)}>Edit</button>
          </div>
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

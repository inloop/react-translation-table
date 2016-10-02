import React, { Component } from 'react'

export default class ItemDetail extends Component {
  static propTypes = {
    item: React.PropTypes.object,
    name: React.PropTypes.string,
    changeItem: React.PropTypes.func
  }

  state = {
    newItem: {}
  }

  handleChange = (evt, key) => {
    const { item } = this.props

    item[key] = evt.target.value
    this.setState({ newItem: item })
  }

  handleSubmit = () => this.props.changeItem(this.state.newItem)

  render() {
    const { item } = this.props
    const items = []

    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        items.push(
          <div key={key}>
            <span>{key}: </span>
            <input type='text' value={item[key]} onChange={evt => this.handleChange(evt, key)} />
          </div>
        )
      }
    }
    return (
      <div>
        ItemDetail
        {items}

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

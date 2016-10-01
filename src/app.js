import React, { Component } from 'react'
import { LangMenu } from './components'

export default class App extends Component {
  state = {
    active: 'en',
    dictionary: {
      en: {
        greeting: 'Hello'
      },
      cs: {
        greeting: 'Ahoj'
      },
    }
  }

  changeActive = key => this.setState({ active: key })

  render() {
    return (
      <div>
        App
        <LangMenu
          active={this.state.active}
          dictionary={this.state.dictionary}
          changeActive={this.changeActive}
        />
      </div>
    )
  }
}

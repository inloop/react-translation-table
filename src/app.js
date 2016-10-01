import React, { Component } from 'react'
import { LangMenu } from './components'

export default class App extends Component {

  state = {
    langMap: ['en', 'cs'],
    dictionary: {
      en: {
        greeting: 'Hello'
      },
      cs: {
        greeting: 'Ahoj'
      },
    }
  }

  render() {
    return (
      <div>
        App
        <LangMenu langMap={this.state.langMap} />
      </div>
    )
  }
}

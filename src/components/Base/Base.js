import React, { Component } from 'react'
import { LangMenu, TermsList, ItemDetail } from './../../components'
import styles from './base.styles'
import mapItemFromDic from './../../helpers/mapItemFromDic'
import mapItemToDic from './../../helpers/mapItemToDic'

export default class Base extends Component {
  state = {
    active: 'en',
    dictionary: {
      en: {
        greeting: 'Hello'
      },
      cs: {
        greeting: 'Ahoj'
      },
    },
    layout: {
      detail: null
    }
  }

  changeActive = key => this.setState({ active: key })

  editItem = key => this.setState({ layout: { detail: key } })

  changeItem = item => this.setState({ dictionary: mapItemToDic(this.state.dictionary, item, this.state.layout.detail) })

  render() {
    const {
      active,
      layout,
      dictionary
    } = this.state

    return (
      <div>
        <div style={styles.wrapper}>
          <div style={styles.left}>
            <LangMenu
              active={active}
              dictionary={dictionary}
              changeActive={this.changeActive}
            />
          </div>

          <div style={styles.rightFill}>
            <TermsList
              terms={dictionary[active]}
              editItem={this.editItem}
            />
          </div>
        </div>

        <div style={{ display: (layout.detail ? 'block' : 'none' ) }}>
          <ItemDetail
            item={mapItemFromDic(dictionary, layout.detail)}
            name={layout.detail}
            changeItem={this.changeItem}
          />
        </div>
      </div>
    )
  }
}

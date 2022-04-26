import React from 'react'
import { Link } from 'next/link'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionSearch from 'material-ui/svg-icons/action/search'
import SearchBar from 'material-ui-search-bar'

const styles = {
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link href="/">
          <IconButton iconStyle={styles.mediumIcon} style={styles.medium}>
            <ActionHome />
          </IconButton>
        </Link>
        <div style={{ float: 'right' }}>
          <Link href={{ pathname: '/search/' + this.props.SearchText }}>
            <IconButton>
              <ActionSearch />
            </IconButton>{' '}
          </Link>
          <SearchBar
            onChange={(value) => this.props.setSearchText(value)}
            onRequestSearch={() => console.log('search pushed')}
            style={{
              margin: '0 auto',
              maxWidth: 300,
              float: 'left',
            }}
          />
        </div>
        <hr />
      </div>
    )
  }
}

export default Header

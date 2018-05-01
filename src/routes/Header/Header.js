import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionSearch from 'material-ui/svg-icons/action/search'
import SearchBar from 'material-ui-search-bar'

const styles = {
  mediumIcon: {
    width: 48,
    height: 48
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <IconButton iconStyle={styles.mediumIcon} style={styles.medium}>
            <ActionHome />
          </IconButton>
        </Link>
        <div style={{ float: 'right' }}>
          <Link to={{ pathname: '/search/' + this.props.SearchText }}>
            <IconButton>
              <ActionSearch />
            </IconButton>{' '}
          </Link>
          <SearchBar
            onChange={value => this.props.setSearchText(value)}
            onRequestSearch={() => console.log('search pushed')}
            style={{
              margin: '0 auto',
              maxWidth: 300,
              float: 'left'
            }}
          />
        </div>
        <hr />
      </div>
    )
  }
}

export default Header

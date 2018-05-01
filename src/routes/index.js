import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import HomeComponent from './Home/'
import PreviewArea from './Preview'
import GenreGrid from './Genre'
import Header from './Header'
import SearchComponent from './Search'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/info/:type/:id" component={PreviewArea} />
            <Route exact path="/genre/:genre/:id" component={GenreGrid} />
            <Route exact path="/search/:text" component={SearchComponent} />
          </Switch>
        </div>
      </Router>
    )
  }
}

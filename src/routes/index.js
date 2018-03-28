import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import PageComponent from '../page/';
import PreviewArea from '../preview';
import GenreGrid from '../genre'
import Header from '../header/index'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={PageComponent} />
                        <Route exact path="/info/:type/:id" component={PreviewArea} />
                        <Route exact path="/genre/:genre/:id" component={GenreGrid} />

                    </Switch>
                </div>
            </Router>
        )
    }
}
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import {ShopComponent} from './pages/shop/shop.component'
import HomePage from "./pages/homepage/homepage.component";
import {Header} from "./components/header/header.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user,
            })

            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route path={'/shop'} component={ShopComponent} />
                    <Route path={'/auth'} component={AuthComponent} />
                </Switch>
            </div>
        );
    }
}

export default App;

import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'

export function useRoutes(isLogin = false) {
    return isLogin ? (<Switch>
        <Route path="/home" exact><HomePage/></Route>
        <Redirect to="/home"/>
    </Switch>) : (<Switch>
        <Route path="/auth" exact><AuthPage/></Route>
        <Redirect to="/auth"/>
    </Switch>)
}
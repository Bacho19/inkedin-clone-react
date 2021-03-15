import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'

export function useRoutes() {
    return(
        <Switch>
            <Route path="/home" exact><HomePage /></Route>
            <Redirect to="/home" />
        </Switch>
    )
}
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from "./pages/AuthPage";

export function useRoutes() {
    return(
        <Switch>
            <Route path="/home" exact><HomePage /></Route>
            <Route path="/auth" exact><AuthPage /></Route>
            <Redirect to="/home" />
        </Switch>
    )
}
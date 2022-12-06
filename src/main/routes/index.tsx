import { Switch, Route } from 'react-router-dom'

import { Home, VideoPlayer } from 'src/presentation/pages'

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/movies/:id" component={VideoPlayer} />
  </Switch>
)

export default Routes

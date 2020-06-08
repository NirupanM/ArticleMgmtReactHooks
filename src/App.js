import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import { UserContext } from './context/UserProvider';
// import Navbar from './components/layout/navbar';
// import Landing from './components/layout/landing';
// import Register from './components/auth/register';
// import StepOne from './components/auth/StepOne';
// import StepTwo from './components/auth/StepTwo';
// import StepThree from './components/auth/StepThree';
// import Login from './components/auth/login';
// import Logout from './components/auth/logout';
// import Dashboard from './components/dashboard/index';
// import Policy from './components/layout/policyModule';
import Login from './components/login';
import Home from './components/home';
//import Articles from './components/articles';

//import styles from '../src/css/app.css';
// import './index.css';

const App = () => {
//   const { user } = React.useContext(UserContext);
  // If the user is logged in, load the dashboard page as '/'
  // The dashboard page has some api call issues, hence nothing loads up, not an error :P
  // Else load the landing page with options to login/register
  return (
    <Router>
      <div >
        {/* <Navbar /> */}
        <Route exact path="/login" component={Login} />
        <Switch>
          <Route
            exact
            path="/"
            component={Login }
          />
          {/* <Route exact path="/register" component={Register} />
          <Route exact path="/register/step1" component={StepOne} />
          <Route exact path="/register/step2" component={StepTwo} />
          <Route exact path="/register/step3" component={StepThree} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/logout" component={Logout} /> */}
        </Switch>
      </div>
    </Router>
  );
};
export default App;

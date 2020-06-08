import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage
} from 'formik';
// import { isEmpty } from './register';
import styles from '../css/login.css';
//var data = require('users.json');
import users from '../api/users.json';
//import { users } from '../api';
// import { UserContext } from '../../context/UserProvider';

const Login = () => {
//   const validateForm = (values) => {
//     const errors = {};
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!values.password) {
//       errors.password = 'Required';
//     }

//     return errors;
//   };

  //const { setUser } = React.useContext(UserContext);
  const history = useHistory();

  const handleSubmit = (credentials, { setSubmitting, setStatus }) => {
      console.log(credentials);
      console.log(users);

      var filteredUser = users.filter(user => user.email==credentials.email && user.password==credentials.password);
      if(filteredUser.length>0){
          localStorage.setItem('user_loggedin',JSON.stringify(filteredUser));
        history.push('/home');
      }



//     User.login(credentials)
//       .then((res) => {
//         const user = {
//      //     token: res.data.token,
//           account: {
//        //     username: res.data.account.username,
//             email: res.email,
//             password: res.password
//           }
//         };
//         // Update user context with logged in user details
//    //     setUser(user);

//         // Update the localstorage to persist user
//         window.localStorage.setItem('user', JSON.stringify(user));

//         // Redirect them to the dashboard
//         // TODO: The dashboard page wont load up as of now as some api calls
//         // are failing. Look into it.
//         history.push('/home');
//       })
//       .catch((error) => {
//           console.log(error);
//         setStatus({ api_error: error.response.data.message });
//       })
//       .finally(() => {
//         setSubmitting(false);
//       });
  };

  return (

    <div className={styles.container} style={{ backgroundImage: 'url(https://www.techspot.com/articles-info/1697/images/2018-09-16-image.jpg)',
        height: '900px'}}>
    <div className={styles.form} style={{width:'30%'}}>
      {/* <Link to="/" className={styles.module_close}>
        <i className="material-icons">close</i>
      </Link> */}
      <div className="col s8 offset-s2" style={{marginLeft:'108%', backgroundColor:'cadetblue', opacity:'0.5'}}>
        <div
          className="col s12"
          style={{
            paddingLeft: '4.250px',
            marginBottom: '5rem',
            textAlign: 'center'
          }}
        >
          <h4  style={{fontWeight:'400',color:"white"}}>
            Login
          </h4>
          {/* <p className="grey-text text-darken-1">
            Don&apos;t have an account?
            <Link to="/register">Register</Link>
          </p> */}
        </div>

        <Formik
          initialValues={{ email: '', password: '' }}
        //   validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, status }) => (
            <Form>
              <div className="input-field col s12">
                <Field type="email" name="email" placeholder="Email" style={{marginTop:'1rem',marginBottom:'1rem'}}/>
                {/* <ErrorMessage
                  name="email"
                  component="span"
                  className="red-text"
                /> */}
              </div>
              <div className="input-field col s12">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  style={{marginTop:'1rem',marginBottom:'1rem'}}
                />
                {/* <ErrorMessage
                  name="password"
                  component="span"
                  className="red-text"
                /> */}
              </div>
              {!isSubmitting && status && (
                <span style={{ padding: '0 15px' }} className="red-text">
                  {status.api_error}
                </span>
              )}
              <div
                className="col s12"
                style={{ paddingLeft: '11.250px', textAlign: 'center' }}
              >
                <button
                  style={{
                    width: '150px',
                    borderRadius: '2rem',
                    letterSpacing: '1.5px',
                    marginTop: '1.5rem',
                    marginBottom: '1.5rem'
                    // backgroundColor: '#FE2753'
                  }}
                  type="submit"
                //   disabled={isSubmitting || !isEmpty(validateForm(values))}
                  className="btn btn-large btn-primary"
                >
                  Login
                </button>
              </div>
              <div  style={{color:'white',fontSize:"12px"}}>
              <div>Please login using email:user1@m.com and password: user1</div>
              <div>Please login using email:user2@m.com and password: user2</div>
              <div>Please login using email:user3@m.com and password: user3</div>
              <div>Please login using email:user4@m.com and password: user4</div>
              </div>   
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>



// //     <Formik
// //              initialValues={{ email: '', password: '' }}
// //              // validate={validateForm}
// //              onSubmit={handleSubmit}
// //            >
// //              {({ isSubmitting, values, status }) => (
// //     <form>
// //     <h3>Sign In</h3>

// //     <div className="form-group">
// //         <label>Email address</label>
// //         <input type="email" className="form-control" placeholder="Enter email" />
// //     </div>

// //     <div className="form-group">
// //         <label>Password</label>
// //         <input type="password" className="form-control" placeholder="Enter password" />
// //     </div>

// //     {/* <div className="form-group">
// //         <div className="custom-control custom-checkbox">
// //             <input type="checkbox" className="custom-control-input" id="customCheck1" />
// //             <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
// //         </div>
// //     </div> */}

// //     <button type="submit" className="btn btn-primary btn-block" 
// //     //onSubmit={handleSubmit}
// //     >Submit</button>
// //     {/* <p className="forgot-password text-right">
// //         Forgot <a href="#">password?</a>
// //     </p> */}
// // </form>
// // )}
// // </Formik>
//     <div>
//       <div>
//         <Link to="/" >
//           <i className="material-icons">close</i>
//         </Link>
//         <div className="col s8 offset-s2">
//           <div
//             className="col s12"
//             style={{
//               paddingLeft: '11.250px',
//               marginBottom: '5rem',
//               textAlign: 'center'
//             }}
//           >
//             <h4>
//               <b>Login</b>
//               below
//             </h4>
//             <p className="grey-text text-darken-1">
//               Don&apos;t have an account?
//               <Link to="/register">Register</Link>
//             </p>
//           </div>
//           <Formik
//             initialValues={{ email: '', password: '' }}
//             // validate={validateForm}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting, values, status }) => (
//               <Form>
//                 <div className="input-field col s12">
//                   <Field type="email" name="email" placeholder="Email" />
//                   <ErrorMessage
//                     name="email"
//                     component="span"
//                     className="red-text"
//                   />
//                 </div>
//                 <div className="input-field col s12">
//                   <Field
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                   />
//                   <ErrorMessage
//                     name="password"
//                     component="span"
//                     className="red-text"
//                   />
//                 </div>
//                 {!isSubmitting && status && (
//                   <span style={{ padding: '0 15px' }} className="red-text">
//                     {status.api_error}
//                   </span>
//                 )}
//                 <div
//                   className="col s12"
//                   style={{ paddingLeft: '11.250px', textAlign: 'center' }}
//                 >
//                   <button
//                     style={{
//                       width: '150px',
//                       borderRadius: '2rem',
//                       letterSpacing: '1.5px',
//                       marginTop: '1rem',
//                       backgroundColor: '#FE2753'
//                     }}
//                     type="submit"
//                     // disabled={isSubmitting || !isEmpty(validateForm(values))}
//                     className="btn btn-large waves-effect waves-light hoverable"
//                   >
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
  );
};

export default Login;

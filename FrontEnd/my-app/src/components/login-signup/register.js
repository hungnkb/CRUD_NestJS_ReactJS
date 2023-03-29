// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
// import * as Yup from 'yup';
// import "bootstrap/dist/css/bootstrap.css";
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

// const LoginSignup = (props) => {
//     const DisplayingErrorMessagesSchema = Yup.object().shape({
//         username: Yup.string()
//             .matches(
//                 /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,20})/,
//                 "Must Contain 6 Characters, No Special Case Character"
//             )
//             .required('Required!'),

//         password: Yup.string()
//             .matches(
//                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/,
//                 "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//             )
//             .required('Required!'),
//         email: Yup.string().email('Invalid email address').required('Required')
//     });

//     const navigate = useNavigate();

//     return (
//         <Formik
//             initialValues={{
//                 username: '',
//                 password: '',
//             }}
//             validationSchema={DisplayingErrorMessagesSchema}
//             onSubmit={async values => {
//                 try {
//                     let newUser = await axios({
//                         method: 'post',
//                         url: 'http://localhost:8001/api/auth/login',
//                         data: values
//                     })
//                     if (newUser) {
//                         console.log(newUser);
//                         Swal.fire({
//                             position: 'center',
//                             icon: 'success',
//                             title: 'Register Success',
//                             showConfirmButton: false,
//                             timer: 1500
//                         }).then(() => {
//                             navigate('/login')
//                         })
//                     }
//                 } catch (error) {
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: 'This username is exist!',
//                         footer: '',
//                     })
//                 }
//                 Formik.resetForm({
//                     username: '',
//                     password: '',
//                     email: '',
//                 })
//             }}
//         >
//             {({ errors, touched }) => (
//                 <div>
//                     <h1 className=" p-5" style={{ textAlign: 'center' }}>Register</h1>
//                     <div className="container col-3 p-3" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px', borderRadius: '10px' }}>

//                         <Form>
//                             <div className='form-label'>Username</div>
//                             <Field
//                                 className={`form-control ${touched.username && errors.username ? 'is-invalid' : ''}`}
//                                 name="username"
//                                 type="text"
//                                 placeholder="Enter username"
//                             />
//                             <ErrorMessage
//                                 component="div"
//                                 name='username'
//                                 className='invalid-feedback' />
//                             <div className='form-label mt-3'>Password</div>
//                             <Field
//                                 className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
//                                 name="password"
//                                 type="password"
//                                 placeholder="Enter password" />
//                             <ErrorMessage
//                                 component="div"
//                                 name='password'
//                                 className='invalid-feedback' />
//                             <button
//                                 className="btn btn-primary mb-3 mt-5"
//                                 type="submit"
//                                 style={{ width: '100%' }}>Submit</button>
//                             <div className="row">
//                                 <p>Have an account? <a href="" className="link-primary">Login</a></p>
//                             </div>
//                         </Form>
//                     </div>
//                 </div>
//             )}
//         </Formik >

//     )
// }

// export default LoginSignup;



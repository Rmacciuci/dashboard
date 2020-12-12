import React, { useState } from 'react';
import Swal from 'sweetalert2';
import LoginBackground from '../Assets/Images/background/login-register.jpg';
import { Lang } from '../helper';

export const Login = () => {
    // Required Hooks
    const [loading, setLoading]     = useState(false);
    const [redirect, setRedirect]   = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login_with_rrss, setLoginWithRRSS] = useState(false);
    const [recoveryForm, setRecoveryForm] = useState(false);


    const PasswordRecovery = () => {
        console.log("Password Recovery")
    }

    const SendLogin = (e) => {
        e.preventDefault();
        console.log("Login")
        Swal.fire({
            title: 'Login',
            text: 'Error soga',
            icon: 'question'
        })
    }

    return (
        <section id="wrapper">
            <div className="login-register" style={{backgroundImage: `url(${LoginBackground})`}}>
                <div className="login-box card">
                    <div className="card-body">
                        <>
                        {recoveryForm === false &&
                            <form className="form-horizontal form-material" id="loginform" >
                            <h3 className="text-center m-b-20">{Lang('Sign In')}</h3>
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <input className="form-control" type="text" required="" placeholder={Lang('Username')} /> </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <input className="form-control" type="password" required="" placeholder={Lang('Password')} /> </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <div className="d-flex no-block align-items-center">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">{Lang('Remember me')}</label>
                                        </div> 
                                        <div className="ml-auto">
                                            <button 
                                                id="to-recover"
                                                className="text-muted btn"
                                                onClick={() => setRecoveryForm("")}
                                            > 
                                                <i className="fas fa-lock m-r-5"></i> {Lang('Forgot pwd?')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <div className="col-xs-12 p-b-20">
                                    <button 
                                        className="btn btn-block btn-lg btn-info btn-rounded" 
                                        type="submit"
                                        onClick={SendLogin}
                                        >{Lang('Log In')}</button>
                                </div>
                            </div>
                            {login_with_rrss &&
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                        <div className="social">
                                            <button className="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fab fa-facebook-f"></i> </button>
                                            <button className="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fab fa-google-plus-g"></i> </button>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="form-group m-b-0">
                                <div className="col-sm-12 text-center">
                                    {Lang("Don't have an account?")} 
                                    <a href="pages-register.html" className="text-info m-l-5"><b>{Lang('Sign Up')}</b></a>
                                </div>
                            </div>
                            </form>
                        }
                        {recoveryForm !== false &&
                            <form className="form-horizontal">
                                <div className="form-group ">
                                    <div className="col-xs-12">
                                        <h3>{Lang('Recover Password')}</h3>
                                        <p className="text-muted">{Lang('Enter your Email and instructions will be sent to you!')} </p>
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <div className="col-xs-12">
                                        <input className="form-control" type="text" required="" placeholder={Lang('Email')} /> </div>
                                </div>
                                <div className="form-group text-center m-t-20">
                                    <div className="col-xs-12">
                                        <button 
                                            className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" 
                                            type="submit"
                                            onClick={PasswordRecovery}
                                            >{Lang('Reset')}</button>
                                    </div>
                                </div>
                            </form>
                        }
                        </>
                    </div>
                </div>
            </div>
        </section>
    )
}

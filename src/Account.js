import React from "react";
import { ProductConsumer } from './context';
import Title from './components/Title';
import Signup from './Signup';
import Login from './Login';
import { AccountInfo } from './components/AccountInfo';
import TestForm from './sandbox/TestForm';

const Account = () => {
    return (
        <div>
            <div>
                <ProductConsumer>
                    {
                        value => {
                            let loginState = value.loggedIn;
                            return (
                                <div>
                                    <Title name="Account" title={loginState ? 'Details' : 'Login'} />
                                    <div className="container">
                                        <div className="row login-forms">
                                            {loginState ? <AccountInfo /> : (
                                                <>
                                                    <div className="col-6">
                                                        <Login />
                                                    </div>
                                                    <div className="col-6">
                                                        <Signup />
                                                    </div>
                                                    <TestForm />
                                                </>)
                                            }
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    }
                </ProductConsumer>
            </div>
        </div>
    );
};

export default Account;
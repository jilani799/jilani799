import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./practice.css";
const Practice = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <img src="codelogo.png" class="img-fluid1" alt="codeximage" />
                    </div>
                    <div class="col-sm-4">
                        <img src="codexlogo.png" class="img-fluid2" alt="codeximage" />
                        <h1>Login here</h1>
                        <p>please enter your username or work email address</p>
                        <form>
                            <div class="col-auto">
                                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="subdomain" />
                                        <div class="input-group-text">.keka.com</div>
                                    </div>
                                <div className="text2">
                                    <TextField id="outlined-basic" label="Email id" variant="outlined" />
                                </div>
                                <div className="text3">
                                    <TextField id="outlined-basic" label="User Name" variant="outlined" />
                                </div>

                                <Button id="button" variant="contained">Login</Button>

                            </div>
                            <div class="fp"><a href="http://localhost:3000/Practic" >forgot password?</a></div>
                        </form>
                        <div>
                            <img class="keka" src="https://app.keka.com/images/logo_black.png" alt=" keka" />
                            <img class="keka" src="https://app.keka.com/images/keka_android.png" alt=" keka" />
                            <img class="keka" src="https://app.keka.com/images/keka_appstore.png" alt=" keka" />
                        </div>
                        <footer class="footer">@keka2022</footer>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Practice;

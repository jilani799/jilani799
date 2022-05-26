import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Practic.css";
const Practic = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <img src="codelogo.png" class="img-fluid1" alt="codeximage" />
                    </div>
                    <div class="col-sm-4">
                        <img src="codexlogo.png" class="img-fluid2" alt="codeximage" />

                        <p className="p">Forgot your Password?</p>
                        <form>
                            <div class="col-auto">
                                <div class="mb-3">
                                    <TextField className="tex2" id="outlined-basic" label="Email" variant="outlined" />
                                </div>
                                <Button variant="contained">Reset</Button>
                            </div>
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
export default Practic;
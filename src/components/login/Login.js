import React from 'react'
const login = () => {
    return (
        <>
         <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <img src="codelogo.png" class="img-fluid1" alt="codeximage"/>
            </div>
            <div class="col-sm-4">
                <img src="codex.jpg" class="img-fluid2" alt="codeximage"/>
            
                <p>forgot password</p>
                <form>
                    <div class="col-auto">
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Email</label>
                            <input type="email" class="form-control" id="formGroupExampleInput"
                                placeholder="Enter emailid"/>
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Password</label>
                            <input type="password" class="form-control" id="formGroupExampleInput2"
                                placeholder="Enter password"/>
                        </div>
                        <button type="button" class="btn-primary">Login</button>
                    </div>
                    <div class="fp">forgot password?</div>
                </form>
                <footer class="footer">@keka2022</footer>
            </div>
        </div>
    </div>
        </>
    );
}
export default login
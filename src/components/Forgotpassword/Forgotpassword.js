import React from 'react'
const login = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <img src="codelogo.png" class="img-fluid1" alt="codeximage" />
                    </div>
                    <div class="col-sm-4">
                        <img src="codex.jpg" class="img-fluid2" alt="codeximage" />
                        <p>forgot your password?</p>
                        <form>
                            <div class="col-auto">
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="formGroupExampleInput"
                                        placeholder="Enter emailid" />
                                </div>
                                <button type="button" class="btn-primary">Reset</button>
                            </div>
                        </form>
                        <footer class="footer">@keka2022</footer>
                    </div>
                </div>
            </div>
        </>
    );
}
export default login
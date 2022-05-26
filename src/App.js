// import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <img src="codelogo.png" class="img-fluid1" alt="codeximage"/>
            </div>
            <div class="col-sm-4">
                <img src="codex.jpg" class="img-fluid2" alt="codeximage"/>
                <h1>Login here</h1>
                <p>please enter your username or work email address</p>
                <p> nhi hora kate change</p>
                <form>
                    <div class="col-auto">
                        <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="subdomain"/>
                            <div class="input-group-text">@keka</div>
                        </div>
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
                    <div class="fp"><a href="http://localhost:3000/forgotpassword" >forgot password?</a></div>
                </form>
                <div>
                    <img class="keka" src="https://app.keka.com/images/logo_black.png" alt=" keka"/>
                    <img class="keka" src="https://app.keka.com/images/keka_android.png" alt=" keka"/>
                    <img class="keka" src="https://app.keka.com/images/keka_appstore.png" alt=" keka"/>
                </div>
                <footer class="footer">@keka2022</footer>
            </div>
        </div>
    </div>
  );
}

export default App;

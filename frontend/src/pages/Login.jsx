import './styles/Login.css';

const Login = () => {
    return (
        <div className="login">
        <div className="login__container">
            <h1>Log In</h1>
            <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Log In</button>
            </form>
        </div>
        </div>
    );
};

export default Login;
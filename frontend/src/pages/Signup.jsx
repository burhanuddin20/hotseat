import './styles/Login.css';

const Signup = () => {
    return (
        <div className="login">
        <div className="login__container">
            <h1>Sign Up</h1>
            <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default Signup;
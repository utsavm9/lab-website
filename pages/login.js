class Login extends React.Component {
    render() {
        return (
            <>
                <h1>Login Page</h1>

                <form action="login" method="POST">
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="pasword">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        ></input>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </>
        );
    }
}

export default Login;

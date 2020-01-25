const { deepAccess } = require("../util/utils");

class Login extends React.Component {
    static async getInitialProps(context) {
        return { errorMessage: context.query.failReason };
    }

    render() {
        return (
            <>
                <h1>Login Page </h1>

                <form action="/login" method="POST">
                    <p>{this.props.errorMessage}</p>
                    <div>
                        <label htmlFor="worker_id">Mechanical Turk Worker ID:</label>
                        <input type="text" id="worker_id" name="worker_id" required></input>
                    </div>
                    <div>
                        <label htmlFor="pasword">Password:</label>
                        <input type="password" id="password" name="password" required></input>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </>
        );
    }
}

export default Login;

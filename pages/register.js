class Register extends React.Component {
    static async getInitialProps(context) {
        return { errorMessage: context.query.failReason };
    }

    render() {
        return (
            <>
                <h1>Register Page</h1>
                <p>{this.props.errorMessage}</p>

                <form action="/register" method="POST">
                    <div>
                        <label htmlFor="firstname">Firstname:</label>
                        <input type="text" id="firstname" name="firstname" required></input>
                    </div>
                    <div>
                        <label htmlFor="lastname">Lastname:</label>
                        <input type="text" id="lastname" name="lastname" required></input>
                    </div>
                    <div>
                        <label htmlFor="worker_id">Mechanical Turk Worker ID:</label>
                        <input type="text" id="worker_id" name="worker_id" required></input>
                    </div>
                    <div>
                        <label htmlFor="pasword">Password:</label>
                        <input type="password" id="password" name="password" required></input>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </>
        );
    }
}

export default Register;

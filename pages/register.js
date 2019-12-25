class Register extends React.Component {
    render() {
        return (
            <>
                <h1>Register Page</h1>

                <form action="api/register" method="POST">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                        ></input>
                    </div>
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
                    <button type="submit">Register</button>
                </form>
            </>
        );
    }
}

export default Register;

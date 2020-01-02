import Link from "next/link";
import deepAccess from "../util/utils";

class Index extends React.Component {
    static async getInitialProps(context) {
        // Hack.
        // If this code is running on client-side (which it does when back-button is pressed), just reload the page.
        if (process.browser) {
            history.go();
        }

        return { firstname: deepAccess(context, ["req", "user", "name"]) };
    }

    render() {
        const loggedInMessage = this.props.firstname
            ? this.props.firstname + " logged in!"
            : "Login now!";

        return (
            <>
                <h1>Index Page</h1>
                {}
                <p>{loggedInMessage}</p>
                <div>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </div>
                <div>
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </div>
                <br />
                <form action="/logout" method="POST">
                    <button type="submit">Log Out</button>
                </form>
            </>
        );
    }
}

export default Index;

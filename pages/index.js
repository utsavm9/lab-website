import Link from "next/link";

class Index extends React.Component {
    render() {
        return (
            <>
                <h1>Index Page</h1>
                <div>
                    <Link href="login"><a>Login</a></Link>
                </div>
                <div>
                    <Link href="register"><a>Register</a></Link>
                </div>
            </>
        );
    }
}

export default Index;

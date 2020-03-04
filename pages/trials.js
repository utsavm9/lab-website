import fetch from "isomorphic-unfetch";
import { deepAccess } from "../util/utils";

class Trials extends React.Component {
    static async getInitialProps(context) {
        var request = deepAccess(context, ["req", "user", "worker_id"]);
        if (request != null) {
            const res = await fetch("http://localhost:3000/api/trials?worker_id=" + request);
            const data = await res.json();

            const result = data.name.filter(name => name.trial_id == -1);

            return {
                shows: result,
                logged: true
            };
        } else {
            return {
                shows: 42,
                logged: false
            };
        }
    }

    table(tableRow) {
        const { worker_id, experiment_id, trial_id } = tableRow; //destructuring
        return (
            <tr>
                <td>{worker_id}</td>
                <td>{experiment_id}</td>
                <td>{trial_id}</td>
            </tr>
        );
    }
    render() {
        const loggedIn = this.props.logged;

        return (
            <>
                <h1>Trials Page</h1>
                <p>{this.props.errorMessage}</p>

                <form action="/trials" method="GET">
                    <table>
                        <thead>
                            <tr>
                                <th>Worker ID</th>
                                <th>Experiment ID</th>
                                <th>Trial ID</th>
                            </tr>
                        </thead>
                        {loggedIn ? (
                            <tbody>{this.props.shows.map(element => this.table(element))}</tbody>
                        ) : (
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )}
                    </table>
                </form>
            </>
        );
    }
}

export default Trials;

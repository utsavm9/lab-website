import Link from "next/link";
import { deepAccess } from "../util/utils";

class Question extends React.Component {
    static async getInitialPropers(context) {
        return { errorMessage: context.query.failReason };
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <h4>This will be the questions page</h4>
            </div>
        )
    }
}

export default Question;
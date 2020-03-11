import TextQuestion from "./components/textqs";

class Questions extends React.Component {
    render() {
        return (
            <>
                <div>Questions Page</div>
                <TextQuestion question_text="this is a question text" hint_text="this is a hint" />
            </>
        );
    }
}

export default Questions;

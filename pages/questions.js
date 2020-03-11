import TextQuestion from "./components/textqs";
import McqQuestion from "./components/mcqqs";

function ret(event) {
    event.preventDefault();
    alert("hfuwfwj");
}

class Questions extends React.Component {
    render() {
        return (
            <>
                <div>Questions Page</div>
                <TextQuestion
                    question_text="this is a question text"
                    hint_text="this is a hint"
                    submit_function={ret}
                />
                <McqQuestion
                    question_text="this is a question text"
                    submit_function={ret}
                    choice1="Answer1"
                    choice2="Answer2"
                    choice3="Answer3"
                    choice4="Answer4"
                />
            </>
        );
    }
}

export default Questions;

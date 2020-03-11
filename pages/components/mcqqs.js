class TextQuestions extends React.Component {
    render() {
        return (
            <>
                <hr />
                <form action="/mcqqs">
                    <label for="question">{this.props.question_text} </label>
                    <br />
                    <br />
                    <input type="radio" /> {this.props.choice1} <br />
                    <input type="radio" /> {this.props.choice2} <br />
                    <input type="radio" /> {this.props.choice3} <br />
                    <input type="radio" /> {this.props.choice4} <br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default TextQuestions;

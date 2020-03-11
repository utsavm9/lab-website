class TextQuestions extends React.Component {
    render() {
        return (
            <>
                <hr />
                <form action="/textqs">
                    <label for="question">{this.props.question_text} </label>
                    <br />
                    <input type="text" placeholder={this.props.hint_text} />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default TextQuestions;

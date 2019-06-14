import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        // this.onIdChange = this.onIdChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // id: props.book ? props.book.id : '',
            title: props.book ? props.book.title : '',
            author: props.book ? props.book.author : '',
            description: props.book ? props.book.description : '',
            time: props.book ? props.book.time : '',
            error: ''
        };
    }

    // onIdChange(e) {
    //     const id = e.target.value;
    //     this.setState(() => ({ id: id }));
    // }

    onTitleChange(e) {
        const title = e.target.value;
        this.setState(() => ({ title: title }));
    }

    onAuthorChange(e) {
        const author = e.target.value;
        this.setState(() => ({ author: author }));
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description: description }));
    }

    onTimeChange(e) {
        const time = e.target.value;
        this.setState(() => ({ time: time }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.title || !this.state.author || !this.state.time) {
            this.setState(() => ({ error: 'Invalid Input'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitBook(
                {
                    // id: this.state.id,
                    title: this.state.title,
                    author: this.state.author,
                    description: this.state.description,
                    time: this.state.time
                }
            );
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='add-book-form'>

                    <input type="text" placeholder="title" autoFocus
                        value={this.state.title}
                        onChange={this.onTitleChange} />
                    <br />

                    <input type="text" placeholder="author"
                        value={this.state.author}
                        onChange={this.onAuthorChange} />
                    <br />

                    <textarea placeholder="description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange} />
                    <br />

                    <input type="text" placeholder="time (YYYY-MM-DD)"
                        value={this.state.time}
                        onChange={this.onTimeChange} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
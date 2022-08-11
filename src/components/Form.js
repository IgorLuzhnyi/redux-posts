import { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../redux/actions";
import { authors } from "../constants/constants";

class Form extends Component {
  state = {
    post: {
      author: {
        name: "Anakin Skywalker",
        photo:
          "https://styles.redditmedia.com/t5_3it30/styles/communityIcon_ww7zsfj5mda11.jpg?format=pjpg&s=820fd6330b0e097240b36ad2bc74d328b34a69db",
        nickname: "@dart_vader",
      },
      content: "",
      image: "",
      date: "Feb 28",
      reactions: {
        comments: 500,
        shares: 600,
        likes: 700,
      },
    },
  };

  onChangeAuthor = (e) => {
    this.setState({
      post: {
        ...this.state.post,
        author: authors[e.target.value],
      },
    });
  };

  onChangeMessage = (e) =>
    this.setState({
      post: {
        ...this.state.post,
        content: e.target.value,
      },
    });

  onChangeImgUrl = (e) =>
    this.setState({
      post: {
        ...this.state.post,
        image: e.target.value,
      },
    });

  onSubmitInput = () => {
    if (this.state.post.content) {
      this.props.addPost(this.state.post);
      this.setState({
        post: {
          author: { ...this.state.post }.author,
          content: "",
          image: "",
          date: "Feb 27",
          reactions: {
            comments: 805,
            shares: 1318,
            likes: 2608,
          },
        },
      });
    }
  };

  render() {
    return (
      <div className="form-container">
        <div className="author">
          <label htmlFor="authors">Author: </label>
          <select
            name="authors"
            id="authors"
            onChange={(e) => this.onChangeAuthor(e)}
          >
            <option value="0">Anakin</option>
            <option value="1">Ray</option>
            <option value="2">Kylo</option>
            <option value="3">Luke</option>
          </select>
        </div>
        <div className="form-message-container">
          <textarea
            rows="2"
            id="form-message"
            value={this.state.post.content}
            onChange={(e) => this.onChangeMessage(e)}
            placeholder="Write your post here"
          />
        </div>
        <div className="form-img-container">
          <input
            type="text"
            placeholder="Img URL"
            id="form-img-path"
            value={this.state.post.image}
            onChange={(e) => this.onChangeImgUrl(e)}
          />
        </div>
        <button onClick={this.onSubmitInput} className="add_post">
          Add post
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(Form);

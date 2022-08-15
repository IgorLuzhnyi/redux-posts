import { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineIosShare } from "react-icons/md";
import { updUI } from "../redux/actions";

class Posts extends Component {
  render() {
    const { posts } = this.props.posts;

    const postList = posts.map((post) => {
      const { author, content, image, date, reactions, id } = post;
      const { photo, name, nickname } = author;
      const { comments, shares, likes } = reactions;

      const handleCLick = (e, reaction) => {
        if (reaction.clicked) {
          reaction.clicked = false;
          e.target.closest("p").style.color = "#fff";
          reaction.amount--;
        } else {
          reaction.clicked = true;
          e.target.closest("p").style.color = reaction.activeClr;
          reaction.amount++;
        }

        this.props.updUI();
      };

      const handleError = (e) => (e.target.style.display = "none");

      return (
        <div className="post" key={id}>
          <div className="sw-post">
            <img className="author-avatar" src={photo} alt="author-avatar" />
            <div className="sw-post__container">
              <div className="sw-post__container__author-info">
                <div id="author_name">{name}</div>
                <div id="author_nickname">{nickname}</div>
                <div>·</div>
                <div id="date">{date}</div>
              </div>
              <div className="sw-post__content">{content}</div>
              <img
                className="content-image"
                src={image}
                onError={handleError}
              />
              <div className="sw-post--actions">
                <p className="sw-action-icon">
                  <span
                    className="sw-icon"
                    onClick={(e) => handleCLick(e, comments)}
                  >
                    <AiOutlineComment />
                  </span>
                  {comments.amount}
                </p>
                <p className="sw-action-icon">
                  <span
                    className="sw-icon"
                    onClick={(e) => handleCLick(e, shares)}
                  >
                    <AiOutlineShareAlt />
                  </span>
                  {shares.amount}
                </p>
                <p className="sw-action-icon">
                  <span
                    className="sw-icon"
                    onClick={(e) => handleCLick(e, likes)}
                  >
                    <AiOutlineHeart />
                  </span>
                  {likes.amount}
                </p>
                <p className="sw-action-icon">
                  <span
                    className="sw-icon"
                    onClick={() => {
                      alert("'Send' option is not available yet :)");
                    }}
                  >
                    <MdOutlineIosShare />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return <div className="posts_container">{postList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updUI: () => dispatch(updUI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

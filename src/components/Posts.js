import { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineIosShare } from "react-icons/md";

class Posts extends Component {
  render() {
    const { posts } = this.props.posts;

    const postList = posts.map((post, i) => {
      const { author, content, image, date, reactions } = post;
      const { photo, name, nickname } = author;
      const { comments, shares, likes } = reactions;

      return (
        <div className="post" key={i}>
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
              <img className="content-image" src={image} />
              <div className="sw-post--actions">
                <p className="sw-action-icon">
                  <span className="sw-icon" id="sw-icon__comment">
                    <AiOutlineComment />
                  </span>
                  {comments}
                </p>
                <p className="sw-action-icon">
                  <span className="sw-icon" id="sw-icon__share">
                    <AiOutlineShareAlt />
                  </span>
                  {shares}
                </p>
                <p className="sw-action-icon">
                  <span className="sw-icon" id="sw-icon__like">
                    <AiOutlineHeart />
                  </span>
                  {likes}
                </p>
                <p className="sw-action-icon">
                  <span className="sw-icon" id="sw-icon__send">
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
    posts: state, // this is where we pass the state. presumably
  };
};

export default connect(mapStateToProps, null)(Posts);

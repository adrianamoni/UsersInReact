import React, { Component } from "react";
import { getUser } from "../services/userService";
import { getPosts } from "../services/postService";
import CardInfo from "./cardInfo";
import CardPost from "./cardPost";

class UserDetail extends Component {
  state = {
    user: [],
    posts: []
  };
  postsCard = {
    height: "500px",
    overflow: "scroll"
  };
  cardStyle = {
    width: "100%",
    margin: "auto"
  };
  colStyle = {
    backgroundColor: "#efefef"
  };
  async componentDidMount() {
    await this.populateUser();
    await this.populatePosts();
  }
  async populateUser() {
    try {
      const userId = this.props.match.params.id;

      const { data: user } = await getUser(userId);
      this.setState({ user });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }
  async populatePosts() {
    try {
      const posterId = this.props.match.params.id;
      const { data: allPosts } = await getPosts();
      const myPosts = allPosts.filter(p => p.userId == posterId);
      this.setState({ posts: myPosts });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  render() {
    const { user, posts } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CardInfo data={user} />
          </div>
          <div className="col-md-8">
            <h3>Posts by {user.name}</h3>
            <div className="card-column" style={this.postsCard}>
              {posts.map(post => (
                <CardPost key={post.id} data={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetail;

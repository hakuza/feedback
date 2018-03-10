import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Feedback } from "./feedback.jsx";
import { Featured } from "./featured_review.jsx";
import "./styles.css";

export class CourseFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      // id: 0,
    };
  }

  componentWillMount() {
    let id = window.location.search || "?id=1";
    console.log(id);
    axios
      .get("/feedback" + id)
      .then(res => {
        console.log(res.data[0].reviews);
        this.setState({
          reviews: res.data[0].reviews,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let page = null;
    if (this.state.reviews === null) {
      page = <h1>Loading...</h1>;
    } else {
      page = (
        <div>
          <Featured reviews={this.state.reviews} />
          <Feedback reviews={this.state.reviews} />
        </div>
      );
    }
    return <div>{page}</div>;
  }
}

ReactDOM.render(<CourseFeedback />, document.getElementById("feedback"));

import "./index.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
    };
  }
  render() {
    return (
      <div className="app">
        <div className="col">
          <div className="card">
            <div
              className="aid"
              unselectable="on"
              onselectstart="return false;"
              onmousedown="return false;"
            >
              <span>#12</span>
            </div>
            <div className="date">{this.state.date}</div>
            <div id="adviceText">
              It's not about who likes you, it's about who you like.
            </div>
            <div className="socialShare">
              <div class="share">
                <a
                  href="//twitter.com/intent/tweet?text=${}"
                  className="twitter"
                  target="_blank"
                >
                  <i className="ri-twitter-line"></i>&nbsp;Make a TWEET
                </a>
              </div>
              <div class="share">
                <a
                  href="//pinterest.com/pin/create/button/?url=%2F%2Fadviceslip.com%2F&amp;media=%2F%2Fapi.adviceslip.com%2Fadvice%2Fundefined%2Fimg%2Fm&amp;description=${}"
                  className="pinterest"
                  target="_blank"
                >
                  <i className="ri-pinterest-line"></i>&nbsp;PIN THIS
                </a>
              </div>
              <div class="share">
                <a
                  href="//pinterest.com/pin/create/button/?url=%2F%2Fadviceslip.com%2F&amp;media=%2F%2Fapi.adviceslip.com%2Fadvice%2Fundefined%2Fimg%2Fm&amp;description=${}"
                  className="pinterest"
                  target="_blank"
                >
                  <i class="ri-facebook-fill"></i>&nbsp;FaceBook Share
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="searchBar">
          <i class="ri-search-eye-line"></i>
            <input type="text" name="searchIn" id="searchIn" placeholder="Search for Advice or Id Eg: 23,89"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

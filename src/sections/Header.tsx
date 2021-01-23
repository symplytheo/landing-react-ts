import { Component } from "react"
import { HeaderProps } from "types"

export class Header extends Component<{ data: HeaderProps }> {
  render() {
    const { data } = this.props

    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {data.title ? data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {data.paragraph ? data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header

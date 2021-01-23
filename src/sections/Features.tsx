import { Component } from "react"
import { FeatureProps } from "types"

export class Features extends Component<{ data: FeatureProps[] }> {
  render() {
    const { data } = this.props

    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Features</h2>
          </div>
          <div className="row">
            {data.length
              ?data.map((item,index) => (
                  <div  key={`${item.title}-${index}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={item.icon}></i>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default Features

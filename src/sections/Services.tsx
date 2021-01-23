import { Component } from "react"
import { ServiceProps } from "types"

export class Services extends Component<{ data: ServiceProps[] }> {
  render() {
    const { data } = this.props

    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            {data.length
              ? data.map((item, index) => (
                  <div  key={`${item.name}-${index}`} className="col-md-4">
                    {" "}
                    <i className={item.icon}></i>
                    <div className="service-desc">
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services

import { Component } from "react";
import { TestimonialProps } from "types";

export class Testimonials extends Component<{ data: TestimonialProps[] }> {
  render() {
    const { data } = this.props
    
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>What our clients say</h2>
          </div>
          <div className="row">
            {data.length
              ? data.map((item, index) => (
                  <div key={`${item.name}-${index}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={item.img} alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{item.text}"</p>
                        <div className="testimonial-meta"> - {item.name} </div>
                      </div>
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

export default Testimonials

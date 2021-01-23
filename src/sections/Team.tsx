import { Component } from "react"
import { TeamProps } from "types"

export class Team extends Component<{ data: TeamProps[] }> {
  render() {
    const { data } = this.props

    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="row">
            {data.length
              ? data.map((item, index) => (
                  <div  key={`${item.name}-${index}`} className="col-md-3 col-sm-6 team">
                    <div className="thumbnail">
                      {" "}
                      <img src={item.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{item.name}</h4>
                        <p>{item.job}</p>
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

export default Team

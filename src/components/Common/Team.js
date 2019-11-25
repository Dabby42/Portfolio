import React, {Component} from 'react';
import TeamMember from "./TeamMember";

import image1 from "../assets/img/team/1.jpg";
import image2 from "../assets/img/team/2.jpg";
import image3 from "../assets/img/team/3.jpg";

const team = [
  {title: "Kay Garland", subtitle: "Lead Designer", image: image1, icon1: "fa-twitter", icon2: "fa-facebook-f", icon3: "fa-linkedin-in"},
  {title: "Larry Parker", subtitle: "Lead Marketer", image: image2, icon1: "fa-twitter", icon2: "fa-facebook-f", icon3: "fa-linkedin-in"},
  {title: "Diana Pertersen", subtitle: "Lead Developer", image: image3, icon1: "fa-twitter", icon2: "fa-facebook-f", icon3: "fa-linkedin-in"}
]

class Team extends Component{

  render(){
    return(
      <div className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            {team.map((members, index) =>{
              return <TeamMember {...members} key={index}/>
            })};
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Team;

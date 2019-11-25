import React, {Component} from 'react';

class TeamMember extends Component{

  render(){
    return (
      <div className="col-sm-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src={this.props.image} alt=""/>
          <h4>{this.props.title}</h4>
          <p className="text-muted">{this.props.subtitle}</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#">
                <i className={`fab ${this.props.icon1}`}></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className={`fab ${this.props.icon2}`}></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className={`fab ${this.props.icon3}`}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};

export default TeamMember;

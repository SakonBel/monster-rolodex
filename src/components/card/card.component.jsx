import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { user: monster } = this.props;
    const { name, id, email } = monster;

    return (
      <div>
        <div className="card-container" key={id}>
          <img
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt={`monster ${name}`}
          />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;

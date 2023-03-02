import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="card-list">
        {users.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    );
  }
}

export default CardList;

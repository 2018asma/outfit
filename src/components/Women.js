import React from "react";
import ItemCard from "./ItemCard";
import womenImages from "../womenImages";
class Women extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container-fluid mt-5 mb-5">
          <div className="row justify-content-center">
            {womenImages.map((outfit,index) => (
              <ItemCard image={outfit} itemImg={this.props.itemImg} key={index}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Women;

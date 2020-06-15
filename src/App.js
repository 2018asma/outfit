import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Women from "./components/Women";
import Men from "./components/Men";
import Kids from "./components/Kids";
import Footer from "./components/Footer";
import ItemDetails from "./components/ItemDetails";

class App extends React.Component {
  state = {
    img: null,
  };
  itemImage = (image) => {
    this.setState({
      img: image,
    });
  };
  render() {
    console.log(this.state.img);
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Carousel} />
        <Route path="/women">
          <Women itemImg={this.itemImage} />
        </Route>
        <Route path="/men">
          <Men itemImg={this.itemImage} />
        </Route>
        <Route path="/kids">
          <Kids itemImg={this.itemImage} />
        </Route>
        <Route path="/item-detail">
          <ItemDetails itemImg={this.state.img} />
        </Route>
        <Route path="/(women|men|kids)" component={Footer} />
      </div>
    );
  }
}

export default App;

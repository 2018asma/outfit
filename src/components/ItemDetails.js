import React from "react";
import brandsLogo from "../brandsLogo";
class ItemDetails extends React.Component {
  state = {};
  render() {
    console.log(this.props.itemImg);
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center item-detail-row">
          <div className="">
            <img
              src={this.props.itemImg}
              alt=""
              className="item-detail-img border border-black"
            />
          </div>
          <div className="col-6 text-right">
            <p>التنسيق موجود في: </p>
            <a target="_blank" rel="noopener noreferrer" href="https://ar.shein.com/Solid-Bardot-Top-Floral-Button-Front-Skirt-p-1220588-cat-1780.html?scici=navbar_2~~tab01navbar03~~3~~real_2035~~SPcCccWomenCategory_default~~0~~0">
              <img src={brandsLogo} alt="" className="brand-logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetails;

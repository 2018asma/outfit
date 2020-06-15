import React from "react";
import { Link } from 'react-router-dom'
class ItemCard extends React.Component {
  state = {};
  itemImg=()=>{
    this.props.itemImg(this.props.image)
  }
  render() {
    const img = this.props.image;
    return (
      <div className='m-2'>
      <div className="card">
        <img src={img} class="card-img-top" alt="item" />
        <div className="card-body text-center">
          <p className="card-text">
           هذا المنتج متوفر في نمشي
          </p>
          <Link to='/item-detail' className="btn btn-dark w-100" onClick={this.itemImg}>
            لتفاصيل أكثر
          </Link>
        </div>
      </div>
      </div>
    );
  }
}

export default ItemCard;

/*

<div className=" col-3 mt-5">
        <img src={this.props.image} alt="img" className='item-card-img'/>
        <div >
        <p className='text-right'>التنسيق من: </p>
        </div>
      </div>



*/

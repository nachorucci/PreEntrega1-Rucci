import './CartWidget.css'


const CartWidget = () => {
  return (
    <div className='cart'>
        <img className='imgCart' src={require("../../assets/img/cart.png")} alt="cart" />
        <strong>2</strong>
    </div>
  )
}

export default CartWidget

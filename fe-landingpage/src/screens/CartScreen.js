import React, { useEffect, useState } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card, Container, ListGroupItem } from 'react-bootstrap'
import Message from '../components/Message'
import Header from '../components/Header.js'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import '../scss/cartScreen.scss'
const CartScreen = () => {

    const { id } = useParams();

    const productId = (id);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const location = useLocation();

    //Quantity

    const qty = location.search ?
        Number(location.search.split('=')[1])
        : 1

    console.log('qty', qty)

    const [newQty, setNewQty] = useState(qty);

    console.log('new qty: ', newQty)

    console.log('type new qty', typeof (newQty))

    //Cart
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    console.log('cartItem', cartItems)

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    //RemoveCartHandler
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }


    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const checkoutHandler = (e) => {
        e.preventDefault();
        if (!userInfo) {
            navigate('/login')
        } else {
            navigate('/shipping')
        }
    }

    return (
        <>
            <Header />
            <Container style={{ marginTop: '30px' }}>
                <Row>
                    <Col md={8}>
                        <h2 style={{ fontWeight: 'bolder' }}>Shopping Cart</h2>
                        {cartItems.length === 0
                            ? <Message>Your is empty <Link to="/">Go back</Link></Message>
                            : <ListGroup variant='flush'>
                                {cartItems.map(item => (
                                    <ListGroup.Item key={item.product}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col md={3} className='item_content'>
                                                <Link className='item_name' to={`/product/${item.product}`}>{item.name}</Link>
                                            </Col>
                                            <Col md={2} className='item_content'>{item.price},000 vnđ</Col>
                                            <Col md={2} className='item_content'>
                                                <Form.Control
                                                    as='select'
                                                    value={item.qty}
                                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                >
                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}

                                                </Form.Control>
                                                {/* <div className='flex-box d-flex quantity '>
                                                    {newQty <= 1 ? (
                                                        <button className='button-upDown'
                                                            onClick={() => decreaseQuantity(item.product)}
                                                            value={item.qty}
                                                            // onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                            disabled
                                                        >-</button>
                                                    ) : (
                                                        <button className='button-upDown'
                                                            onClick={() => decreaseQuantity(item.product)}
                                                            value={item.qty}
                                                        // onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                        >-</button>
                                                    )}
                                                    <p className='text-quantity'
                                                        value={item.qty}
                                                    >
                                                        {newQty}
                                                    </p>
                                                    <button className='button-upDown'
                                                        onClick={() => increaseQuantity(item.product)}
                                                        value={item.qty}
                                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                    >+</button>


                                                    
                                                </div> */}
                                            </Col>
                                            <Col md={2} className='item_content'>
                                                <Button type="buton" variant='light' style={{ backgroundColor: 'red' }}
                                                    onClick={() => removeFromCartHandler(item.product)}>
                                                    Xóa
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        }
                    </Col>
                    <Col md={4}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                                    {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}vnđ
                                </ListGroup.Item>
                                <ListGroupItem>
                                    <Button
                                        type="button"
                                        className='btn-block'
                                        disabled={cartItems.length === 0}
                                        onClick={checkoutHandler}

                                    >
                                        Thanh Toán
                                    </Button>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </>

    )
}

export default CartScreen
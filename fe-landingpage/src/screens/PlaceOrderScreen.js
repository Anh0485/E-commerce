import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import HeaderTop from '../components/Header/HeaderTop'
import HeaderBot from '../components/Header/HeaderBot'
import { Link } from 'react-router-dom';
import '../scss/cartScreen.scss'
import { saveShippingAddress } from '../redux/actions/cartActions';
import Message from '../components/Message';
import CheckoutStep from '../components/CheckoutStep';
import { Row, Col, ListGroup, Image, Container, Card, Button } from 'react-bootstrap'
import { createOrder } from '../redux/actions/orderAction';

const PlaceOrderScreen = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    console.log(cart)

    //calculate price
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

    cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 100
    cart.taxPrice = Number((0.02 * cart.itemsPrice).toFixed(0))

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })

    const navigate = useNavigate()
    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate

    // console.log('order data', order.data)

    useEffect(() => {
        if (success) {
            navigate(`/order/${order.data._id}`)
        }
    }, [success, navigate])

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: parseFloat(cart.totalPrice)
        }))
    }

    return (
        <>
            <HeaderTop />
            <HeaderBot />

            <CheckoutStep step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address:</strong>
                                {cart.shippingAddress.address},
                                {cart.shippingAddress.city}{''},
                                {cart.shippingAddress.postalCode},{''}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method:</strong>
                                {cart.paymentMethod},
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0
                                ? <Message>Your cart is empty</Message>
                                : (
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src={item.image}
                                                            alt={item.name}
                                                            fluid
                                                            rounded
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} to={`/product/${item.product}`}>{item.name}</Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} x {item.price},000vnđ = {item.qty * item.price},000vnđ
                                                    </Col>
                                                </Row>

                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>{cart.itemsPrice.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}vnd</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>{cart.shippingPrice.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>{cart.taxPrice.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}vnd</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>{cart.totalPrice}vnd</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type="button" className="btn-block" disabled={cart.cartItems === 0}
                                    onClick={placeOrderHandler}>
                                    Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen

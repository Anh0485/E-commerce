import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Col, Row, Card } from 'react-bootstrap'
// import products from '../products.js'
import { Link } from 'react-router-dom'
import '../scss/FeaturedProducts.scss'
import { listProduct } from '../redux/actions/productActions.js'
const FeaturedProducts = () => {

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch])



    return (
        <Container style={{ marginTop: '5rem' }}>
            <h3 class="sec-title">SẢN PHẨM NỔI BẬT CỦA LEVENTS®</h3>
            <Row md={4} xs="auto">
                {products.slice(0, 8).map((product) => (
                    <Col>
                        <Card style={{ border: 'none' }}>
                            <Link to={`/product/${product._id}`}>
                                <Card.Img src={product.image} />
                            </Link>
                            <Card.Body>
                                <Card.Title style={{ fontSize: '16px', color: '#7f7f7f' }} >{product.MainName}</Card.Title>
                                <Card.Text>{product.price},000 vnđ</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default FeaturedProducts
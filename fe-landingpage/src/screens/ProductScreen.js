import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../scss/detailProduct.css'
import Header from '../components/Header';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Accordion from 'react-bootstrap/Accordion';
import { listProductDetails } from '../redux/actions/productActions';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Col, Image, Row } from 'react-bootstrap'
import InforTshirt from '../components/InforTshirt';

const ProductScreen = ({ match }) => {



    const { id } = useParams();

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productId = (id);

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    //useEffect loaidng 
    useEffect(() => {
        dispatch(listProductDetails(productId));
    }, [dispatch, productId])

    const AddToCartHandle = () => {
        alert('AddToCartHandle')
    }


    //Quantity
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    //key and value of material, size
    if (!product || !product.description) {
        return <p>Product description is not available.</p>;
    }
    const materialAndSizeValues = Object.entries(product.description).map(([key, value]) => {
        return (
            <div key={key}>
                <p>{value}</p>
            </div>
        );
    });

    //key and value of object sizeChart
    if (!product || !product.sizeChart) {
        return <p>Product sizeChart is not available.</p>;
    }
    const sizeChart = Object.entries(product.sizeChart).map(([key, value]) => {
        return (
            <div key={key}>
                <p>{value}</p>
            </div>
        );
    });
    return (

        <>
            {/* <Toast /> */}
            < Header />
            <div className="container single-product">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                ) : (

                    <>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-image" style={{ width: "100%" }}>
                                    <Image src={product.MainImage} fluid />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-dtl">
                                    <div className="product-info">
                                        <div className="product-name">{product.name}</div>
                                    </div>
                                    <p
                                        style={{
                                            textAlign: "justify",
                                            textJustify: "inter-word",
                                        }}
                                    >
                                        {/* {product.description.material}
                                        {product.description.size} */}
                                    </p>

                                    <div className="product-count col-lg-7 ">
                                        <div className="flex-box d-flex justify-content-between align-items-center dt__item">
                                            <span className='price'>{product.price},000 vnđ</span>
                                        </div>

                                        <div className="
                                        justify-content-between align-items-center
                                        dt__item">
                                            <p>Màu sắc:</p>
                                            {product.color?.map((color, index) => (
                                                <label className='input-color' key={index}>{color}</label>
                                            ))}

                                        </div>

                                        <div className="justify-content-between align-items-center dt__item">
                                            <h6>Size: </h6>
                                            {product.size?.map((size, index) => (
                                                <label className='input-color' key={index}>{size}</label>
                                            ))}
                                        </div>
                                        <div className="flex-box d-flex  align-items-center dt__item">
                                            <h6>Trạng Thái: </h6>
                                            {product.countInStock > 0 ? (
                                                <span>Còn Hàng</span>
                                            ) : (
                                                <span>Hết Hàng</span>
                                            )}
                                        </div>
                                        {product.countInStock > 0 ? (
                                            <>
                                                <div className="flex-box d-flex align-items-center dt__item">
                                                    <h6>Số Lượng</h6>
                                                    <div className='flex-box d-flex quantity '>

                                                        <button className='button-upDown' onClick={decreaseQuantity}>-</button>
                                                        <p className='text-quantity'>{quantity}</p>
                                                        <button className='button-upDown' onClick={increaseQuantity}>+</button>
                                                    </div>
                                                    {/* <select
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                    >
                                                        {[...Array(product.countInStock).keys()].map(
                                                            (x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            )
                                                        )}
                                                    </select> */}
                                                </div>

                                                <button
                                                    onClick={AddToCartHandle}
                                                    className="round-black-btn"
                                                >
                                                    Thêm Vào Giỏ Hàng
                                                </button>

                                            </>
                                        ) : null}
                                        <Accordion defaultActiveKey="0" className='accordion__content'>
                                            <Accordion.Item eventKey="0" className='accordion__item'>
                                                <Accordion.Header>Thông Tin</Accordion.Header>
                                                <Accordion.Body>
                                                    {/* <p>{product.description.material}</p> */}
                                                    {materialAndSizeValues}

                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Bảng size</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>




                                    <div class="button-container">
                                        <button class="custom-button" onClick="showModal()">Thông Tin</button>
                                        <div id="modal" class="modal">
                                            <div class="modal-content">
                                                <span class="close" onclick="closeModal()">&times;</span>
                                                <h2>Modal Title</h2>
                                                <p>Đây là nội dung của modal.</p>
                                            </div>
                                        </div>
                                        <button class="custom-button">Bảng Size</button>
                                        <button class="custom-button">Chính Sách Đổi Trả</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>



                )}
            </div >
        </>
    );
};


export default ProductScreen
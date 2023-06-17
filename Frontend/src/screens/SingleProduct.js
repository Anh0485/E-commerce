import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/homeComponents/Rating";
import Loading from "../components/LoadingError/Loading";
import {
  createProductReview,
  listProductDetails,
} from "../redux/Actions/ProductActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../redux/Constants/ProductConstants";
import Header from "./../components/Header";
import Message from "./../components/LoadingError/Error";
import Toast from "./../components/LoadingError/Toast";
import { toast } from "react-toastify";
import "./detailProduct.css";


const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
};

const SingleProduct = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successCreateReview) {
      toast.success("Review Submitted", ToastObjects);
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successCreateReview]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    );
  };

  console.log(product.reviews);

  return (
    <>
      <Toast />
      <Header />
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image" style={{ width: "100%" }}>
                  <img src={product.image?.url} alt={product.name} />
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
                    {product.description}
                  </p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Giá</h6>
                      <span>{product.price} VNĐ</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Trạng Thái</h6>
                      {product.countInStock > 0 ? (
                        <span>Còn Hàng</span>
                      ) : (
                        <span>Hết Hàng</span>
                      )}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>SIZE</h6>
                      <select id="size-select">
    <option value="38">38</option>
    <option value="39">39</option>
    <option value="40">40</option>
    <option value="41">41</option>
  </select>
                    </div>
                    {product.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Số Lượng</h6>
                          <select
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
                          </select>
                        </div>
                        <button
                          onClick={AddToCartHandle}
                          className="round-black-btn"
                        >
                          Thêm Vào Giỏ Hàng
                        </button>
                      </>
                    ) : null}
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
      </div>
    </>
  );
};

export default SingleProduct;

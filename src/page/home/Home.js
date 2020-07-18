import React,{useEffect} from 'react'
import {fetchProduct} from '../../redux/action/Product'
import { useSelector,useDispatch } from 'react-redux'
import Header from '../../../src/common/Header'
import Footer from '../../../src/common/Footer'
import banner from '../../img/slide-1920x590.png'
import Productitem from './component/Productitem'
import Detail from '../detail/Detail'
import "./home.css";
import Axios from 'axios'
const Home = ()=>{
    const dispatch = useDispatch();
    const listProduct = useSelector(state=>state.product.listProduct)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    

    const showDetail=(item)=>{
         localStorage.setItem('item-detail',JSON.stringify(item));
         window.location.href = '/detail'
    }

    const addToCart = (item)=>{
        Axios.post(`http://localhost:4000/cart`, { item })
    }

    return(
        <div>
        <Header/>
        <section className="banner">
        <div className="banner__slides">
            <div className="banner__slides--item"><img src={banner} alt="" /></div>
            <div className="banner__slides--item"><img src={banner} alt="" /></div>
            <div className="banner__slides--item"><img src={banner} alt="" /></div>
        </div>
        <div className="banner__icon">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul><span>        </span></div>
     </section>
    <section className="hotproduct">
        <div className="hotproduct__title">
            <h4>Sản phẩm nổi bật</h4>
        </div>
        <div className="hotproduct__grid">
            <div className="hotproduct__grid--big">
                <div className="hotproduct__grid--big--new">NEW</div>
                <div className="hotproduct__grid--big--image"><img src="../img/spx2-4.png" alt="" />
                    <div></div>
                    <p><a href="#">Mua Ngay</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--big--title">Cây chân chim<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--big--price">250.000đ<del>250.000 đ</del></p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-5.png" alt="" />
                    <div></div>
                    <p><a href="#">Mua Ngay</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">Cây dạ lam<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--small--price">50.000 đ<del>250.000 đ</del></p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-6.png" alt="" />
                    <div></div>
                    <p><a href="#">Mua Ngay</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">Cây danh dự<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--small--price">850.000 đ<del>250.000 đ</del></p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="saleproduct__grid--right--grid--item--newred">NEW</div>
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-5.png" alt="" />
                    <div></div>
                    <p><a href="">Mua Ngay</a>
                        <a className="-search fas fa-search"></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">Cây cọ ta<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--small--price">250.000 đ<del>250.000 đ</del></p>
            </div>
            <div className="hotproduct__grid--small">
                <div className="hotproduct__grid--small--new">NEW</div>
                <div className="hotproduct__grid--small--image"><img src="../img/spx2-15.png" alt="" />
                    <div></div>
                    <p><a href="">Mua Ngay</a>
                        <a className="-search fas fa-search"></a>
                    </p>
                </div>
                <p className="hotproduct__grid--small--title">Cây dứa nhỏ<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--small--price">375.000 đ<del>250.000 đ</del></p>
            </div>
            <div className="hotproduct__grid--big">
                <div className="hotproduct__grid--big--newred">NEW</div>
                <div className="hotproduct__grid--big--image"><img src="../img/spx2-3.png" alt="" />
                    <div></div>
                    <p><a href="#">Mua Ngay</a>
                        <a className="-search fas fa-search" href=""></a>
                    </p>
                </div>
                <p className="hotproduct__grid--big--title">Cây chân chim<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                <p className="hotproduct__grid--big--price">250.000đ<del>250.000 đ</del></p>
            </div>
        </div>
    </section>
    <section className="saleproduct">
        <div className="saleproduct__grid">
            <div className="saleproduct__grid--left">
                <div className="saleproduct__grid--left--title">
                    <h4>Sản phẩm mua nhiều</h4>
                </div>
                <div className="saleproduct__grid--left--item"><img src="../img/spx2-15.png" alt="" />
                    <div><a href="">Cây dạ lam</a><span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span>
                        <p>250.000 đ</p>
                    </div>
                </div>
                <div className="saleproduct__grid--left--item"><img src="../img/spx2-12.png" alt="" />
                    <div><a href="">Cây danh dự</a><span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span>
                        <p>250.000 đ</p>
                    </div>
                </div>
                <div className="saleproduct__grid--left--item"><img src="../img/spx2-11.png" alt="" />
                    <div><a href="">Cây chân chim</a><span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span>
                        <p>250.000 đ</p>
                    </div>
                </div>
                <div className="saleproduct__grid--left--item"><img src="../img/spx2-2.png" alt="" />
                    <div><a href="">Cây cọ ta</a><span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span>
                        <p>250.000 đ</p>
                    </div>
                </div>
                <div className="saleproduct__grid--left--item"><img src="../img/spx2-8.png" alt="" />
                    <div><a href="">Cây dứa nhỏ</a><span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span>
                        <p>250.000 đ</p>
                    </div>
                </div>
                <div className="saleproduct__grid--left--item--final"><img src="../img/spx2-1.png" alt="" />
                    <div><a href="">Cây đa búp đỏ</a><span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span>
                        <p>250.000 đ</p>
                    </div>
                </div>
            </div>
            <div className="saleproduct__grid--right">
                <div className="saleproduct__grid--right--title">
                    <h4>Sản phẩm khuyến mãi</h4>
                    <div><span className="fas fa-chevron-left"></span><span className="fas fa-chevron-right"></span></div>
                </div>
                <div className="saleproduct__grid--right--grid">
                    <div className="hotproduct__grid--small">
                        <div className="saleproduct__grid--right--grid--item--newred">NEW</div>
                        <div className="hotproduct__grid--small--image"><img src="../img/spx2-15.png" alt="" />
                            <div></div>
                            <p><a href="">Mua Ngay</a>
                                <a className="-search fas fa-search"></a>
                            </p>
                        </div>
                        <p className="hotproduct__grid--small--title">Cây chân chim<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                        <p className="hotproduct__grid--small--price">250.000 đ<del>250.000 đ</del></p>
                    </div>
                    <div className="hotproduct__grid--small">
                        <div className="saleproduct__grid--right--grid--item--newred">NEW</div>
                        <div className="hotproduct__grid--small--image"><img src="../img/spx2-7.png" alt="" />
                            <div></div>
                            <p><a href="">Mua Ngay</a>
                                <a className="-search fas fa-search"></a>
                            </p>
                        </div>
                        <p className="hotproduct__grid--small--title">Cây Dạ Lam<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                        <p className="hotproduct__grid--small--price">500.000 đ<del>250.000 đ</del></p>
                    </div>
                    <div className="saleproduct__grid--right--grid--item">
                        <div className="saleproduct__grid--right--grid--item--image"><img src="../img/spx2-12.png" alt="" />
                            <div></div>
                            <p><a href="#">Mua Ngay</a>
                                <a className="-search fas fa-search" href=""></a>
                            </p>
                        </div>
                        <p className="saleproduct__grid--right--grid--item--title">Cây danh dự<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                        <p className="saleproduct__grid--right--grid--item--price">850.000 đ<del>250.000 đ</del></p>
                    </div>
                    <div className="saleproduct__grid--right--grid--item">
                        <div className="saleproduct__grid--right--grid--item--image"><img src="../img/spx2-11.png" alt="" />
                            <div></div>
                            <p><a href="#">Mua Ngay</a>
                                <a className="-search fas fa-search" href=""></a>
                            </p>
                        </div>
                        <p className="saleproduct__grid--right--grid--item--title">Cây cọ ta<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                        <p className="saleproduct__grid--right--grid--item--price">150.000 đ<del>250.000 đ</del></p>
                    </div>
                    <div className="saleproduct__grid--right--grid--item">
                        <div className="saleproduct__grid--right--grid--item--image"><img src="../img/spx2-1.png" alt="" />
                            <div></div>
                            <p><a href="#">Mua Ngay</a>
                                <a className="-search fas fa-search" href=""></a>
                            </p>
                        </div>
                        <p className="saleproduct__grid--right--grid--item--title">Cây dứa nhỏ<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                        <p className="saleproduct__grid--right--grid--item--price">375.000 đ<del>250.000 đ</del></p>
                    </div>
                    <div className="saleproduct__grid--right--grid--item">
                        <div className="saleproduct__grid--right--grid--item--image"><img src="../img/spx2-7.png" alt="" />
                            <div></div>
                            <p><a href="#">Mua Ngay</a>
                                <a className="-search fas fa-search" href=""></a>
                            </p>
                        </div>
                        <p className="saleproduct__grid--right--grid--item--title">Cây đa búp đỏ<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></span></p>
                        <p className="saleproduct__grid--right--grid--item--price">1.000.000 đ<del>250.000 đ</del></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="banner__slide"><img src="../img/banner-11140x217.png" alt="" /></section>
    <section className="newproduct">
        <div className="newproduct__title">
            <h4>Sản phẩm mới</h4>
            <div><span className="fas fa-chevron-left"></span><span className="fas fa-chevron-right">                      </span></div>
        </div>
        <div className="newproduct__grid">
            {listProduct.map(item=><Productitem data = {item}
                                                showDetail ={()=>showDetail(item)}
                                                addToCart = {()=>addToCart(item)}
                                                  />)}
           </div>
    </section>
    <section className="news">
        <div className="news__title">
            <h4>Tin tức</h4>
            <div><span className="fas fa-chevron-left"></span><span className="fas fa-chevron-right">                      </span></div>
        </div>
        <div className="news__flex">
            <div className="news__flex--item"><img src="../img/img-news-1.png" alt="" /><span>Thứ 7 ,ngày 31, tháng 12, năm 2015</span>
                <h5>15 thiết kế phòng ngủ tuyệt đẹp làm vạn người mê</h5>
                <p>Cùng Sài Gòn Hoa tìm hiểu một vài xu hướng thiết kế sân vườn được ưa chuộng hiện nay nhé ! Kết hợp hàng rào</p><a href="#">đọc tiếp</a></div>
            <div className="news__flex--item"><img src="../img/img-news-2.png" alt="" /><span>Thứ 7 ,ngày 31, tháng 12, năm 2015</span>
                <h5>15 thiết kế phòng ngủ tuyệt đẹp làm vạn người mê</h5>
                <p>Cùng Sài Gòn Hoa tìm hiểu một vài xu hướng thiết kế sân vườn được ưa chuộng hiện nay nhé ! Kết hợp hàng rào</p><a href="#">đọc tiếp</a></div>
            <div className="news__flex--item"><img src="../img/img-1.png" alt="" /><span>Thứ 7 ,ngày 31, tháng 12, năm 2015</span>
                <h5>15 thiết kế phòng ngủ tuyệt đẹp làm vạn người mê</h5>
                <p>Cùng Sài Gòn Hoa tìm hiểu một vài xu hướng thiết kế sân vườn được ưa chuộng hiện nay nhé ! Kết hợp hàng rào</p><a href="#">đọc tiếp</a></div>
        </div>
    </section>
        <Footer/>
        </div>
    );
}
export default Home
import React from 'react';
import './detail.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer'
const Detail = ()=>{
    let item = JSON.parse(localStorage.getItem('item-detail'));
    if(item){
        return(
            <div>
                <Header/>
                     <div class="detail__title">
        <div>Home /<a href="#">{item.name}</a></div>
        </div>
        <div class="detail__content">
            <div class="detail__content--mainProduct">
                <div class="detail__content--mainProduct--left"><img class="img__main" src={process.env.PUBLIC_URL+item.img} alt="" />
                    <div class="img__more"><img src="../img/spx2-1.png" alt="" /><img src="../img/spx2-5.png" alt="" /><img src="../img/spx2-7.png" alt="" /><img src="../img/spx2-12.png" alt="" /><img src="../img/spx2-14.png" alt="" /></div>
                </div>
                <div class="detail__content--mainProduct--right">
        <h3 class="name">{item.name}</h3><span class="rate"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
        <h3 class="price">{item.price}<del>{item.del}</del></h3>
                    <p class="detail__content--mainProduct--right--detail">Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt
                        màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.</p>
                    <div class="detail__content--mainProduct--right--amount">
                        <p>Số lượng</p><span class="sub">-</span><span class="amount">1</span><span class="add">+</span></div>
                    <div class="detail__content--mainProduct--right--btn">
                        <div class="btn__group"><a class="buy" href="#">Mua ngay</a>
                            <a class="fas fa-search" href="#"></a>
                            <a class="item-right__btn-another -love fas fa-heart" href="#"></a>
                        </div>
                    </div>
                    <div class="detail__content--mainProduct--right--social"><a class="fb" href="#"><i class="fab fa-facebook-square">Like</i><span>0</span></a><a class="twitch" href="#"><i class="fab fa-twitter">Tweet</i></a><a class="gg" href="#"><i class="fab fa-google-plus-g"></i><span>0</span></a><a class="share"
                            href="#"><i class="fas fa-plus-square">Share</i></a></div>
                </div>
            </div>
            <div class="detail__content--information">
                <div class="detail__content--information--tab"><span>THÔNG TIN SẢN PHẨM</span><span>KHÁCH HÀNG</span><span>THẺ TAB</span></div>
                <div class="detail__content--information--content">
                    <p>Tên phổ thông: Dạ lam, Huỳnh tinh cảnh, Dong vằn.</p>
                    <p>Tên khoa học: Calathea zebrina</p>
                    <p>Họ thực vật: Marantaceae (Củ dong).</p>
                    <p>Chiều cao: 0,8-1,2m</p>
                    <p>Cây dạ lam có nguồn gốc từ Brazil, được du nhập và phân bố rộng khắp ở Việt Nam.</p><span>Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.</span><span>Cây dạ lam thuộc loại cây chịu bóng bán phần hoặc hoàn toàn, nhu cầu nước tương đối cao. Cây được nhân giống từ tách bụi, cây mọc khỏe, tốc độ sinh trưởng nhanh với sức sống mạnh. Đây là loại cây có dáng đẹp, màu lá mướt mát, tươi khỏe, cây rất phù hợp trồng chậu trang trí nội thất-văn phòng.</span><span>Ngoài ra, cây còn có đặc điểm lọc khí, làm xanh mát môi trường, giúp điều hòa không khí, đặc biệt tốt cho những môi trường thường xuyên sử dụng các loại máy móc tảng nhiệt. Có thể bày cây ở hành lang hay ở giữa sảnh, đặt ở cạnh bàn làm việc hoặc trang trí các góc phòng có diện tích trung bình.</span></div>
            </div>
            <div class="detail__content--title">
                <h4>Sản phẩm cùng loại</h4>
                <div><span class="fas fa-chevron-left"></span><span class="fas fa-chevron-right">                      </span></div>
            </div>
            <div class="detail__content--product">
                <div class="detail__content--product--item">
                    <div class="detail__content--product--item--image"><img src="../img/spx2-11.png" alt="" />
                        <div></div>
                        <p><a href="#">Mua Ngay</a>
                            <a class="-search fas fa-search" href=""></a>
                        </p>
                    </div>
                    <p class="detail__content--product--item--title">cây cọ nhật<span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></span></p>
                    <p class="detail__content--product--item--price">250.000đ<del>250.000 đ</del></p>
                </div>
                <div class="detail__content--product--item">
                    <div class="detail__content--product--item--image"><img src="../img/spx2-6.png" alt="" />
                        <div></div>
                        <p><a href="#">Mua Ngay</a>
                            <a class="-search fas fa-search" href=""></a>
                        </p>
                    </div>
                    <p class="detail__content--product--item--title">cây hồng môn<span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></span></p>
                    <p class="detail__content--product--item--price">250.000đ<del>250.000 đ</del></p>
                </div>
                <div class="detail__content--product--item">
                    <div class="detail__content--product--item--image"><img src="../img/spx2-8.png" alt="" />
                        <div></div>
                        <p><a href="#">Mua Ngay</a>
                            <a class="-search fas fa-search" href=""></a>
                        </p>
                    </div>
                    <p class="detail__content--product--item--title">cây phát lộc<span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></span></p>
                    <p class="detail__content--product--item--price">250.000đ<del>250.000 đ</del></p>
                </div>
                <div class="detail__content--product--item">
                    <div class="detail__content--product--item--image"><img src="../img/spx2-12.png" alt="" />
                        <div></div>
                        <p><a href="#">Mua Ngay</a>
                            <a class="-search fas fa-search" href=""></a>
                        </p>
                    </div>
                    <p class="detail__content--product--item--title">cây kim ngân<span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></span></p>
                    <p class="detail__content--product--item--price">250.000đ<del>250.000 đ</del></p>
                </div>
            </div>
        </div>
        <Footer/>
            </div>
        );
    }
    else{
        window.location.href= '/'
    }
  
}
export default Detail
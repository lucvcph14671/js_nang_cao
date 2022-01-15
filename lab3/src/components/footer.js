const Footer = {
    render() {
        return /*html*/ `
        <header>
        <img class="h-28 w-full my-3" src="./images/71518161-white-wooden-texture-seamless-background.webp" alt="">
        <div class="flex flex-wrap relative bottom-20 ">
            <div class="mx-auto flex">
                <h3>Là 1 Sản Phẩm !</h3>
                <b>Thời Thượng Theo Năm Tháng</b>
                <img class="h-8 rounded-full" src="./images/2022-graduate-class-logo-4151968.jpg" alt="">
            </div>
        </div>
    </header>
    <div class="h-44 bg-black">
        <h3 class="text-white text-4xl py-7 text-center">Giảm 10% khi mua tại shop</h3>
        <p class="text-white text-center">Bạn sẽ nhận được tin tức về ưu đãi và sản phẩm mới ...</p>
        <div class="flex flex-wrap ">
            <div class="mx-auto flex flex-wrap mt-4">
                <input class="p-1 " type="text">
                <button class="text-white border px-4 bg-emerald-300 hover:text-black">Gửi</button>
            </div>
            <p></p>
        </div>
    </div>

    <div class="bg-black flex px-32">
        <div>
            <img class="w-56" src="./images/e2266418052fc44184aa196d239861e5.jpg" alt="">
            <p class="text-white text-center">@ lucvutru 2022</p>
        </div>
        <div>
            <ul class="text-white ml-12 w-64  py-10">
                <li><a href="">Chính sách bảo mật</a></li>
                <li><a href="">Chính sách Cookie</a></li>
                <li><a href="">Điều khoản và điều kiện</a></li>
                <li><a href="">Khả năng tiếp cận</a></li>
            </ul>
        </div>
        <div>
            <ul class="text-white w-64  py-10">
                <li><a href="">Thông tin giao hàng</a></li>
                <li><a href="">Lợi nhuận</a></li>
                <li><a href="">Hợp tác</a></li>
            </ul>
        </div>
        <div>
            <ul class="text-white flex flex-wrap  py-10">
                <li>
                    <a href=""><i class="fab fa-facebook-f text-3xl px-5 hover:text-teal-400"></i></a>
                </li>
                <li>
                    <a href=""><i class="fab fa-instagram text-3xl px-5 hover:text-teal-400"></i></a>
                </li>
                <li>
                    <a href=""><i class="fab fa-twitter text-3xl px-5 hover:text-teal-400"></i></a>
                </li>
                <li>
                    <a href=""><i class="fab fa-telegram-plane text-3xl px-5 hover:text-teal-400"></i></a>
                </li>
            </ul>
        </div>
    </div>
        `;
    },
};
export default Footer;
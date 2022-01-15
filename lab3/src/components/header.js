const Header = {
    render() {
        return /*html*/ `
        <div class="h-5 bg-black">

        </div>
        <div class="flex flex-wrap mx-auto items-center px-28">
            <div class="icon pt-2">
                <ul class="flex flex-wrap">
                    <li><a href=""><i class="fas fa-language text-2xl pr-4"></i></a></li>|
                    <li><a href=""><i class="fas fa-envelope-open-text text-xl px-4"></i><span>admin@gmail.com</span></a></li>
                    <li><a href="admin/dashboard"><i class="fas fa-envelope-open-text text-xl px-4"></i><span>Dashboard</span></a></li>
                </ul>
            </div>
            <img class="w-48 mt-5 mx-auto" src="./images/Hermes-symbol.jpg" alt="">
            <div class="icon2 pt-2">
                <ul class="flex flex-wrap">
                    <li><i class="far fa-user text-xl pl-3"></i><a href="signin" class="hover:text-emerald-800 px-4">Đăng kí</a></li>|
                    <li><i class="fas fa-sign-in-alt text-xl pl-3"></i><a href="signup" class="hover:text-emerald-800 px-4">Đăng nhập</a></li>|
                    <li><i class="fas fa-shopping-cart text-xl pl-3"></i><a href="" class="hover:text-emerald-800 px-4">Giỏ hàng</a></li>|
                </ul>
            </div>
        </div>
        <hr class="h-1">
        <menu class="flex flex-wrap mx-auto items-center px-28 mt-4">
            <ul class="flex flex-wrap">
                <li class="pr-8 hover:text-emerald-800"><a href="">Trang Chủ</a></li>
                <li class="px-8 hover:text-emerald-800"><a href="">Tin Tức</a></li>
                <li class="px-8 hover:text-emerald-800"><a href="">Liên Hệ</a></li>
                <li class="px-8 hover:text-emerald-800"><a href="">Công Ty</a></li>
                <li class="px-8 hover:text-emerald-800"><a href="">Việc Làm</a></li>
            </ul>
            <div class="flex flex-wrap ml-auto">
                <input type="text" class="border border-black p-1 mx-5 h-7" placeholder="Vd: Nước hoa pháp...">
                <button class="border border-black px-1 bg-black text-white hover:bg-teal-400">Tìm kiếm</button>
            </div>
        </menu>
        <hr class="mt-4">
        `;
    },
};
export default Header;
import Navigo from "navigo";
import Header from "./components/header";
import Banner from "./components/banner";
import Main from "./page/main";
import Footer from "./components/footer";
import Signin from "./page/signin";
import Signup from "./page/signup";
import Dashboard from "./page/admin/dashboard";
import New from "./page/admin/new";
import Add_new from "./page/admin/add_new";
import Edit_new from "./page/admin/edit_new";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content, header, banner) => {

    document.querySelector("#header").innerHTML = header;
    if (banner) {
        document.querySelector("#banner").innerHTML = banner;
    }
    document.querySelector("#main").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();

};

const print_admin = (content_admin) => {

    document.querySelector("#app").innerHTML = Dashboard.render();
    document.querySelector("#main").innerHTML = content_admin;

};

router.on({
    "/": () => {
        print(Main.render(), Header.render(), Banner.render());
    },
    "signin": () => {
        print(Signin.render(), Header.render());
    },
    "signup": () => {
        print(Signup.render(), Header.render());
    },
    "admin/dashboard": () => {
        print_admin(Dashboard.render());
    },
    "admin/new": () => {
        print_admin(New.render());
    },
    "admin/new/add": () => {
        print_admin(Add_new.render());
    },
    "admin/new/edit": () => {
        print_admin(Edit_new.render());
    },

});

router.resolve();
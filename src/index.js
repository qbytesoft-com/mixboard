import './main.scss';
import $ from 'jquery'

$(document).ready(function () {
    var sidebar_toggle = $(".sidebar_toogle_btn");
    var sidebar = $("aside");
    sidebar_toggle.click(function () {
        sidebar.toggleClass("show");
    })
})
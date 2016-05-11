
$(document).ready(function () {
    $("a[data-toggle=tab]").on("click", function () {
        location.href = this.href;
    });

    $(".menu_link").on("click", function () {
        var item = $(this).parent();
        if (item.hasClass("menu_item-current")) {
            return false;
        }
        $(".menu_item-current").removeClass("menu_item-current");
        item.addClass("menu_item-current");
    });
});
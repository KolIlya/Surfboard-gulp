const findBlockByAlias = (alias) => {
    return $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") === alias;
    });
};

$(".interactive-avatar__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const showItem = findBlockByAlias(target);
    const currentItem = $this.closest(".interactive-avatar");

    currentItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");

    showItem.addClass("reviews__item--active").siblings().removeClass("reviews__item--active");
});

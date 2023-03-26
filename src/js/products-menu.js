const mesureWidth = item => {
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".products-menu__list");
    const titleBlocks = container.find(".products-menu__title");
    const titlesWidth = titleBlocks.width() * titleBlocks.length;

    const textContainer = item.find(".products-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 524;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingRight - paddingLeft
    }
};

const closeEveryItemInContainer = container => {
    const productsItems = container.find(".products-menu__item");
    const productsContent = container.find(".products-menu__content");

    productsItems.removeClass("active");
    productsContent.width(0);
};

const openItemProducts = item => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = mesureWidth(item);
    const textBlock = item.find(".products-menu__container");

    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer)
};

$(".products-menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products-menu__list");

    if (itemOpened) {
        closeEveryItemInContainer(container);
      } else {
        closeEveryItemInContainer(container);
        openItemProducts(item);
      }
});
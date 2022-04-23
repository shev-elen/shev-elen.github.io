$('ul.menu__subtitle').on('click', 'li:not(.menu__item-active)', function() {
    $(this)
      .addClass('menu__item-active').siblings().removeClass('menu__item-active')
      .closest('div.container').find('div.menu__wrapper').removeClass('menu__wrapper_active').eq($(this).index()).addClass('menu__wrapper_active');
});


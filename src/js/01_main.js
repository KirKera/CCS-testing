// бургер меню
function toggleMenu() {
    let menu = document.querySelector(".header__burger-menu");
    let burgerBtn = document.querySelector(".header__burger-btn");
    menu.classList.toggle("open");
    burgerBtn.classList.toggle("open");
}

// input-range
$(function () {
    $('input[type="range"]').val(0);
    $('input[type="range"]').on("input", function () {
        let value = $(this).val();
        $(".input__range-value").text(value + "%");
    });
    $(".input__range-value").text("0%");
});

// select
$(function () {
    let mySettings = {
        key: true,
        dropBlock: $(".drop"),
        virtualSelect: $(".slct"),
        arrow: $(".arrow"),
    };
    mySettings.virtualSelect.on("click", function () {
        if (mySettings.dropBlock.is(":hidden")) {
            mySettings.dropBlock.slideDown();
            $(this).addClass("active");
            mySettings.arrow.addClass("arrow--active");
        } else {
            mySettings.dropBlock.slideUp();
            $(this)
                .delay(400)
                .queue(function (nextJ) {
                    $(this).removeClass("active");
                    nextJ();
                });
            mySettings.arrow.removeClass("arrow--active");
        }
        return false;
    });
    mySettings.dropBlock.find("li").on("click", function () {
        let selectResult = $(this).html();
        $(this).parent().parent().find("input").val(selectResult);
        mySettings.dropBlock.slideUp();
        mySettings.virtualSelect
            .delay(400)
            .queue(function (nextJs) {
                $(this).removeClass("active");
                nextJs();
            })
            .html(selectResult);
        mySettings.arrow.removeClass("arrow--active");
        $(this).addClass("selected").siblings().removeClass("selected");
        return false;
    });
    $(document).on("click", function (event) {
        if (
            mySettings.key &&
            !$(event.target).closest(mySettings.dropBlock).length
        ) {
            mySettings.dropBlock.slideUp();
            mySettings.virtualSelect.delay(400).queue(function (nextJs) {
                $(this).removeClass("active");
                nextJs();
            });
            mySettings.arrow.removeClass("arrow--active");
            mySettings.key = true;
            return;
        }
    });
});

// Точки в шагай
$(function () {
    let pointsHtml = `
      <div class="placing-block__points">
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
      </div>
    `;
    let $steps = $(".placing-block__steps");
    for (let i = 0; i < 5; i++) {
        $steps.prepend(pointsHtml);
    }
});

// проверка инпутов

$(function () {
    $('input[name="name"]').on("input", function () {
        let name = $(this).val();
        let nameRegex = /^[а-яА-Я\s]+$/;
        if (nameRegex.test(name)) {
            $(this).removeClass("invalid").addClass("valid");
        } else {
            $(this).removeClass("valid").addClass("invalid");
        }
    });
});

$(function () {
    $('input[name="e-mail"]').on("input", function () {
        let email = $(this).val();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            $(this).removeClass("invalid").addClass("valid");
        } else {
            $(this).removeClass("valid").addClass("invalid");
        }
    });
});

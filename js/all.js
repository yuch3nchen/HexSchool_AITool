$(document).ready(function () {
    $(".jq-click").click(function (e) {
      e.preventDefault();
      $(this).parent().find(".jq-dropDown").slideToggle();
      $(this).parent().find(".add").toggle();
      $(this).parent().find(".remove").toggle();
      $(this).parent().find(".openBorder").toggle();
    });
  
    //回到頁首
    $(".backToTop").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
          scrollTop: 0
        },
        800
      );
    });
  });
  
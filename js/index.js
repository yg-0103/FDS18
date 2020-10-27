var section = $('.board section');
var tab = $('.board .tab a');
var item = $('.board li');

item.addClass('icon-dot-circled');

tab.click(function (e){
  e.preventDefault();
  section.removeClass('is-active');
  $(this).parent().parent().addClass('is-active');
});
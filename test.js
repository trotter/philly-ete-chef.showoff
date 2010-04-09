function centerSlide(slide) {
  var slide_content = $(slide).children(".content").first()
  var height = slide_content.height()
  var mar_top = (0.5 * parseFloat($(slide).height())) - (0.5 * parseFloat(height))
  if (mar_top < 0) {
    mar_top = 0
  }
  // TODO: Make this conditional on having the "center" class
  //       ... or override when there's a top class
  if (slide_content.hasClass("subsection") ||
      slide_content.hasClass("title-slide") ||
      slide_content.hasClass("center")) {
    slide_content.css('margin-top', mar_top)
  }
}

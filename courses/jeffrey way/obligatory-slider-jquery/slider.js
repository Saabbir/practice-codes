function Slider(sliderSelector, sliderNavSelector) {
  this.sliderEl = $(sliderSelector).css("overflow", "hidden");
  this.nav = $(sliderNavSelector).css("display", "flex");
  this.sliderUl = this.sliderEl.find("ul");

  this.imgs = this.sliderEl.find("img");
  this.imgsLen = this.imgs.length;
  this.imgWidth = this.imgs[0].width;

  this.current = 1;
}

Slider.prototype.transition = function () {
  this.sliderUl.animate({
    "margin-left": -((this.current - 1) * this.imgWidth),
  });
};

Slider.prototype.setCurrent = function (dir) {
  this.current += dir === "next" ? 1 : -1;

  if (this.current > this.imgsLen) {
    this.current = 1;
  } else if (this.current < 1) {
    this.current = this.imgsLen;
  }
};

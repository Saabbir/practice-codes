function HtmlElement() {
  this.click = function () {
    console.log("Saabbir:", "clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("Saabbir:", "focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
    console.log("Saabbir:", "", this.items);
  };

  this.removeItem = function (item) {
    this.items = this.items.filter((i) => i !== item);
    console.log("Saabbir:", "", this.items);
  };

  this.render = function () {
    const options = this.items.map((item) => `<option>${item}</option>`);

    return `
      <select name="" id="">
        ${options.join("\n")}
      </select>
    `;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src = "https://lorem.picsum") {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" alt="" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [new HtmlSelectElement([1, 2, 3]), new HtmlImageElement()];

for (element of elements) {
  console.log("Saabbir:", "", element.render());
}

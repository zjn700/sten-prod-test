

export function elementInViewport2(el) {
  // console.log("x", el, window)
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

export function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

  // var top = el.offsetTop;
  //   var left = el.offsetLeft;
  //   var width = el.offsetWidth;
  //   var height = el.offsetHeight;

  //   while(el.offsetParent) {
  //     el = el.offsetParent;
  //     top += el.offsetTop;
  //     left += el.offsetLeft;
  //   }

  //   return (
  //     top < (window.pageYOffset + window.innerHeight) &&
  //     left < (window.pageXOffset + window.innerWidth) &&
  //     (top + height) > window.pageYOffset &&
  //     (left + width) > window.pageXOffset
  //   );
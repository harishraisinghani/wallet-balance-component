import React, { useState, useEffect } from 'react';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "td,th{border:1px solid #ddd;padding:8px}img{height:40px;width:40px}";
styleInject(css_248z);

var img = "data:image/png;base64,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";

function WalletBalance(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      getData = _useState2[1];

  var _useState3 = useState("demo.eth"),
      _useState4 = _slicedToArray(_useState3, 2),
      address = _useState4[0],
      setAddress = _useState4[1];

  useEffect(function () {
    fetchData();
  }, []);

  var searchAddress = function searchAddress(e) {
    setAddress(e.target.value);
  };

  var handleImgError = function handleImgError(e) {
    e.target.src = img;
  };

  var fetchData = function fetchData() {
    var headers = new Headers();
    var authString = "".concat(props.apikey, ":");
    headers.set('Authorization', 'Basic ' + btoa(authString));
    var URL = "https://api.covalenthq.com/v1/1/address/".concat(address, "/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false");
    fetch(URL, {
      method: 'GET',
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (response) {
      console.log(response);
      getData(response.data.items);
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-field"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    name: "search-form",
    id: "search-form",
    className: "search-input",
    placeholder: "Enter Wallet Address",
    value: address,
    onChange: searchAddress
  }), /*#__PURE__*/React.createElement("button", {
    onClick: fetchData
  }, "Search Address")), /*#__PURE__*/React.createElement("div", {
    className: "balances"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Symbol"), /*#__PURE__*/React.createElement("th", null, "Balance"), /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", null, "Contract Address"))), /*#__PURE__*/React.createElement("tbody", null, data.map(function (item, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("img", {
      src: item.logo_url,
      onError: handleImgError
    })), /*#__PURE__*/React.createElement("td", null, item.contract_name), /*#__PURE__*/React.createElement("td", null, item.contract_ticker_symbol), /*#__PURE__*/React.createElement("td", null, Math.floor(item.balance / Math.pow(10, item.contract_decimals))), /*#__PURE__*/React.createElement("td", null, item.type), /*#__PURE__*/React.createElement("td", null, item.contract_address));
  }))))));
}

export { WalletBalance };

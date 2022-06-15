'use strict';

var React = require('react');
var ReactDOM = require('react-dom/client');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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

var css_248z$1 = "body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}";
styleInject(css_248z$1);

var css_248z = "td,th{border:1px solid #ddd;padding:8px}img{height:40px;width:40px}";
styleInject(css_248z);

function WalletBalance() {
  const [data, getData] = React.useState([]);
  const [address, setAddress] = React.useState("demo.eth");
  React.useEffect(() => {
    fetchData();
  }, []);

  const searchAddress = e => {
    setAddress(e.target.value);
  };

  const handleImgError = e => {
    e.target.src = "/logo192.png";
  };

  const fetchData = () => {
    const URL = `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${process.env.REACT_APP_COVALENT_API_KEY}`;
    fetch(URL).then(res => res.json()).then(response => {
      console.log(response);
      getData(response.data.items);
    });
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "search-wrapper"
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "search-form"
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "search",
    name: "search-form",
    id: "search-form",
    className: "search-input",
    placeholder: "Enter Address",
    value: address,
    onChange: searchAddress
  })), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: fetchData
  }, "Search Address")), /*#__PURE__*/React__default["default"].createElement("h1", null, "Wallet Balances"), /*#__PURE__*/React__default["default"].createElement("h3", null, "Address: ", address, " "), /*#__PURE__*/React__default["default"].createElement("tbody", null, /*#__PURE__*/React__default["default"].createElement("tr", null, /*#__PURE__*/React__default["default"].createElement("th", null), /*#__PURE__*/React__default["default"].createElement("th", null, "Name"), /*#__PURE__*/React__default["default"].createElement("th", null, "Symbol"), /*#__PURE__*/React__default["default"].createElement("th", null, "Balance"), /*#__PURE__*/React__default["default"].createElement("th", null, "Type"), /*#__PURE__*/React__default["default"].createElement("th", null, "Contract Address")), data.map((item, i) => /*#__PURE__*/React__default["default"].createElement("tr", {
    key: i
  }, /*#__PURE__*/React__default["default"].createElement("td", null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: item.logo_url,
    onError: handleImgError
  })), /*#__PURE__*/React__default["default"].createElement("td", null, item.contract_name), /*#__PURE__*/React__default["default"].createElement("td", null, item.contract_ticker_symbol), /*#__PURE__*/React__default["default"].createElement("td", null, Math.floor(item.balance / 10 ** item.contract_decimals)), /*#__PURE__*/React__default["default"].createElement("td", null, item.type), /*#__PURE__*/React__default["default"].createElement("td", null, item.contract_address))))));
}

function App() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "WalletBalance"
  }, /*#__PURE__*/React__default["default"].createElement(WalletBalance, null));
}

var root = ReactDOM__default["default"].createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React__default["default"].createElement(React__default["default"].StrictMode, null, /*#__PURE__*/React__default["default"].createElement(App, null)));

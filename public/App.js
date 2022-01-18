class HelloWord extends React.Component {
  render() {
    const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
    const helloContinents = Array.from(continents, c => `Hello ${c}`);
    const message = helloContinents.join(' ');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      title: "Outer div"
    }, /*#__PURE__*/React.createElement("h1", null, message)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, " Second Div ")));
  }

}

const element = /*#__PURE__*/React.createElement(HelloWord, null);
ReactDOM.render(element, document.getElementById('contents'));
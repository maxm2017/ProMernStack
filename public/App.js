class IssueList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
  }

}

class IssueFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, " Placeholder for issue filter ");
  }

}

class IssueTable extends React.Component {
  render() {
    const rowStyle = {
      border: "1px solid silver",
      padding: 4
    };
    return /*#__PURE__*/React.createElement("table", {
      style: {
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "ID"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(IssueRow, {
      rowStyle: rowStyle,
      issue_id: 1,
      issue_title: "Error in console when clicking Add"
    }), /*#__PURE__*/React.createElement(IssueRow, {
      rowStyle: rowStyle,
      issue_id: 2,
      issue_title: "Missing bottom border on panel"
    })));
  }

}

class IssueAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, " Placeholder for issue add ");
  }

}

class IssueRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.issue_id), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.issue_title));
  }

}

const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));
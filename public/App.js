const initialIssues = [{
  id: 1,
  status: 'New',
  owner: 'Ravan',
  effort: 5,
  created: new Date('2018-08-15'),
  due: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2,
  status: 'Assigned',
  owner: 'Eddie',
  effort: 14,
  created: new Date('2018-08-16'),
  due: new Date('2018-08-30'),
  title: 'Missing bottom border on panel'
}];

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        issues: initialIssues
      });
    }, 500);
  }

  createIssue(issue) {
    issue.id = this.state.issues.length + 1;
    issue.created = new Date();
    const newIssueList = this.state.issues.slice();
    newIssueList.push(issue);
    this.setState({
      issues: newIssueList
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
      issues: this.state.issues
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, {
      createIssue: this.createIssue.bind(this)
    }));
  }

}

class IssueFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, " Placeholder for issue filter ");
  }

}

function IssueTable(props) {
  const issueRows = props.issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    key: issue.id,
    issue: issue
  }));
  return /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      due: new Date()
    };
    this.props.createIssue(issue);
    form.owner.value = "";
    form.title.value = "";
  }

  render() {
    return /*#__PURE__*/React.createElement("form", {
      name: "issueAdd",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "owner",
      placeholder: "Owner"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "title",
      placeholder: "Title"
    }), /*#__PURE__*/React.createElement("button", null, "Add"));
  }

}

function IssueRow(props) {
  const issue = props.issue;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.due ? issue.due.toDateString() : ''), /*#__PURE__*/React.createElement("td", null, issue.title));
}

const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));
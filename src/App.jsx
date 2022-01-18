class IssueList extends React.Component {
    render()
    {
        return(
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </React.Fragment>
        )
    }
}
class IssueFilter extends React.Component{
    render()
    {
        return (
            <div> Placeholder for issue filter </div>
        )
    }
}

class IssueTable extends React.Component{
    render()
    {
        return (
            <div> Placeholder for issue table </div>
        )
    }
}

class IssueAdd extends React.Component{
    render()
    {
        return (
            <div> Placeholder for issue add </div>
        )
    }
}

const element = <IssueList />
ReactDOM.render(element, document.getElementById('contents'));
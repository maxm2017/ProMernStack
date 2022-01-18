class HelloWord extends React.Component 
{
    render()
    {
        const continents = ['Africa','America','Asia', 'Australia', 'Europe'];
        const helloContinents = Array.from(continents, c=> `Hello ${c}`);
        const message = helloContinents.join(' ');
        return(

            <React.Fragment>
                <div title = "Outer div">
                    <h1>{message}</h1>
                </div>

                <div>
                    <h2> Second Div </h2>
                </div>
            </React.Fragment>
        )
    }
}

const element = <HelloWord />;

ReactDOM.render(element, document.getElementById('contents'));
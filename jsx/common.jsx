class Template extends React.Component {
    render() {
        let name = this.props.name;
        let children = [];
        for (let i in this.props.children) {
            children.push(this.props.children[i]);
        }

        return (
            <React.Fragment>
                <div className="heading">
                    <h1><a href="./index.html">cp-lockdown</a> > {name}</h1>
                </div>
                <div className="toc" id="toc">
                    {children}
                </div>
                <div className="content" id="content">
                </div>
            </React.Fragment>
        );
    }
}

class Group extends React.Component {
    render() {
        let name = this.props.name;
        let children = [];
        if (this.props.children.length === undefined) {
            children.push(<li key="0">{this.props.children}</li>);
        }
        else {
            for (let i in this.props.children) {
                children.push(
                    <li key={i}>{this.props.children[i]}</li>
                );
            }
        }

        return (
            <React.Fragment>
                {name}
                <ul>
                    {children}
                </ul>
            </React.Fragment>
        );
    }
}

class Section extends React.Component {
    constructor(props) {
        super(props);

        let name = "Default";

        if (props) {
            name = props.name;
        }

        this.state = {
            name: name
        }

        this.showContent = this.showContent.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    getContent() {
        return "Not done"
    }

    showContent() {
        let content = (
            <React.Fragment>
                <h2>{this.state.name}</h2>
                {this.getContent()}
            </React.Fragment>
        )
        ReactDOM.render(content, document.getElementById("content"));
    }

    render() {
        return (
            <a href="#" onClick={this.showContent} >{this.state.name}</a>
        )
    }
}

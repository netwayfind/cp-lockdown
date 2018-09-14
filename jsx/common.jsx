class Template extends React.Component {
    constructor(props) {
        super(props);

        let sections = {};

        for (let i in this.props.children) {
            let group = this.props.children[i];
            if (group.props.children.length === undefined) {
                let section = group.props.children;
                let name = section.type.name;
                sections[name] = section;
            }
            else {
                for (let j in group.props.children) {
                    let section = group.props.children[j];
                    let name = section.type.name;
                    sections[name] = section;
                }
            }
        }

        this.state = {
            sections: sections
        }
    }

    componentDidMount() {
        let i = window.location.hash.indexOf('#');
        let hash = window.location.hash.slice(i + 1);
        this.setContent(hash);
        // handle browser back/forward
        window.onhashchange = (e) => {
            let i = e.newURL.indexOf('#');
            let hash = e.newURL.slice(i + 1);
            this.setContent(hash);
        };
    }

    setContent(hash) {
        let section = this.state.sections[hash];
        if (section) {
            let name = section.type.prototype.displayName();
            let content = (
                <React.Fragment>
                    <h2>{name}</h2>
                    {section}
                </React.Fragment>
            );
            ReactDOM.render(content, document.getElementById("content"));
        }
    }

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
            let section = this.props.children;
            children.push(<li key="0">{section.type.prototype.getLink()}</li>);
        }
        else {
            for (let i in this.props.children) {
                let section = this.props.children[i];
                children.push(<li key={i}>{section.type.prototype.getLink()}</li>);
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
    }
}

class SectionLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let section = this.props.section;
        let label = section.displayName();
        let link = "#" + section.constructor.name;

        return (
            <a href={link}>{label}</a>
        );
    }
}

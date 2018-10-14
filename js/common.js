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
      } else {
        for (let j in group.props.children) {
          let section = group.props.children[j];
          let name = section.type.name;
          sections[name] = section;
        }
      }
    }

    this.state = {
      sections: sections
    };
  }

  componentDidMount() {
    let i = window.location.hash.indexOf('#');
    let hash = window.location.hash.slice(i + 1);
    this.setContent(hash); // handle browser back/forward

    window.onhashchange = e => {
      let i = e.newURL.indexOf('#');
      let hash = e.newURL.slice(i + 1);
      this.setContent(hash);
    };
  }

  setContent(hash) {
    let section = this.state.sections[hash];

    if (section) {
      let name = section.type.prototype.displayName();
      let content = React.createElement(React.Fragment, null, React.createElement("h2", null, name), section);
      ReactDOM.render(content, document.getElementById("content"));
    } else {
      ReactDOM.render("", document.getElementById("content"));
    }
  }

  render() {
    let name = this.props.name;
    let children = [];

    for (let i in this.props.children) {
      children.push(this.props.children[i]);
    }

    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "heading"
    }, React.createElement("h1", null, React.createElement("a", {
      href: "./index.html"
    }, "cp-lockdown"), " > ", name)), React.createElement("div", {
      className: "toc",
      id: "toc"
    }, children), React.createElement("div", {
      className: "content",
      id: "content"
    }));
  }

}

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    if (props.children.length === undefined) {
      this.state[0] = "__:__";
    } else {
      for (let i in props.children) {
        this.state[i] = "__:__";
      }
    }

    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus(event, i) {
    event.preventDefault();

    if (this.state[i] == "__:__") {
      let date = new Date(); // pad numbers to have 2 digits

      let timeStr = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
      this.setState({
        [i]: timeStr
      });
    } else {
      this.setState({
        [i]: "__:__"
      });
    }
  }

  render() {
    let name = this.props.name;
    let children = [];

    if (this.props.children.length === undefined) {
      let section = this.props.children;
      children.push(React.createElement("div", null, React.createElement("input", {
        type: "checkbox",
        onClick: e => this.updateStatus(e, 0)
      }), React.createElement("span", null, this.state[0]), "\xA0", section.type.prototype.getLink()));
    } else {
      for (let i in this.props.children) {
        let section = this.props.children[i];
        children.push(React.createElement("div", null, React.createElement("input", {
          type: "checkbox",
          onClick: e => this.updateStatus(e, i)
        }), React.createElement("span", null, this.state[i]), "\xA0", section.type.prototype.getLink()));
      }
    }

    return React.createElement(React.Fragment, null, React.createElement("h4", null, name), children);
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
    return React.createElement("a", {
      href: link
    }, label);
  }

}
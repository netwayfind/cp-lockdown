var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = function (_React$Component) {
    _inherits(Template, _React$Component);

    function Template() {
        _classCallCheck(this, Template);

        return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
    }

    _createClass(Template, [{
        key: "render",
        value: function render() {
            var name = this.props.name;
            var children = [];
            for (var i in this.props.children) {
                children.push(this.props.children[i]);
            }

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "heading" },
                    React.createElement(
                        "h1",
                        null,
                        name
                    )
                ),
                React.createElement(
                    "div",
                    { className: "toc", id: "toc" },
                    children
                ),
                React.createElement("div", { className: "content", id: "content" })
            );
        }
    }]);

    return Template;
}(React.Component);

var Group = function (_React$Component2) {
    _inherits(Group, _React$Component2);

    function Group() {
        _classCallCheck(this, Group);

        return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
    }

    _createClass(Group, [{
        key: "render",
        value: function render() {
            var name = this.props.name;
            var children = [];
            if (this.props.children.length === undefined) {
                children.push(React.createElement(
                    "li",
                    { key: "0" },
                    this.props.children
                ));
            } else {
                for (var i in this.props.children) {
                    children.push(React.createElement(
                        "li",
                        { key: i },
                        this.props.children[i]
                    ));
                }
            }

            return React.createElement(
                "div",
                null,
                name,
                React.createElement(
                    "ul",
                    null,
                    children
                )
            );
        }
    }]);

    return Group;
}(React.Component);

var Section = function (_React$Component3) {
    _inherits(Section, _React$Component3);

    function Section(props) {
        _classCallCheck(this, Section);

        var _this3 = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

        var name = "Default";

        if (props) {
            name = props.name;
        }

        _this3.state = {
            name: name
        };

        _this3.showContent = _this3.showContent.bind(_this3);
        _this3.getContent = _this3.getContent.bind(_this3);
        return _this3;
    }

    _createClass(Section, [{
        key: "getContent",
        value: function getContent() {
            return "Not done";
        }
    }, {
        key: "showContent",
        value: function showContent() {
            var content = React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    this.state.name
                ),
                this.getContent()
            );
            ReactDOM.render(content, document.getElementById("content"));
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "a",
                { href: "#", onClick: this.showContent },
                this.state.name
            );
        }
    }]);

    return Section;
}(React.Component);
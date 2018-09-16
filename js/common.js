var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = function (_React$Component) {
    _inherits(Template, _React$Component);

    function Template(props) {
        _classCallCheck(this, Template);

        var _this = _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).call(this, props));

        var sections = {};

        for (var i in _this.props.children) {
            var group = _this.props.children[i];
            if (group.props.children.length === undefined) {
                var section = group.props.children;
                var name = section.type.name;
                sections[name] = section;
            } else {
                for (var j in group.props.children) {
                    var _section = group.props.children[j];
                    var _name = _section.type.name;
                    sections[_name] = _section;
                }
            }
        }

        _this.state = {
            sections: sections
        };
        return _this;
    }

    _createClass(Template, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var i = window.location.hash.indexOf('#');
            var hash = window.location.hash.slice(i + 1);
            this.setContent(hash);
            // handle browser back/forward
            window.onhashchange = function (e) {
                var i = e.newURL.indexOf('#');
                var hash = e.newURL.slice(i + 1);
                _this2.setContent(hash);
            };
        }
    }, {
        key: 'setContent',
        value: function setContent(hash) {
            var section = this.state.sections[hash];
            if (section) {
                var name = section.type.prototype.displayName();
                var content = React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        'h2',
                        null,
                        name
                    ),
                    section
                );
                ReactDOM.render(content, document.getElementById("content"));
            } else {
                ReactDOM.render("", document.getElementById("content"));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var name = this.props.name;
            var children = [];
            for (var i in this.props.children) {
                children.push(this.props.children[i]);
            }

            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    'div',
                    { className: 'heading' },
                    React.createElement(
                        'h1',
                        null,
                        React.createElement(
                            'a',
                            { href: './index.html' },
                            'cp-lockdown'
                        ),
                        ' > ',
                        name
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'toc', id: 'toc' },
                    children
                ),
                React.createElement('div', { className: 'content', id: 'content' })
            );
        }
    }]);

    return Template;
}(React.Component);

var Group = function (_React$Component2) {
    _inherits(Group, _React$Component2);

    function Group(props) {
        _classCallCheck(this, Group);

        var _this3 = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

        _this3.state = {};
        if (props.children.length === undefined) {
            _this3.state[0] = "__:__";
        } else {
            for (var i in props.children) {
                _this3.state[i] = "__:__";
            }
        }

        _this3.updateStatus = _this3.updateStatus.bind(_this3);
        return _this3;
    }

    _createClass(Group, [{
        key: 'updateStatus',
        value: function updateStatus(event, i) {
            event.preventDefault();
            if (this.state[i] == "__:__") {
                var date = new Date();
                // pad numbers to have 2 digits
                var timeStr = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
                this.setState(_defineProperty({}, i, timeStr));
            } else {
                this.setState(_defineProperty({}, i, "__:__"));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var name = this.props.name;
            var children = [];
            if (this.props.children.length === undefined) {
                var section = this.props.children;
                children.push(React.createElement(
                    'li',
                    { key: '0' },
                    React.createElement('input', { type: 'checkbox', onClick: function onClick(e) {
                            return _this4.updateStatus(e, 0);
                        } }),
                    React.createElement(
                        'span',
                        null,
                        this.state[0]
                    ),
                    '\xA0',
                    section.type.prototype.getLink()
                ));
            } else {
                var _loop = function _loop(i) {
                    var section = _this4.props.children[i];
                    children.push(React.createElement(
                        'li',
                        { key: i },
                        React.createElement('input', { type: 'checkbox', onClick: function onClick(e) {
                                return _this4.updateStatus(e, i);
                            } }),
                        React.createElement(
                            'span',
                            null,
                            _this4.state[i]
                        ),
                        '\xA0',
                        section.type.prototype.getLink()
                    ));
                };

                for (var i in this.props.children) {
                    _loop(i);
                }
            }

            return React.createElement(
                React.Fragment,
                null,
                name,
                React.createElement(
                    'ul',
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

        return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));
    }

    return Section;
}(React.Component);

var SectionLink = function (_React$Component4) {
    _inherits(SectionLink, _React$Component4);

    function SectionLink(props) {
        _classCallCheck(this, SectionLink);

        return _possibleConstructorReturn(this, (SectionLink.__proto__ || Object.getPrototypeOf(SectionLink)).call(this, props));
    }

    _createClass(SectionLink, [{
        key: 'render',
        value: function render() {
            var section = this.props.section;
            var label = section.displayName();
            var link = "#" + section.constructor.name;

            return React.createElement(
                'a',
                { href: link },
                label
            );
        }
    }]);

    return SectionLink;
}(React.Component);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocalUsersAndGroups = function (_Section) {
    _inherits(LocalUsersAndGroups, _Section);

    function LocalUsersAndGroups() {
        _classCallCheck(this, LocalUsersAndGroups);

        var _this = _possibleConstructorReturn(this, (LocalUsersAndGroups.__proto__ || Object.getPrototypeOf(LocalUsersAndGroups)).call(this));

        _this.state.name = "Local Users and Groups";
        return _this;
    }

    _createClass(LocalUsersAndGroups, [{
        key: "getContent",
        value: function getContent() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Go to ",
                        React.createElement(
                            "a",
                            { href: "#Administrative Tools" },
                            "Administrative Tools"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Computer Management"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "System Tools"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Users and Groups"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "h4",
                    null,
                    "Users"
                ),
                React.createElement(
                    "span",
                    null,
                    "For each user:"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Right click on user, select ",
                        React.createElement(
                            "strong",
                            null,
                            "Properties"
                        )
                    ),
                    "Under ",
                    React.createElement(
                        "strong",
                        null,
                        "General"
                    ),
                    " tab",
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Disable all users not required by readme"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Set passwords to expire for all users"
                        )
                    ),
                    "Under ",
                    React.createElement(
                        "strong",
                        null,
                        "Member Of"
                    ),
                    " tab",
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Add user to necessary groups, e.g. Administrators"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Remove user from unnecessary groups"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Right click on user, select ",
                        React.createElement(
                            "b",
                            null,
                            "Set Password"
                        )
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Make sure password meets the ",
                            React.createElement(
                                "a",
                                { href: "#Password Policy" },
                                "Password Policy"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Write down user and password for reference"
                        )
                    )
                ),
                React.createElement(
                    "span",
                    null,
                    "For the Administrator user:"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Right click on Adminstrator user, select ",
                        React.createElement(
                            "strong",
                            null,
                            "Rename"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Change name to something else"
                    )
                ),
                React.createElement(
                    "span",
                    null,
                    "For the Guest user:"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Right click on Guest user, select ",
                        React.createElement(
                            "strong",
                            null,
                            "Properties"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "[x] Account is disabled"
                    )
                ),
                React.createElement(
                    "h4",
                    null,
                    "Groups"
                ),
                React.createElement(
                    "span",
                    null,
                    "Check the users in all of the groups.These are the default entries."
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Administrators",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "only the users required"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Backup Operators",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Cryptographic Operators",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Distributed COM Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Event Log Readers",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Guests",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Guest"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "IIS_IUSRS",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "NT AUTHORITY\\IUSR (S-1-5-17)"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Network Configuration Operators",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Performance Log Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Performance Monitor Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Power Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Remote Desktop Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries; unless required by readme"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Replicator",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "NT AUTHORITY\\Authenticated Users(S-1-5-11)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "NT AUTHORITY\\INTERACTIVE (S-1-5-4)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "only the users necessary on the system"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LocalUsersAndGroups;
}(Section);

var AutomaticLogin = function (_Section2) {
    _inherits(AutomaticLogin, _Section2);

    function AutomaticLogin() {
        _classCallCheck(this, AutomaticLogin);

        return _possibleConstructorReturn(this, (AutomaticLogin.__proto__ || Object.getPrototypeOf(AutomaticLogin)).apply(this, arguments));
    }

    _createClass(AutomaticLogin, [{
        key: "getContent",
        value: function getContent() {
            return "999";
        }
    }]);

    return AutomaticLogin;
}(Section);
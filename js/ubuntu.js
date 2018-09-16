var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ubuntu = function (_React$Component) {
    _inherits(Ubuntu, _React$Component);

    function Ubuntu() {
        _classCallCheck(this, Ubuntu);

        return _possibleConstructorReturn(this, (Ubuntu.__proto__ || Object.getPrototypeOf(Ubuntu)).apply(this, arguments));
    }

    _createClass(Ubuntu, [{
        key: "render",
        value: function render() {
            return React.createElement(
                Template,
                { name: "Ubuntu" },
                React.createElement(
                    Group,
                    { name: "Users and Groups" },
                    React.createElement(Users, { version: "ubuntu" }),
                    React.createElement(Groups, { version: "ubuntu" }),
                    React.createElement(GuestAccess, { version: "ubuntu" }),
                    React.createElement(Sudo, { version: "ubuntu" })
                ),
                React.createElement(
                    Group,
                    { name: "Networking" },
                    React.createElement(Firewall, { version: "ubuntu" }),
                    React.createElement(NetworkConnections, { version: "ubuntu" })
                ),
                React.createElement(
                    Group,
                    { name: "Installation Check" },
                    React.createElement(Applications, { version: "ubuntu" }),
                    React.createElement(Services, { version: "ubuntu" }),
                    React.createElement(Updates, { version: "ubuntu" })
                ),
                React.createElement(
                    Group,
                    { name: "Scans" },
                    React.createElement(Chkrootkit, { version: "ubuntu" }),
                    React.createElement(Rkhunter, { version: "ubuntu" }),
                    React.createElement(Lynis, { version: "ubuntu" })
                ),
                React.createElement(
                    Group,
                    { name: "Filesystem" },
                    React.createElement(FindUnauthorizedFiles, { version: "ubuntu" }),
                    React.createElement(HostsFile, { version: "ubuntu" }),
                    React.createElement(FilesystemPermissions, { version: "ubuntu" })
                ),
                React.createElement(
                    Group,
                    { name: "Configuration" },
                    React.createElement(Auditd, { version: "ubuntu" }),
                    React.createElement(BootupManager, { version: "ubuntu" }),
                    React.createElement(Cron, { version: "ubuntu" }),
                    React.createElement(LibpamCracklib, { version: "ubuntu" }),
                    React.createElement(PasswordPolicy, { version: "ubuntu" }),
                    React.createElement(AccountLockoutPolicy, { version: "ubuntu" })
                ),
                React.createElement(
                    Group,
                    { name: "Logs" },
                    React.createElement(SystemLog, { version: "ubuntu" })
                ),
                React.createElement(
                    Group,
                    { name: "References" },
                    React.createElement(DefaultGroups, { version: "ubuntu" }),
                    React.createElement(DefaultUsers, { version: "ubuntu" }),
                    React.createElement(OpenFile, { version: "ubuntu" }),
                    React.createElement(Terminal, { version: "ubuntu" }),
                    React.createElement(SystemSettings, { version: "ubuntu" })
                )
            );
        }
    }]);

    return Ubuntu;
}(React.Component);

ReactDOM.render(React.createElement(Ubuntu, null), document.getElementById("app"));
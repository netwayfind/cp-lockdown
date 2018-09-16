var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ubuntu1604 = function (_React$Component) {
    _inherits(Ubuntu1604, _React$Component);

    function Ubuntu1604() {
        _classCallCheck(this, Ubuntu1604);

        return _possibleConstructorReturn(this, (Ubuntu1604.__proto__ || Object.getPrototypeOf(Ubuntu1604)).apply(this, arguments));
    }

    _createClass(Ubuntu1604, [{
        key: "render",
        value: function render() {
            return React.createElement(
                Template,
                { name: "Ubuntu 16.04+" },
                React.createElement(
                    Group,
                    { name: "Users and Groups" },
                    React.createElement(Users, { version: "ubuntu16.04" }),
                    React.createElement(Groups, { version: "ubuntu16.04" }),
                    React.createElement(GuestAccess, { version: "ubuntu16.04" }),
                    React.createElement(Sudo, { version: "ubuntu16.04" })
                ),
                React.createElement(
                    Group,
                    { name: "Networking" },
                    React.createElement(Firewall, { version: "ubuntu16.04" }),
                    React.createElement(NetworkConnections, { version: "ubuntu16.04" })
                ),
                React.createElement(
                    Group,
                    { name: "Installation Check" },
                    React.createElement(Applications, { version: "ubuntu16.04" }),
                    React.createElement(Services, { version: "ubuntu16.04" }),
                    React.createElement(Updates, { version: "ubuntu16.04" })
                ),
                React.createElement(
                    Group,
                    { name: "Scans" },
                    React.createElement(Chkrootkit, { version: "ubuntu16.04" }),
                    React.createElement(Rkhunter, { version: "ubuntu16.04" })
                ),
                React.createElement(
                    Group,
                    { name: "Filesystem" },
                    React.createElement(FindUnauthorizedFiles, { version: "ubuntu16.04" }),
                    React.createElement(HostsFile, { version: "ubuntu16.04" }),
                    React.createElement(FilesystemPermissions, { version: "ubuntu16.04" })
                ),
                React.createElement(
                    Group,
                    { name: "Configuration" },
                    React.createElement(Auditd, { version: "ubuntu16.04" }),
                    React.createElement(BootupManager, { version: "ubuntu16.04" }),
                    React.createElement(Cron, { version: "ubuntu16.04" }),
                    React.createElement(LibpamCracklib, { version: "ubuntu16.04" }),
                    React.createElement(PasswordPolicy, { version: "ubuntu16.04" }),
                    React.createElement(AccountLockoutPolicy, { version: "ubuntu16.04" })
                ),
                React.createElement(
                    Group,
                    { name: "Logs" },
                    React.createElement(SystemLog, { version: "ubuntu16.04" })
                ),
                React.createElement(
                    Group,
                    { name: "References" },
                    React.createElement(DefaultGroups, { version: "ubuntu16.04" }),
                    React.createElement(DefaultUsers, { version: "ubuntu16.04" }),
                    React.createElement(OpenFile, { version: "ubuntu16.04" }),
                    React.createElement(Terminal, { version: "ubuntu16.04" }),
                    React.createElement(SystemSettings, { version: "ubuntu16.04" })
                )
            );
        }
    }]);

    return Ubuntu1604;
}(React.Component);

ReactDOM.render(React.createElement(Ubuntu1604, null), document.getElementById("app"));
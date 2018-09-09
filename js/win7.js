var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Windows7 = function (_React$Component) {
    _inherits(Windows7, _React$Component);

    function Windows7() {
        _classCallCheck(this, Windows7);

        return _possibleConstructorReturn(this, (Windows7.__proto__ || Object.getPrototypeOf(Windows7)).apply(this, arguments));
    }

    _createClass(Windows7, [{
        key: "render",
        value: function render() {
            return React.createElement(
                Template,
                { name: "Windows 7" },
                React.createElement(
                    Group,
                    { name: "Users and Groups" },
                    React.createElement(LocalUsersAndGroups, null),
                    React.createElement(AutomaticLogin, null)
                ),
                React.createElement(
                    Group,
                    { name: "Installation Cleanup" },
                    React.createElement(Section, { name: "Add/Remove Programs" }),
                    React.createElement(Section, { name: "Windows Features" }),
                    React.createElement(Section, { name: "Startup Programs" }),
                    React.createElement(Section, { name: "Services" }),
                    React.createElement(Section, { name: "Task Scheduler" }),
                    React.createElement(Section, { name: "Internet Explorer" }),
                    React.createElement(Section, { name: "Disk Cleanup" })
                ),
                React.createElement(
                    Group,
                    { name: "Network Resources" },
                    React.createElement(Section, { name: "Internet Connection Sharing" }),
                    React.createElement(Section, { name: "Shared Folders" }),
                    React.createElement(Section, { name: "CrowdInspect" })
                ),
                React.createElement(
                    Group,
                    { name: "Remote Access" },
                    React.createElement(Section, { name: "Remote Assistance and Remote Desktop" }),
                    React.createElement(Section, { name: "Windows Firewall" })
                ),
                React.createElement(
                    Group,
                    { name: "Policies" },
                    React.createElement(Section, { name: "Password Policy" }),
                    React.createElement(Section, { name: "Account Lockout Policy" }),
                    React.createElement(Section, { name: "Audit Policy" }),
                    React.createElement(Section, { name: "User Rights Assignment" }),
                    React.createElement(Section, { name: "Security Options" }),
                    React.createElement(Section, { name: "Advanced Audit Policy Configuration" }),
                    React.createElement(Section, { name: "Local Group Policy Editor" })
                ),
                React.createElement(
                    Group,
                    { name: "Scans" },
                    React.createElement(Section, { name: "Microsoft Baseline Security Analyzer" }),
                    React.createElement(Section, { name: "Microsoft Security Essentials" }),
                    React.createElement(Section, { name: "Anti-Malware Tools" })
                ),
                React.createElement(
                    Group,
                    { name: "Filesystem" },
                    React.createElement(Section, { name: "Show Hidden Files and Folders" }),
                    React.createElement(Section, { name: "Find Unauthorized Files" }),
                    React.createElement(Section, { name: "Users Folder" }),
                    React.createElement(Section, { name: "Program Files" }),
                    React.createElement(Section, { name: "Program Files (x86)" }),
                    React.createElement(Section, { name: "Hosts file" })
                ),
                React.createElement(
                    Group,
                    { name: "Updates" },
                    React.createElement(Section, { name: "Automatic Updates" }),
                    React.createElement(Section, { name: "Service Packs" }),
                    React.createElement(Section, { name: "Windows Update" })
                ),
                React.createElement(
                    Group,
                    { name: "Logs" },
                    React.createElement(Section, { name: "Event Viewer" })
                ),
                React.createElement(
                    Group,
                    { name: "Reference" },
                    React.createElement(Section, { name: "Administrative Tools" }),
                    React.createElement(Section, { name: "C:\\ Drive" }),
                    React.createElement(Section, { name: "Command Prompt" }),
                    React.createElement(Section, { name: "Control Panel" }),
                    React.createElement(Section, { name: "Processes" }),
                    React.createElement(Section, { name: "Task Manager" })
                )
            );
        }
    }]);

    return Windows7;
}(React.Component);

ReactDOM.render(React.createElement(Windows7, null), document.getElementById("app"));
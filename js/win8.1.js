var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Windows8Dot1 = function (_React$Component) {
    _inherits(Windows8Dot1, _React$Component);

    function Windows8Dot1() {
        _classCallCheck(this, Windows8Dot1);

        return _possibleConstructorReturn(this, (Windows8Dot1.__proto__ || Object.getPrototypeOf(Windows8Dot1)).apply(this, arguments));
    }

    _createClass(Windows8Dot1, [{
        key: "render",
        value: function render() {
            return React.createElement(
                Template,
                { name: "Windows 8.1" },
                React.createElement(
                    Group,
                    { name: "Users and Groups" },
                    React.createElement(LocalUsersAndGroups, { version: "win8.1" }),
                    React.createElement(AutomaticLogin, { version: "win8.1" })
                ),
                React.createElement(
                    Group,
                    { name: "Installation Cleanup" },
                    React.createElement(AddRemovePrograms, { version: "win8.1" }),
                    React.createElement(WindowsFeatures, { version: "win8.1" }),
                    React.createElement(StartupPrograms, { version: "win8.1" }),
                    React.createElement(Services, { version: "win8.1" }),
                    React.createElement(TaskScheduler, { version: "win8.1" }),
                    React.createElement(DiskCleanup, { version: "win8.1" })
                ),
                React.createElement(
                    Group,
                    { name: "Networking" },
                    React.createElement(InternetConnectionSharing, { version: "win8.1" }),
                    React.createElement(RemoteAssistanceAndRemoteDesktop, { version: "win8.1" }),
                    React.createElement(WindowsFirewall, { version: "win8.1" }),
                    React.createElement(SharedFolders, { version: "win8.1" }),
                    React.createElement(CrowdInspect, { version: "win8.1" })
                ),
                React.createElement(
                    Group,
                    { name: "Policies" },
                    React.createElement(PasswordPolicy, { version: "win8.1" }),
                    React.createElement(AccountLockoutPolicy, { version: "win8.1" }),
                    React.createElement(AuditPolicy, { version: "win8.1" }),
                    React.createElement(UserRightsAssignment, { version: "win8.1" }),
                    React.createElement(SecurityOptions, { version: "win8.1" }),
                    React.createElement(AdvancedAuditPolicyConfiguration, { version: "win8.1" }),
                    React.createElement(LocalGroupPolicyEditor, { version: "win8.1" })
                ),
                React.createElement(
                    Group,
                    { name: "Scans" },
                    React.createElement(MicrosoftBaselineSecurityAnalyzer, { version: "win8.1" }),
                    React.createElement(MicrosoftSecurityEssentials, { version: "win8.1" }),
                    React.createElement(AntiMalwareTools, { version: "win8.1" })
                ),
                React.createElement(
                    Group,
                    { name: "Filesystem" },
                    React.createElement(ShowHiddenFilesAndFolders, { version: "win8.1" }),
                    React.createElement(FindUnauthorizedFiles, { version: "win8.1" }),
                    React.createElement(UsersFolder, { version: "win8.1" }),
                    React.createElement(ProgramFiles, { version: "win8.1" }),
                    React.createElement(ProgramFilesx86, { version: "win8.1" }),
                    React.createElement(HostsFile, { version: "win8.1" })
                ),
                React.createElement(
                    Group,
                    { name: "Updates" },
                    React.createElement(ServicePacks, { version: "win8.1" }),
                    React.createElement(AutomaticUpdates, { version: "win8.1" }),
                    React.createElement(WindowsUpdate, { version: "win8.1" })
                ),
                React.createElement(
                    Group,
                    { name: "Configuration" },
                    React.createElement(InternetExplorer, { version: "win8.1" })
                ),
                React.createElement(
                    Group,
                    { name: "Logs" },
                    React.createElement(EventViewer, { version: "win8.1" })
                ),
                React.createElement(
                    Group,
                    { name: "Reference" },
                    React.createElement(AdministrativeTools, { version: "win8.1" }),
                    React.createElement(CDrive, { version: "win8.1" }),
                    React.createElement(CommandPrompt, { version: "win8.1" }),
                    React.createElement(ControlPanel, { version: "win8.1" }),
                    React.createElement(Processes, { version: "win8.1" }),
                    React.createElement(TaskManager, { version: "win8.1" })
                )
            );
        }
    }]);

    return Windows8Dot1;
}(React.Component);

ReactDOM.render(React.createElement(Windows8Dot1, null), document.getElementById("app"));
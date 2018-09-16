var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WindowsServer2008R2 = function (_React$Component) {
    _inherits(WindowsServer2008R2, _React$Component);

    function WindowsServer2008R2() {
        _classCallCheck(this, WindowsServer2008R2);

        return _possibleConstructorReturn(this, (WindowsServer2008R2.__proto__ || Object.getPrototypeOf(WindowsServer2008R2)).apply(this, arguments));
    }

    _createClass(WindowsServer2008R2, [{
        key: "render",
        value: function render() {
            return React.createElement(
                Template,
                { name: "Windows Server 2008 R2" },
                React.createElement(
                    Group,
                    { name: "Users and Groups" },
                    React.createElement(LocalUsersAndGroups, { version: "win2008r2" }),
                    React.createElement(AutomaticLogin, { version: "win2008r2" })
                ),
                React.createElement(
                    Group,
                    { name: "Installation Cleanup" },
                    React.createElement(AddRemovePrograms, { version: "win2008r2" }),
                    React.createElement(WindowsFeatures, { version: "win2008r2" }),
                    React.createElement(StartupPrograms, { version: "win2008r2" }),
                    React.createElement(Services, { version: "win2008r2" }),
                    React.createElement(TaskScheduler, { version: "win2008r2" }),
                    React.createElement(DiskCleanup, { version: "win2008r2" })
                ),
                React.createElement(
                    Group,
                    { name: "Networking" },
                    React.createElement(InternetConnectionSharing, { version: "win2008r2" }),
                    React.createElement(RemoteAssistanceAndRemoteDesktop, { version: "win2008r2" }),
                    React.createElement(WindowsFirewall, { version: "win2008r2" }),
                    React.createElement(SharedFolders, { version: "win2008r2" }),
                    React.createElement(CrowdInspect, { version: "win2008r2" })
                ),
                React.createElement(
                    Group,
                    { name: "Policies" },
                    React.createElement(PasswordPolicy, { version: "win2008r2" }),
                    React.createElement(AccountLockoutPolicy, { version: "win2008r2" }),
                    React.createElement(AuditPolicy, { version: "win2008r2" }),
                    React.createElement(UserRightsAssignment, { version: "win2008r2" }),
                    React.createElement(SecurityOptions, { version: "win2008r2" }),
                    React.createElement(AdvancedAuditPolicyConfiguration, { version: "win2008r2" }),
                    React.createElement(LocalGroupPolicyEditor, { version: "win2008r2" })
                ),
                React.createElement(
                    Group,
                    { name: "Scans" },
                    React.createElement(MicrosoftBaselineSecurityAnalyzer, { version: "win2008r2" }),
                    React.createElement(MicrosoftSecurityEssentials, { version: "win2008r2" }),
                    React.createElement(AntiMalwareTools, { version: "win2008r2" })
                ),
                React.createElement(
                    Group,
                    { name: "Filesystem" },
                    React.createElement(ShowHiddenFilesAndFolders, { version: "win2008r2" }),
                    React.createElement(FindUnauthorizedFiles, { version: "win2008r2" }),
                    React.createElement(UsersFolder, { version: "win2008r2" }),
                    React.createElement(ProgramFiles, { version: "win2008r2" }),
                    React.createElement(ProgramFilesx86, { version: "win2008r2" }),
                    React.createElement(HostsFile, { version: "win2008r2" })
                ),
                React.createElement(
                    Group,
                    { name: "Updates" },
                    React.createElement(ServicePacks, { version: "win2008r2" }),
                    React.createElement(AutomaticUpdates, { version: "win2008r2" }),
                    React.createElement(WindowsUpdate, { version: "win2008r2" })
                ),
                React.createElement(
                    Group,
                    { name: "Configuration" },
                    React.createElement(InternetExplorer, { version: "win2008r2" }),
                    React.createElement(WindowsServerRoles, { version: "win2008r2" })
                ),
                React.createElement(
                    Group,
                    { name: "Logs" },
                    React.createElement(EventViewer, { version: "win2008r2" })
                ),
                React.createElement(
                    Group,
                    { name: "Reference" },
                    React.createElement(AdministrativeTools, { version: "win2008r2" }),
                    React.createElement(CDrive, { version: "win2008r2" }),
                    React.createElement(CommandPrompt, { version: "win2008r2" }),
                    React.createElement(ControlPanel, { version: "win2008r2" }),
                    React.createElement(Processes, { version: "win2008r2" }),
                    React.createElement(TaskManager, { version: "win2008r2" })
                )
            );
        }
    }]);

    return WindowsServer2008R2;
}(React.Component);

ReactDOM.render(React.createElement(WindowsServer2008R2, null), document.getElementById("app"));
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
                    React.createElement(AddRemovePrograms, null),
                    React.createElement(WindowsFeatures, null),
                    React.createElement(StartupPrograms, null),
                    React.createElement(Services, null),
                    React.createElement(TaskScheduler, null),
                    React.createElement(InternetExplorer, null),
                    React.createElement(DiskCleanup, null)
                ),
                React.createElement(
                    Group,
                    { name: "Network Resources" },
                    React.createElement(InternetConnectionSharing, null),
                    React.createElement(SharedFolders, null),
                    React.createElement(CrowdInspect, null)
                ),
                React.createElement(
                    Group,
                    { name: "Remote Access" },
                    React.createElement(RemoteAssistanceAndRemoteDesktop, null),
                    React.createElement(WindowsFirewall, null)
                ),
                React.createElement(
                    Group,
                    { name: "Policies" },
                    React.createElement(PasswordPolicy, null),
                    React.createElement(AccountLockoutPolicy, null),
                    React.createElement(AuditPolicy, null),
                    React.createElement(UserRightsAssignment, null),
                    React.createElement(SecurityOptions, null),
                    React.createElement(AdvancedAuditPolicyConfiguration, null),
                    React.createElement(LocalGroupPolicyEditor, null)
                ),
                React.createElement(
                    Group,
                    { name: "Scans" },
                    React.createElement(MicrosoftBaselineSecurityAnalyzer, null),
                    React.createElement(MicrosoftSecurityEssentials, null),
                    React.createElement(AntiMalwareTools, null)
                ),
                React.createElement(
                    Group,
                    { name: "Filesystem" },
                    React.createElement(ShowHiddenFilesAndFolders, null),
                    React.createElement(FindUnauthorizedFiles, null),
                    React.createElement(UsersFolder, null),
                    React.createElement(ProgramFiles, null),
                    React.createElement(ProgramFilesx86, null),
                    React.createElement(HostsFile, null)
                ),
                React.createElement(
                    Group,
                    { name: "Updates" },
                    React.createElement(AutomaticUpdates, null),
                    React.createElement(ServicePacks, null),
                    React.createElement(WindowsUpdate, null)
                ),
                React.createElement(
                    Group,
                    { name: "Logs" },
                    React.createElement(EventViewer, null)
                ),
                React.createElement(
                    Group,
                    { name: "Reference" },
                    React.createElement(AdministrativeTools, null),
                    React.createElement(CDrive, null),
                    React.createElement(CommandPrompt, null),
                    React.createElement(ControlPanel, null),
                    React.createElement(Processes, null),
                    React.createElement(TaskManager, null)
                )
            );
        }
    }]);

    return Windows7;
}(React.Component);

ReactDOM.render(React.createElement(Windows7, null), document.getElementById("app"));
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Windows10 = function (_React$Component) {
    _inherits(Windows10, _React$Component);

    function Windows10() {
        _classCallCheck(this, Windows10);

        return _possibleConstructorReturn(this, (Windows10.__proto__ || Object.getPrototypeOf(Windows10)).apply(this, arguments));
    }

    _createClass(Windows10, [{
        key: "render",
        value: function render() {
            return React.createElement(
                Template,
                { name: "Windows 10" },
                React.createElement(
                    Group,
                    { name: "Users and Groups" },
                    React.createElement(LocalUsersAndGroups, { version: "win10" }),
                    React.createElement(AutomaticLogin, { version: "win10" })
                ),
                React.createElement(
                    Group,
                    { name: "Installation Cleanup" },
                    React.createElement(AddRemovePrograms, { version: "win10" }),
                    React.createElement(WindowsFeatures, { version: "win10" }),
                    React.createElement(StartupPrograms, { version: "win10" }),
                    React.createElement(Services, { version: "win10" }),
                    React.createElement(TaskScheduler, { version: "win10" }),
                    React.createElement(DiskCleanup, { version: "win10" })
                ),
                React.createElement(
                    Group,
                    { name: "Networking" },
                    React.createElement(InternetConnectionSharing, { version: "win10" }),
                    React.createElement(RemoteAssistanceAndRemoteDesktop, { version: "win10" }),
                    React.createElement(WindowsFirewall, { version: "win10" }),
                    React.createElement(SharedFolders, { version: "win10" }),
                    React.createElement(CrowdInspect, { version: "win10" })
                ),
                React.createElement(
                    Group,
                    { name: "Policies" },
                    React.createElement(PasswordPolicy, { version: "win10" }),
                    React.createElement(AccountLockoutPolicy, { version: "win10" }),
                    React.createElement(AuditPolicy, { version: "win10" }),
                    React.createElement(UserRightsAssignment, { version: "win10" }),
                    React.createElement(SecurityOptions, { version: "win10" }),
                    React.createElement(AdvancedAuditPolicyConfiguration, { version: "win10" }),
                    React.createElement(LocalGroupPolicyEditor, { version: "win10" })
                ),
                React.createElement(
                    Group,
                    { name: "Scans" },
                    React.createElement(MicrosoftBaselineSecurityAnalyzer, { version: "win10" }),
                    React.createElement(MicrosoftSecurityEssentials, { version: "win10" }),
                    React.createElement(AntiMalwareTools, { version: "win10" })
                ),
                React.createElement(
                    Group,
                    { name: "Filesystem" },
                    React.createElement(ShowHiddenFilesAndFolders, { version: "win10" }),
                    React.createElement(FindUnauthorizedFiles, { version: "win10" }),
                    React.createElement(UsersFolder, { version: "win10" }),
                    React.createElement(ProgramFiles, { version: "win10" }),
                    React.createElement(ProgramFilesx86, { version: "win10" }),
                    React.createElement(HostsFile, { version: "win10" })
                ),
                React.createElement(
                    Group,
                    { name: "Updates" },
                    React.createElement(ServicePacks, { version: "win10" }),
                    React.createElement(AutomaticUpdates, { version: "win10" }),
                    React.createElement(WindowsUpdate, { version: "win10" })
                ),
                React.createElement(
                    Group,
                    { name: "Configuration" },
                    React.createElement(InternetExplorer, { version: "win10" })
                ),
                React.createElement(
                    Group,
                    { name: "Logs" },
                    React.createElement(EventViewer, { version: "win10" })
                ),
                React.createElement(
                    Group,
                    { name: "Reference" },
                    React.createElement(AdministrativeTools, { version: "win10" }),
                    React.createElement(CDrive, { version: "win10" }),
                    React.createElement(CommandPrompt, { version: "win10" }),
                    React.createElement(ControlPanel, { version: "win10" }),
                    React.createElement(Processes, { version: "win10" }),
                    React.createElement(TaskManager, { version: "win10" }),
                    React.createElement(WindowsSettings, { version: "win10" })
                )
            );
        }
    }]);

    return Windows10;
}(React.Component);

ReactDOM.render(React.createElement(Windows10, null), document.getElementById("app"));
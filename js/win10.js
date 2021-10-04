class Windows10 extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Template, {
      name: "Windows 10"
    }, /*#__PURE__*/React.createElement(Group, {
      name: "Users and Groups"
    }, /*#__PURE__*/React.createElement(LocalUsersAndGroups, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(AutomaticLogin, {
      version: "win10"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Installation Cleanup"
    }, /*#__PURE__*/React.createElement(AddRemovePrograms, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(WindowsFeatures, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(StartupPrograms, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(Services, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(TaskScheduler, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(DiskCleanup, {
      version: "win10"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Networking"
    }, /*#__PURE__*/React.createElement(InternetConnectionSharing, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(RemoteAssistanceAndRemoteDesktop, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(WindowsFirewall, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(SharedFolders, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(CrowdInspect, {
      version: "win10"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Policies"
    }, /*#__PURE__*/React.createElement(PasswordPolicy, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(AccountLockoutPolicy, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(AuditPolicy, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(UserRightsAssignment, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(SecurityOptions, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(AdvancedAuditPolicyConfiguration, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(LocalGroupPolicyEditor, {
      version: "win10"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Scans"
    }, /*#__PURE__*/React.createElement(MicrosoftBaselineSecurityAnalyzer, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(WindowsDefender, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(AntiMalwareTools, {
      version: "win10"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Filesystem"
    }, /*#__PURE__*/React.createElement(ShowHiddenFilesAndFolders, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(FindUnauthorizedFiles, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(UsersFolder, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(ProgramFiles, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(ProgramFilesx86, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(HostsFile, {
      version: "win10"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Updates"
    }, /*#__PURE__*/React.createElement(ServicePacks, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(AutomaticUpdates, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(WindowsUpdate, {
      version: "win10"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Configuration"
    }, /*#__PURE__*/React.createElement(InternetExplorer, {
      version: "win10"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Logs"
    }, /*#__PURE__*/React.createElement(EventViewer, {
      version: "win10"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Reference"
    }, /*#__PURE__*/React.createElement(AdministrativeTools, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(CDrive, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(CommandPrompt, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(ControlPanel, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(Processes, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(TaskManager, {
      version: "win10"
    }), /*#__PURE__*/React.createElement(WindowsSettings, {
      version: "win10"
    })));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Windows10, null), document.getElementById("app"));
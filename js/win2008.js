class WindowsServer2008 extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Template, {
      name: "Windows Server 2008"
    }, /*#__PURE__*/React.createElement(Group, {
      name: "Users and Groups"
    }, /*#__PURE__*/React.createElement(LocalUsersAndGroups, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(AutomaticLogin, {
      version: "win2008"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Installation Cleanup"
    }, /*#__PURE__*/React.createElement(AddRemovePrograms, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(WindowsFeatures, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(StartupPrograms, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(Services, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(TaskScheduler, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(DiskCleanup, {
      version: "win2008"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Networking"
    }, /*#__PURE__*/React.createElement(InternetConnectionSharing, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(RemoteAssistanceAndRemoteDesktop, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(WindowsFirewall, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(SharedFolders, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(CrowdInspect, {
      version: "win2008"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Policies"
    }, /*#__PURE__*/React.createElement(PasswordPolicy, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(AccountLockoutPolicy, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(AuditPolicy, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(UserRightsAssignment, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(SecurityOptions, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(AdvancedAuditPolicyConfiguration, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(LocalGroupPolicyEditor, {
      version: "win2008"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Scans"
    }, /*#__PURE__*/React.createElement(MicrosoftBaselineSecurityAnalyzer, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(MicrosoftSafetyScanner, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(AntiMalwareTools, {
      version: "win2008"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Filesystem"
    }, /*#__PURE__*/React.createElement(ShowHiddenFilesAndFolders, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(FindUnauthorizedFiles, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(UsersFolder, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(ProgramFiles, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(ProgramFilesx86, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(HostsFile, {
      version: "win2008"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Updates"
    }, /*#__PURE__*/React.createElement(ServicePacks, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(AutomaticUpdates, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(WindowsUpdate, {
      version: "win2008"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Configuration"
    }, /*#__PURE__*/React.createElement(InternetExplorer, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(WindowsServerRoles, {
      version: "win2008"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Logs"
    }, /*#__PURE__*/React.createElement(EventViewer, {
      version: "win2008"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Reference"
    }, /*#__PURE__*/React.createElement(AdministrativeTools, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(CDrive, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(CommandPrompt, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(ControlPanel, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(Processes, {
      version: "win2008"
    }), /*#__PURE__*/React.createElement(TaskManager, {
      version: "win2008"
    })));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(WindowsServer2008, null), document.getElementById("app"));
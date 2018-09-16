class WindowsServer2016 extends React.Component {
  render() {
    return React.createElement(Template, {
      name: "Windows Server 2016"
    }, React.createElement(Group, {
      name: "Users and Groups"
    }, React.createElement(LocalUsersAndGroups, {
      version: "win2016"
    }), React.createElement(AutomaticLogin, {
      version: "win2016"
    })), React.createElement(Group, {
      name: "Installation Cleanup"
    }, React.createElement(AddRemovePrograms, {
      version: "win2016"
    }), React.createElement(WindowsFeatures, {
      version: "win2016"
    }), React.createElement(StartupPrograms, {
      version: "win2016"
    }), React.createElement(Services, {
      version: "win2016"
    }), React.createElement(TaskScheduler, {
      version: "win2016"
    }), React.createElement(DiskCleanup, {
      version: "win2016"
    })), React.createElement(Group, {
      name: "Networking"
    }, React.createElement(InternetConnectionSharing, {
      version: "win2016"
    }), React.createElement(RemoteAssistanceAndRemoteDesktop, {
      version: "win2016"
    }), React.createElement(WindowsFirewall, {
      version: "win2016"
    }), React.createElement(SharedFolders, {
      version: "win2016"
    }), React.createElement(CrowdInspect, {
      version: "win2016"
    })), React.createElement(Group, {
      name: "Policies"
    }, React.createElement(PasswordPolicy, {
      version: "win2016"
    }), React.createElement(AccountLockoutPolicy, {
      version: "win2016"
    }), React.createElement(AuditPolicy, {
      version: "win2016"
    }), React.createElement(UserRightsAssignment, {
      version: "win2016"
    }), React.createElement(SecurityOptions, {
      version: "win2016"
    }), React.createElement(AdvancedAuditPolicyConfiguration, {
      version: "win2016"
    }), React.createElement(LocalGroupPolicyEditor, {
      version: "win2016"
    })), React.createElement(Group, {
      name: "Scans"
    }, React.createElement(MicrosoftBaselineSecurityAnalyzer, {
      version: "win2016"
    }), React.createElement(MicrosoftSafetyScanner, {
      version: "win2016"
    }), React.createElement(AntiMalwareTools, {
      version: "win2016"
    })), React.createElement(Group, {
      name: "Filesystem"
    }, React.createElement(ShowHiddenFilesAndFolders, {
      version: "win2016"
    }), React.createElement(FindUnauthorizedFiles, {
      version: "win2016"
    }), React.createElement(UsersFolder, {
      version: "win2016"
    }), React.createElement(ProgramFiles, {
      version: "win2016"
    }), React.createElement(ProgramFilesx86, {
      version: "win2016"
    }), React.createElement(HostsFile, {
      version: "win2016"
    })), React.createElement(Group, {
      name: "Updates"
    }, React.createElement(ServicePacks, {
      version: "win2016"
    }), React.createElement(AutomaticUpdates, {
      version: "win2016"
    }), React.createElement(WindowsUpdate, {
      version: "win2016"
    })), React.createElement(Group, {
      name: "Configuration"
    }, React.createElement(InternetExplorer, {
      version: "win2016"
    }), React.createElement(WindowsServerRoles, {
      version: "win2016"
    })), React.createElement(Group, {
      name: "Logs"
    }, React.createElement(EventViewer, {
      version: "win2016"
    })), React.createElement(Group, {
      name: "Reference"
    }, React.createElement(AdministrativeTools, {
      version: "win2016"
    }), React.createElement(CDrive, {
      version: "win2016"
    }), React.createElement(CommandPrompt, {
      version: "win2016"
    }), React.createElement(ControlPanel, {
      version: "win2016"
    }), React.createElement(Processes, {
      version: "win2016"
    }), React.createElement(TaskManager, {
      version: "win2016"
    })));
  }

}

ReactDOM.render(React.createElement(WindowsServer2016, null), document.getElementById("app"));
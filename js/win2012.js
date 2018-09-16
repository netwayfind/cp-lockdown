class WindowsServer2012 extends React.Component {
  render() {
    return React.createElement(Template, {
      name: "Windows Server 2012"
    }, React.createElement(Group, {
      name: "Users and Groups"
    }, React.createElement(LocalUsersAndGroups, {
      version: "win2012"
    }), React.createElement(AutomaticLogin, {
      version: "win2012"
    })), React.createElement(Group, {
      name: "Installation Cleanup"
    }, React.createElement(AddRemovePrograms, {
      version: "win2012"
    }), React.createElement(WindowsFeatures, {
      version: "win2012"
    }), React.createElement(StartupPrograms, {
      version: "win2012"
    }), React.createElement(Services, {
      version: "win2012"
    }), React.createElement(TaskScheduler, {
      version: "win2012"
    }), React.createElement(DiskCleanup, {
      version: "win2012"
    })), React.createElement(Group, {
      name: "Networking"
    }, React.createElement(InternetConnectionSharing, {
      version: "win2012"
    }), React.createElement(RemoteAssistanceAndRemoteDesktop, {
      version: "win2012"
    }), React.createElement(WindowsFirewall, {
      version: "win2012"
    }), React.createElement(SharedFolders, {
      version: "win2012"
    }), React.createElement(CrowdInspect, {
      version: "win2012"
    })), React.createElement(Group, {
      name: "Policies"
    }, React.createElement(PasswordPolicy, {
      version: "win2012"
    }), React.createElement(AccountLockoutPolicy, {
      version: "win2012"
    }), React.createElement(AuditPolicy, {
      version: "win2012"
    }), React.createElement(UserRightsAssignment, {
      version: "win2012"
    }), React.createElement(SecurityOptions, {
      version: "win2012"
    }), React.createElement(AdvancedAuditPolicyConfiguration, {
      version: "win2012"
    }), React.createElement(LocalGroupPolicyEditor, {
      version: "win2012"
    })), React.createElement(Group, {
      name: "Scans"
    }, React.createElement(MicrosoftBaselineSecurityAnalyzer, {
      version: "win2012"
    }), React.createElement(MicrosoftSafetyScanner, {
      version: "win2012"
    }), React.createElement(AntiMalwareTools, {
      version: "win2012"
    })), React.createElement(Group, {
      name: "Filesystem"
    }, React.createElement(ShowHiddenFilesAndFolders, {
      version: "win2012"
    }), React.createElement(FindUnauthorizedFiles, {
      version: "win2012"
    }), React.createElement(UsersFolder, {
      version: "win2012"
    }), React.createElement(ProgramFiles, {
      version: "win2012"
    }), React.createElement(ProgramFilesx86, {
      version: "win2012"
    }), React.createElement(HostsFile, {
      version: "win2012"
    })), React.createElement(Group, {
      name: "Updates"
    }, React.createElement(ServicePacks, {
      version: "win2012"
    }), React.createElement(AutomaticUpdates, {
      version: "win2012"
    }), React.createElement(WindowsUpdate, {
      version: "win2012"
    })), React.createElement(Group, {
      name: "Configuration"
    }, React.createElement(InternetExplorer, {
      version: "win2012"
    }), React.createElement(WindowsServerRoles, {
      version: "win2012"
    })), React.createElement(Group, {
      name: "Logs"
    }, React.createElement(EventViewer, {
      version: "win2012"
    })), React.createElement(Group, {
      name: "Reference"
    }, React.createElement(AdministrativeTools, {
      version: "win2012"
    }), React.createElement(CDrive, {
      version: "win2012"
    }), React.createElement(CommandPrompt, {
      version: "win2012"
    }), React.createElement(ControlPanel, {
      version: "win2012"
    }), React.createElement(Processes, {
      version: "win2012"
    }), React.createElement(TaskManager, {
      version: "win2012"
    })));
  }

}

ReactDOM.render(React.createElement(WindowsServer2012, null), document.getElementById("app"));
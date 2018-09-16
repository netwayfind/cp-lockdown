class WindowsServer2008 extends React.Component {
  render() {
    return React.createElement(Template, {
      name: "Windows Server 2008"
    }, React.createElement(Group, {
      name: "Users and Groups"
    }, React.createElement(LocalUsersAndGroups, {
      version: "win2008"
    }), React.createElement(AutomaticLogin, {
      version: "win2008"
    })), React.createElement(Group, {
      name: "Installation Cleanup"
    }, React.createElement(AddRemovePrograms, {
      version: "win2008"
    }), React.createElement(WindowsFeatures, {
      version: "win2008"
    }), React.createElement(StartupPrograms, {
      version: "win2008"
    }), React.createElement(Services, {
      version: "win2008"
    }), React.createElement(TaskScheduler, {
      version: "win2008"
    }), React.createElement(DiskCleanup, {
      version: "win2008"
    })), React.createElement(Group, {
      name: "Networking"
    }, React.createElement(InternetConnectionSharing, {
      version: "win2008"
    }), React.createElement(RemoteAssistanceAndRemoteDesktop, {
      version: "win2008"
    }), React.createElement(WindowsFirewall, {
      version: "win2008"
    }), React.createElement(SharedFolders, {
      version: "win2008"
    }), React.createElement(CrowdInspect, {
      version: "win2008"
    })), React.createElement(Group, {
      name: "Policies"
    }, React.createElement(PasswordPolicy, {
      version: "win2008"
    }), React.createElement(AccountLockoutPolicy, {
      version: "win2008"
    }), React.createElement(AuditPolicy, {
      version: "win2008"
    }), React.createElement(UserRightsAssignment, {
      version: "win2008"
    }), React.createElement(SecurityOptions, {
      version: "win2008"
    }), React.createElement(AdvancedAuditPolicyConfiguration, {
      version: "win2008"
    }), React.createElement(LocalGroupPolicyEditor, {
      version: "win2008"
    })), React.createElement(Group, {
      name: "Scans"
    }, React.createElement(MicrosoftBaselineSecurityAnalyzer, {
      version: "win2008"
    }), React.createElement(MicrosoftSafetyScanner, {
      version: "win2008"
    }), React.createElement(AntiMalwareTools, {
      version: "win2008"
    })), React.createElement(Group, {
      name: "Filesystem"
    }, React.createElement(ShowHiddenFilesAndFolders, {
      version: "win2008"
    }), React.createElement(FindUnauthorizedFiles, {
      version: "win2008"
    }), React.createElement(UsersFolder, {
      version: "win2008"
    }), React.createElement(ProgramFiles, {
      version: "win2008"
    }), React.createElement(ProgramFilesx86, {
      version: "win2008"
    }), React.createElement(HostsFile, {
      version: "win2008"
    })), React.createElement(Group, {
      name: "Updates"
    }, React.createElement(ServicePacks, {
      version: "win2008"
    }), React.createElement(AutomaticUpdates, {
      version: "win2008"
    }), React.createElement(WindowsUpdate, {
      version: "win2008"
    })), React.createElement(Group, {
      name: "Configuration"
    }, React.createElement(InternetExplorer, {
      version: "win2008"
    }), React.createElement(WindowsServerRoles, {
      version: "win2008"
    })), React.createElement(Group, {
      name: "Logs"
    }, React.createElement(EventViewer, {
      version: "win2008"
    })), React.createElement(Group, {
      name: "Reference"
    }, React.createElement(AdministrativeTools, {
      version: "win2008"
    }), React.createElement(CDrive, {
      version: "win2008"
    }), React.createElement(CommandPrompt, {
      version: "win2008"
    }), React.createElement(ControlPanel, {
      version: "win2008"
    }), React.createElement(Processes, {
      version: "win2008"
    }), React.createElement(TaskManager, {
      version: "win2008"
    })));
  }

}

ReactDOM.render(React.createElement(WindowsServer2008, null), document.getElementById("app"));
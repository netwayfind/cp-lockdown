class Windows8Dot1 extends React.Component {
  render() {
    return React.createElement(Template, {
      name: "Windows 8.1"
    }, React.createElement(Group, {
      name: "Users and Groups"
    }, React.createElement(LocalUsersAndGroups, {
      version: "win8.1"
    }), React.createElement(AutomaticLogin, {
      version: "win8.1"
    })), React.createElement(Group, {
      name: "Installation Cleanup"
    }, React.createElement(AddRemovePrograms, {
      version: "win8.1"
    }), React.createElement(WindowsFeatures, {
      version: "win8.1"
    }), React.createElement(StartupPrograms, {
      version: "win8.1"
    }), React.createElement(Services, {
      version: "win8.1"
    }), React.createElement(TaskScheduler, {
      version: "win8.1"
    }), React.createElement(DiskCleanup, {
      version: "win8.1"
    })), React.createElement(Group, {
      name: "Networking"
    }, React.createElement(InternetConnectionSharing, {
      version: "win8.1"
    }), React.createElement(RemoteAssistanceAndRemoteDesktop, {
      version: "win8.1"
    }), React.createElement(WindowsFirewall, {
      version: "win8.1"
    }), React.createElement(SharedFolders, {
      version: "win8.1"
    }), React.createElement(CrowdInspect, {
      version: "win8.1"
    })), React.createElement(Group, {
      name: "Policies"
    }, React.createElement(PasswordPolicy, {
      version: "win8.1"
    }), React.createElement(AccountLockoutPolicy, {
      version: "win8.1"
    }), React.createElement(AuditPolicy, {
      version: "win8.1"
    }), React.createElement(UserRightsAssignment, {
      version: "win8.1"
    }), React.createElement(SecurityOptions, {
      version: "win8.1"
    }), React.createElement(AdvancedAuditPolicyConfiguration, {
      version: "win8.1"
    }), React.createElement(LocalGroupPolicyEditor, {
      version: "win8.1"
    })), React.createElement(Group, {
      name: "Scans"
    }, React.createElement(MicrosoftBaselineSecurityAnalyzer, {
      version: "win8.1"
    }), React.createElement(WindowsDefender, {
      version: "win8.1"
    }), React.createElement(AntiMalwareTools, {
      version: "win8.1"
    })), React.createElement(Group, {
      name: "Filesystem"
    }, React.createElement(ShowHiddenFilesAndFolders, {
      version: "win8.1"
    }), React.createElement(FindUnauthorizedFiles, {
      version: "win8.1"
    }), React.createElement(UsersFolder, {
      version: "win8.1"
    }), React.createElement(ProgramFiles, {
      version: "win8.1"
    }), React.createElement(ProgramFilesx86, {
      version: "win8.1"
    }), React.createElement(HostsFile, {
      version: "win8.1"
    })), React.createElement(Group, {
      name: "Updates"
    }, React.createElement(ServicePacks, {
      version: "win8.1"
    }), React.createElement(AutomaticUpdates, {
      version: "win8.1"
    }), React.createElement(WindowsUpdate, {
      version: "win8.1"
    })), React.createElement(Group, {
      name: "Configuration"
    }, React.createElement(InternetExplorer, {
      version: "win8.1"
    })), React.createElement(Group, {
      name: "Logs"
    }, React.createElement(EventViewer, {
      version: "win8.1"
    })), React.createElement(Group, {
      name: "Reference"
    }, React.createElement(AdministrativeTools, {
      version: "win8.1"
    }), React.createElement(CDrive, {
      version: "win8.1"
    }), React.createElement(CommandPrompt, {
      version: "win8.1"
    }), React.createElement(ControlPanel, {
      version: "win8.1"
    }), React.createElement(Processes, {
      version: "win8.1"
    }), React.createElement(TaskManager, {
      version: "win8.1"
    })));
  }

}

ReactDOM.render(React.createElement(Windows8Dot1, null), document.getElementById("app"));
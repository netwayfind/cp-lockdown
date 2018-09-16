class Windows7 extends React.Component {
  render() {
    return React.createElement(Template, {
      name: "Windows 7"
    }, React.createElement(Group, {
      name: "Users and Groups"
    }, React.createElement(LocalUsersAndGroups, {
      version: "win7"
    }), React.createElement(AutomaticLogin, {
      version: "win7"
    })), React.createElement(Group, {
      name: "Installation Cleanup"
    }, React.createElement(AddRemovePrograms, {
      version: "win7"
    }), React.createElement(WindowsFeatures, {
      version: "win7"
    }), React.createElement(StartupPrograms, {
      version: "win7"
    }), React.createElement(Services, {
      version: "win7"
    }), React.createElement(TaskScheduler, {
      version: "win7"
    }), React.createElement(DiskCleanup, {
      version: "win7"
    })), React.createElement(Group, {
      name: "Networking"
    }, React.createElement(InternetConnectionSharing, {
      version: "win7"
    }), React.createElement(RemoteAssistanceAndRemoteDesktop, {
      version: "win7"
    }), React.createElement(WindowsFirewall, {
      version: "win7"
    }), React.createElement(SharedFolders, {
      version: "win7"
    }), React.createElement(CrowdInspect, {
      version: "win7"
    })), React.createElement(Group, {
      name: "Policies"
    }, React.createElement(PasswordPolicy, {
      version: "win7"
    }), React.createElement(AccountLockoutPolicy, {
      version: "win7"
    }), React.createElement(AuditPolicy, {
      version: "win7"
    }), React.createElement(UserRightsAssignment, {
      version: "win7"
    }), React.createElement(SecurityOptions, {
      version: "win7"
    }), React.createElement(AdvancedAuditPolicyConfiguration, {
      version: "win7"
    }), React.createElement(LocalGroupPolicyEditor, {
      version: "win7"
    })), React.createElement(Group, {
      name: "Scans"
    }, React.createElement(MicrosoftBaselineSecurityAnalyzer, {
      version: "win7"
    }), React.createElement(MicrosoftSecurityEssentials, {
      version: "win7"
    }), React.createElement(AntiMalwareTools, {
      version: "win7"
    })), React.createElement(Group, {
      name: "Filesystem"
    }, React.createElement(ShowHiddenFilesAndFolders, {
      version: "win7"
    }), React.createElement(FindUnauthorizedFiles, {
      version: "win7"
    }), React.createElement(UsersFolder, {
      version: "win7"
    }), React.createElement(ProgramFiles, {
      version: "win7"
    }), React.createElement(ProgramFilesx86, {
      version: "win7"
    }), React.createElement(HostsFile, {
      version: "win7"
    })), React.createElement(Group, {
      name: "Updates"
    }, React.createElement(ServicePacks, {
      version: "win7"
    }), React.createElement(AutomaticUpdates, {
      version: "win7"
    }), React.createElement(WindowsUpdate, {
      version: "win7"
    })), React.createElement(Group, {
      name: "Configuration"
    }, React.createElement(InternetExplorer, {
      version: "win7"
    })), React.createElement(Group, {
      name: "Logs"
    }, React.createElement(EventViewer, {
      version: "win7"
    })), React.createElement(Group, {
      name: "Reference"
    }, React.createElement(AdministrativeTools, {
      version: "win7"
    }), React.createElement(CDrive, {
      version: "win7"
    }), React.createElement(CommandPrompt, {
      version: "win7"
    }), React.createElement(ControlPanel, {
      version: "win7"
    }), React.createElement(Processes, {
      version: "win7"
    }), React.createElement(TaskManager, {
      version: "win7"
    })));
  }

}

ReactDOM.render(React.createElement(Windows7, null), document.getElementById("app"));
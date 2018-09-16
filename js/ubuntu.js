class Ubuntu extends React.Component {
  render() {
    return React.createElement(Template, {
      name: "Ubuntu"
    }, React.createElement(Group, {
      name: "Users and Groups"
    }, React.createElement(Users, {
      version: "ubuntu"
    }), React.createElement(Groups, {
      version: "ubuntu"
    }), React.createElement(GuestAccess, {
      version: "ubuntu"
    }), React.createElement(Sudo, {
      version: "ubuntu"
    })), React.createElement(Group, {
      name: "Networking"
    }, React.createElement(Firewall, {
      version: "ubuntu"
    }), React.createElement(NetworkConnections, {
      version: "ubuntu"
    })), React.createElement(Group, {
      name: "Installation Check"
    }, React.createElement(Applications, {
      version: "ubuntu"
    }), React.createElement(Services, {
      version: "ubuntu"
    }), React.createElement(Updates, {
      version: "ubuntu"
    })), React.createElement(Group, {
      name: "Scans"
    }, React.createElement(Chkrootkit, {
      version: "ubuntu"
    }), React.createElement(Rkhunter, {
      version: "ubuntu"
    })), React.createElement(Group, {
      name: "Filesystem"
    }, React.createElement(FindUnauthorizedFiles, {
      version: "ubuntu"
    }), React.createElement(HostsFile, {
      version: "ubuntu"
    }), React.createElement(FilesystemPermissions, {
      version: "ubuntu"
    })), React.createElement(Group, {
      name: "Configuration"
    }, React.createElement(Auditd, {
      version: "ubuntu"
    }), React.createElement(BootupManager, {
      version: "ubuntu"
    }), React.createElement(Cron, {
      version: "ubuntu"
    }), React.createElement(LibpamCracklib, {
      version: "ubuntu"
    }), React.createElement(PasswordPolicy, {
      version: "ubuntu"
    }), React.createElement(AccountLockoutPolicy, {
      version: "ubuntu"
    })), React.createElement(Group, {
      name: "Logs"
    }, React.createElement(SystemLog, {
      version: "ubuntu"
    })), React.createElement(Group, {
      name: "References"
    }, React.createElement(DefaultGroups, {
      version: "ubuntu"
    }), React.createElement(DefaultUsers, {
      version: "ubuntu"
    }), React.createElement(OpenFile, {
      version: "ubuntu"
    }), React.createElement(Terminal, {
      version: "ubuntu"
    }), React.createElement(SystemSettings, {
      version: "ubuntu"
    })));
  }

}

ReactDOM.render(React.createElement(Ubuntu, null), document.getElementById("app"));
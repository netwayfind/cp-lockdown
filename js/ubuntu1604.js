class Ubuntu1604 extends React.Component {
  render() {
    return React.createElement(Template, {
      name: "Ubuntu 16.04+"
    }, React.createElement(Group, {
      name: "Users and Groups"
    }, React.createElement(Users, {
      version: "ubuntu16.04"
    }), React.createElement(Groups, {
      version: "ubuntu16.04"
    }), React.createElement(GuestAccess, {
      version: "ubuntu16.04"
    }), React.createElement(Sudo, {
      version: "ubuntu16.04"
    })), React.createElement(Group, {
      name: "Networking"
    }, React.createElement(Firewall, {
      version: "ubuntu16.04"
    }), React.createElement(NetworkConnections, {
      version: "ubuntu16.04"
    })), React.createElement(Group, {
      name: "Installation Check"
    }, React.createElement(Applications, {
      version: "ubuntu16.04"
    }), React.createElement(Services, {
      version: "ubuntu16.04"
    }), React.createElement(Updates, {
      version: "ubuntu16.04"
    })), React.createElement(Group, {
      name: "Scans"
    }, React.createElement(Chkrootkit, {
      version: "ubuntu16.04"
    }), React.createElement(Rkhunter, {
      version: "ubuntu16.04"
    })), React.createElement(Group, {
      name: "Filesystem"
    }, React.createElement(FindUnauthorizedFiles, {
      version: "ubuntu16.04"
    }), React.createElement(HostsFile, {
      version: "ubuntu16.04"
    }), React.createElement(FilesystemPermissions, {
      version: "ubuntu16.04"
    })), React.createElement(Group, {
      name: "Configuration"
    }, React.createElement(Auditd, {
      version: "ubuntu16.04"
    }), React.createElement(BootupManager, {
      version: "ubuntu16.04"
    }), React.createElement(Cron, {
      version: "ubuntu16.04"
    }), React.createElement(LibpamCracklib, {
      version: "ubuntu16.04"
    }), React.createElement(PasswordPolicy, {
      version: "ubuntu16.04"
    }), React.createElement(AccountLockoutPolicy, {
      version: "ubuntu16.04"
    })), React.createElement(Group, {
      name: "Logs"
    }, React.createElement(SystemLog, {
      version: "ubuntu16.04"
    })), React.createElement(Group, {
      name: "References"
    }, React.createElement(DefaultGroups, {
      version: "ubuntu16.04"
    }), React.createElement(DefaultUsers, {
      version: "ubuntu16.04"
    }), React.createElement(OpenFile, {
      version: "ubuntu16.04"
    }), React.createElement(Terminal, {
      version: "ubuntu16.04"
    }), React.createElement(SystemSettings, {
      version: "ubuntu16.04"
    })));
  }

}

ReactDOM.render(React.createElement(Ubuntu1604, null), document.getElementById("app"));
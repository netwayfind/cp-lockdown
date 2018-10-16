class Debian8 extends React.Component {
  render() {
    return React.createElement(Template, {
      name: "Debian 8+"
    }, React.createElement(Group, {
      name: "Users and Groups"
    }, React.createElement(Users, {
      version: "debian8"
    }), React.createElement(Groups, {
      version: "debian8"
    }), React.createElement(GuestAccess, {
      version: "debian8"
    }), React.createElement(Sudo, {
      version: "debian8"
    })), React.createElement(Group, {
      name: "Networking"
    }, React.createElement(Firewall, {
      version: "debian8"
    }), React.createElement(NetworkConnections, {
      version: "debian8"
    })), React.createElement(Group, {
      name: "Installation Check"
    }, React.createElement(Applications, {
      version: "debian8"
    }), React.createElement(Services, {
      version: "debian8"
    }), React.createElement(Updates, {
      version: "debian8"
    })), React.createElement(Group, {
      name: "Scans"
    }, React.createElement(Chkrootkit, {
      version: "debian8"
    }), React.createElement(Rkhunter, {
      version: "debian8"
    })), React.createElement(Group, {
      name: "Filesystem"
    }, React.createElement(FindUnauthorizedFiles, {
      version: "debian8"
    }), React.createElement(HostsFile, {
      version: "debian8"
    }), React.createElement(FilesystemPermissions, {
      version: "debian8"
    })), React.createElement(Group, {
      name: "Configuration"
    }, React.createElement(Auditd, {
      version: "debian8"
    }), React.createElement(BootupManager, {
      version: "debian8"
    }), React.createElement(Cron, {
      version: "debian8"
    }), React.createElement(LibpamCracklib, {
      version: "debian8"
    }), React.createElement(PasswordPolicy, {
      version: "debian8"
    }), React.createElement(AccountLockoutPolicy, {
      version: "debian8"
    })), React.createElement(Group, {
      name: "Logs"
    }, React.createElement(SystemLog, {
      version: "debian8"
    })), React.createElement(Group, {
      name: "References"
    }, React.createElement(DefaultGroups, {
      version: "debian8"
    }), React.createElement(DefaultUsers, {
      version: "debian8"
    }), React.createElement(OpenFile, {
      version: "debian8"
    }), React.createElement(Terminal, {
      version: "debian8"
    }), React.createElement(SystemSettings, {
      version: "debian8"
    })));
  }

}

ReactDOM.render(React.createElement(Debian8, null), document.getElementById("app"));
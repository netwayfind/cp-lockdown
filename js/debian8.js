class Debian8 extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Template, {
      name: "Debian 8+"
    }, /*#__PURE__*/React.createElement(Group, {
      name: "Users and Groups"
    }, /*#__PURE__*/React.createElement(Users, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(Groups, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(GuestAccess, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(Sudo, {
      version: "debian8"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Networking"
    }, /*#__PURE__*/React.createElement(Firewall, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(NetworkConnections, {
      version: "debian8"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Installation Check"
    }, /*#__PURE__*/React.createElement(Applications, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(Services, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(Updates, {
      version: "debian8"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Scans"
    }, /*#__PURE__*/React.createElement(Chkrootkit, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(Rkhunter, {
      version: "debian8"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Filesystem"
    }, /*#__PURE__*/React.createElement(FindUnauthorizedFiles, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(HostsFile, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(FilesystemPermissions, {
      version: "debian8"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Configuration"
    }, /*#__PURE__*/React.createElement(Auditd, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(BootupManager, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(Cron, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(LibpamCracklib, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(PasswordPolicy, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(AccountLockoutPolicy, {
      version: "debian8"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Logs"
    }, /*#__PURE__*/React.createElement(SystemLog, {
      version: "debian8"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "References"
    }, /*#__PURE__*/React.createElement(DefaultGroups, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(DefaultUsers, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(OpenFile, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(Terminal, {
      version: "debian8"
    }), /*#__PURE__*/React.createElement(SystemSettings, {
      version: "debian8"
    })));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Debian8, null), document.getElementById("app"));
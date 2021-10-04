class Ubuntu1604 extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Template, {
      name: "Ubuntu 16.04+"
    }, /*#__PURE__*/React.createElement(Group, {
      name: "Users and Groups"
    }, /*#__PURE__*/React.createElement(Users, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(Groups, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(GuestAccess, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(Sudo, {
      version: "ubuntu16.04"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Networking"
    }, /*#__PURE__*/React.createElement(Firewall, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(NetworkConnections, {
      version: "ubuntu16.04"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Installation Check"
    }, /*#__PURE__*/React.createElement(Applications, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(Services, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(Updates, {
      version: "ubuntu16.04"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Scans"
    }, /*#__PURE__*/React.createElement(Chkrootkit, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(Rkhunter, {
      version: "ubuntu16.04"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Filesystem"
    }, /*#__PURE__*/React.createElement(FindUnauthorizedFiles, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(HostsFile, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(FilesystemPermissions, {
      version: "ubuntu16.04"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Configuration"
    }, /*#__PURE__*/React.createElement(Auditd, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(BootupManager, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(Cron, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(LibpamCracklib, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(PasswordPolicy, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(AccountLockoutPolicy, {
      version: "ubuntu16.04"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Logs"
    }, /*#__PURE__*/React.createElement(SystemLog, {
      version: "ubuntu16.04"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "References"
    }, /*#__PURE__*/React.createElement(DefaultGroups, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(DefaultUsers, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(OpenFile, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(Terminal, {
      version: "ubuntu16.04"
    }), /*#__PURE__*/React.createElement(SystemSettings, {
      version: "ubuntu16.04"
    })));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Ubuntu1604, null), document.getElementById("app"));
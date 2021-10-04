class Ubuntu extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Template, {
      name: "Ubuntu"
    }, /*#__PURE__*/React.createElement(Group, {
      name: "Users and Groups"
    }, /*#__PURE__*/React.createElement(Users, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(Groups, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(GuestAccess, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(Sudo, {
      version: "ubuntu"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Networking"
    }, /*#__PURE__*/React.createElement(Firewall, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(NetworkConnections, {
      version: "ubuntu"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Installation Check"
    }, /*#__PURE__*/React.createElement(Applications, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(Services, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(Updates, {
      version: "ubuntu"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Scans"
    }, /*#__PURE__*/React.createElement(Chkrootkit, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(Rkhunter, {
      version: "ubuntu"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Filesystem"
    }, /*#__PURE__*/React.createElement(FindUnauthorizedFiles, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(HostsFile, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(FilesystemPermissions, {
      version: "ubuntu"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Configuration"
    }, /*#__PURE__*/React.createElement(Auditd, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(BootupManager, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(Cron, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(LibpamCracklib, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(PasswordPolicy, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(AccountLockoutPolicy, {
      version: "ubuntu"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "Logs"
    }, /*#__PURE__*/React.createElement(SystemLog, {
      version: "ubuntu"
    })), /*#__PURE__*/React.createElement(Group, {
      name: "References"
    }, /*#__PURE__*/React.createElement(DefaultGroups, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(DefaultUsers, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(OpenFile, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(Terminal, {
      version: "ubuntu"
    }), /*#__PURE__*/React.createElement(SystemSettings, {
      version: "ubuntu"
    })));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Ubuntu, null), document.getElementById("app"));
class AccountLockoutPolicy extends Section {
  displayName() {
    return "Account Lockout Policy";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Local Security Policy")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Account Policies")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Account Lockout Policy"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Account lockout duration - 30 minutes"), /*#__PURE__*/React.createElement("li", null, "Account lockout threshold - 5"), /*#__PURE__*/React.createElement("li", null, "Reset account lockout counter after - 30 minutes")));
  }

}

class AddRemovePrograms extends Section {
  displayName() {
    return "Add/Remove Programs";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Programs")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Uninstall a Program"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Do not remove any programs required by readme (e.g. web browser, work tools)"), /*#__PURE__*/React.createElement("li", null, "Do not remove dependencies such as Microsoft Visual C++ redistributable, VMware Tools, etc."), /*#__PURE__*/React.createElement("li", null, "Remove all programs prohibited by readme (e.g. games, non-work tools)")));
  }

}

class AdministrativeTools extends Section {
  displayName() {
    return "Administrative Tools";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option1();
    } else if (this.props.version === "win8.1") {
      return this.option1();
    } else if (this.props.version === "win10") {
      return this.option1();
    } else if (this.props.version === "win2008") {
      return this.option2();
    } else if (this.props.version === "win2008r2") {
      return this.option2();
    } else if (this.props.version === "win2012") {
      return this.option1();
    } else if (this.props.version === "win2016") {
      return this.option1();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "System and Security")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Administrative Tools"))));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Move mouse over ", /*#__PURE__*/React.createElement("strong", null, "Administrative Tools"))));
  }

}

class AdvancedAuditPolicyConfiguration extends Section {
  displayName() {
    return "Advanced Audit Policy Configuration";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Local Security Policy")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Advanced Audit Policy Configuration")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "System Audit Policies - Local Group Policy Object"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Account Logon", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Audit Credential Validation - Success, Failure"))), /*#__PURE__*/React.createElement("li", null, "Account Management", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Audit Computer Account Management - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit Other Account Management Events - Success, Failure "), /*#__PURE__*/React.createElement("li", null, "Audit System Group Management - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit User Account Management - Success, Failure"))), /*#__PURE__*/React.createElement("li", null, "Detailed Tracking", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Audit Process Creation - Success"))), /*#__PURE__*/React.createElement("li", null, "Logon/Logoff", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Audit Logoff - Success"), /*#__PURE__*/React.createElement("li", null, "Audit Logon - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit Special Logon - Success"))), /*#__PURE__*/React.createElement("li", null, "Object Access", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Audit File System - Failure"), /*#__PURE__*/React.createElement("li", null, "Audit Registry - Failure"), /*#__PURE__*/React.createElement("li", null, "Audit Handle Manipulation - Failure"))), /*#__PURE__*/React.createElement("li", null, "Policy Change", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Audit Audit Policy Change - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit Authentication Policy Change - Success"))), /*#__PURE__*/React.createElement("li", null, "Privilege Use", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Audit Sensitive Privilege Use - Success, Failure"))), /*#__PURE__*/React.createElement("li", null, "System", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Audit IPSec Driver - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit Security State Change - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit Security System Extension - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit System Integrity - Success, Failure"))), /*#__PURE__*/React.createElement("li", null, "Global Object Access Auditing", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "File system", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "[x] Define this policy setting"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Configure")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Add")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Select a principle")), /*#__PURE__*/React.createElement("li", null, "Under ", /*#__PURE__*/React.createElement("strong", null, "Enter the object name to select"), ", enter ", /*#__PURE__*/React.createElement("strong", null, "Everyone")), /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "OK")), /*#__PURE__*/React.createElement("li", null, "Set ", /*#__PURE__*/React.createElement("strong", null, "Type"), " to ", /*#__PURE__*/React.createElement("strong", null, "Failure")), /*#__PURE__*/React.createElement("li", null, "Make sure all ", /*#__PURE__*/React.createElement("strong", null, "Permissions"), " are checked"), /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "OK"), " to close the windows"))), /*#__PURE__*/React.createElement("li", null, "Registry", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "[x] Define this policy setting"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Configure")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Add")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Select a principle")), /*#__PURE__*/React.createElement("li", null, "Under ", /*#__PURE__*/React.createElement("strong", null, "Enter the object name to select"), ", enter ", /*#__PURE__*/React.createElement("strong", null, "Everyone")), /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "OK")), /*#__PURE__*/React.createElement("li", null, "Set ", /*#__PURE__*/React.createElement("strong", null, "Type"), " to ", /*#__PURE__*/React.createElement("strong", null, "Fail")), /*#__PURE__*/React.createElement("li", null, "Make sure all ", /*#__PURE__*/React.createElement("strong", null, "Permissions"), " are checked"), /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "OK"), " to close the windows")))))));
  }

}

class AntiMalwareTools extends Section {
  displayName() {
    return "Anti-Malware Tools";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "When running these tools, review any findings and avoid removing any required software.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Avast aswMBR", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "http://public.avast.com/~gmerek/aswMBR.htm"
    }, "http://public.avast.com/~gmerek/aswMBR.htm")))), /*#__PURE__*/React.createElement("li", null, "MalwareBytes", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "https://downloads.malwarebytes.com/file/mb3/"
    }, "https://downloads.malwarebytes.com/file/mb3/")))), /*#__PURE__*/React.createElement("li", null, "MalwareBytes Anti-Rootkit", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "http://www.bleepingcomputer.com/download/malwarebytes-anti-rootkit/"
    }, "http://www.bleepingcomputer.com/download/malwarebytes-anti-rootkit/")))), /*#__PURE__*/React.createElement("li", null, "McAfee Rootkit Remover", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "http://www.mcafee.com/us/downloads/free-tools/rootkitremover.aspx"
    }, "http://www.mcafee.com/us/downloads/free-tools/rootkitremover.aspx")))), /*#__PURE__*/React.createElement("li", null, "Norton Power Eraser", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "http://security.symantec.com/nbrt/npe.aspx"
    }, "http://security.symantec.com/nbrt/npe.aspx"))))));
  }

}

class AuditPolicy extends Section {
  displayName() {
    return "Audit Policy";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Local Security Policy")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Local Policies")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Audit Policy"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Audit account logon events - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit account management - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit directory service access - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit logon events - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit object access - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit policy change - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit privilege use - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit process tracking - Success, Failure"), /*#__PURE__*/React.createElement("li", null, "Audit system events - Success, Failure")));
  }

}

class AutomaticLogin extends Section {
  displayName() {
    return "Automatic Login";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option2();
    } else if (this.props.version === "win8.1") {
      return this.option3();
    } else if (this.props.version === "win10") {
      return this.option3();
    } else if (this.props.version === "win2008") {
      return this.option1();
    } else if (this.props.version === "win2008r2") {
      return this.option2();
    } else if (this.props.version === "win2012") {
      return this.option3();
    } else if (this.props.version === "win2016") {
      return this.option3();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "netplwiz"), ", press Enter key")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Under ", /*#__PURE__*/React.createElement("strong", null, "Users"), " tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] Users must enter a user name and password to use this computer")))));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Windows key + R key"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "netplwiz"), ", press Enter key")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Under ", /*#__PURE__*/React.createElement("strong", null, "Users"), " tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] Users must enter a user name and password to use this computer")))));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Windows button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "netplwiz"), ", press Enter key")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Under ", /*#__PURE__*/React.createElement("strong", null, "Users"), " tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] Users must enter a user name and password to use this computer")))));
  }

}

class AutomaticUpdates extends Section {
  displayName() {
    return "Automatic Updates";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option2();
    } else if (this.props.version === "win8.1") {
      return this.option2();
    } else if (this.props.version === "win10") {
      return this.option3();
    } else if (this.props.version === "win2008") {
      return this.option4();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option2();
    } else if (this.props.version === "win2016") {
      return this.option2();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "System and Security")), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Windows Update")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Turn automatic updating on or off"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Under Important Updates", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Install updates automatically (recommended)"), /*#__PURE__*/React.createElement("li", null, "Install new updates [ Every day ] at [ 3:00 AM ]")))));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "System and Security")), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Windows Update")), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Change settings"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Under Important Updates", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Install updates automatically (recommended)"))), /*#__PURE__*/React.createElement("li", null, "Click ", /*#__PURE__*/React.createElement("strong", null, "Updates will be automatically installed during the maintenance window")), /*#__PURE__*/React.createElement("li", null, "Set Run maintenance tasks daily at [3:00 AM]")));
  }

  option3() {
    return "Automatic updates are enabled by default";
  }

  option4() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "System")), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Windows Update")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Turn automatic updating on or off"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Install updates automatically (recommended)"), /*#__PURE__*/React.createElement("li", null, "Install new updates [ Every day ] at [ 3:00 AM ]")));
  }

}

class CDrive extends Section {
  displayName() {
    return "C:\\ Drive";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option2();
    } else if (this.props.version === "win8.1") {
      return this.option3();
    } else if (this.props.version === "win10") {
      return this.option4();
    } else if (this.props.version === "win2008") {
      return this.option5();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option3();
    } else if (this.props.version === "win2016") {
      return this.option3();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Computer")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Local Disk (C:)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "These are the default folders. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "PerfLogs"), /*#__PURE__*/React.createElement("li", null, React.createElement(ProgramFiles).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, React.createElement(ProgramFilesx86).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "ProgramData (hidden)"), /*#__PURE__*/React.createElement("li", null, React.createElement(UsersFolder).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Windows")));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "File Explorer"), " icon on Taskbar (folder icon)"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Computer")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Local Disk (C:)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "These are the default folders. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "PerfLogs"), /*#__PURE__*/React.createElement("li", null, React.createElement(ProgramFiles).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, React.createElement(ProgramFilesx86).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "ProgramData (hidden)"), /*#__PURE__*/React.createElement("li", null, React.createElement(UsersFolder).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Windows")));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "File Explorer"), " icon on Taskbar (folder icon)"), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Local Disk (C:)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "These are the default folders. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "PerfLogs"), /*#__PURE__*/React.createElement("li", null, React.createElement(ProgramFiles).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, React.createElement(ProgramFilesx86).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "ProgramData (hidden)"), /*#__PURE__*/React.createElement("li", null, React.createElement(UsersFolder).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Windows")));
  }

  option4() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "File Explorer"), " icon on Taskbar (folder icon)"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "This PC")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Local Disk (C:)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "These are the default folders. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "PerfLogs"), /*#__PURE__*/React.createElement("li", null, React.createElement(ProgramFiles).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, React.createElement(ProgramFilesx86).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "ProgramData (hidden)"), /*#__PURE__*/React.createElement("li", null, React.createElement(UsersFolder).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Windows")));
  }

  option5() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Computer")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Local Disk (C:)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "These are the default files and folders. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "PerfLogs"), /*#__PURE__*/React.createElement("li", null, React.createElement(ProgramFiles).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, React.createElement(ProgramFilesx86).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "ProgramData (hidden)"), /*#__PURE__*/React.createElement("li", null, React.createElement(UsersFolder).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Windows"), /*#__PURE__*/React.createElement("li", null, "BOOTSECT.BAK")));
  }

}

class CommandPrompt extends Section {
  displayName() {
    return "Command Prompt";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option2();
    } else if (this.props.version === "win8.1") {
      return this.option3();
    } else if (this.props.version === "win10") {
      return this.option3();
    } else if (this.props.version === "win2008") {
      return this.option1();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option3();
    } else if (this.props.version === "win2016") {
      return this.option3();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "cmd"), ", press Enter key")));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Windows key + R key"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "cmd"), ", press Enter key")));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Windows button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "cmd"), ", press Enter key")));
  }

}

class ControlPanel extends Section {
  displayName() {
    return "Control Panel";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option2();
    } else if (this.props.version === "win8.1") {
      return this.option3();
    } else if (this.props.version === "win10") {
      return this.option3();
    } else if (this.props.version === "win2008") {
      return this.option1();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option3();
    } else if (this.props.version === "win2016") {
      return this.option3();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Control Panel"))));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Move mouse to bottom right corner of screen"), /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("strong", null, "Settings")), /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("strong", null, "Control Panel"))));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Windows button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "Control Panel"), ", press Enter key")));
  }

}

class CrowdInspect extends Section {
  displayName() {
    return "CrowdInspect";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Download"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "http://www.crowdstrike.com/crowdinspect/index.html"
    }, "http://www.crowdstrike.com/crowdinspect/index.html"))));
  }

}

class DiskCleanup extends Section {
  displayName() {
    return "Disk Cleanup";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option2();
    } else if (this.props.version === "win8.1") {
      return this.option3();
    } else if (this.props.version === "win10") {
      return this.option3();
    } else if (this.props.version === "win2008") {
      return this.option4();
    } else if (this.props.version === "win2008r2") {
      return this.option4();
    } else if (this.props.version === "win2012") {
      return this.option4();
    } else if (this.props.version === "win2016") {
      return this.option1();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Computer")), /*#__PURE__*/React.createElement("li", null, "Right click on ", /*#__PURE__*/React.createElement("strong", null, "Local Disk (C:)")), /*#__PURE__*/React.createElement("li", null, "Select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Disk Cleanup")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Clean up system files")), /*#__PURE__*/React.createElement("li", null, "Put checkmarks for all items under Files to delete"), /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "OK"))));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Windows key + R key"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Computer")), /*#__PURE__*/React.createElement("li", null, "Right click on ", /*#__PURE__*/React.createElement("strong", null, "Local Disk (C:)")), /*#__PURE__*/React.createElement("li", null, "Select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Disk Cleanup")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Clean up system files")), /*#__PURE__*/React.createElement("li", null, "Put checkmarks for all items under Files to delete"), /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "OK"))));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "File Explorer"), " icon on Taskbar (folder icon)"), /*#__PURE__*/React.createElement("li", null, "Right click on ", /*#__PURE__*/React.createElement("strong", null, "Local Disk (C:)")), /*#__PURE__*/React.createElement("li", null, "Select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Disk Cleanup")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Clean up system files")), /*#__PURE__*/React.createElement("li", null, "Put checkmarks for all items under Files to delete"), /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "OK"))));
  }

  option4() {
    return "Disk cleanup is not installed by default.";
  }

}

class EventViewer extends Section {
  displayName() {
    return "Event Viewer";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Go to ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Open ", /*#__PURE__*/React.createElement("strong", null, "Event Viewer"))), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Review ", /*#__PURE__*/React.createElement("strong", null, "Windows Logs")), /*#__PURE__*/React.createElement("li", null, "Review ", /*#__PURE__*/React.createElement("strong", null, "Applications and Services Logs")), /*#__PURE__*/React.createElement("li", null, "Review logs prior to today for system changes")));
  }

}

class FindUnauthorizedFiles extends Section {
  displayName() {
    return "Find Unauthorized Files";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Option 1"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CommandPrompt).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "dir C:\\Users /s /b /a | find /i \".mp3\"", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "This will search for .mp3 files in C:\\Users"))), /*#__PURE__*/React.createElement("li", null, "If there are any results, inspect the files and remove as necessary"), /*#__PURE__*/React.createElement("li", null, "Repeat from step 2 for the following file extensions", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "(music) - .mp3, .wav, .wma, .aac"), /*#__PURE__*/React.createElement("li", null, "(movie/video) - .mp4, .mov, .avi")))), /*#__PURE__*/React.createElement("h3", null, "Option 2"), "Manually search for files in all user directories and remove unauthorized files.");
  }

}

class HostsFile extends Section {
  displayName() {
    return "Hosts File";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open Notepad under an administrator account", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Right click, select ", /*#__PURE__*/React.createElement("strong", null, "Run as Administrator")))), /*#__PURE__*/React.createElement("li", null, "Open file: C:\\windows\\system32\\drivers\\etc\\hosts")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Default file has no entries, only has lines that are blank or start with #"), /*#__PURE__*/React.createElement("li", null, "Disable any entry lines by adding a # to the start of the line")));
  }

}

class InternetConnectionSharing extends Section {
  displayName() {
    return "Internet Connection Sharing";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option1();
    } else if (this.props.version === "win8.1") {
      return this.option1();
    } else if (this.props.version === "win10") {
      return this.option1();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option1();
    } else if (this.props.version === "win2016") {
      return this.option1();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Network and Internet")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Network and Sharing Center")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Change adapter settings"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "For each Local Area Connection or Wireless Network Connection", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click and select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "Go to the ", /*#__PURE__*/React.createElement("strong", null, "Sharing"), " tab, if any"), /*#__PURE__*/React.createElement("li", null, "[ ] Allow other network users to connect through this computer's Internet connection")));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Network and Internet")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Network and Sharing Center")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Manage network connections"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "For each Local Area Connection or Wireless Network Connection", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click and select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "Go to the ", /*#__PURE__*/React.createElement("strong", null, "Sharing"), " tab, if any"), /*#__PURE__*/React.createElement("li", null, "[ ] Allow other network users to connect through this computer's Internet connection")));
  }

}

class InternetExplorer extends Section {
  displayName() {
    return "Internet Explorer";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option1();
    } else if (this.props.version === "win8.1") {
      return this.option2();
    } else if (this.props.version === "win10") {
      return this.option2();
    } else if (this.props.version === "win2008") {
      return this.option1();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option2();
    } else if (this.props.version === "win2016") {
      return this.option2();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", /*#__PURE__*/React.createElement("strong", null, "Internet Explorer")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Tools")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Internet Options"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Under the Security tab, security zone settings should be:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Internet - High"), /*#__PURE__*/React.createElement("li", null, "Local Intranet - Medium-low"), /*#__PURE__*/React.createElement("li", null, "Trusted Sites - Medium"), /*#__PURE__*/React.createElement("li", null, "Restricted Sites - High")));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", /*#__PURE__*/React.createElement("strong", null, "Internet Explorer")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Tools"), " (gear icon near top right)"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Internet Options"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Under the Security tab, security zone settings should be:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Internet - High"), /*#__PURE__*/React.createElement("li", null, "Local Intranet - Medium-low"), /*#__PURE__*/React.createElement("li", null, "Trusted Sites - Medium"), /*#__PURE__*/React.createElement("li", null, "Restricted Sites - High")));
  }

}

class LocalGroupPolicyEditor extends Section {
  displayName() {
    return "Local Group Policy Editor";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "gpedit.msc"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Computer Configuration", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrative Templates", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "System", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Remote Assistance", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Solicited Remote Assistance - Disabled"), /*#__PURE__*/React.createElement("li", null, "Offer Remote Assistance - Disabled"), /*#__PURE__*/React.createElement("li", null, "Turn on session logging - Enabled"))))), /*#__PURE__*/React.createElement("li", null, "Windows Components", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Autoplay Policies", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Turn off AutoPlay - Enabled:All Drives"), /*#__PURE__*/React.createElement("li", null, "Turn off Autoplay for non-volume devices: Enabled"), /*#__PURE__*/React.createElement("li", null, "Default behavior for AutoRun - Enabled:Do not execute any autorun commands")))))))))));
  }

}

class LocalUsersAndGroups extends Section {
  displayName() {
    return "Local Users and Groups";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option1();
    } else if (this.props.version === "win8.1") {
      return this.option1();
    } else if (this.props.version === "win10") {
      return this.option1();
    } else if (this.props.version === "win2008") {
      return this.option1();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option2();
    } else if (this.props.version === "win2016") {
      return this.option3();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Go to ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Computer Management")), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "System Tools")), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Local Users and Groups"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("h4", null, "Users"), /*#__PURE__*/React.createElement("span", null, "For each user:"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click on user, select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), "Under ", /*#__PURE__*/React.createElement("strong", null, "General"), " tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Disable all users not required by readme"), /*#__PURE__*/React.createElement("li", null, "Set passwords to expire for all users")), "Under ", /*#__PURE__*/React.createElement("strong", null, "Member Of"), " tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Add user to necessary groups, e.g. Administrators"), /*#__PURE__*/React.createElement("li", null, "Remove user from unnecessary groups")), /*#__PURE__*/React.createElement("li", null, "Right click on user, select ", /*#__PURE__*/React.createElement("b", null, "Set Password")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Make sure password meets the ", React.createElement(PasswordPolicy).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Write down user and password for reference"))), /*#__PURE__*/React.createElement("span", null, "For the Administrator user:"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click on Adminstrator user, select ", /*#__PURE__*/React.createElement("strong", null, "Rename")), /*#__PURE__*/React.createElement("li", null, "Change name to something else")), /*#__PURE__*/React.createElement("span", null, "For the Guest user:"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click on Guest user, select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "[x] Account is disabled")), /*#__PURE__*/React.createElement("h4", null, "Groups"), /*#__PURE__*/React.createElement("span", null, "Check the users in all of the groups.These are the default entries."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "only the users required"))), /*#__PURE__*/React.createElement("li", null, "Backup Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Cryptographic Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Distributed COM Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Event Log Readers", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Guests", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Guest"))), /*#__PURE__*/React.createElement("li", null, "IIS_IUSRS", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "NT AUTHORITY\\IUSR (S-1-5-17)"))), /*#__PURE__*/React.createElement("li", null, "Network Configuration Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Performance Log Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Performance Monitor Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Power Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Remote Desktop Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries; unless required by readme"))), /*#__PURE__*/React.createElement("li", null, "Replicator", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "NT AUTHORITY\\Authenticated Users(S-1-5-11)"), /*#__PURE__*/React.createElement("li", null, "NT AUTHORITY\\INTERACTIVE (S-1-5-4)"), /*#__PURE__*/React.createElement("li", null, "only the users necessary on the system")))));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Go to ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Computer Management")), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "System Tools")), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Local Users and Groups"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("h4", null, "Users"), "For each user:", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click on user, select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), "Under ", /*#__PURE__*/React.createElement("strong", null, "General"), " tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Disable all users not required by readme"), /*#__PURE__*/React.createElement("li", null, "Set passwords to expire for all users")), "Under ", /*#__PURE__*/React.createElement("strong", null, "Member Of"), " tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Add user to necessary groups, e.g. Administrators"), /*#__PURE__*/React.createElement("li", null, "Remove user from unnecessary groups")), /*#__PURE__*/React.createElement("li", null, "Right click on user, select ", /*#__PURE__*/React.createElement("b", null, "Set Password")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Make sure password meets the ", React.createElement(PasswordPolicy).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Write down user and password for reference"))), "For the Administrator user:", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click on Adminstrator user, select ", /*#__PURE__*/React.createElement("strong", null, "Rename")), /*#__PURE__*/React.createElement("li", null, "Change name to something else")), "For the Guest user:", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click on Guest user, select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "[x] Account is disabled")), /*#__PURE__*/React.createElement("h4", null, "Groups"), "Check the users in all of the groups. These are the default entries.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Access Control Assistance Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Administrators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "only the users required"))), /*#__PURE__*/React.createElement("li", null, "Backup Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Certificate Service DCOM Access", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Cryptographic Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Distributed COM Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Event Log Readers", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Guests", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Guest"))), /*#__PURE__*/React.createElement("li", null, "Hyper-V Administrators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "IIS_IUSRS", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "NT AUTHORITY\\IUSR (S-1-5-17)"))), /*#__PURE__*/React.createElement("li", null, "Network Configuration Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Performance Log Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Performance Monitor Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Power Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Print Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "RDS Endpoint Servers", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "RDS Management Servers", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "RDS Remote Access Servers", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Remote Desktop Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries; unless required by readme"))), /*#__PURE__*/React.createElement("li", null, "Remote Management Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Replicator", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "NT AUTHORITY\\Authenticated Users(S-1-5-11)"), /*#__PURE__*/React.createElement("li", null, "NT AUTHORITY\\INTERACTIVE (S-1-5-4)"), /*#__PURE__*/React.createElement("li", null, "only the users necessary on the system"))), /*#__PURE__*/React.createElement("li", null, "WinRMRemoteWMIUsers__", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries")))));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Go to ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Computer Management")), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "System Tools")), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Local Users and Groups"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("h4", null, "Users"), "For each user:", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click on user, select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), "Under ", /*#__PURE__*/React.createElement("strong", null, "General"), " tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Disable all users not required by readme"), /*#__PURE__*/React.createElement("li", null, "Set passwords to expire for all users")), "Under ", /*#__PURE__*/React.createElement("strong", null, "Member Of"), " tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Add user to necessary groups, e.g. Administrators"), /*#__PURE__*/React.createElement("li", null, "Remove user from unnecessary groups")), /*#__PURE__*/React.createElement("li", null, "Right click on user, select ", /*#__PURE__*/React.createElement("b", null, "Set Password")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Make sure password meets the ", React.createElement(PasswordPolicy).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Write down user and password for reference"))), "For the Administrator user:", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click on Adminstrator user, select ", /*#__PURE__*/React.createElement("strong", null, "Rename")), /*#__PURE__*/React.createElement("li", null, "Change name to something else")), "For the Guest user:", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click on Guest user, select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "[x] Account is disabled")), /*#__PURE__*/React.createElement("h4", null, "Groups"), "Check the users in all of the groups. These are the default entries.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Access Control Assistance Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Administrators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "only the users required"))), /*#__PURE__*/React.createElement("li", null, "Backup Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Certificate Service DCOM Access", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Cryptographic Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Distributed COM Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Event Log Readers", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Guests", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Guest"))), /*#__PURE__*/React.createElement("li", null, "Hyper-V Administrators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "IIS_IUSRS", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "NT AUTHORITY\\IUSR (S-1-5-17)"))), /*#__PURE__*/React.createElement("li", null, "Network Configuration Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Performance Log Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Performance Monitor Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Power Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Print Operators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "RDS Endpoint Servers", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "RDS Management Servers", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "RDS Remote Access Servers", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Remote Desktop Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries; unless required by readme"))), /*#__PURE__*/React.createElement("li", null, "Remote Management Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Replicator", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Storage Replica Administrators", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "System Managed Accounts Group", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "DefaultAccount"))), /*#__PURE__*/React.createElement("li", null, "Users", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "NT AUTHORITY\\Authenticated Users(S-1-5-11)"), /*#__PURE__*/React.createElement("li", null, "NT AUTHORITY\\INTERACTIVE (S-1-5-4)"), /*#__PURE__*/React.createElement("li", null, "only the users necessary on the system")))));
  }

}

class MicrosoftBaselineSecurityAnalyzer extends Section {
  displayName() {
    return "Microsoft Baseline Security Analyzer";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option1();
    } else if (this.props.version === "win8.1") {
      return this.option1();
    } else if (this.props.version === "win10") {
      return this.notSupported();
    } else if (this.props.version === "win2008") {
      return this.option1();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option1();
    } else if (this.props.version === "win2016") {
      return this.option1();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Download"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "http://www.microsoft.com/en-us/download/details.aspx?id=7558"
    }, "http://www.microsoft.com/en-us/download/details.aspx?id=7558")), /*#__PURE__*/React.createElement("li", null, "Choose ", /*#__PURE__*/React.createElement("strong", null, "MBSASetup-x64-EN.msi"))), /*#__PURE__*/React.createElement("p", null), "Run without security updates check");
  }

  notSupported() {
    return "Not supported. Program will run, but checks may be wrong.";
  }

}

class MicrosoftSafetyScanner extends Section {
  displayName() {
    return "Microsoft Safety Scanner";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Download"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "http://www.microsoft.com/security/scanner/en-us/default.aspx"
    }, "http://www.microsoft.com/security/scanner/en-us/default.aspx"))));
  }

}

class MicrosoftSecurityEssentials extends Section {
  displayName() {
    return "Microsoft Security Essentials";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Download"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "http://www.microsoft.com/en-us/download/details.aspx?id=5201"
    }, "http://www.microsoft.com/en-us/download/details.aspx?id=5201"))), /*#__PURE__*/React.createElement("p", null), "Run at least a quick scan, then a full scan.");
  }

}

class PasswordPolicy extends Section {
  displayName() {
    return "Password Policy";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Go to ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Local Security Policy")), /*#__PURE__*/React.createElement("li", null, "Open ", /*#__PURE__*/React.createElement("strong", null, "Account Policies")), /*#__PURE__*/React.createElement("li", null, "Open ", /*#__PURE__*/React.createElement("strong", null, "Password Policy"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Enforce password history - 5 passwords remembered"), /*#__PURE__*/React.createElement("li", null, "Maximum password age - 30 days"), /*#__PURE__*/React.createElement("li", null, "Minimum password age - 10 days"), /*#__PURE__*/React.createElement("li", null, "Minimum password length - 10 characters"), /*#__PURE__*/React.createElement("li", null, "Password must meet complexity requirements - Enabled"), /*#__PURE__*/React.createElement("li", null, "Store passwords using reversible encryption - Disabled")));
  }

}

class Processes extends Section {
  displayName() {
    return "Processes";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.win7();
    } else if (this.props.version === "win8") {
      return this.win8();
    } else if (this.props.version === "win8.1") {
      return this.win8dot1();
    } else if (this.props.version === "win10") {
      return this.win10();
    } else if (this.props.version === "win2008") {
      return this.win2008();
    } else if (this.props.version === "win2008r2") {
      return this.win2008r2();
    } else if (this.props.version === "win2012") {
      return this.win8dot1();
    } else if (this.props.version === "win2016") {
      return this.win8dot1();
    }

    return "unknown";
  }

  win7() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(TaskManager).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Go to ", /*#__PURE__*/React.createElement("strong", null, "Processes"), " tab"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Show processes from all users"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following are Windows processes that should not be stopped. Avoid stopping any required software.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "conhost.exe"), /*#__PURE__*/React.createElement("li", null, "csrss.exe"), /*#__PURE__*/React.createElement("li", null, "dwm.exe"), /*#__PURE__*/React.createElement("li", null, "explorer.exe"), /*#__PURE__*/React.createElement("li", null, "lsass.exe"), /*#__PURE__*/React.createElement("li", null, "lsm.exe"), /*#__PURE__*/React.createElement("li", null, "MsMpEng.exe"), /*#__PURE__*/React.createElement("li", null, "msseces.exe"), /*#__PURE__*/React.createElement("li", null, "MisSrv.exe"), /*#__PURE__*/React.createElement("li", null, "services.exe"), /*#__PURE__*/React.createElement("li", null, "smss.exe"), /*#__PURE__*/React.createElement("li", null, "spoolsv.exe"), /*#__PURE__*/React.createElement("li", null, "svchost.exe"), /*#__PURE__*/React.createElement("li", null, "System"), /*#__PURE__*/React.createElement("li", null, "taskhost.exe"), /*#__PURE__*/React.createElement("li", null, "taskmgr.exe"), /*#__PURE__*/React.createElement("li", null, "wininit.exe"), /*#__PURE__*/React.createElement("li", null, "winlogon.exe"), /*#__PURE__*/React.createElement("li", null, "WmiPrvSE.exe")));
  }

  win8() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(TaskManager).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Go to ", /*#__PURE__*/React.createElement("strong", null, "Processes"), " tab"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Show processes from all users"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following are Windows processes that should not be stopped. Avoid stopping any required software.", /*#__PURE__*/React.createElement("p", null), "Apps", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Task Manager"), /*#__PURE__*/React.createElement("li", null, "Windows Explorer")), "Background processes", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "COM Surrogate"), /*#__PURE__*/React.createElement("li", null, "Host Process for Windows Tasks"), /*#__PURE__*/React.createElement("li", null, "Microsoft Windows Search Indexer"), /*#__PURE__*/React.createElement("li", null, "Spooler SubSystem App"), /*#__PURE__*/React.createElement("li", null, "Touch Keyboard and Handwriting Panel"), /*#__PURE__*/React.createElement("li", null, "Windows Driver Foundation")), "Windows processes", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Antimalware Service Executable"), /*#__PURE__*/React.createElement("li", null, "Client Server Runtime Process"), /*#__PURE__*/React.createElement("li", null, "Desktop Window Manager"), /*#__PURE__*/React.createElement("li", null, "Local Security Authority Process"), /*#__PURE__*/React.createElement("li", null, "Service Host"), /*#__PURE__*/React.createElement("li", null, "Services and Controller app"), /*#__PURE__*/React.createElement("li", null, "System"), /*#__PURE__*/React.createElement("li", null, "System interrupts"), /*#__PURE__*/React.createElement("li", null, "Windows Login Application"), /*#__PURE__*/React.createElement("li", null, "Windows Session Manager"), /*#__PURE__*/React.createElement("li", null, "Windows Start-Up Application")));
  }

  win8dot1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(TaskManager).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Click ", /*#__PURE__*/React.createElement("strong", null, "More details"), ", if necessary"), /*#__PURE__*/React.createElement("li", null, "Go to ", /*#__PURE__*/React.createElement("strong", null, "Processes"), " tab"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Show processes from all users"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following are Windows processes that should not be stopped. Avoid stopping any required software.", /*#__PURE__*/React.createElement("p", null), "Apps", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Task Manager"), /*#__PURE__*/React.createElement("li", null, "Windows Explorer")), "Background processes", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "COM Surrogate"), /*#__PURE__*/React.createElement("li", null, "Host Process for Windows Tasks"), /*#__PURE__*/React.createElement("li", null, "Microsoft Distributed Transaction Coordinator Service"), /*#__PURE__*/React.createElement("li", null, "Microsoft Windows Search Indexer"), /*#__PURE__*/React.createElement("li", null, "Runtime Broker"), /*#__PURE__*/React.createElement("li", null, "Spooler SubSystem App"), /*#__PURE__*/React.createElement("li", null, "Store"), /*#__PURE__*/React.createElement("li", null, "Store Broker"), /*#__PURE__*/React.createElement("li", null, "ThinPrint AutoConnect component"), /*#__PURE__*/React.createElement("li", null, "ThinPrint AutoConnect printer creation service"), /*#__PURE__*/React.createElement("li", null, "Windows Driver Foundation"), /*#__PURE__*/React.createElement("li", null, "WMI Provider Host")), "Windows processes", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Antimalware Service Executable"), /*#__PURE__*/React.createElement("li", null, "Client Server Runtime Process"), /*#__PURE__*/React.createElement("li", null, "Console Window Host"), /*#__PURE__*/React.createElement("li", null, "Desktop Window Manager"), /*#__PURE__*/React.createElement("li", null, "Local Security Authority Process"), /*#__PURE__*/React.createElement("li", null, "Microsoft Network Realtime Inspection Service"), /*#__PURE__*/React.createElement("li", null, "Service Host"), /*#__PURE__*/React.createElement("li", null, "Services and Controller app"), /*#__PURE__*/React.createElement("li", null, "System"), /*#__PURE__*/React.createElement("li", null, "System interrupts"), /*#__PURE__*/React.createElement("li", null, "Windows Logon Application"), /*#__PURE__*/React.createElement("li", null, "Windows Session Manager"), /*#__PURE__*/React.createElement("li", null, "Windows Start-Up Application")));
  }

  win10() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(TaskManager).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Click ", /*#__PURE__*/React.createElement("strong", null, "More details"), ", if necessary"), /*#__PURE__*/React.createElement("li", null, "Go to ", /*#__PURE__*/React.createElement("strong", null, "Processes"), " tab"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Show processes from all users"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following are Windows processes that should not be stopped. Avoid stopping any required software.", /*#__PURE__*/React.createElement("p", null), "Apps", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Task Manager"), /*#__PURE__*/React.createElement("li", null, "Windows Explorer")), "Background processes", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "COM Surrogate"), /*#__PURE__*/React.createElement("li", null, "Cortana"), /*#__PURE__*/React.createElement("li", null, "Host Process for Windows Tasks"), /*#__PURE__*/React.createElement("li", null, "Microsoft OneDrive"), /*#__PURE__*/React.createElement("li", null, "Microsoft Skype Preview"), /*#__PURE__*/React.createElement("li", null, "Microsoft Windows Search Indexer"), /*#__PURE__*/React.createElement("li", null, "Runtime Broker"), /*#__PURE__*/React.createElement("li", null, "Spooler SubSystem App"), /*#__PURE__*/React.createElement("li", null, "Windows Defender notification icon"), /*#__PURE__*/React.createElement("li", null, "Windows Shell Experience Host")), "Windows processes", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Antimalware Service Executable"), /*#__PURE__*/React.createElement("li", null, "appmodel"), /*#__PURE__*/React.createElement("li", null, "Client Server Runtime Process"), /*#__PURE__*/React.createElement("li", null, "Desktop Window Manager"), /*#__PURE__*/React.createElement("li", null, "Local Security Authority Process"), /*#__PURE__*/React.createElement("li", null, "Microsoft Network Realtime Inspection Service"), /*#__PURE__*/React.createElement("li", null, "Service Host"), /*#__PURE__*/React.createElement("li", null, "Services and Controller app"), /*#__PURE__*/React.createElement("li", null, "Shell Infrastructure Host"), /*#__PURE__*/React.createElement("li", null, "System"), /*#__PURE__*/React.createElement("li", null, "System interrupts"), /*#__PURE__*/React.createElement("li", null, "Windows Logon Application"), /*#__PURE__*/React.createElement("li", null, "Windows Session Manager"), /*#__PURE__*/React.createElement("li", null, "Windows Start-Up Application")));
  }

  win2008() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(TaskManager).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Go to ", /*#__PURE__*/React.createElement("strong", null, "Processes"), " tab"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Show processes from all users"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following are Windows processes that should not be stopped. Avoid stopping any required software.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "csrss.exe"), /*#__PURE__*/React.createElement("li", null, "dwm.exe"), /*#__PURE__*/React.createElement("li", null, "explorer.exe"), /*#__PURE__*/React.createElement("li", null, "lsass.exe"), /*#__PURE__*/React.createElement("li", null, "lsm.exe"), /*#__PURE__*/React.createElement("li", null, "mmc.exe"), /*#__PURE__*/React.createElement("li", null, "msdtc.exe"), /*#__PURE__*/React.createElement("li", null, "services.exe"), /*#__PURE__*/React.createElement("li", null, "smss.exe"), /*#__PURE__*/React.createElement("li", null, "spoolsv.exe"), /*#__PURE__*/React.createElement("li", null, "svchost.exe"), /*#__PURE__*/React.createElement("li", null, "System"), /*#__PURE__*/React.createElement("li", null, "taskeng.exe"), /*#__PURE__*/React.createElement("li", null, "taskmgr.exe"), /*#__PURE__*/React.createElement("li", null, "wininit.exe"), /*#__PURE__*/React.createElement("li", null, "winlogon.exe")));
  }

  win2008r2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(TaskManager).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Go to ", /*#__PURE__*/React.createElement("strong", null, "Processes"), " tab"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Show processes from all users"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following are Windows processes that should not be stopped. Avoid stopping any required software.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "conhost.exe"), /*#__PURE__*/React.createElement("li", null, "csrss.exe"), /*#__PURE__*/React.createElement("li", null, "dllhost.exe"), /*#__PURE__*/React.createElement("li", null, "dwm.exe"), /*#__PURE__*/React.createElement("li", null, "explorer.exe"), /*#__PURE__*/React.createElement("li", null, "lsass.exe"), /*#__PURE__*/React.createElement("li", null, "lsm.exe"), /*#__PURE__*/React.createElement("li", null, "mmc.exe"), /*#__PURE__*/React.createElement("li", null, "msdtc.exe"), /*#__PURE__*/React.createElement("li", null, "MsMpEng.exe"), /*#__PURE__*/React.createElement("li", null, "msseces.exe"), /*#__PURE__*/React.createElement("li", null, "MisSrv.exe"), /*#__PURE__*/React.createElement("li", null, "services.exe"), /*#__PURE__*/React.createElement("li", null, "smss.exe"), /*#__PURE__*/React.createElement("li", null, "spoolsv.exe"), /*#__PURE__*/React.createElement("li", null, "sppsvc.exe"), /*#__PURE__*/React.createElement("li", null, "svchost.exe"), /*#__PURE__*/React.createElement("li", null, "System"), /*#__PURE__*/React.createElement("li", null, "taskhost.exe"), /*#__PURE__*/React.createElement("li", null, "taskmgr.exe"), /*#__PURE__*/React.createElement("li", null, "TrustedInstaller.exe"), /*#__PURE__*/React.createElement("li", null, "wininit.exe"), /*#__PURE__*/React.createElement("li", null, "winlogon.exe"), /*#__PURE__*/React.createElement("li", null, "WmiPrvSE.exe")));
  }

}

class ProgramFiles extends Section {
  displayName() {
    return "Program Files";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.win7();
    } else if (this.props.version === "win8") {
      return this.win8();
    } else if (this.props.version === "win8.1") {
      return this.win8dot1();
    } else if (this.props.version === "win10") {
      return this.win10();
    } else if (this.props.version === "win2008") {
      return this.win2008();
    } else if (this.props.version === "win2008r2") {
      return this.win2008r2();
    } else if (this.props.version === "win2012") {
      return this.win2012();
    } else if (this.props.version === "win2016") {
      return this.win2012();
    }

    return "unknown";
  }

  win7() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "DVD Maker"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Microsoft Baseline Security Analyzer"), /*#__PURE__*/React.createElement("li", null, "Microsoft Security Client"), /*#__PURE__*/React.createElement("li", null, "Uninstall Information (hidden)"), /*#__PURE__*/React.createElement("li", null, "Windows Defender"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows Media Player"), /*#__PURE__*/React.createElement("li", null, "Windows NT"), /*#__PURE__*/React.createElement("li", null, "Windows Photo Viewer"), /*#__PURE__*/React.createElement("li", null, "Windows Portable Devices")));
  }

  win8() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Uninstall Information (hidden)"), /*#__PURE__*/React.createElement("li", null, "Windows Defender"), /*#__PURE__*/React.createElement("li", null, "Windows Journal"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows Media Player"), /*#__PURE__*/React.createElement("li", null, "Windows Multimedia Platform"), /*#__PURE__*/React.createElement("li", null, "Windows NT"), /*#__PURE__*/React.createElement("li", null, "Windows Photo Viewer"), /*#__PURE__*/React.createElement("li", null, "Windows Portable Devices"), /*#__PURE__*/React.createElement("li", null, "Windows Apps (hidden)")));
  }

  win8dot1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Uninstall Information (hidden)"), /*#__PURE__*/React.createElement("li", null, "Windows Defender"), /*#__PURE__*/React.createElement("li", null, "Windows Journal"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows Media Player"), /*#__PURE__*/React.createElement("li", null, "Windows Multimedia Platform"), /*#__PURE__*/React.createElement("li", null, "Windows NT"), /*#__PURE__*/React.createElement("li", null, "Windows Photo Viewer"), /*#__PURE__*/React.createElement("li", null, "Windows Portable Devices"), /*#__PURE__*/React.createElement("li", null, "Windows Apps (hidden)"), /*#__PURE__*/React.createElement("li", null, "WindowsPowerShell")));
  }

  win10() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Uninstall Information (hidden)"), /*#__PURE__*/React.createElement("li", null, "Windows Defender"), /*#__PURE__*/React.createElement("li", null, "Windows Defender Advanced Threat Protection"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows Media Player"), /*#__PURE__*/React.createElement("li", null, "Windows Multimedia Platform"), /*#__PURE__*/React.createElement("li", null, "Windows NT"), /*#__PURE__*/React.createElement("li", null, "Windows Photo Viewer"), /*#__PURE__*/React.createElement("li", null, "Windows Portable Devices"), /*#__PURE__*/React.createElement("li", null, "Windows Apps (hidden)"), /*#__PURE__*/React.createElement("li", null, "WindowsPowerShell")));
  }

  win2008() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Packaged Programs"), /*#__PURE__*/React.createElement("li", null, "Uninstall Information (hidden)"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows NT")));
  }

  win2008r2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Microsoft Baseline Security Analyzer"), /*#__PURE__*/React.createElement("li", null, "Microsoft Security Client"), /*#__PURE__*/React.createElement("li", null, "Uninstall Information (hidden)"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows NT")));
  }

  win2012() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Uninstall Information (hidden)"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows NT")));
  }

}

class ProgramFilesx86 extends Section {
  displayName() {
    return "Program Files (x86)";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.win7();
    } else if (this.props.version === "win8") {
      return this.win8();
    } else if (this.props.version === "win8.1") {
      return this.win8dot1();
    } else if (this.props.version === "win10") {
      return this.win10();
    } else if (this.props.version === "win2008") {
      return this.win2008();
    } else if (this.props.version === "win2008r2") {
      return this.win2008r2();
    } else if (this.props.version === "win2012") {
      return this.win2012();
    } else if (this.props.version === "win2016") {
      return this.win2012();
    }

    return "unknown";
  }

  win7() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files (x86)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Microsoft Security Client"), /*#__PURE__*/React.createElement("li", null, "Microsoft .NET"), /*#__PURE__*/React.createElement("li", null, "Uninstall Information (hidden)"), /*#__PURE__*/React.createElement("li", null, "Windows Defender"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows NT"), /*#__PURE__*/React.createElement("li", null, "Windows Photo Viewer"), /*#__PURE__*/React.createElement("li", null, "Windows Portable Devices")));
  }

  win8() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files (x86)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Windows Defender"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows Media Player"), /*#__PURE__*/React.createElement("li", null, "Windows Multimedia Platform"), /*#__PURE__*/React.createElement("li", null, "Windows NT"), /*#__PURE__*/React.createElement("li", null, "Windows Photo Viewer"), /*#__PURE__*/React.createElement("li", null, "Windows Portable Devices")));
  }

  win8dot1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files (x86)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Microsoft.NET"), /*#__PURE__*/React.createElement("li", null, "Windows Defender"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows Media Player"), /*#__PURE__*/React.createElement("li", null, "Windows Multimedia Platform"), /*#__PURE__*/React.createElement("li", null, "Windows NT"), /*#__PURE__*/React.createElement("li", null, "Windows Photo Viewer"), /*#__PURE__*/React.createElement("li", null, "Windows Portable Devices"), /*#__PURE__*/React.createElement("li", null, "WindowsPowerShell")));
  }

  win10() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files (x86)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Microsoft.NET"), /*#__PURE__*/React.createElement("li", null, "Windows Defender"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows Media Player"), /*#__PURE__*/React.createElement("li", null, "Windows Multimedia Platform"), /*#__PURE__*/React.createElement("li", null, "Windows NT"), /*#__PURE__*/React.createElement("li", null, "Windows Photo Viewer"), /*#__PURE__*/React.createElement("li", null, "Windows Portable Devices"), /*#__PURE__*/React.createElement("li", null, "WindowsPowerShell")));
  }

  win2008() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files (x86)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Uninstall Information (hidden)"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows NT")));
  }

  win2008r2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files (x86)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Microsoft Security Client"), /*#__PURE__*/React.createElement("li", null, "Microsoft .NET"), /*#__PURE__*/React.createElement("li", null, "Uninstall Information (hidden)"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows NT")));
  }

  win2012() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Program Files (x86)"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Common Files"), /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Microsoft.NET"), /*#__PURE__*/React.createElement("li", null, "Windows Mail"), /*#__PURE__*/React.createElement("li", null, "Windows NT")));
  }

}

class RemoteAssistanceAndRemoteDesktop extends Section {
  displayName() {
    return "Remote Assistance and Remote Desktop";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "System and Security")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "System")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Remote settings"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Under Remote Assistance", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[ ] Allow Remote Assistance connections to this computer")), "Under Remote Desktop", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] Don't allow connections to this computer")));
  }

}

class SecurityOptions extends Section {
  displayName() {
    return "Security Options";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Go to ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Local Security Policy")), /*#__PURE__*/React.createElement("li", null, "Open ", /*#__PURE__*/React.createElement("strong", null, "Local Policies")), /*#__PURE__*/React.createElement("li", null, "Open ", /*#__PURE__*/React.createElement("strong", null, "Security Options"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Accounts: Guest account status - Disabled"), /*#__PURE__*/React.createElement("li", null, "Accounts: Rename administrator account - not Administrator"), /*#__PURE__*/React.createElement("li", null, "Accounts: Rename guest account - not Guest"), /*#__PURE__*/React.createElement("li", null, "Interactive logon: Do not require CTRL + ALT + DEL - Disabled"), /*#__PURE__*/React.createElement("li", null, "Network access: Let everyone permissions apply to anonymous users - Disabled"), /*#__PURE__*/React.createElement("li", null, "Recovery Console: Allow automatic administrative logon - Disabled")));
  }

}

class ServicePacks extends Section {
  displayName() {
    return "Service Packs";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.win7();
    } else if (this.props.version === "win8") {
      return this.none();
    } else if (this.props.version === "win8.1") {
      return this.none();
    } else if (this.props.version === "win10") {
      return this.none();
    } else if (this.props.version === "win2008") {
      return this.win2008();
    } else if (this.props.version === "win2008r2") {
      return this.win2008r2();
    } else if (this.props.version === "win2012") {
      return this.none();
    } else if (this.props.version === "win2016") {
      return this.none();
    }

    return "unknown";
  }

  win7() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Find and right click ", /*#__PURE__*/React.createElement("strong", null, "Computer"), " or ", /*#__PURE__*/React.createElement("strong", null, "My Computer")), /*#__PURE__*/React.createElement("li", null, "Select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "Find the words ", /*#__PURE__*/React.createElement("strong", null, "Service Pack"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "if there is none, no service pack is installed")))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "For Windows 7, the latest is Service Pack 1")));
  }

  win2008() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Find and right click ", /*#__PURE__*/React.createElement("strong", null, "Computer"), " or ", /*#__PURE__*/React.createElement("strong", null, "My Computer")), /*#__PURE__*/React.createElement("li", null, "Select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "Find the words ", /*#__PURE__*/React.createElement("strong", null, "Service Pack"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "if there is none, no service pack is installed")))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "For Windows Server 2008, the latest is Service Pack 2")));
  }

  win2008r2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Find and right click ", /*#__PURE__*/React.createElement("strong", null, "Computer"), " or ", /*#__PURE__*/React.createElement("strong", null, "My Computer")), /*#__PURE__*/React.createElement("li", null, "Select ", /*#__PURE__*/React.createElement("strong", null, "Properties")), /*#__PURE__*/React.createElement("li", null, "Find the words ", /*#__PURE__*/React.createElement("strong", null, "Service Pack"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "if there is none, no service pack is installed")))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "For Windows Server 2008 R2, the latest is Service Pack 1")));
  }

  none() {
    return "None";
  }

}

class Services extends Section {
  displayName() {
    return "Services";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Go to ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and open ", /*#__PURE__*/React.createElement("strong", null, "Services"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Make sure the following services are running and have automatic start up:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "DHCP Client"), /*#__PURE__*/React.createElement("li", null, "DNS Client")), "Unless required by readme, stop each of the following services and change Startup Type as Disabled", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "DHCP Server"), /*#__PURE__*/React.createElement("li", null, "DNS Server"), /*#__PURE__*/React.createElement("li", null, "FTP Server"), /*#__PURE__*/React.createElement("li", null, "HTTP Server"), /*#__PURE__*/React.createElement("li", null, "Internet Information Services (IIS)"), /*#__PURE__*/React.createElement("li", null, "Telnet Server")));
  }

}

class SharedFolders extends Section {
  displayName() {
    return "Shared Folders";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Computer Management")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Shared Folders")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Shares"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Stop sharing all shares.", /*#__PURE__*/React.createElement("p", null), "The following are the mininum required shares. Other shares may be deleted, unless required by readme.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "ADMIN$ - C:\\Windows - Windows"), /*#__PURE__*/React.createElement("li", null, "C$ - C:\\ - Windows", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "other letters may appear for each Local Disk in Computer"))), /*#__PURE__*/React.createElement("li", null, "IPC$ - [blank] - Windows")));
  }

}

class ShowHiddenFilesAndFolders extends Section {
  displayName() {
    return "Show Hidden Files and Folders";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option1();
    } else if (this.props.version === "win8.1") {
      return this.option1();
    } else if (this.props.version === "win10") {
      return this.option2();
    } else if (this.props.version === "win2008") {
      return this.option1();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option1();
    } else if (this.props.version === "win2016") {
      return this.option1();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Appearance and Personalization")), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Folder Options")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Show hidden files and folders"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Under ", /*#__PURE__*/React.createElement("strong", null, "Files and Folders"), ", under ", /*#__PURE__*/React.createElement("strong", null, "Hidden files and folders"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] Show hidden files, folders, and drives")));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Appearance and Personalization")), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "File Explorer Options")), /*#__PURE__*/React.createElement("li", null, "Find and click on the ", /*#__PURE__*/React.createElement("strong", null, "View"), " tab")), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Under ", /*#__PURE__*/React.createElement("strong", null, "Files and Folders"), ", under ", /*#__PURE__*/React.createElement("strong", null, "Hidden files and folders"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] Show hidden files, folders, and drives")));
  }

}

class StartupPrograms extends Section {
  displayName() {
    return "Startup Programs";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option2();
    } else if (this.props.version === "win8.1") {
      return this.option3();
    } else if (this.props.version === "win10") {
      return this.option3();
    } else if (this.props.version === "win2008") {
      return this.option1();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option4();
    } else if (this.props.version === "win2016") {
      return this.option4();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press the Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "msconfig"), ", press Enter"), /*#__PURE__*/React.createElement("li", null, "Go to the ", /*#__PURE__*/React.createElement("strong", null, "Startup"), " tab")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Keep checkmarks on required programs and services"), /*#__PURE__*/React.createElement("li", null, "Remove checkmarks on all other items")));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(TaskManager).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Go to the ", /*#__PURE__*/React.createElement("strong", null, "Startup"), " tab")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Disable programs that are not required by readme")));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(TaskManager).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("strong", null, "More details"), ", if necessary"), /*#__PURE__*/React.createElement("li", null, "Go to the ", /*#__PURE__*/React.createElement("strong", null, "Startup"), " tab")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Disable programs that are not required by readme")));
  }

  option4() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press the Start or Windows button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "msconfig"), ", press Enter"), /*#__PURE__*/React.createElement("li", null, "Go to the ", /*#__PURE__*/React.createElement("strong", null, "Startup"), " tab")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Keep checkmarks on required programs and services"), /*#__PURE__*/React.createElement("li", null, "Remove checkmarks on all other items")));
  }

}

class TaskManager extends Section {
  displayName() {
    return "Task Manager";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option1();
    } else if (this.props.version === "win8.1") {
      return this.option2();
    } else if (this.props.version === "win10") {
      return this.option2();
    } else if (this.props.version === "win2008") {
      return this.option1();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option2();
    } else if (this.props.version === "win2016") {
      return this.option2();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), "Option 1", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click Taskbar (bottom of screen)"), /*#__PURE__*/React.createElement("li", null, "Select ", /*#__PURE__*/React.createElement("strong", null, "Start Task Manager"))), "Option 2", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "CTRL + ALT + DEL")), /*#__PURE__*/React.createElement("li", null, "Select ", /*#__PURE__*/React.createElement("strong", null, "Start Task Manager"))));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), "Option 1", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Right click Taskbar (bottom of screen)"), /*#__PURE__*/React.createElement("li", null, "Select ", /*#__PURE__*/React.createElement("strong", null, "Task Manager"))), "Option 2", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "CTRL + ALT + DEL")), /*#__PURE__*/React.createElement("li", null, "Select ", /*#__PURE__*/React.createElement("strong", null, "Task Manager"))));
  }

}

class TaskScheduler extends Section {
  displayName() {
    return "Task Scheduler";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Task Scheduler")), /*#__PURE__*/React.createElement("li", null, "Under ", /*#__PURE__*/React.createElement("strong", null, "Task Scheduler (Local)"), ", open ", /*#__PURE__*/React.createElement("strong", null, "Task Scheduler Library"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Review list of scheduled tasks"), /*#__PURE__*/React.createElement("li", null, "Add any required tasks"), /*#__PURE__*/React.createElement("li", null, "Disable or delete any unnecessary or prohibited tasks")));
  }

}

class UserRightsAssignment extends Section {
  displayName() {
    return "User Rights Assignment";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(AdministrativeTools).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Local Security Policy")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "User Rights Assignment"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "These are the default settings", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Access Credential Manager as a trusted caller", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Access this computer from the network", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Backup Operators"), /*#__PURE__*/React.createElement("li", null, "Everyone"), /*#__PURE__*/React.createElement("li", null, "Users"))), /*#__PURE__*/React.createElement("li", null, "Act as part of the operating system", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Add workstations to domain", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Adjust memory quotas for a process", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Local Service"), /*#__PURE__*/React.createElement("li", null, "Network Service"))), /*#__PURE__*/React.createElement("li", null, "Allow log on locally", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Backup Operators"), /*#__PURE__*/React.createElement("li", null, "Guest"), /*#__PURE__*/React.createElement("li", null, "Users"))), /*#__PURE__*/React.createElement("li", null, "Allow log on through Remote Desktop Services", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Remote Desktop Users"))), /*#__PURE__*/React.createElement("li", null, "Back up files and directories", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Backup Operators"))), /*#__PURE__*/React.createElement("li", null, "Bypass traverse checking", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Backup Operators"), /*#__PURE__*/React.createElement("li", null, "Everyone"), /*#__PURE__*/React.createElement("li", null, "Local Service"), /*#__PURE__*/React.createElement("li", null, "Network Service"), /*#__PURE__*/React.createElement("li", null, "Users"))), /*#__PURE__*/React.createElement("li", null, "Change the system time", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Local Service"))), /*#__PURE__*/React.createElement("li", null, "Change the time zone", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Local Service"), /*#__PURE__*/React.createElement("li", null, "Users"))), /*#__PURE__*/React.createElement("li", null, "Create a pagefile", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"))), /*#__PURE__*/React.createElement("li", null, "Create a token object", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Create global objects", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Local Service"), /*#__PURE__*/React.createElement("li", null, "Network Service"), /*#__PURE__*/React.createElement("li", null, "Service"))), /*#__PURE__*/React.createElement("li", null, "Create permanent shared objects", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Create symbolic links", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"))), /*#__PURE__*/React.createElement("li", null, "Debug Programs", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"))), /*#__PURE__*/React.createElement("li", null, "Deny access to this computer from the network", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Guest"))), /*#__PURE__*/React.createElement("li", null, "Deny log on as a batch job", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Deny log on as a service", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Deny log on locally", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Guest"))), /*#__PURE__*/React.createElement("li", null, "Deny log on through Remote Desktop/Terminal Services", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Enable computer and user accounts to be trusted for delegation", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Force shutdown from a remote system", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"))), /*#__PURE__*/React.createElement("li", null, "Generate security audits", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Local Service"), /*#__PURE__*/React.createElement("li", null, "Network Service"))), /*#__PURE__*/React.createElement("li", null, "Impersonate a client after authentication", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Adminstrators"), /*#__PURE__*/React.createElement("li", null, "Local Service"), /*#__PURE__*/React.createElement("li", null, "Network Service"), /*#__PURE__*/React.createElement("li", null, "Service"))), /*#__PURE__*/React.createElement("li", null, "Increase a process working set", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Users"))), /*#__PURE__*/React.createElement("li", null, "Increase scheduling priority", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"))), /*#__PURE__*/React.createElement("li", null, "Load and unload device drivers", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"))), /*#__PURE__*/React.createElement("li", null, "Lock pages in memory", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Log on as a batch job", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Backup Operators"), /*#__PURE__*/React.createElement("li", null, "Performance Log Users"))), /*#__PURE__*/React.createElement("li", null, "Log on as a service", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "NT SERVICE\\ALL SERVICES"))), /*#__PURE__*/React.createElement("li", null, "Manage auditing and security log", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"))), /*#__PURE__*/React.createElement("li", null, "Modify an object label", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Modify firmware environment values", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"))), /*#__PURE__*/React.createElement("li", null, "Perform volume maintenance tasks", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"))), /*#__PURE__*/React.createElement("li", null, "Profile single process", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"))), /*#__PURE__*/React.createElement("li", null, "Profile system performance", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "NT Service\\WdiServiceHost"))), /*#__PURE__*/React.createElement("li", null, "Remove computer from docking station", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Users"))), /*#__PURE__*/React.createElement("li", null, "Replace a process level token", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Local Service"), /*#__PURE__*/React.createElement("li", null, "Network Service"))), /*#__PURE__*/React.createElement("li", null, "Restore files and directories", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Backup Operators"))), /*#__PURE__*/React.createElement("li", null, "Shut down the system", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators"), /*#__PURE__*/React.createElement("li", null, "Backup Operators"), /*#__PURE__*/React.createElement("li", null, "Users"))), /*#__PURE__*/React.createElement("li", null, "Synchronize directory service data", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "No entries"))), /*#__PURE__*/React.createElement("li", null, "Take ownership of files or other objects", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Administrators")))));
  }

}

class UsersFolder extends Section {
  displayName() {
    return "Users Folder";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(CDrive).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Open ", /*#__PURE__*/React.createElement("strong", null, "Users"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Default"), /*#__PURE__*/React.createElement("li", null, "Public"), /*#__PURE__*/React.createElement("li", null, "any user allowed by readme")));
  }

}

class WindowsDefender extends Section {
  displayName() {
    return "Windows Defender";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "Windows Defender replaces Microsoft Security Essentials.", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Start button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "Windows Defender"))), /*#__PURE__*/React.createElement("p", null), "Run at least a quick scan, then a full scan.");
  }

}

class WindowsFeatures extends Section {
  displayName() {
    return "Windows Features";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option1();
    } else if (this.props.version === "win8.1") {
      return this.option1();
    } else if (this.props.version === "win10") {
      return this.option2();
    } else if (this.props.version === "win2008") {
      return this.option4();
    } else if (this.props.version === "win2008r2") {
      return this.option5();
    } else if (this.props.version === "win2012") {
      return this.option3();
    } else if (this.props.version === "win2016") {
      return this.option3();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Programs")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Turn on Windows features on or off"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Uncheck all not mentioned in the following:", /*#__PURE__*/React.createElement("p", null), "Minimum required", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Internet Explorer"), /*#__PURE__*/React.createElement("li", null, "Windows Search")), "May be required", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Microsoft .NET Framework")), "Only enable these if required by readme", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Simple Network Management Protocol (SNMP)"), /*#__PURE__*/React.createElement("li", null, "Telnet Client"), /*#__PURE__*/React.createElement("li", null, "Telnet Server"), /*#__PURE__*/React.createElement("li", null, "TFTP Client")));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Programs")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Turn on Windows features on or off"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Uncheck all not mentioned in the following:", /*#__PURE__*/React.createElement("p", null), "Minimum required", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Internet Explorer")), "May be required", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Microsoft .NET Framework")), "Only enable these if required by readme", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Simple Network Management Protocol (SNMP)"), /*#__PURE__*/React.createElement("li", null, "Telnet Client"), /*#__PURE__*/React.createElement("li", null, "Telnet Server"), /*#__PURE__*/React.createElement("li", null, "TFTP Client")));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Programs")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Turn on Windows features on or off")), /*#__PURE__*/React.createElement("li", null, "Follow ", /*#__PURE__*/React.createElement("strong", null, "Add Roles and Features Wizard"), " until ", /*#__PURE__*/React.createElement("strong", null, "Features"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Uncheck all not mentioned in the following:", /*#__PURE__*/React.createElement("p", null), "May be required", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Microsoft .NET Framework")), "Only enable these if required by readme", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Group Policy Management"), /*#__PURE__*/React.createElement("li", null, "Remote Assistance"), /*#__PURE__*/React.createElement("li", null, "Remote Server Administration Tools"), /*#__PURE__*/React.createElement("li", null, "SMTP Server"), /*#__PURE__*/React.createElement("li", null, "SNMP Server"), /*#__PURE__*/React.createElement("li", null, "Telnet Client"), /*#__PURE__*/React.createElement("li", null, "Telnet Server"), /*#__PURE__*/React.createElement("li", null, "TFTP Client")));
  }

  option4() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Programs")), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Programs and Features")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Turn on Windows features on or off")), /*#__PURE__*/React.createElement("li", null, "Under ", /*#__PURE__*/React.createElement("strong", null, "Server Manager"), ", find and open ", /*#__PURE__*/React.createElement("strong", null, "Features"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "By default, no features (0 of 41) are installed", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Check the readme for which features or services should be installed", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, ".NET Framework"), /*#__PURE__*/React.createElement("li", null, "Group Policy Management"), /*#__PURE__*/React.createElement("li", null, "SMTP Server"), /*#__PURE__*/React.createElement("li", null, "SNMP Services"), /*#__PURE__*/React.createElement("li", null, "Telnet Client"), /*#__PURE__*/React.createElement("li", null, "Telnet Server"), /*#__PURE__*/React.createElement("li", null, "TFTP Client"), /*#__PURE__*/React.createElement("li", null, "WINS Server"))), /*#__PURE__*/React.createElement("li", null, "Use ", /*#__PURE__*/React.createElement("strong", null, "Add Features"), " to add necessary features"), /*#__PURE__*/React.createElement("li", null, "Use ", /*#__PURE__*/React.createElement("strong", null, "Remove Features"), " to remove unnecessary features")));
  }

  option5() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Programs")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Turn on Windows features on or off")), /*#__PURE__*/React.createElement("li", null, "Under ", /*#__PURE__*/React.createElement("strong", null, "Server Manager"), ", find and open ", /*#__PURE__*/React.createElement("strong", null, "Features"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), "By default, no features (0 of 41) are installed", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Check the readme for which features or services should be installed", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, ".NET Framework"), /*#__PURE__*/React.createElement("li", null, "Group Policy Management"), /*#__PURE__*/React.createElement("li", null, "SMTP Server"), /*#__PURE__*/React.createElement("li", null, "SNMP Services"), /*#__PURE__*/React.createElement("li", null, "Telnet Client"), /*#__PURE__*/React.createElement("li", null, "Telnet Server"), /*#__PURE__*/React.createElement("li", null, "TFTP Client"), /*#__PURE__*/React.createElement("li", null, "Windows Server"))), /*#__PURE__*/React.createElement("li", null, "Use ", /*#__PURE__*/React.createElement("strong", null, "Add Features"), " to add necessary features"), /*#__PURE__*/React.createElement("li", null, "Use ", /*#__PURE__*/React.createElement("strong", null, "Remove Features"), " to remove unnecessary features")));
  }

}

class WindowsFirewall extends Section {
  displayName() {
    return "Windows Firewall";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option2();
    } else if (this.props.version === "win8.1") {
      return this.option2();
    } else if (this.props.version === "win10") {
      return this.option2();
    } else if (this.props.version === "win2008") {
      return this.option3();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option2();
    } else if (this.props.version === "win2016") {
      return this.option2();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "System and Security")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Windows Firewall"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Turn Windows Firewall on or off")), /*#__PURE__*/React.createElement("li", null, "For Home, Work, and Public network location settings:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] Turn on Windows Firewall"), /*#__PURE__*/React.createElement("li", null, "[ ] Block all incoming connections, including those in the list of allowed programs"), /*#__PURE__*/React.createElement("li", null, "[x] Notify me when Windows Firewall blocks a new program"))), /*#__PURE__*/React.createElement("li", null, "Press OK"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Allow a program or feature through Windows Firewall")), /*#__PURE__*/React.createElement("li", null, "Check that only Core Networking and required programs or services have checkmarks"), /*#__PURE__*/React.createElement("li", null, "Uncheck all other programs and features for both Home/Work (Private) and Public"), /*#__PURE__*/React.createElement("li", null, "Press OK"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Advanced settings")), /*#__PURE__*/React.createElement("li", null, "For Domain Profile, Private Profile, and Public Profile", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Windows Firewall is on"), /*#__PURE__*/React.createElement("li", null, "Inbound connections that do not match a rule are blocked"), /*#__PURE__*/React.createElement("li", null, "Outbound connections that do not match a rule are not blocked"))), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Inbound Rules")), /*#__PURE__*/React.createElement("li", null, "Enable the ", /*#__PURE__*/React.createElement("strong", null, "Core Networking"), " group and any required programs or services"), /*#__PURE__*/React.createElement("li", null, "Disable all other rules"), /*#__PURE__*/React.createElement("li", null, "Repeat the same for ", /*#__PURE__*/React.createElement("strong", null, "Outbound Rules"))));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "System and Security")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Windows Firewall"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Turn Windows Firewall on or off")), /*#__PURE__*/React.createElement("li", null, "For Private and Public network location settings:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] Turn on Windows Firewall"), /*#__PURE__*/React.createElement("li", null, "[ ] Block all incoming connections, including those in the list of allowed programs"), /*#__PURE__*/React.createElement("li", null, "[x] Notify me when Windows Firewall blocks a new program"))), /*#__PURE__*/React.createElement("li", null, "Press OK"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Allow a program or feature through Windows Firewall")), /*#__PURE__*/React.createElement("li", null, "Check that only Core Networking and required programs or services have checkmarks"), /*#__PURE__*/React.createElement("li", null, "Uncheck all other programs and features for both Private and Public"), /*#__PURE__*/React.createElement("li", null, "Press OK"), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Advanced settings")), /*#__PURE__*/React.createElement("li", null, "For Domain Profile, Private Profile, and Public Profile", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Windows Firewall is on"), /*#__PURE__*/React.createElement("li", null, "Inbound connections that do not match a rule are blocked"), /*#__PURE__*/React.createElement("li", null, "Outbound connections that do not match a rule are not blocked"))), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Inbound Rules")), /*#__PURE__*/React.createElement("li", null, "Enable the ", /*#__PURE__*/React.createElement("strong", null, "Core Networking"), " group and any required programs or services"), /*#__PURE__*/React.createElement("li", null, "Disable all other rules"), /*#__PURE__*/React.createElement("li", null, "Repeat the same for ", /*#__PURE__*/React.createElement("strong", null, "Outbound Rules"))));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Security")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Windows Firewall")), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Turn Windows Firewall on or off"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Under the General tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] On (recommended)"), /*#__PURE__*/React.createElement("li", null, "[ ] Block all incoming connections"))), /*#__PURE__*/React.createElement("li", null, "Under the Exceptions tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Only Core Networking and any required programs or services should have checkmarks"), /*#__PURE__*/React.createElement("li", null, "Uncheck all other programs and features"))), /*#__PURE__*/React.createElement("li", null, "Under the Advanced tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Put a checkmark on all Network connections")))));
  }

}

class WindowsServerRoles extends Section {
  displayName() {
    return "Windows Server Roles";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "By default, no roles are installed", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", /*#__PURE__*/React.createElement("strong", null, "Server Manager")), /*#__PURE__*/React.createElement("li", null, "Find and double click on ", /*#__PURE__*/React.createElement("strong", null, "Roles")), /*#__PURE__*/React.createElement("li", null, "Check the readme for which roles should be installed"), /*#__PURE__*/React.createElement("li", null, "Use ", /*#__PURE__*/React.createElement("strong", null, "Add Roles"), " to add necessary server roles"), /*#__PURE__*/React.createElement("li", null, "Use ", /*#__PURE__*/React.createElement("strong", null, "Remove Roles"), " to remove unnecessary server roles")));
  }

}

class WindowsSettings extends Section {
  displayName() {
    return "Windows Settings";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Windows button"), /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("strong", null, "Settings"), " (gear icon)")));
  }

}

class WindowsUpdate extends Section {
  displayName() {
    return "Windows Update";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "win7") {
      return this.option1();
    } else if (this.props.version === "win8") {
      return this.option1();
    } else if (this.props.version === "win8.1") {
      return this.option1();
    } else if (this.props.version === "win10") {
      return this.option2();
    } else if (this.props.version === "win2008") {
      return this.option3();
    } else if (this.props.version === "win2008r2") {
      return this.option1();
    } else if (this.props.version === "win2012") {
      return this.option1();
    } else if (this.props.version === "win2016") {
      return this.option1();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "System and Security")), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Windows Update"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Check for Updates")), /*#__PURE__*/React.createElement("li", null, "If there are any critical or important updates, click on ", /*#__PURE__*/React.createElement("strong", null, "Install Updates")), /*#__PURE__*/React.createElement("li", null, "Wait for updates to finish"), /*#__PURE__*/React.createElement("li", null, "Repeat until no remaining critical and important updates")));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(WindowsSettings).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Update & Security")), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Windows Update"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Check for Updates")), /*#__PURE__*/React.createElement("li", null, "If there are any critical or important updates, click on ", /*#__PURE__*/React.createElement("strong", null, "Install Updates")), /*#__PURE__*/React.createElement("li", null, "Wait for updates to finish"), /*#__PURE__*/React.createElement("li", null, "Repeat until no remaining critical and important updates")));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(ControlPanel).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Security")), /*#__PURE__*/React.createElement("li", null, "Find ", /*#__PURE__*/React.createElement("strong", null, "Windows Update"))), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Find and click on ", /*#__PURE__*/React.createElement("strong", null, "Check for Updates")), /*#__PURE__*/React.createElement("li", null, "If there are any critical or important updates, click on ", /*#__PURE__*/React.createElement("strong", null, "Install Updates")), /*#__PURE__*/React.createElement("li", null, "Wait for updates to finish"), /*#__PURE__*/React.createElement("li", null, "Repeat until no remaining critical and important updates")));
  }

}
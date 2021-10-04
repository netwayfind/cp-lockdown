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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/pam.d/common-auth")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Add the following to the end of the file:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "auth required pam_tally2.so deny=5 onerr=fail unlock_time=1800"), /*#__PURE__*/React.createElement("li", null, "this will set lockout to 5 attempts and lock out for 1800 seconds (30 minutes)")))));
  }

}

class Applications extends Section {
  displayName() {
    return "Applications";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.ubuntu();
    } else if (this.props.version === "ubuntu16.04") {
      return this.ubuntu();
    } else if (this.props.version === "debian8") {
      return this.debian();
    }

    return "unknown";
  }

  ubuntu() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Ubuntu icon button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "Ubuntu Software Center")), /*#__PURE__*/React.createElement("li", null, "Click on icon")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "Installed"), " button"), /*#__PURE__*/React.createElement("li", null, "Review readme for applications or categories that must be removed"), /*#__PURE__*/React.createElement("li", null, "For each application category (e.g. Accessories)", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Check against readme if it should be removed"), /*#__PURE__*/React.createElement("li", null, "It's safer to leave program alone than to remove it"), /*#__PURE__*/React.createElement("li", null, "To remove application, click on it, then press ", /*#__PURE__*/React.createElement("strong", null, "Remove"), " button")))));
  }

  debian() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "Activities")), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "Software")), /*#__PURE__*/React.createElement("li", null, "Click on icon")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "Installed"), " button"), /*#__PURE__*/React.createElement("li", null, "Review readme for applications or categories that must be removed"), /*#__PURE__*/React.createElement("li", null, "For each entry:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Check against readme if it should be removed"), /*#__PURE__*/React.createElement("li", null, "It's safer to leave program alone than to remove it"), /*#__PURE__*/React.createElement("li", null, "To remove application, click on ", /*#__PURE__*/React.createElement("strong", null, "Remove"), " button")))));
  }

}

class Auditd extends Section {
  displayName() {
    return "auditd";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo apt-get install auditd"), /*#__PURE__*/React.createElement("li", null, "sudo auditctl -e 1")));
  }

}

class BootupManager extends Section {
  displayName() {
    return "boot-up manager";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo apt-get install bum"), /*#__PURE__*/React.createElement("li", null, "sudo bum"), /*#__PURE__*/React.createElement("li", null, "Click checkmark for ", /*#__PURE__*/React.createElement("strong", null, "Advanced")), /*#__PURE__*/React.createElement("li", null, "Review list of programs that are set to start automatically at boot"), /*#__PURE__*/React.createElement("li", null, "Add checkmark for services required to be running"), /*#__PURE__*/React.createElement("li", null, "Remove checkmark for services that are not necessary to run")), "Reference: ", /*#__PURE__*/React.createElement("a", {
      href: "https://help.ubuntu.com/community/BootServices"
    }, "https://help.ubuntu.com/community/BootServices"));
  }

}

class Chkrootkit extends Section {
  displayName() {
    return "chkrootkit";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo apt-get install chkrootkit"), /*#__PURE__*/React.createElement("li", null, "Follow installation instructions"), /*#__PURE__*/React.createElement("li", null, "sudo chkrootkit"), /*#__PURE__*/React.createElement("li", null, "After scan completes, review findings.")));
  }

}

class Cron extends Section {
  displayName() {
    return "cron";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "Review the following files or directories:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "/etc/crontab"), /*#__PURE__*/React.createElement("li", null, "/etc/cron.d/"), /*#__PURE__*/React.createElement("li", null, "/etc/cron.hourly/"), /*#__PURE__*/React.createElement("li", null, "/etc/cron.daily/"), /*#__PURE__*/React.createElement("li", null, "/etc/cron.weekly/"), /*#__PURE__*/React.createElement("li", null, "/etc/cron.monthly/"), /*#__PURE__*/React.createElement("li", null, "/var/spool/cron/crontabs/")), "Reference: ", /*#__PURE__*/React.createElement("a", {
      href: "https://help.ubuntu.com/community/CronHowto"
    }, "https://help.ubuntu.com/community/CronHowto"));
  }

}

class DefaultGroups extends Section {
  displayName() {
    return "Default Groups";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.ubuntu();
    } else if (this.props.version === "ubuntu16.04") {
      return this.ubuntu();
    } else if (this.props.version === "debian8") {
      return this.debian();
    }

    return "unknown";
  }

  ubuntu() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "root"), /*#__PURE__*/React.createElement("li", null, "daemon"), /*#__PURE__*/React.createElement("li", null, "bin"), /*#__PURE__*/React.createElement("li", null, "sys"), /*#__PURE__*/React.createElement("li", null, "adm"), /*#__PURE__*/React.createElement("li", null, "tty"), /*#__PURE__*/React.createElement("li", null, "disk"), /*#__PURE__*/React.createElement("li", null, "lp"), /*#__PURE__*/React.createElement("li", null, "mail"), /*#__PURE__*/React.createElement("li", null, "news"), /*#__PURE__*/React.createElement("li", null, "uucp"), /*#__PURE__*/React.createElement("li", null, "man"), /*#__PURE__*/React.createElement("li", null, "proxy"), /*#__PURE__*/React.createElement("li", null, "kmem"), /*#__PURE__*/React.createElement("li", null, "dialout"), /*#__PURE__*/React.createElement("li", null, "fax"), /*#__PURE__*/React.createElement("li", null, "voice"), /*#__PURE__*/React.createElement("li", null, "cdrom"), /*#__PURE__*/React.createElement("li", null, "floppy"), /*#__PURE__*/React.createElement("li", null, "tape"), /*#__PURE__*/React.createElement("li", null, "sudo"), /*#__PURE__*/React.createElement("li", null, "audio"), /*#__PURE__*/React.createElement("li", null, "dip"), /*#__PURE__*/React.createElement("li", null, "www-data"), /*#__PURE__*/React.createElement("li", null, "backup"), /*#__PURE__*/React.createElement("li", null, "operator"), /*#__PURE__*/React.createElement("li", null, "list"), /*#__PURE__*/React.createElement("li", null, "irc"), /*#__PURE__*/React.createElement("li", null, "src"), /*#__PURE__*/React.createElement("li", null, "gnats"), /*#__PURE__*/React.createElement("li", null, "shadow"), /*#__PURE__*/React.createElement("li", null, "utmp"), /*#__PURE__*/React.createElement("li", null, "video"), /*#__PURE__*/React.createElement("li", null, "sasl"), /*#__PURE__*/React.createElement("li", null, "plugdev"), /*#__PURE__*/React.createElement("li", null, "staff"), /*#__PURE__*/React.createElement("li", null, "games"), /*#__PURE__*/React.createElement("li", null, "users"), /*#__PURE__*/React.createElement("li", null, "nogroup"), /*#__PURE__*/React.createElement("li", null, "libuuid"), /*#__PURE__*/React.createElement("li", null, "crontab"), /*#__PURE__*/React.createElement("li", null, "syslog"), /*#__PURE__*/React.createElement("li", null, "fuse"), /*#__PURE__*/React.createElement("li", null, "messagebus"), /*#__PURE__*/React.createElement("li", null, "bluetooth"), /*#__PURE__*/React.createElement("li", null, "scanner"), /*#__PURE__*/React.createElement("li", null, "colord"), /*#__PURE__*/React.createElement("li", null, "lpadmin"), /*#__PURE__*/React.createElement("li", null, "ssl-cert"), /*#__PURE__*/React.createElement("li", null, "lightdm"), /*#__PURE__*/React.createElement("li", null, "nopasswdlogin"), /*#__PURE__*/React.createElement("li", null, "netdev"), /*#__PURE__*/React.createElement("li", null, "whoopsie"), /*#__PURE__*/React.createElement("li", null, "mlocate"), /*#__PURE__*/React.createElement("li", null, "ssh"), /*#__PURE__*/React.createElement("li", null, "avahi-autoipd"), /*#__PURE__*/React.createElement("li", null, "avahi"), /*#__PURE__*/React.createElement("li", null, "pulse"), /*#__PURE__*/React.createElement("li", null, "pulse-access"), /*#__PURE__*/React.createElement("li", null, "utempter"), /*#__PURE__*/React.createElement("li", null, "rtkit"), /*#__PURE__*/React.createElement("li", null, "saned"), /*#__PURE__*/React.createElement("li", null, "ubuntu"), /*#__PURE__*/React.createElement("li", null, "sambashare")));
  }

  debian() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "root"), /*#__PURE__*/React.createElement("li", null, "daemon"), /*#__PURE__*/React.createElement("li", null, "bin"), /*#__PURE__*/React.createElement("li", null, "sys"), /*#__PURE__*/React.createElement("li", null, "adm"), /*#__PURE__*/React.createElement("li", null, "tty"), /*#__PURE__*/React.createElement("li", null, "disk"), /*#__PURE__*/React.createElement("li", null, "lp"), /*#__PURE__*/React.createElement("li", null, "mail"), /*#__PURE__*/React.createElement("li", null, "news"), /*#__PURE__*/React.createElement("li", null, "uucp"), /*#__PURE__*/React.createElement("li", null, "man"), /*#__PURE__*/React.createElement("li", null, "proxy"), /*#__PURE__*/React.createElement("li", null, "kmem"), /*#__PURE__*/React.createElement("li", null, "dialout"), /*#__PURE__*/React.createElement("li", null, "fax"), /*#__PURE__*/React.createElement("li", null, "voice"), /*#__PURE__*/React.createElement("li", null, "cdrom"), /*#__PURE__*/React.createElement("li", null, "floppy"), /*#__PURE__*/React.createElement("li", null, "tape"), /*#__PURE__*/React.createElement("li", null, "sudo"), /*#__PURE__*/React.createElement("li", null, "audio"), /*#__PURE__*/React.createElement("li", null, "dip"), /*#__PURE__*/React.createElement("li", null, "www-data"), /*#__PURE__*/React.createElement("li", null, "backup"), /*#__PURE__*/React.createElement("li", null, "operator"), /*#__PURE__*/React.createElement("li", null, "list"), /*#__PURE__*/React.createElement("li", null, "irc"), /*#__PURE__*/React.createElement("li", null, "src"), /*#__PURE__*/React.createElement("li", null, "gnats"), /*#__PURE__*/React.createElement("li", null, "shadow"), /*#__PURE__*/React.createElement("li", null, "utmp"), /*#__PURE__*/React.createElement("li", null, "video"), /*#__PURE__*/React.createElement("li", null, "sasl"), /*#__PURE__*/React.createElement("li", null, "plugdev"), /*#__PURE__*/React.createElement("li", null, "staff"), /*#__PURE__*/React.createElement("li", null, "games"), /*#__PURE__*/React.createElement("li", null, "users"), /*#__PURE__*/React.createElement("li", null, "nogroup"), /*#__PURE__*/React.createElement("li", null, "systemd-journal"), /*#__PURE__*/React.createElement("li", null, "systemd-timesync"), /*#__PURE__*/React.createElement("li", null, "systemd-network"), /*#__PURE__*/React.createElement("li", null, "systemd-resolve"), /*#__PURE__*/React.createElement("li", null, "systemd-bus-proxy"), /*#__PURE__*/React.createElement("li", null, "input"), /*#__PURE__*/React.createElement("li", null, "crontab"), /*#__PURE__*/React.createElement("li", null, "netdev"), /*#__PURE__*/React.createElement("li", null, "uuidd"), /*#__PURE__*/React.createElement("li", null, "rtkit"), /*#__PURE__*/React.createElement("li", null, "avahi-autoipd"), /*#__PURE__*/React.createElement("li", null, "messagebus"), /*#__PURE__*/React.createElement("li", null, "ssh"), /*#__PURE__*/React.createElement("li", null, "bluetooth"), /*#__PURE__*/React.createElement("li", null, "geoclue"), /*#__PURE__*/React.createElement("li", null, "pulse"), /*#__PURE__*/React.createElement("li", null, "pulse-access"), /*#__PURE__*/React.createElement("li", null, "scanner"), /*#__PURE__*/React.createElement("li", null, "avahi"), /*#__PURE__*/React.createElement("li", null, "colord"), /*#__PURE__*/React.createElement("li", null, "saned"), /*#__PURE__*/React.createElement("li", null, "Debian-gdm")));
  }

}

class DefaultUsers extends Section {
  displayName() {
    return "Default Users";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.ubuntu();
    } else if (this.props.version === "ubuntu16.04") {
      return this.ubuntu();
    } else if (this.props.version === "debian8") {
      return this.debian();
    }

    return "unknown";
  }

  ubuntu() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "root"), /*#__PURE__*/React.createElement("li", null, "daemon"), /*#__PURE__*/React.createElement("li", null, "bin"), /*#__PURE__*/React.createElement("li", null, "sys"), /*#__PURE__*/React.createElement("li", null, "sync"), /*#__PURE__*/React.createElement("li", null, "games"), /*#__PURE__*/React.createElement("li", null, "man"), /*#__PURE__*/React.createElement("li", null, "lp"), /*#__PURE__*/React.createElement("li", null, "mail"), /*#__PURE__*/React.createElement("li", null, "news"), /*#__PURE__*/React.createElement("li", null, "uucp"), /*#__PURE__*/React.createElement("li", null, "proxy"), /*#__PURE__*/React.createElement("li", null, "www-data"), /*#__PURE__*/React.createElement("li", null, "backup"), /*#__PURE__*/React.createElement("li", null, "list"), /*#__PURE__*/React.createElement("li", null, "irc"), /*#__PURE__*/React.createElement("li", null, "gnats"), /*#__PURE__*/React.createElement("li", null, "nobody"), /*#__PURE__*/React.createElement("li", null, "libuuid"), /*#__PURE__*/React.createElement("li", null, "syslog"), /*#__PURE__*/React.createElement("li", null, "messagebus"), /*#__PURE__*/React.createElement("li", null, "colord"), /*#__PURE__*/React.createElement("li", null, "lightdm"), /*#__PURE__*/React.createElement("li", null, "whoopsie"), /*#__PURE__*/React.createElement("li", null, "avahi-autoipd"), /*#__PURE__*/React.createElement("li", null, "avahi"), /*#__PURE__*/React.createElement("li", null, "usbmux"), /*#__PURE__*/React.createElement("li", null, "kernoops"), /*#__PURE__*/React.createElement("li", null, "pulse"), /*#__PURE__*/React.createElement("li", null, "rtkit"), /*#__PURE__*/React.createElement("li", null, "speech-dispatcher"), /*#__PURE__*/React.createElement("li", null, "dispatcher"), /*#__PURE__*/React.createElement("li", null, "hplip"), /*#__PURE__*/React.createElement("li", null, "saned"), /*#__PURE__*/React.createElement("li", null, "ubuntu")));
  }

  debian() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "root"), /*#__PURE__*/React.createElement("li", null, "daemon"), /*#__PURE__*/React.createElement("li", null, "bin"), /*#__PURE__*/React.createElement("li", null, "sys"), /*#__PURE__*/React.createElement("li", null, "sync"), /*#__PURE__*/React.createElement("li", null, "games"), /*#__PURE__*/React.createElement("li", null, "man"), /*#__PURE__*/React.createElement("li", null, "lp"), /*#__PURE__*/React.createElement("li", null, "mail"), /*#__PURE__*/React.createElement("li", null, "news"), /*#__PURE__*/React.createElement("li", null, "uucp"), /*#__PURE__*/React.createElement("li", null, "proxy"), /*#__PURE__*/React.createElement("li", null, "www-data"), /*#__PURE__*/React.createElement("li", null, "backup"), /*#__PURE__*/React.createElement("li", null, "list"), /*#__PURE__*/React.createElement("li", null, "irc"), /*#__PURE__*/React.createElement("li", null, "gnats"), /*#__PURE__*/React.createElement("li", null, "nobody"), /*#__PURE__*/React.createElement("li", null, "systemd-timesync"), /*#__PURE__*/React.createElement("li", null, "systemd-network"), /*#__PURE__*/React.createElement("li", null, "systemd-resolve"), /*#__PURE__*/React.createElement("li", null, "systemd-bus-proxy"), /*#__PURE__*/React.createElement("li", null, "_apt"), /*#__PURE__*/React.createElement("li", null, "uuidd"), /*#__PURE__*/React.createElement("li", null, "rtkit"), /*#__PURE__*/React.createElement("li", null, "dnsmasq"), /*#__PURE__*/React.createElement("li", null, "avahi-autoipd"), /*#__PURE__*/React.createElement("li", null, "messagebus"), /*#__PURE__*/React.createElement("li", null, "usbmux"), /*#__PURE__*/React.createElement("li", null, "geoclue"), /*#__PURE__*/React.createElement("li", null, "speech-dispatcher"), /*#__PURE__*/React.createElement("li", null, "pulse"), /*#__PURE__*/React.createElement("li", null, "avahi"), /*#__PURE__*/React.createElement("li", null, "colord"), /*#__PURE__*/React.createElement("li", null, "saned"), /*#__PURE__*/React.createElement("li", null, "Debian-gdm")));
  }

}

class OpenFile extends Section {
  displayName() {
    return "Open file";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "Option 1 (gedit)", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo gedit [file path]")), "Option 2 (nano)", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo nano [file path]")), "Option 3 (vi or vim)", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo vi [file path]"), /*#__PURE__*/React.createElement("li", null, "sudo vim [file path]")));
  }

}

class FilesystemPermissions extends Section {
  displayName() {
    return "Filesystem Permissions";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "ls -la /", /*#__PURE__*/React.createElement("br", null), "Default permissions:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "drwxr-xr-x root root home"), /*#__PURE__*/React.createElement("li", null, "drwx------ root root root")), "To fix:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo chown root:root /home"), /*#__PURE__*/React.createElement("li", null, "sudo chmod 755 /home"), /*#__PURE__*/React.createElement("li", null, "sudo chown root:root /root"), /*#__PURE__*/React.createElement("li", null, "sudo chown 700 /root"))), /*#__PURE__*/React.createElement("li", null, "cd /home"), /*#__PURE__*/React.createElement("li", null, "ls -la", /*#__PURE__*/React.createElement("br", null), "Default permissions for every user:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "drwxr-xr-x <user> <user group> <user>"), /*#__PURE__*/React.createElement("li", null, "For example: drwxr-xr-x ubuntu ubuntu ubuntu")), "To fix:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo chown <user>:<user group> <user folder>"), /*#__PURE__*/React.createElement("li", null, "For example: sudo chown ubuntu:ubuntu ubuntu"), /*#__PURE__*/React.createElement("li", null, "sudo chmod 755 <user folder>"), /*#__PURE__*/React.createElement("li", null, "For example: sudo chmod 755 ubuntu")))));
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Option 1"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "find /home -name \"*.mp3*\"", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "This will search for .mp3 files in /home"))), /*#__PURE__*/React.createElement("li", null, "If there are any results, inspect the files and remove as necessary"), /*#__PURE__*/React.createElement("li", null, "Repeat from step 2 for the following file extensions", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "(music) - .mp3, .wav, .wma, .aac"), /*#__PURE__*/React.createElement("li", null, "(movie/video) - .mp4, .mov, .avi")))), /*#__PURE__*/React.createElement("h3", null, "Option 2"), "Manually search for files in all user directories and remove unauthorized files.");
  }

}

class Firewall extends Section {
  displayName() {
    return "Firewall";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Option 1: gufw"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo apt-get update"), /*#__PURE__*/React.createElement("li", null, "sudo apt-get install gufw"), /*#__PURE__*/React.createElement("li", null, "sudo gufw"), /*#__PURE__*/React.createElement("li", null, "Set to the following settings:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Profile: Office"), /*#__PURE__*/React.createElement("li", null, "Status: ON"), /*#__PURE__*/React.createElement("li", null, "Incoming: Deny"), /*#__PURE__*/React.createElement("li", null, "Outgoing: Allow"))), /*#__PURE__*/React.createElement("li", null, "For new inbound rules", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Click on Rules"), /*#__PURE__*/React.createElement("li", null, "Click on +"), /*#__PURE__*/React.createElement("li", null, "Click on Simple"), /*#__PURE__*/React.createElement("li", null, "Name: [set name here]"), /*#__PURE__*/React.createElement("li", null, "Policy: Allow"), /*#__PURE__*/React.createElement("li", null, "Direction: In"), /*#__PURE__*/React.createElement("li", null, "Protocol: [protocol]"), /*#__PURE__*/React.createElement("li", null, "Port: [port]"), /*#__PURE__*/React.createElement("li", null, "Click on Add")))), /*#__PURE__*/React.createElement("h3", null, "Option 2: iptables"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Check IPv4 firewall rules", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo iptables -nvL"))), /*#__PURE__*/React.createElement("li", null, "Reset IPv4 firewall rules", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo iptables -F"), /*#__PURE__*/React.createElement("li", null, "sudo iptables -X"))), /*#__PURE__*/React.createElement("li", null, "Set default IPv4 firewall rules", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo iptables -A INPUT -m state --state INVALID -j DROP"), /*#__PURE__*/React.createElement("li", null, "sudo iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT"), /*#__PURE__*/React.createElement("li", null, "sudo iptables -A INPUT -i lo -j ACCEPT"))), /*#__PURE__*/React.createElement("li", null, "Add allowed INPUT rule to IPv4 firewall", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo iptables -A INPUT -p [protocol] --dport [port] -j ACCEPT"), /*#__PURE__*/React.createElement("li", null, "Check Readme for required services. Research any required ports that need to be opened on firewall.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Example for SSH: sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT"))))), /*#__PURE__*/React.createElement("li", null, "Set default IPv4 firewall policy", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo iptables -P INPUT DROP"), /*#__PURE__*/React.createElement("li", null, "sudo iptables -P FORWARD DROP"), /*#__PURE__*/React.createElement("li", null, "sudo iptables -P OUTPUT ACCEPT"))), /*#__PURE__*/React.createElement("li", null, "Check IPv6 firewall rules", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo ip6tables -nvL"))), /*#__PURE__*/React.createElement("li", null, "Reset IPv6 firewall rules", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo ip6tables -F"), /*#__PURE__*/React.createElement("li", null, "sudo ip6tables -X"))), /*#__PURE__*/React.createElement("li", null, "Set default IPv6 firewall rules", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo ip6tables -A INPUT -m state --state INVALID -j DROP"), /*#__PURE__*/React.createElement("li", null, "sudo ip6tables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT"), /*#__PURE__*/React.createElement("li", null, "sudo ip6tables -A INPUT -i lo -j ACCEPT"))), /*#__PURE__*/React.createElement("li", null, "Add allowed INPUT rule to IPv6 firewall", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo ip6tables -A INPUT -p [protocol] --dport [port] -j ACCEPT"), /*#__PURE__*/React.createElement("li", null, "Check Readme for required services. Research any required ports that need to be opened on firewall.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Example for SSH: sudo ip6tables -A INPUT -p tcp --dport 22 -j ACCEPT"))))), /*#__PURE__*/React.createElement("li", null, "Set default IPv6 firewall policy", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo ip6tables -P INPUT DROP"), /*#__PURE__*/React.createElement("li", null, "sudo ip6tables -P FORWARD DROP"), /*#__PURE__*/React.createElement("li", null, "sudo ip6tables -P OUTPUT ACCEPT")))));
  }

}

class Groups extends Section {
  displayName() {
    return "Groups";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "cat /etc/group")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Check ", React.createElement(DefaultGroups).type.prototype.getLink()), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "root group should be empty"), /*#__PURE__*/React.createElement("li", null, "sudo group should only have administrator users"), /*#__PURE__*/React.createElement("li", null, "users group should only have users specified in the readme"), /*#__PURE__*/React.createElement("li", null, "each user may have a corresponding group")), /*#__PURE__*/React.createElement("li", null, "To add a user to a group:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo gpasswd -a [user] [group]"))), /*#__PURE__*/React.createElement("li", null, "To remove a user from a group:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo gpasswd -d [user] [group]")))));
  }

}

class GuestAccess extends Section {
  displayName() {
    return "Guest Access";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.option1();
    } else if (this.props.version === "ubuntu16.04") {
      return this.option2();
    } else if (this.props.version === "debian8") {
      return this.option3();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/lightdm/lightdm.conf"), /*#__PURE__*/React.createElement("li", null, "Make sure the file has the following content:", /*#__PURE__*/React.createElement("p", null), "[SeatDefaults]", /*#__PURE__*/React.createElement("br", null), "greeter-session=unity-greeter", /*#__PURE__*/React.createElement("br", null), "allow-guest=false"), /*#__PURE__*/React.createElement("li", null, "Note: Any mistakes will break the GUI"), /*#__PURE__*/React.createElement("li", null, "Save the file"), /*#__PURE__*/React.createElement("li", null, "sudo restart lightdm"), /*#__PURE__*/React.createElement("li", null, "The GUI should restart and guest access should be disabled.")));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/lightdm/lightdm.conf"), /*#__PURE__*/React.createElement("li", null, "Make sure the file has the following content:", /*#__PURE__*/React.createElement("p", null), "[SeatDefaults]", /*#__PURE__*/React.createElement("br", null), "greeter-session=unity-greeter", /*#__PURE__*/React.createElement("br", null), "allow-guest=false"), /*#__PURE__*/React.createElement("li", null, "Note: Any mistakes will break the GUI"), /*#__PURE__*/React.createElement("li", null, "Save the file"), /*#__PURE__*/React.createElement("li", null, "sudo systemctl restart lightdm"), /*#__PURE__*/React.createElement("li", null, "The GUI should restart and guest access should be disabled.")));
  }

  option3() {
    return "Not needed";
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "cat /etc/hosts")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Disable any entry lines by adding a # to the start of the line"), /*#__PURE__*/React.createElement("li", null, "Default file entries:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "127.0.0.1 localhost"), /*#__PURE__*/React.createElement("li", null, "127.0.1.1 ubuntu"))), /*#__PURE__*/React.createElement("li", null, "Ignore IPv6 lines")));
  }

}

class LibpamCracklib extends Section {
  displayName() {
    return "libpam-cracklib";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo apt-get install libpam-cracklib")));
  }

}

class NetworkConnections extends Section {
  displayName() {
    return "Network Connections";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.option1();
    } else if (this.props.version === "ubuntu16.04") {
      return this.option1();
    } else if (this.props.version === "debian8") {
      return this.option2();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo netstat [options]")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Check listening network connections"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "netstat -ntulp"), /*#__PURE__*/React.createElement("li", null, "Make sure only necessary services have listening connections on the correct ports")), /*#__PURE__*/React.createElement("li", null, "Check established network connections"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "netstat -ntup"))));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo netstat [options]")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Check listening network connections"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "ss -ntulp"), /*#__PURE__*/React.createElement("li", null, "Make sure only necessary services have listening connections on the correct ports")), /*#__PURE__*/React.createElement("li", null, "Check established network connections"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "ss -ntup"))));
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/pam.d/common-password"), /*#__PURE__*/React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/login.defs")), /*#__PURE__*/React.createElement("h3", null, "Settings"), "For /etc/pam.d/common-password", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Find the following line in the file:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "password\xA0\xA0\xA0\xA0requisite\xA0\xA0\xA0\xA0pam_cracklib.so retry=3 minlen=8 difok=3"))), /*#__PURE__*/React.createElement("li", null, "To require at least 10 characters, change to the following:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "minlen=10"))), /*#__PURE__*/React.createElement("li", null, "To require password complexity, add to the end of the line:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1"))), /*#__PURE__*/React.createElement("li", null, "The line should now look like the following", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "password\xA0\xA0\xA0\xA0requisite\xA0\xA0\xA0\xA0pam_cracklib.so retry=3 minlen=10 difok=3 ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1"))), /*#__PURE__*/React.createElement("li", null, "Find the following line in the file:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "password\xA0\xA0\xA0\xA0[success=1 default=ignore]\xA0\xA0\xA0\xA0pam_unix.so obscure use_authtok try_first_pass sha512"))), /*#__PURE__*/React.createElement("li", null, "To remember last 5 passwords, add to the end of the line:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "remember=5"))), /*#__PURE__*/React.createElement("li", null, "To require at least 10 characters, add to the end of the line:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "minlen=10"))), /*#__PURE__*/React.createElement("li", null, "The line should now look like the following", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "password\xA0\xA0\xA0\xA0[success=1 default=ignore]\xA0\xA0\xA0\xA0pam_unix.so obscure use_authtok try_first_pass sha512 remember=5 minlen=10"))), /*#__PURE__*/React.createElement("li", null, "Save the file")), "For /etc/login.defs", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Find PASS_MAX_DAYS, set to 90"), /*#__PURE__*/React.createElement("li", null, "Find PASS_MIN_DAYS, set to 10"), /*#__PURE__*/React.createElement("li", null, "Find PASS_WARN_AGE, set to 7")));
  }

}

class Rkhunter extends Section {
  displayName() {
    return "rkhunter";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo apt-get install rkhunter"), /*#__PURE__*/React.createElement("li", null, "Follow installation instructions"), /*#__PURE__*/React.createElement("li", null, "sudo rkhunter --update"), /*#__PURE__*/React.createElement("li", null, "sudo rkhunter -c"), /*#__PURE__*/React.createElement("li", null, "Follow scan instructions"), /*#__PURE__*/React.createElement("li", null, "After scan completes, review findings, and fix issues")));
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
    if (this.props.version === "ubuntu") {
      return this.option1();
    } else if (this.props.version === "ubuntu16.04") {
      return this.option2();
    } else if (this.props.version === "debian8") {
      return this.option2();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink())), /*#__PURE__*/React.createElement("h3", null, "Settings"), "Check status of all services:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "service --status-all")), "Check status of one service (may not always work)", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "service [service-name] status")), "Other common service commands", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "service [service-name] start"), /*#__PURE__*/React.createElement("li", null, "service [service-name] stop"), /*#__PURE__*/React.createElement("li", null, "service [service-name] restart")), /*#__PURE__*/React.createElement("h3", null, "Disable service autostart"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "service [service-name] stop"), /*#__PURE__*/React.createElement("li", null, "update-rc.d -f [service] remove")), this.services());
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink())), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("p", null, "Check status of all services"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "systemctl list-unit-files")), /*#__PURE__*/React.createElement("p", null, "Check status of one service"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "systemctl status [service-name]")), /*#__PURE__*/React.createElement("p", null, "Other common service commands"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "systemctl start [service-name]"), /*#__PURE__*/React.createElement("li", null, "systemctl stop [service-name]"), /*#__PURE__*/React.createElement("li", null, "systemctl restart [service-name]")), /*#__PURE__*/React.createElement("h3", null, "Disable service autostart"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "systemctl stop [service-name]"), /*#__PURE__*/React.createElement("li", null, "systemctl disable [service-name]")), this.services());
  }

  services() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Common Services"), "The following services should be disabled if they are not required:", /*#__PURE__*/React.createElement("p", null), "Database", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "mysqld"), /*#__PURE__*/React.createElement("li", null, "postgres")), "E-mail", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "dovecot"), /*#__PURE__*/React.createElement("li", null, "exim4"), /*#__PURE__*/React.createElement("li", null, "postfix")), "File Sharing", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "nfs"), /*#__PURE__*/React.createElement("li", null, "nmbd"), /*#__PURE__*/React.createElement("li", null, "rpc.mountd"), /*#__PURE__*/React.createElement("li", null, "rpc.nfsd"), /*#__PURE__*/React.createElement("li", null, "smbd"), /*#__PURE__*/React.createElement("li", null, "vsftpd")), "Music", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "mpd")), "Networking", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "avahi-daemon"), /*#__PURE__*/React.createElement("li", null, "bind"), /*#__PURE__*/React.createElement("li", null, "dnsmasq"), /*#__PURE__*/React.createElement("li", null, "xinetd"), /*#__PURE__*/React.createElement("li", null, "inetd"), /*#__PURE__*/React.createElement("li", null, "sshd"), /*#__PURE__*/React.createElement("li", null, "telnet")), "Printing, Scanning", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "cupsd"), /*#__PURE__*/React.createElement("li", null, "saned")), "Time", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "ntpd")), "Web/Application Server", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "apache2"), /*#__PURE__*/React.createElement("li", null, "httpd"), /*#__PURE__*/React.createElement("li", null, "jetty"), /*#__PURE__*/React.createElement("li", null, "nginx"), /*#__PURE__*/React.createElement("li", null, "tomcat")));
  }

}

class Sudo extends Section {
  displayName() {
    return "sudo";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), "Option 1", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "sudo visudo")), "Option 2", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/sudoers")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Comment lines start with #"), /*#__PURE__*/React.createElement("li", null, "The following are the default settings:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Defaults env_reset"), /*#__PURE__*/React.createElement("li", null, "Defaults mail_badpass"), /*#__PURE__*/React.createElement("li", null, "Defaults secure_path=\"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\""), /*#__PURE__*/React.createElement("li", null, "root ALL=(ALL:ALL) ALL"), /*#__PURE__*/React.createElement("li", null, "%admin ALL=(ALL) ALL"), /*#__PURE__*/React.createElement("li", null, "%sudo ALL=(ALL:ALL) ALL"))), /*#__PURE__*/React.createElement("li", null, "Comment out all other entries")));
  }

}

class SystemLog extends Section {
  displayName() {
    return "System Log";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.ubuntu();
    } else if (this.props.version === "ubuntu16.04") {
      return this.ubuntu();
    } else if (this.props.version === "debian8") {
      return this.debian();
    }

    return "unknown";
  }

  ubuntu() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Ubuntu icon"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "System Log")), /*#__PURE__*/React.createElement("li", null, "Click on icon")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Review logs prior to today for system changes"), /*#__PURE__*/React.createElement("li", null, "Pay attention to user accounts, especially root/sudo")), "Reference: ", /*#__PURE__*/React.createElement("a", {
      href: "https://help.ubuntu.com/community/LinuxLogFiles"
    }, "https://help.ubuntu.com/community/LinuxLogFiles"));
  }

  debian() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("strong", null, "Activities")), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "Logs")), /*#__PURE__*/React.createElement("li", null, "Click on icon")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Review logs prior to today for system changes"), /*#__PURE__*/React.createElement("li", null, "Pay attention to user accounts, especially root/sudo")));
  }

}

class SystemSettings extends Section {
  displayName() {
    return "System Settings";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.ubuntu();
    } else if (this.props.version === "ubuntu16.04") {
      return this.ubuntu();
    } else if (this.props.version === "debian8") {
      return this.debian();
    }

    return "unknown";
  }

  ubuntu() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press the gear-like icon at the top right of the screen. (Next to the current time)"), /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("b", null, "System Settings"))));
  }

  debian() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press the Power icon at the top right of the screen."), /*#__PURE__*/React.createElement("li", null, "Click on Settings icon (diagonal cross of screwdriver and wrench)")));
  }

}

class Terminal extends Section {
  displayName() {
    return "Terminal";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.option1();
    } else if (this.props.version === "ubuntu16.04") {
      return this.option1();
    } else if (this.props.version === "debian8") {
      return this.option2();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "Option 1", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Press Ubuntu icon button"), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "terminal"), ", press Enter")), "Option 2", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("strong", null, "Applications"), " menu"), /*#__PURE__*/React.createElement("li", null, "Go to ", /*#__PURE__*/React.createElement("strong", null, "Accessories")), /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("strong", null, "Terminal"))));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("strong", null, "Applications")), /*#__PURE__*/React.createElement("li", null, "Go to ", /*#__PURE__*/React.createElement("strong", null, "Utilities")), /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("strong", null, "Terminal"))));
  }

}

class Updates extends Section {
  displayName() {
    return "Updates";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.option1();
    } else if (this.props.version === "ubuntu16.04") {
      return this.option2();
    } else if (this.props.version === "debian8") {
      return this.option3();
    }

    return "unknown";
  }

  option1() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(SystemSettings).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Under ", /*#__PURE__*/React.createElement("b", null, "System"), " section, find and click on ", /*#__PURE__*/React.createElement("b", null, "Software & Updates")), /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("b", null, "Revert"), " for default settings"), /*#__PURE__*/React.createElement("li", null, "For Ubuntu Software tab", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "[x] Canonical-supported free and open-source software (main)"), /*#__PURE__*/React.createElement("li", null, "[x] Community-maintained free and open-source software (universe)"), /*#__PURE__*/React.createElement("li", null, "[Optional] Proprietary drivers for devices (restricted)"), /*#__PURE__*/React.createElement("li", null, "[Optional] Software restricted by copyright or legal issues (multiverse)"), /*#__PURE__*/React.createElement("li", null, "For ", /*#__PURE__*/React.createElement("strong", null, "Download from:"), ", select ", /*#__PURE__*/React.createElement("strong", null, "Other")), /*#__PURE__*/React.createElement("li", null, "Click ", /*#__PURE__*/React.createElement("strong", null, "Select Best Server"), ". Wait for tests to complete."), /*#__PURE__*/React.createElement("li", null, "Click ", /*#__PURE__*/React.createElement("strong", null, "Choose Server")))), /*#__PURE__*/React.createElement("li", null, "For Updates tab", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "[x] Important security updates (*-security)"), /*#__PURE__*/React.createElement("li", null, "[x] Recommended updates (*-updates)"), /*#__PURE__*/React.createElement("li", null, "[Optional] Pre-release updates (*-proposed)"), /*#__PURE__*/React.createElement("li", null, "[Optional] Unsupported updates (*-backports)"), /*#__PURE__*/React.createElement("li", null, "Automatic check for updates: Daily"), /*#__PURE__*/React.createElement("li", null, "When there are security updates: Display immediately"))), /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo apt-get update && sudo apt-get upgrade -y")));
  }

  option2() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(SystemSettings).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Under ", /*#__PURE__*/React.createElement("b", null, "System"), " section, find and click on ", /*#__PURE__*/React.createElement("b", null, "Software & Updates")), /*#__PURE__*/React.createElement("li", null, "Press ", /*#__PURE__*/React.createElement("b", null, "Revert"), " for default settings"), /*#__PURE__*/React.createElement("li", null, "For Ubuntu Software tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] Canonical-supported free and open-source software (main)"), /*#__PURE__*/React.createElement("li", null, "[x] Community-maintained free and open-source software (universe)"), /*#__PURE__*/React.createElement("li", null, "[x] Proprietary drivers for devices (restricted)"), /*#__PURE__*/React.createElement("li", null, "[x] Software restricted by copyright or legal issues (multiverse)"), /*#__PURE__*/React.createElement("li", null, "[ ] Source code"), /*#__PURE__*/React.createElement("li", null, "For ", /*#__PURE__*/React.createElement("strong", null, "Download from:"), ", select ", /*#__PURE__*/React.createElement("strong", null, "Other")), /*#__PURE__*/React.createElement("li", null, "Click ", /*#__PURE__*/React.createElement("strong", null, "Select Best Server"), ". Wait for tests to complete."), /*#__PURE__*/React.createElement("li", null, "Click ", /*#__PURE__*/React.createElement("strong", null, "Choose Server")))), /*#__PURE__*/React.createElement("li", null, "For Updates tab", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[x] Important security updates (*-security)"), /*#__PURE__*/React.createElement("li", null, "[x] Recommended updates (*-updates)"), /*#__PURE__*/React.createElement("li", null, "[x] Unsupported updates (*-backports)"), /*#__PURE__*/React.createElement("li", null, "Automatic check for updates: Daily"), /*#__PURE__*/React.createElement("li", null, "When there are security updates: Display immediately"), /*#__PURE__*/React.createElement("li", null, "When there are other updates: Display weekly"), /*#__PURE__*/React.createElement("li", null, "Notify me of a new Ubuntu version: For long-term support version"))), /*#__PURE__*/React.createElement("li", null, "For Developer Options", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "[ ] Pre-released updates (*-proposed)"))), /*#__PURE__*/React.createElement("li", null, "Click ", /*#__PURE__*/React.createElement("strong", null, "Close")), /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo apt-get update && sudo apt-get upgrade -y")));
  }

  option3() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Location"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("strong", null, "Activities")), /*#__PURE__*/React.createElement("li", null, "Type ", /*#__PURE__*/React.createElement("strong", null, "Software & Updates")), /*#__PURE__*/React.createElement("li", null, "Click on icon")), /*#__PURE__*/React.createElement("h3", null, "Settings"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "For Debian Software tab", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "[x] Officially supported (main)"), /*#__PURE__*/React.createElement("li", null, "[Optional] DFSG-compatible Software with Non-Free Dependencies (contrib)"), /*#__PURE__*/React.createElement("li", null, "[Optional] Non-DFSG-compatible Software (non-free)"), /*#__PURE__*/React.createElement("li", null, "[ ] Source code"), /*#__PURE__*/React.createElement("li", null, "Download from: ", /*#__PURE__*/React.createElement("strong", null, "Server for United States")))), /*#__PURE__*/React.createElement("li", null, "For Updates tab", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "[x] Security updates (*/updates)"), /*#__PURE__*/React.createElement("li", null, "[x] Recommended updates (*-updates)"), /*#__PURE__*/React.createElement("li", null, "Automatic check for updates: Daily"), /*#__PURE__*/React.createElement("li", null, "When there are security updates: Download and install automatically"))), /*#__PURE__*/React.createElement("li", null, "Click Close"), /*#__PURE__*/React.createElement("li", null, "If pop-up for information about available software is out-of-date, click Close"), /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "sudo apt-get update && sudo apt-get upgrade -y")));
  }

}

class Users extends Section {
  displayName() {
    return "Users";
  }

  getLink() {
    return /*#__PURE__*/React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Option 1 (GUI)"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(SystemSettings).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "Click on ", /*#__PURE__*/React.createElement("strong", null, "Users")), /*#__PURE__*/React.createElement("li", null, "For each user:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Check the readme if the user is supposed to be on this computer"), /*#__PURE__*/React.createElement("li", null, "Lock out or delete extra or prohibited users, keep their files"), /*#__PURE__*/React.createElement("li", null, "Set Account Type to match user role"), /*#__PURE__*/React.createElement("li", null, "Change and write down password for refence")))), /*#__PURE__*/React.createElement("h3", null, "Option 2 (Command Line)"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), /*#__PURE__*/React.createElement("li", null, "cat /etc/passwd"), /*#__PURE__*/React.createElement("li", null, "Check ", React.createElement(DefaultUsers).type.prototype.getLink()), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Check that the users specified in the readme exist. Double check the default users. Look out for unmentioned users."), /*#__PURE__*/React.createElement("li", null, "Line reference = [user]:x:[user id]:[group id]:[description]:[home directory]:[default shell]"), /*#__PURE__*/React.createElement("li", null, "User ID number less than 1000 are hidden users"), /*#__PURE__*/React.createElement("li", null, "only user root should have User ID of 0")), /*#__PURE__*/React.createElement("li", null, "To disable a user (unable to log in, keep files):"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo passwd -l [user]")), /*#__PURE__*/React.createElement("li", null, "To remove a user:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo userdel [user]", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "use userdel -r [user] to remove user files")))), /*#__PURE__*/React.createElement("li", null, "To add a user:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo useradd [user] -m -s /bin/bash")), /*#__PURE__*/React.createElement("li", null, "Update all allowed users' passwords (including root)"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "sudo passwd [user]"), /*#__PURE__*/React.createElement("li", null, "Write down user and password for reference"))));
  }

}
class AccountLockoutPolicy extends Section {
  displayName() {
    return "Account Lockout Policy";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/pam.d/common-auth")), React.createElement("h3", null, "Settings"), React.createElement("ol", null, React.createElement("li", null, "Add the following to the end of the file:", React.createElement("ul", null, React.createElement("li", null, "auth required pam_tally2.so deny=5 onerr=fail unlock_time=1800"), React.createElement("li", null, "this will set lockout to 5 attempts and lock out for 1800 seconds (30 minutes)")))));
  }

}

class Applications extends Section {
  displayName() {
    return "Applications";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, "Press Ubuntu icon button"), React.createElement("li", null, "Type ", React.createElement("strong", null, "Ubuntu Software Center")), React.createElement("li", null, "Click on icon")), React.createElement("h3", null, "Settings"), React.createElement("ol", null, React.createElement("li", null, "Press ", React.createElement("strong", null, "Installed"), " button"), React.createElement("li", null, "Review readme for applications or categories that must be removed"), React.createElement("li", null, "For each application category (e.g. Accessories)", React.createElement("ul", null, React.createElement("li", null, "Check against readme if it should be removed"), React.createElement("li", null, "It's safer to leave program alone than to remove it"), React.createElement("li", null, "To remove application, click on it, then press ", React.createElement("strong", null, "Remove"), " button")))));
  }

}

class Auditd extends Section {
  displayName() {
    return "auditd";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "sudo apt-get install auditd"), React.createElement("li", null, "sudo auditctl -e 1")));
  }

}

class BootupManager extends Section {
  displayName() {
    return "boot-up manager";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "sudo apt-get install bum"), React.createElement("li", null, "sudo bum"), React.createElement("li", null, "Click checkmark for ", React.createElement("strong", null, "Advanced")), React.createElement("li", null, "Review list of programs that are set to start automatically at boot"), React.createElement("li", null, "Add checkmark for services required to be running"), React.createElement("li", null, "Remove checkmark for services that are not necessary to run")), "Reference: ", React.createElement("a", {
      href: "https://help.ubuntu.com/community/BootServices"
    }, "https://help.ubuntu.com/community/BootServices"));
  }

}

class Chkrootkit extends Section {
  displayName() {
    return "chkrootkit";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "sudo apt-get install chkrootkit"), React.createElement("li", null, "Follow installation instructions"), React.createElement("li", null, "sudo chkrootkit"), React.createElement("li", null, "After scan completes, review findings.")));
  }

}

class Cron extends Section {
  displayName() {
    return "cron";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, "Review the following files or directories:", React.createElement("ul", null, React.createElement("li", null, "/etc/crontab"), React.createElement("li", null, "/etc/cron.d/"), React.createElement("li", null, "/etc/cron.hourly/"), React.createElement("li", null, "/etc/cron.daily/"), React.createElement("li", null, "/etc/cron.weekly/"), React.createElement("li", null, "/etc/cron.monthly/"), React.createElement("li", null, "/var/spool/cron/crontabs/")), "Reference: ", React.createElement("a", {
      href: "https://help.ubuntu.com/community/CronHowto"
    }, "https://help.ubuntu.com/community/CronHowto"));
  }

}

class DefaultGroups extends Section {
  displayName() {
    return "Default Groups";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("ul", null, React.createElement("li", null, "root"), React.createElement("li", null, "daemon"), React.createElement("li", null, "bin"), React.createElement("li", null, "sys"), React.createElement("li", null, "adm"), React.createElement("li", null, "tty"), React.createElement("li", null, "disk"), React.createElement("li", null, "lp"), React.createElement("li", null, "mail"), React.createElement("li", null, "news"), React.createElement("li", null, "uucp"), React.createElement("li", null, "man"), React.createElement("li", null, "proxy"), React.createElement("li", null, "kmem"), React.createElement("li", null, "dialout"), React.createElement("li", null, "fax"), React.createElement("li", null, "voice"), React.createElement("li", null, "cdrom"), React.createElement("li", null, "floppy"), React.createElement("li", null, "tape"), React.createElement("li", null, "sudo"), React.createElement("li", null, "audio"), React.createElement("li", null, "dip"), React.createElement("li", null, "www-data"), React.createElement("li", null, "backup"), React.createElement("li", null, "operator"), React.createElement("li", null, "list"), React.createElement("li", null, "irc"), React.createElement("li", null, "src"), React.createElement("li", null, "gnats"), React.createElement("li", null, "shadow"), React.createElement("li", null, "utmp"), React.createElement("li", null, "video"), React.createElement("li", null, "sasl"), React.createElement("li", null, "plugdev"), React.createElement("li", null, "staff"), React.createElement("li", null, "games"), React.createElement("li", null, "users"), React.createElement("li", null, "nogroup"), React.createElement("li", null, "libuuid"), React.createElement("li", null, "crontab"), React.createElement("li", null, "syslog"), React.createElement("li", null, "fuse"), React.createElement("li", null, "messagebus"), React.createElement("li", null, "bluetooth"), React.createElement("li", null, "scanner"), React.createElement("li", null, "colord"), React.createElement("li", null, "lpadmin"), React.createElement("li", null, "ssl-cert"), React.createElement("li", null, "lightdm"), React.createElement("li", null, "nopasswdlogin"), React.createElement("li", null, "netdev"), React.createElement("li", null, "whoopsie"), React.createElement("li", null, "mlocate"), React.createElement("li", null, "ssh"), React.createElement("li", null, "avahi-autoipd"), React.createElement("li", null, "avahi"), React.createElement("li", null, "pulse"), React.createElement("li", null, "pulse-access"), React.createElement("li", null, "utempter"), React.createElement("li", null, "rtkit"), React.createElement("li", null, "saned"), React.createElement("li", null, "ubuntu"), React.createElement("li", null, "sambashare")));
  }

}

class DefaultUsers extends Section {
  displayName() {
    return "Default Users";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("ul", null, React.createElement("li", null, "root"), React.createElement("li", null, "daemon"), React.createElement("li", null, "bin"), React.createElement("li", null, "sys"), React.createElement("li", null, "sync"), React.createElement("li", null, "games"), React.createElement("li", null, "man"), React.createElement("li", null, "lp"), React.createElement("li", null, "mail"), React.createElement("li", null, "news"), React.createElement("li", null, "uucp"), React.createElement("li", null, "proxy"), React.createElement("li", null, "www-data"), React.createElement("li", null, "backup"), React.createElement("li", null, "list"), React.createElement("li", null, "irc"), React.createElement("li", null, "gnats"), React.createElement("li", null, "nobody"), React.createElement("li", null, "libuuid"), React.createElement("li", null, "syslog"), React.createElement("li", null, "messagebus"), React.createElement("li", null, "colord"), React.createElement("li", null, "lightdm"), React.createElement("li", null, "whoopsie"), React.createElement("li", null, "avahi-autoipd"), React.createElement("li", null, "avahi"), React.createElement("li", null, "usbmux"), React.createElement("li", null, "kernoops"), React.createElement("li", null, "pulse"), React.createElement("li", null, "rtkit"), React.createElement("li", null, "speech-dispatcher"), React.createElement("li", null, "dispatcher"), React.createElement("li", null, "hplip"), React.createElement("li", null, "saned"), React.createElement("li", null, "ubuntu")));
  }

}

class OpenFile extends Section {
  displayName() {
    return "Open file";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, "Option 1 (gedit)", React.createElement("ul", null, React.createElement("li", null, "sudo gedit [file path]")), "Option 2 (nano)", React.createElement("ul", null, React.createElement("li", null, "sudo nano [file path]")), "Option 3 (vi or vim)", React.createElement("ul", null, React.createElement("li", null, "sudo vi [file path]"), React.createElement("li", null, "sudo vim [file path]")));
  }

}

class FilesystemPermissions extends Section {
  displayName() {
    return "Filesystem Permissions";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "ls -la /", React.createElement("br", null), "Default permissions:", React.createElement("ul", null, React.createElement("li", null, "drwxr-xr-x root root home"), React.createElement("li", null, "drwx------ root root root")), "To fix:", React.createElement("ul", null, React.createElement("li", null, "sudo chown root:root /home"), React.createElement("li", null, "sudo chmod 755 /home"), React.createElement("li", null, "sudo chown root:root /root"), React.createElement("li", null, "sudo chown 700 /root"))), React.createElement("li", null, "cd /home"), React.createElement("li", null, "ls -la", React.createElement("br", null), "Default permissions for every user:", React.createElement("ul", null, React.createElement("li", null, "drwxr-xr-x <user> <user group> <user>"), React.createElement("li", null, "For example: drwxr-xr-x ubuntu ubuntu ubuntu")), "To fix:", React.createElement("ul", null, React.createElement("li", null, "sudo chown <user>:<user group> <user folder>"), React.createElement("li", null, "For example: sudo chown ubuntu:ubuntu ubuntu"), React.createElement("li", null, "sudo chmod 755 <user folder>"), React.createElement("li", null, "For example: sudo chmod 755 ubuntu")))));
  }

}

class FindUnauthorizedFiles extends Section {
  displayName() {
    return "Find Unauthorized Files";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "find /home -name \"*.mp3*\"", React.createElement("ul", null, React.createElement("li", null, "This will search for .mp3 files in /home"))), React.createElement("li", null, "If there are any results, inspect the files and remove as necessary"), React.createElement("li", null, "Repeat from step 2 for the following file extensions", React.createElement("ul", null, React.createElement("li", null, "(music) - .mp3, .wav, .wma, .aac"), React.createElement("li", null, "(movie/video) - .mp4, .mov, .avi"), React.createElement("li", null, "(pictures) - .gif, .jpg, .jpeg, , .png, .bmp"), React.createElement("li", null, "(executable files) - .exe, .msi, .bat, .sh")))));
  }

}

class Firewall extends Section {
  displayName() {
    return "Firewall";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "IPv4 firewall: sudo iptables [options]"), React.createElement("li", null, "IPv6 firewall: sudo ip6tables [options]")), React.createElement("h3", null, "Settings"), React.createElement("ol", null, React.createElement("li", null, "Check IPv4 firewall rules", React.createElement("ol", null, React.createElement("li", null, "sudo iptables -nvL"))), React.createElement("li", null, "Reset IPv4 firewall rules", React.createElement("ol", null, React.createElement("li", null, "sudo iptables -F"), React.createElement("li", null, "sudo iptables -X"))), React.createElement("li", null, "Set default IPv4 firewall rules", React.createElement("ol", null, React.createElement("li", null, "sudo iptables -A INPUT -m state --state INVALID -j DROP"), React.createElement("li", null, "sudo iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT"), React.createElement("li", null, "sudo iptables -A INPUT -i lo -j ACCEPT"))), React.createElement("li", null, "Add allowed INPUT rule to IPv4 firewall", React.createElement("ol", null, React.createElement("li", null, "sudo iptables -A INPUT -p [protocol] --dport [port] -j ACCEPT"), React.createElement("li", null, "Check Readme for required services. Research any required ports that need to be opened on firewall.", React.createElement("ul", null, React.createElement("li", null, "Example for SSH: sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT"))))), React.createElement("li", null, "Set default IPv4 firewall policy", React.createElement("ol", null, React.createElement("li", null, "sudo iptables -P INPUT DROP"), React.createElement("li", null, "sudo iptables -P FORWARD DROP"), React.createElement("li", null, "sudo iptables -P OUTPUT ACCEPT"))), React.createElement("li", null, "Check IPv6 firewall rules", React.createElement("ol", null, React.createElement("li", null, "sudo ip6tables -nvL"))), React.createElement("li", null, "Reset IPv6 firewall rules", React.createElement("ol", null, React.createElement("li", null, "sudo ip6tables -F"), React.createElement("li", null, "sudo ip6tables -X"))), React.createElement("li", null, "Set default IPv6 firewall rules", React.createElement("ol", null, React.createElement("li", null, "sudo ip6tables -A INPUT -m state --state INVALID -j DROP"), React.createElement("li", null, "sudo ip6tables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT"), React.createElement("li", null, "sudo ip6tables -A INPUT -i lo -j ACCEPT"))), React.createElement("li", null, "Add allowed INPUT rule to IPv6 firewall", React.createElement("ol", null, React.createElement("li", null, "sudo ip6tables -A INPUT -p [protocol] --dport [port] -j ACCEPT"), React.createElement("li", null, "Check Readme for required services. Research any required ports that need to be opened on firewall.", React.createElement("ul", null, React.createElement("li", null, "Example for SSH: sudo ip6tables -A INPUT -p tcp --dport 22 -j ACCEPT"))))), React.createElement("li", null, "Set default IPv6 firewall policy", React.createElement("ol", null, React.createElement("li", null, "sudo ip6tables -P INPUT DROP"), React.createElement("li", null, "sudo ip6tables -P FORWARD DROP"), React.createElement("li", null, "sudo ip6tables -P OUTPUT ACCEPT")))));
  }

}

class Groups extends Section {
  displayName() {
    return "Groups";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "cat /etc/group")), React.createElement("h3", null, "Settings"), React.createElement("ol", null, React.createElement("li", null, "Check ", React.createElement(DefaultGroups).type.prototype.getLink()), React.createElement("ul", null, React.createElement("li", null, "root group should be empty"), React.createElement("li", null, "sudo group should only have administrator users"), React.createElement("li", null, "users group should only have users specified in the readme"), React.createElement("li", null, "each user may have a corresponding group")), React.createElement("li", null, "To add a user to a group:", React.createElement("ul", null, React.createElement("li", null, "sudo gpasswd -a [user] [group]"))), React.createElement("li", null, "To remove a user from a group:", React.createElement("ul", null, React.createElement("li", null, "sudo gpasswd -d [user] [group]")))));
  }

}

class GuestAccess extends Section {
  displayName() {
    return "Guest Access";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.option1();
    } else if (this.props.version === "ubuntu16.04") {
      return this.option2();
    }

    return "unknown";
  }

  option1() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/lightdm/lightdm.conf"), React.createElement("li", null, "Make sure the file has the following content:", React.createElement("p", null), "[SeatDefaults]", React.createElement("br", null), "greeter-session=unity-greeter", React.createElement("br", null), "allow-guest=false"), React.createElement("li", null, "Note: Any mistakes will break the GUI"), React.createElement("li", null, "Save the file"), React.createElement("li", null, "sudo restart lightdm"), React.createElement("li", null, "The GUI should restart and guest access should be disabled.")));
  }

  option2() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/lightdm/lightdm.conf"), React.createElement("li", null, "Make sure the file has the following content:", React.createElement("p", null), "[SeatDefaults]", React.createElement("br", null), "greeter-session=unity-greeter", React.createElement("br", null), "allow-guest=false"), React.createElement("li", null, "Note: Any mistakes will break the GUI"), React.createElement("li", null, "Save the file"), React.createElement("li", null, "sudo systemctl restart lightdm"), React.createElement("li", null, "The GUI should restart and guest access should be disabled.")));
  }

}

class HostsFile extends Section {
  displayName() {
    return "Hosts File";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "cat /etc/hosts")), React.createElement("h3", null, "Settings"), React.createElement("ul", null, React.createElement("li", null, "Disable any entry lines by adding a # to the start of the line"), React.createElement("li", null, "Default file entries:", React.createElement("ul", null, React.createElement("li", null, "127.0.0.1 localhost"), React.createElement("li", null, "127.0.1.1 ubuntu"))), React.createElement("li", null, "Ignore IPv6 lines")));
  }

}

class LibpamCracklib extends Section {
  displayName() {
    return "libpam-cracklib";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "sudo apt-get install libpam-cracklib")));
  }

}

class NetworkConnections extends Section {
  displayName() {
    return "Network Connections";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "sudo netstat [options]")), React.createElement("h3", null, "Settings"), React.createElement("ol", null, React.createElement("li", null, "Check listening network connections"), React.createElement("ol", null, React.createElement("li", null, "netstat -ntulp"), React.createElement("li", null, "Make sure only necessary services have listening connections on the correct ports")), React.createElement("li", null, "Check established network connections"), React.createElement("ol", null, React.createElement("li", null, "netstat -ntup"))));
  }

}

class PasswordPolicy extends Section {
  displayName() {
    return "Password Policy";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/pam.d/common-password"), React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/login.defs")), React.createElement("h3", null, "Settings"), "For /etc/pam.d/common-password", React.createElement("ol", null, React.createElement("li", null, "Find the following line in the file:", React.createElement("ul", null, React.createElement("li", null, "password\xA0\xA0\xA0\xA0requisite\xA0\xA0\xA0\xA0pam_cracklib.so retry=3 minlen=8 difok=3"))), React.createElement("li", null, "To require password complexity, add to the end of the line:", React.createElement("ul", null, React.createElement("li", null, "ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1"))), React.createElement("li", null, "The line should now look like the following", React.createElement("ul", null, React.createElement("li", null, "password\xA0\xA0\xA0\xA0requisite\xA0\xA0\xA0\xA0pam_cracklib.so retry=3 minlen=8 difok=3 ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1"))), React.createElement("li", null, "Find the following line in the file:", React.createElement("ul", null, React.createElement("li", null, "password\xA0\xA0\xA0\xA0[success=1 default=ignore]\xA0\xA0\xA0\xA0pam_unix.so obscure use_authtok try_first_pass sha512"))), React.createElement("li", null, "To remember last 5 passwords, add to the end of the line:", React.createElement("ul", null, React.createElement("li", null, "remember=5"))), React.createElement("li", null, "To require at least 8 characters, add to the end of the line:", React.createElement("ul", null, React.createElement("li", null, "minlen=8"))), React.createElement("li", null, "The line should now look like the following", React.createElement("ul", null, React.createElement("li", null, "password\xA0\xA0\xA0\xA0[success=1 default=ignore]\xA0\xA0\xA0\xA0pam_unix.so obscure use_authtok try_first_pass sha512 remember=5 minlen=8"))), React.createElement("li", null, "Save the file")), "For /etc/login.defs", React.createElement("ol", null, React.createElement("li", null, "Find PASS_MAX_DAYS, set to 90"), React.createElement("li", null, "Find PASS_MIN_DAYS, set to 10"), React.createElement("li", null, "Find PASS_WARN_AGE, set to 7")));
  }

}

class Rkhunter extends Section {
  displayName() {
    return "rkhunter";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "sudo apt-get install rhkunter"), React.createElement("li", null, "Follow installation instructions"), React.createElement("li", null, "sudo rhkunter --update"), React.createElement("li", null, "sudo rkhunter -c"), React.createElement("li", null, "Follow scan instructions"), React.createElement("li", null, "After scan completes, review findings, and fix issues")));
  }

}

class Services extends Section {
  displayName() {
    return "Services";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.option1();
    } else if (this.props.version === "ubuntu16.04") {
      return this.option2();
    }

    return "unknown";
  }

  option1() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink())), React.createElement("h3", null, "Settings"), "Check status of all services:", React.createElement("ul", null, React.createElement("li", null, "service --status-all")), "Check status of one service (may not always work)", React.createElement("ul", null, React.createElement("li", null, "service [service-name] status")), "Other common service commands", React.createElement("ul", null, React.createElement("li", null, "service [service-name] start"), React.createElement("li", null, "service [service-name] stop"), React.createElement("li", null, "service [service-name] restart")), React.createElement("h3", null, "Disable service autostart"), React.createElement("ul", null, React.createElement("li", null, "service [service-name] stop"), React.createElement("li", null, "update-rc.d -f [service] remove")), this.services());
  }

  option2() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink())), React.createElement("h3", null, "Settings"), React.createElement("p", null, "Check status of all services"), React.createElement("ul", null, React.createElement("li", null, "systemctl list-unit-files")), React.createElement("p", null, "Check status of one service"), React.createElement("ul", null, React.createElement("li", null, "systemctl status [service-name]")), React.createElement("p", null, "Other common service commands"), React.createElement("ul", null, React.createElement("li", null, "systemctl start [service-name]"), React.createElement("li", null, "systemctl stop [service-name]"), React.createElement("li", null, "systemctl restart [service-name]")), React.createElement("h3", null, "Disable service autostart"), React.createElement("ul", null, React.createElement("li", null, "systemctl stop [service-name]"), React.createElement("li", null, "systemctl disable [service-name]")), this.services());
  }

  services() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Common Services"), "The following services should be disabled if they are not required:", React.createElement("p", null), "Database", React.createElement("ul", null, React.createElement("li", null, "mysqld"), React.createElement("li", null, "postgres")), "E-mail", React.createElement("ul", null, React.createElement("li", null, "dovecot"), React.createElement("li", null, "exim4"), React.createElement("li", null, "postfix")), "File Sharing", React.createElement("ul", null, React.createElement("li", null, "nfs"), React.createElement("li", null, "nmbd"), React.createElement("li", null, "rpc.mountd"), React.createElement("li", null, "rpc.nfsd"), React.createElement("li", null, "smbd"), React.createElement("li", null, "vsftpd")), "Music", React.createElement("ul", null, React.createElement("li", null, "mpd")), "Networking", React.createElement("ul", null, React.createElement("li", null, "avahi-daemon"), React.createElement("li", null, "bind"), React.createElement("li", null, "dnsmasq"), React.createElement("li", null, "xinetd"), React.createElement("li", null, "inetd"), React.createElement("li", null, "sshd"), React.createElement("li", null, "telnet")), "Printing, Scanning", React.createElement("ul", null, React.createElement("li", null, "cupsd"), React.createElement("li", null, "saned")), "Time", React.createElement("ul", null, React.createElement("li", null, "ntpd")), "Scheduled tasks", React.createElement("ul", null, React.createElement("li", null, "cron")), "Web Server", React.createElement("ul", null, React.createElement("li", null, "apache2"), React.createElement("li", null, "httpd"), React.createElement("li", null, "jetty"), React.createElement("li", null, "nginx"), React.createElement("li", null, "tomcat")));
  }

}

class Sudo extends Section {
  displayName() {
    return "sudo";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), "Option 1", React.createElement("ol", null, React.createElement("li", null, "sudo visudo")), "Option 2", React.createElement("ol", null, React.createElement("li", null, React.createElement(OpenFile).type.prototype.getLink(), " /etc/sudoers")), React.createElement("h3", null, "Settings"), React.createElement("ul", null, React.createElement("li", null, "Comment lines start with #"), React.createElement("li", null, "The following are the default settings:", React.createElement("ul", null, React.createElement("li", null, "Defaults env_reset"), React.createElement("li", null, "Defaults mail_badpass"), React.createElement("li", null, "Defaults secure_path=\"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\""), React.createElement("li", null, "root ALL=(ALL:ALL) ALL"), React.createElement("li", null, "%admin ALL=(ALL) ALL"), React.createElement("li", null, "%sudo ALL=(ALL:ALL) ALL"))), React.createElement("li", null, "Comment out all other entries")));
  }

}

class SystemLog extends Section {
  displayName() {
    return "System Log";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, "Press Ubuntu icon"), React.createElement("li", null, "Type ", React.createElement("strong", null, "System Log")), React.createElement("li", null, "Click on icon")), React.createElement("ul", null, React.createElement("li", null, "Review logs prior to today for system changes"), React.createElement("li", null, "Pay attention to user accounts, especially root/sudo")), "Reference: ", React.createElement("a", {
      href: "https://help.ubuntu.com/community/LinuxLogFiles"
    }, "https://help.ubuntu.com/community/LinuxLogFiles"));
  }

}

class SystemSettings extends Section {
  displayName() {
    return "System Settings";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, "Press the gear-like icon at the top right of the screen. (Next to the current time)"), React.createElement("li", null, "Click on ", React.createElement("b", null, "System Settings"))));
  }

}

class Terminal extends Section {
  displayName() {
    return "Terminal";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, "Option 1", React.createElement("ol", null, React.createElement("li", null, "Press Ubuntu icon button"), React.createElement("li", null, "Type ", React.createElement("strong", null, "terminal"), ", press Enter")), "Option 2", React.createElement("ol", null, React.createElement("li", null, "Click on ", React.createElement("strong", null, "Applications"), " menu"), React.createElement("li", null, "Go to ", React.createElement("strong", null, "Accessories")), React.createElement("li", null, "Click on ", React.createElement("strong", null, "Terminal"))));
  }

}

class Updates extends Section {
  displayName() {
    return "Updates";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    if (this.props.version === "ubuntu") {
      return this.option1();
    } else if (this.props.version === "ubuntu16.04") {
      return this.option2();
    }

    return "unknown";
  }

  option1() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(SystemSettings).type.prototype.getLink()), React.createElement("li", null, "Under ", React.createElement("b", null, "System"), " section, find and click on ", React.createElement("b", null, "Software & Updates")), React.createElement("li", null, "Press ", React.createElement("b", null, "Revert"), " for default settings"), React.createElement("li", null, "For Ubuntu Software tab", React.createElement("ol", null, React.createElement("li", null, "[x] Canonical-supported free and open-source software (main)"), React.createElement("li", null, "[x] Community-maintained free and open-source software (universe)"), React.createElement("li", null, "[Optional] Proprietary drivers for devices (restricted)"), React.createElement("li", null, "[Optional] Software restricted by copyright or legal issues (multiverse)"), React.createElement("li", null, "For ", React.createElement("strong", null, "Download from:"), ", select ", React.createElement("strong", null, "Other")), React.createElement("li", null, "Click ", React.createElement("strong", null, "Select Best Server"), ". Wait for tests to complete."), React.createElement("li", null, "Click ", React.createElement("strong", null, "Choose Server")))), React.createElement("li", null, "For Updates tab", React.createElement("ol", null, React.createElement("li", null, "[x] Important security updates (*-security)"), React.createElement("li", null, "[x] Recommended updates (*-updates)"), React.createElement("li", null, "[Optional] Pre-release updates (*-proposed)"), React.createElement("li", null, "[Optional] Unsupported updates (*-backports)"), React.createElement("li", null, "Automatic check for updates: Daily"), React.createElement("li", null, "When there are security updates: Display immediately"))), React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "sudo apt-get update && sudo apt-get upgrade -y")));
  }

  option2() {
    return React.createElement(React.Fragment, null, React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(SystemSettings).type.prototype.getLink()), React.createElement("li", null, "Under ", React.createElement("b", null, "System"), " section, find and click on ", React.createElement("b", null, "Software & Updates")), React.createElement("li", null, "Press ", React.createElement("b", null, "Revert"), " for default settings"), React.createElement("li", null, "For Ubuntu Software tab", React.createElement("ul", null, React.createElement("li", null, "[x] Canonical-supported free and open-source software (main)"), React.createElement("li", null, "[x] Community-maintained free and open-source software (universe)"), React.createElement("li", null, "[x] Proprietary drivers for devices (restricted)"), React.createElement("li", null, "[x] Software restricted by copyright or legal issues (multiverse)"), React.createElement("li", null, "[ ] Source code"), React.createElement("li", null, "For ", React.createElement("strong", null, "Download from:"), ", select ", React.createElement("strong", null, "Other")), React.createElement("li", null, "Click ", React.createElement("strong", null, "Select Best Server"), ". Wait for tests to complete."), React.createElement("li", null, "Click ", React.createElement("strong", null, "Choose Server")))), React.createElement("li", null, "For Updates tab", React.createElement("ul", null, React.createElement("li", null, "[x] Important security updates (*-security)"), React.createElement("li", null, "[x] Recommended updates (*-updates)"), React.createElement("li", null, "[x] Unsupported updates (*-backports)"), React.createElement("li", null, "Automatic check for updates: Daily"), React.createElement("li", null, "When there are security updates: Display immediately"), React.createElement("li", null, "When there are other updates: Display weekly"), React.createElement("li", null, "Notify me of a new Ubuntu version: For long-term support version"))), React.createElement("li", null, "For Developer Options", React.createElement("ul", null, React.createElement("li", null, "[ ] Pre-released updates (*-proposed)"))), React.createElement("li", null, "Click ", React.createElement("strong", null, "Close")), React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "sudo apt-get update && sudo apt-get upgrade -y")));
  }

}

class Users extends Section {
  displayName() {
    return "Users";
  }

  getLink() {
    return React.createElement(SectionLink, {
      section: this
    });
  }

  render() {
    return React.createElement(React.Fragment, null, React.createElement("h3", null, "Location"), React.createElement("ol", null, React.createElement("li", null, "Open ", React.createElement(Terminal).type.prototype.getLink()), React.createElement("li", null, "cat /etc/passwd")), React.createElement("h3", null, "Settings"), React.createElement("ol", null, React.createElement("li", null, "Check ", React.createElement(DefaultUsers).type.prototype.getLink()), React.createElement("ul", null, React.createElement("li", null, "Check that the users specified in the readme exist. Double check the default users. Look out for unmentioned users."), React.createElement("li", null, "Line reference = [user]:x:[user id]:[group id]:[description]:[home directory]:[default shell]"), React.createElement("li", null, "User ID number less than 1000 are hidden users"), React.createElement("li", null, "only user root should have User ID of 0")), React.createElement("li", null, "To disable a user (unable to log in, keep files):"), React.createElement("ul", null, React.createElement("li", null, "sudo passwd -l [user]")), React.createElement("li", null, "To remove a user and their files:"), React.createElement("ul", null, React.createElement("li", null, "sudo userdel -r [user]")), React.createElement("li", null, "To add a user:"), React.createElement("ul", null, React.createElement("li", null, "sudo useradd [user] -m -s /bin/bash")), React.createElement("li", null, "Update all allowed users' passwords (including root)"), React.createElement("ul", null, React.createElement("li", null, "sudo passwd [user]"), React.createElement("li", null, "Write down user and password for reference"))));
  }

}
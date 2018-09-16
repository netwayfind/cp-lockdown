var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountLockoutPolicy = function (_Section) {
    _inherits(AccountLockoutPolicy, _Section);

    function AccountLockoutPolicy() {
        _classCallCheck(this, AccountLockoutPolicy);

        return _possibleConstructorReturn(this, (AccountLockoutPolicy.__proto__ || Object.getPrototypeOf(AccountLockoutPolicy)).apply(this, arguments));
    }

    _createClass(AccountLockoutPolicy, [{
        key: "displayName",
        value: function displayName() {
            return "Account Lockout Policy";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(OpenFile).type.prototype.getLink(),
                        " /etc/pam.d/common-auth"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Add the following to the end of the file:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "auth required pam_tally2.so deny=5 onerr=fail unlock_time=1800"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "this will set lockout to 5 attempts and lock out for 1800 seconds (15 minutes)"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AccountLockoutPolicy;
}(Section);

var Applications = function (_Section2) {
    _inherits(Applications, _Section2);

    function Applications() {
        _classCallCheck(this, Applications);

        return _possibleConstructorReturn(this, (Applications.__proto__ || Object.getPrototypeOf(Applications)).apply(this, arguments));
    }

    _createClass(Applications, [{
        key: "displayName",
        value: function displayName() {
            return "Applications";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Press Ubuntu icon button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "Ubuntu Software Center"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click on icon"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Press ",
                        React.createElement(
                            "strong",
                            null,
                            "Installed"
                        ),
                        " button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Review readme for applications or categories that must be removed"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "For each application category (e.g. Accessories)",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Check against readme if it should be removed"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "It's safer to leave program alone than to remove it"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "To remove application, click on it, then press ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "Remove"
                                ),
                                " button"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Applications;
}(Section);

var Auditd = function (_Section3) {
    _inherits(Auditd, _Section3);

    function Auditd() {
        _classCallCheck(this, Auditd);

        return _possibleConstructorReturn(this, (Auditd.__proto__ || Object.getPrototypeOf(Auditd)).apply(this, arguments));
    }

    _createClass(Auditd, [{
        key: "displayName",
        value: function displayName() {
            return "auditd";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo apt-get install auditd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo auditctl -e 1"
                    )
                )
            );
        }
    }]);

    return Auditd;
}(Section);

var BootupManager = function (_Section4) {
    _inherits(BootupManager, _Section4);

    function BootupManager() {
        _classCallCheck(this, BootupManager);

        return _possibleConstructorReturn(this, (BootupManager.__proto__ || Object.getPrototypeOf(BootupManager)).apply(this, arguments));
    }

    _createClass(BootupManager, [{
        key: "displayName",
        value: function displayName() {
            return "boot-up manager";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo apt-get install bum"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo bum"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click checkmark for ",
                        React.createElement(
                            "strong",
                            null,
                            "Advanced"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Review list of programs that are set to start automatically at boot"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Add checkmark for services required to be running"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Remove checkmark for services that are not necessary to run"
                    )
                ),
                "Reference: ",
                React.createElement(
                    "a",
                    { href: "https://help.ubuntu.com/community/BootServices" },
                    "https://help.ubuntu.com/community/BootServices"
                )
            );
        }
    }]);

    return BootupManager;
}(Section);

var Chkrootkit = function (_Section5) {
    _inherits(Chkrootkit, _Section5);

    function Chkrootkit() {
        _classCallCheck(this, Chkrootkit);

        return _possibleConstructorReturn(this, (Chkrootkit.__proto__ || Object.getPrototypeOf(Chkrootkit)).apply(this, arguments));
    }

    _createClass(Chkrootkit, [{
        key: "displayName",
        value: function displayName() {
            return "chkrootkit";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo apt-get install chkrootkit"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Follow installation instructions"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo chkrootkit"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "After scan completes, review findings."
                    )
                )
            );
        }
    }]);

    return Chkrootkit;
}(Section);

var Cron = function (_Section6) {
    _inherits(Cron, _Section6);

    function Cron() {
        _classCallCheck(this, Cron);

        return _possibleConstructorReturn(this, (Cron.__proto__ || Object.getPrototypeOf(Cron)).apply(this, arguments));
    }

    _createClass(Cron, [{
        key: "displayName",
        value: function displayName() {
            return "cron";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                "Review the following files or directories:",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "/etc/crontab"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "/etc/cron.d/"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "/etc/cron.hourly/"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "/etc/cron.daily/"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "/etc/cron.weekly/"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "/etc/cron.monthly/"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "/var/spool/cron/crontabs/"
                    )
                ),
                "Reference: ",
                React.createElement(
                    "a",
                    { href: "https://help.ubuntu.com/community/CronHowto" },
                    "https://help.ubuntu.com/community/CronHowto"
                )
            );
        }
    }]);

    return Cron;
}(Section);

var DefaultGroups = function (_Section7) {
    _inherits(DefaultGroups, _Section7);

    function DefaultGroups() {
        _classCallCheck(this, DefaultGroups);

        return _possibleConstructorReturn(this, (DefaultGroups.__proto__ || Object.getPrototypeOf(DefaultGroups)).apply(this, arguments));
    }

    _createClass(DefaultGroups, [{
        key: "displayName",
        value: function displayName() {
            return "Default Groups";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "root"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "daemon"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "bin"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sys"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "adm"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "tty"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "disk"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "lp"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "news"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "uucp"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "man"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "proxy"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "kmem"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "dialout"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "fax"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "voice"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "cdrom"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "floppy"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "tape"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "audio"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "dip"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "www-data"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "backup"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "operator"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "list"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "irc"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "src"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "gnats"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "shadow"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "utmp"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "video"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sasl"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "plugdev"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "staff"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "games"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "users"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "nogroup"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "libuuid"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "crontab"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "syslog"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "fuse"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "messagebus"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "bluetooth"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "scanner"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "colord"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "lpadmin"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ssl-cert"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "lightdm"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "nopasswdlogin"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "netdev"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "whoopsie"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "mlocate"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ssh"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "avahi-autoipd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "avahi"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "pulse"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "pulse-access"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "utempter"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "rtkit"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "saned"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ubuntu"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sambashare"
                    )
                )
            );
        }
    }]);

    return DefaultGroups;
}(Section);

var DefaultUsers = function (_Section8) {
    _inherits(DefaultUsers, _Section8);

    function DefaultUsers() {
        _classCallCheck(this, DefaultUsers);

        return _possibleConstructorReturn(this, (DefaultUsers.__proto__ || Object.getPrototypeOf(DefaultUsers)).apply(this, arguments));
    }

    _createClass(DefaultUsers, [{
        key: "displayName",
        value: function displayName() {
            return "Default Users";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "root"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "daemon"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "bin"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sys"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sync"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "games"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "man"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "lp"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "news"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "uucp"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "proxy"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "www-data"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "backup"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "list"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "irc"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "gnats"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "nobody"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "libuuid"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "syslog"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "messagebus"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "colord"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "lightdm"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "whoopsie"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "avahi-autoipd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "avahi"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "usbmux"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "kernoops"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "pulse"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "rtkit"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "speech-dispatcher"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "dispatcher"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "hplip"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "saned"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ubuntu"
                    )
                )
            );
        }
    }]);

    return DefaultUsers;
}(Section);

var OpenFile = function (_Section9) {
    _inherits(OpenFile, _Section9);

    function OpenFile() {
        _classCallCheck(this, OpenFile);

        return _possibleConstructorReturn(this, (OpenFile.__proto__ || Object.getPrototypeOf(OpenFile)).apply(this, arguments));
    }

    _createClass(OpenFile, [{
        key: "displayName",
        value: function displayName() {
            return "Open file";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                "Option 1 (gedit)",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "sudo gedit [file path]"
                    )
                ),
                "Option 2 (nano)",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "sudo nano [file path]"
                    )
                ),
                "Option 3 (vi or vim)",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "sudo vi [file path]"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo vim [file path]"
                    )
                )
            );
        }
    }]);

    return OpenFile;
}(Section);

var FilesystemPermissions = function (_Section10) {
    _inherits(FilesystemPermissions, _Section10);

    function FilesystemPermissions() {
        _classCallCheck(this, FilesystemPermissions);

        return _possibleConstructorReturn(this, (FilesystemPermissions.__proto__ || Object.getPrototypeOf(FilesystemPermissions)).apply(this, arguments));
    }

    _createClass(FilesystemPermissions, [{
        key: "displayName",
        value: function displayName() {
            return "Filesystem Permissions";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ls -la /",
                        React.createElement("br", null),
                        "Default permissions:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "drwxr-xr-x root root home"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "drwx------ root root root"
                            )
                        ),
                        "To fix:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo chown root:root /home"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo chmod 755 /home"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo chown root:root /root"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo chown 700 /root"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "cd /home"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ls -la",
                        React.createElement("br", null),
                        "Default permissions for every user:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "drwxr-xr-x <user> <user group> <user>"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "For example: drwxr-xr-x ubuntu ubuntu ubuntu"
                            )
                        ),
                        "To fix:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo chown <user>:<user group> <user folder>"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "For example: sudo chown ubuntu:ubuntu ubuntu"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo chmod 755 <user folder>"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "For example: sudo chmod 755 ubuntu"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return FilesystemPermissions;
}(Section);

var FindUnauthorizedFiles = function (_Section11) {
    _inherits(FindUnauthorizedFiles, _Section11);

    function FindUnauthorizedFiles() {
        _classCallCheck(this, FindUnauthorizedFiles);

        return _possibleConstructorReturn(this, (FindUnauthorizedFiles.__proto__ || Object.getPrototypeOf(FindUnauthorizedFiles)).apply(this, arguments));
    }

    _createClass(FindUnauthorizedFiles, [{
        key: "displayName",
        value: function displayName() {
            return "Find Unauthorized Files";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "find /home -name \"*.mp3*\"",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "This will search for .mp3 files in /home"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "If there are any results, inspect the files and remove as necessary"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Repeat from step 2 for the following file extensions",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "(music) - .mp3, .wav, .wma, .aac"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "(movie/video) - .mp4, .mov, .avi"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "(pictures) - .gif, .jpg, .jpeg, , .png, .bmp"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "(executable files) - .exe, .msi, .bat, .sh"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return FindUnauthorizedFiles;
}(Section);

var Firewall = function (_Section12) {
    _inherits(Firewall, _Section12);

    function Firewall() {
        _classCallCheck(this, Firewall);

        return _possibleConstructorReturn(this, (Firewall.__proto__ || Object.getPrototypeOf(Firewall)).apply(this, arguments));
    }

    _createClass(Firewall, [{
        key: "displayName",
        value: function displayName() {
            return "Firewall";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "IPv4 firewall: sudo iptables [options]"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "IPv6 firewall: sudo ip6tables [options]"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Check IPv4 firewall rules",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo iptables -nvL"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Reset IPv4 firewall rules",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo iptables -F"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo iptables -X"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Set default IPv4 firewall rules",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo iptables -A INPUT -m state --state INVALID -j DROP"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo iptables -A INPUT -i lo -j ACCEPT"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Add allowed INPUT rule to IPv4 firewall",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo iptables -A INPUT -p [protocol] --dport [port] -j ACCEPT"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Check Readme for required services. Research any required ports that need to be opened on firewall.",
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        "Example for SSH: sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Set default IPv4 firewall policy",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo iptables -P INPUT DROP"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo iptables -P FORWARD DROP"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo iptables -P OUTPUT ACCEPT"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Check IPv6 firewall rules",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo ip6tables -nvL"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Reset IPv6 firewall rules",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo ip6tables -F"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo ip6tables -X"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Set default IPv6 firewall rules",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo ip6tables -A INPUT -m state --state INVALID -j DROP"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo ip6tables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo ip6tables -A INPUT -i lo -j ACCEPT"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Add allowed INPUT rule to IPv6 firewall",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo ip6tables -A INPUT -p [protocol] --dport [port] -j ACCEPT"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Check Readme for required services. Research any required ports that need to be opened on firewall.",
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        "Example for SSH: sudo ip6tables -A INPUT -p tcp --dport 22 -j ACCEPT"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Set default IPv6 firewall policy",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo ip6tables -P INPUT DROP"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo ip6tables -P FORWARD DROP"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "sudo ip6tables -P OUTPUT ACCEPT"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Firewall;
}(Section);

var Groups = function (_Section13) {
    _inherits(Groups, _Section13);

    function Groups() {
        _classCallCheck(this, Groups);

        return _possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).apply(this, arguments));
    }

    _createClass(Groups, [{
        key: "displayName",
        value: function displayName() {
            return "Groups";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "cat /etc/group"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Check ",
                        React.createElement(DefaultGroups).type.prototype.getLink()
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "root group should be empty"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "sudo group should only have administrator users"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "users group should only have users specified in the readme"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "each user may have a corresponding group"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "To add a user to a group:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo gpasswd -a [user] [group]"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "To remove a user from a group:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "sudo gpasswd -d [user] [group]"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Groups;
}(Section);

var GuestAccess = function (_Section14) {
    _inherits(GuestAccess, _Section14);

    function GuestAccess() {
        _classCallCheck(this, GuestAccess);

        return _possibleConstructorReturn(this, (GuestAccess.__proto__ || Object.getPrototypeOf(GuestAccess)).apply(this, arguments));
    }

    _createClass(GuestAccess, [{
        key: "displayName",
        value: function displayName() {
            return "Guest Access";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.version === "ubuntu") {
                return this.option1();
            } else if (this.props.version === "ubuntu16.04") {
                return this.option2();
            }
            return "unknown";
        }
    }, {
        key: "option1",
        value: function option1() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(OpenFile).type.prototype.getLink(),
                        " /etc/lightdm/lightdm.conf"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Make sure the file has the following content:",
                        React.createElement("p", null),
                        "[SeatDefaults]",
                        React.createElement("br", null),
                        "greeter-session=unity-greeter",
                        React.createElement("br", null),
                        "allow-guest=false"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Note: Any mistakes will break the GUI"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Save the file"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo restart lightdm"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "The GUI should restart and guest access should be disabled."
                    )
                )
            );
        }
    }, {
        key: "option2",
        value: function option2() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(OpenFile).type.prototype.getLink(),
                        " /etc/lightdm/lightdm.conf"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Make sure the file has the following content:",
                        React.createElement("p", null),
                        "[SeatDefaults]",
                        React.createElement("br", null),
                        "greeter-session=unity-greeter",
                        React.createElement("br", null),
                        "allow-guest=false"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Note: Any mistakes will break the GUI"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Save the file"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo systemctl restart lightdm"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "The GUI should restart and guest access should be disabled."
                    )
                )
            );
        }
    }]);

    return GuestAccess;
}(Section);

var HostsFile = function (_Section15) {
    _inherits(HostsFile, _Section15);

    function HostsFile() {
        _classCallCheck(this, HostsFile);

        return _possibleConstructorReturn(this, (HostsFile.__proto__ || Object.getPrototypeOf(HostsFile)).apply(this, arguments));
    }

    _createClass(HostsFile, [{
        key: "displayName",
        value: function displayName() {
            return "Hosts File";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "cat /etc/hosts"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Disable any entry lines by adding a # to the start of the line"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Default file entries:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "127.0.0.1 localhost"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "127.0.1.1 ubuntu"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Ignore IPv6 lines"
                    )
                )
            );
        }
    }]);

    return HostsFile;
}(Section);

var LibpamCracklib = function (_Section16) {
    _inherits(LibpamCracklib, _Section16);

    function LibpamCracklib() {
        _classCallCheck(this, LibpamCracklib);

        return _possibleConstructorReturn(this, (LibpamCracklib.__proto__ || Object.getPrototypeOf(LibpamCracklib)).apply(this, arguments));
    }

    _createClass(LibpamCracklib, [{
        key: "displayName",
        value: function displayName() {
            return "libpam-cracklib";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo apt-get install libpam-cracklib"
                    )
                )
            );
        }
    }]);

    return LibpamCracklib;
}(Section);

var Lynis = function (_Section17) {
    _inherits(Lynis, _Section17);

    function Lynis() {
        _classCallCheck(this, Lynis);

        return _possibleConstructorReturn(this, (Lynis.__proto__ || Object.getPrototypeOf(Lynis)).apply(this, arguments));
    }

    _createClass(Lynis, [{
        key: "displayName",
        value: function displayName() {
            return "lynis";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "ol",
                null,
                React.createElement(
                    "li",
                    null,
                    "Open ",
                    React.createElement(Terminal).type.prototype.getLink()
                ),
                React.createElement(
                    "li",
                    null,
                    "sudo apt-get install lynis"
                ),
                React.createElement(
                    "li",
                    null,
                    "Follow installation instructions"
                ),
                React.createElement(
                    "li",
                    null,
                    "sudo lynis -Q"
                ),
                React.createElement(
                    "li",
                    null,
                    "After scan completes, review findings."
                )
            );
        }
    }]);

    return Lynis;
}(Section);

var NetworkConnections = function (_Section18) {
    _inherits(NetworkConnections, _Section18);

    function NetworkConnections() {
        _classCallCheck(this, NetworkConnections);

        return _possibleConstructorReturn(this, (NetworkConnections.__proto__ || Object.getPrototypeOf(NetworkConnections)).apply(this, arguments));
    }

    _createClass(NetworkConnections, [{
        key: "displayName",
        value: function displayName() {
            return "Network Connections";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo netstat [options]"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Check listening network connections"
                    ),
                    React.createElement(
                        "ol",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "netstat -ntulp"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Make sure only necessary services have listening connections on the correct ports"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Check established network connections"
                    ),
                    React.createElement(
                        "ol",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "netstat -ntup"
                        )
                    )
                )
            );
        }
    }]);

    return NetworkConnections;
}(Section);

var PasswordPolicy = function (_Section19) {
    _inherits(PasswordPolicy, _Section19);

    function PasswordPolicy() {
        _classCallCheck(this, PasswordPolicy);

        return _possibleConstructorReturn(this, (PasswordPolicy.__proto__ || Object.getPrototypeOf(PasswordPolicy)).apply(this, arguments));
    }

    _createClass(PasswordPolicy, [{
        key: "displayName",
        value: function displayName() {
            return "Password Policy";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(OpenFile).type.prototype.getLink(),
                        " /etc/pam.d/common-password"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(OpenFile).type.prototype.getLink(),
                        " /etc/login.defs"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "For /etc/pam.d/common-password",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Find the following line in the file:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "password\xA0\xA0\xA0\xA0requisite\xA0\xA0\xA0\xA0pam_cracklib.so retry=3 minlen=8 difok=3"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "To require password complexity, add to the end of the line:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "The line should now look like the following",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "password\xA0\xA0\xA0\xA0requisite\xA0\xA0\xA0\xA0pam_cracklib.so retry=3 minlen=8 difok=3 ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find the following line in the file:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "password\xA0\xA0\xA0\xA0[success=1 default=ignore]\xA0\xA0\xA0\xA0pam_unix.so obscure use_authtok try_first_pass sha512"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "To remember last 5 passwords, add to the end of the line:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "remember=5"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "To require at least 8 characters, add to the end of the line:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "minlen=8"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "The line should now look like the following",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "password\xA0\xA0\xA0\xA0[success=1 default=ignore]\xA0\xA0\xA0\xA0pam_unix.so obscure use_authtok try_first_pass sha512 remember=5 minlen=8"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Save the file"
                    )
                ),
                "For /etc/login.defs",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Find PASS_MAX_DAYS, set to 90"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find PASS_MIN_DAYS, set to 10"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find PASS_WARN_AGE, set to 7"
                    )
                )
            );
        }
    }]);

    return PasswordPolicy;
}(Section);

var Rkhunter = function (_Section20) {
    _inherits(Rkhunter, _Section20);

    function Rkhunter() {
        _classCallCheck(this, Rkhunter);

        return _possibleConstructorReturn(this, (Rkhunter.__proto__ || Object.getPrototypeOf(Rkhunter)).apply(this, arguments));
    }

    _createClass(Rkhunter, [{
        key: "displayName",
        value: function displayName() {
            return "rkhunter";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo apt-get install rhkunter"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Follow installation instructions"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo rhkunter --update"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo rkhunter -c"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Follow scan instructions"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "After scan completes, review findings, and fix issues"
                    )
                )
            );
        }
    }]);

    return Rkhunter;
}(Section);

var Services = function (_Section21) {
    _inherits(Services, _Section21);

    function Services() {
        _classCallCheck(this, Services);

        return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).apply(this, arguments));
    }

    _createClass(Services, [{
        key: "displayName",
        value: function displayName() {
            return "Services";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.version === "ubuntu") {
                return this.option1();
            } else if (this.props.version === "ubuntu16.04") {
                return this.option2();
            }
            return "unknown";
        }
    }, {
        key: "option1",
        value: function option1() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "Check status of all services:",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "service --status-all"
                    )
                ),
                "Check status of one service (may not always work)",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "service [service-name] status"
                    )
                ),
                "Other common service commands",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "service [service-name] start"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "service [service-name] stop"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "service [service-name] restart"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Disable service autostart"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "service [service-name] stop"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "update-rc.d -f [service] remove"
                    )
                ),
                this.services()
            );
        }
    }, {
        key: "option2",
        value: function option2() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "p",
                    null,
                    "Check status of all services"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "systemctl list-unit-files"
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    "Check status of one service"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "systemctl status [service-name]"
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    "Other common service commands"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "systemctl start [service-name]"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "systemctl stop [service-name]"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "systemctl restart [service-name]"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Disable service autostart"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "systemctl stop [service-name]"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "systemctl disable [service-name]"
                    )
                ),
                this.services()
            );
        }
    }, {
        key: "services",
        value: function services() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Common Services"
                ),
                "The following services should be disabled if they are not required:",
                React.createElement("p", null),
                "Database",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "mysqld"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "postgres"
                    )
                ),
                "E-mail",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "dovecot"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "exim4"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "postfix"
                    )
                ),
                "File Sharing",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "nfs"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "nmbd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "rpc.mountd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "rpc.nfsd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "smbd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "vsftpd"
                    )
                ),
                "Music",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "mpd"
                    )
                ),
                "Networking",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "avahi-daemon"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "bind"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "dnsmasq"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "xinetd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "inetd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sshd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "telnet"
                    )
                ),
                "Printing, Scanning",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "cupsd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "saned"
                    )
                ),
                "Time",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "ntpd"
                    )
                ),
                "Scheduled tasks",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "cron"
                    )
                ),
                "Web Server",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "apache2"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "httpd"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "jetty"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "nginx"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "tomcat"
                    )
                )
            );
        }
    }]);

    return Services;
}(Section);

var Sudo = function (_Section22) {
    _inherits(Sudo, _Section22);

    function Sudo() {
        _classCallCheck(this, Sudo);

        return _possibleConstructorReturn(this, (Sudo.__proto__ || Object.getPrototypeOf(Sudo)).apply(this, arguments));
    }

    _createClass(Sudo, [{
        key: "displayName",
        value: function displayName() {
            return "sudo";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                "Option 1",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "sudo visudo"
                    )
                ),
                "Option 2",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(OpenFile).type.prototype.getLink(),
                        " /etc/sudoers"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Comment lines start with #"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "The following are the default settings:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Defaults env_reset"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Defaults mail_badpass"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Defaults secure_path=\"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\""
                            ),
                            React.createElement(
                                "li",
                                null,
                                "root ALL=(ALL:ALL) ALL"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "%admin ALL=(ALL) ALL"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "%sudo ALL=(ALL:ALL) ALL"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Comment out all other entries"
                    )
                )
            );
        }
    }]);

    return Sudo;
}(Section);

var SystemLog = function (_Section23) {
    _inherits(SystemLog, _Section23);

    function SystemLog() {
        _classCallCheck(this, SystemLog);

        return _possibleConstructorReturn(this, (SystemLog.__proto__ || Object.getPrototypeOf(SystemLog)).apply(this, arguments));
    }

    _createClass(SystemLog, [{
        key: "displayName",
        value: function displayName() {
            return "System Log";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Press Ubuntu icon"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "System Log"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click on icon"
                    )
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Review logs prior to today for system changes"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Pay attention to user accounts, especially root/sudo"
                    )
                ),
                "Reference: ",
                React.createElement(
                    "a",
                    { href: "https://help.ubuntu.com/community/LinuxLogFiles" },
                    "https://help.ubuntu.com/community/LinuxLogFiles"
                )
            );
        }
    }]);

    return SystemLog;
}(Section);

var SystemSettings = function (_Section24) {
    _inherits(SystemSettings, _Section24);

    function SystemSettings() {
        _classCallCheck(this, SystemSettings);

        return _possibleConstructorReturn(this, (SystemSettings.__proto__ || Object.getPrototypeOf(SystemSettings)).apply(this, arguments));
    }

    _createClass(SystemSettings, [{
        key: "displayName",
        value: function displayName() {
            return "System Settings";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Press the gear-like icon at the top right of the screen. (Next to the current time)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click on ",
                        React.createElement(
                            "b",
                            null,
                            "System Settings"
                        )
                    )
                )
            );
        }
    }]);

    return SystemSettings;
}(Section);

var Terminal = function (_Section25) {
    _inherits(Terminal, _Section25);

    function Terminal() {
        _classCallCheck(this, Terminal);

        return _possibleConstructorReturn(this, (Terminal.__proto__ || Object.getPrototypeOf(Terminal)).apply(this, arguments));
    }

    _createClass(Terminal, [{
        key: "displayName",
        value: function displayName() {
            return "Terminal";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                "Option 1",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Press Ubuntu icon button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "terminal"
                        ),
                        ", press Enter"
                    )
                ),
                "Option 2",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Applications"
                        ),
                        " menu"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Go to ",
                        React.createElement(
                            "strong",
                            null,
                            "Accessories"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Terminal"
                        )
                    )
                )
            );
        }
    }]);

    return Terminal;
}(Section);

var Updates = function (_Section26) {
    _inherits(Updates, _Section26);

    function Updates() {
        _classCallCheck(this, Updates);

        return _possibleConstructorReturn(this, (Updates.__proto__ || Object.getPrototypeOf(Updates)).apply(this, arguments));
    }

    _createClass(Updates, [{
        key: "displayName",
        value: function displayName() {
            return "Updates";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.version === "ubuntu") {
                return this.option1();
            } else if (this.props.version === "ubuntu16.04") {
                return this.option2();
            }
            return "unknown";
        }
    }, {
        key: "option1",
        value: function option1() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(SystemSettings).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Under ",
                        React.createElement(
                            "b",
                            null,
                            "System"
                        ),
                        " section, find and click on ",
                        React.createElement(
                            "b",
                            null,
                            "Software & Updates"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Press ",
                        React.createElement(
                            "b",
                            null,
                            "Revert"
                        ),
                        " for default settings"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "For Ubuntu Software tab",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "[x] Canonical-supported free and open-source software (main)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[x] Community-maintained free and open-source software (universe)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[Optional] Proprietary drivers for devices (restricted)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[Optional] Software restricted by copyright or legal issues (multiverse)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "For ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "Download from:"
                                ),
                                ", select ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "Other"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Click ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "Select Best Server"
                                ),
                                ". Wait for tests to complete."
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Click ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "Choose Server"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "For Updates tab",
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "[x] Important security updates (*-security)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[x] Recommended updates (*-updates)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[Optional] Pre-release updates (*-proposed)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[Optional] Unsupported updates (*-backports)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Automatic check for updates: Daily"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "When there are security updates: Display immediately"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo apt-get update && sudo apt-get upgrade -y"
                    )
                )
            );
        }
    }, {
        key: "option2",
        value: function option2() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(SystemSettings).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Under ",
                        React.createElement(
                            "b",
                            null,
                            "System"
                        ),
                        " section, find and click on ",
                        React.createElement(
                            "b",
                            null,
                            "Software & Updates"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Press ",
                        React.createElement(
                            "b",
                            null,
                            "Revert"
                        ),
                        " for default settings"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "For Ubuntu Software tab",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "[x] Canonical-supported free and open-source software (main)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[x] Community-maintained free and open-source software (universe)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[x] Proprietary drivers for devices (restricted)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[x] Software restricted by copyright or legal issues (multiverse)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[ ] Source code"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "For ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "Download from:"
                                ),
                                ", select ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "Other"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Click ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "Select Best Server"
                                ),
                                ". Wait for tests to complete."
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Click ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "Choose Server"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "For Updates tab",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "[x] Important security updates (*-security)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[x] Recommended updates (*-updates)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[x] Unsupported updates (*-backports)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Automatic check for updates: Daily"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "When there are security updates: Display immediately"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "When there are other updates: Display weekly"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Notify me of a new Ubuntu version: For long-term support version"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "For Developer Options",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "[ ] Pre-released updates (*-proposed)"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click ",
                        React.createElement(
                            "strong",
                            null,
                            "Close"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "sudo apt-get update && sudo apt-get upgrade -y"
                    )
                )
            );
        }
    }]);

    return Updates;
}(Section);

var Users = function (_Section27) {
    _inherits(Users, _Section27);

    function Users() {
        _classCallCheck(this, Users);

        return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
    }

    _createClass(Users, [{
        key: "displayName",
        value: function displayName() {
            return "Users";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h3",
                    null,
                    "Location"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(Terminal).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "cat /etc/passwd"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Check ",
                        React.createElement(DefaultUsers).type.prototype.getLink()
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Check that the users specified in the readme exist. Double check the default users. Look out for unmentioned users."
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Line reference = [user]:x:[user id]:[group id]:[description]:[home directory]:[default shell]"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "User ID number less than 1000 are hidden users"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "only user root should have User ID of 0"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "To disable a user (unable to log in, keep files):"
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "sudo passwd -l [user]"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "To remove a user and their files:"
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "sudo userdel -r [user]"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "To add a user:"
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "sudo useradd [user] -m -s /bin/bash"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Update all allowed users' passwords (including root)"
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "sudo passwd [user]"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Write down user and password for reference"
                        )
                    )
                )
            );
        }
    }]);

    return Users;
}(Section);
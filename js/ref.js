var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocalUsersAndGroups = function (_Section) {
    _inherits(LocalUsersAndGroups, _Section);

    function LocalUsersAndGroups() {
        _classCallCheck(this, LocalUsersAndGroups);

        var _this = _possibleConstructorReturn(this, (LocalUsersAndGroups.__proto__ || Object.getPrototypeOf(LocalUsersAndGroups)).call(this));

        _this.state.name = "Local Users and Groups";
        return _this;
    }

    _createClass(LocalUsersAndGroups, [{
        key: "getContent",
        value: function getContent() {
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
                        "Go to ",
                        React.createElement(
                            "a",
                            { href: "#Administrative Tools" },
                            "Administrative Tools"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Computer Management"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "System Tools"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Users and Groups"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                React.createElement(
                    "h4",
                    null,
                    "Users"
                ),
                React.createElement(
                    "span",
                    null,
                    "For each user:"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Right click on user, select ",
                        React.createElement(
                            "strong",
                            null,
                            "Properties"
                        )
                    ),
                    "Under ",
                    React.createElement(
                        "strong",
                        null,
                        "General"
                    ),
                    " tab",
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Disable all users not required by readme"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Set passwords to expire for all users"
                        )
                    ),
                    "Under ",
                    React.createElement(
                        "strong",
                        null,
                        "Member Of"
                    ),
                    " tab",
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Add user to necessary groups, e.g. Administrators"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Remove user from unnecessary groups"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Right click on user, select ",
                        React.createElement(
                            "b",
                            null,
                            "Set Password"
                        )
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            "Make sure password meets the ",
                            React.createElement(
                                "a",
                                { href: "#Password Policy" },
                                "Password Policy"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Write down user and password for reference"
                        )
                    )
                ),
                React.createElement(
                    "span",
                    null,
                    "For the Administrator user:"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Right click on Adminstrator user, select ",
                        React.createElement(
                            "strong",
                            null,
                            "Rename"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Change name to something else"
                    )
                ),
                React.createElement(
                    "span",
                    null,
                    "For the Guest user:"
                ),
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Right click on Guest user, select ",
                        React.createElement(
                            "strong",
                            null,
                            "Properties"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "[x] Account is disabled"
                    )
                ),
                React.createElement(
                    "h4",
                    null,
                    "Groups"
                ),
                React.createElement(
                    "span",
                    null,
                    "Check the users in all of the groups.These are the default entries."
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Administrators",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "only the users required"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Backup Operators",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Cryptographic Operators",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Distributed COM Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Event Log Readers",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Guests",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Guest"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "IIS_IUSRS",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "NT AUTHORITY\\IUSR (S-1-5-17)"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Network Configuration Operators",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Performance Log Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Performance Monitor Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Power Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Remote Desktop Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries; unless required by readme"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Replicator",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Users",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "NT AUTHORITY\\Authenticated Users(S-1-5-11)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "NT AUTHORITY\\INTERACTIVE (S-1-5-4)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "only the users necessary on the system"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LocalUsersAndGroups;
}(Section);

var AutomaticLogin = function (_Section2) {
    _inherits(AutomaticLogin, _Section2);

    function AutomaticLogin() {
        _classCallCheck(this, AutomaticLogin);

        var _this2 = _possibleConstructorReturn(this, (AutomaticLogin.__proto__ || Object.getPrototypeOf(AutomaticLogin)).call(this));

        _this2.state.name = "Automatic Login";
        return _this2;
    }

    _createClass(AutomaticLogin, [{
        key: "getContent",
        value: function getContent() {
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
                        "Press Start or Windows button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "netplwiz"
                        ),
                        ", press Enter key"
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
                        "Under ",
                        React.createElement(
                            "strong",
                            null,
                            "Users"
                        ),
                        " tab",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "[x] Users must enter a user name and password to use this computer"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AutomaticLogin;
}(Section);

var AddRemovePrograms = function (_Section3) {
    _inherits(AddRemovePrograms, _Section3);

    function AddRemovePrograms() {
        _classCallCheck(this, AddRemovePrograms);

        var _this3 = _possibleConstructorReturn(this, (AddRemovePrograms.__proto__ || Object.getPrototypeOf(AddRemovePrograms)).call(this));

        _this3.state.name = "Add/Remove Programs";
        return _this3;
    }

    _createClass(AddRemovePrograms, [{
        key: "getContent",
        value: function getContent() {
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
                        React.createElement(
                            "a",
                            { href: "#Control Panel" },
                            "Control Panel"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Programs"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Uninstall a Program"
                        )
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
                        "Do not remove any programs required by readme (e.g. web browser, work tools)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Remove all programs prohibited by readme (e.g. games, non-work tools)"
                    )
                )
            );
        }
    }]);

    return AddRemovePrograms;
}(Section);

var WindowsFeatures = function (_Section4) {
    _inherits(WindowsFeatures, _Section4);

    function WindowsFeatures() {
        _classCallCheck(this, WindowsFeatures);

        var _this4 = _possibleConstructorReturn(this, (WindowsFeatures.__proto__ || Object.getPrototypeOf(WindowsFeatures)).call(this));

        _this4.state.name = "Windows Features";
        return _this4;
    }

    _createClass(WindowsFeatures, [{
        key: "getContent",
        value: function getContent() {
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
                        React.createElement(
                            "a",
                            { href: "#Control Panel" },
                            "Control Panel"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Programs"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Turn on Windows features on or off"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "Uncheck all not mentioned in the following:",
                React.createElement("p", null),
                "Minimum required",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Search"
                    )
                ),
                "May be required",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Microsoft .NET Framework"
                    )
                ),
                "Only enable these if required by readme",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Simple Network Management Protocol (SNMP)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Telnet Client"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Telnet Server"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "TFTP Client"
                    )
                )
            );
        }
    }]);

    return WindowsFeatures;
}(Section);

var StartupPrograms = function (_Section5) {
    _inherits(StartupPrograms, _Section5);

    function StartupPrograms() {
        _classCallCheck(this, StartupPrograms);

        var _this5 = _possibleConstructorReturn(this, (StartupPrograms.__proto__ || Object.getPrototypeOf(StartupPrograms)).call(this));

        _this5.state.name = "Startup Programs";
        return _this5;
    }

    _createClass(StartupPrograms, [{
        key: "getContent",
        value: function getContent() {
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
                        "Press the Start or Windows button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "msconfig"
                        ),
                        ", press Enter"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Go to the ",
                        React.createElement(
                            "strong",
                            null,
                            "Startup"
                        ),
                        " tab"
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
                        "Keep checkmarks on required programs and services"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Remove checkmarks on all other items"
                    )
                )
            );
        }
    }]);

    return StartupPrograms;
}(Section);

var Services = function (_Section6) {
    _inherits(Services, _Section6);

    function Services() {
        _classCallCheck(this, Services);

        var _this6 = _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).call(this));

        _this6.state.name = "Services";
        return _this6;
    }

    _createClass(Services, [{
        key: "getContent",
        value: function getContent() {
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
                        "Go to ",
                        React.createElement(
                            "a",
                            { href: "#Administrative Tools" },
                            "Administrative Tools"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Services"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "Make sure the following services are running and have automatic start up:",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "DHCP Client"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "DNS Client"
                    )
                ),
                "Unless required by readme, stop each of the following services and change Startup Type as Disabled",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "DHCP Server"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "DNS Server"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "FTP Server"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "HTTP Server"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Information Services (IIS)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Telnet Server"
                    )
                )
            );
        }
    }]);

    return Services;
}(Section);

var TaskScheduler = function (_Section7) {
    _inherits(TaskScheduler, _Section7);

    function TaskScheduler() {
        _classCallCheck(this, TaskScheduler);

        var _this7 = _possibleConstructorReturn(this, (TaskScheduler.__proto__ || Object.getPrototypeOf(TaskScheduler)).call(this));

        _this7.state.name = "Task Scheduler";
        return _this7;
    }

    _createClass(TaskScheduler, [{
        key: "getContent",
        value: function getContent() {
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
                        React.createElement(
                            "a",
                            { href: "#Administrative Tools" },
                            "Administrative Tools"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Task Scheduler"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Under ",
                        React.createElement(
                            "strong",
                            null,
                            "Task Scheduler (Local)"
                        ),
                        ", open ",
                        React.createElement(
                            "strong",
                            null,
                            "Task Scheduler Library"
                        )
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
                        "Review list of scheduled tasks"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Add any required tasks"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Disable or delete any unnecessary or prohibited tasks"
                    )
                )
            );
        }
    }]);

    return TaskScheduler;
}(Section);

var InternetExplorer = function (_Section8) {
    _inherits(InternetExplorer, _Section8);

    function InternetExplorer() {
        _classCallCheck(this, InternetExplorer);

        var _this8 = _possibleConstructorReturn(this, (InternetExplorer.__proto__ || Object.getPrototypeOf(InternetExplorer)).call(this));

        _this8.state.name = "Internet Explorer";
        return _this8;
    }

    _createClass(InternetExplorer, [{
        key: "getContent",
        value: function getContent() {
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
                        React.createElement(
                            "strong",
                            null,
                            "Internet Explorer"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Tools"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Internet Options"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "Under the Security tab, security zone settings should be:",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Internet - High"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Local Intranet - Medium-low"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Trusted Sites - Medium"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Restricted Sites - High"
                    )
                )
            );
        }
    }]);

    return InternetExplorer;
}(Section);

var DiskCleanup = function (_Section9) {
    _inherits(DiskCleanup, _Section9);

    function DiskCleanup() {
        _classCallCheck(this, DiskCleanup);

        var _this9 = _possibleConstructorReturn(this, (DiskCleanup.__proto__ || Object.getPrototypeOf(DiskCleanup)).call(this));

        _this9.state.name = "Disk Cleanup";
        return _this9;
    }

    _createClass(DiskCleanup, [{
        key: "getContent",
        value: function getContent() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Press Start or Windows button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Computer"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Right click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Disk (C:)"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Select ",
                        React.createElement(
                            "strong",
                            null,
                            "Properties"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Disk Cleanup"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Clean up system files"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Put checkmarks for all items under Files to delete"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Press ",
                        React.createElement(
                            "strong",
                            null,
                            "OK"
                        )
                    )
                )
            );
        }
    }]);

    return DiskCleanup;
}(Section);
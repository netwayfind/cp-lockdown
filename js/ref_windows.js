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
                        "Open ",
                        React.createElement(AdministrativeTools).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Security Policy"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Account Policies"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Account Lockout Policy"
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
                        "Account lockout duration - 30 minutes"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Account lockout threshold - 5"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Reset account lockout counter after - 30 minutes"
                    )
                )
            );
        }
    }]);

    return AccountLockoutPolicy;
}(Section);

var AddRemovePrograms = function (_Section2) {
    _inherits(AddRemovePrograms, _Section2);

    function AddRemovePrograms() {
        _classCallCheck(this, AddRemovePrograms);

        return _possibleConstructorReturn(this, (AddRemovePrograms.__proto__ || Object.getPrototypeOf(AddRemovePrograms)).apply(this, arguments));
    }

    _createClass(AddRemovePrograms, [{
        key: "displayName",
        value: function displayName() {
            return "Add/Remove Programs";
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
                        React.createElement(ControlPanel).type.prototype.getLink()
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

var AdministrativeTools = function (_Section3) {
    _inherits(AdministrativeTools, _Section3);

    function AdministrativeTools() {
        _classCallCheck(this, AdministrativeTools);

        return _possibleConstructorReturn(this, (AdministrativeTools.__proto__ || Object.getPrototypeOf(AdministrativeTools)).apply(this, arguments));
    }

    _createClass(AdministrativeTools, [{
        key: "displayName",
        value: function displayName() {
            return "Administrative Tools";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option1();
            } else if (this.props.version === "win2016") {
                return this.option1();
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "System and Security"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Administrative Tools"
                        )
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
                        "Move mouse over ",
                        React.createElement(
                            "strong",
                            null,
                            "Administrative Tools"
                        )
                    )
                )
            );
        }
    }]);

    return AdministrativeTools;
}(Section);

var AdvancedAuditPolicyConfiguration = function (_Section4) {
    _inherits(AdvancedAuditPolicyConfiguration, _Section4);

    function AdvancedAuditPolicyConfiguration() {
        _classCallCheck(this, AdvancedAuditPolicyConfiguration);

        return _possibleConstructorReturn(this, (AdvancedAuditPolicyConfiguration.__proto__ || Object.getPrototypeOf(AdvancedAuditPolicyConfiguration)).apply(this, arguments));
    }

    _createClass(AdvancedAuditPolicyConfiguration, [{
        key: "displayName",
        value: function displayName() {
            return "Advanced Audit Policy Configuration";
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
                        React.createElement(AdministrativeTools).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Security Policy"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Advanced Audit Policy Configuration"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "System Audit Policies - Local Group Policy Object"
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
                        "Account Logon",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Audit Credential Validation - Success, Failure"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Account Management",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Audit Computer Account Management - Success, Failure"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit Other Account Management Events - Success, Failure "
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit System Group Management - Success, Failure"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit User Account Management - Success, Failure"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Detailed Tracking",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Audit Process Creation - Success"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Logon/Logoff",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Audit Logoff - Success"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit Logon - Success, Failure"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit Special Logon - Success"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Object Access",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Audit File System - Failure"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit Registry - Failure"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit Handle Manipulation - Failure"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Policy Change",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Audit Audit Policy Change - Success, Failure"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit Authentication Policy Change - Success"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Privilege Use",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Audit Sensitive Privilege Use - Success, Failure"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "System",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Audit IPSec Driver - Success, Failure"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit Security State Change - Success, Failure"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit Security System Extension - Success, Failure"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Audit System Integrity - Success, Failure"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Global Object Access Auditing",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "File system",
                                React.createElement(
                                    "ol",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        "[x] Define this policy setting"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Find and click on ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Configure"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Find and click on ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Add"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Find and click on ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Select a principle"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Under ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Enter the object name to select"
                                        ),
                                        ", enter ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Everyone"
                                        )
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
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Set ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Type"
                                        ),
                                        " to ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Failure"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Make sure all ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Permissions"
                                        ),
                                        " are checked"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Press ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "OK"
                                        ),
                                        " to close the windows"
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Registry",
                                React.createElement(
                                    "ol",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        "[x] Define this policy setting"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Find and click on ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Configure"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Find and click on ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Add"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Find and click on ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Select a principle"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Under ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Enter the object name to select"
                                        ),
                                        ", enter ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Everyone"
                                        )
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
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Set ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Type"
                                        ),
                                        " to ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Fail"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Make sure all ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Permissions"
                                        ),
                                        " are checked"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Press ",
                                        React.createElement(
                                            "strong",
                                            null,
                                            "OK"
                                        ),
                                        " to close the windows"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AdvancedAuditPolicyConfiguration;
}(Section);

var AntiMalwareTools = function (_Section5) {
    _inherits(AntiMalwareTools, _Section5);

    function AntiMalwareTools() {
        _classCallCheck(this, AntiMalwareTools);

        return _possibleConstructorReturn(this, (AntiMalwareTools.__proto__ || Object.getPrototypeOf(AntiMalwareTools)).apply(this, arguments));
    }

    _createClass(AntiMalwareTools, [{
        key: "displayName",
        value: function displayName() {
            return "Anti-Malware Tools";
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
                "When running these tools, review any findings and avoid removing any required software.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Avast aswMBR",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "http://public.avast.com/~gmerek/aswMBR.htm" },
                                    "http://public.avast.com/~gmerek/aswMBR.htm"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "MalwareBytes",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "https://downloads.malwarebytes.com/file/mb3/" },
                                    "https://downloads.malwarebytes.com/file/mb3/"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "MalwareBytes Anti-Rootkit",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "http://www.bleepingcomputer.com/download/malwarebytes-anti-rootkit/" },
                                    "http://www.bleepingcomputer.com/download/malwarebytes-anti-rootkit/"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "McAfee Rootkit Remover",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "http://www.mcafee.com/us/downloads/free-tools/rootkitremover.aspx" },
                                    "http://www.mcafee.com/us/downloads/free-tools/rootkitremover.aspx"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Norton Power Eraser",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { target: "_blank", href: "http://security.symantec.com/nbrt/npe.aspx" },
                                    "http://security.symantec.com/nbrt/npe.aspx"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AntiMalwareTools;
}(Section);

var AuditPolicy = function (_Section6) {
    _inherits(AuditPolicy, _Section6);

    function AuditPolicy() {
        _classCallCheck(this, AuditPolicy);

        return _possibleConstructorReturn(this, (AuditPolicy.__proto__ || Object.getPrototypeOf(AuditPolicy)).apply(this, arguments));
    }

    _createClass(AuditPolicy, [{
        key: "displayName",
        value: function displayName() {
            return "Audit Policy";
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
                        React.createElement(AdministrativeTools).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Security Policy"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Policies"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Audit Policy"
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
                        "Audit account logon events - Success, Failure"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Audit account management - Success, Failure"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Audit directory service access - Success, Failure"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Audit logon events - Success, Failure"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Audit object access - Success, Failure"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Audit policy change - Success, Failure"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Audit privilege use - Success, Failure"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Audit process tracking - Success, Failure"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Audit system events - Success, Failure"
                    )
                )
            );
        }
    }]);

    return AuditPolicy;
}(Section);

var AutomaticLogin = function (_Section7) {
    _inherits(AutomaticLogin, _Section7);

    function AutomaticLogin() {
        _classCallCheck(this, AutomaticLogin);

        return _possibleConstructorReturn(this, (AutomaticLogin.__proto__ || Object.getPrototypeOf(AutomaticLogin)).apply(this, arguments));
    }

    _createClass(AutomaticLogin, [{
        key: "displayName",
        value: function displayName() {
            return "Automatic Login";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option3();
            } else if (this.props.version === "win2016") {
                return this.option3();
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
                        "Press Windows key + R key"
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
    }, {
        key: "option3",
        value: function option3() {
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
                        "Press Windows button"
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

var AutomaticUpdates = function (_Section8) {
    _inherits(AutomaticUpdates, _Section8);

    function AutomaticUpdates() {
        _classCallCheck(this, AutomaticUpdates);

        return _possibleConstructorReturn(this, (AutomaticUpdates.__proto__ || Object.getPrototypeOf(AutomaticUpdates)).apply(this, arguments));
    }

    _createClass(AutomaticUpdates, [{
        key: "displayName",
        value: function displayName() {
            return "Automatic Updates";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option2();
            } else if (this.props.version === "win2016") {
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "System and Security"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Update"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Turn automatic updating on or off"
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
                        "Under Important Updates",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Install updates automatically (recommended)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Install new updates [ Every day ] at [ 3:00 AM ]"
                            )
                        )
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "System and Security"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Update"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Change settings"
                        )
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
                        "Under Important Updates",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Install updates automatically (recommended)"
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
                            "Updates will be automatically installed during the maintenance window"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Set Run maintenance tasks daily at [3:00 AM]"
                    )
                )
            );
        }
    }, {
        key: "option3",
        value: function option3() {
            return "Automatic updates are enabled by default";
        }
    }, {
        key: "option4",
        value: function option4() {
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "System"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Update"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Turn automatic updating on or off"
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
                        "Install updates automatically (recommended)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Install new updates [ Every day ] at [ 3:00 AM ]"
                    )
                )
            );
        }
    }]);

    return AutomaticUpdates;
}(Section);

var CDrive = function (_Section9) {
    _inherits(CDrive, _Section9);

    function CDrive() {
        _classCallCheck(this, CDrive);

        return _possibleConstructorReturn(this, (CDrive.__proto__ || Object.getPrototypeOf(CDrive)).apply(this, arguments));
    }

    _createClass(CDrive, [{
        key: "displayName",
        value: function displayName() {
            return "C:\\ Drive";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option3();
            } else if (this.props.version === "win2016") {
                return this.option3();
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
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Disk (C:)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "These are the default folders. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "PerfLogs"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(ProgramFiles).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(ProgramFilesx86).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ProgramData (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(UsersFolder).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows"
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
                        "Press ",
                        React.createElement(
                            "strong",
                            null,
                            "File Explorer"
                        ),
                        " icon on Taskbar (folder icon)"
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
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Disk (C:)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "These are the default folders. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "PerfLogs"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(ProgramFiles).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(ProgramFilesx86).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ProgramData (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(UsersFolder).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows"
                    )
                )
            );
        }
    }, {
        key: "option3",
        value: function option3() {
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
                        "Press ",
                        React.createElement(
                            "strong",
                            null,
                            "File Explorer"
                        ),
                        " icon on Taskbar (folder icon)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Disk (C:)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "These are the default folders. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "PerfLogs"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(ProgramFiles).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(ProgramFilesx86).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ProgramData (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(UsersFolder).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows"
                    )
                )
            );
        }
    }, {
        key: "option4",
        value: function option4() {
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
                        "Press ",
                        React.createElement(
                            "strong",
                            null,
                            "File Explorer"
                        ),
                        " icon on Taskbar (folder icon)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "This PC"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Disk (C:)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "These are the default folders. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "PerfLogs"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(ProgramFiles).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(ProgramFilesx86).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ProgramData (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(UsersFolder).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows"
                    )
                )
            );
        }
    }, {
        key: "option5",
        value: function option5() {
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
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Disk (C:)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "These are the default files and folders. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "PerfLogs"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(ProgramFiles).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(ProgramFilesx86).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ProgramData (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(UsersFolder).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "BOOTSECT.BAK"
                    )
                )
            );
        }
    }]);

    return CDrive;
}(Section);

var CommandPrompt = function (_Section10) {
    _inherits(CommandPrompt, _Section10);

    function CommandPrompt() {
        _classCallCheck(this, CommandPrompt);

        return _possibleConstructorReturn(this, (CommandPrompt.__proto__ || Object.getPrototypeOf(CommandPrompt)).apply(this, arguments));
    }

    _createClass(CommandPrompt, [{
        key: "displayName",
        value: function displayName() {
            return "Command Prompt";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option3();
            } else if (this.props.version === "win2016") {
                return this.option3();
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
                        "Press Start or Windows button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "cmd"
                        ),
                        ", press Enter key"
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
                        "Press Windows key + R key"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "cmd"
                        ),
                        ", press Enter key"
                    )
                )
            );
        }
    }, {
        key: "option3",
        value: function option3() {
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
                        "Press Windows button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "cmd"
                        ),
                        ", press Enter key"
                    )
                )
            );
        }
    }]);

    return CommandPrompt;
}(Section);

var ControlPanel = function (_Section11) {
    _inherits(ControlPanel, _Section11);

    function ControlPanel() {
        _classCallCheck(this, ControlPanel);

        return _possibleConstructorReturn(this, (ControlPanel.__proto__ || Object.getPrototypeOf(ControlPanel)).apply(this, arguments));
    }

    _createClass(ControlPanel, [{
        key: "displayName",
        value: function displayName() {
            return "Control Panel";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option3();
            } else if (this.props.version === "win2016") {
                return this.option3();
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
                        "Press Start or Windows button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Control Panel"
                        )
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
                        "Move mouse to bottom right corner of screen"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Settings"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Control Panel"
                        )
                    )
                )
            );
        }
    }, {
        key: "option3",
        value: function option3() {
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
                        "Press Windows button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "Control Panel"
                        ),
                        ", press Enter key"
                    )
                )
            );
        }
    }]);

    return ControlPanel;
}(Section);

var CrowdInspect = function (_Section12) {
    _inherits(CrowdInspect, _Section12);

    function CrowdInspect() {
        _classCallCheck(this, CrowdInspect);

        return _possibleConstructorReturn(this, (CrowdInspect.__proto__ || Object.getPrototypeOf(CrowdInspect)).apply(this, arguments));
    }

    _createClass(CrowdInspect, [{
        key: "displayName",
        value: function displayName() {
            return "CrowdInspect";
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
                    "Download"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { target: "_blank", href: "http://www.crowdstrike.com/crowdinspect/index.html" },
                            "http://www.crowdstrike.com/crowdinspect/index.html"
                        )
                    )
                )
            );
        }
    }]);

    return CrowdInspect;
}(Section);

var DiskCleanup = function (_Section13) {
    _inherits(DiskCleanup, _Section13);

    function DiskCleanup() {
        _classCallCheck(this, DiskCleanup);

        return _possibleConstructorReturn(this, (DiskCleanup.__proto__ || Object.getPrototypeOf(DiskCleanup)).apply(this, arguments));
    }

    _createClass(DiskCleanup, [{
        key: "displayName",
        value: function displayName() {
            return "Disk Cleanup";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option4();
            } else if (this.props.version === "win2016") {
                return this.option1();
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
                        "Press Windows key + R key"
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
    }, {
        key: "option3",
        value: function option3() {
            return React.createElement(
                React.Fragment,
                null,
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
                            "File Explorer"
                        ),
                        " icon on Taskbar (folder icon)"
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
    }, {
        key: "option4",
        value: function option4() {
            return "Disk cleanup is not installed by default.";
        }
    }]);

    return DiskCleanup;
}(Section);

var EventViewer = function (_Section14) {
    _inherits(EventViewer, _Section14);

    function EventViewer() {
        _classCallCheck(this, EventViewer);

        return _possibleConstructorReturn(this, (EventViewer.__proto__ || Object.getPrototypeOf(EventViewer)).apply(this, arguments));
    }

    _createClass(EventViewer, [{
        key: "displayName",
        value: function displayName() {
            return "Event Viewer";
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
                        "Go to ",
                        React.createElement(AdministrativeTools).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(
                            "strong",
                            null,
                            "Event Viewer"
                        )
                    )
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Review ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Logs"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Review ",
                        React.createElement(
                            "strong",
                            null,
                            "Applications and Services Logs"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Review logs prior to today for system changes"
                    )
                )
            );
        }
    }]);

    return EventViewer;
}(Section);

var FindUnauthorizedFiles = function (_Section15) {
    _inherits(FindUnauthorizedFiles, _Section15);

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
                        React.createElement(CommandPrompt).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "dir C:\\Users /s /b /a | find /i \".mp3\"",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "This will search for .mp3 files in C:\\Users"
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

var HostsFile = function (_Section16) {
    _inherits(HostsFile, _Section16);

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
                        "Open Notepad under an administrator account",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Right click, select ",
                                React.createElement(
                                    "strong",
                                    null,
                                    "Run as Administrator"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Open file: C:\\windows\\system32\\drivers\\etc\\hosts"
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
                        "Default file has no entries, only has lines that are blank or start with #"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Disable any entry lines by adding a # to the start of the line"
                    )
                )
            );
        }
    }]);

    return HostsFile;
}(Section);

var InternetConnectionSharing = function (_Section17) {
    _inherits(InternetConnectionSharing, _Section17);

    function InternetConnectionSharing() {
        _classCallCheck(this, InternetConnectionSharing);

        return _possibleConstructorReturn(this, (InternetConnectionSharing.__proto__ || Object.getPrototypeOf(InternetConnectionSharing)).apply(this, arguments));
    }

    _createClass(InternetConnectionSharing, [{
        key: "displayName",
        value: function displayName() {
            return "Internet Connection Sharing";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option1();
            } else if (this.props.version === "win2016") {
                return this.option1();
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Network and Internet"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Network and Sharing Center"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Change adapter settings"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "For each Local Area Connection or Wireless Network Connection",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Right click and select ",
                        React.createElement(
                            "strong",
                            null,
                            "Properties"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Go to the ",
                        React.createElement(
                            "strong",
                            null,
                            "Sharing"
                        ),
                        " tab, if any"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "[ ] Allow other network users to connect through this computer's Internet connection"
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Network and Internet"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Network and Sharing Center"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Manage network connections"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "For each Local Area Connection or Wireless Network Connection",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Right click and select ",
                        React.createElement(
                            "strong",
                            null,
                            "Properties"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Go to the ",
                        React.createElement(
                            "strong",
                            null,
                            "Sharing"
                        ),
                        " tab, if any"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "[ ] Allow other network users to connect through this computer's Internet connection"
                    )
                )
            );
        }
    }]);

    return InternetConnectionSharing;
}(Section);

var InternetExplorer = function (_Section18) {
    _inherits(InternetExplorer, _Section18);

    function InternetExplorer() {
        _classCallCheck(this, InternetExplorer);

        return _possibleConstructorReturn(this, (InternetExplorer.__proto__ || Object.getPrototypeOf(InternetExplorer)).apply(this, arguments));
    }

    _createClass(InternetExplorer, [{
        key: "displayName",
        value: function displayName() {
            return "Internet Explorer";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option2();
            } else if (this.props.version === "win2016") {
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
                        ),
                        " (gear icon near top right)"
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

var LocalGroupPolicyEditor = function (_Section19) {
    _inherits(LocalGroupPolicyEditor, _Section19);

    function LocalGroupPolicyEditor() {
        _classCallCheck(this, LocalGroupPolicyEditor);

        return _possibleConstructorReturn(this, (LocalGroupPolicyEditor.__proto__ || Object.getPrototypeOf(LocalGroupPolicyEditor)).apply(this, arguments));
    }

    _createClass(LocalGroupPolicyEditor, [{
        key: "displayName",
        value: function displayName() {
            return "Local Group Policy Editor";
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
                        "Press Start or Windows button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "gpedit.msc"
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
                        "Computer Configuration",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrative Templates",
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        "System",
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                "Remote Assistance",
                                                React.createElement(
                                                    "ul",
                                                    null,
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        "Solicited Remote Assistance - Disabled"
                                                    ),
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        "Offer Remote Assistance - Disabled"
                                                    ),
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        "Turn on session logging - Enabled"
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        "Windows Components",
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                "Autoplay Policies",
                                                React.createElement(
                                                    "ul",
                                                    null,
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        "Turn off AutoPlay - Enabled:All Drives"
                                                    ),
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        "Turn off Autoplay for non-volume devices: Enabled"
                                                    ),
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        "Default behavior for AutoRun - Enabled:Do not execute any autorun commands"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LocalGroupPolicyEditor;
}(Section);

var LocalUsersAndGroups = function (_Section20) {
    _inherits(LocalUsersAndGroups, _Section20);

    function LocalUsersAndGroups() {
        _classCallCheck(this, LocalUsersAndGroups);

        return _possibleConstructorReturn(this, (LocalUsersAndGroups.__proto__ || Object.getPrototypeOf(LocalUsersAndGroups)).apply(this, arguments));
    }

    _createClass(LocalUsersAndGroups, [{
        key: "displayName",
        value: function displayName() {
            return "Local Users and Groups";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option2();
            } else if (this.props.version === "win2016") {
                return this.option3();
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
                        "Go to ",
                        React.createElement(AdministrativeTools).type.prototype.getLink()
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
                            React.createElement(PasswordPolicy).type.prototype.getLink()
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
                        "Go to ",
                        React.createElement(AdministrativeTools).type.prototype.getLink()
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
                "For each user:",
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
                            React.createElement(PasswordPolicy).type.prototype.getLink()
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Write down user and password for reference"
                        )
                    )
                ),
                "For the Administrator user:",
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
                "For the Guest user:",
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
                "Check the users in all of the groups. These are the default entries.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Access Control Assistance Operators",
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
                        "Certificate Service DCOM Access",
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
                        "Hyper-V Administrators",
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
                        "Print Operators",
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
                        "RDS Endpoint Servers",
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
                        "RDS Management Servers",
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
                        "RDS Remote Access Servers",
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
                        "Remote Management Users",
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
                    ),
                    React.createElement(
                        "li",
                        null,
                        "WinRMRemoteWMIUsers__",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "No entries"
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "option3",
        value: function option3() {
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
                        React.createElement(AdministrativeTools).type.prototype.getLink()
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
                "For each user:",
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
                            React.createElement(PasswordPolicy).type.prototype.getLink()
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Write down user and password for reference"
                        )
                    )
                ),
                "For the Administrator user:",
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
                "For the Guest user:",
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
                "Check the users in all of the groups. These are the default entries.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Access Control Assistance Operators",
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
                        "Certificate Service DCOM Access",
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
                        "Hyper-V Administrators",
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
                        "Print Operators",
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
                        "RDS Endpoint Servers",
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
                        "RDS Management Servers",
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
                        "RDS Remote Access Servers",
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
                        "Remote Management Users",
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
                        "Storage Replica Administrators",
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
                        "System Managed Accounts Group",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "DefaultAccount"
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

var MicrosoftBaselineSecurityAnalyzer = function (_Section21) {
    _inherits(MicrosoftBaselineSecurityAnalyzer, _Section21);

    function MicrosoftBaselineSecurityAnalyzer() {
        _classCallCheck(this, MicrosoftBaselineSecurityAnalyzer);

        return _possibleConstructorReturn(this, (MicrosoftBaselineSecurityAnalyzer.__proto__ || Object.getPrototypeOf(MicrosoftBaselineSecurityAnalyzer)).apply(this, arguments));
    }

    _createClass(MicrosoftBaselineSecurityAnalyzer, [{
        key: "displayName",
        value: function displayName() {
            return "Microsoft Baseline Security Analyzer";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option1();
            } else if (this.props.version === "win2016") {
                return this.option1();
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
                    "Download"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { target: "_blank", href: "http://www.microsoft.com/en-us/download/details.aspx?id=7558" },
                            "http://www.microsoft.com/en-us/download/details.aspx?id=7558"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Choose ",
                        React.createElement(
                            "strong",
                            null,
                            "MBSASetup-x64-EN.msi"
                        )
                    )
                )
            );
        }
    }, {
        key: "option2",
        value: function option2() {
            return "Not supported. Program will run, but checks may be wrong.";
        }
    }]);

    return MicrosoftBaselineSecurityAnalyzer;
}(Section);

var MicrosoftSecurityEssentials = function (_Section22) {
    _inherits(MicrosoftSecurityEssentials, _Section22);

    function MicrosoftSecurityEssentials() {
        _classCallCheck(this, MicrosoftSecurityEssentials);

        return _possibleConstructorReturn(this, (MicrosoftSecurityEssentials.__proto__ || Object.getPrototypeOf(MicrosoftSecurityEssentials)).apply(this, arguments));
    }

    _createClass(MicrosoftSecurityEssentials, [{
        key: "displayName",
        value: function displayName() {
            return "Microsoft Security Essentials";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option3();
            } else if (this.props.version === "win2016") {
                return this.option3();
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
                    "Download"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { target: "_blank", href: "http://www.microsoft.com/en-us/download/details.aspx?id=5201" },
                            "http://www.microsoft.com/en-us/download/details.aspx?id=5201"
                        )
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
                "Windows Defender replaces Microsoft Security Essentials.",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Press Start button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Type ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Defender"
                        )
                    )
                )
            );
        }
    }, {
        key: "option3",
        value: function option3() {
            return React.createElement(
                React.Fragment,
                null,
                "Not supported for Windows Server.",
                React.createElement("p", null),
                "Use Microsoft Safety Scanner instead:",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { target: "_blank", href: "http://www.microsoft.com/security/scanner/en-us/default.aspx" },
                            "http://www.microsoft.com/security/scanner/en-us/default.aspx"
                        )
                    )
                )
            );
        }
    }]);

    return MicrosoftSecurityEssentials;
}(Section);

var PasswordPolicy = function (_Section23) {
    _inherits(PasswordPolicy, _Section23);

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
                        "Go to ",
                        React.createElement(AdministrativeTools).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Security Policy"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(
                            "strong",
                            null,
                            "Account Policies"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(
                            "strong",
                            null,
                            "Password Policy"
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
                        "Enforce password history - 5 passwords remembered"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Maximum password age - 30 days"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Minimum password age - 10 days"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Minimum password length - 8 characters"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Password must meet complexity requirements - Enabled"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Store passwords using reversible encryption - Disabled"
                    )
                )
            );
        }
    }]);

    return PasswordPolicy;
}(Section);

var Processes = function (_Section24) {
    _inherits(Processes, _Section24);

    function Processes() {
        _classCallCheck(this, Processes);

        return _possibleConstructorReturn(this, (Processes.__proto__ || Object.getPrototypeOf(Processes)).apply(this, arguments));
    }

    _createClass(Processes, [{
        key: "displayName",
        value: function displayName() {
            return "Processes";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.win8dot1();
            } else if (this.props.version === "win2016") {
                return this.win8dot1();
            }
            return "unknown";
        }
    }, {
        key: "win7",
        value: function win7() {
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
                        React.createElement(TaskManager).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Go to ",
                        React.createElement(
                            "strong",
                            null,
                            "Processes"
                        ),
                        " tab"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Show processes from all users"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following are Windows processes that should not be stopped. Avoid stopping any required software.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "conhost.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "csrss.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "dwm.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "explorer.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "lsass.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "lsm.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "MsMpEng.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "msseces.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "MisSrv.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "services.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "smss.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "spoolsv.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "svchost.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "System"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "taskhost.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "taskmgr.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "wininit.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "winlogon.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "WmiPrvSE.exe"
                    )
                )
            );
        }
    }, {
        key: "win8",
        value: function win8() {
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
                        React.createElement(TaskManager).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Go to ",
                        React.createElement(
                            "strong",
                            null,
                            "Processes"
                        ),
                        " tab"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Show processes from all users"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following are Windows processes that should not be stopped. Avoid stopping any required software.",
                React.createElement("p", null),
                "Apps",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Task Manager"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Explorer"
                    )
                ),
                "Background processes",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "COM Surrogate"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Host Process for Windows Tasks"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Windows Search Indexer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Spooler SubSystem App"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Touch Keyboard and Handwriting Panel"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Driver Foundation"
                    )
                ),
                "Windows processes",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Antimalware Service Executable"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Client Server Runtime Process"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Desktop Window Manager"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Local Security Authority Process"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Service Host"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Services and Controller app"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "System"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "System interrupts"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Login Application"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Session Manager"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Start-Up Application"
                    )
                )
            );
        }
    }, {
        key: "win8dot1",
        value: function win8dot1() {
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
                        React.createElement(TaskManager).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click ",
                        React.createElement(
                            "strong",
                            null,
                            "More details"
                        ),
                        ", if necessary"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Go to ",
                        React.createElement(
                            "strong",
                            null,
                            "Processes"
                        ),
                        " tab"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Show processes from all users"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following are Windows processes that should not be stopped. Avoid stopping any required software.",
                React.createElement("p", null),
                "Apps",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Task Manager"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Explorer"
                    )
                ),
                "Background processes",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "COM Surrogate"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Host Process for Windows Tasks"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Distributed Transaction Coordinator Service"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Windows Search Indexer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Runtime Broker"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Spooler SubSystem App"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Store"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Store Broker"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ThinPrint AutoConnect component"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "ThinPrint AutoConnect printer creation service"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Driver Foundation"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "WMI Provider Host"
                    )
                ),
                "Windows processes",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Antimalware Service Executable"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Client Server Runtime Process"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Console Window Host"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Desktop Window Manager"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Local Security Authority Process"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Network Realtime Inspection Service"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Service Host"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Services and Controller app"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "System"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "System interrupts"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Logon Application"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Session Manager"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Start-Up Application"
                    )
                )
            );
        }
    }, {
        key: "win10",
        value: function win10() {
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
                        React.createElement(TaskManager).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click ",
                        React.createElement(
                            "strong",
                            null,
                            "More details"
                        ),
                        ", if necessary"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Go to ",
                        React.createElement(
                            "strong",
                            null,
                            "Processes"
                        ),
                        " tab"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Show processes from all users"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following are Windows processes that should not be stopped. Avoid stopping any required software.",
                React.createElement("p", null),
                "Apps",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Task Manager"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Explorer"
                    )
                ),
                "Background processes",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "COM Surrogate"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Cortana"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Host Process for Windows Tasks"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft OneDrive"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Skype Preview"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Windows Search Indexer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Runtime Broker"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Spooler SubSystem App"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Defender notification icon"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Shell Experience Host"
                    )
                ),
                "Windows processes",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Antimalware Service Executable"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "appmodel"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Client Server Runtime Process"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Desktop Window Manager"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Local Security Authority Process"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Network Realtime Inspection Service"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Service Host"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Services and Controller app"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Shell Infrastructure Host"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "System"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "System interrupts"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Logon Application"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Session Manager"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Start-Up Application"
                    )
                )
            );
        }
    }, {
        key: "win2008",
        value: function win2008() {
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
                        React.createElement(TaskManager).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Go to ",
                        React.createElement(
                            "strong",
                            null,
                            "Processes"
                        ),
                        " tab"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Show processes from all users"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following are Windows processes that should not be stopped. Avoid stopping any required software.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "csrss.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "dwm.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "explorer.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "lsass.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "lsm.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "mmc.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "msdtc.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "services.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "smss.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "spoolsv.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "svchost.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "System"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "taskeng.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "taskmgr.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "wininit.exe"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "winlogon.exe"
                    )
                )
            );
        }
    }]);

    return Processes;
}(Section);

var ProgramFiles = function (_Section25) {
    _inherits(ProgramFiles, _Section25);

    function ProgramFiles() {
        _classCallCheck(this, ProgramFiles);

        return _possibleConstructorReturn(this, (ProgramFiles.__proto__ || Object.getPrototypeOf(ProgramFiles)).apply(this, arguments));
    }

    _createClass(ProgramFiles, [{
        key: "displayName",
        value: function displayName() {
            return "Program Files";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.win2012();
            } else if (this.props.version === "win2016") {
                return this.win2012();
            }
            return "unknown";
        }
    }, {
        key: "win7",
        value: function win7() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "DVD Maker"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Baseline Security Analyzer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Security Client"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Uninstall Information (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Defender"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Media Player"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Photo Viewer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Portable Devices"
                    )
                )
            );
        }
    }, {
        key: "win8",
        value: function win8() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Uninstall Information (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Defender"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Journal"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Media Player"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Multimedia Platform"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Photo Viewer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Portable Devices"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Apps (hidden)"
                    )
                )
            );
        }
    }, {
        key: "win8dot1",
        value: function win8dot1() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Uninstall Information (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Defender"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Journal"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Media Player"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Multimedia Platform"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Photo Viewer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Portable Devices"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Apps (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "WindowsPowerShell"
                    )
                )
            );
        }
    }, {
        key: "win10",
        value: function win10() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Uninstall Information (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Defender"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Defender Advanced Threat Protection"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Media Player"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Multimedia Platform"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Photo Viewer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Portable Devices"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Apps (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "WindowsPowerShell"
                    )
                )
            );
        }
    }, {
        key: "win2008",
        value: function win2008() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Packaged Programs"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Uninstall Information (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    )
                )
            );
        }
    }, {
        key: "win2012",
        value: function win2012() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Uninstall Information (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    )
                )
            );
        }
    }]);

    return ProgramFiles;
}(Section);

var ProgramFilesx86 = function (_Section26) {
    _inherits(ProgramFilesx86, _Section26);

    function ProgramFilesx86() {
        _classCallCheck(this, ProgramFilesx86);

        return _possibleConstructorReturn(this, (ProgramFilesx86.__proto__ || Object.getPrototypeOf(ProgramFilesx86)).apply(this, arguments));
    }

    _createClass(ProgramFilesx86, [{
        key: "displayName",
        value: function displayName() {
            return "Program Files (x86)";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.win2012();
            } else if (this.props.version === "win2016") {
                return this.win2012();
            }
            return "unknown";
        }
    }, {
        key: "win7",
        value: function win7() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files (x86)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft Security Client"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft .NET"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Uninstall Information (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Defender"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Photo Viewer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Portable Devices"
                    )
                )
            );
        }
    }, {
        key: "win8",
        value: function win8() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files (x86)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Defender"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Media Player"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Multimedia Platform"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Photo Viewer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Portable Devices"
                    )
                )
            );
        }
    }, {
        key: "win8dot1",
        value: function win8dot1() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files (x86)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft.NET"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Defender"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Media Player"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Multimedia Platform"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Photo Viewer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Portable Devices"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "WindowsPowerShell"
                    )
                )
            );
        }
    }, {
        key: "win10",
        value: function win10() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files (x86)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft.NET"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Defender"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Media Player"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Multimedia Platform"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Photo Viewer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Portable Devices"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "WindowsPowerShell"
                    )
                )
            );
        }
    }, {
        key: "win2008",
        value: function win2008() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files (x86)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Uninstall Information (hidden)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    )
                )
            );
        }
    }, {
        key: "win2012",
        value: function win2012() {
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Program Files (x86)"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Common Files"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Internet Explorer"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Microsoft.NET"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows Mail"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Windows NT"
                    )
                )
            );
        }
    }]);

    return ProgramFilesx86;
}(Section);

var RemoteAssistanceAndRemoteDesktop = function (_Section27) {
    _inherits(RemoteAssistanceAndRemoteDesktop, _Section27);

    function RemoteAssistanceAndRemoteDesktop() {
        _classCallCheck(this, RemoteAssistanceAndRemoteDesktop);

        return _possibleConstructorReturn(this, (RemoteAssistanceAndRemoteDesktop.__proto__ || Object.getPrototypeOf(RemoteAssistanceAndRemoteDesktop)).apply(this, arguments));
    }

    _createClass(RemoteAssistanceAndRemoteDesktop, [{
        key: "displayName",
        value: function displayName() {
            return "Remote Assistance and Remote Desktop";
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "System and Security"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "System"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Remote settings"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "Under Remote Assistance",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "[ ] Allow Remote Assistance connections to this computer"
                    )
                ),
                "Under Remote Desktop",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "[x] Don't allow connections to this computer"
                    )
                )
            );
        }
    }]);

    return RemoteAssistanceAndRemoteDesktop;
}(Section);

var SecurityOptions = function (_Section28) {
    _inherits(SecurityOptions, _Section28);

    function SecurityOptions() {
        _classCallCheck(this, SecurityOptions);

        return _possibleConstructorReturn(this, (SecurityOptions.__proto__ || Object.getPrototypeOf(SecurityOptions)).apply(this, arguments));
    }

    _createClass(SecurityOptions, [{
        key: "displayName",
        value: function displayName() {
            return "Security Options";
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
                        "Go to ",
                        React.createElement(AdministrativeTools).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Security Policy"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Policies"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(
                            "strong",
                            null,
                            "Security Options"
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
                        "Accounts: Guest account status - Disabled"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Accounts: Rename administrator account - not Administrator"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Accounts: Rename guest account - not Guest"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Network access: Let everyone permissions apply to anonymous users - Disabled"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Recovery Console: Allow automatic administrative logon - Disabled"
                    )
                )
            );
        }
    }]);

    return SecurityOptions;
}(Section);

var ServicePacks = function (_Section29) {
    _inherits(ServicePacks, _Section29);

    function ServicePacks() {
        _classCallCheck(this, ServicePacks);

        return _possibleConstructorReturn(this, (ServicePacks.__proto__ || Object.getPrototypeOf(ServicePacks)).apply(this, arguments));
    }

    _createClass(ServicePacks, [{
        key: "displayName",
        value: function displayName() {
            return "Service Packs";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.none();
            } else if (this.props.version === "win2016") {
                return this.none();
            }
            return "unknown";
        }
    }, {
        key: "win7",
        value: function win7() {
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
                        "Find and right click ",
                        React.createElement(
                            "strong",
                            null,
                            "Computer"
                        ),
                        " or ",
                        React.createElement(
                            "strong",
                            null,
                            "My Computer"
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
                        "Find the words ",
                        React.createElement(
                            "strong",
                            null,
                            "Service Pack"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "if there is none, no service pack is installed"
                            )
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
                        "For Windows 7, the latest is Service Pack 1"
                    )
                )
            );
        }
    }, {
        key: "win2008",
        value: function win2008() {
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
                        "Find and right click ",
                        React.createElement(
                            "strong",
                            null,
                            "Computer"
                        ),
                        " or ",
                        React.createElement(
                            "strong",
                            null,
                            "My Computer"
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
                        "Find the words ",
                        React.createElement(
                            "strong",
                            null,
                            "Service Pack"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "if there is none, no service pack is installed"
                            )
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
                        "For Windows Server 2008, the latest is Service Pack 2"
                    )
                )
            );
        }
    }, {
        key: "none",
        value: function none() {
            return "None";
        }
    }]);

    return ServicePacks;
}(Section);

var Services = function (_Section30) {
    _inherits(Services, _Section30);

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
            } else if (this.props.version === "win2012") {
                return this.option1();
            } else if (this.props.version === "win2016") {
                return this.option1();
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
                        "Go to ",
                        React.createElement(AdministrativeTools).type.prototype.getLink()
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

var SharedFolders = function (_Section31) {
    _inherits(SharedFolders, _Section31);

    function SharedFolders() {
        _classCallCheck(this, SharedFolders);

        return _possibleConstructorReturn(this, (SharedFolders.__proto__ || Object.getPrototypeOf(SharedFolders)).apply(this, arguments));
    }

    _createClass(SharedFolders, [{
        key: "displayName",
        value: function displayName() {
            return "Shared Folders";
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
                        React.createElement(AdministrativeTools).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Computer Management"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Shared Folders"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Shares"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "Stop sharing all shares.",
                React.createElement("p", null),
                "The following are the mininum required shares. Other shares may be deleted, unless required by readme.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "ADMIN$ - C:\\Windows - Windows"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "C$ - C:\\ - Windows",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "other letters may appear for each Local Disk in Computer"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "IPC$ - [blank] - Windows"
                    )
                )
            );
        }
    }]);

    return SharedFolders;
}(Section);

var ShowHiddenFilesAndFolders = function (_Section32) {
    _inherits(ShowHiddenFilesAndFolders, _Section32);

    function ShowHiddenFilesAndFolders() {
        _classCallCheck(this, ShowHiddenFilesAndFolders);

        return _possibleConstructorReturn(this, (ShowHiddenFilesAndFolders.__proto__ || Object.getPrototypeOf(ShowHiddenFilesAndFolders)).apply(this, arguments));
    }

    _createClass(ShowHiddenFilesAndFolders, [{
        key: "displayName",
        value: function displayName() {
            return "Show Hidden Files and Folders";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option1();
            } else if (this.props.version === "win2016") {
                return this.option1();
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Appearance and Personalization"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Folder Options"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Show hidden files and folders"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "Under ",
                React.createElement(
                    "strong",
                    null,
                    "Files and Folders"
                ),
                ", under ",
                React.createElement(
                    "strong",
                    null,
                    "Hidden files and folders"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "[x] Show hidden files, folders, and drives"
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Appearance and Personalization"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "File Explorer Options"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on the ",
                        React.createElement(
                            "strong",
                            null,
                            "View"
                        ),
                        " tab"
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "Under ",
                React.createElement(
                    "strong",
                    null,
                    "Files and Folders"
                ),
                ", under ",
                React.createElement(
                    "strong",
                    null,
                    "Hidden files and folders"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "[x] Show hidden files, folders, and drives"
                    )
                )
            );
        }
    }]);

    return ShowHiddenFilesAndFolders;
}(Section);

var StartupPrograms = function (_Section33) {
    _inherits(StartupPrograms, _Section33);

    function StartupPrograms() {
        _classCallCheck(this, StartupPrograms);

        return _possibleConstructorReturn(this, (StartupPrograms.__proto__ || Object.getPrototypeOf(StartupPrograms)).apply(this, arguments));
    }

    _createClass(StartupPrograms, [{
        key: "displayName",
        value: function displayName() {
            return "Startup Programs";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option4();
            } else if (this.props.version === "win2016") {
                return this.option4();
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
                        React.createElement(TaskManager).type.prototype.getLink()
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
                        "Disable programs that are not required by readme"
                    )
                )
            );
        }
    }, {
        key: "option3",
        value: function option3() {
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
                        React.createElement(TaskManager).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click on ",
                        React.createElement(
                            "strong",
                            null,
                            "More details"
                        ),
                        ", if necessary"
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
                        "Disable programs that are not required by readme"
                    )
                )
            );
        }
    }, {
        key: "option4",
        value: function option4() {
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

var TaskManager = function (_Section34) {
    _inherits(TaskManager, _Section34);

    function TaskManager() {
        _classCallCheck(this, TaskManager);

        return _possibleConstructorReturn(this, (TaskManager.__proto__ || Object.getPrototypeOf(TaskManager)).apply(this, arguments));
    }

    _createClass(TaskManager, [{
        key: "displayName",
        value: function displayName() {
            return "Task Manager";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option2();
            } else if (this.props.version === "win2016") {
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
                "Option 1",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Right click Taskbar (bottom of screen)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Select ",
                        React.createElement(
                            "strong",
                            null,
                            "Start Task Manager"
                        )
                    )
                ),
                "Option 2",
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
                            "CTRL + ALT + DEL"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Select ",
                        React.createElement(
                            "strong",
                            null,
                            "Start Task Manager"
                        )
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
                        "Right click Taskbar (bottom of screen)"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Select ",
                        React.createElement(
                            "strong",
                            null,
                            "Task Manager"
                        )
                    )
                ),
                "Option 2",
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
                            "CTRL + ALT + DEL"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Select ",
                        React.createElement(
                            "strong",
                            null,
                            "Task Manager"
                        )
                    )
                )
            );
        }
    }]);

    return TaskManager;
}(Section);

var TaskScheduler = function (_Section35) {
    _inherits(TaskScheduler, _Section35);

    function TaskScheduler() {
        _classCallCheck(this, TaskScheduler);

        return _possibleConstructorReturn(this, (TaskScheduler.__proto__ || Object.getPrototypeOf(TaskScheduler)).apply(this, arguments));
    }

    _createClass(TaskScheduler, [{
        key: "displayName",
        value: function displayName() {
            return "Task Scheduler";
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
                        React.createElement(AdministrativeTools).type.prototype.getLink()
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

var UserRightsAssignment = function (_Section36) {
    _inherits(UserRightsAssignment, _Section36);

    function UserRightsAssignment() {
        _classCallCheck(this, UserRightsAssignment);

        return _possibleConstructorReturn(this, (UserRightsAssignment.__proto__ || Object.getPrototypeOf(UserRightsAssignment)).apply(this, arguments));
    }

    _createClass(UserRightsAssignment, [{
        key: "displayName",
        value: function displayName() {
            return "User Rights Assignment";
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
                        React.createElement(AdministrativeTools).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Local Security Policy"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and double click on ",
                        React.createElement(
                            "strong",
                            null,
                            "User Rights Assignment"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "These are the default settings",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Access Credential Manager as a trusted caller",
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
                        "Access this computer from the network",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Backup Operators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Everyone"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Users"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Act as part of the operating system",
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
                        "Add workstations to domain",
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
                        "Adjust memory quotas for a process",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Local Service"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Network Service"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Allow log on locally",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Backup Operators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Guest"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Users"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Allow log on through Remote Desktop Services",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Remote Desktop Users"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Back up files and directories",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Backup Operators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Bypass traverse checking",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Backup Operators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Everyone"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Local Service"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Network Service"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Users"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Change the system time",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Local Service"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Change the time zone",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Local Service"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Users"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Create a pagefile",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Create a token object",
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
                        "Create global objects",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Local Service"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Network Service"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Service"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Create permanent shared objects",
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
                        "Create symbolic links",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Debug Programs",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Deny access to this computer from the network",
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
                        "Deny log on as a batch job",
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
                        "Deny log on as a service",
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
                        "Deny log on locally",
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
                        "Deny log on through Remote Desktop/Terminal Services",
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
                        "Enable computer and user accounts to be trusted for delegation",
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
                        "Force shutdown from a remote system",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Generate security audits",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Local Service"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Network Service"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Impersonate a client after authentication",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Adminstrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Local Service"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Network Service"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Service"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Increase a process working set",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Users"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Increase scheduling priority",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Load and unload device drivers",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Lock pages in memory",
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
                        "Log on as a batch job",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Backup Operators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Performance Log Users"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Log on as a service",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "NT SERVICE\\ALL SERVICES"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Manage auditing and security log",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Modify an object label",
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
                        "Modify firmware environment values",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Perform volume maintenance tasks",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Profile single process",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Profile system performance",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "NT Service\\WdiServiceHost"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Remove computer from docking station",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Users"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Replace a process level token",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Local Service"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Network Service"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Restore files and directories",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Backup Operators"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Shut down the system",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Backup Operators"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Users"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Synchronize directory service data",
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
                        "Take ownership of files or other objects",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Administrators"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return UserRightsAssignment;
}(Section);

var UsersFolder = function (_Section37) {
    _inherits(UsersFolder, _Section37);

    function UsersFolder() {
        _classCallCheck(this, UsersFolder);

        return _possibleConstructorReturn(this, (UsersFolder.__proto__ || Object.getPrototypeOf(UsersFolder)).apply(this, arguments));
    }

    _createClass(UsersFolder, [{
        key: "displayName",
        value: function displayName() {
            return "Users Folder";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option1();
            } else if (this.props.version === "win2016") {
                return this.option1();
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
                        React.createElement(CDrive).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Open ",
                        React.createElement(
                            "strong",
                            null,
                            "Users"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.",
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Default"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Public"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "any user allowed by readme"
                    )
                )
            );
        }
    }]);

    return UsersFolder;
}(Section);

var WindowsFeatures = function (_Section38) {
    _inherits(WindowsFeatures, _Section38);

    function WindowsFeatures() {
        _classCallCheck(this, WindowsFeatures);

        return _possibleConstructorReturn(this, (WindowsFeatures.__proto__ || Object.getPrototypeOf(WindowsFeatures)).apply(this, arguments));
    }

    _createClass(WindowsFeatures, [{
        key: "displayName",
        value: function displayName() {
            return "Windows Features";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option3();
            } else if (this.props.version === "win2016") {
                return this.option3();
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
                        React.createElement(ControlPanel).type.prototype.getLink()
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
                        React.createElement(ControlPanel).type.prototype.getLink()
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
    }, {
        key: "option3",
        value: function option3() {
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
                        React.createElement(ControlPanel).type.prototype.getLink()
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
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Follow ",
                        React.createElement(
                            "strong",
                            null,
                            "Add Roles and Features Wizard"
                        ),
                        " until ",
                        React.createElement(
                            "strong",
                            null,
                            "Features"
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
                        "Group Policy Management"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Remote Assistance"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Remote Server Administration Tools"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "SMTP Server"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "SNMP Server"
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
    }, {
        key: "option4",
        value: function option4() {
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
                        React.createElement(ControlPanel).type.prototype.getLink()
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
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Programs and Features"
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
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Under ",
                        React.createElement(
                            "strong",
                            null,
                            "Server Manager"
                        ),
                        ", find and open ",
                        React.createElement(
                            "strong",
                            null,
                            "Features"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    "Settings"
                ),
                "By default, no features (0 of 41) are installed",
                React.createElement(
                    "ol",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "Check the readme for which features or services should be installed",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                ".NET Framework"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Group Policy Management"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "SMTP Server"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "SNMP Services"
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
                            ),
                            React.createElement(
                                "li",
                                null,
                                "WINS Server"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Use ",
                        React.createElement(
                            "strong",
                            null,
                            "Add Features"
                        ),
                        " to add necessary features"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Use ",
                        React.createElement(
                            "strong",
                            null,
                            "Remove Features"
                        ),
                        " to remove unnecessary features"
                    )
                )
            );
        }
    }]);

    return WindowsFeatures;
}(Section);

var WindowsFirewall = function (_Section39) {
    _inherits(WindowsFirewall, _Section39);

    function WindowsFirewall() {
        _classCallCheck(this, WindowsFirewall);

        return _possibleConstructorReturn(this, (WindowsFirewall.__proto__ || Object.getPrototypeOf(WindowsFirewall)).apply(this, arguments));
    }

    _createClass(WindowsFirewall, [{
        key: "displayName",
        value: function displayName() {
            return "Windows Firewall";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option2();
            } else if (this.props.version === "win2016") {
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "System and Security"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Firewall"
                        )
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
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Turn Windows Firewall on or off"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "For Home, Work, and Public network location settings:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "[x] Turn on Windows Firewall"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[ ] Block all incoming connections, including those in the list of allowed programs"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[x] Notify me when Windows Firewall blocks a new program"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Press OK"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Allow a program or feature through Windows Firewall"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Check that only Core Networking and required programs or services have checkmarks"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Uncheck all other programs and features for both Home/Work (Private) and Public"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Press OK"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Advanced settings"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "For Domain Profile, Private Profile, and Public Profile",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Windows Firewall is on"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Inbound connections that do not match a rule are blocked"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Outbound connections that do not match a rule are not blocked"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Inbound Rules"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Enable the ",
                        React.createElement(
                            "strong",
                            null,
                            "Core Networking"
                        ),
                        " group and any required programs or services"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Disable all other rules"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Repeat the same for ",
                        React.createElement(
                            "strong",
                            null,
                            "Outbound Rules"
                        )
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "System and Security"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Firewall"
                        )
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
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Turn Windows Firewall on or off"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "For Private and Public network location settings:",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "[x] Turn on Windows Firewall"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[ ] Block all incoming connections, including those in the list of allowed programs"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[x] Notify me when Windows Firewall blocks a new program"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Press OK"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Allow a program or feature through Windows Firewall"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Check that only Core Networking and required programs or services have checkmarks"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Uncheck all other programs and features for both Private and Public"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Press OK"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Advanced settings"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "For Domain Profile, Private Profile, and Public Profile",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Windows Firewall is on"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Inbound connections that do not match a rule are blocked"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Outbound connections that do not match a rule are not blocked"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Inbound Rules"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Enable the ",
                        React.createElement(
                            "strong",
                            null,
                            "Core Networking"
                        ),
                        " group and any required programs or services"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Disable all other rules"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Repeat the same for ",
                        React.createElement(
                            "strong",
                            null,
                            "Outbound Rules"
                        )
                    )
                )
            );
        }
    }, {
        key: "option3",
        value: function option3() {
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Security"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Firewall"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Turn Windows Firewall on or off"
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
                        "Under the General tab",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "[x] On (recommended)"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "[ ] Block all incoming connections"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Under the Exceptions tab",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Only Core Networking and any required programs or services should have checkmarks"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Uncheck all other programs and features"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Under the Advanced tab",
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Put a checkmark on all Network connections"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return WindowsFirewall;
}(Section);

var WindowsSettings = function (_Section40) {
    _inherits(WindowsSettings, _Section40);

    function WindowsSettings() {
        _classCallCheck(this, WindowsSettings);

        return _possibleConstructorReturn(this, (WindowsSettings.__proto__ || Object.getPrototypeOf(WindowsSettings)).apply(this, arguments));
    }

    _createClass(WindowsSettings, [{
        key: "displayName",
        value: function displayName() {
            return "Windows Settings";
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
                        "Press Windows button"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Settings"
                        ),
                        " (gear icon)"
                    )
                )
            );
        }
    }]);

    return WindowsSettings;
}(Section);

var WindowsUpdate = function (_Section41) {
    _inherits(WindowsUpdate, _Section41);

    function WindowsUpdate() {
        _classCallCheck(this, WindowsUpdate);

        return _possibleConstructorReturn(this, (WindowsUpdate.__proto__ || Object.getPrototypeOf(WindowsUpdate)).apply(this, arguments));
    }

    _createClass(WindowsUpdate, [{
        key: "displayName",
        value: function displayName() {
            return "Windows Update";
        }
    }, {
        key: "getLink",
        value: function getLink() {
            return React.createElement(SectionLink, { section: this });
        }
    }, {
        key: "render",
        value: function render() {
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
            } else if (this.props.version === "win2012") {
                return this.option1();
            } else if (this.props.version === "win2016") {
                return this.option1();
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "System and Security"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Update"
                        )
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
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Check for Updates"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "If there are any critical or important updates, click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Install Updates"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Wait for updates to finish"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Repeat until no remaining critical and important updates"
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
                        React.createElement(WindowsSettings).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Update & Security"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Update"
                        )
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
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Check for Updates"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "If there are any critical or important updates, click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Install Updates"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Wait for updates to finish"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Repeat until no remaining critical and important updates"
                    )
                )
            );
        }
    }, {
        key: "option3",
        value: function option3() {
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
                        React.createElement(ControlPanel).type.prototype.getLink()
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Security"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Find ",
                        React.createElement(
                            "strong",
                            null,
                            "Windows Update"
                        )
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
                        "Find and click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Check for Updates"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "If there are any critical or important updates, click on ",
                        React.createElement(
                            "strong",
                            null,
                            "Install Updates"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Wait for updates to finish"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "Repeat until no remaining critical and important updates"
                    )
                )
            );
        }
    }]);

    return WindowsUpdate;
}(Section);
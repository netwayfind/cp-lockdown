class AccountLockoutPolicy extends Section {
    displayName() {
        return "Account Lockout Policy";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Local Security Policy</strong></li>
                    <li>Find and double click on <strong>Account Policies</strong></li>
                    <li>Find and double click on <strong>Account Lockout Policy</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Account lockout duration - 30 minutes</li>
                    <li>Account lockout threshold - 5</li>
                    <li>Reset account lockout counter after - 30 minutes</li>
                </ul>
            </React.Fragment>
        );
    }
}

class AddRemovePrograms extends Section {
    displayName() {
        return "Add/Remove Programs";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find <strong>Programs</strong></li>
                    <li>Find and click on <strong>Uninstall a Program</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Do not remove any programs required by readme (e.g. web browser, work tools)</li>
                    <li>Do not remove dependencies such as Microsoft Visual C++ redistributable, VMware Tools, etc.</li>
                    <li>Remove all programs prohibited by readme (e.g. games, non-work tools)</li>
                </ul>
            </React.Fragment>
        );
    }
}

class AdministrativeTools extends Section {
    displayName() {
        return "Administrative Tools";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option1();
        }
        else if (this.props.version === "win8.1") {
            return this.option1();
        }
        else if (this.props.version === "win10") {
            return this.option1();
        }
        else if (this.props.version === "win2008") {
            return this.option2();
        }
        else if (this.props.version === "win2008r2") {
            return this.option2();
        }
        else if (this.props.version === "win2012") {
            return this.option1();
        }
        else if (this.props.version === "win2016") {
            return this.option1();
        }
        else if (this.props.version === "win2019") {
            return this.option1();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>System and Security</strong></li>
                    <li>Find and click on <strong>Administrative Tools</strong></li>
                </ol>

            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Move mouse over <strong>Administrative Tools</strong></li>
                </ol>
            </React.Fragment>
        );
    }
}

class AdvancedAuditPolicyConfiguration extends Section {
    displayName() {
        return "Advanced Audit Policy Configuration";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Local Security Policy</strong></li>
                    <li>Find and double click on <strong>Advanced Audit Policy Configuration</strong></li>
                    <li>Find and double click on <strong>System Audit Policies - Local Group Policy Object</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>
                        Account Logon
                        <ul>
                            <li>Audit Credential Validation - Success, Failure</li>
                        </ul>
                    </li>
                    <li>
                        Account Management
                        <ul>
                            <li>Audit Computer Account Management - Success, Failure</li>
                            <li>Audit Other Account Management Events - Success, Failure </li>
                            <li>Audit System Group Management - Success, Failure</li>
                            <li>Audit User Account Management - Success, Failure</li>
                        </ul>
                    </li>
                    <li>
                        Detailed Tracking
                        <ul>
                            <li>Audit Process Creation - Success</li>
                        </ul>
                    </li>
                    <li>
                        Logon/Logoff
                        <ul>
                            <li>Audit Logoff - Success</li>
                            <li>Audit Logon - Success, Failure</li>
                            <li>Audit Special Logon - Success</li>
                        </ul>
                    </li>
                    <li>
                        Object Access
                        <ul>
                            <li>Audit File System - Failure</li>
                            <li>Audit Registry - Failure</li>
                            <li>Audit Handle Manipulation - Failure</li>
                        </ul>
                    </li>
                    <li>
                        Policy Change
                        <ul>
                            <li>Audit Audit Policy Change - Success, Failure</li>
                            <li>Audit Authentication Policy Change - Success</li>
                        </ul>
                    </li>
                    <li>
                        Privilege Use
                        <ul>
                            <li>Audit Sensitive Privilege Use - Success, Failure</li>
                        </ul>
                    </li>
                    <li>
                        System
                        <ul>
                            <li>Audit IPSec Driver - Success, Failure</li>
                            <li>Audit Security State Change - Success, Failure</li>
                            <li>Audit Security System Extension - Success, Failure</li>
                            <li>Audit System Integrity - Success, Failure</li>
                        </ul>
                    </li>
                    <li>
                        Global Object Access Auditing
                        <ul>
                            <li>
                                File system
                                <ol>
                                    <li>[x] Define this policy setting</li>
                                    <li>Find and click on <strong>Configure</strong></li>
                                    <li>Find and click on <strong>Add</strong></li>
                                    <li>Find and click on <strong>Select a principle</strong></li>
                                    <li>Under <strong>Enter the object name to select</strong>, enter <strong>Everyone</strong></li>
                                    <li>Press <strong>OK</strong></li>
                                    <li>Set <strong>Type</strong> to <strong>Failure</strong></li>
                                    <li>Make sure all <strong>Permissions</strong> are checked</li>
                                    <li>Press <strong>OK</strong> to close the windows</li>
                                </ol>
                            </li>
                            <li>
                                Registry
                                <ol>
                                    <li>[x] Define this policy setting</li>
                                    <li>Find and click on <strong>Configure</strong></li>
                                    <li>Find and click on <strong>Add</strong></li>
                                    <li>Find and click on <strong>Select a principle</strong></li>
                                    <li>Under <strong>Enter the object name to select</strong>, enter <strong>Everyone</strong></li>
                                    <li>Press <strong>OK</strong></li>
                                    <li>Set <strong>Type</strong> to <strong>Fail</strong></li>
                                    <li>Make sure all <strong>Permissions</strong> are checked</li>
                                    <li>Press <strong>OK</strong> to close the windows</li>
                                </ol>
                            </li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment >
        );
    }
}

class AntiMalwareTools extends Section {
    displayName() {
        return "Anti-Malware Tools";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                When running these tools, review any findings and avoid removing any required software.
                <ul>
                    <li>Avast aswMBR
                        <ul>
                            <li><a target="_blank" href="http://public.avast.com/~gmerek/aswMBR.htm">http://public.avast.com/~gmerek/aswMBR.htm</a></li>
                        </ul>
                    </li>
                    <li>MalwareBytes
                        <ul>
                            <li><a target="_blank" href="https://downloads.malwarebytes.com/file/mb3/">https://downloads.malwarebytes.com/file/mb3/</a></li>
                        </ul>
                    </li>
                    <li>MalwareBytes Anti-Rootkit
                        <ul>
                            <li><a target="_blank" href="http://www.bleepingcomputer.com/download/malwarebytes-anti-rootkit/">http://www.bleepingcomputer.com/download/malwarebytes-anti-rootkit/</a></li>
                        </ul>
                    </li>
                    <li>McAfee Rootkit Remover
                        <ul>
                            <li><a target="_blank" href="http://www.mcafee.com/us/downloads/free-tools/rootkitremover.aspx">http://www.mcafee.com/us/downloads/free-tools/rootkitremover.aspx</a></li>
                        </ul>
                    </li>
                    <li>Norton Power Eraser
                        <ul>
                            <li><a target="_blank" href="http://security.symantec.com/nbrt/npe.aspx">http://security.symantec.com/nbrt/npe.aspx</a></li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

class AuditPolicy extends Section {
    displayName() {
        return "Audit Policy";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Local Security Policy</strong></li>
                    <li>Find and double click on <strong>Local Policies</strong></li>
                    <li>Find and double click on <strong>Audit Policy</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Audit account logon events - Success, Failure</li>
                    <li>Audit account management - Success, Failure</li>
                    <li>Audit directory service access - Success, Failure</li>
                    <li>Audit logon events - Success, Failure</li>
                    <li>Audit object access - Success, Failure</li>
                    <li>Audit policy change - Success, Failure</li>
                    <li>Audit privilege use - Success, Failure</li>
                    <li>Audit process tracking - Success, Failure</li>
                    <li>Audit system events - Success, Failure</li>
                </ul>
            </React.Fragment>
        );
    }
}

class AutomaticLogin extends Section {
    displayName() {
        return "Automatic Login";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option2();
        }
        else if (this.props.version === "win8.1") {
            return this.option3();
        }
        else if (this.props.version === "win10") {
            return this.option3();
        }
        else if (this.props.version === "win2008") {
            return this.option1();
        }
        else if (this.props.version === "win2008r2") {
            return this.option2();
        }
        else if (this.props.version === "win2012") {
            return this.option3();
        }
        else if (this.props.version === "win2016") {
            return this.option3();
        }
        else if (this.props.version === "win2019") {
            return this.option3();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Type <strong>netplwiz</strong>, press Enter key</li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Under <strong>Users</strong> tab
                    <ul>
                            <li>[x] Users must enter a user name and password to use this computer</li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Windows key + R key</li>
                    <li>Type <strong>netplwiz</strong>, press Enter key</li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Under <strong>Users</strong> tab
                    <ul>
                            <li>[x] Users must enter a user name and password to use this computer</li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Windows button</li>
                    <li>Type <strong>netplwiz</strong>, press Enter key</li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Under <strong>Users</strong> tab
                        <ul>
                            <li>[x] Users must enter a user name and password to use this computer</li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

class AutomaticUpdates extends Section {
    displayName() {
        return "Automatic Updates";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option2();
        }
        else if (this.props.version === "win8.1") {
            return this.option2();
        }
        else if (this.props.version === "win10") {
            return this.option3();
        }
        else if (this.props.version === "win2008") {
            return this.option4();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option2();
        }
        else if (this.props.version === "win2016") {
            return this.option2();
        }
        else if (this.props.version === "win2019") {
            return this.option5();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>System and Security</strong></li>
                    <li>Find <strong>Windows Update</strong></li>
                    <li>Find and click on <strong>Turn automatic updating on or off</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Under Important Updates
                        <ul>
                            <li>Install updates automatically (recommended)</li>
                            <li>Install new updates [ Every day ] at [ 3:00 AM ]</li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>System and Security</strong></li>
                    <li>Find <strong>Windows Update</strong></li>
                    <li>Find <strong>Change settings</strong></li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Under Important Updates
                        <ul>
                            <li>Install updates automatically (recommended)</li>
                        </ul>
                    </li>
                    <li>Click <strong>Updates will be automatically installed during the maintenance window</strong></li>
                    <li>Set Run maintenance tasks daily at [3:00 AM]</li>
                </ol>

            </React.Fragment>
        );
    }

    option3() {
        return "Automatic updates are enabled by default";
    }

    option4() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>System</strong></li>
                    <li>Find <strong>Windows Update</strong></li>
                    <li>Find and click on <strong>Turn automatic updating on or off</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Install updates automatically (recommended)</li>
                    <li>Install new updates [ Every day ] at [ 3:00 AM ]</li>
                </ul>
            </React.Fragment>
        );
    }

    option5() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(WindowsSettings).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Update & Security</strong></li>
                    <li>Find and click on <strong>Advanced Options</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Make sure settings for automatic Windows updates are enabled.</li>
                </ul>
            </React.Fragment>
        );
    }
}

class CDrive extends Section {
    displayName() {
        return "C:\\ Drive";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option2();
        }
        else if (this.props.version === "win8.1") {
            return this.option3();
        }
        else if (this.props.version === "win10") {
            return this.option4();
        }
        else if (this.props.version === "win2008") {
            return this.option5();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option3();
        }
        else if (this.props.version === "win2016") {
            return this.option3();
        }
        else if (this.props.version === "win2019") {
            return this.option3();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Find and click on <strong>Computer</strong></li>
                    <li>Find and double click on <strong>Local Disk (C:)</strong></li>
                </ol>
                <h3>Settings</h3>
                These are the default folders. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>PerfLogs</li>
                    <li>{React.createElement(ProgramFiles).type.prototype.getLink()}</li>
                    <li>{React.createElement(ProgramFilesx86).type.prototype.getLink()}</li>
                    <li>ProgramData (hidden)</li>
                    <li>{React.createElement(UsersFolder).type.prototype.getLink()}</li>
                    <li>Windows</li>
                </ul>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press <strong>File Explorer</strong> icon on Taskbar (folder icon)</li>
                    <li>Find and click on <strong>Computer</strong></li>
                    <li>Find and double click on <strong>Local Disk (C:)</strong></li>
                </ol>
                <h3>Settings</h3>
                These are the default folders. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>PerfLogs</li>
                    <li>{React.createElement(ProgramFiles).type.prototype.getLink()}</li>
                    <li>{React.createElement(ProgramFilesx86).type.prototype.getLink()}</li>
                    <li>ProgramData (hidden)</li>
                    <li>{React.createElement(UsersFolder).type.prototype.getLink()}</li>
                    <li>Windows</li>
                </ul>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press <strong>File Explorer</strong> icon on Taskbar (folder icon)</li>
                    <li>Find and double click on <strong>Local Disk (C:)</strong></li>
                </ol>
                <h3>Settings</h3>
                These are the default folders. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>PerfLogs</li>
                    <li>{React.createElement(ProgramFiles).type.prototype.getLink()}</li>
                    <li>{React.createElement(ProgramFilesx86).type.prototype.getLink()}</li>
                    <li>ProgramData (hidden)</li>
                    <li>{React.createElement(UsersFolder).type.prototype.getLink()}</li>
                    <li>Windows</li>
                </ul>
            </React.Fragment>
        );
    }

    option4() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press <strong>File Explorer</strong> icon on Taskbar (folder icon)</li>
                    <li>Find and click on <strong>This PC</strong></li>
                    <li>Find and double click on <strong>Local Disk (C:)</strong></li>
                </ol>
                <h3>Settings</h3>
                These are the default folders. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>PerfLogs</li>
                    <li>{React.createElement(ProgramFiles).type.prototype.getLink()}</li>
                    <li>{React.createElement(ProgramFilesx86).type.prototype.getLink()}</li>
                    <li>ProgramData (hidden)</li>
                    <li>{React.createElement(UsersFolder).type.prototype.getLink()}</li>
                    <li>Windows</li>
                </ul>
            </React.Fragment>
        );
    }

    option5() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Find and click on <strong>Computer</strong></li>
                    <li>Find and double click on <strong>Local Disk (C:)</strong></li>
                </ol>
                <h3>Settings</h3>
                These are the default files and folders. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>PerfLogs</li>
                    <li>{React.createElement(ProgramFiles).type.prototype.getLink()}</li>
                    <li>{React.createElement(ProgramFilesx86).type.prototype.getLink()}</li>
                    <li>ProgramData (hidden)</li>
                    <li>{React.createElement(UsersFolder).type.prototype.getLink()}</li>
                    <li>Windows</li>
                    <li>BOOTSECT.BAK</li>
                </ul>
            </React.Fragment>
        );
    }
}

class CommandPrompt extends Section {
    displayName() {
        return "Command Prompt";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option2();
        }
        else if (this.props.version === "win8.1") {
            return this.option3();
        }
        else if (this.props.version === "win10") {
            return this.option3();
        }
        else if (this.props.version === "win2008") {
            return this.option1();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option3();
        }
        else if (this.props.version === "win2016") {
            return this.option3();
        }
        else if (this.props.version === "win2019") {
            return this.option3();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Type <strong>cmd</strong>, press Enter key</li>
                </ol>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Windows key + R key</li>
                    <li>Type <strong>cmd</strong>, press Enter key</li>
                </ol>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Windows button</li>
                    <li>Type <strong>cmd</strong>, press Enter key</li>
                </ol>
            </React.Fragment>
        );
    }
}

class ControlPanel extends Section {
    displayName() {
        return "Control Panel";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option2();
        }
        else if (this.props.version === "win8.1") {
            return this.option3();
        }
        else if (this.props.version === "win10") {
            return this.option3();
        }
        else if (this.props.version === "win2008") {
            return this.option1();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option3();
        }
        else if (this.props.version === "win2016") {
            return this.option3();
        }
        else if (this.props.version === "win2019") {
            return this.option3();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Find and click on <strong>Control Panel</strong></li>
                </ol>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Move mouse to bottom right corner of screen</li>
                    <li>Click on <strong>Settings</strong></li>
                    <li>Click on <strong>Control Panel</strong></li>
                </ol>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Windows button</li>
                    <li>Type <strong>Control Panel</strong>, press Enter key</li>
                </ol>
            </React.Fragment>
        );
    }
}

class CrowdInspect extends Section {
    displayName() {
        return "CrowdInspect";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Download</h3>
                <ul>
                    <li><a target="_blank" href="http://www.crowdstrike.com/crowdinspect/index.html">http://www.crowdstrike.com/crowdinspect/index.html</a></li>
                </ul>
            </React.Fragment>
        );
    }
}

class DiskCleanup extends Section {
    displayName() {
        return "Disk Cleanup";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option2();
        }
        else if (this.props.version === "win8.1") {
            return this.option3();
        }
        else if (this.props.version === "win10") {
            return this.option3();
        }
        else if (this.props.version === "win2008") {
            return this.option4();
        }
        else if (this.props.version === "win2008r2") {
            return this.option4();
        }
        else if (this.props.version === "win2012") {
            return this.option4();
        }
        else if (this.props.version === "win2016") {
            return this.option1();
        }
        else if (this.props.version === "win2019") {
            return this.option1();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Find and click on <strong>Computer</strong></li>
                    <li>Right click on <strong>Local Disk (C:)</strong></li>
                    <li>Select <strong>Properties</strong></li>
                    <li>Find and click on <strong>Disk Cleanup</strong></li>
                    <li>Find and click on <strong>Clean up system files</strong></li>
                    <li>Put checkmarks for all items under Files to delete</li>
                    <li>Press <strong>OK</strong></li>
                </ol>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <ol>
                    <li>Press Windows key + R key</li>
                    <li>Find and click on <strong>Computer</strong></li>
                    <li>Right click on <strong>Local Disk (C:)</strong></li>
                    <li>Select <strong>Properties</strong></li>
                    <li>Find and click on <strong>Disk Cleanup</strong></li>
                    <li>Find and click on <strong>Clean up system files</strong></li>
                    <li>Put checkmarks for all items under Files to delete</li>
                    <li>Press <strong>OK</strong></li>
                </ol>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <ol>
                    <li>Press <strong>File Explorer</strong> icon on Taskbar (folder icon)</li>
                    <li>Right click on <strong>Local Disk (C:)</strong></li>
                    <li>Select <strong>Properties</strong></li>
                    <li>Find and click on <strong>Disk Cleanup</strong></li>
                    <li>Find and click on <strong>Clean up system files</strong></li>
                    <li>Put checkmarks for all items under Files to delete</li>
                    <li>Press <strong>OK</strong></li>
                </ol>

            </React.Fragment>
        );
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
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Go to {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Open <strong>Event Viewer</strong></li>
                </ol>
                <ul>
                    <li>Review <strong>Windows Logs</strong></li>
                    <li>Review <strong>Applications and Services Logs</strong></li>
                    <li>Review logs prior to today for system changes</li>
                </ul>
            </React.Fragment>
        );
    }
}

class FindUnauthorizedFiles extends Section {
    displayName() {
        return "Find Unauthorized Files";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Option 1</h3>
                <ol>
                    <li>Open {React.createElement(CommandPrompt).type.prototype.getLink()}</li>
                    <li>dir C:\Users /s /b /a | find /i ".mp3"
                        <ul>
                            <li>This will search for .mp3 files in C:\Users</li>
                        </ul>
                    </li>
                    <li>If there are any results, inspect the files and remove as necessary</li>
                    <li>Repeat from step 2 for the following file extensions
                        <ul>
                            <li>(music) - .mp3, .wav, .wma, .aac</li>
                            <li>(movie/video) - .mp4, .mov, .avi</li>
                        </ul>
                    </li>
                </ol>
                <h3>Option 2</h3>
                Manually search for files in all user directories and remove unauthorized files.
            </React.Fragment>
        );
    }
}

class HostsFile extends Section {
    displayName() {
        return "Hosts File";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open Notepad under an administrator account
                        <ul>
                            <li>Right click, select <strong>Run as Administrator</strong></li>
                        </ul>
                    </li>
                    <li>Open file: C:\windows\system32\drivers\etc\hosts</li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Default file has no entries, only has lines that are blank or start with #</li>
                    <li>Disable any entry lines by adding a # to the start of the line</li>
                </ul>
            </React.Fragment>
        );
    }
}

class InternetConnectionSharing extends Section {
    displayName() {
        return "Internet Connection Sharing";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option1();
        }
        else if (this.props.version === "win8.1") {
            return this.option1();
        }
        else if (this.props.version === "win10") {
            return this.option1();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option1();
        }
        else if (this.props.version === "win2016") {
            return this.option1();
        }
        else if (this.props.version === "win2019") {
            return this.option1();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Network and Internet</strong></li>
                    <li>Find and click on <strong>Network and Sharing Center</strong></li>
                    <li>Find and click on <strong>Change adapter settings</strong></li>
                </ol>
                <h3>Settings</h3>
                For each Local Area Connection or Wireless Network Connection
                <ol>
                    <li>Right click and select <strong>Properties</strong></li>
                    <li>Go to the <strong>Sharing</strong> tab, if any</li>
                    <li>[ ] Allow other network users to connect through this computer's Internet connection</li>
                </ol>

            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Network and Internet</strong></li>
                    <li>Find and click on <strong>Network and Sharing Center</strong></li>
                    <li>Find and click on <strong>Manage network connections</strong></li>
                </ol>
                <h3>Settings</h3>
                For each Local Area Connection or Wireless Network Connection
                <ol>
                    <li>Right click and select <strong>Properties</strong></li>
                    <li>Go to the <strong>Sharing</strong> tab, if any</li>
                    <li>[ ] Allow other network users to connect through this computer's Internet connection</li>
                </ol>
            </React.Fragment>
        );
    }
}

class InternetExplorer extends Section {
    displayName() {
        return "Internet Explorer";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option1();
        }
        else if (this.props.version === "win8.1") {
            return this.option2();
        }
        else if (this.props.version === "win10") {
            return this.option2();
        }
        else if (this.props.version === "win2008") {
            return this.option1();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option2();
        }
        else if (this.props.version === "win2016") {
            return this.option2();
        }
        else if (this.props.version === "win2019") {
            return this.option2();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open <strong>Internet Explorer</strong></li>
                    <li>Find and click on <strong>Tools</strong></li>
                    <li>Find and click on <strong>Internet Options</strong></li>
                </ol>
                <h3>Settings</h3>
                Under the Security tab, security zone settings should be:
                <ul>
                    <li>Internet - High</li>
                    <li>Local Intranet - Medium-low</li>
                    <li>Trusted Sites - Medium</li>
                    <li>Restricted Sites - High</li>
                </ul>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open <strong>Internet Explorer</strong></li>
                    <li>Find and click on <strong>Tools</strong> (gear icon near top right)</li>
                    <li>Find and click on <strong>Internet Options</strong></li>
                </ol>
                <h3>Settings</h3>
                Under the Security tab, security zone settings should be:
                <ul>
                    <li>Internet - High</li>
                    <li>Local Intranet - Medium-low</li>
                    <li>Trusted Sites - Medium</li>
                    <li>Restricted Sites - High</li>
                </ul>
            </React.Fragment>
        );
    }
}

class LocalGroupPolicyEditor extends Section {
    displayName() {
        return "Local Group Policy Editor";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Type <strong>gpedit.msc</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>
                        Computer Configuration
                        <ul>
                            <li>
                                Administrative Templates
                                <ul>
                                    <li>
                                        System
                                        <ul>
                                            <li>
                                                Remote Assistance
                                                <ul>
                                                    <li>Solicited Remote Assistance - Disabled</li>
                                                    <li>Offer Remote Assistance - Disabled</li>
                                                    <li>Turn on session logging - Enabled</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Windows Components
                                        <ul>
                                            <li>
                                                Autoplay Policies
                                                <ul>
                                                    <li>Turn off AutoPlay - Enabled:All Drives</li>
                                                    <li>Turn off Autoplay for non-volume devices: Enabled</li>
                                                    <li>Default behavior for AutoRun - Enabled:Do not execute any autorun commands</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

class LocalUsersAndGroups extends Section {
    displayName() {
        return "Local Users and Groups";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option1();
        }
        else if (this.props.version === "win8.1") {
            return this.option1();
        }
        else if (this.props.version === "win10") {
            return this.option1();
        }
        else if (this.props.version === "win2008") {
            return this.option1();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option2();
        }
        else if (this.props.version === "win2016") {
            return this.option3();
        }
        else if (this.props.version === "win2019") {
            return this.option4();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Go to {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Computer Management</strong></li>
                    <li>Find and open <strong>System Tools</strong></li>
                    <li>Find and open <strong>Local Users and Groups</strong></li>
                </ol>
                <h3>Settings</h3>
                <h4>Users</h4>
                <span>For each user:</span>
                <ol>
                    <li>Right click on user, select <strong>Properties</strong></li>
                    Under <strong>General</strong> tab
                    <ul>
                        <li>Disable all users not required by readme</li>
                        <li>Set passwords to expire for all users</li>
                    </ul>
                    Under <strong>Member Of</strong> tab
                    <ul>
                        <li>Add user to necessary groups, e.g. Administrators</li>
                        <li>Remove user from unnecessary groups</li>
                    </ul>
                    <li>Right click on user, select <b>Set Password</b></li>
                    <ul>
                        <li>Make sure password meets the {React.createElement(PasswordPolicy).type.prototype.getLink()}</li>
                        <li>Write down user and password for reference</li>
                    </ul>
                </ol>
                <span>For the Administrator user:</span>
                <ol>
                    <li>Right click on Adminstrator user, select <strong>Rename</strong></li>
                    <li>Change name to something else</li>
                </ol>
                <span>For the Guest user:</span>
                <ol>
                    <li>Right click on Guest user, select <strong>Properties</strong></li>
                    <li>[x] Account is disabled</li>
                </ol>
                <h4>Groups</h4>
                <span>Check the users in all of the groups.These are the default entries.</span>
                <ul>
                    <li>Administrators
                        <ul>
                            <li>only the users required</li>
                        </ul>
                    </li>
                    <li>Backup Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Cryptographic Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Distributed COM Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Event Log Readers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Guests
                        <ul>
                            <li>Guest</li>
                        </ul>
                    </li>
                    <li>IIS_IUSRS
                        <ul>
                            <li>NT AUTHORITY\IUSR (S-1-5-17)</li>
                        </ul>
                    </li>
                    <li>Network Configuration Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Performance Log Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Performance Monitor Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Power Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Remote Desktop Users
                        <ul>
                            <li>No entries; unless required by readme</li>
                        </ul>
                    </li>
                    <li>Replicator
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Users
                        <ul>
                            <li>NT AUTHORITY\Authenticated Users(S-1-5-11)</li>
                            <li>NT AUTHORITY\INTERACTIVE (S-1-5-4)</li>
                            <li>only the users necessary on the system</li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Go to {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Computer Management</strong></li>
                    <li>Find and open <strong>System Tools</strong></li>
                    <li>Find and open <strong>Local Users and Groups</strong></li>
                </ol>
                <h3>Settings</h3>
                <h4>Users</h4>
                For each user:
                <ol>
                    <li>Right click on user, select <strong>Properties</strong></li>
                    Under <strong>General</strong> tab
                    <ul>
                        <li>Disable all users not required by readme</li>
                        <li>Set passwords to expire for all users</li>
                    </ul>
                    Under <strong>Member Of</strong> tab
                    <ul>
                        <li>Add user to necessary groups, e.g. Administrators</li>
                        <li>Remove user from unnecessary groups</li>
                    </ul>
                    <li>Right click on user, select <b>Set Password</b></li>
                    <ul>
                        <li>Make sure password meets the {React.createElement(PasswordPolicy).type.prototype.getLink()}</li>
                        <li>Write down user and password for reference</li>
                    </ul>
                </ol>
                For the Administrator user:
                <ol>
                    <li>Right click on Adminstrator user, select <strong>Rename</strong></li>
                    <li>Change name to something else</li>
                </ol>
                For the Guest user:
                <ol>
                    <li>Right click on Guest user, select <strong>Properties</strong></li>
                    <li>[x] Account is disabled</li>
                </ol>
                <h4>Groups</h4>
                Check the users in all of the groups. These are the default entries.
                <ul>
                    <li>Access Control Assistance Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Administrators
                        <ul>
                            <li>only the users required</li>
                        </ul>
                    </li>
                    <li>Backup Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Certificate Service DCOM Access
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Cryptographic Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Distributed COM Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Event Log Readers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Guests
                        <ul>
                            <li>Guest</li>
                        </ul>
                    </li>
                    <li>Hyper-V Administrators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>IIS_IUSRS
                        <ul>
                            <li>NT AUTHORITY\IUSR (S-1-5-17)</li>
                        </ul>
                    </li>
                    <li>Network Configuration Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Performance Log Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Performance Monitor Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Power Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Print Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>RDS Endpoint Servers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>RDS Management Servers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>RDS Remote Access Servers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Remote Desktop Users
                        <ul>
                            <li>No entries; unless required by readme</li>
                        </ul>
                    </li>
                    <li>Remote Management Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Replicator
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Users
                        <ul>
                            <li>NT AUTHORITY\Authenticated Users(S-1-5-11)</li>
                            <li>NT AUTHORITY\INTERACTIVE (S-1-5-4)</li>
                            <li>only the users necessary on the system</li>
                        </ul>
                    </li>
                    <li>WinRMRemoteWMIUsers__
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Go to {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Computer Management</strong></li>
                    <li>Find and open <strong>System Tools</strong></li>
                    <li>Find and open <strong>Local Users and Groups</strong></li>
                </ol>
                <h3>Settings</h3>
                <h4>Users</h4>
                For each user:
                <ol>
                    <li>Right click on user, select <strong>Properties</strong></li>
                    Under <strong>General</strong> tab
                    <ul>
                        <li>Disable all users not required by readme</li>
                        <li>Set passwords to expire for all users</li>
                    </ul>
                    Under <strong>Member Of</strong> tab
                    <ul>
                        <li>Add user to necessary groups, e.g. Administrators</li>
                        <li>Remove user from unnecessary groups</li>
                    </ul>
                    <li>Right click on user, select <b>Set Password</b></li>
                    <ul>
                        <li>Make sure password meets the {React.createElement(PasswordPolicy).type.prototype.getLink()}</li>
                        <li>Write down user and password for reference</li>
                    </ul>
                </ol>
                For the Administrator user:
                <ol>
                    <li>Right click on Adminstrator user, select <strong>Rename</strong></li>
                    <li>Change name to something else</li>
                </ol>
                For the Guest user:
                <ol>
                    <li>Right click on Guest user, select <strong>Properties</strong></li>
                    <li>[x] Account is disabled</li>
                </ol>
                <h4>Groups</h4>
                Check the users in all of the groups. These are the default entries.
                <ul>
                    <li>Access Control Assistance Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Administrators
                        <ul>
                            <li>only the users required</li>
                        </ul>
                    </li>
                    <li>Backup Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Certificate Service DCOM Access
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Cryptographic Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Distributed COM Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Event Log Readers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Guests
                        <ul>
                            <li>Guest</li>
                        </ul>
                    </li>
                    <li>Hyper-V Administrators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>IIS_IUSRS
                        <ul>
                            <li>NT AUTHORITY\IUSR (S-1-5-17)</li>
                        </ul>
                    </li>
                    <li>Network Configuration Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Performance Log Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Performance Monitor Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Power Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Print Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>RDS Endpoint Servers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>RDS Management Servers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>RDS Remote Access Servers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Remote Desktop Users
                        <ul>
                            <li>No entries; unless required by readme</li>
                        </ul>
                    </li>
                    <li>Remote Management Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Replicator
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Storage Replica Administrators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>System Managed Accounts Group
                        <ul>
                            <li>DefaultAccount</li>
                        </ul>
                    </li>
                    <li>Users
                        <ul>
                            <li>NT AUTHORITY\Authenticated Users(S-1-5-11)</li>
                            <li>NT AUTHORITY\INTERACTIVE (S-1-5-4)</li>
                            <li>only the users necessary on the system</li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
    
    option4() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Go to {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Computer Management</strong></li>
                    <li>Find and open <strong>System Tools</strong></li>
                    <li>Find and open <strong>Local Users and Groups</strong></li>
                </ol>
                <h3>Settings</h3>
                <h4>Users</h4>
                For each user:
                <ol>
                    <li>Right click on user, select <strong>Properties</strong></li>
                    Under <strong>General</strong> tab
                    <ul>
                        <li>Disable all users not required by readme</li>
                        <li>Set passwords to expire for all users</li>
                    </ul>
                    Under <strong>Member Of</strong> tab
                    <ul>
                        <li>Add user to necessary groups, e.g. Administrators</li>
                        <li>Remove user from unnecessary groups</li>
                    </ul>
                    <li>Right click on user, select <b>Set Password</b></li>
                    <ul>
                        <li>Make sure password meets the {React.createElement(PasswordPolicy).type.prototype.getLink()}</li>
                        <li>Write down user and password for reference</li>
                    </ul>
                </ol>
                For the Administrator user:
                <ol>
                    <li>Right click on Adminstrator user, select <strong>Rename</strong></li>
                    <li>Change name to something else</li>
                </ol>
                For the Guest user:
                <ol>
                    <li>Right click on Guest user, select <strong>Properties</strong></li>
                    <li>[x] Account is disabled</li>
                </ol>
                <h4>Groups</h4>
                Check the users in all of the groups. These are the default entries.
                <ul>
                    <li>Access Control Assistance Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Administrators
                        <ul>
                            <li>only the users required</li>
                        </ul>
                    </li>
                    <li>Backup Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Certificate Service DCOM Access
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Cryptographic Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Device Owners
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Distributed COM Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Event Log Readers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Guests
                        <ul>
                            <li>Guest</li>
                        </ul>
                    </li>
                    <li>Hyper-V Administrators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>IIS_IUSRS
                        <ul>
                            <li>NT AUTHORITY\IUSR (S-1-5-17)</li>
                        </ul>
                    </li>
                    <li>Network Configuration Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Performance Log Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Performance Monitor Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Power Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Print Operators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>RDS Endpoint Servers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>RDS Management Servers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>RDS Remote Access Servers
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Remote Desktop Users
                        <ul>
                            <li>No entries; unless required by readme</li>
                        </ul>
                    </li>
                    <li>Remote Management Users
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Replicator
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>Storage Replica Administrators
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>System Managed Accounts Group
                        <ul>
                            <li>DefaultAccount</li>
                        </ul>
                    </li>
                    <li>Users
                        <ul>
                            <li>NT AUTHORITY\Authenticated Users(S-1-5-11)</li>
                            <li>NT AUTHORITY\INTERACTIVE (S-1-5-4)</li>
                            <li>only the users necessary on the system</li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

class MicrosoftBaselineSecurityAnalyzer extends Section {
    displayName() {
        return "Microsoft Baseline Security Analyzer";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option1();
        }
        else if (this.props.version === "win8.1") {
            return this.option1();
        }
        else if (this.props.version === "win10") {
            return this.notSupported();
        }
        else if (this.props.version === "win2008") {
            return this.option1();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option1();
        }
        else if (this.props.version === "win2016") {
            return this.option1();
        }
        else if (this.props.version === "win2019") {
            return this.option1();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Download</h3>
                <ul>
                    <li><a target="_blank" href="http://www.microsoft.com/en-us/download/details.aspx?id=7558">http://www.microsoft.com/en-us/download/details.aspx?id=7558</a></li>
                    <li>Choose <strong>MBSASetup-x64-EN.msi</strong></li>
                </ul>
                <p />
                Run without security updates check
            </React.Fragment>
        );
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
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Download</h3>
                <ul>
                    <li><a target="_blank" href="http://www.microsoft.com/security/scanner/en-us/default.aspx">http://www.microsoft.com/security/scanner/en-us/default.aspx</a></li>
                </ul>
            </React.Fragment>
        );
    }
}

class MicrosoftSecurityEssentials extends Section {
    displayName() {
        return "Microsoft Security Essentials";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Download</h3>
                <ul>
                    <li><a target="_blank" href="http://www.microsoft.com/en-us/download/details.aspx?id=5201">http://www.microsoft.com/en-us/download/details.aspx?id=5201</a></li>
                </ul>
                <p />
                Run at least a quick scan, then a full scan.
            </React.Fragment>
        );
    }
}

class PasswordPolicy extends Section {
    displayName() {
        return "Password Policy";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Go to {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Local Security Policy</strong></li>
                    <li>Open <strong>Account Policies</strong></li>
                    <li>Open <strong>Password Policy</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Enforce password history - 5 passwords remembered</li>
                    <li>Maximum password age - 30 days</li>
                    <li>Minimum password age - 10 days</li>
                    <li>Minimum password length - 10 characters</li>
                    <li>Password must meet complexity requirements - Enabled</li>
                    <li>Store passwords using reversible encryption - Disabled</li>
                </ul>
            </React.Fragment>
        );
    }
}

class Processes extends Section {
    displayName() {
        return "Processes";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.win7();
        }
        else if (this.props.version === "win8") {
            return this.win8();
        }
        else if (this.props.version === "win8.1") {
            return this.win8dot1();
        }
        else if (this.props.version === "win10") {
            return this.win10();
        }
        else if (this.props.version === "win2008") {
            return this.win2008();
        }
        else if (this.props.version === "win2008r2") {
            return this.win2008r2();
        }
        else if (this.props.version === "win2012") {
            return this.win8dot1();
        }
        else if (this.props.version === "win2016") {
            return this.win8dot1();
        }
        else if (this.props.version === "win2019") {
            return this.win8dot1();
        }
        return "unknown";
    }

    win7() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(TaskManager).type.prototype.getLink()}</li>
                    <li>Go to <strong>Processes</strong> tab</li>
                    <li>Find and click on <strong>Show processes from all users</strong></li>
                </ol>
                <h3>Settings</h3>
                The following are Windows processes that should not be stopped. Avoid stopping any required software.
                <ul>
                    <li>conhost.exe</li>
                    <li>csrss.exe</li>
                    <li>dwm.exe</li>
                    <li>explorer.exe</li>
                    <li>lsass.exe</li>
                    <li>lsm.exe</li>
                    <li>MsMpEng.exe</li>
                    <li>msseces.exe</li>
                    <li>MisSrv.exe</li>
                    <li>services.exe</li>
                    <li>smss.exe</li>
                    <li>spoolsv.exe</li>
                    <li>svchost.exe</li>
                    <li>System</li>
                    <li>taskhost.exe</li>
                    <li>taskmgr.exe</li>
                    <li>wininit.exe</li>
                    <li>winlogon.exe</li>
                    <li>WmiPrvSE.exe</li>
                </ul>
            </React.Fragment>
        );
    }

    win8() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(TaskManager).type.prototype.getLink()}</li>
                    <li>Go to <strong>Processes</strong> tab</li>
                    <li>Find and click on <strong>Show processes from all users</strong></li>
                </ol>
                <h3>Settings</h3>
                The following are Windows processes that should not be stopped. Avoid stopping any required software.
                <p />
                Apps
                <ul>
                    <li>Task Manager</li>
                    <li>Windows Explorer</li>
                </ul>
                Background processes
                <ul>
                    <li>COM Surrogate</li>
                    <li>Host Process for Windows Tasks</li>
                    <li>Microsoft Windows Search Indexer</li>
                    <li>Spooler SubSystem App</li>
                    <li>Touch Keyboard and Handwriting Panel</li>
                    <li>Windows Driver Foundation</li>
                </ul>
                Windows processes
                <ul>
                    <li>Antimalware Service Executable</li>
                    <li>Client Server Runtime Process</li>
                    <li>Desktop Window Manager</li>
                    <li>Local Security Authority Process</li>
                    <li>Service Host</li>
                    <li>Services and Controller app</li>
                    <li>System</li>
                    <li>System interrupts</li>
                    <li>Windows Login Application</li>
                    <li>Windows Session Manager</li>
                    <li>Windows Start-Up Application</li>
                </ul>
            </React.Fragment>
        );
    }

    win8dot1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(TaskManager).type.prototype.getLink()}</li>
                    <li>Click <strong>More details</strong>, if necessary</li>
                    <li>Go to <strong>Processes</strong> tab</li>
                    <li>Find and click on <strong>Show processes from all users</strong></li>
                </ol>
                <h3>Settings</h3>
                The following are Windows processes that should not be stopped. Avoid stopping any required software.
                <p />
                Apps
                <ul>
                    <li>Task Manager</li>
                    <li>Windows Explorer</li>
                </ul>
                Background processes
                <ul>
                    <li>COM Surrogate</li>
                    <li>Host Process for Windows Tasks</li>
                    <li>Microsoft Distributed Transaction Coordinator Service</li>
                    <li>Microsoft Windows Search Indexer</li>
                    <li>Runtime Broker</li>
                    <li>Spooler SubSystem App</li>
                    <li>Store</li>
                    <li>Store Broker</li>
                    <li>ThinPrint AutoConnect component</li>
                    <li>ThinPrint AutoConnect printer creation service</li>
                    <li>Windows Driver Foundation</li>
                    <li>WMI Provider Host</li>
                </ul>
                Windows processes
                <ul>
                    <li>Antimalware Service Executable</li>
                    <li>Client Server Runtime Process</li>
                    <li>Console Window Host</li>
                    <li>Desktop Window Manager</li>
                    <li>Local Security Authority Process</li>
                    <li>Microsoft Network Realtime Inspection Service</li>
                    <li>Service Host</li>
                    <li>Services and Controller app</li>
                    <li>System</li>
                    <li>System interrupts</li>
                    <li>Windows Logon Application</li>
                    <li>Windows Session Manager</li>
                    <li>Windows Start-Up Application</li>
                </ul>
            </React.Fragment>
        );
    }

    win10() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(TaskManager).type.prototype.getLink()}</li>
                    <li>Click <strong>More details</strong>, if necessary</li>
                    <li>Go to <strong>Processes</strong> tab</li>
                    <li>Find and click on <strong>Show processes from all users</strong></li>
                </ol>
                <h3>Settings</h3>
                The following are Windows processes that should not be stopped. Avoid stopping any required software.
                <p />
                Apps
                <ul>
                    <li>Task Manager</li>
                    <li>Windows Explorer</li>
                </ul>
                Background processes
                <ul>
                    <li>COM Surrogate</li>
                    <li>Cortana</li>
                    <li>Host Process for Windows Tasks</li>
                    <li>Microsoft OneDrive</li>
                    <li>Microsoft Skype Preview</li>
                    <li>Microsoft Windows Search Indexer</li>
                    <li>Runtime Broker</li>
                    <li>Spooler SubSystem App</li>
                    <li>Windows Defender notification icon</li>
                    <li>Windows Shell Experience Host</li>
                </ul>
                Windows processes
                <ul>
                    <li>Antimalware Service Executable</li>
                    <li>appmodel</li>
                    <li>Client Server Runtime Process</li>
                    <li>Desktop Window Manager</li>
                    <li>Local Security Authority Process</li>
                    <li>Microsoft Network Realtime Inspection Service</li>
                    <li>Service Host</li>
                    <li>Services and Controller app</li>
                    <li>Shell Infrastructure Host</li>
                    <li>System</li>
                    <li>System interrupts</li>
                    <li>Windows Logon Application</li>
                    <li>Windows Session Manager</li>
                    <li>Windows Start-Up Application</li>
                </ul>
            </React.Fragment>
        );
    }

    win2008() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(TaskManager).type.prototype.getLink()}</li>
                    <li>Go to <strong>Processes</strong> tab</li>
                    <li>Find and click on <strong>Show processes from all users</strong></li>
                </ol>
                <h3>Settings</h3>
                The following are Windows processes that should not be stopped. Avoid stopping any required software.
                <ul>
                    <li>csrss.exe</li>
                    <li>dwm.exe</li>
                    <li>explorer.exe</li>
                    <li>lsass.exe</li>
                    <li>lsm.exe</li>
                    <li>mmc.exe</li>
                    <li>msdtc.exe</li>
                    <li>services.exe</li>
                    <li>smss.exe</li>
                    <li>spoolsv.exe</li>
                    <li>svchost.exe</li>
                    <li>System</li>
                    <li>taskeng.exe</li>
                    <li>taskmgr.exe</li>
                    <li>wininit.exe</li>
                    <li>winlogon.exe</li>
                </ul>
            </React.Fragment>
        );
    }

    win2008r2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(TaskManager).type.prototype.getLink()}</li>
                    <li>Go to <strong>Processes</strong> tab</li>
                    <li>Find and click on <strong>Show processes from all users</strong></li>
                </ol>
                <h3>Settings</h3>
                The following are Windows processes that should not be stopped. Avoid stopping any required software.
                <ul>
                    <li>conhost.exe</li>
                    <li>csrss.exe</li>
                    <li>dllhost.exe</li>
                    <li>dwm.exe</li>
                    <li>explorer.exe</li>
                    <li>lsass.exe</li>
                    <li>lsm.exe</li>
                    <li>mmc.exe</li>
                    <li>msdtc.exe</li>
                    <li>MsMpEng.exe</li>
                    <li>msseces.exe</li>
                    <li>MisSrv.exe</li>
                    <li>services.exe</li>
                    <li>smss.exe</li>
                    <li>spoolsv.exe</li>
                    <li>sppsvc.exe</li>
                    <li>svchost.exe</li>
                    <li>System</li>
                    <li>taskhost.exe</li>
                    <li>taskmgr.exe</li>
                    <li>TrustedInstaller.exe</li>
                    <li>wininit.exe</li>
                    <li>winlogon.exe</li>
                    <li>WmiPrvSE.exe</li>
                </ul>
            </React.Fragment>
        );
    }
}

class ProgramFiles extends Section {
    displayName() {
        return "Program Files";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.win7();
        }
        else if (this.props.version === "win8") {
            return this.win8();
        }
        else if (this.props.version === "win8.1") {
            return this.win8dot1();
        }
        else if (this.props.version === "win10") {
            return this.win10();
        }
        else if (this.props.version === "win2008") {
            return this.win2008();
        }
        else if (this.props.version === "win2008r2") {
            return this.win2008r2();
        }
        else if (this.props.version === "win2012") {
            return this.win2012();
        }
        else if (this.props.version === "win2016") {
            return this.win2012();
        }
        else if (this.props.version === "win2019") {
            return this.win2012();
        }
        return "unknown";
    }

    win7() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>DVD Maker</li>
                    <li>Internet Explorer</li>
                    <li>Microsoft Baseline Security Analyzer</li>
                    <li>Microsoft Security Client</li>
                    <li>Uninstall Information (hidden)</li>
                    <li>Windows Defender</li>
                    <li>Windows Mail</li>
                    <li>Windows Media Player</li>
                    <li>Windows NT</li>
                    <li>Windows Photo Viewer</li>
                    <li>Windows Portable Devices</li>
                </ul>
            </React.Fragment>
        );
    }

    win8() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Uninstall Information (hidden)</li>
                    <li>Windows Defender</li>
                    <li>Windows Journal</li>
                    <li>Windows Mail</li>
                    <li>Windows Media Player</li>
                    <li>Windows Multimedia Platform</li>
                    <li>Windows NT</li>
                    <li>Windows Photo Viewer</li>
                    <li>Windows Portable Devices</li>
                    <li>Windows Apps (hidden)</li>
                </ul>

            </React.Fragment>
        );
    }

    win8dot1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Uninstall Information (hidden)</li>
                    <li>Windows Defender</li>
                    <li>Windows Journal</li>
                    <li>Windows Mail</li>
                    <li>Windows Media Player</li>
                    <li>Windows Multimedia Platform</li>
                    <li>Windows NT</li>
                    <li>Windows Photo Viewer</li>
                    <li>Windows Portable Devices</li>
                    <li>Windows Apps (hidden)</li>
                    <li>WindowsPowerShell</li>
                </ul>
            </React.Fragment>
        );
    }

    win10() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Uninstall Information (hidden)</li>
                    <li>Windows Defender</li>
                    <li>Windows Defender Advanced Threat Protection</li>
                    <li>Windows Mail</li>
                    <li>Windows Media Player</li>
                    <li>Windows Multimedia Platform</li>
                    <li>Windows NT</li>
                    <li>Windows Photo Viewer</li>
                    <li>Windows Portable Devices</li>
                    <li>Windows Apps (hidden)</li>
                    <li>WindowsPowerShell</li>
                </ul>
            </React.Fragment>
        );
    }

    win2008() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Packaged Programs</li>
                    <li>Uninstall Information (hidden)</li>
                    <li>Windows Mail</li>
                    <li>Windows NT</li>
                </ul>
            </React.Fragment>
        );
    }

    win2008r2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Microsoft Baseline Security Analyzer</li>
                    <li>Microsoft Security Client</li>
                    <li>Uninstall Information (hidden)</li>
                    <li>Windows Mail</li>
                    <li>Windows NT</li>
                </ul>
            </React.Fragment>
        );
    }

    win2012() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Uninstall Information (hidden)</li>
                    <li>Windows Mail</li>
                    <li>Windows NT</li>
                </ul>
            </React.Fragment>
        );
    }
}

class ProgramFilesx86 extends Section {
    displayName() {
        return "Program Files (x86)";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.win7();
        }
        else if (this.props.version === "win8") {
            return this.win8();
        }
        else if (this.props.version === "win8.1") {
            return this.win8dot1();
        }
        else if (this.props.version === "win10") {
            return this.win10();
        }
        else if (this.props.version === "win2008") {
            return this.win2008();
        }
        else if (this.props.version === "win2008r2") {
            return this.win2008r2();
        }
        else if (this.props.version === "win2012") {
            return this.win2012();
        }
        else if (this.props.version === "win2016") {
            return this.win2012();
        }
        else if (this.props.version === "win2019") {
            return this.win2012();
        }
        return "unknown";
    }

    win7() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files (x86)</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Microsoft Security Client</li>
                    <li>Microsoft .NET</li>
                    <li>Uninstall Information (hidden)</li>
                    <li>Windows Defender</li>
                    <li>Windows Mail</li>
                    <li>Windows NT</li>
                    <li>Windows Photo Viewer</li>
                    <li>Windows Portable Devices</li>
                </ul>
            </React.Fragment>
        );
    }

    win8() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files (x86)</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Windows Defender</li>
                    <li>Windows Mail</li>
                    <li>Windows Media Player</li>
                    <li>Windows Multimedia Platform</li>
                    <li>Windows NT</li>
                    <li>Windows Photo Viewer</li>
                    <li>Windows Portable Devices</li>
                </ul>
            </React.Fragment>
        );
    }

    win8dot1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files (x86)</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Microsoft.NET</li>
                    <li>Windows Defender</li>
                    <li>Windows Mail</li>
                    <li>Windows Media Player</li>
                    <li>Windows Multimedia Platform</li>
                    <li>Windows NT</li>
                    <li>Windows Photo Viewer</li>
                    <li>Windows Portable Devices</li>
                    <li>WindowsPowerShell</li>
                </ul>
            </React.Fragment>
        );
    }

    win10() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files (x86)</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Microsoft.NET</li>
                    <li>Windows Defender</li>
                    <li>Windows Mail</li>
                    <li>Windows Media Player</li>
                    <li>Windows Multimedia Platform</li>
                    <li>Windows NT</li>
                    <li>Windows Photo Viewer</li>
                    <li>Windows Portable Devices</li>
                    <li>WindowsPowerShell</li>
                </ul>
            </React.Fragment>
        );
    }

    win2008() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files (x86)</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Uninstall Information (hidden)</li>
                    <li>Windows Mail</li>
                    <li>Windows NT</li>
                </ul>
            </React.Fragment>
        );
    }

    win2008r2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files (x86)</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Microsoft Security Client</li>
                    <li>Microsoft .NET</li>
                    <li>Uninstall Information (hidden)</li>
                    <li>Windows Mail</li>
                    <li>Windows NT</li>
                </ul>
            </React.Fragment>
        );
    }

    win2012() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Program Files (x86)</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Common Files</li>
                    <li>Internet Explorer</li>
                    <li>Microsoft.NET</li>
                    <li>Windows Mail</li>
                    <li>Windows NT</li>
                </ul>
            </React.Fragment>
        );
    }
}

class RemoteAssistanceAndRemoteDesktop extends Section {
    displayName() {
        return "Remote Assistance and Remote Desktop";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>System and Security</strong></li>
                    <li>Find and click on <strong>System</strong></li>
                    <li>Find and click on <strong>Remote settings</strong></li>
                </ol>
                <h3>Settings</h3>
                Under Remote Assistance
                <ul>
                    <li>[ ] Allow Remote Assistance connections to this computer</li>
                </ul>
                Under Remote Desktop
                <ul>
                    <li>[x] Don't allow connections to this computer</li>
                </ul>
            </React.Fragment>
        );
    }
}

class SecurityOptions extends Section {
    displayName() {
        return "Security Options";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Go to {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Local Security Policy</strong></li>
                    <li>Open <strong>Local Policies</strong></li>
                    <li>Open <strong>Security Options</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Accounts: Guest account status - Disabled</li>
                    <li>Accounts: Rename administrator account - not Administrator</li>
                    <li>Accounts: Rename guest account - not Guest</li>
                    <li>Interactive logon: Do not require CTRL + ALT + DEL - Disabled</li>
                    <li>Network access: Let everyone permissions apply to anonymous users - Disabled</li>
                    <li>Recovery Console: Allow automatic administrative logon - Disabled</li>
                </ul>
            </React.Fragment>
        );
    }
}

class ServicePacks extends Section {
    displayName() {
        return "Service Packs";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.win7();
        }
        else if (this.props.version === "win8") {
            return this.none();
        }
        else if (this.props.version === "win8.1") {
            return this.none();
        }
        else if (this.props.version === "win10") {
            return this.none();
        }
        else if (this.props.version === "win2008") {
            return this.win2008();
        }
        else if (this.props.version === "win2008r2") {
            return this.win2008r2();
        }
        else if (this.props.version === "win2012") {
            return this.none();
        }
        else if (this.props.version === "win2016") {
            return this.none();
        }
        else if (this.props.version === "win2019") {
            return this.none();
        }
        return "unknown";
    }

    win7() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Find and right click <strong>Computer</strong> or <strong>My Computer</strong></li>
                    <li>Select <strong>Properties</strong></li>
                    <li>Find the words <strong>Service Pack</strong>
                        <ul>
                            <li>if there is none, no service pack is installed</li>
                        </ul>
                    </li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>For Windows 7, the latest is Service Pack 1</li>
                </ul>
            </React.Fragment>
        );
    }

    win2008() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Find and right click <strong>Computer</strong> or <strong>My Computer</strong></li>
                    <li>Select <strong>Properties</strong></li>
                    <li>Find the words <strong>Service Pack</strong>
                        <ul>
                            <li>if there is none, no service pack is installed</li>
                        </ul>
                    </li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>For Windows Server 2008, the latest is Service Pack 2</li>
                </ul>
            </React.Fragment>
        );
    }

    win2008r2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Start or Windows button</li>
                    <li>Find and right click <strong>Computer</strong> or <strong>My Computer</strong></li>
                    <li>Select <strong>Properties</strong></li>
                    <li>Find the words <strong>Service Pack</strong>
                        <ul>
                            <li>if there is none, no service pack is installed</li>
                        </ul>
                    </li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>For Windows Server 2008 R2, the latest is Service Pack 1</li>
                </ul>
            </React.Fragment>
        );
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
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Go to {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and open <strong>Services</strong></li>
                </ol>
                <h3>Settings</h3>
                Make sure the following services are running and have automatic start up:
                <ul>
                    <li>DHCP Client</li>
                    <li>DNS Client</li>
                </ul>
                Unless required by readme, stop each of the following services and change Startup Type as Disabled
                <ul>
                    <li>DHCP Server</li>
                    <li>DNS Server</li>
                    <li>FTP Server</li>
                    <li>HTTP Server</li>
                    <li>Internet Information Services (IIS)</li>
                    <li>Telnet Server</li>
                </ul>
            </React.Fragment>
        );
    }
}

class SharedFolders extends Section {
    displayName() {
        return "Shared Folders";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and double click on <strong>Computer Management</strong></li>
                    <li>Find and double click on <strong>Shared Folders</strong></li>
                    <li>Find and double click on <strong>Shares</strong></li>
                </ol>
                <h3>Settings</h3>
                Stop sharing all shares.
                <p></p>
                The following are the mininum required shares. Other shares may be deleted, unless required by readme.
                <ul>
                    <li>ADMIN$ - C:\Windows - Windows</li>
                    <li>C$ - C:\ - Windows
                        <ul>
                            <li>other letters may appear for each Local Disk in Computer</li>
                        </ul>
                    </li>
                    <li>IPC$ - [blank] - Windows</li>
                </ul>
            </React.Fragment>
        );
    }
}

class ShowHiddenFilesAndFolders extends Section {
    displayName() {
        return "Show Hidden Files and Folders";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option1();
        }
        else if (this.props.version === "win8.1") {
            return this.option1();
        }
        else if (this.props.version === "win10") {
            return this.option2();
        }
        else if (this.props.version === "win2008") {
            return this.option1();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option1();
        }
        else if (this.props.version === "win2016") {
            return this.option1();
        }
        else if (this.props.version === "win2019") {
            return this.option1();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Appearance and Personalization</strong></li>
                    <li>Find <strong>Folder Options</strong></li>
                    <li>Find and click on <strong>Show hidden files and folders</strong></li>
                </ol>
                <h3>Settings</h3>
                Under <strong>Files and Folders</strong>, under <strong>Hidden files and folders</strong>
                <ul>
                    <li>[x] Show hidden files, folders, and drives</li>
                </ul>

            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Appearance and Personalization</strong></li>
                    <li>Find <strong>File Explorer Options</strong></li>
                    <li>Find and click on the <strong>View</strong> tab</li>
                </ol>
                <h3>Settings</h3>
                Under <strong>Files and Folders</strong>, under <strong>Hidden files and folders</strong>
                <ul>
                    <li>[x] Show hidden files, folders, and drives</li>
                </ul>
            </React.Fragment>
        );
    }
}

class StartupPrograms extends Section {
    displayName() {
        return "Startup Programs";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option2();
        }
        else if (this.props.version === "win8.1") {
            return this.option3();
        }
        else if (this.props.version === "win10") {
            return this.option3();
        }
        else if (this.props.version === "win2008") {
            return this.option1();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option4();
        }
        else if (this.props.version === "win2016") {
            return this.option4();
        }
        else if (this.props.version === "win2019") {
            return this.option4();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press the Start or Windows button</li>
                    <li>Type <strong>msconfig</strong>, press Enter</li>
                    <li>Go to the <strong>Startup</strong> tab</li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Keep checkmarks on required programs and services</li>
                    <li>Remove checkmarks on all other items</li>
                </ul>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(TaskManager).type.prototype.getLink()}</li>
                    <li>Go to the <strong>Startup</strong> tab</li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Disable programs that are not required by readme</li>
                </ul>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(TaskManager).type.prototype.getLink()}</li>
                    <li>Click on <strong>More details</strong>, if necessary</li>
                    <li>Go to the <strong>Startup</strong> tab</li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Disable programs that are not required by readme</li>
                </ul>
            </React.Fragment>
        );
    }

    option4() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press the Start or Windows button</li>
                    <li>Type <strong>msconfig</strong>, press Enter</li>
                    <li>Go to the <strong>Startup</strong> tab</li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Keep checkmarks on required programs and services</li>
                    <li>Remove checkmarks on all other items</li>
                </ul>
            </React.Fragment>
        );
    }
}

class TaskManager extends Section {
    displayName() {
        return "Task Manager";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option1();
        }
        else if (this.props.version === "win8.1") {
            return this.option2();
        }
        else if (this.props.version === "win10") {
            return this.option2();
        }
        else if (this.props.version === "win2008") {
            return this.option1();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option2();
        }
        else if (this.props.version === "win2016") {
            return this.option2();
        }
        else if (this.props.version === "win2019") {
            return this.option2();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                Option 1
                <ol>
                    <li>Right click Taskbar (bottom of screen)</li>
                    <li>Select <strong>Start Task Manager</strong></li>
                </ol>
                Option 2
                <ol>
                    <li>Press <strong>CTRL + ALT + DEL</strong></li>
                    <li>Select <strong>Start Task Manager</strong></li>
                </ol>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                Option 1
                <ol>
                    <li>Right click Taskbar (bottom of screen)</li>
                    <li>Select <strong>Task Manager</strong></li>
                </ol>
                Option 2
                <ol>
                    <li>Press <strong>CTRL + ALT + DEL</strong></li>
                    <li>Select <strong>Task Manager</strong></li>
                </ol>
            </React.Fragment>
        );
    }
}

class TaskScheduler extends Section {
    displayName() {
        return "Task Scheduler";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Task Scheduler</strong></li>
                    <li>Under <strong>Task Scheduler (Local)</strong>, open <strong>Task Scheduler Library</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Review list of scheduled tasks</li>
                    <li>Add any required tasks</li>
                    <li>Disable or delete any unnecessary or prohibited tasks</li>
                </ul>
            </React.Fragment>
        );
    }
}

class UserRightsAssignment extends Section {
    displayName() {
        return "User Rights Assignment";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(AdministrativeTools).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Local Security Policy</strong></li>
                    <li>Find and double click on <strong>User Rights Assignment</strong></li>
                </ol>
                <h3>Settings</h3>
                These are the default settings
                <ul>
                    <li>
                        Access Credential Manager as a trusted caller
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Access this computer from the network
                        <ul>
                            <li>Administrators</li>
                            <li>Backup Operators</li>
                            <li>Everyone</li>
                            <li>Users</li>
                        </ul>
                    </li>
                    <li>
                        Act as part of the operating system
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Add workstations to domain
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Adjust memory quotas for a process
                        <ul>
                            <li>Administrators</li>
                            <li>Local Service</li>
                            <li>Network Service</li>
                        </ul>
                    </li>
                    <li>
                        Allow log on locally
                        <ul>
                            <li>Administrators</li>
                            <li>Backup Operators</li>
                            <li>Guest</li>
                            <li>Users</li>
                        </ul>
                    </li>
                    <li>
                        Allow log on through Remote Desktop Services
                        <ul>
                            <li>Administrators</li>
                            <li>Remote Desktop Users</li>
                        </ul>
                    </li>
                    <li>
                        Back up files and directories
                        <ul>
                            <li>Administrators</li>
                            <li>Backup Operators</li>
                        </ul>
                    </li>
                    <li>
                        Bypass traverse checking
                        <ul>
                            <li>Administrators</li>
                            <li>Backup Operators</li>
                            <li>Everyone</li>
                            <li>Local Service</li>
                            <li>Network Service</li>
                            <li>Users</li>
                        </ul>
                    </li>
                    <li>
                        Change the system time
                        <ul>
                            <li>Administrators</li>
                            <li>Local Service</li>
                        </ul>
                    </li>
                    <li>
                        Change the time zone
                        <ul>
                            <li>Administrators</li>
                            <li>Local Service</li>
                            <li>Users</li>
                        </ul>
                    </li>
                    <li>
                        Create a pagefile
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                    <li>
                        Create a token object
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Create global objects
                        <ul>
                            <li>Administrators</li>
                            <li>Local Service</li>
                            <li>Network Service</li>
                            <li>Service</li>
                        </ul>
                    </li>
                    <li>
                        Create permanent shared objects
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Create symbolic links
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                    <li>
                        Debug Programs
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                    <li>
                        Deny access to this computer from the network
                        <ul>
                            <li>Guest</li>
                        </ul>
                    </li>
                    <li>
                        Deny log on as a batch job
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Deny log on as a service
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Deny log on locally
                        <ul>
                            <li>Guest</li>
                        </ul>
                    </li>
                    <li>
                        Deny log on through Remote Desktop/Terminal Services
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Enable computer and user accounts to be trusted for delegation
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Force shutdown from a remote system
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                    <li>
                        Generate security audits
                        <ul>
                            <li>Local Service</li>
                            <li>Network Service</li>
                        </ul>
                    </li>
                    <li>
                        Impersonate a client after authentication
                        <ul>
                            <li>Adminstrators</li>
                            <li>Local Service</li>
                            <li>Network Service</li>
                            <li>Service</li>
                        </ul>
                    </li>
                    <li>
                        Increase a process working set
                        <ul>
                            <li>Users</li>
                        </ul>
                    </li>
                    <li>
                        Increase scheduling priority
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                    <li>
                        Load and unload device drivers
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                    <li>
                        Lock pages in memory
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Log on as a batch job
                        <ul>
                            <li>Administrators</li>
                            <li>Backup Operators</li>
                            <li>Performance Log Users</li>
                        </ul>
                    </li>
                    <li>
                        Log on as a service
                        <ul>
                            <li>NT SERVICE\ALL SERVICES</li>
                        </ul>
                    </li>
                    <li>
                        Manage auditing and security log
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                    <li>
                        Modify an object label
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Modify firmware environment values
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                    <li>
                        Perform volume maintenance tasks
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                    <li>
                        Profile single process
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                    <li>
                        Profile system performance
                        <ul>
                            <li>Administrators</li>
                            <li>NT Service\WdiServiceHost</li>
                        </ul>
                    </li>
                    <li>
                        Remove computer from docking station
                        <ul>
                            <li>Administrators</li>
                            <li>Users</li>
                        </ul>
                    </li>
                    <li>
                        Replace a process level token
                        <ul>
                            <li>Local Service</li>
                            <li>Network Service</li>
                        </ul>
                    </li>
                    <li>
                        Restore files and directories
                        <ul>
                            <li>Administrators</li>
                            <li>Backup Operators</li>
                        </ul>
                    </li>
                    <li>
                        Shut down the system
                        <ul>
                            <li>Administrators</li>
                            <li>Backup Operators</li>
                            <li>Users</li>
                        </ul>
                    </li>
                    <li>
                        Synchronize directory service data
                        <ul>
                            <li>No entries</li>
                        </ul>
                    </li>
                    <li>
                        Take ownership of files or other objects
                        <ul>
                            <li>Administrators</li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

class UsersFolder extends Section {
    displayName() {
        return "Users Folder";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(CDrive).type.prototype.getLink()}</li>
                    <li>Open <strong>Users</strong></li>
                </ol>
                <h3>Settings</h3>
                The following folders are safe to leave alone. Carefully inspect all other folders and files not in the following list.
                <ul>
                    <li>Default</li>
                    <li>Public</li>
                    <li>any user allowed by readme</li>
                </ul>
            </React.Fragment>
        );
    }
}

class WindowsDefender extends Section {
    displayName() {
        return "Windows Defender";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                Windows Defender replaces Microsoft Security Essentials.
                <ol>
                    <li>Press Start button</li>
                    <li>Type <strong>Windows Defender</strong></li>
                </ol>
                <p />
                Run at least a quick scan, then a full scan.
            </React.Fragment>
        );
    }
}

class WindowsFeatures extends Section {
    displayName() {
        return "Windows Features";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option1();
        }
        else if (this.props.version === "win8.1") {
            return this.option1();
        }
        else if (this.props.version === "win10") {
            return this.option2();
        }
        else if (this.props.version === "win2008") {
            return this.option4();
        }
        else if (this.props.version === "win2008r2") {
            return this.option5();
        }
        else if (this.props.version === "win2012") {
            return this.option3();
        }
        else if (this.props.version === "win2016") {
            return this.option3();
        }
        else if (this.props.version === "win2019") {
            return this.option3();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Programs</strong></li>
                    <li>Find and click on <strong>Turn on Windows features on or off</strong></li>
                </ol>
                <h3>Settings</h3>
                Uncheck all not mentioned in the following:
                <p></p>
                Minimum required
                <ul>
                    <li>Internet Explorer</li>
                    <li>Windows Search</li>
                </ul>
                May be required
                <ul>
                    <li>Microsoft .NET Framework</li>
                </ul>
                Only enable these if required by readme
                <ul>
                    <li>Simple Network Management Protocol (SNMP)</li>
                    <li>Telnet Client</li>
                    <li>Telnet Server</li>
                    <li>TFTP Client</li>
                </ul>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Programs</strong></li>
                    <li>Find and click on <strong>Turn on Windows features on or off</strong></li>
                </ol>
                <h3>Settings</h3>
                Uncheck all not mentioned in the following:
                <p></p>
                Minimum required
                <ul>
                    <li>Internet Explorer</li>
                </ul>
                May be required
                <ul>
                    <li>Microsoft .NET Framework</li>
                </ul>
                Only enable these if required by readme
                <ul>
                    <li>Simple Network Management Protocol (SNMP)</li>
                    <li>Telnet Client</li>
                    <li>Telnet Server</li>
                    <li>TFTP Client</li>
                </ul>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Programs</strong></li>
                    <li>Find and click on <strong>Turn on Windows features on or off</strong></li>
                    <li>Follow <strong>Add Roles and Features Wizard</strong> until <strong>Features</strong></li>
                </ol>
                <h3>Settings</h3>
                Uncheck all not mentioned in the following:
                <p></p>
                May be required
                <ul>
                    <li>Microsoft .NET Framework</li>
                </ul>
                Only enable these if required by readme
                <ul>
                    <li>Group Policy Management</li>
                    <li>Remote Assistance</li>
                    <li>Remote Server Administration Tools</li>
                    <li>SMTP Server</li>
                    <li>SNMP Server</li>
                    <li>Telnet Client</li>
                    <li>Telnet Server</li>
                    <li>TFTP Client</li>
                </ul>
            </React.Fragment>
        );
    }

    option4() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Programs</strong></li>
                    <li>Find <strong>Programs and Features</strong></li>
                    <li>Find and click on <strong>Turn on Windows features on or off</strong></li>
                    <li>Under <strong>Server Manager</strong>, find and open <strong>Features</strong></li>
                </ol>
                <h3>Settings</h3>
                By default, no features (0 of 41) are installed
                <ol>
                    <li>Check the readme for which features or services should be installed
                        <ul>
                            <li>.NET Framework</li>
                            <li>Group Policy Management</li>
                            <li>SMTP Server</li>
                            <li>SNMP Services</li>
                            <li>Telnet Client</li>
                            <li>Telnet Server</li>
                            <li>TFTP Client</li>
                            <li>WINS Server</li>
                        </ul>
                    </li>
                    <li>Use <strong>Add Features</strong> to add necessary features</li>
                    <li>Use <strong>Remove Features</strong> to remove unnecessary features</li>
                </ol>
            </React.Fragment>
        );
    }

    option5() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Programs</strong></li>
                    <li>Find and click on <strong>Turn on Windows features on or off</strong></li>
                    <li>Under <strong>Server Manager</strong>, find and open <strong>Features</strong></li>
                </ol>
                <h3>Settings</h3>
                By default, no features (0 of 41) are installed
                <ol>
                    <li>Check the readme for which features or services should be installed
                        <ul>
                            <li>.NET Framework</li>
                            <li>Group Policy Management</li>
                            <li>SMTP Server</li>
                            <li>SNMP Services</li>
                            <li>Telnet Client</li>
                            <li>Telnet Server</li>
                            <li>TFTP Client</li>
                            <li>Windows Server</li>
                        </ul>
                    </li>
                    <li>Use <strong>Add Features</strong> to add necessary features</li>
                    <li>Use <strong>Remove Features</strong> to remove unnecessary features</li>
                </ol>
            </React.Fragment>
        );
    }
}

class WindowsFirewall extends Section {
    displayName() {
        return "Windows Firewall";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option2();
        }
        else if (this.props.version === "win8.1") {
            return this.option2();
        }
        else if (this.props.version === "win10") {
            return this.option2();
        }
        else if (this.props.version === "win2008") {
            return this.option3();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option2();
        }
        else if (this.props.version === "win2016") {
            return this.option2();
        }
        else if (this.props.version === "win2019") {
            return this.option2();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>System and Security</strong></li>
                    <li>Find and click on <strong>Windows Firewall</strong></li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Find and click on <strong>Turn Windows Firewall on or off</strong></li>
                    <li>For Home, Work, and Public network location settings:
                        <ul>
                            <li>[x] Turn on Windows Firewall</li>
                            <li>[ ] Block all incoming connections, including those in the list of allowed programs</li>
                            <li>[x] Notify me when Windows Firewall blocks a new program</li>
                        </ul>
                    </li>
                    <li>Press OK</li>
                    <li>Find and click on <strong>Allow a program or feature through Windows Firewall</strong></li>
                    <li>Check that only Core Networking and required programs or services have checkmarks</li>
                    <li>Uncheck all other programs and features for both Home/Work (Private) and Public</li>
                    <li>Press OK</li>
                    <li>Find and click on <strong>Advanced settings</strong></li>
                    <li>For Domain Profile, Private Profile, and Public Profile
                        <ul>
                            <li>Windows Firewall is on</li>
                            <li>Inbound connections that do not match a rule are blocked</li>
                            <li>Outbound connections that do not match a rule are not blocked</li>
                        </ul>
                    </li>
                    <li>Find and click on <strong>Inbound Rules</strong></li>
                    <li>Enable the <strong>Core Networking</strong> group and any required programs or services</li>
                    <li>Disable all other rules</li>
                    <li>Repeat the same for <strong>Outbound Rules</strong></li>
                </ol>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>System and Security</strong></li>
                    <li>Find and click on <strong>Windows Firewall</strong></li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Find and click on <strong>Turn Windows Firewall on or off</strong></li>
                    <li>For Private and Public network location settings:
                        <ul>
                            <li>[x] Turn on Windows Firewall</li>
                            <li>[ ] Block all incoming connections, including those in the list of allowed programs</li>
                            <li>[x] Notify me when Windows Firewall blocks a new program</li>
                        </ul>
                    </li>
                    <li>Press OK</li>
                    <li>Find and click on <strong>Allow a program or feature through Windows Firewall</strong></li>
                    <li>Check that only Core Networking and required programs or services have checkmarks</li>
                    <li>Uncheck all other programs and features for both Private and Public</li>
                    <li>Press OK</li>
                    <li>Find and click on <strong>Advanced settings</strong></li>
                    <li>For Domain Profile, Private Profile, and Public Profile
                        <ul>
                            <li>Windows Firewall is on</li>
                            <li>Inbound connections that do not match a rule are blocked</li>
                            <li>Outbound connections that do not match a rule are not blocked</li>
                        </ul>
                    </li>
                    <li>Find and click on <strong>Inbound Rules</strong></li>
                    <li>Enable the <strong>Core Networking</strong> group and any required programs or services</li>
                    <li>Disable all other rules</li>
                    <li>Repeat the same for <strong>Outbound Rules</strong></li>
                </ol>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Security</strong></li>
                    <li>Find and click on <strong>Windows Firewall</strong></li>
                    <li>Find and click on <strong>Turn Windows Firewall on or off</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Under the General tab
                        <ul>
                            <li>[x] On (recommended)</li>
                            <li>[ ] Block all incoming connections</li>
                        </ul>
                    </li>
                    <li>Under the Exceptions tab
                        <ul>
                            <li>Only Core Networking and any required programs or services should have checkmarks</li>
                            <li>Uncheck all other programs and features</li>
                        </ul>
                    </li>
                    <li>Under the Advanced tab
                        <ul>
                            <li>Put a checkmark on all Network connections</li>
                        </ul>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

class WindowsServerRoles extends Section {
    displayName() {
        return "Windows Server Roles";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                By default, no roles are installed
                <ol>
                    <li>Open <strong>Server Manager</strong></li>
                    <li>Find and double click on <strong>Roles</strong></li>
                    <li>Check the readme for which roles should be installed</li>
                    <li>Use <strong>Add Roles</strong> to add necessary server roles</li>
                    <li>Use <strong>Remove Roles</strong> to remove unnecessary server roles</li>
                </ol>
            </React.Fragment>
        );
    }
}

class WindowsSettings extends Section {
    displayName() {
        return "Windows Settings";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Windows button</li>
                    <li>Click on <strong>Settings</strong> (gear icon)</li>
                </ol>
            </React.Fragment>
        );
    }
}

class WindowsUpdate extends Section {
    displayName() {
        return "Windows Update";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "win7") {
            return this.option1();
        }
        else if (this.props.version === "win8") {
            return this.option1();
        }
        else if (this.props.version === "win8.1") {
            return this.option1();
        }
        else if (this.props.version === "win10") {
            return this.option2();
        }
        else if (this.props.version === "win2008") {
            return this.option3();
        }
        else if (this.props.version === "win2008r2") {
            return this.option1();
        }
        else if (this.props.version === "win2012") {
            return this.option1();
        }
        else if (this.props.version === "win2016") {
            return this.option1();
        }
        else if (this.props.version === "win2019") {
            return this.option2();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>System and Security</strong></li>
                    <li>Find <strong>Windows Update</strong></li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Find and click on <strong>Check for Updates</strong></li>
                    <li>If there are any critical or important updates, click on <strong>Install Updates</strong></li>
                    <li>Wait for updates to finish</li>
                    <li>Repeat until no remaining critical and important updates</li>
                </ol>
            </React.Fragment>
        )
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(WindowsSettings).type.prototype.getLink()}</li>
                    <li>Find <strong>Update &amp; Security</strong></li>
                    <li>Find <strong>Windows Update</strong></li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Find and click on <strong>Check for Updates</strong></li>
                    <li>If there are any critical or important updates, click on <strong>Install Updates</strong></li>
                    <li>Wait for updates to finish</li>
                    <li>Repeat until no remaining critical and important updates</li>
                </ol>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(ControlPanel).type.prototype.getLink()}</li>
                    <li>Find and click on <strong>Security</strong></li>
                    <li>Find <strong>Windows Update</strong></li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Find and click on <strong>Check for Updates</strong></li>
                    <li>If there are any critical or important updates, click on <strong>Install Updates</strong></li>
                    <li>Wait for updates to finish</li>
                    <li>Repeat until no remaining critical and important updates</li>
                </ol>
            </React.Fragment>
        );
    }
}

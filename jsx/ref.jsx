class LocalUsersAndGroups extends Section {
    constructor() {
        super();
        this.state.name = "Local Users and Groups";
    }

    getContent() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Go to <a href="#Administrative Tools">Administrative Tools</a></li>
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
                        <li>Make sure password meets the <a href="#Password Policy">Password Policy</a></li>
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
}

class AutomaticLogin extends Section {
    constructor() {
        super();
        this.state.name = "Automatic Login";
    }
    getContent() {
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
}

class AddRemovePrograms extends Section {
    constructor() {
        super();
        this.state.name = "Add/Remove Programs";
    }

    getContent() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open <a href="#Control Panel">Control Panel</a></li>
                    <li>Find <strong>Programs</strong></li>
                    <li>Find and click on <strong>Uninstall a Program</strong></li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Do not remove any programs required by readme (e.g. web browser, work tools)</li>
                    <li>Remove all programs prohibited by readme (e.g. games, non-work tools)</li>
                </ul>
            </React.Fragment>
        );
    }
}

class WindowsFeatures extends Section {
    constructor() {
        super();
        this.state.name = "Windows Features";
    }

    getContent() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open <a href="#Control Panel">Control Panel</a></li>
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
        )
    }
}

class StartupPrograms extends Section {
    constructor() {
        super();
        this.state.name = "Startup Programs";
    }

    getContent() {
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
        )
    }
}

class Services extends Section {
    constructor() {
        super();
        this.state.name = "Services";
    }

    getContent() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Go to <a href="#Administrative Tools">Administrative Tools</a></li>
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

class TaskScheduler extends Section {
    constructor() {
        super();
        this.state.name = "Task Scheduler";
    }

    getContent() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open <a href="#Administrative Tools">Administrative Tools</a></li>
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

class InternetExplorer extends Section {
    constructor() {
        super();
        this.state.name = "Internet Explorer";
    }

    getContent() {
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
        )
    }
}

class DiskCleanup extends Section {
    constructor() {
        super();
        this.state.name = "Disk Cleanup";
    }

    getContent() {
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
}

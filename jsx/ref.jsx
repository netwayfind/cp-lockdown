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

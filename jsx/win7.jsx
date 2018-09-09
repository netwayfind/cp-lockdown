class Windows7 extends React.Component {
    render() {
        return (
            <Template name="Windows 7">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups />
                    <Section name="Automatic Login" />
                </Group>
                <Group name="Installation Cleanup">
                    <Section name="Add/Remove Programs" />
                    <Section name="Windows Features" />
                    <Section name="Startup Programs" />
                    <Section name="Services" />
                    <Section name="Task Scheduler" />
                    <Section name="Internet Explorer" />
                    <Section name="Disk Cleanup" />
                </Group>
                <Group name="Network Resources">
                    <Section name="Internet Connection Sharing" />
                    <Section name="Shared Folders" />
                    <Section name="CrowdInspect" />
                </Group>
                <Group name="Remote Access">
                    <Section name="Remote Assistance and Remote Desktop" />
                    <Section name="Windows Firewall" />
                </Group>
                <Group name="Policies">
                    <Section name="Password Policy" />
                    <Section name="Account Lockout Policy" />
                    <Section name="Audit Policy" />
                    <Section name="User Rights Assignment" />
                    <Section name="Security Options" />
                    <Section name="Advanced Audit Policy Configuration" />
                    <Section name="Local Group Policy Editor" />
                </Group>
                <Group name="Scans">
                    <Section name="Microsoft Baseline Security Analyzer" />
                    <Section name="Microsoft Security Essentials" />
                    <Section name="Anti-Malware Tools" />
                </Group>
                <Group name="Filesystem">
                    <Section name="Show Hidden Files and Folders" />
                    <Section name="Find Unauthorized Files" />
                    <Section name="Users Folder" />
                    <Section name="Program Files" />
                    <Section name="Program Files (x86)" />
                    <Section name="Hosts file" />
                </Group>
                <Group name="Updates">
                    <Section name="Automatic Updates" />
                    <Section name="Service Packs" />
                    <Section name="Windows Update" />
                </Group>
                <Group name="Logs">
                    <Section name="Event Viewer" />
                </Group>
                <Group name="Reference">
                    <Section name="Administrative Tools" />
                    <Section name="C:\ Drive" />
                    <Section name="Command Prompt" />
                    <Section name="Control Panel" />
                    <Section name="Processes" />
                    <Section name="Task Manager" />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<Windows7 />, document.getElementById("app"));

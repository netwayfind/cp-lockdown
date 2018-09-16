class Ubuntu extends React.Component {
    render() {
        return (
            <Template name="Ubuntu">
                <Group name="Users and Groups">
                    <Users version="ubuntu" />
                    <Groups version="ubuntu" />
                    <GuestAccess version="ubuntu" />
                    <Sudo version="ubuntu" />
                </Group>
                <Group name="Networking">
                    <Firewall version="ubuntu" />
                    <NetworkConnections version="ubuntu" />
                </Group>
                <Group name="Installation Check">
                    <Applications version="ubuntu" />
                    <Services version="ubuntu" />
                    <Updates version="ubuntu" />
                </Group>
                <Group name="Scans">
                    <Chkrootkit version="ubuntu" />
                    <Rkhunter version="ubuntu" />
                    <Lynis version="ubuntu" />
                </Group>
                <Group name="Filesystem">
                    <FindUnauthorizedFiles version="ubuntu" />
                    <HostsFile version="ubuntu" />
                    <FilesystemPermissions version="ubuntu" />
                </Group>
                <Group name="Configuration">
                    <Auditd version="ubuntu" />
                    <BootupManager version="ubuntu" />
                    <Cron version="ubuntu" />
                    <LibpamCracklib version="ubuntu" />
                    <PasswordPolicy version="ubuntu" />
                    <AccountLockoutPolicy version="ubuntu" />
                </Group>
                <Group name="Logs">
                    <SystemLog version="ubuntu" />
                </Group>
                <Group name="References">
                    <DefaultGroups version="ubuntu" />
                    <DefaultUsers version="ubuntu" />
                    <OpenFile version="ubuntu" />
                    <Terminal version="ubuntu" />
                    <SystemSettings version="ubuntu" />
                </Group>
            </Template>
        );
    }
}

ReactDOM.render(<Ubuntu />, document.getElementById("app"));

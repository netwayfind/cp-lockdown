class Ubuntu1604 extends React.Component {
    render() {
        return (
            <Template name="Ubuntu 16.04+">
                <Group name="Users and Groups">
                    <Users version="ubuntu16.04" />
                    <Groups version="ubuntu16.04" />
                    <GuestAccess version="ubuntu16.04" />
                    <Sudo version="ubuntu16.04" />
                </Group>
                <Group name="Networking">
                    <Firewall version="ubuntu16.04" />
                    <NetworkConnections version="ubuntu16.04" />
                </Group>
                <Group name="Installation Check">
                    <Applications version="ubuntu16.04" />
                    <Services version="ubuntu16.04" />
                    <Updates version="ubuntu16.04" />
                </Group>
                <Group name="Scans">
                    <Chkrootkit version="ubuntu16.04" />
                    <Rkhunter version="ubuntu16.04" />
                </Group>
                <Group name="Filesystem">
                    <FindUnauthorizedFiles version="ubuntu16.04" />
                    <HostsFile version="ubuntu16.04" />
                    <FilesystemPermissions version="ubuntu16.04" />
                </Group>
                <Group name="Configuration">
                    <Auditd version="ubuntu16.04" />
                    <BootupManager version="ubuntu16.04" />
                    <Cron version="ubuntu16.04" />
                    <LibpamCracklib version="ubuntu16.04" />
                    <PasswordPolicy version="ubuntu16.04" />
                    <AccountLockoutPolicy version="ubuntu16.04" />
                </Group>
                <Group name="Logs">
                    <SystemLog version="ubuntu16.04" />
                </Group>
                <Group name="References">
                    <DefaultGroups version="ubuntu16.04" />
                    <DefaultUsers version="ubuntu16.04" />
                    <OpenFile version="ubuntu16.04" />
                    <Terminal version="ubuntu16.04" />
                    <SystemSettings version="ubuntu16.04" />
                </Group>
            </Template>
        );
    }
}

ReactDOM.render(<Ubuntu1604 />, document.getElementById("app"));

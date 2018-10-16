class Debian8 extends React.Component {
    render() {
        return (
            <Template name="Debian 8+">
                <Group name="Users and Groups">
                    <Users version="debian8" />
                    <Groups version="debian8" />
                    <GuestAccess version="debian8" />
                    <Sudo version="debian8" />
                </Group>
                <Group name="Networking">
                    <Firewall version="debian8" />
                    <NetworkConnections version="debian8" />
                </Group>
                <Group name="Installation Check">
                    <Applications version="debian8" />
                    <Services version="debian8" />
                    <Updates version="debian8" />
                </Group>
                <Group name="Scans">
                    <Chkrootkit version="debian8" />
                    <Rkhunter version="debian8" />
                </Group>
                <Group name="Filesystem">
                    <FindUnauthorizedFiles version="debian8" />
                    <HostsFile version="debian8" />
                    <FilesystemPermissions version="debian8" />
                </Group>
                <Group name="Configuration">
                    <Auditd version="debian8" />
                    <BootupManager version="debian8" />
                    <Cron version="debian8" />
                    <LibpamCracklib version="debian8" />
                    <PasswordPolicy version="debian8" />
                    <AccountLockoutPolicy version="debian8" />
                </Group>
                <Group name="Logs">
                    <SystemLog version="debian8" />
                </Group>
                <Group name="References">
                    <DefaultGroups version="debian8" />
                    <DefaultUsers version="debian8" />
                    <OpenFile version="debian8" />
                    <Terminal version="debian8" />
                    <SystemSettings version="debian8" />
                </Group>
            </Template>
        );
    }
}

ReactDOM.render(<Debian8 />, document.getElementById("app"));

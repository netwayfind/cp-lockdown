class WindowsServer2008R2 extends React.Component {
    render() {
        return (
            <Template name="Windows Server 2008 R2">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups version="win2008r2" />
                    <AutomaticLogin version="win2008r2" />
                </Group>
                <Group name="Installation Cleanup">
                    <AddRemovePrograms version="win2008r2" />
                    <WindowsFeatures version="win2008r2" />
                    <StartupPrograms version="win2008r2" />
                    <Services version="win2008r2" />
                    <TaskScheduler version="win2008r2" />
                    <DiskCleanup version="win2008r2" />
                </Group>
                <Group name="Networking">
                    <InternetConnectionSharing version="win2008r2" />
                    <RemoteAssistanceAndRemoteDesktop version="win2008r2" />
                    <WindowsFirewall version="win2008r2" />
                    <SharedFolders version="win2008r2" />
                    <CrowdInspect version="win2008r2" />
                </Group>
                <Group name="Policies">
                    <PasswordPolicy version="win2008r2" />
                    <AccountLockoutPolicy version="win2008r2" />
                    <AuditPolicy version="win2008r2" />
                    <UserRightsAssignment version="win2008r2" />
                    <SecurityOptions version="win2008r2" />
                    <AdvancedAuditPolicyConfiguration version="win2008r2" />
                    <LocalGroupPolicyEditor version="win2008r2" />
                </Group>
                <Group name="Scans">
                    <MicrosoftBaselineSecurityAnalyzer version="win2008r2" />
                    <MicrosoftSecurityEssentials version="win2008r2" />
                    <AntiMalwareTools version="win2008r2" />
                </Group>
                <Group name="Filesystem">
                    <ShowHiddenFilesAndFolders version="win2008r2" />
                    <FindUnauthorizedFiles version="win2008r2" />
                    <UsersFolder version="win2008r2" />
                    <ProgramFiles version="win2008r2" />
                    <ProgramFilesx86 version="win2008r2" />
                    <HostsFile version="win2008r2" />
                </Group>
                <Group name="Updates">
                    <ServicePacks version="win2008r2" />
                    <AutomaticUpdates version="win2008r2" />
                    <WindowsUpdate version="win2008r2" />
                </Group>
                <Group name="Configuration">
                    <InternetExplorer version="win2008r2" />
                    <WindowsServerRoles version="win2008r2" />
                </Group>
                <Group name="Logs">
                    <EventViewer version="win2008r2" />
                </Group>
                <Group name="Reference">
                    <AdministrativeTools version="win2008r2" />
                    <CDrive version="win2008r2" />
                    <CommandPrompt version="win2008r2" />
                    <ControlPanel version="win2008r2" />
                    <Processes version="win2008r2" />
                    <TaskManager version="win2008r2" />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<WindowsServer2008R2 />, document.getElementById("app"));

class WindowsServer2016 extends React.Component {
    render() {
        return (
            <Template name="Windows Server 2016">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups version="win2016" />
                    <AutomaticLogin version="win2016" />
                </Group>
                <Group name="Installation Cleanup">
                    <AddRemovePrograms version="win2016" />
                    <WindowsFeatures version="win2016" />
                    <StartupPrograms version="win2016" />
                    <Services version="win2016" />
                    <TaskScheduler version="win2016" />
                    <DiskCleanup version="win2016" />
                </Group>
                <Group name="Networking">
                    <InternetConnectionSharing version="win2016" />
                    <RemoteAssistanceAndRemoteDesktop version="win2016" />
                    <WindowsFirewall version="win2016" />
                    <SharedFolders version="win2016" />
                    <CrowdInspect version="win2016" />
                </Group>
                <Group name="Policies">
                    <PasswordPolicy version="win2016" />
                    <AccountLockoutPolicy version="win2016" />
                    <AuditPolicy version="win2016" />
                    <UserRightsAssignment version="win2016" />
                    <SecurityOptions version="win2016" />
                    <AdvancedAuditPolicyConfiguration version="win2016" />
                    <LocalGroupPolicyEditor version="win2016" />
                </Group>
                <Group name="Scans">
                    <MicrosoftBaselineSecurityAnalyzer version="win2016" />
                    <MicrosoftSecurityEssentials version="win2016" />
                    <AntiMalwareTools version="win2016" />
                </Group>
                <Group name="Filesystem">
                    <ShowHiddenFilesAndFolders version="win2016" />
                    <FindUnauthorizedFiles version="win2016" />
                    <UsersFolder version="win2016" />
                    <ProgramFiles version="win2016" />
                    <ProgramFilesx86 version="win2016" />
                    <HostsFile version="win2016" />
                </Group>
                <Group name="Updates">
                    <ServicePacks version="win2016" />
                    <AutomaticUpdates version="win2016" />
                    <WindowsUpdate version="win2016" />
                </Group>
                <Group name="Configuration">
                    <InternetExplorer version="win2016" />
                    <WindowsServerRoles version="win2016" />
                </Group>
                <Group name="Logs">
                    <EventViewer version="win2016" />
                </Group>
                <Group name="Reference">
                    <AdministrativeTools version="win2016" />
                    <CDrive version="win2016" />
                    <CommandPrompt version="win2016" />
                    <ControlPanel version="win2016" />
                    <Processes version="win2016" />
                    <TaskManager version="win2016" />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<WindowsServer2016 />, document.getElementById("app"));

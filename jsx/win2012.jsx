class WindowsServer2012 extends React.Component {
    render() {
        return (
            <Template name="Windows Server 2012">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups version="win2012" />
                    <AutomaticLogin version="win2012" />
                </Group>
                <Group name="Installation Cleanup">
                    <AddRemovePrograms version="win2012" />
                    <WindowsFeatures version="win2012" />
                    <StartupPrograms version="win2012" />
                    <Services version="win2012" />
                    <TaskScheduler version="win2012" />
                    <DiskCleanup version="win2012" />
                </Group>
                <Group name="Networking">
                    <InternetConnectionSharing version="win2012" />
                    <RemoteAssistanceAndRemoteDesktop version="win2012" />
                    <WindowsFirewall version="win2012" />
                    <SharedFolders version="win2012" />
                    <CrowdInspect version="win2012" />
                </Group>
                <Group name="Policies">
                    <PasswordPolicy version="win2012" />
                    <AccountLockoutPolicy version="win2012" />
                    <AuditPolicy version="win2012" />
                    <UserRightsAssignment version="win2012" />
                    <SecurityOptions version="win2012" />
                    <AdvancedAuditPolicyConfiguration version="win2012" />
                    <LocalGroupPolicyEditor version="win2012" />
                </Group>
                <Group name="Scans">
                    <MicrosoftBaselineSecurityAnalyzer version="win2012" />
                    <MicrosoftSecurityEssentials version="win2012" />
                    <AntiMalwareTools version="win2012" />
                </Group>
                <Group name="Filesystem">
                    <ShowHiddenFilesAndFolders version="win2012" />
                    <FindUnauthorizedFiles version="win2012" />
                    <UsersFolder version="win2012" />
                    <ProgramFiles version="win2012" />
                    <ProgramFilesx86 version="win2012" />
                    <HostsFile version="win2012" />
                </Group>
                <Group name="Updates">
                    <ServicePacks version="win2012" />
                    <AutomaticUpdates version="win2012" />
                    <WindowsUpdate version="win2012" />
                </Group>
                <Group name="Configuration">
                    <InternetExplorer version="win2012" />
                </Group>
                <Group name="Logs">
                    <EventViewer version="win2012" />
                </Group>
                <Group name="Reference">
                    <AdministrativeTools version="win2012" />
                    <CDrive version="win2012" />
                    <CommandPrompt version="win2012" />
                    <ControlPanel version="win2012" />
                    <Processes version="win2012" />
                    <TaskManager version="win2012" />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<WindowsServer2012 />, document.getElementById("app"));

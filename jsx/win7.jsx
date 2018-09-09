class Windows7 extends React.Component {
    render() {
        return (
            <Template name="Windows 7">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups version="win7" />
                    <AutomaticLogin version="win7" />
                </Group>
                <Group name="Installation Cleanup">
                    <AddRemovePrograms version="win7" />
                    <WindowsFeatures version="win7" />
                    <StartupPrograms version="win7" />
                    <Services version="win7" />
                    <TaskScheduler version="win7" />
                    <InternetExplorer version="win7" />
                    <DiskCleanup version="win7" />
                </Group>
                <Group name="Network Resources">
                    <InternetConnectionSharing version="win7" />
                    <SharedFolders version="win7" />
                    <CrowdInspect version="win7" />
                </Group>
                <Group name="Remote Access">
                    <RemoteAssistanceAndRemoteDesktop version="win7" />
                    <WindowsFirewall version="win7" />
                </Group>
                <Group name="Policies">
                    <PasswordPolicy version="win7" />
                    <AccountLockoutPolicy version="win7" />
                    <AuditPolicy version="win7" />
                    <UserRightsAssignment version="win7" />
                    <SecurityOptions version="win7" />
                    <AdvancedAuditPolicyConfiguration version="win7" />
                    <LocalGroupPolicyEditor version="win7" />
                </Group>
                <Group name="Scans">
                    <MicrosoftBaselineSecurityAnalyzer version="win7" />
                    <MicrosoftSecurityEssentials version="win7" />
                    <AntiMalwareTools version="win7" />
                </Group>
                <Group name="Filesystem">
                    <ShowHiddenFilesAndFolders version="win7" />
                    <FindUnauthorizedFiles version="win7" />
                    <UsersFolder version="win7" />
                    <ProgramFiles version="win7" />
                    <ProgramFilesx86 version="win7" />
                    <HostsFile version="win7" />
                </Group>
                <Group name="Updates">
                    <AutomaticUpdates version="win7" />
                    <ServicePacks version="win7" />
                    <WindowsUpdate version="win7" />
                </Group>
                <Group name="Logs">
                    <EventViewer version="win7" />
                </Group>
                <Group name="Reference">
                    <AdministrativeTools version="win7" />
                    <CDrive version="win7" />
                    <CommandPrompt version="win7" />
                    <ControlPanel version="win7" />
                    <Processes version="win7" />
                    <TaskManager version="win7" />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<Windows7 />, document.getElementById("app"));

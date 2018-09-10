class Windows8 extends React.Component {
    render() {
        return (
            <Template name="Windows 8">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups version="win8" />
                    <AutomaticLogin version="win8" />
                </Group>
                <Group name="Installation Cleanup">
                    <AddRemovePrograms version="win8" />
                    <WindowsFeatures version="win8" />
                    <StartupPrograms version="win8" />
                    <Services version="win8" />
                    <TaskScheduler version="win8" />
                    <InternetExplorer version="win8" />
                    <DiskCleanup version="win8" />
                </Group>
                <Group name="Network Resources">
                    <InternetConnectionSharing version="win8" />
                    <SharedFolders version="win8" />
                    <CrowdInspect version="win8" />
                </Group>
                <Group name="Remote Access">
                    <RemoteAssistanceAndRemoteDesktop version="win8" />
                    <WindowsFirewall version="win8" />
                </Group>
                <Group name="Policies">
                    <PasswordPolicy version="win8" />
                    <AccountLockoutPolicy version="win8" />
                    <AuditPolicy version="win8" />
                    <UserRightsAssignment version="win8" />
                    <SecurityOptions version="win8" />
                    <AdvancedAuditPolicyConfiguration version="win8" />
                    <LocalGroupPolicyEditor version="win8" />
                </Group>
                <Group name="Scans">
                    <MicrosoftBaselineSecurityAnalyzer version="win8" />
                    <MicrosoftSecurityEssentials version="win8" />
                    <AntiMalwareTools version="win8" />
                </Group>
                <Group name="Filesystem">
                    <ShowHiddenFilesAndFolders version="win8" />
                    <FindUnauthorizedFiles version="win8" />
                    <UsersFolder version="win8" />
                    <ProgramFiles version="win8" />
                    <ProgramFilesx86 version="win8" />
                    <HostsFile version="win8" />
                </Group>
                <Group name="Updates">
                    <AutomaticUpdates version="win8" />
                    <ServicePacks version="win8" />
                    <WindowsUpdate version="win8" />
                </Group>
                <Group name="Logs">
                    <EventViewer version="win8" />
                </Group>
                <Group name="Reference">
                    <AdministrativeTools version="win8" />
                    <CDrive version="win8" />
                    <CommandPrompt version="win8" />
                    <ControlPanel version="win8" />
                    <Processes version="win8" />
                    <TaskManager version="win8" />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<Windows8 />, document.getElementById("app"));

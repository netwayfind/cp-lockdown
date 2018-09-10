class Windows8Dot1 extends React.Component {
    render() {
        return (
            <Template name="Windows 8.1">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups version="win8.1" />
                    <AutomaticLogin version="win8.1" />
                </Group>
                <Group name="Installation Cleanup">
                    <AddRemovePrograms version="win8.1" />
                    <WindowsFeatures version="win8.1" />
                    <StartupPrograms version="win8.1" />
                    <Services version="win8.1" />
                    <TaskScheduler version="win8.1" />
                    <InternetExplorer version="win8.1" />
                    <DiskCleanup version="win8.1" />
                </Group>
                <Group name="Network Resources">
                    <InternetConnectionSharing version="win8.1" />
                    <SharedFolders version="win8.1" />
                    <CrowdInspect version="win8.1" />
                </Group>
                <Group name="Remote Access">
                    <RemoteAssistanceAndRemoteDesktop version="win8.1" />
                    <WindowsFirewall version="win8.1" />
                </Group>
                <Group name="Policies">
                    <PasswordPolicy version="win8.1" />
                    <AccountLockoutPolicy version="win8.1" />
                    <AuditPolicy version="win8.1" />
                    <UserRightsAssignment version="win8.1" />
                    <SecurityOptions version="win8.1" />
                    <AdvancedAuditPolicyConfiguration version="win8.1" />
                    <LocalGroupPolicyEditor version="win8.1" />
                </Group>
                <Group name="Scans">
                    <MicrosoftBaselineSecurityAnalyzer version="win8.1" />
                    <MicrosoftSecurityEssentials version="win8.1" />
                    <AntiMalwareTools version="win8.1" />
                </Group>
                <Group name="Filesystem">
                    <ShowHiddenFilesAndFolders version="win8.1" />
                    <FindUnauthorizedFiles version="win8.1" />
                    <UsersFolder version="win8.1" />
                    <ProgramFiles version="win8.1" />
                    <ProgramFilesx86 version="win8.1" />
                    <HostsFile version="win8.1" />
                </Group>
                <Group name="Updates">
                    <AutomaticUpdates version="win8.1" />
                    <ServicePacks version="win8.1" />
                    <WindowsUpdate version="win8.1" />
                </Group>
                <Group name="Logs">
                    <EventViewer version="win8.1" />
                </Group>
                <Group name="Reference">
                    <AdministrativeTools version="win8.1" />
                    <CDrive version="win8.1" />
                    <CommandPrompt version="win8.1" />
                    <ControlPanel version="win8.1" />
                    <Processes version="win8.1" />
                    <TaskManager version="win8.1" />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<Windows8Dot1 />, document.getElementById("app"));

class Windows10 extends React.Component {
    render() {
        return (
            <Template name="Windows 10">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups version="win10" />
                    <AutomaticLogin version="win10" />
                </Group>
                <Group name="Installation Cleanup">
                    <AddRemovePrograms version="win10" />
                    <WindowsFeatures version="win10" />
                    <StartupPrograms version="win10" />
                    <Services version="win10" />
                    <TaskScheduler version="win10" />
                    <DiskCleanup version="win10" />
                </Group>
                <Group name="Networking">
                    <InternetConnectionSharing version="win10" />
                    <RemoteAssistanceAndRemoteDesktop version="win10" />
                    <WindowsFirewall version="win10" />
                    <SharedFolders version="win10" />
                    <CrowdInspect version="win10" />
                </Group>
                <Group name="Policies">
                    <PasswordPolicy version="win10" />
                    <AccountLockoutPolicy version="win10" />
                    <AuditPolicy version="win10" />
                    <UserRightsAssignment version="win10" />
                    <SecurityOptions version="win10" />
                    <AdvancedAuditPolicyConfiguration version="win10" />
                    <LocalGroupPolicyEditor version="win10" />
                </Group>
                <Group name="Scans">
                    <MicrosoftBaselineSecurityAnalyzer version="win10" />
                    <WindowsDefender version="win10" />
                    <AntiMalwareTools version="win10" />
                </Group>
                <Group name="Filesystem">
                    <ShowHiddenFilesAndFolders version="win10" />
                    <FindUnauthorizedFiles version="win10" />
                    <UsersFolder version="win10" />
                    <ProgramFiles version="win10" />
                    <ProgramFilesx86 version="win10" />
                    <HostsFile version="win10" />
                </Group>
                <Group name="Updates">
                    <ServicePacks version="win10" />
                    <AutomaticUpdates version="win10" />
                    <WindowsUpdate version="win10" />
                </Group>
                <Group name="Configuration">
                    <InternetExplorer version="win10" />
                </Group>
                <Group name="Logs">
                    <EventViewer version="win10" />
                </Group>
                <Group name="Reference">
                    <AdministrativeTools version="win10" />
                    <CDrive version="win10" />
                    <CommandPrompt version="win10" />
                    <ControlPanel version="win10" />
                    <Processes version="win10" />
                    <TaskManager version="win10" />
                    <WindowsSettings version="win10" />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<Windows10 />, document.getElementById("app"));

class WindowsServer2008 extends React.Component {
    render() {
        return (
            <Template name="Windows Server 2008">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups version="win2008" />
                    <AutomaticLogin version="win2008" />
                </Group>
                <Group name="Installation Cleanup">
                    <AddRemovePrograms version="win2008" />
                    <WindowsFeatures version="win2008" />
                    <StartupPrograms version="win2008" />
                    <Services version="win2008" />
                    <TaskScheduler version="win2008" />
                    <DiskCleanup version="win2008" />
                </Group>
                <Group name="Networking">
                    <InternetConnectionSharing version="win2008" />
                    <RemoteAssistanceAndRemoteDesktop version="win2008" />
                    <WindowsFirewall version="win2008" />
                    <SharedFolders version="win2008" />
                    <CrowdInspect version="win2008" />
                </Group>
                <Group name="Policies">
                    <PasswordPolicy version="win2008" />
                    <AccountLockoutPolicy version="win2008" />
                    <AuditPolicy version="win2008" />
                    <UserRightsAssignment version="win2008" />
                    <SecurityOptions version="win2008" />
                    <AdvancedAuditPolicyConfiguration version="win2008" />
                    <LocalGroupPolicyEditor version="win2008" />
                </Group>
                <Group name="Scans">
                    <MicrosoftBaselineSecurityAnalyzer version="win2008" />
                    <MicrosoftSecurityEssentials version="win2008" />
                    <AntiMalwareTools version="win2008" />
                </Group>
                <Group name="Filesystem">
                    <ShowHiddenFilesAndFolders version="win2008" />
                    <FindUnauthorizedFiles version="win2008" />
                    <UsersFolder version="win2008" />
                    <ProgramFiles version="win2008" />
                    <ProgramFilesx86 version="win2008" />
                    <HostsFile version="win2008" />
                </Group>
                <Group name="Updates">
                    <ServicePacks version="win2008" />
                    <AutomaticUpdates version="win2008" />
                    <WindowsUpdate version="win2008" />
                </Group>
                <Group name="Configuration">
                    <InternetExplorer version="win2008" />
                </Group>
                <Group name="Logs">
                    <EventViewer version="win2008" />
                </Group>
                <Group name="Reference">
                    <AdministrativeTools version="win2008" />
                    <CDrive version="win2008" />
                    <CommandPrompt version="win2008" />
                    <ControlPanel version="win2008" />
                    <Processes version="win2008" />
                    <TaskManager version="win2008" />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<WindowsServer2008 />, document.getElementById("app"));

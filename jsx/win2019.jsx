class WindowsServer2019 extends React.Component {
    render() {
        return (
            <Template name="Windows Server 2019">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups version="win2019" />
                    <AutomaticLogin version="win2019" />
                </Group>
                <Group name="Installation Cleanup">
                    <AddRemovePrograms version="win2019" />
                    <WindowsFeatures version="win2019" />
                    <StartupPrograms version="win2019" />
                    <Services version="win2019" />
                    <TaskScheduler version="win2019" />
                    <DiskCleanup version="win2019" />
                </Group>
                <Group name="Networking">
                    <InternetConnectionSharing version="win2019" />
                    <RemoteAssistanceAndRemoteDesktop version="win2019" />
                    <WindowsFirewall version="win2019" />
                    <SharedFolders version="win2019" />
                    <CrowdInspect version="win2019" />
                </Group>
                <Group name="Policies">
                    <PasswordPolicy version="win2019" />
                    <AccountLockoutPolicy version="win2019" />
                    <AuditPolicy version="win2019" />
                    <UserRightsAssignment version="win2019" />
                    <SecurityOptions version="win2019" />
                    <AdvancedAuditPolicyConfiguration version="win2019" />
                    <LocalGroupPolicyEditor version="win2019" />
                </Group>
                <Group name="Scans">
                    <MicrosoftBaselineSecurityAnalyzer version="win2019" />
                    <MicrosoftSafetyScanner version="win2019" />
                    <AntiMalwareTools version="win2019" />
                </Group>
                <Group name="Filesystem">
                    <ShowHiddenFilesAndFolders version="win2019" />
                    <FindUnauthorizedFiles version="win2019" />
                    <UsersFolder version="win2019" />
                    <ProgramFiles version="win2019" />
                    <ProgramFilesx86 version="win2019" />
                    <HostsFile version="win2019" />
                </Group>
                <Group name="Updates">
                    <ServicePacks version="win2019" />
                    <AutomaticUpdates version="win2019" />
                    <WindowsUpdate version="win2019" />
                </Group>
                <Group name="Configuration">
                    <InternetExplorer version="win2019" />
                    <WindowsServerRoles version="win2019" />
                </Group>
                <Group name="Logs">
                    <EventViewer version="win2019" />
                </Group>
                <Group name="Reference">
                    <AdministrativeTools version="win2019" />
                    <CDrive version="win2019" />
                    <CommandPrompt version="win2019" />
                    <ControlPanel version="win2019" />
                    <Processes version="win2019" />
                    <TaskManager version="win2019" />
                    <WindowsSettings version="win2019" />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<WindowsServer2019 />, document.getElementById("app"));

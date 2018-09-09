class Windows7 extends React.Component {
    render() {
        return (
            <Template name="Windows 7">
                <Group name="Users and Groups">
                    <LocalUsersAndGroups />
                    <AutomaticLogin />
                </Group>
                <Group name="Installation Cleanup">
                    <AddRemovePrograms />
                    <WindowsFeatures />
                    <StartupPrograms />
                    <Services />
                    <TaskScheduler/>
                    <InternetExplorer />
                    <DiskCleanup />
                </Group>
                <Group name="Network Resources">
                    <InternetConnectionSharing />
                    <SharedFolders />
                    <CrowdInspect />
                </Group>
                <Group name="Remote Access">
                    <RemoteAssistanceAndRemoteDesktop />
                    <WindowsFirewall />
                </Group>
                <Group name="Policies">
                    <PasswordPolicy />
                    <AccountLockoutPolicy />
                    <AuditPolicy />
                    <UserRightsAssignment />
                    <SecurityOptions />
                    <AdvancedAuditPolicyConfiguration />
                    <LocalGroupPolicyEditor />
                </Group>
                <Group name="Scans">
                    <MicrosoftBaselineSecurityAnalyzer />
                    <MicrosoftSecurityEssentials />
                    <AntiMalwareTools />
                </Group>
                <Group name="Filesystem">
                    <ShowHiddenFilesAndFolders />
                    <FindUnauthorizedFiles />
                    <UsersFolder />
                    <ProgramFiles />
                    <ProgramFilesx86 />
                    <HostsFile/>
                </Group>
                <Group name="Updates">
                    <AutomaticUpdates />
                    <ServicePacks />
                    <WindowsUpdate />
                </Group>
                <Group name="Logs">
                    <EventViewer />
                </Group>
                <Group name="Reference">
                    <AdministrativeTools />
                    <CDrive />
                    <CommandPrompt />
                    <ControlPanel />
                    <Processes />
                    <TaskManager />
                </Group>
            </Template>
        )
    }
}

ReactDOM.render(<Windows7 />, document.getElementById("app"));

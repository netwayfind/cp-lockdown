class AccountLockoutPolicy extends Section {
    displayName() {
        return "Account Lockout Policy";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>{React.createElement(OpenFile).type.prototype.getLink()} /etc/pam.d/common-auth</li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Add the following to the end of the file:
                        <ul>
                            <li>auth required pam_tally2.so deny=5 onerr=fail unlock_time=1800</li>
                            <li>this will set lockout to 5 attempts and lock out for 1800 seconds (30 minutes)</li>
                        </ul>
                    </li>
                </ol>
            </React.Fragment>
        );

    }
}

class Applications extends Section {
    displayName() {
        return "Applications";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        if (this.props.version === "ubuntu") {
            return this.ubuntu();
        }
        else if (this.props.version === "ubuntu16.04") {
            return this.ubuntu();
        }
        else if (this.props.version === "debian8") {
            return this.debian();
        }
        return "unknown";
    }

    ubuntu() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Ubuntu icon button</li>
                    <li>Type <strong>Ubuntu Software Center</strong></li>
                    <li>Click on icon</li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Press <strong>Installed</strong> button</li>
                    <li>Review readme for applications or categories that must be removed</li>
                    <li>For each application category (e.g. Accessories)
                        <ul>
                            <li>Check against readme if it should be removed</li>
                            <li>It's safer to leave program alone than to remove it</li>
                            <li>To remove application, click on it, then press <strong>Remove</strong> button</li>
                        </ul>
                    </li>
                </ol>
            </React.Fragment>
        );
    }

    debian() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press <strong>Activities</strong></li>
                    <li>Type <strong>Software</strong></li>
                    <li>Click on icon</li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Press <strong>Installed</strong> button</li>
                    <li>Review readme for applications or categories that must be removed</li>
                    <li>For each entry:
                        <ul>
                            <li>Check against readme if it should be removed</li>
                            <li>It's safer to leave program alone than to remove it</li>
                            <li>To remove application, click on <strong>Remove</strong> button</li>
                        </ul>
                    </li>
                </ol>
            </React.Fragment>
        );
    }
}

class Auditd extends Section {
    displayName() {
        return "auditd";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo apt-get install auditd</li>
                    <li>sudo auditctl -e 1</li>
                </ol>
            </React.Fragment>
        )
    }
}

class BootupManager extends Section {
    displayName() {
        return "boot-up manager";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo apt-get install bum</li>
                    <li>sudo bum</li>
                    <li>Click checkmark for <strong>Advanced</strong></li>
                    <li>Review list of programs that are set to start automatically at boot</li>
                    <li>Add checkmark for services required to be running</li>
                    <li>Remove checkmark for services that are not necessary to run</li>
                </ol>
                Reference: <a href="https://help.ubuntu.com/community/BootServices">https://help.ubuntu.com/community/BootServices</a>
            </React.Fragment>
        );
    }
}
class Chkrootkit extends Section {
    displayName() {
        return "chkrootkit";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo apt-get install chkrootkit</li>
                    <li>Follow installation instructions</li>
                    <li>sudo chkrootkit</li>
                    <li>After scan completes, review findings.</li>
                </ol>

            </React.Fragment>
        );
    }
}

class Cron extends Section {
    displayName() {
        return "cron";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                Review the following files or directories:
                <ul>
                    <li>/etc/crontab</li>
                    <li>/etc/cron.d/</li>
                    <li>/etc/cron.hourly/</li>
                    <li>/etc/cron.daily/</li>
                    <li>/etc/cron.weekly/</li>
                    <li>/etc/cron.monthly/</li>
                    <li>/var/spool/cron/crontabs/</li>
                </ul>
                Reference: <a href="https://help.ubuntu.com/community/CronHowto">https://help.ubuntu.com/community/CronHowto</a>
            </React.Fragment>
        );
    }
}

class DefaultGroups extends Section {
    displayName() {
        return "Default Groups";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        if (this.props.version === "ubuntu") {
            return this.ubuntu();
        }
        else if (this.props.version === "ubuntu16.04") {
            return this.ubuntu();
        }
        else if (this.props.version === "debian8") {
            return this.debian();
        }
        return "unknown";
    }

    ubuntu() {
        return (
            <React.Fragment>
                <ul>
                    <li>root</li>
                    <li>daemon</li>
                    <li>bin</li>
                    <li>sys</li>
                    <li>adm</li>
                    <li>tty</li>
                    <li>disk</li>
                    <li>lp</li>
                    <li>mail</li>
                    <li>news</li>
                    <li>uucp</li>
                    <li>man</li>
                    <li>proxy</li>
                    <li>kmem</li>
                    <li>dialout</li>
                    <li>fax</li>
                    <li>voice</li>
                    <li>cdrom</li>
                    <li>floppy</li>
                    <li>tape</li>
                    <li>sudo</li>
                    <li>audio</li>
                    <li>dip</li>
                    <li>www-data</li>
                    <li>backup</li>
                    <li>operator</li>
                    <li>list</li>
                    <li>irc</li>
                    <li>src</li>
                    <li>gnats</li>
                    <li>shadow</li>
                    <li>utmp</li>
                    <li>video</li>
                    <li>sasl</li>
                    <li>plugdev</li>
                    <li>staff</li>
                    <li>games</li>
                    <li>users</li>
                    <li>nogroup</li>
                    <li>libuuid</li>
                    <li>crontab</li>
                    <li>syslog</li>
                    <li>fuse</li>
                    <li>messagebus</li>
                    <li>bluetooth</li>
                    <li>scanner</li>
                    <li>colord</li>
                    <li>lpadmin</li>
                    <li>ssl-cert</li>
                    <li>lightdm</li>
                    <li>nopasswdlogin</li>
                    <li>netdev</li>
                    <li>whoopsie</li>
                    <li>mlocate</li>
                    <li>ssh</li>
                    <li>avahi-autoipd</li>
                    <li>avahi</li>
                    <li>pulse</li>
                    <li>pulse-access</li>
                    <li>utempter</li>
                    <li>rtkit</li>
                    <li>saned</li>
                    <li>ubuntu</li>
                    <li>sambashare</li>
                </ul>
            </React.Fragment>
        );
    }

    debian() {
        return (
            <React.Fragment>
                <ul>
                    <li>root</li>
                    <li>daemon</li>
                    <li>bin</li>
                    <li>sys</li>
                    <li>adm</li>
                    <li>tty</li>
                    <li>disk</li>
                    <li>lp</li>
                    <li>mail</li>
                    <li>news</li>
                    <li>uucp</li>
                    <li>man</li>
                    <li>proxy</li>
                    <li>kmem</li>
                    <li>dialout</li>
                    <li>fax</li>
                    <li>voice</li>
                    <li>cdrom</li>
                    <li>floppy</li>
                    <li>tape</li>
                    <li>sudo</li>
                    <li>audio</li>
                    <li>dip</li>
                    <li>www-data</li>
                    <li>backup</li>
                    <li>operator</li>
                    <li>list</li>
                    <li>irc</li>
                    <li>src</li>
                    <li>gnats</li>
                    <li>shadow</li>
                    <li>utmp</li>
                    <li>video</li>
                    <li>sasl</li>
                    <li>plugdev</li>
                    <li>staff</li>
                    <li>games</li>
                    <li>users</li>
                    <li>nogroup</li>
                    <li>systemd-journal</li>
                    <li>systemd-timesync</li>
                    <li>systemd-network</li>
                    <li>systemd-resolve</li>
                    <li>systemd-bus-proxy</li>
                    <li>input</li>
                    <li>crontab</li>
                    <li>netdev</li>
                    <li>uuidd</li>
                    <li>rtkit</li>
                    <li>avahi-autoipd</li>
                    <li>messagebus</li>
                    <li>ssh</li>
                    <li>bluetooth</li>
                    <li>geoclue</li>
                    <li>pulse</li>
                    <li>pulse-access</li>
                    <li>scanner</li>
                    <li>avahi</li>
                    <li>colord</li>
                    <li>saned</li>
                    <li>Debian-gdm</li>
                </ul>
            </React.Fragment>
        );
    }
}

class DefaultUsers extends Section {
    displayName() {
        return "Default Users";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        if (this.props.version === "ubuntu") {
            return this.ubuntu();
        }
        else if (this.props.version === "ubuntu16.04") {
            return this.ubuntu();
        }
        else if (this.props.version === "debian8") {
            return this.debian();
        }
        return "unknown";
    }

    ubuntu() {
        return (
            <React.Fragment>
                <ul>
                    <li>root</li>
                    <li>daemon</li>
                    <li>bin</li>
                    <li>sys</li>
                    <li>sync</li>
                    <li>games</li>
                    <li>man</li>
                    <li>lp</li>
                    <li>mail</li>
                    <li>news</li>
                    <li>uucp</li>
                    <li>proxy</li>
                    <li>www-data</li>
                    <li>backup</li>
                    <li>list</li>
                    <li>irc</li>
                    <li>gnats</li>
                    <li>nobody</li>
                    <li>libuuid</li>
                    <li>syslog</li>
                    <li>messagebus</li>
                    <li>colord</li>
                    <li>lightdm</li>
                    <li>whoopsie</li>
                    <li>avahi-autoipd</li>
                    <li>avahi</li>
                    <li>usbmux</li>
                    <li>kernoops</li>
                    <li>pulse</li>
                    <li>rtkit</li>
                    <li>speech-dispatcher</li>
                    <li>dispatcher</li>
                    <li>hplip</li>
                    <li>saned</li>
                    <li>ubuntu</li>
                </ul>
            </React.Fragment>
        );
    }

    debian() {
        return (
            <React.Fragment>
                <ul>
                    <li>root</li>
                    <li>daemon</li>
                    <li>bin</li>
                    <li>sys</li>
                    <li>sync</li>
                    <li>games</li>
                    <li>man</li>
                    <li>lp</li>
                    <li>mail</li>
                    <li>news</li>
                    <li>uucp</li>
                    <li>proxy</li>
                    <li>www-data</li>
                    <li>backup</li>
                    <li>list</li>
                    <li>irc</li>
                    <li>gnats</li>
                    <li>nobody</li>
                    <li>systemd-timesync</li>
                    <li>systemd-network</li>
                    <li>systemd-resolve</li>
                    <li>systemd-bus-proxy</li>
                    <li>_apt</li>
                    <li>uuidd</li>
                    <li>rtkit</li>
                    <li>dnsmasq</li>
                    <li>avahi-autoipd</li>
                    <li>messagebus</li>
                    <li>usbmux</li>
                    <li>geoclue</li>
                    <li>speech-dispatcher</li>
                    <li>pulse</li>
                    <li>avahi</li>
                    <li>colord</li>
                    <li>saned</li>
                    <li>Debian-gdm</li>
                </ul>
            </React.Fragment>
        );
    }
}

class OpenFile extends Section {
    displayName() {
        return "Open file";
    }

    getLink() {
        return <SectionLink section={this} />
    }

    render() {
        return (
            <React.Fragment>
                Option 1 (gedit)
                <ul>
                    <li>sudo gedit [file path]</li>
                </ul>
                Option 2 (nano)
                <ul>
                    <li>sudo nano [file path]</li>
                </ul>
                Option 3 (vi or vim)
                <ul>
                    <li>sudo vi [file path]</li>
                    <li>sudo vim [file path]</li>
                </ul>
            </React.Fragment>
        );
    }
}

class FilesystemPermissions extends Section {
    displayName() {
        return "Filesystem Permissions";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>ls -la /
                        <br />
                        Default permissions:
                        <ul>
                            <li>drwxr-xr-x root root home</li>
                            <li>drwx------ root root root</li>
                        </ul>
                        To fix:
                        <ul>
                            <li>sudo chown root:root /home</li>
                            <li>sudo chmod 755 /home</li>
                            <li>sudo chown root:root /root</li>
                            <li>sudo chown 700 /root</li>
                        </ul>
                    </li>
                    <li>cd /home</li>
                    <li>ls -la
                    <br />
                        Default permissions for every user:
                        <ul>
                            <li>drwxr-xr-x &lt;user&gt; &lt;user group&gt; &lt;user&gt;</li>
                            <li>For example: drwxr-xr-x ubuntu ubuntu ubuntu</li>
                        </ul>
                        To fix:
                        <ul>
                            <li>sudo chown &lt;user&gt;:&lt;user group&gt; &lt;user folder&gt;</li>
                            <li>For example: sudo chown ubuntu:ubuntu ubuntu</li>
                            <li>sudo chmod 755 &lt;user folder&gt;</li>
                            <li>For example: sudo chmod 755 ubuntu</li>
                        </ul>
                    </li>
                </ol>
            </React.Fragment>
        );
    }
}

class FindUnauthorizedFiles extends Section {
    displayName() {
        return "Find Unauthorized Files";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Option 1</h3>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>find /home -name "*.mp3*"
                        <ul>
                            <li>This will search for .mp3 files in /home</li>
                        </ul>
                    </li>
                    <li>If there are any results, inspect the files and remove as necessary</li>
                    <li>Repeat from step 2 for the following file extensions
                        <ul>
                            <li>(music) - .mp3, .wav, .wma, .aac</li>
                            <li>(movie/video) - .mp4, .mov, .avi</li>
                        </ul>
                    </li>
                </ol>
                <h3>Option 2</h3>
                Manually search for files in all user directories and remove unauthorized files.
            </React.Fragment>
        );
    }
}

class Firewall extends Section {
    displayName() {
        return "Firewall";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Option 1: gufw</h3>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo apt-get update</li>
                    <li>sudo apt-get install gufw</li>
                    <li>sudo gufw</li>
                    <li>Set to the following settings:
                        <ul>
                            <li>Profile: Office</li>
                            <li>Status: ON</li>
                            <li>Incoming: Deny</li>
                            <li>Outgoing: Allow</li>
                        </ul>
                    </li>
                    <li>For new inbound rules
                        <ol>
                            <li>Click on Rules</li>
                            <li>Click on +</li>
                            <li>Click on Simple</li>
                            <li>Name: [set name here]</li>
                            <li>Policy: Allow</li>
                            <li>Direction: In</li>
                            <li>Protocol: [protocol]</li>
                            <li>Port: [port]</li>
                            <li>Click on Add</li>
                        </ol>
                    </li>
                </ol>
                <h3>Option 2: iptables</h3>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>Check IPv4 firewall rules
                        <ol>
                            <li>sudo iptables -nvL</li>
                        </ol>
                    </li>
                    <li>Reset IPv4 firewall rules
                        <ol>
                            <li>sudo iptables -F</li>
                            <li>sudo iptables -X</li>
                        </ol>
                    </li>
                    <li>Set default IPv4 firewall rules
                        <ol>
                            <li>sudo iptables -A INPUT -m state --state INVALID -j DROP</li>
                            <li>sudo iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT</li>
                            <li>sudo iptables -A INPUT -i lo -j ACCEPT</li>
                        </ol>
                    </li>
                    <li>Add allowed INPUT rule to IPv4 firewall
                        <ol>
                            <li>sudo iptables -A INPUT -p [protocol] --dport [port] -j ACCEPT</li>
                            <li>Check Readme for required services. Research any required ports that need to be opened on firewall.
                                <ul>
                                    <li>Example for SSH: sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT</li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                    <li>Set default IPv4 firewall policy
                        <ol>
                            <li>sudo iptables -P INPUT DROP</li>
                            <li>sudo iptables -P FORWARD DROP</li>
                            <li>sudo iptables -P OUTPUT ACCEPT</li>
                        </ol>
                    </li>
                    <li>Check IPv6 firewall rules
                        <ol>
                            <li>sudo ip6tables -nvL</li>
                        </ol>
                    </li>
                    <li>Reset IPv6 firewall rules
                        <ol>
                            <li>sudo ip6tables -F</li>
                            <li>sudo ip6tables -X</li>
                        </ol>
                    </li>
                    <li>Set default IPv6 firewall rules
                        <ol>
                            <li>sudo ip6tables -A INPUT -m state --state INVALID -j DROP</li>
                            <li>sudo ip6tables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT</li>
                            <li>sudo ip6tables -A INPUT -i lo -j ACCEPT</li>
                        </ol>
                    </li>
                    <li>Add allowed INPUT rule to IPv6 firewall
                        <ol>
                            <li>sudo ip6tables -A INPUT -p [protocol] --dport [port] -j ACCEPT</li>
                            <li>Check Readme for required services. Research any required ports that need to be opened on firewall.
                                <ul>
                                    <li>Example for SSH: sudo ip6tables -A INPUT -p tcp --dport 22 -j ACCEPT</li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                    <li>Set default IPv6 firewall policy
                        <ol>
                            <li>sudo ip6tables -P INPUT DROP</li>
                            <li>sudo ip6tables -P FORWARD DROP</li>
                            <li>sudo ip6tables -P OUTPUT ACCEPT</li>
                        </ol>
                    </li>
                </ol>
            </React.Fragment >
        );
    }
}

class Groups extends Section {
    displayName() {
        return "Groups";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>cat /etc/group</li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Check {React.createElement(DefaultGroups).type.prototype.getLink()}</li>
                    <ul>
                        <li>root group should be empty</li>
                        <li>sudo group should only have administrator users</li>
                        <li>users group should only have users specified in the readme</li>
                        <li>each user may have a corresponding group</li>
                    </ul>
                    <li>To add a user to a group:
                        <ul>
                            <li>sudo gpasswd -a [user] [group]</li>
                        </ul>
                    </li>
                    <li>To remove a user from a group:
                        <ul>
                            <li>sudo gpasswd -d [user] [group]</li>
                        </ul>
                    </li>
                </ol>
            </React.Fragment >
        );
    }
}

class GuestAccess extends Section {
    displayName() {
        return "Guest Access";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        if (this.props.version === "ubuntu") {
            return this.option1();
        }
        else if (this.props.version === "ubuntu16.04") {
            return this.option2();
        }
        else if (this.props.version === "debian8") {
            return this.option3();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <ol>
                    <li>{React.createElement(OpenFile).type.prototype.getLink()} /etc/lightdm/lightdm.conf</li>
                    <li>Make sure the file has the following content:
                        <p />
                        [SeatDefaults]
                        <br />
                        greeter-session=unity-greeter
                        <br />
                        allow-guest=false
                    </li>
                    <li>Note: Any mistakes will break the GUI</li>
                    <li>Save the file</li>
                    <li>sudo restart lightdm</li>
                    <li>The GUI should restart and guest access should be disabled.</li>
                </ol>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <ol>
                    <li>{React.createElement(OpenFile).type.prototype.getLink()} /etc/lightdm/lightdm.conf</li>
                    <li>Make sure the file has the following content:
                        <p />
                        [SeatDefaults]
                        <br />
                        greeter-session=unity-greeter
                        <br />
                        allow-guest=false
                    </li>
                    <li>Note: Any mistakes will break the GUI</li>
                    <li>Save the file</li>
                    <li>sudo systemctl restart lightdm</li>
                    <li>The GUI should restart and guest access should be disabled.</li>
                </ol>
            </React.Fragment>
        );
    }

    option3() {
        return "Not needed";
    }
}

class HostsFile extends Section {
    displayName() {
        return "Hosts File";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>cat /etc/hosts</li>
                </ol>
                <h3>Settings</h3>
                <ul>
                    <li>Disable any entry lines by adding a # to the start of the line</li>
                    <li>Default file entries:
                        <ul>
                            <li>127.0.0.1 localhost</li>
                            <li>127.0.1.1 ubuntu</li>
                        </ul>
                    </li>
                    <li>Ignore IPv6 lines</li>
                </ul>
            </React.Fragment>
        );
    }
}

class LibpamCracklib extends Section {
    displayName() {
        return "libpam-cracklib";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo apt-get install libpam-cracklib</li>
                </ol>
            </React.Fragment>
        );
    }
}

class NetworkConnections extends Section {
    displayName() {
        return "Network Connections";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        if (this.props.version === "ubuntu") {
            return this.option1();
        }
        else if (this.props.version === "ubuntu16.04") {
            return this.option1();
        }
        else if (this.props.version === "debian8") {
            return this.option2();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo netstat [options]</li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Check listening network connections</li>
                    <ol>
                        <li>netstat -ntulp</li>
                        <li>Make sure only necessary services have listening connections on the correct ports</li>
                    </ol>
                    <li>Check established network connections</li>
                    <ol>
                        <li>netstat -ntup</li>
                    </ol>
                </ol>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo netstat [options]</li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Check listening network connections</li>
                    <ol>
                        <li>ss -ntulp</li>
                        <li>Make sure only necessary services have listening connections on the correct ports</li>
                    </ol>
                    <li>Check established network connections</li>
                    <ol>
                        <li>ss -ntup</li>
                    </ol>
                </ol>
            </React.Fragment>
        );
    }
}

class PasswordPolicy extends Section {
    displayName() {
        return "Password Policy";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>{React.createElement(OpenFile).type.prototype.getLink()} /etc/pam.d/common-password</li>
                    <li>{React.createElement(OpenFile).type.prototype.getLink()} /etc/login.defs</li>
                </ol>
                <h3>Settings</h3>
                For /etc/pam.d/common-password
                <ol>
                    <li>Find the following line in the file:
                        <ul>
                            <li>password&nbsp;&nbsp;&nbsp;&nbsp;requisite&nbsp;&nbsp;&nbsp;&nbsp;pam_cracklib.so retry=3 minlen=8 difok=3</li>
                        </ul>
                    </li>
                    <li>To require at least 10 characters, change to the following:
                        <ul>
                            <li>minlen=10</li>
                        </ul>
                    </li>
                    <li>To require password complexity, add to the end of the line:
                        <ul>
                            <li>ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1</li>
                        </ul>
                    </li>
                    <li>The line should now look like the following
                        <ul>
                            <li>password&nbsp;&nbsp;&nbsp;&nbsp;requisite&nbsp;&nbsp;&nbsp;&nbsp;pam_cracklib.so retry=3 minlen=10 difok=3 ucredit=-1 lcredit=-1 dcredit=-1 ocredit=-1</li>
                        </ul>
                    </li>
                    <li>Find the following line in the file:
                        <ul>
                            <li>password&nbsp;&nbsp;&nbsp;&nbsp;[success=1 default=ignore]&nbsp;&nbsp;&nbsp;&nbsp;pam_unix.so obscure use_authtok try_first_pass sha512</li>
                        </ul>
                    </li>
                    <li>To remember last 5 passwords, add to the end of the line:
                        <ul>
                            <li>remember=5</li>
                        </ul>
                    </li>
                    <li>To require at least 10 characters, add to the end of the line:
                        <ul>
                            <li>minlen=10</li>
                        </ul>
                    </li>
                    <li>The line should now look like the following
                        <ul>
                            <li>password&nbsp;&nbsp;&nbsp;&nbsp;[success=1 default=ignore]&nbsp;&nbsp;&nbsp;&nbsp;pam_unix.so obscure use_authtok try_first_pass sha512 remember=5 minlen=10</li>
                        </ul>
                    </li>
                    <li>Save the file</li>
                </ol>
                For /etc/login.defs
                <ol>
                    <li>Find PASS_MAX_DAYS, set to 90</li>
                    <li>Find PASS_MIN_DAYS, set to 10</li>
                    <li>Find PASS_WARN_AGE, set to 7</li>
                </ol>
            </React.Fragment>
        );
    }
}

class Rkhunter extends Section {
    displayName() {
        return "rkhunter";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo apt-get install rhkunter</li>
                    <li>Follow installation instructions</li>
                    <li>sudo rhkunter --update</li>
                    <li>sudo rkhunter -c</li>
                    <li>Follow scan instructions</li>
                    <li>After scan completes, review findings, and fix issues</li>
                </ol>

            </React.Fragment>
        );
    }
}

class Services extends Section {
    displayName() {
        return "Services";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        if (this.props.version === "ubuntu") {
            return this.option1();
        }
        else if (this.props.version === "ubuntu16.04") {
            return this.option2();
        }
        else if (this.props.version === "debian8") {
            return this.option2();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                </ol>
                <h3>Settings</h3>
                Check status of all services:
                <ul>
                    <li>service --status-all</li>
                </ul>
                Check status of one service (may not always work)
                <ul>
                    <li>service [service-name] status</li>
                </ul>
                Other common service commands
                <ul>
                    <li>service [service-name] start</li>
                    <li>service [service-name] stop</li>
                    <li>service [service-name] restart</li>
                </ul>
                <h3>Disable service autostart</h3>
                <ul>
                    <li>service [service-name] stop</li>
                    <li>update-rc.d -f [service] remove</li>
                </ul>
                {this.services()}
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                </ol>
                <h3>Settings</h3>
                <p>Check status of all services</p>
                <ul>
                    <li>systemctl list-unit-files</li>
                </ul>
                <p>Check status of one service</p>
                <ul>
                    <li>systemctl status [service-name]</li>
                </ul>
                <p>Other common service commands</p>
                <ul>
                    <li>systemctl start [service-name]</li>
                    <li>systemctl stop [service-name]</li>
                    <li>systemctl restart [service-name]</li>
                </ul>
                <h3>Disable service autostart</h3>
                <ul>
                    <li>systemctl stop [service-name]</li>
                    <li>systemctl disable [service-name]</li>
                </ul>
                {this.services()}
            </React.Fragment>
        );
    }

    services() {
        return (
            <React.Fragment>
                <h3>Common Services</h3>
                The following services should be disabled if they are not required:
                <p />
                Database
                <ul>
                    <li>mysqld</li>
                    <li>postgres</li>
                </ul>
                E-mail
                <ul>
                    <li>dovecot</li>
                    <li>exim4</li>
                    <li>postfix</li>
                </ul>
                File Sharing
                <ul>
                    <li>nfs</li>
                    <li>nmbd</li>
                    <li>rpc.mountd</li>
                    <li>rpc.nfsd</li>
                    <li>smbd</li>
                    <li>vsftpd</li>
                </ul>
                Music
                <ul>
                    <li>mpd</li>
                </ul>
                Networking
                <ul>
                    <li>avahi-daemon</li>
                    <li>bind</li>
                    <li>dnsmasq</li>
                    <li>xinetd</li>
                    <li>inetd</li>
                    <li>sshd</li>
                    <li>telnet</li>
                </ul>
                Printing, Scanning
                <ul>
                    <li>cupsd</li>
                    <li>saned</li>
                </ul>
                Time
                <ul>
                    <li>ntpd</li>
                </ul>
                Web/Application Server
                <ul>
                    <li>apache2</li>
                    <li>httpd</li>
                    <li>jetty</li>
                    <li>nginx</li>
                    <li>tomcat</li>
                </ul>
            </React.Fragment>
        );
    }
}

class Sudo extends Section {
    displayName() {
        return "sudo";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                Option 1
                <ol>
                    <li>sudo visudo</li>
                </ol>
                Option 2
                <ol>
                    <li>{React.createElement(OpenFile).type.prototype.getLink()} /etc/sudoers</li>
                </ol><h3>Settings</h3>
                <ul>
                    <li>Comment lines start with #</li>
                    <li>The following are the default settings:
                        <ul>
                            <li>Defaults env_reset</li>
                            <li>Defaults mail_badpass</li>
                            <li>Defaults secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"</li>
                            <li>root ALL=(ALL:ALL) ALL</li>
                            <li>%admin ALL=(ALL) ALL</li>
                            <li>%sudo ALL=(ALL:ALL) ALL</li>
                        </ul>
                    </li>
                    <li>Comment out all other entries</li>
                </ul>
            </React.Fragment>
        );
    }
}

class SystemLog extends Section {
    displayName() {
        return "System Log";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        if (this.props.version === "ubuntu") {
            return this.ubuntu();
        }
        else if (this.props.version === "ubuntu16.04") {
            return this.ubuntu();
        }
        else if (this.props.version === "debian8") {
            return this.debian();
        }
        return "unknown";
    }

    ubuntu() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press Ubuntu icon</li>
                    <li>Type <strong>System Log</strong></li>
                    <li>Click on icon</li>
                </ol>
                <ul>
                    <li>Review logs prior to today for system changes</li>
                    <li>Pay attention to user accounts, especially root/sudo</li>
                </ul>
                Reference: <a href="https://help.ubuntu.com/community/LinuxLogFiles">https://help.ubuntu.com/community/LinuxLogFiles</a>
            </React.Fragment>
        );
    }

    debian() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Press <strong>Activities</strong></li>
                    <li>Type <strong>Logs</strong></li>
                    <li>Click on icon</li>
                </ol>
                <ul>
                    <li>Review logs prior to today for system changes</li>
                    <li>Pay attention to user accounts, especially root/sudo</li>
                </ul>
            </React.Fragment>
        );
    }
}

class SystemSettings extends Section {
    displayName() {
        return "System Settings";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        if (this.props.version === "ubuntu") {
            return this.ubuntu();
        }
        else if (this.props.version === "ubuntu16.04") {
            return this.ubuntu();
        }
        else if (this.props.version === "debian8") {
            return this.debian();
        }
        return "unknown";
    }

    ubuntu() {
        return (
            <React.Fragment>
                <ol>
                    <li>Press the gear-like icon at the top right of the screen. (Next to the current time)</li>
                    <li>Click on <b>System Settings</b></li>
                </ol>
            </React.Fragment>
        );
    }

    debian() {
        return (
            <React.Fragment>
                <ol>
                    <li>Press the Power icon at the top right of the screen.</li>
                    <li>Click on Settings icon (diagonal cross of screwdriver and wrench)</li>
                </ol>
            </React.Fragment>
        );
    }
}

class Terminal extends Section {
    displayName() {
        return "Terminal";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        if (this.props.version === "ubuntu") {
            return this.option1();
        }
        else if (this.props.version === "ubuntu16.04") {
            return this.option1();
        }
        else if (this.props.version === "debian8") {
            return this.option2();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                Option 1
                <ol>
                    <li>Press Ubuntu icon button</li>
                    <li>Type <strong>terminal</strong>, press Enter</li>
                </ol>
                Option 2
                <ol>
                    <li>Click on <strong>Applications</strong> menu</li>
                    <li>Go to <strong>Accessories</strong></li>
                    <li>Click on <strong>Terminal</strong></li>
                </ol>

            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <ol>
                    <li>Click on <strong>Applications</strong></li>
                    <li>Go to <strong>Utilities</strong></li>
                    <li>Click on <strong>Terminal</strong></li>
                </ol>
            </React.Fragment>
        );
    }
}

class Updates extends Section {
    displayName() {
        return "Updates";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        if (this.props.version === "ubuntu") {
            return this.option1();
        }
        else if (this.props.version === "ubuntu16.04") {
            return this.option2();
        }
        else if (this.props.version === "debian8") {
            return this.option3();
        }
        return "unknown";
    }

    option1() {
        return (
            <React.Fragment>
                <ol>
                    <li>Open {React.createElement(SystemSettings).type.prototype.getLink()}</li>
                    <li>Under <b>System</b> section, find and click on <b>Software &amp; Updates</b></li>
                    <li>Press <b>Revert</b> for default settings</li>
                    <li>For Ubuntu Software tab
                        <ol>
                            <li>[x] Canonical-supported free and open-source software (main)</li>
                            <li>[x] Community-maintained free and open-source software (universe)</li>
                            <li>[Optional] Proprietary drivers for devices (restricted)</li>
                            <li>[Optional] Software restricted by copyright or legal issues (multiverse)</li>
                            <li>For <strong>Download from:</strong>, select <strong>Other</strong></li>
                            <li>Click <strong>Select Best Server</strong>. Wait for tests to complete.</li>
                            <li>Click <strong>Choose Server</strong></li>
                        </ol>
                    </li>
                    <li>For Updates tab
                        <ol>
                            <li>[x] Important security updates (*-security)</li>
                            <li>[x] Recommended updates (*-updates)</li>
                            <li>[Optional] Pre-release updates (*-proposed)</li>
                            <li>[Optional] Unsupported updates (*-backports)</li>
                            <li>Automatic check for updates: Daily</li>
                            <li>When there are security updates: Display immediately</li>
                        </ol>
                    </li>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo apt-get update &amp;&amp; sudo apt-get upgrade -y</li>
                </ol>
            </React.Fragment>
        );
    }

    option2() {
        return (
            <React.Fragment>
                <ol>
                    <li>Open {React.createElement(SystemSettings).type.prototype.getLink()}</li>
                    <li>Under <b>System</b> section, find and click on <b>Software &amp; Updates</b></li>
                    <li>Press <b>Revert</b> for default settings</li>
                    <li>For Ubuntu Software tab
                        <ul>
                            <li>[x] Canonical-supported free and open-source software (main)</li>
                            <li>[x] Community-maintained free and open-source software (universe)</li>
                            <li>[x] Proprietary drivers for devices (restricted)</li>
                            <li>[x] Software restricted by copyright or legal issues (multiverse)</li>
                            <li>[ ] Source code</li>
                            <li>For <strong>Download from:</strong>, select <strong>Other</strong></li>
                            <li>Click <strong>Select Best Server</strong>. Wait for tests to complete.</li>
                            <li>Click <strong>Choose Server</strong></li>
                        </ul>
                    </li>
                    <li>For Updates tab
                        <ul>
                            <li>[x] Important security updates (*-security)</li>
                            <li>[x] Recommended updates (*-updates)</li>
                            <li>[x] Unsupported updates (*-backports)</li>
                            <li>Automatic check for updates: Daily</li>
                            <li>When there are security updates: Display immediately</li>
                            <li>When there are other updates: Display weekly</li>
                            <li>Notify me of a new Ubuntu version: For long-term support version</li>
                        </ul>
                    </li>
                    <li>For Developer Options
                        <ul>
                            <li>[ ] Pre-released updates (*-proposed)</li>
                        </ul>
                    </li>
                    <li>Click <strong>Close</strong></li>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo apt-get update &amp;&amp; sudo apt-get upgrade -y</li>
                </ol>
            </React.Fragment>
        );
    }

    option3() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Click on <strong>Activities</strong></li>
                    <li>Type <strong>Software &amp; Updates</strong></li>
                    <li>Click on icon</li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>For Debian Software tab
                        <ol>
                            <li>[x] Officially supported (main)</li>
                            <li>[Optional] DFSG-compatible Software with Non-Free Dependencies (contrib)</li>
                            <li>[Optional] Non-DFSG-compatible Software (non-free)</li>
                            <li>[ ] Source code</li>
                            <li>Download from: <strong>Server for United States</strong></li>
                        </ol>
                    </li>
                    <li>For Updates tab
                        <ol>
                            <li>[x] Security updates (*/updates)</li>
                            <li>[x] Recommended updates (*-updates)</li>
                            <li>Automatic check for updates: Daily</li>
                            <li>When there are security updates: Download and install automatically</li>
                        </ol>
                    </li>
                    <li>Click Close</li>
                    <li>If pop-up for information about available software is out-of-date, click Close</li>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>sudo apt-get update &amp;&amp; sudo apt-get upgrade -y</li>
                </ol>
            </React.Fragment>
        );
    }
}

class Users extends Section {
    displayName() {
        return "Users";
    }

    getLink() {
        return <SectionLink section={this} />
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Location</h3>
                <ol>
                    <li>Open {React.createElement(Terminal).type.prototype.getLink()}</li>
                    <li>cat /etc/passwd</li>
                </ol>
                <h3>Settings</h3>
                <ol>
                    <li>Check {React.createElement(DefaultUsers).type.prototype.getLink()}</li>
                    <ul>
                        <li>Check that the users specified in the readme exist. Double check the default users. Look out for unmentioned users.</li>
                        <li>Line reference = [user]:x:[user id]:[group id]:[description]:[home directory]:[default shell]</li>
                        <li>User ID number less than 1000 are hidden users</li>
                        <li>only user root should have User ID of 0</li>
                    </ul>
                    <li>To disable a user (unable to log in, keep files):</li>
                    <ul>
                        <li>sudo passwd -l [user]</li>
                    </ul>
                    <li>To remove a user and their files:</li>
                    <ul>
                        <li>sudo userdel -r [user]</li>
                    </ul>
                    <li>To add a user:</li>
                    <ul>
                        <li>sudo useradd [user] -m -s /bin/bash</li>
                    </ul>
                    <li>Update all allowed users' passwords (including root)</li>
                    <ul>
                        <li>sudo passwd [user]</li>
                        <li>Write down user and password for reference</li>
                    </ul>
                </ol>
            </React.Fragment>
        );
    }
}

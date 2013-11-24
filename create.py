import os
import re

windows_toc = [
    'Account Lockout Policy',
    'Add/Remove Programs',
    'Administrative Tools',
    'Automatic Login',
    'Automatic Updates',
    'C:\ Drive',
    'Command Prompt',
    'Control Panel',
    'CrowdInspect',
    'Disk Cleanup',
    'Find Unauthorized Files',
    'Groups',
    'Hosts file',
    'Internet Connection Sharing',
    'Internet Explorer',
    'Microsoft Baseline Security Analyzer',
    'Microsoft Security Essentials',
    'Password Policy',
    'Processes',
    'Program Files',
    'Program Files (x86)',
    'Remote Assistance',
    'Remote Desktop',
    'Rootkit Scanners',
    'Service Packs',
    'Services',
    'Shared Folders',
    'Show Hidden Files and Folders',
    'Startup Programs',
    'Task Manager',
    'User Accounts',
    'Users Folder',
    'Windows Features',
    'Windows Firewall',
    'Windows Server Roles',
    'Windows Updates',
    ]

def get_contents(file_path):
    contents = ""
    try:
        with open(file_path, "r") as file:
            for line in file.readlines():
                contents += line
    except IOError:
        # if error, assume that file doesn't exist
        # when expected file is created, its contents will be used
        contents = None
    return contents

def res_path(file_prefix, version=None):
    path = "res" + os.sep + file_prefix
    if version is not None:
        path += "-" + version
    path += ".html"
    return path

def standard_id(str):
    output = ""
    last_char = None
    current_char = None
    for c in str:
        # use lower case letters
        if re.match('[A-Z]', c):
            current_char = c.lower()
        # accept lower case letters and numbers
        elif re.match('[a-z0-9]', c):
            current_char = c
        # everything else to -
        else:
            current_char = '-'
        # don't add consecutive -
        if current_char != '-' or last_char != '-':
            output += current_char
            last_char = current_char
    return output

def section(name, version, output_file):
    id = standard_id(name)
    output_file.write("<hr>\n")
    output_file.write("<div id=\"" + id + "\">\n")
    output_file.write("<h2>" + name + "</h2>\n")
    # look for file for specific version
    file_contents = get_contents(res_path(id, version))
    # if no specific file, look for default file
    if file_contents is None:
        file_contents = get_contents(res_path(id))
    # if no default file, use TODO
    if file_contents is None:
        file_contents = "TODO\n<br />\n"
    output_file.write(file_contents)
    output_file.write("<a href=\"#toc\">Table of Contents</a>\n")
    output_file.write("</div>\n")

def for_windows_version(full_name, short_name):
    filename = short_name + ".html"
    with open(filename, "w") as file:
        file.write("<!DOCTYPE html>\n")
        file.write("<head>\n")
        file.write("<title>" + full_name + " Lockdown</title>\n") 
        file.write("</head>\n\n")
        file.write("<body>\n")
        file.write("<h1>" + full_name + "</h1>\n")
        # table of contents
        file.write("<div id=\"toc\">\n")
        for topic in windows_toc:
             file.write("<a href=\"#")
             file.write(standard_id(topic))
             file.write("\">")
             file.write(topic)
             file.write("</a><br />\n")
        file.write("</div>\n")
        # section contents
        for topic in windows_toc:
            section(topic, short_name, file)
        file.write("</body>\n")
        file.write("</html>")

# create for various windows versions
for_windows_version("Windows 7", "win7")

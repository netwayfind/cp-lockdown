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
    if file_path is None:
        return None
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

def res_path(parts):
    # if empty parts, no path
    if not parts:
        return None
    # each part in parts makes up part of the file name
    # [section]-[subsection]-...-[version].html
    path = "res" + os.sep
    first = True
    for part in parts:
        # add hyphen, except for first item
        if first:
            first = False
        else:
            # avoid consecutive hyphens
            if path[-1] != '-':
                path += '-'
        path += standard_id(part)
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

def get_subsection(parent_name, sub_name, version):
    # look for specific version of subsection
    file_contents = get_contents(res_path([parent_name, sub_name, version]))
    # if no specific version, look for default contents for subsection
    if file_contents is None:
        file_contents = get_contents(res_path([parent_name, sub_name]))
    return file_contents

def section(name, version, output_file):
    id = standard_id(name)
    output_file.write("<hr>\n")
    output_file.write("<div id=\"" + id + "\">\n")
    output_file.write("<h2>" + name + "</h2>\n")
    # look if section has location and settings subsections
    location_subsection = get_subsection(id, 'location', version)
    settings_subsection = get_subsection(id, 'settings', version)
    if location_subsection is not None:
        output_file.write("<h3>Location</h3>\n")
        output_file.write(location_subsection)
    if settings_subsection is not None:
        output_file.write("<h3>Settings</h3>\n")
        output_file.write(settings_subsection)
    # if no subsections, look for section files
    if location_subsection is None and settings_subsection is None:
        # look for version-specific section file first
        section_file = get_contents(res_path([id, version]))
        # if no version-specific default file, look for default section file
        if section_file is None:
            section_file = get_contents(res_path([id]))
        # if no default section file, use TODO
        if section_file is None:
            section_file = "TODO\n<br />\n"
        output_file.write(section_file)
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

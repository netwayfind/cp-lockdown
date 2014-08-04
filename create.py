import json
import os
import re

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
    file_contents = None
    # look for specific version of subsection
    if version is not None:
        file_contents = get_contents(res_path([parent_name, sub_name, version]))
    # if no specific version, look for default contents for subsection
    if file_contents is None:
        file_contents = get_contents(res_path([parent_name, sub_name]))
    return file_contents

def create_section(name, version, output_file):
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
        section_file = None
        # look for version-specific section file first
        if version is not None:
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

def for_topic(full_name, short_name, sections):
    filename = short_name + ".html"
    with open(filename, "w") as file:
        file.write("<!DOCTYPE html>\n")
        file.write("<head>\n")
        file.write("<meta charset=\"UTF-8\">\n")
        file.write("<title>" + full_name + " Lockdown</title>\n") 
        file.write("</head>\n\n")
        file.write("<body>\n")
        file.write("<h1>" + full_name + "</h1>\n")
        # table of contents
        file.write("<div id=\"toc\">\n")
        file.write("<ul>\n")
        for section in sections:
             section_title = section[0]
             file.write("<li>")
             file.write("<a href=\"#")
             file.write(standard_id(section_title))
             file.write("\">")
             file.write(section_title)
             file.write("</a><br />")
             file.write("</li>\n")
        file.write("</ul>\n")
        file.write("</div>\n")
        # section contents
        for section in sections:
            # first item in list is section title
            section_title = section[0]
            version = None
            # if there is a second item, use it as version
            if len(section) > 1:
                version = section[1]
            create_section(section_title, version, file)
        file.write("</body>\n")
        file.write("</html>")

def topic_json_file(file_path):
    file_contents = get_contents(file_path)
    topic = json.loads(file_contents)
    full_name = topic["full_name"]
    short_name = topic["short_name"]
    sections = topic["sections"]

    for_topic(full_name, short_name, sections)

# get topics from toc directory
toc_dir = 'toc'
for filename in os.listdir(toc_dir):
    # topics are expected to be in json files
    if not filename.endswith('.json'):
        continue
    file_path = os.path.join(toc_dir, filename)
    topic_json_file(file_path)

import os

windows_toc = [
    'Account Lockout Policy',
    'Administrative Tools'
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
        # until then, put TODO placeholder
        contents = "TODO"
    return contents

def res_path(file_prefix, version):
    return "res" + os.sep + file_prefix + "-" + version + ".html"

def section(name, version, output_file):
    id = name.lower().replace(" ", "-")
    output_file.write("<hr>\n")
    output_file.write("<div id=\"" + id + "\">\n")
    output_file.write("<h2>" + name + "</h2>\n")
    output_file.write(get_contents(res_path(id, version)))
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
        for topic in windows_toc:
            section(topic, short_name, file)
        file.write("</body>\n")
        file.write("</html>")

# create for various windows versions
for_windows_version("Windows 7", "win7")

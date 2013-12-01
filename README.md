cp-lockdown
===========

Guides for locking down a computer

You can read up a guide for a specific operating system. For example, open
win7.html for Windows 7.

The guides are put together from multiple files. This should make it easier to
update information as needed.

- /toc directory - contains JSON files for each operating system version. Each
  JSON file should contain a mapping for an operating system version's full
  name, short name, and sections.
- /res directory - contains the source files for section contents. Sections may
  have multiple version, as denoted by -\<version\>.
- create.py - Python script to recreate the .html guide files after revising
  files in the /toc or /res directories.

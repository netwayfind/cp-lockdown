cp-lockdown
===========

Guides for locking down a computer

# Where

Online version:
* https://sumwonyuno.github.io/cp-lockdown

Offline version not currently supported.
  
# Usage
From the cp-lockdown index, click on the links to view guides and
checklists. Print out the checklists and use them to record timestamp of
completed tasks.

# Development
Want to add new content or see a mistake? If you know HTML, JavaScript, and
git, you can clone the cp-lockdown repo and make edits.

This project uses ReactJS + JSX
[(info)](https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx).

## Initial Setup
Download and the latest stable Node.js, and then do `npm install` in the
cp-scoring directory to install the dev dependencies. This will install babel.

## Compiling
Use the JSX preprocessor to automatically compile JSX to JS when saving files.

`npx babel --watch jsx --out-dir js`

The .babelrc file contains additional configuration for this.

## Design
This repository is a GitHub projects page. The code here backs the online
version.

### Concepts
Each operating system is a **Template** component. A **Template** has a name
(the operating system) and an ordered list of **Groups**. A **Group** has a
name (e.g. Policies) and an ordered list of **Sections**.

A **Section** holds the content of a particular topic (e.g. Password Policy).
It is a React component with the following functions:
- displayName(), returns the display name (e.g. "Password Policy")
- getLink(), returns a link to itself
- render(), returns the HTML content for the **Section**

For each operating system page, it has a header, a table of contents panel,
and a content panel. The table of contents has the **Groups** and **Sections**.

Clicking on a **Section** link will set the URL fragment for the page (e.g.
win7.html#PasswordPolicy). A listener reads the URL fragment and loads the
respective **Section** HTML content in the content panel. A specific
**Section** content version may be loaded depending on the operating system.

### HTML files
The index.html file has links to the other .html files. Each operating system
has a specific .html file. Each operating system platform (Windows, Linux) has
a respective checklist .html file. The styles.css file controls the style for
all the .html files.

### ReactJS
The package .json files are for Node.js.

The jsx directory has the source files and the js directory has the generated
JavaScript files.

The common.jsx has the code for **Template**, **Group**, and **Section**. The
ref .jsx files has the **Sections** for the respective operating system
platforms. Each operating system has a separate .jsx file that declares the
**Template**, **Groups**, and **Sections** for it.

## Change Process
* New changes (content or fixes) are committed in the 'dev' branch
* Approved commits are merged into the 'master' branch
* Online version uses 'master' branch

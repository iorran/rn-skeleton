Folder Structure Conventions
============================

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

```bash
├── src
│   ├── pages                 (every page in our application)
│   ├── components            (reusable components)
│   ├── assets                (static files)
│   ├── config                (third-party configs)
│   ├── services              (endpoint apis | internal database)
│   ├── store                 (redux config)
│   ├── styles                (common styles)
├── routes.js                 (application routes)
├── package.json
├── readme.md
└── .gitignore
```
# DevSecOps & Cloud Security Documentation Site 🚀

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen)](https://isaiasvela.github.io/)
[![MkDocs Material](https://img.shields.io/badge/MkDocs-Material-blue)](https://squidfunk.github.io/mkdocs-material/)

Cybersecurity and development documentation site built with MkDocs Material.

## 🌐 Live Site
**https://isaiasvela.github.io**

## 📁 Project Structure
```
.
├── docs/                    # Documentation source files
│ ├── index.md / cv.md       # Homepage + CV
│ ├── blog/posts/            # Blog posts (auto-listed by Material blog plugin)
│ ├── projects/              # Project briefs
│ ├── research/writeups/     # Cybersecurity writeups
│ ├── tags.md                # Tag listing page
│ ├── images/                # Images and assets
│ ├── stylesheets/           # Custom CSS (s4vitar.css)
│ └── javascripts/           # Custom JS (analytics)
├── overrides/               # Theme overrides (blog post cards)
├── templates/               # Page/post templates for new content
├── mkdocs.yml               # MkDocs configuration (nav, theme, plugins)
├── .github/workflows/       # GitHub Actions workflows
│ └── deploy.yml             # Auto-deployment to GitHub Pages
└── README.md                # This file
```


## 🛠️ Local Development

### Prerequisites
- Python 3.8+
- pip (Python package manager)

### Installation
```
# Clone the repository
git clone https://github.com/isaiasvela/isaiasvela.github.io.git
cd isaiasvela.github.io

# Install MkDocs with Material theme
pip install mkdocs-material
```

### Running Locally
```
# Start the development server
mkdocs serve

# Open browser to: http://127.0.0.1:8000
```

### Building the Site
```
# Build static site to 'site/' directory
mkdocs build

# Verify before pushing (treats warnings as errors)
mkdocs build --strict
```

## Deployment
Automatic Deployment
This site is automatically deployed to GitHub Pages when you push to the `main` branch:

1. Push changes to main branch
2. GitHub Actions builds and deploys automatically
3. Site updates in 1-2 minutes

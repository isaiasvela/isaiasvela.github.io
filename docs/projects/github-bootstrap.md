---
title: GitHub Bootstrap
description: A Terraform-based GitHub repository bootstrap that automates secure project setup and governance.
---

# GitHub Bootstrap

A Terraform-driven repository bootstrap that helps create consistent, secure, and production-ready GitHub projects with the right defaults from day one.

## Overview

GitHub Bootstrap automates the creation and configuration of new repositories using the GitHub Terraform provider. Instead of manually repeating the same setup work for each project, this solution creates a repository from a template, adds a standard README, establishes branch protection, configures labels, and prepares a reliable baseline for engineering teams.

This project was designed to reduce friction in early-stage project setup while improving governance, repository hygiene, and security posture from the beginning.

## Problem

When teams start a new project, they usually repeat the same foundational tasks:

- creating repositories
- configuring branch protection
- setting labels and review rules
- onboarding documentation
- standardizing baseline security settings

Without automation, that process becomes inconsistent, time-consuming, and prone to security drift. The goal of this project is to make repository creation repeatable, secure, and fast.

## Architecture

```text
Developer / operator
        |
        v
+--------------------------------------------------+
| Terraform automation                             |
| - providers.tf                                   |
| - repositories.tf                                |
| - branches.tf                                    |
| - protections.tf                                 |
| - labels.tf                                      |
| - files.tf                                       |
+--------------------------------------------------+
        |
        v
+--------------------------------------------------+
| GitHub API / repository lifecycle                |
| - create repo                                     |
| - initialize from template                        |
| - add README                                      |
| - create develop branch                           |
| - enforce branch protection                       |
| - apply issue labels                              |
+--------------------------------------------------+
        |
        v
+--------------------------------------------------+
| Secure project baseline                          |
| - protected main/develop branches                 |
| - standard repo metadata                         |
| - consistent onboarding documentation            |
+--------------------------------------------------+
```

## Technologies

- Terraform
- GitHub API
- GitHub provider for Terraform
- GitHub Actions
- Infrastructure as Code

## What I built

- A reusable Terraform workflow to provision GitHub repositories
- Automatic repository initialization from a template
- Local README generation from a standard template file
- Creation of a `develop` branch and default branch management
- Branch protection rules for `main` and `develop`
- Issue label configuration for project governance
- Validation of input variables and reusable configuration patterns

## Project structure

```text
.
├── terraform/
│   ├── branches.tf
│   ├── files.tf
│   ├── labels.tf
│   ├── outputs.tf
│   ├── protections.tf
│   ├── providers.tf
│   ├── repositories.tf
│   ├── terraform.tfvars
│   ├── variables.tf
│   └── versions.tf
│
└── templates/
    └── README.md
```

## Requirements

- Terraform >= 1.0
- GitHub account with permissions to create repositories
- GitHub Personal Access Token (PAT) or environment-scoped token

## Authentication

The GitHub provider reads the token from the `GITHUB_TOKEN` environment variable.

### PowerShell

```powershell
$env:GITHUB_TOKEN="<your-token>"
```

### Linux / macOS

```bash
export GITHUB_TOKEN="<your-token>"
```

## Usage

1. Move into the Terraform directory:

```bash
cd terraform
```

2. Initialize Terraform:

```bash
terraform init
```

3. Review the execution plan:

```bash
terraform plan
```

4. Apply the configuration:

```bash
terraform apply
```

5. Destroy the infrastructure when needed:

```bash
terraform destroy
```

## Terraform inputs

The project uses the following values in `terraform/variables.tf`:

- `owner` — GitHub owner or organization
- `repo_name` — Name of the repository to create
- `repo_visibility` — `public` or `private`
- `repo_description` — Repository description
- `template_owner` — Template repository owner
- `template_repository` — Template repository name

These values can be set in `terraform/terraform.tfvars` or passed at runtime.

## Implementation notes

- The repository is created with `auto_init = true`.
- A local `README.md` is added from `templates/README.md` after creation.
- Branch protection enforces safer repository standards and reduces the risk of accidental force pushes or deletions.
- The project follows a clean infrastructure-as-code pattern that can be adapted to internal standards and enterprise policies.

## Lessons learned

- Standardized project setup reduces friction for both developers and operators.
- Security defaults should be applied during bootstrap rather than patched later.
- Good automation improves consistency, onboarding speed, and long-term maintainability.
- Repository governance is easier when the process is codified and repeatable.

## GitHub Repository

- [GitHub Bootstrap](https://github.com/isaiasvela/github-bootstrap)

## Future improvements

- Expand automation with repository topics and homepage configuration
- Add GitHub Actions workflows for validation and automated release checks
- Improve support for more complex enterprise repository conventions
- Add policy checks for compliance and secure defaults

---
title: GitHub Bootstrap
description: A Terraform-based GitHub repository bootstrap that automates secure project setup and governance.
---

# GitHub Bootstrap

A Terraform-driven repository bootstrap that creates consistent, secure, and production-ready GitHub projects with the right defaults from day one.

## Problem

Starting a new project means repeating the same setup: repository, branch protection, labels, review rules, baseline security. Done by hand it becomes inconsistent, slow, and prone to security drift.

## Solution

A reusable Terraform workflow on the GitHub provider that provisions repositories declaratively: initialization from a template, `main`/`develop` branch protection, issue labels, and validated inputs that fail fast instead of producing deep provider errors. Later iterations added destroy guardrails and a CI workflow to match.

## Result

Repository creation went from manual checklist to repeatable tool: validated early, protected by default, automated where it counts. I wrote up the evolution in two blog posts: [part 1](../blog/posts/github-repository-bootstrap.md) and [part 2](../blog/posts/github-repository-bootstrap-part2.md).

<div class="sv-chips" markdown="1">
<span class="sv-chip">Terraform</span>
<span class="sv-chip">GitHub API</span>
<span class="sv-chip">GitHub Actions</span>
<span class="sv-chip">IaC</span>
</div>

## Repository

Setup, inputs, and usage docs live in the repo (single source of truth):

- [GitHub Bootstrap](https://github.com/isaiasvela/github-bootstrap)

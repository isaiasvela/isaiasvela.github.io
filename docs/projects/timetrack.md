---
title: TimeTrack
description: Full-stack time tracking application with secure authentication, Kubernetes deployment, and employee check-in workflows.
---

# TimeTrack

A full-stack, containerized time tracking app: employees register check-ins and check-outs through a Next.js frontend, a Node API, and MongoDB — behind NextAuth.js with SAML, deployable via Compose locally or manifests on Kubernetes.

## Problem

Inconsistent time tracking means poor operational visibility and manual effort recording hours. Teams need attendance data they can trust without burdening employees.

## Solution

Structured check-in/check-out flows with secure session management, RESTful time-record endpoints, Mongo-backed persistence, and a modular multi-service deployment (frontend, API, database) that scales and stays consistent across environments.

## Result

A real-world business app combining product thinking with secure engineering: clean service boundaries, environment parity from laptop to cluster, and a workflow simple enough that people actually use it.

<div class="sv-chips" markdown="1">
<span class="sv-chip">Next.js</span>
<span class="sv-chip">TypeScript</span>
<span class="sv-chip">Tailwind CSS</span>
<span class="sv-chip">NextAuth + SAML</span>
<span class="sv-chip">MongoDB</span>
<span class="sv-chip">Docker</span>
<span class="sv-chip">Kubernetes</span>
</div>

## Repository

Setup and deployment docs live in the repo (single source of truth):

- [TimeTrack](https://github.com/isaiasvela/TimeTrack)

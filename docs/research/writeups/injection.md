---
title: Injection
description: Injection writeup covering exploitation and mitigation lessons from a controlled security lab.
hide:
  - navigation
---

# Injection

- Difficulty: Medium
- Time to read: 8 minutes
- Tags: injection, web-security, exploitation, sqli, web-app

## Introducción

This writeup focuses on web application injection patterns and how they manifest in vulnerable endpoints. The goal is to understand the attack surface, the exploitation flow, and how reasoning about trust boundaries reduces risk.

## Enumeración

The process begins with standard target discovery and endpoint review:

- identify page parameters,
- map inputs to server-side logic,
- test for injection primitives,
- validate whether error messages leak information.

## Explotación

Injection payloads are then used to observe whether the backend interprets input unsafely. Common patterns include payloads that alter query logic or generate broader server-side execution paths.

```text
' OR 1=1 --
UNION SELECT null, version(), database() --
```

The value of the exercise is not just the payload itself, but the reasoning behind how the application processes user-controlled data.

## Escalada de privilegios

In this context, privilege escalation often comes from leveraging a web vulnerability that exposes internal application state or sensitive data. Once a critical injection point is confirmed, an attacker can infer additional access, secret values, or control surfaces.

## Lecciones aprendidas

- Input validation must be enforced at multiple layers.
- Error handling should not reveal internal query behavior.
- Defensive coding must assume malicious input is always present.
- Security testing should include both automated and manual validation.

## Herramientas usadas

- Burp Suite
- Web proxy tooling
- Nmap
- Manual payload testing
- Browser developer tools

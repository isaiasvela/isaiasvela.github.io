---
title: Web Vulnerabilities
description: Notes on common web vulnerabilities, attack patterns, and security fundamentals.
hide:
  - navigation
---

# Web Vulnerabilities

This note reviews common web vulnerabilities, exploit patterns, and the reasoning behind them.

## Local File Inclusion (LFI)

LFI allows an attacker to include local files from the server. This usually occurs when a user-controlled parameter is read and included without strict validation.

```text
https://localhost/myweb.php?idioma=/etc/passwd
```

## SQL Injection

SQL injection is caused by unsafely concatenating user-controlled input into SQL queries.

```sql
' OR 1=1 --
```

## Cross-Site Scripting (XSS)

XSS allows untrusted scripts to run in a target user’s browser.

```html
<script>alert('XSS');</script>
```

## CSRF

CSRF tricks a logged-in user into performing state-changing actions without consent.

## SSRF

SSRF abuses server-side requests to access internal services or metadata endpoints.

## Lessons

- validate input,
- minimize trust,
- isolate sensitive components,
- enforce secure defaults.

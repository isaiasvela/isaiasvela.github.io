---
title: GitHub Bootstrap
description: Bootstrap de repositorios GitHub con Terraform que automatiza un setup seguro y la gobernanza del proyecto.
---

# GitHub Bootstrap

Un bootstrap de repositorios con Terraform que crea proyectos GitHub consistentes, seguros y listos para producción con los defaults correctos desde el día uno.

## Problema

Empezar un proyecto nuevo significa repetir el mismo setup: repositorio, branch protection, labels, reglas de revisión, baseline de seguridad. Hecho a mano se vuelve inconsistente, lento y propenso a security drift.

## Solución

Un workflow reutilizable de Terraform sobre el provider de GitHub que provisiona repositorios de forma declarativa: inicialización desde plantilla, branch protection en `main`/`develop`, issue labels e inputs validados que fallan rápido en vez de producir errores crípticos del provider. Iteraciones posteriores añadieron guardrails de destroy y un workflow de CI a juego.

## Resultado

La creación de repositorios pasó de checklist manual a herramienta repetible: validada pronto, protegida por defecto, automatizada donde cuenta. Conté la evolución en dos posts del blog: [parte 1](../blog/posts/github-repository-bootstrap.md) y [parte 2](../blog/posts/github-repository-bootstrap-part2.md).

<div class="sv-chips" markdown="1">
<span class="sv-chip">Terraform</span>
<span class="sv-chip">GitHub API</span>
<span class="sv-chip">GitHub Actions</span>
<span class="sv-chip">IaC</span>
</div>

## Repositorio

Setup, inputs y docs de uso en el repo (fuente única de verdad, en inglés):

- [GitHub Bootstrap](https://github.com/isaiasvela/github-bootstrap)

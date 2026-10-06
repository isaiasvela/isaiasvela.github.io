---
date: 2026-09-30
title: Bootstrap de repositorios GitHub, parte 2
description: Cómo evolucionó el bootstrap de repositorios con Terraform hacia inputs más seguros, operaciones más seguras y un workflow más fluido.
image: images/blog/thumbnails/GithubBootstrap2.png
tags:
  - Terraform
  - Automation
  - Security
---

# Bootstrap de repositorios GitHub, parte 2

Inputs más seguros, operaciones más seguras: qué cambió desde la primera versión

<!-- more -->

## Contexto

En el [primer post](./github-repository-bootstrap.md), describí un bootstrap con Terraform que crea repositorios GitHub con defaults consistentes. Desde entonces lo he usado de verdad, y el uso real expuso cada aspereza: errores crípticos del provider con inputs malos, ningún punto de partida para la configuración, un comando `destroy` a un typo de borrar un repositorio, y un pipeline de CI probando una versión desactualizada de Terraform.

Este post cubre qué cambié y por qué. Sin conceptos nuevos, solo el hardening que una herramienta necesita cuando sale de la fase demo.

## Inputs más seguros

El bootstrap ahora falla rápido con mensajes claros en vez de errores profundos del provider:

- cada variable de texto libre está validada (sin valores vacíos, sin espacios donde GitHub los prohíbe)
- `repo_visibility` solo acepta `public` o `private`
- `repo_description` está limitada a los 350 caracteres de GitHub
- las revisiones aprobatorias requeridas son configurables por proyecto (`0`–`6`, por defecto `0`)

La validación de variables corre antes de que Terraform toque la API, así que un typo cuesta segundos, no un plan aplicado a medias. Un `terraform.tfvars.example` versionado hace que el primer setup sea un solo comando de copia, mientras el `tfvars` real queda en gitignore.

![Error trying to create a repository with 10 required_aproving_review_count](../../images/blog/images/Error.png)

## Operaciones más seguras

Dos cambios protegen los repositorios una vez creados:

- `terraform destroy` borra permanentemente el repositorio GitHub. El README ahora lo dice explícitamente, y un bloque opt-in `lifecycle { prevent_destroy = true }` queda a un uncomment para proyectos que nunca deberían borrarse por accidente.
- arrancar un segundo repositorio ya no pelea con el state local. Los scripts de reset limpian `terraform.tfstate` sin tocar GitHub, así los repositorios creados se conservan y la herramienta puede pasar al siguiente.

Toques menores en la misma línea: las feature branches se auto-borran al hacer squash-merge, el token se introduce con un prompt oculto en vez de acabar en el historial de la shell, y los issue labels llevan descripciones.

## Workflow más fluido

El repositorio ahora aplica los hábitos que predica. Cada cambio pasa por feature branches y pull requests con commits firmados. CI corre formato, validación, lint y security scans, se salta a sí mismo en pushes solo de docs, cancela runs superados y comparte sus excepciones de Checkov con una config versionada para que los runs locales coincidan. Dependabot abre PRs semanales de Updates para Actions y el provider, mientras el pin de versión de Terraform pasó a una 1.14.5 probada.

## Qué aprendí

Usar la herramienta como su propio workflow de desarrollo me enseñó más que construirla:

- valida en el borde: la validación de variables de Terraform pilla errores antes de cualquier llamada a la API, que es el sitio más barato para fallar
- state local significa propósito único: un state file que trackea un repositorio es simple y predecible, siempre que el flujo de reset esté documentado
- los guardrails ganan a los avisos: un bloque `prevent_destroy` comentado hace más que un párrafo diciéndote que tengas cuidado
- CI debe reflejar los runs locales: configs compartidas (Checkov, formato) eliminan el gap del "en mi máquina funciona"
- los commits firmados y el branch protection son fricción hasta que te salvan una vez

## Por qué esto importa en equipos reales

Ninguno de estos cambios hace la creación de repositorios más rápida. Hacen que sea más difícil hacerlo mal: inputs malos rechazados en segundos, comandos destructivos avisados antes de correr, dependencias actualizadas con PRs revisables en vez de drift silencioso. Esa es la diferencia entre un script que funciona y una herramienta en la que un equipo puede confiar.

## Conclusiones

La primera versión probó la idea; esta iteración la hizo dependable. El patrón aguantó: defaults pequeños y explícitos, validados pronto, protegidos por defecto, automatizados donde cuenta.

## TL;DR in English

First version proved the idea; this one made it dependable: fail-fast inputs, destroy guardrails, CI mirroring local runs.

## Referencias

- Project repository: [https://github.com/isaiasvela/github-bootstrap](https://github.com/isaiasvela/github-bootstrap)
- Terraform GitHub provider documentation: [https://registry.terraform.io/providers/integrations/github/latest/docs](https://registry.terraform.io/providers/integrations/github/latest/docs)
- Terraform official documentation: [https://developer.hashicorp.com/terraform](https://developer.hashicorp.com/terraform)
- GitHub documentation: [https://docs.github.com/en](https://docs.github.com/en)

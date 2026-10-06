---
title: Weather Dashboard
description: Dashboard meteorológico frontend con CI/CD automatizado y despliegue en GitHub Pages.
---

# Weather Dashboard con CI/CD

Un dashboard meteorológico respaldado por un workflow disciplinado de entrega: cada cambio pasa por lint, test, build y despliegue automático a GitHub Pages.

## Problema

Los proyectos frontend necesitan más que una interfaz que funcione — sin automatización, la validación y el despliegue se vuelven tareas manuales y propensas a errores que frenan la iteración y erosionan la confianza.

## Solución

Un dashboard responsive que consume una API meteorológica externa, envuelto en un pipeline de GitHub Actions (lint → test → build → deploy → notify) que publica en Pages con cada push.

## Resultado

App pequeña, hábitos reales: fricción de despliegue casi cero, releases aburridas y predecibles. Las buenas prácticas de ingeniería escalan aunque la aplicación sea modesta.

<div class="sv-chips" markdown="1">
<span class="sv-chip">JavaScript</span>
<span class="sv-chip">HTML / CSS</span>
<span class="sv-chip">GitHub Actions</span>
<span class="sv-chip">GitHub Pages</span>
</div>

## Enlaces

Código y docs del pipeline en el repo (fuente única de verdad, en inglés):

- [Weather Dashboard](https://github.com/isaiasvela/weather-dashboard)
- [Live app](https://isaiasvela.github.io/weather-dashboard/)
- [Workflow runs](https://github.com/isaiasvela/weather-dashboard/actions)

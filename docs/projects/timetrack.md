---
title: TimeTrack
description: Aplicación full-stack de registro de jornada con autenticación segura, despliegue en Kubernetes y flujos de fichaje.
---

# TimeTrack

Una app full-stack y contenerizada de registro de jornada: los empleados registran entradas y salidas desde un frontend Next.js, una API Node y MongoDB — detrás de NextAuth.js con SAML, desplegable con Compose en local o con manifiestos en Kubernetes.

## Problema

Un registro de jornada inconsistente significa poca visibilidad operativa y esfuerzo manual registrando horas. Los equipos necesitan datos de asistencia fiables sin cargar a los empleados.

## Solución

Flujos estructurados de check-in/check-out con gestión segura de sesiones, endpoints REST de registros de tiempo, persistencia en Mongo y un despliegue modular multiservicio (frontend, API, base de datos) que escala y se mantiene consistente entre entornos.

## Resultado

Una app de negocio real que combina visión de producto con ingeniería segura: fronteras limpias entre servicios, paridad de entornos del portátil al clúster y un flujo tan simple que la gente lo usa de verdad.

<div class="sv-chips" markdown="1">
<span class="sv-chip">Next.js</span>
<span class="sv-chip">TypeScript</span>
<span class="sv-chip">Tailwind CSS</span>
<span class="sv-chip">NextAuth + SAML</span>
<span class="sv-chip">MongoDB</span>
<span class="sv-chip">Docker</span>
<span class="sv-chip">Kubernetes</span>
</div>

## Repositorio

Setup y docs de despliegue en el repo (fuente única de verdad, en inglés):

- [TimeTrack](https://github.com/isaiasvela/TimeTrack)

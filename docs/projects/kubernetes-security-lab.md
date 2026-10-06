---
title: Kubernetes Security Lab
description: Laboratorio de seguridad en runtime en Kubernetes para emulación de adversario, ingeniería de detección con Falco y validación de amenazas cloud-native.
---

# Kubernetes Runtime Security Lab

> Trabajo de Fin de Grado — Universitat Politècnica de Catalunya (UPC)

Un laboratorio de seguridad en Kubernetes que mide cómo de bien detecta un clúster real la actividad maliciosa en runtime — y lo mejora con ingeniería de detección. Falco vigila los workloads mientras MITRE CALDERA los ataca, antes y después de afinar reglas personalizadas.

## Problema

Muchos despliegues de Kubernetes parecen seguros pero exponen riesgos críticos en runtime: workloads comprometidos, poca visibilidad de procesos, movimiento lateral. Solo con checks de configuración no sabes si el comportamiento real de un atacante sería detectado.

## Solución

Un laboratorio reproducible que combina un stack de observación (Falco, Falcosidekick, Grafana, Loki) con emulación automatizada de adversario (agente sandcat de MITRE CALDERA dentro del clúster). Se evaluaron las reglas por defecto de Falco contra escenarios controlados, se identificaron gaps y se escribieron reglas personalizadas basadas en comportamiento, revalidadas después.

## Resultado

Diferencia clara y medida entre usar defaults genéricos y hacer ingeniería de detección deliberada: menos puntos ciegos, mejor calidad de señal. La calidad de las alertas importa más que el volumen — y la postura solo mejora cuando la simulación de ataque y la defensa se hacen juntas.

<div class="sv-chips" markdown="1">
<span class="sv-chip">Kubernetes</span>
<span class="sv-chip">Falco</span>
<span class="sv-chip">MITRE CALDERA</span>
<span class="sv-chip">Grafana</span>
<span class="sv-chip">Loki</span>
<span class="sv-chip">Bash</span>
</div>

## Repositorios

Docs completas, manifiestos y reglas en los repos (fuente única de verdad, en inglés):

- 🧪 [Laboratory Infrastructure](https://github.com/isaiasvela/tfg_lab)
- 🛡️ [Falco Custom Rules](https://github.com/isaiasvela/Falco_custom_rules)
- 🎯 [MITRE CALDERA Kubernetes Abilities](https://github.com/isaiasvela/caldera_k8s_abilities)
- [Bachelor's Thesis (PDF, Catalan)](https://github.com/isaiasvela/bsc-thesis-kubernetes-security/blob/main/Memoria.pdf)

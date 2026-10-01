---
title: Kubernetes Security Lab
description: Kubernetes runtime security lab for adversary emulation, Falco detection engineering, and cloud-native threat validation.
---

# Kubernetes Runtime Security Lab

> Bachelor's Final Thesis — Universitat Politècnica de Catalunya (UPC)

A Kubernetes security laboratory that measures how well a real cluster detects malicious activity at runtime — and improves it with detection engineering. Falco watches workloads while MITRE CALDERA attacks them, before and after custom rule tuning.

## Problem

Kubernetes deployments often look secure while exposing critical runtime risks: compromised workloads, weak process visibility, lateral movement. Configuration checks alone can't tell you whether live adversary behavior would be detected.

## Solution

A reproducible lab combining an observation stack (Falco, Falcosidekick, Grafana, Loki) with automated adversary emulation (MITRE CALDERA sandcat agent inside the cluster). Default Falco rules were evaluated against controlled attack scenarios, gaps identified, and custom behavior-based rules written and re-validated.

## Result

Clear, measured difference between generic defaults and deliberate detection engineering: fewer blind spots, better signal quality. Alert quality matters more than alert volume — and posture only improves when attack simulation and defense are done together.

<div class="sv-chips" markdown="1">
<span class="sv-chip">Kubernetes</span>
<span class="sv-chip">Falco</span>
<span class="sv-chip">MITRE CALDERA</span>
<span class="sv-chip">Grafana</span>
<span class="sv-chip">Loki</span>
<span class="sv-chip">Bash</span>
</div>

## Repositories

Full docs, manifests, and rules live in the repos (single source of truth):

- 🧪 [Laboratory Infrastructure](https://github.com/isaiasvela/tfg_lab)
- 🛡️ [Falco Custom Rules](https://github.com/isaiasvela/Falco_custom_rules)
- 🎯 [MITRE CALDERA Kubernetes Abilities](https://github.com/isaiasvela/caldera_k8s_abilities)
- [Bachelor's Thesis (PDF, Catalan)](https://github.com/isaiasvela/bsc-thesis-kubernetes-security/blob/main/Memoria.pdf)

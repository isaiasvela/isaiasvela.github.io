---
title: Kubernetes Security Lab
description: Kubernetes runtime security lab for adversary emulation, Falco detection engineering, and cloud-native threat validation.
---

# Kubernetes Runtime Security Lab

> Bachelor's Final Thesis — Universitat Politècnica de Catalunya (UPC)

A Kubernetes security laboratory designed to evaluate runtime threat detection using Falco and adversary emulation with MITRE CALDERA. The project analyzes the effectiveness of Falco's default detection capabilities, develops custom detection rules, and validates them through controlled attack scenarios executed inside a Kubernetes environment.

## Problem

Kubernetes deployments often provide the illusion of security while still exposing critical runtime risks: compromised workloads, weak process visibility, lateral movement opportunities, and insufficient detection coverage. Traditional configuration checks alone are not enough to understand and defend against live adversary behavior inside a cluster.

This project was created to answer a practical question: how well does a real Kubernetes environment detect malicious activity at runtime, and how can detection engineering improve that posture?

## Objectives

- Design a reproducible Kubernetes security laboratory.
- Deploy and configure Falco for runtime monitoring.
- Integrate MITRE CALDERA for automated adversary emulation.
- Evaluate Falco's default detection rules.
- Develop and validate custom Falco rules.
- Compare detection coverage before and after the implemented improvements.

## Architecture

```text
+------------------------+        +----------------------------+
| Developer / Operator   |        | GitHub repositories        |
| - lab management       | ---->  | - lab infra                |
| - attack orchestration |        | - Falco rules              |
+------------------------+        | - CALDERA abilities        |
                                  +----------------------------+
                                                  |
                                                  v
                                  +----------------------------+
                                  | Kubernetes cluster         |
                                  | - workloads                |
                                  | - services                 |
                                  | - network flows            |
                                  +----------------------------+
                                                  |
                                                  v
                                  +----------------------------+
                                  | Runtime observation stack  |
                                  | - Falco                    |
                                  | - Grafana                  |
                                  | - Loki                     |
                                  | - Falcosidekick            |
                                  +----------------------------+
                                                  |
                                                  v
                                  +----------------------------+
                                  | MITRE CALDERA              |
                                  | - adversary emulation      |
                                  | - attack simulation        |
                                  +----------------------------+
```

## Cluster architecture

![Cluster architecture](https://github.com/isaiasvela/bsc-thesis-kubernetes-security/raw/main/images/architecture.jpg)

## Observation stack

![Observation stack](https://github.com/isaiasvela/bsc-thesis-kubernetes-security/raw/main/images/observation.jpg)

## Technologies

- Kubernetes
- Docker
- Linux
- Falco
- MITRE CALDERA
- Grafana
- Loki
- Falcosidekick
- Bash
- YAML

## What I built

- A reproducible Kubernetes security laboratory for attack and defense testing.
- A runtime observation stack focused on detection visibility.
- Adversary emulation workflows using MITRE CALDERA inside the cluster with a sandcat agent.
- Falco-based detection logic for suspicious behavior in workloads.
- Custom detection rules to improve signal quality beyond default coverage.
- Comparative evaluation of security posture before and after rule tuning.

## Repository structure

This repository contains the documentation and resources related to the project. The implementation is split across several repositories:

- Laboratory Infrastructure — infrastructure and deployment scripts used to build the Kubernetes laboratory.
- Falco Custom Rules — custom runtime detection rules developed during the project.
- MITRE CALDERA Abilities — custom Kubernetes adversary emulation abilities for MITRE CALDERA.

## Related repositories

- 🧪 [Laboratory Infrastructure](https://github.com/isaiasvela/tfg_lab)
- 🛡️ [Falco Custom Rules](https://github.com/isaiasvela/Falco_custom_rules)
- 🎯 [MITRE CALDERA Kubernetes Abilities](https://github.com/isaiasvela/caldera_k8s_abilities)

## Thesis

The complete Bachelor's Thesis is available in Catalan.

- [Bachelor's Thesis (PDF)](https://github.com/isaiasvela/bsc-thesis-kubernetes-security/blob/main/Memoria.pdf)

## Abstract

This Bachelor's Thesis presents the design and implementation of a Kubernetes-based security laboratory for runtime threat detection. The environment integrates Falco for runtime monitoring and MITRE CALDERA for adversary emulation to simulate realistic attack scenarios.

The project evaluates the effectiveness of Falco's default detection rules, identifies detection gaps, and implements custom rules to improve runtime threat detection within Kubernetes workloads.

## Kubernetes

The lab is built around the core Kubernetes primitives: pods, deployments, services, and internal communication paths. The focus is on understanding how adversarial behavior manifests at runtime and how surrounding controls can identify those actions before they become damaging.

## MITRE Caldera

MITRE CALDERA is used to simulate adversary techniques in a controlled and repeatable way from inside the cluster. This allows the lab to validate whether the deployed security stack can detect misuse, suspicious process execution, privilege escalation, and lateral movement patterns.

## Falco

Falco is the central runtime detection component. The rules include checks for:

- suspicious binary execution inside containers
- write access to sensitive files
- privilege escalation behaviors
- unusual shell activity
- anomalous network behavior
- unexpected process chaining or execution flow

## Simulation of attacks

The lab simulates realistic compromise sequences, including:

- initial foothold acquisition
- process execution from a pod
- credential access attempts
- tampering with sensitive configuration or files
- lateral movement inside the cluster

## Detection rules

The project emphasizes behavior-based detection over static signatures. Custom rules are used to identify:

- unexpected shell invocation in a running container
- writes to sensitive paths or configuration files
- privilege changes tied to suspicious workloads
- outbound connections that deviate from the expected baseline
- repeated or abnormal process behavior during an attack sequence

## Results

The lab demonstrates a clear difference between a Kubernetes environment with generic security defaults and one with deliberate detection engineering. It highlights how attack simulation can expose blind spots and guide improvements in runtime monitoring and alert quality.

## Lessons learned

- Kubernetes security requires runtime visibility, not just configuration hardening.
- Detection engineering is only meaningful when it is validated against realistic attack data.
- Alert quality matters more than alert volume.
- Security posture improves when adversary simulation and defensive engineering are performed together.

## Conclusions

This project shows that cloud-native security cannot be treated as a static checklist. It must be continuously validated through realistic environments, behavioral detections, and attack simulation. The result is a practical and repeatable model for building stronger Kubernetes security capabilities.

## License

This repository is released under the MIT License.

The Bachelor's Thesis document remains © Isaías Vela and may not be redistributed or modified without permission.

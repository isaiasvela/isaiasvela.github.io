---
title: Obsession
description: Obsession writeup focused on persistence, privilege misuse, and controlled attack sequences.
hide:
  - navigation
---

# Obsession

- Difficulty: Hard
- Time to read: 10 minutes
- Tags: persistence, privilege-escalation, attack-simulation, blue-team

## Introducción

This lab explores persistence and the dangers of repeated exploitation patterns. The objective is to understand how adversary tradecraft moves from initial compromise into long-term footholds and privilege abuse.

## Enumeración

The first phase focuses on understanding the target environment, likely services, and the security controls in place. Enumeration is used to map out how the application behaves and where persistence opportunities exist.

## Explotación

With access established, the exercise moves into exploitation paths that widen control or maintain covert access. The emphasis is on how the attacker tries to ensure continuity after the initial compromise.

## Escalada de privilegios

Privilege escalation remains a key objective. The simulation demonstrates how weak permissions, service misconfiguration, or overprivileged containers can lead to significant impact.

## Lecciones aprendidas

- Persistence is often more dangerous than the initial intrusion.
- Least privilege policies must be enforced at every layer.
- Monitoring and detection must consider both user behavior and system changes.
- Security engineering requires looking beyond the first attack step.

## Herramientas usadas

- Nmap
- Enumeration tooling
- Shell access and exploit chains
- Manual validation techniques

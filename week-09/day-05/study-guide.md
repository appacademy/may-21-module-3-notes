# Week 8 Day 5

**None of the topics for this day will be tested on the assessment!!**

## Network

Learning Objectives:

- Compare and contrast a MAC Address, an IP Address, and a port
- Compare and contrast IP Addresses, Domain Names, and DNS
- Diagram the process of sending data from a client to a server and back

### What is a MAC Address?

- **MAC Address** - Media Access Control Address, permanent identifiers
  assigned to network interface hardware
  - hardcoded into the device, so can't be changed without physically changing
    the hardware
  - the only protocol addressing scheme that is considered "permanent"
  - used to differentiate devices & interface from each other
  - **MAC filtering** is used to limit access in corporate computer networks or
    on multiplayer gaming services
    - you should never rely on MAC filtering as a surefire security feature
    - you can easily change what MAC address is reported by an operating system,
      this is called **spoofing**
  - referred to as a physical address
  - represented by 6 pairs of hexadecimal digits
    - ex: `A1-B2-C3-D4-E5-F6` or `a1b2c3d4e5f6`
  - used by network devices to map network interfaces to one another
- **frame** - external wrapper for data transmitted through a network
  - data is passed in frames
  - each frame includes:
    - a source MAC address
    - a destination MAC address
    - a payload containing the transport protocol wrapper (TCP vs. UDP)
    - IP wrapper (IP Address)
    - and any additional application data

### What is a Port?

- **port** - a virtual interface, acts as a connection point for a particular
  service or application to the network
  - each transport protocol (TCP, UDP) has different set of ports and port
    numbers
  - defined by a number from 0 - 65535 and its transport protocol
    - To distinguish a port between a TCP or a UDP port, you specify the
      protocol followed by a port number
    - ex: you have used port `TCP 5000` for development, but not `UDP 5000` yet
    - ex: `TCP 25` and `UDP 25` are different ports even though they have the
      same port number
  - when we talk about port numbers, we usually mean TCP ports
  - similar to a gate at an airport terminal
  - TCP port assignments today are managed by the IANA and are broken down into
    three separate ranges:
    - TCP 0-1023 are System ports
      - reserved for well-known services and use cases
    - TCP 1024-49151 are User ports
      - used to be reserved for services that identified themselves to the IANA
      - now used for any custom software
      - 3000, 5000, and 8080 are reserved for development
    - TCP 49152-65535 are Dynamic ports
      - ephemeral or short-living
      - a system service is likely to use these when building sockets for TCP
        connections
  - Treat any ports below 1024 as untouchable for your own custom servers, and
    only work above 49152 if you have a very good reason to do so

### What is DNS?

- **DNS** - Domain Name System, a method of translating long numeric identifiers
  into friendly, human-readable addresses
  - similar to a phone book where a phone book translates phone numbers into
    people/businesses and home/business addresses
  - ex: Google Public DNS IP addresses (IPv4) are `8.8.8.8` and `8.8.4.4`
  - **domain registry** - an organization that holds records of domain names to
    their numeric identifier
    - kind of like the creator of a phone book
    - these organizations must be registered by ICANN
  - **domain name** - the "friendly" name for the website's host, or the server
    providing the site's content
    - differs from a URL in that the domain is only the server's identifier, not
      other application or protocol-related data in the URL
    - ex: `students.appacademy.io`
    - split into three sections
      - **top-level domain** or TLD - last part of the domain name, to the right
        of the last dot in the domain name
        - ex: domain name: `students.appacademy.io`, top-level doman:
          `.io`
        - common TLD's include `.com`, `.net` and `.org`
        - handled by a single domain registry
          - ex: `.gov` is managed by the General Services Agency
      - **second-level domain** - the left of the last dot in the domain name
        - can be purchased from a **domain register** - sells second-level
          domains
        - ex: domain name: `students.appacademy.io`, second-level doman:
          `appacademy`
      - other level domains - to the left of the second-level domain, don't need
        to be purchased after domain is purchased
        - ex: domain name: `students.appacademy.io`, third-level doman:
          `students`
    - the domain usually means just the second-level and top-level domains

### Describe Sending a Request using Network Terminology



## Deployment

Learning Objectives

- Deploy an application on Netlify and use your own domain name

### Use a Custom Domain Name by Registering a DNS Name

Follow the instructions in the practice to create your own custom domain name
to use for the project you deployed to Netlify on Week 7!

# Week 8 Day 5

**None of the topics for this day will be tested on the assessment!!**

## Network Protocol

Learning Objectives:

- Describe what IP is and what an IP address is
- Identify use cases for the TCP and UDP protocols
- Identify the names and purposes of the four layers of TCP/IP

### What is IP?

- **Internet** - a series of interconnected networks sharing data
  - created in late 1960's
- **IP** - stands for Internet Protocol
  - a format of data when communicating one another over the Internet or local
    network
  - network-layer protocol
  - **IP address** - a unique identifier for a device on the internet or local
    network
    - Special, reserved IP addresses:
      - `localhost` or loopback address:
        - IPv4: `127.0.0.1`
        - IPv6: `::1`
      - all interfaces address: (doesn't matter the origin or destination)
        - IPv4: `0.0.0.0`
        - IPv6: `::`
  - Two versions that are used widely:
    - **IPv4** - most used protocol
      - IP addresses look something like this: `192.18.1.1` (32 bits)
      - supports around 4 billion unique addresses (a lot, but still not enough
        for modern use)
    - **IPv6**
      - IP addresses look something like this:
        `2600:6c5e:157f:d48c:138f:e0ba:6fa7:d859` (128 bits)
      - supports around ~350 undecillion (3.5×10^38) addresses (a billion times
        a billion)

### Transport Protocols

- Transport layer protocols are different from network layer protocols like IP
  - network layer protocol like IP defines where to move data to and from
  - transport layer protocol like TCP or UDP defines how the data should be
    packaged and split up at the origin and received and assembled at the
    destination
- **TCP** - connection-oriented protocol
  - should be used when it's critical that data arrives ordered and in full
  - provides verification when data is received
  - guarantee of reliability
  - Common use cases for TCP include:
    - File transfer
    - Web browsing
    - CRUD operations
- **UDP** - connection-less protocol
  - provides no verification for whether data is received
  - focused more on speed than reliability

## Deployment

Learning Objectives:

- Deploy a project with a server onto Heroku
- Differentiate between updates to the development versus production code
- Set up continuous integration with Heroku and Github
- Explain the pros and cons of continuous integration

### Deploy a server project onto Heroku

- Unlike services such as Netlify, which simply serve up static content, Heroku
  provides you with the ability to deploy a server that can run code, interact
  with databases, and even interact with third-party APIs
- Deploying on Heroku is a little more complicated to set up than Netlify, but
  still a lot easier than not using Heroku!

Follow the instructions in the practice to deploy any server project this week
onto Heroku.

---
title: Ford Connected Vehicle Software
company: Ford
team: Connected Vehicle
role: Software Architect
start_year: 2022
end_year: 2026
description: Managed a team that created automated test frameworks and traceability tools for vehicle software.
icon: ford.svg
---

I joined Ford in late 2022 to help with the effort to revolutionize how the company
produces software. It was an amazing experience learning about the automotive industry
and the unique software challenges of a real-time, safety critical, distributed systems
environment.

<figure>
    <img src="/assets/images/work/2022-ford-electric-vehicles.jpg"
        alt="Ford F-150 Lightning, E-Transit, Mustang Mach-E" />
    <figcaption>
        When I joined in 2022 Ford had just started shipping their new EV lineup with the
        F-150 Lightning, Mustang Mach-E, and E-Transit.
    </figcaption>
</figure>

# The Fully Networked Vehicle (FNV) Architecture

Ford started developing the Fully Networked Vehicle architecture in ~2017 in response to competitors
like Tesla introducing vehicles that were designed to allow software to completely manage
vehicle systems.

A software-driven architecture is capable of receiving over-the-air updates to
add functionality or address issues in the field, but also enables more advanced software features
such as SAE Level 3+ autonomous driving that were beginning to become more commonplace across
the industry.

To help build the foundation for the Fully Networked Vehicle, Ford
[quietly acquired a large number of BlackBerry staff and facilities in 2017](https://apnews.com/general-news-8b09b589c7ed45a7867a2aa577d58830),
who quickly started cultivating a modern software development culture at Ford, and began
building several core FNV modules:

- Telematics Control Unit (TCU)
- Enhanced Central Gateway Module (ECG)
- Infotainment Module (SYNC)
- Advanced Driver Assistance Module (ADAS)

The 2021 Mustang Mach-E and F-150 were the first vehicles to ship with the new FNV2 architecture,
allowing for over-the-air updates to be delivered to nearly every module in the vehicle, and
eventually (with an update) providing Bluecruise hands-free self-driving.

# My Role

I joined Ford's testing organization, eventually re-branded to "Verification & Validation."

My role was to help improve Ford's automated testing of software components by providing tools,
frameworks, and guidance to the teams responsible for testing both in-house Ford software as
well as software that delivered to Ford by suppliers.

My team maintained a set of libraries and frameworks called "TAT" - "Test Automation Tools."
TAT's lineage traces back to BlackBerry, and helps abstract away things like CAN bus,
test environment configuration, logging, results reporting, etc. so that teams can focus
on writing tests and diagnostics tools.

Along with TAT, my team also managed the infrastructure that ran tests during pull requests,
defending Ford's codebase against changes that would introduce defects. This involved maintaining
a sizable lab of physical ECUs, and maintaining tooling that orchestrates the deployment
and execution of tests for every pull request.

A significant challenge for Ford is extending this style of fully automated testing to
their HiL (hardware-in-the-loop) labs. HiL labs wire together larger systems of physical ECUs
to simulate portions of a full vehicle in order to catch issues that may only occur in a system
environment.

Traditionally, the HiL labs relied mostly on manual or semi-automated testing, where test steps
are documented in a test management system, and a human executes and verifies the result of
each step. TAT, in combination with new AI-enabled test tooling, is being leveraged to help
turn existing semi-manual test cases into fully automated test scripts that can be dynamically
executed against standard HiL benches, similar to how pre-submit manages testing at the ECU level.

My team also enhanced traceability at Ford, building a system that synchronized data from the
various tools used for requirements, work tracking, release tracking, and test tracking.
With one uniform data model, we could generate reports that traced requirements through
implementation to test results, and determine the quality level of a particular software release,
and whether we had sufficient test coverage of the original requirements.

# My Experience in Photos

I was fortunate enough to have Ford fly me to several of their offices across North America
for an in-person introduction to my colleagues and the various development, manufacturing, and
testing facilities. Here are some photos of those experiences!

<figure>
    <img src="/assets/images/work/2022-ford-lightning-frunkie.jpg"
        alt="Me in the frunk of an F-150 Lightning" />
    <figcaption>My first time seeing an F-150 Lightning and its enormous "frunk."</figcaption>
</figure>

<figure>
    <img src="/assets/images/work/2022-ford-world-hq.jpg" alt="Ford World Headquarters" />
    <figcaption>
        The view from my hotel of the iconic Ford World Headquarters building during
        my very first trip to Dearborn.
    </figcaption>
</figure>

<figure>
    <img src="/assets/images/work/2022-ford-mexico-gtbc.jpg" alt="Ford GTBC Mexico" />
    <figcaption>
        The brand new Ford Global Technology and Business Center (GTBC) facility in Mexico City,
        home to a large HiL (hardware-in-the-loop) testing lab and some stylish Pride Month stripes.
        The building is enormous, extending far beyond the boundary of the photo.
    </figcaption>
</figure>

<figure>
    <img src="/assets/images/work/2022-ford-mach-e-assembly.jpg"
        alt="Inside of a partially assembled Mustang Mach-E" />
    <figcaption>
        The inside of a partially assembled Mustang Mach-E during my tour of the Ford Cuautitlán
        Stamping and Assembly Plant (CSAP).
    </figcaption>
</figure>

<figure>
    <img src="/assets/images/work/2022-ford-flashing-mach-e-in-garage.jpg"
        alt="A Mach-E in my garage with the frunk disassembled" />
    <figcaption>
        Flashing new software onto a test vehicle in my garage, before Ford had officially
        established an office in our region.
    </figcaption>
</figure>

<figure>
    <img src="/assets/images/work/2022-ford-test-equipment.jpg"
        alt="Ford test benches and vehicle testing hardware in the Seattle office" />
    <figcaption>
        The first test benches and vehicle testing hardware arrive in the brand new Seattle office!
    </figcaption>
</figure>

<figure>
    <img src="/assets/images/work/2022-ford-buddys-pizza.jpg"
        alt="A close-up of Buddy's Detroit-style pizza" />
    <figcaption>
        I was introduced to Detroit-style pizza at Buddy's in Dearborn. Delicious!
    </figcaption>
</figure>

<figure>
    <img src="/assets/images/work/2022-ford-ottawa-poutine.jpg"
        alt="An Ottawa Senators hockey game with poutine in my hand" />
    <figcaption>
        Pretending I'm Canadian during my visit to the Ottawa office by watching an Ottawa Senators
        hockey game while enjoying some poutine.
    </figcaption>
</figure>
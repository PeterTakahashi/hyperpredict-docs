---
sidebar_position: 1
---

# Why do sandwich attacks happen?

This page explains why sandwich attacks occur.

## Public mempools
- Before inclusion in a block, user transactions are visible in the mempool (pending‑transaction pool).
- Attackers monitor the mempool, detect large swaps or wide slippage tolerances, and quickly construct attack transactions.
- This transparency is a core blockchain feature, but also a breeding ground for frontrunning.

## Abusive RPC behavior
- Many users and dApps connect to the network via RPC servers.
- Malicious RPCs can intercept transactions and leak them to attackers ahead of time.
- Using some “free RPCs” or opaque infra increases the risk that order flow is leaked and abused.

## Validator bribery (MEV‑Boost)
- In Ethereum PoS, validators can determine the ordering of transactions within a block.
- Searchers (attackers) pay validators/builders a bribe to insert their transaction at a favorable position.
- In MEV‑Boost, this ordering optimization is competed for economically, allowing harmful sequences to be realized via a legitimate auction.

## Misbehavior by validators
- Validators can directly sandwich if they build blocks themselves.
- While MEV‑Boost reduces incentives for any single validator to misbehave arbitrarily, it does not eliminate the risk entirely.
- On small networks or appchains with concentrated validators, the risk increases.

## Summary
- Blockchain transparency (public mempools)
- Asymmetry in transaction processing (entities with ordering power)

Together these enable sandwich attacks. Transparency is a strength of blockchains, but it is also exploited for these attacks today.

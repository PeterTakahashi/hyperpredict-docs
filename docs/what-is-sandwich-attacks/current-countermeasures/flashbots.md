---
sidebar_position: 1
---

# Flashbots

Flashbots is an approach to MEV (Maximal Extractable Value) that provides transaction ordering markets and private submission. Via MEV‑Boost and Protect RPC, it aims to reduce the risk of frontrunning and sandwich attacks, though it does not eliminate them entirely.

official website: https://www.flashbots.net/

## How it works
### Origins and purpose
  In Nov 2020 the manifesto “Flashbots: Frontrunning the MEV crisis” was published, followed in Jan 2021 by the launch of Flashbots Auction (mev‑geth + relays). The goal was to mediate and make visible mempool‑driven MEV externalities (frontruns, sandwiches) via an “auction.”  

### PBS (Proposer‑Builder Separation) and MEV‑Boost
  After the PoS transition (The Merge: 2022‑09‑15), validators run MEV‑Boost and receive candidate blocks from builders via competitive bidding. By selecting the highest bid, validators maximize revenue and searchers can send order‑guaranteed bundles to builders.  

### Protect (private submission)
  For end users, Flashbots Protect RPC enables sending transactions directly to a private mempool instead of broadcasting to the public mempool, avoiding early exposure.  

### Payments (coinbase transfers / block payments)
  Searchers include a coinbase transfer in their bundle, embedding payment (bribes) to validators/builders. After PoS, this continues as “additional payment to the block proposer.”  

## Coverage and limits

### What it protects
  - Reduces public‑mempool frontruns by sending via Protect.  
  - Makes block construction competition more transparent while improving validator revenue.  

### Limitations
  - Does not ban or invalidate sandwich attacks themselves.  
  - Transactions not using Protect remain exposed.  
  - Reliance on relays/builders introduces censorship and failure risks.  

## Side effects
1. Not a root‑cause fix  
   Flashbots “markets” the attack surface rather than eliminating it.  
2. Bribe and gas‑fee races  
   Bundles with higher payments get priority, which can escalate fees in the short term.  
3. Risk that ordinary users get crowded out  
   High‑paying bundles may occupy blockspace and push normal user transactions back.  

## Centralization concerns around RPC/relays
- Protect RPC helps, but reliance can concentrate on a few relays/builders, creating single points of failure and potential regulatory censorship.  
- Greater diversity and transparency around relays/builders remains an open need.
- Over 90% of Ethereum blocks have routed via Flashbots relays at times.
- While “anyone can be a validator” is the ethos, Flashbots controls a key ingress path.
- Practically, the infrastructure deciding transaction order can centralize.

## Financials (as of 2025, third‑party estimates)

- Estimated annual revenue: ~$3.5M [Growjo]
- Total funding: ~$60M (Series B on 2023‑07‑21, led by Paradigm) [Tracxn, The Block]
- Valuation: ~$1B (circa 2023) [Growjo, Tracxn]


## Summary
Flashbots reduces harm via ordering markets and private submission, but it does not eradicate sandwich attacks and can introduce new risks (e.g., high‑paying bundle concentration, relay dependence). Additional solutions are necessary to materially reduce sandwich attacks.

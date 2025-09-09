---
sidebar_position: 1
---

# Overview

A sandwich attack is a technique where, when a user attempts to swap tokens on an AMM (Automated Market Maker), an attacker observes the pending transaction and inserts their own trades immediately before and after it to extract profit. Concretely, the attacker places a buy in a frontrun before the victim’s transaction is included on-chain, the victim then executes the swap at a worse price, and the attacker places a sell in a backrun to capture the spread. Because the victim’s transaction is “sandwiched” between the attacker’s two trades, the pattern is called a “sandwich.”

![sandwich attack](./img/sandwich-attack.png)


## Impact of sandwich attacks
Prior analyses report hundreds of thousands of sandwich attacks on Ethereum alone, with attackers capturing tens of millions of dollars in aggregate profit. Recently, there have been single Uniswap v3 swaps that lost more than $200,000 to a sandwich. Similar attacks are repeated on other networks such as BNB Chain, and on some days the affected trading volume reaches billions of dollars. The damage ranges from wasted gas fees for retail users to substantial capital outflows from large trades, making this a serious problem that undermines trust in DeFi.

## Why it matters
Sandwich attacks impose unexpected costs on users and significantly degrade the DeFi experience. Victims end up swapping at unfavorable rates due to slippage, or in some cases their transactions revert and they lose the gas fee. If such attacks are pervasive, users come to view DeFi as opaque and unfair, and many will gravitate back to centralized exchanges (CEXs).

The future of DeFi envisions handling not only crypto assets but also real‑world assets (RWA) such as equities, real estate, government and corporate bonds, and gold, on-chain. However, if the underlying trading environment remains vulnerable to attack, RWA tokenization and adoption will not materialize. Detecting and mitigating sandwich attacks is therefore essential to increase trust in DeFi and to build free and decentralized markets.

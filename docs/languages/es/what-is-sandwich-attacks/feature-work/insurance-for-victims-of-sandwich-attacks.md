---
sidebar_position: 1
---

# Insurance for sandwich‑attack victims

Sandwich attacks are among the most common harms in AMM‑based DeFi. When a user attempts a swap, attackers frontrun and backrun, forcing a worse execution price. This appears to users as an unpredictable extra cost; combined with gas, the loss can be substantial.

## Idea overview
- Offer “sandwich attack insurance” to DeFi users.  
- Users pay a small premium up front and receive coverage per trade or over a period.  
- If harmed by a sandwich attack, reimburse a portion or all of the loss.  

## Feasibility
- On‑chain detection  
  Identify the characteristic pattern (frontrun + victim tx + backrun) from on‑chain logs.  
- Automated payouts  
  Upon detection, a smart contract sends compensation directly to the victim’s wallet.  
- Premium design  
  Price premiums based on incident frequency and average losses to sustain the pool.  

## User benefits
- Reduces psychological risk and enables safer swaps.  
- Especially useful for high‑frequency or large‑size traders.  
- Integration into projects/wallets adds UX value.  

## Challenges
- Accurate on‑chain classification of sandwich attacks is required.  
- Must maintain solvency of the insurance pool (premium income vs. payouts).  
- Sustainability is challenged during periods of high attack frequency.  

## Summary
Insurance for sandwich‑attack victims can improve confidence for DeFi users. While design challenges exist, combining on‑chain detection with automated payouts can make it viable. This can shift users from “trading with assumed attack risk” to “trading with coverage,” improving ecosystem trust overall.

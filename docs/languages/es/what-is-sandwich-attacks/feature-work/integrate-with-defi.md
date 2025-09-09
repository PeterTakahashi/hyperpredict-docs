---
sidebar_position: 2
---

# Integrate sandwich‑attack prediction with DeFi

Existing approaches skew toward “post‑attack compensation” or “structures less prone to attack.” A complementary approach is to predict risk beforehand and warn users.  

We propose a Sandwich Attack Prediction API integrated into Uniswap and other DeFi applications.

## Idea overview
- When a user prepares a swap, the front‑end sends parameters to the API:  
  - Which tokens and how much  
  - Which smart contract/route  
  - User’s slippage tolerance  
- The API analyzes mempool state and market liquidity and returns a 5‑level risk score for sandwich likelihood.  

## Flow (concept)
1. Before the user clicks “Swap,” the front‑end queries the API.  
2. The API returns risk (e.g., 1 = safe, 5 = very risky).  
3. If risk is high, the UI shows a warning and asks for confirmation.  

Example:  
- Risk 1–2 → proceed normally  
- Risk 3 → show a warning (potential price manipulation)  
- Risk 4–5 → show a confirmation dialog before execution  

## User benefits
- Preventive measure: detect risk before executing to avoid losses and wasted gas.  
- Transparency: quantified risk is easier for newcomers to understand.  
- Easy integration: simple to add to existing DeFi UIs via API.  

## Value to DeFi projects
- Improves UX by giving users confidence at trade time.  
- Differentiates from other DEXs/aggregators.  
- Reduces attack losses and improves ecosystem trust.  

## Challenges
- Prediction accuracy is critical; false positives harm UX.  
- Mempool and market conditions change rapidly; real‑time analysis is required.  
- Private mempools and Flashbots‑routed flow are hard to observe externally.  

## Summary
“Sandwich‑attack prediction × DeFi integration” adds a proactive layer to avoid attacks. Alongside insurance and structural (non‑AMM) designs, it is a third approach that can meaningfully improve UX.

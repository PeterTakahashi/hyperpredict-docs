---
sidebar_position: 3
---


# HyperLiquid

Unlike AMM‑based DeFi on Ethereum, HyperLiquid implements a native order‑book exchange on its own chain. This structure avoids AMM‑specific MEV issues such as sandwich attacks at the root. With high throughput and low fees, it is a notable candidate for next‑generation DeFi infrastructure.

official website: https://hyperfoundation.org/


## How it works
### Order‑book model
- AMMs like Uniswap use the constant‑product model; prices depend on pool reserves, so large swaps and frontruns can manipulate price and enable sandwiches.  
- HyperLiquid, by contrast, offers a native order book similar to a CEX.  
  - Price is set by the book, not a pool curve.  
  - A matching engine processes trades, leaving less room for reorder‑based extraction.  

### Custom L1 chain
- Uses a dedicated PoS‑based BFT consensus rather than a general‑purpose chain.  
- Achieves tens of thousands of TPS, targeting CEX‑like on‑chain execution.  
- Fees (gas) are near zero, which avoids bot‑driven gas wars.  

ref: [HyperLiquid docs](https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/overview)

### Why it’s fast
- BFT consensus provides fast finality with minimal latency.  
- Parallel‑execution architecture improves scalability.  
- Tight integration of the order book with the chain improves efficiency.  

## Coverage and limits

### Strengths
- Avoids AMM‑specific sandwich mechanics.  
- Greatly limits in‑block reordering opportunities.  
- High throughput and low fees mean typical users are less disadvantaged vs. attackers.  

### Limits
- Risks like liquidation‑targeting and spoofing remain possible.  
- Some may perceive more centralization vs. fully on‑chain AMMs.  
- If books are thin, slippage can still occur.  

## Outlook
- Sometimes called an “on‑chain CEX,” it’s a next‑gen DeFi model that addresses AMM weaknesses.  
- With low gas and high throughput, it leads competition among order‑book DeFi (e.g., Sei).  
- Could support derivatives and perpetuals fully on‑chain.  
- By offering a fairer trading environment than typical AMMs, it may attract institutions and HFT participants.  

## Summary
HyperLiquid removes AMM‑specific MEV weaknesses at the root. Beyond resistance to sandwiching, it brings performance, fees, and UX closer to CEX standards. It is a strong candidate to shape the future of order‑book‑based DeFi.

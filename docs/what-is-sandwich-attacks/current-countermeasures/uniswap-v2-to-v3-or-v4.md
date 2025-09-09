---
sidebar_position: 5
---

# Uniswap: v2 → v3 (or v4)

Uniswap is a leading AMM protocol and a foundation of DeFi. However, AMMs are vulnerable to sandwich attacks. Uniswap v3 and v4 add features that can mitigate some of this risk.

## v2: Simple constant‑product model
### Characteristics
- Constant‑product AMM: `x * y = k`.  
- All LPs participate under the same pool conditions.  
- Price moves according to reserve changes from swaps.  

### Weaknesses
- With transactions visible in the public mempool, attackers can easily run the frontrun → victim → backrun pattern.  
- Even with slippage limits, induced price moves can still force worse execution.  

---

## v3: Concentrated liquidity and custom ranges
### Improvements
- Concentrated liquidity: LPs choose price ranges, improving capital efficiency.  
- Multiple pools: different fee tiers and ranges coexist.  

### With respect to sandwiches
- Concentrating liquidity can make slippage large within a narrow band when price moves slightly.  
- Attackers can still observe victim flow and preempt it.  
- Complexity increased vs v2, but sandwiches are not solved by default.  

---

## v4: Hooks and customization
### Hooks
- v4 introduces “hooks,” extensibility points around swaps.  
- Inject custom logic before/after a swap.  
- Examples:
  - On‑chain order‑book‑like behavior
  - Dynamic fee setting
  - Additional transaction validations  

### Applying hooks to mitigate sandwiches
- Hooks can verify conditions/order and reduce attack surface.  
- For example, reject orders beyond specified slippage or combine with private order flow.  
- Hooks are optional; v4 does not disable sandwiches by default.  

---

## Migration challenges
- Many users and protocols still rely on v2 pools.  
- Reasons include:  
  - v3+ liquidity management is more complex and costly.  
  - Downstream protocols/aggregators depend on v2, slowing ecosystem migration.  
  - v4 is early, and adoption will take time.  
- As a result, significant capital remains in v2 pools that are more vulnerable to attack.  

---

## Summary
- v2: simplest and most vulnerable to sandwiches.  
- v3: better capital efficiency, but attack surface remains.  
- v4: hooks enable designing more attack‑resistant DEXs, but not by default.  

Uniswap’s evolution does not completely prevent sandwiches; instead it provides flexibility for designers and users to incorporate mitigations.

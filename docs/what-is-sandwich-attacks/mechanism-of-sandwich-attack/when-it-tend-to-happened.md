---
sidebar_position: 2
---

# When are sandwich attacks likely?
Sandwich attacks can happen at any time, but are especially likely under the following conditions.

## Large swaps
- In AMMs (e.g., Uniswap v2), prices depend on pool reserves, so larger trades cause larger price moves (slippage).
- Attackers exploit this price movement to profit.
- Example: swapping 100 WETH at once drives the price down; an attacker buys first and sells after to capture the spread.

## Highly volatile tokens
- Meme coins or freshly listed tokens with sharp price swings are frequent targets.
- Users often set high slippage tolerances, creating room for attackers to wedge in.
- Users end up swapping at much worse prices than intended.


## Transactions not sent via Flashbots/Private RPC
- Transactions sent through the public mempool are visible and easy targets.
- Using Flashbots Protect or encrypted/private RPC can route directly to builders, making attacks harder.
- Many users still do not use these paths, so attacks concentrate there.

## Thin liquidity pools
- In pairs with little liquidity, even small orders move the price substantially.
- Attackers exploit this fragility to sandwich efficiently even with smaller trades.

## Use of lending protocols or flash loans
- Attackers can borrow significant capital temporarily via lending or flash loans to execute large swaps without holding the assets.
- This enables short‑term price manipulation and increases attack efficiency.

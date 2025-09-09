---
sidebar_position: 3
---


# HyperLiquid

与以太坊上基于 AMM 的 DeFi 不同，HyperLiquid 在自有链上实现了原生订单簿交易所。这一结构从根源上规避了 AMM 特有的 MEV 问题（如三明治）。凭借高吞吐与低手续费，它被视为下一代 DeFi 基础设施的有力候选。

official website: https://hyperfoundation.org/


## 工作原理
### 订单簿模型
- Uniswap 等 AMM 使用常数乘积模型，价格取决于资金池储备；因此大额交换与抢跑可推动价格、助长三明治。  
- 相反，HyperLiquid 提供类似 CEX 的原生订单簿：  
  - 价格由订单簿决定，而非池子的曲线。  
  - 匹配引擎撮合交易，区块内重排套利空间更小。  

### 自研 L1 链
- 采用专用的 PoS+BFT 共识，而非通用公链。  
- 可达数万 TPS，力图在链上实现接近 CEX 的撮合体验。  
- 手续费（Gas）接近于零，可避免机器人“Gas 大战”。  

ref: [HyperLiquid docs](https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/overview)

### 高性能的原因
- BFT 共识提供快速终局与极低延迟。  
- 并行执行架构提升可扩展性。  
- 订单簿与链的紧密一体化带来更高效率。  

## 覆盖与局限

### 优势
- 避免 AMM 特有的三明治机制。  
- 大幅压缩区块内重排的机会。  
- 高吞吐、低费用，让普通用户相对不那么吃亏。  

### 局限
- 清算狙击、假单（spoofing）等风险仍可能存在。  
- 相比完全链上 AMM，部分用户可能感到更“中心化”。  
- 当订单簿不够深时，滑点仍会发生。  

## 展望
- 常被称为“链上 CEX”，是补足 AMM 弱点的下一代 DeFi 模式。  
- 依托低 Gas、高吞吐，在订单簿 DeFi（如 Sei）竞争中占优。  
- 未来可在链上完整支持衍生品与永续合约。  
- 通过更公平的交易环境，有望吸引机构与高频交易者参与。  

## 小结
HyperLiquid 从根源上去除了 AMM 的 MEV 结构性弱点。除抗三明治外，它在性能、费用与体验上更接近 CEX 标准，是订单簿 DeFi 未来的重要候选者。

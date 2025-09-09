---
sidebar_position: 1
---

# EVM Basics

The Ethereum Virtual Machine (EVM) is the smart‑contract execution environment that runs on Ethereum and many EVM‑compatible blockchains. Understanding the EVM is essential to grasp how sandwich attacks work.

## Proof of Stake (PoS)
Ethereum currently uses PoS, where validators obtain the right to produce blocks by staking tokens. Validators can determine the order of transactions within a block, which is the source of MEV (Maximal Extractable Value).
In Ethereum’s PoS, validators probabilistically obtain the right to propose a block in proportion to their stake. The chosen proposer can decide transaction ordering, enabling sandwich attacks. With over a million validators, large‑scale fraud (chain rewrites) is extremely difficult; however, one‑off MEV extraction (including sandwich attacks) as “legitimate in‑block reordering” is commonplace.

## Validator
Validators verify transactions and produce blocks. They can inspect pending transactions in the mempool and, in some cases, manipulate ordering to capture profit.

## Block & Transaction
Each block contains multiple transactions, and their order is determined by the block proposer (validator). This ability to reorder enables frontrunning and sandwich attacks.

## RPC Server
Users and dApps typically connect to the network and send transactions via RPC (Remote Procedure Call) servers. If an RPC server behaves maliciously, it can intercept order flow and leak it for attacks.

## Solidity
Many DeFi protocols are written in Solidity and run on the EVM. While smart contracts are transparent, that same transparency can make it easier for attackers to understand and exploit protocol mechanics.

## Wallet
Wallets (software or hardware) manage private keys and sign/send transactions. They are both a vault for assets and the user interface to the Ethereum network. Transactions sent from a wallet enter the mempool via an RPC server and are then included in a block.

---
sidebar_position: 1
---

# Fundamentos de EVM

La Ethereum Virtual Machine (EVM) es el entorno de ejecución de contratos inteligentes que corre en Ethereum y muchas cadenas compatibles con EVM. Entender la EVM es clave para comprender cómo funcionan los ataques sandwich.

## Proof of Stake (PoS)
Ethereum usa PoS: los validadores obtienen el derecho a proponer bloques al hacer stake. Los validadores pueden decidir el orden de las transacciones dentro del bloque, lo que es fuente de MEV (Maximal Extractable Value). En PoS, la probabilidad de proponer un bloque es proporcional al stake. El proponente elegido ordena transacciones, habilitando ataques sandwich. Con más de un millón de validadores, un fraude a gran escala es muy difícil; sin embargo, extracciones puntuales de MEV (incluyendo sandwich) como “reordenamiento legítimo en bloque” son comunes.

## Validador
Los validadores verifican transacciones y producen bloques. Pueden ver transacciones pendientes en el mempool y, en algunos casos, manipular el orden para capturar beneficio.

## Bloque y transacción
Cada bloque contiene múltiples transacciones; su orden lo decide el proponente (validador). Esta capacidad de reordenar habilita frontrunning y ataques sandwich.

## Servidor RPC
Los usuarios y dApps se conectan y envían transacciones mediante RPC (Remote Procedure Call). Si un RPC actúa maliciosamente, puede interceptar el flujo de órdenes y filtrarlo para ataques.

## Solidity
Muchos protocolos DeFi están escritos en Solidity y corren en la EVM. Aunque los contratos son transparentes, esa transparencia facilita a atacantes entender y explotar la mecánica.

## Wallet
Las wallets (software o hardware) gestionan claves privadas y firman/envían transacciones. Son bóveda de activos e interfaz con la red. Las transacciones enviadas desde la wallet entran al mempool vía RPC y luego se incluyen en un bloque.

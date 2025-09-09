---
sidebar_position: 1
---

# Flashbots

Flashbots es un enfoque de MEV (Maximal Extractable Value) que ofrece mercados de ordenación de transacciones y envío privado. A través de MEV‑Boost y Protect RPC, busca reducir el riesgo de frontrunning y ataques sandwich, aunque no los elimina por completo.

official website: https://www.flashbots.net/

## Cómo funciona
### Origen y propósito
  En nov de 2020 se publicó el manifiesto “Flashbots: Frontrunning the MEV crisis” y en ene de 2021 se lanzó Flashbots Auction (mev‑geth + relays). El objetivo fue mediar y hacer visibles, vía una “subasta”, las externalidades de MEV originadas en el mempool público (frontrun, sandwich).  

### PBS (Proposer‑Builder Separation) y MEV‑Boost
  Tras el paso a PoS (The Merge: 2022‑09‑15), los validadores ejecutan MEV‑Boost y reciben bloques candidatos de los builders mediante puja competitiva. Al elegir la oferta más alta maximizan ingresos; los searchers envían bundles con orden garantizado a los builders.  

### Protect (envío privado)
  Para usuarios finales, Protect RPC permite enviar transacciones a un mempool privado en lugar de difundirlas en el público, evitando exposición temprana.  

### Pagos (transferencias a coinbase / pagos por bloque)
  Los searchers incluyen una transferencia a coinbase en su bundle, embebiendo el pago (soborno) a validadores/builders. Tras PoS, continúa como “pago adicional al proponente”.  

## Cobertura y límites

### Lo que protege
  - Reduce el frontrun del mempool público al enviar por Protect.  
  - Hace más transparente la competencia por construir bloques y mejora el ingreso del validador.  

### Limitaciones
  - No prohíbe ni invalida el ataque sandwich en sí.  
  - Las transacciones fuera de Protect siguen expuestas.  
  - La dependencia de relays/builders introduce riesgos de censura y fallos.  

## Efectos secundarios
1. No soluciona la causa raíz  
   “Mercantiliza” la superficie de ataque en vez de eliminarla.  
2. Carrera de sobornos y comisiones  
   Los bundles con mayores pagos tienen prioridad y elevan comisiones a corto plazo.  
3. Riesgo de expulsar a usuarios normales  
   Bundles de alto pago ocupan el bloque y relegan transacciones comunes.  

## Riesgos de centralización en RPC/relays
- Protect ayuda, pero la dependencia puede concentrarse en pocos relays/builders, creando puntos únicos de fallo y posible censura regulatoria.  
- Aumentar diversidad y transparencia de relays/builders sigue pendiente.
- En momentos, >90% de bloques de Ethereum han pasado por relays de Flashbots.
- Aunque “cualquiera puede ser validador” es el ideal, Flashbots controla una vía de entrada clave.
- En la práctica, la infraestructura que decide el orden puede centralizarse.

## Finanzas (2025, estimaciones de terceros)

- Ingresos anuales estimados: ~3,5 M USD [Growjo]
- Financiación total: ~60 M USD (Serie B 2023‑07‑21, Paradigm) [Tracxn, The Block]
- Valoración: ~1 B USD (2023) [Growjo, Tracxn]


## Resumen
Flashbots reduce el daño con mercados de ordenación y envío privado, pero no erradica los ataques sandwich y puede introducir nuevos riesgos (concentración de bundles de alto pago, dependencia de relays). Se necesitan soluciones adicionales para reducir sustancialmente los ataques.

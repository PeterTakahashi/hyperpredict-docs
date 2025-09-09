---
sidebar_position: 1
---

# Kindlustus sandwich‑rünnaku ohvritele

AMM‑põhises DeFi’s on sandwich üks levinumaid kahjusid. Kasutaja proovib vahetada, ründaja frontrun’ib ja backrun’ib ning sunnib tehingu halvemal hinnal. See ilmneb kasutajale “ootamatu lisakuluna”; koos gaasiga võib kahju olla suur.

## Idee kokkuvõte
- Pakkuda DeFi kasutajale “sandwich‑kindlustust”.  
- Kasutaja maksab väikese preemia ja saab kaitse tehingu- või perioodipõhiselt.  
- Ründe korral hüvitatakse kahju osaliselt või täielikult.  

## Teostatavus
- On‑chain tuvastus  
  Muster (frontrun + ohvri tx + backrun) tuvastatakse ahela logidest.  
- Automaatne väljamakse  
  Tuvastuse järel maksab nutileping hüvitise ohvri rahakotti.  
- Preemia kujundus  
  Hind põhineb sagedusel ja keskmisel kahjul, et hoida fond jätkusuutlik.  

## Kasu kasutajale
- Väiksem psühholoogiline risk ja kindlam vahetamine.  
- Eriti sobiv kõrgsageduslikele või suurtele kauplejatele.  
- Projekti/rahakotti integreerituna parandab UX‑i.  

## Väljakutsed
- Vajalik on‑chain täpne klassifitseerimine sandwich’i tuvastamiseks.  
- Fondi maksevõime (preemiad vs väljamaksed) peab säilima.  
- Kõrge ründeaktiivsuse perioodidel on jätkusuutlikkus proovile pandud.  

## Kokkuvõte
Kindlustus sandwich‑rünnaku ohvritele võib tõsta DeFi kasutajate kindlust. Kuigi disainis on väljakutseid, muudab on‑chain tuvastuse ja automakse kombinatsioon lahenduse teostatavaks ning nihutab kasutaja “ründeriskiga” tehingult “kaitstud” tehingule – kasvatades usaldust ökosüsteemis.

---
sidebar_position: 1
---

# Flashbots

Flashbots on MEV‑i (maksimaalselt väljatõmmatav väärtus) ümber kujundatud lähenemine, mis pakub tehingute järjestamise turgu ja privaatset edastust (Protect RPC). MEV‑Boosti ja Protect RPC abil vähendatakse frontrunning’u ja sandwich‑rünnakute riski, kuid neid ei kõrvaldata täielikult.

official website: https://www.flashbots.net/

## Kuidas see töötab
### Päritolu ja eesmärk
  2020. a novembris avaldati manifest “Flashbots: Frontrunning the MEV crisis”; 2021. a jaanuaris käivitati Flashbots Auction (mev‑geth + relay’d). Eesmärk oli muuta avalikust mempoolist lähtuvad MEV‑i välismõjud (frontrun, sandwich jne) oksjonipõhiselt hallatavaks ja nähtavaks.  

### PBS (proposer‑builder separation) ja MEV‑Boost
  Pärast The Merge’i (2022‑09‑15) kasutavad valideerijad MEV‑Boosti, saades builder’itelt kandidaadiplokke konkurentspakkumiste teel. Kõrgeim pakkumine maksimeerib valideerija tulu; otsijad saavad saata järjekorra‑garantiiga bundle’id.  

### Protect (privaatne edastus)
  Protect RPC võimaldab saata tehingu otse privaatsesse mempooli, mitte avalikku – nii välditakse varajast avalikustamist.  

### Maksmine (coinbase’i ülekanded / plokimaksed)
  Otsijad lisavad bundle’isse coinbase’i ülekande, tasudes valideerijale/builder’ile (bribe). PoS‑i järel püsib see “täiendava makse” vormis plokipakkujale.  

## Katta suudetav ja piirangud

### Mida kaitstakse
  - Avaliku mempooli põhine frontrunning väheneb Protecti kaudu edastamisel.  
  - Plokiehituse konkurents muutub läbipaistvamaks ja valideerija tulu kasvab.  

### Piirangud
  - Sandwich‑rünnakuid ennast ei keelustata ega tühistata.  
  - Protectita tehingud on endiselt haavatavad.  
  - Sõltuvus relay’dest/builder’itest tekitab tsensuuri ja rikke riski.  

## Kõrvalmõjud
1. Pole juur‑põhjuse lahendus – ründe‑pinda “turustatakse”, mitte ei kaotata.  
2. Altkäemaksu ja gaasitasude võidujooks – suurema maksega bundle’id saavad prioriteedi ja tasud võivad lühiajaliselt tõusta.  
3. Tavakasutajate “välja tõrjumise” risk – kõrge tasuga bundle’id võivad plokiruumi täita ja tavalised tehingud taha lükata.  

## RPC/relay’de tsentraliseerumise mure
- Protect RPC aitab, kuid sõltuvus võib koonduda vähestele relay’dele/builder’itele – tekivad üksikvea‑punktid ja regulatiivne tsensuuririsk.  
- Relay’de/builder’ite mitmekesisuse ja läbipaistvuse suurendamine on jätkuv vajadus.
- Ajalooliselt on >90% Eth plokkidest liikunud Flashbotsi relay’de kaudu.
- Kuigi ideaal on “igaüks võib olla valideerija”, kontrollib Flashbots olulist sissepääsukanalit.
- Praktikas võib tehingujärjekorda määrav infrastruktuur koonduda.

## Rahandus (2025, kolmandate hinnang)

- Aastakäive: ~3,5 mln USD [Growjo]
- Koguraha: ~60 mln USD (B‑voor 2023‑07‑21, Paradigm) [Tracxn, The Block]
- Väärtus: ~1 mld USD (2023) [Growjo, Tracxn]


## Kokkuvõte
Flashbots vähendab kahju järjestamisturu ja privaatse edastuse abil, kuid ei kaota sandwich‑rünnakuid ega nende uusi riske (nt kõrge tasuga bundle’ite koondumine, relay‑sõltuvus). Märgatavaks vähendamiseks on vaja lisameetmeid.

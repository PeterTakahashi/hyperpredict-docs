---
sidebar_position: 2
---

# Integreeri sandwich‑rünnaku prognoos DeFi‑ga

Varasemad lähenemised on kaldunud “pärast fakti kompensatsioonile” või “ründe‑kindlamale disainile”. Täiendav tee on riskide etteteatamine ja kasutaja hoiatamine.  

Pakume sandwich‑rünnaku prognoosi API‑t ja integreerime selle Uniswap’i ja teiste DeFi rakendustega.

## Ülevaade
- Enne vahetust saadab frontend API‑le parameetrid:  
  - millised tokenid ja kui palju  
  - millise lepingu/ruudingu kaudu  
  - libisemise taluvus  
- API analüüsib mempooli ja likviidsust ning tagastab 5‑astmelise riskihinnangu sandwich’i tõenäosusele.  

## Voog (näide)
1. Enne “Swap” klikki küsib frontend API‑lt.  
2. API tagastab riski (nt 1 = ohutu, 5 = väga riskantne).  
3. Kõrge riski korral kuvatakse hoiatus ja palutakse kinnitus.  

Näide:  
- Risk 1–2 → tavapärane täitmine  
- Risk 3 → hoiatus (võimalik hinnamanipulatsioon)  
- Risk 4–5 → kinnitusküsimus enne täitmist  

## Kasu kasutajale
- Ennetav meede: riski tuvastus enne täitmist – vältida kahju ja gaasiraiskamist.  
- Läbipaistvus: kvantifitseeritud risk on uutele arusaadav.  
- Lihtne integreerida: API sobitub olemasoleva UI‑ga.  

## Väärtus DeFi projektile
- Parem UX – rohkem kindlust tehingu hetkel.  
- Eristumine teistest DEX‑idest/agregeerijatest.  
- Väiksem kahju ja suurem usaldus ökosüsteemis.  

## Väljakutsed
- Täpsus on kriitiline; valehäired halvendavad UX‑i.  
- Mempool ja turg muutuvad kiiresti – vaja reaalajalist analüüsi.  
- Privaatsed mempoolid ja Flashbotsi vood on väljast raskesti nähtavad.  

## Kokkuvõte
“Sandwich‑i prognoos × DeFi integratsioon” lisab proaktiivse kaitsekihi. Koos kindlustuse ja struktuurse (non‑AMM) disainiga on see kolmas tõhus lähenemine UX‑i parandamiseks.

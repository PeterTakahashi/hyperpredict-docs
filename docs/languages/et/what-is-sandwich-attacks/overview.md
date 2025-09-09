---
sidebar_position: 1
---

# Ülevaade (Overview)

Sandwich‑rünnak on võte, kus ründaja jälgib kasutaja AMM‑is (Automated Market Maker) ootel olevat tehingut ja lisab enne ning pärast seda oma tehingud, et hinnavahe pealt kasu saada. Praktikas ostab ründaja ohvri tehingu lisandumise eel (frontrun), ohver sooritab vahepeal vahetuse halvemal hinnal, ja seejärel müüb ründaja (backrun), püüdes kinni tekkinud spread’i. Kuna ohvri tehing jääb ründaja kahe tehingu “vahele”, kutsutakse muster “sandwich’iks”.

![sandwich attack](./img/sandwich-attack.png)


## Sandwich‑rünnakute mõju
Uuringud näitavad, et ainuüksi Ethereumi võrgus on toimunud sadu tuhandeid sandwich‑rünnakuid ja ründajate kogukasum on ulatunud kümnetesse miljonitesse dollaritesse. Viimati on üksikud Uniswap v3 vahetused kaotanud üle 200 000 dollari. Sarnaseid rünnakuid esineb ka teistes võrkudes (nt BNB Chain) ja mõnel päeval on mõjutatud mahud miljardites dollarites. Kahjud ulatuvad gaasitasude raiskamisest kuni suurte tehingute kapitali väljavooluni, õõnestades DeFi usaldusväärsust.

## Miks see on oluline
Sandwich‑rünnak tekitab kasutajale ootamatuid kulusid ning rikub oluliselt DeFi kasutuskogemust. Ohver vahetab libisemise tõttu halvemal kursil või (minimaalset väljundit kasutades) pööratakse tehing tagasi ja kaotatakse üksnes gaasitasu. Kui sellised rünnakud on laialt levinud, nähakse DeFi’d kui ebaausat ja läbipaistmatut ning liigutakse tagasi tsentraliseeritud börsidele (CEX).

DeFi tulevik hõlmab lisaks krüptoassetitele ka reaalse maailma varasid (RWA) – aktsiad, kinnisvara, võlakirjad, kuld jne. Kui alus‑turukeskkond jääb rünnakutele haavatavaks, ei juurdu RWA tokeniseerimine ega kasutuselevõtt. Seetõttu on sandwich‑rünnakute tuvastamine ja leevendamine hädavajalik, et kasvatada usaldust DeFi vastu ja ehitada vaba, detsentraliseeritud turgu.

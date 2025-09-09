---
sidebar_position: 2
---

# Millal on sandwich‑rünnak tõenäoline?
Sandwich‑rünnak võib toimuda igal ajal, kuid eriti sageli järgmistes olukordades:

## Suured vahetused
- AMM‑ides (nt Uniswap v2) sõltub hind puuli jäägist; mida suurem tehing, seda suurem libisemine.
- Ründajad kasutavad hinnaliikumist kasumi teenimiseks.
- Nt 100 WETH korraga – hind langeb; ründaja ostab enne ja müüb pärast, püüdes spread’i.

## Kõrge volatiilsusega tokenid
- Meemimündid või äsja noteeritud tokenid kõiguvad järsult ja on sagedased sihtmärgid.
- Kasutajad seavad sageli suure libisemise, mis jätab ründajale ruumi vahele trügida.
- Tulemus: tehing toimub oodatust palju kehvema hinnaga.


## Avaliku mempooli kaudu saadetud tehingud
- Avalikus mempoolis olevat tehingut näevad kõik – kerge sihtmärk.
- Flashbots Protect või privaatne/krüptitud RPC suunab otse builder’ile ja vähendab ründe riski.
- Paljud ei kasuta neid kanaleid, mistõttu rünnakud koonduvad sinna.

## Õhukese likviidsusega puulid
- Vähese likviidsusega paarides liigutavad isegi väikesed orderid hinda.
- Ründajad kasutavad seda haprust ja sandwich’ivad tõhusalt ka väikeste tehingutega.

## Laenuprotokollid ja flash‑laenud
- Ründajad saavad ajutiselt suuri summasid laenata ja teha suuri vahetusi ilma varasid omamata.
- See võimaldab lühiajalist hinnamanipulatsiooni ja tõstab ründe tõhusust.

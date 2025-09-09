---
sidebar_position: 1
---

# Miks sandwich‑rünnakud tekivad?

See leht selgitab sandwich‑rünnakute põhjuseid.

## Avalik mempool
- Enne plokki lisamist on tehingud mempoolis kõigile nähtavad.
- Ründajad jälgivad mempooli, märkavad suuri vahetusi või suurt libisemist ja koostavad kiiresti ründe‑tehingud.
- Läbipaistvus on plokiahela tugevus, kuid soodustab ka frontrunning’ut.

## RPC kuritarvitamine
- Paljud kasutajad ja dAppid suhtlevad võrguga RPC serverite kaudu.
- Pahatahtlik RPC võib tehinguid pealt püüda ja need ründajale enne tähtaega avaldada.
- Mõned “tasuta” või läbipaistmatud RPC‑d suurendavad orderivoo lekkimise riski.

## Valideerijate altkäemaks (MEV‑Boost)
- Ethereumi PoS‑is määravad valideerijad ploki sees tehingute järjekorra.
- Otsijad (searcher’id) maksavad valideerijale/ehitajale (builder) altkäemaksu, et oma tehing soodsasse kohta paigutada.
- MEV‑Boosti oksjoniline korraldus realiseerib need jadad majandusliku konkurentsi teel.

## Valideerijate väärkäitumine
- Kui valideerija ise ehitab ploki, võib ta sandwich’ida otse.
- MEV‑Boost vähendab üksiku valideerija motivatsiooni meelevaldselt käituda, kuid ei nulli riski.
- Väikestes võrkudes või suure keskendumisega kettides on risk kõrgem.

## Kokkuvõte
- Plokiahela läbipaistvus (avalik mempool)
- Tehingutöötluse asümmeetria (järjekorra määramise võim)

Koos loovad need sandwich‑rünnakuks eeldused. Läbipaistvus on tugevus, kuid seda kuritarvitatakse rünnakuteks.

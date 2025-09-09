---
sidebar_position: 1
---

# EVM alusõpetus

Ethereumi virtuaalmasin (EVM) on nutilepingute täitmiskeskkond Ethereumis ja paljudes EVM‑ühilduvates ahelates. EVM‑i mõistmine aitab aru saada sandwich‑rünnaku tekkepõhjustest ja mehhanismist.

## Proof of Stake (PoS)
Ethereum kasutab PoS‑i: valideerijad saavad panustades ploki pakkumise õiguse. Nad määravad ploki sees tehingute järjekorra – see on üks MEV‑i allikaid. Valitud pakkuja otsustab järjekorra, mis võib lubada sandwich’i. Üle miljoni valideerija tõttu on ahela ümberkirjutus ebatõenäoline, kuid “plokisisene seaduslik ümberjärjestus” (sh sandwich) on tavaline.

## Valideerija (Validator)
Valideerib tehinguid ja pakub plokke. Saab mempooli põhjal järjekorda mõjutada ja mõnel juhul kasu teenida.

## Plokk ja tehing
Plokk sisaldab mitut tehingut; järjekorra määrab pakkuja (valideerija). See võimekus võimaldab frontrunning’ut ja sandwich’i.

## RPC server
Kasutajad ja dAppid saadavad tehingud RPC (remote procedure call) kaudu. Pahatahtlik RPC võib orderivoo vahele püüda ja lekkinu ründajale edastada.

## Solidity
Paljud DeFi protokollid on kirjutatud Soliditys ja töötavad EVM‑is. Läbipaistvus on suur, kuid see teeb mehhanismide kuritarvitamise ründajaile lihtsamaks.

## Rahakott (Wallet)
Tark‑ või riistvaraline rahakott haldab privaatvõtmeid ja allkirjastab/saadab tehinguid. See on nii varade “seif” kui ka liides Ethereumiga. Tehingud liiguvad rahakotist RPC kaudu mempooli ja sealt plokki.

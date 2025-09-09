---
sidebar_position: 5
---

# Uniswap: v2 → v3 (või v4)

Uniswap on juhtiv AMM‑protokoll ja üks DeFi alustaladest. AMM‑id on sandwich‑rünnakute suhtes haavatavad. v3 ja v4 lisavad funktsioone, mis riski osaliselt leevendavad.

## v2: lihtne konstantse korrutise mudel
### Iseloom
- Konstantsel korrutisel põhinev AMM: `x * y = k`  
- Kõik LP‑d osalevad samadel tingimustel  
- Hind liigub vastavalt reservide muutusele  

### Nõrkused
- Tehing on avalikus mempoolis, ründaja saab hõlpsalt teha “frontrun → ohver → backrun”.  
- Ka libisemispiirangutega saab hinnaliikumist esile kutsuda ja teostada halvemal hinnal.  

---

## v3: koondatud likviidsus ja kohandatavad vahemikud
### Parandused
- Koondatud likviidsus: LP valib hinnavahemiku – parem kapitali kasutus.  
- Mitme tasuga puulid paralleelselt.  

### Mõju sandwich’ile
- Koondumine võib tekitada suurt libisemist ka väikese liikumise korral kitsas vahemikus.  
- Ründaja saab endiselt ohvri voo ees tegutseda.  
- Keerukam kui v2, kuid sandwich’i ei lahenda vaikimisi.  

---

## v4: Hooks ja kohandamine
### Hooks
- v4 lisab vahetuse ümber haakepunktid.  
- Saab lisada kohandatud loogikat enne/pärast swap’i.  
- Näited:
  - on‑chain orderiraamatu sarnane käitumine
  - dünaamilised tasud
  - täiendavad kontrollid  

### Hooks sandwich’i leevendamiseks
- Tingimuste/järjestuse kontroll, väiksem ründe‑pind.  
- Nt keelduda liiga suure libisemisega orderist või kombineerida privaatse orderivoo‑ga.  
- Hookid on valikulised; v4 ei blokeeri sandwich’i vaikimisi.  

---

## Ülemineku väljakutsed
- Paljud kasutajad/protokollid sõltuvad endiselt v2 puulidest.  
- Põhjused:  
  - v3+ likviidsuse haldus on keerukam ja kulukam  
  - allavoolu protokollid/agregeerijad on v2‑st sõltuvad  
  - v4 on vara; kasutuselevõtt võtab aega  
- Seetõttu püsib palju kapitali ründe‑altis v2‑s.  

---

## Kokkuvõte
- v2: lihtsaim ja sandwich’ile kõige haavatavam  
- v3: parem kapitali efektiivsus, kuid ründe‑pind jääb  
- v4: hookidega saab disainida ründe‑kindlama DEX‑i, kuid vaikimisi mitte  

Uniswap ei välista sandwich’i, kuid annab disaineritele ja kasutajatele paindlikkuse kaitseid kombineerida.

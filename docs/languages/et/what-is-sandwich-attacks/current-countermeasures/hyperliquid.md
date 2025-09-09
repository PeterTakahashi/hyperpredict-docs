---
sidebar_position: 3
---


# HyperLiquid

Erinevalt Ethereumi AMM‑põhisest DeFi’st on HyperLiquid ehitanud oma ketile loomuliku orderiraamatuga börsi. Nii välditakse AMM‑idele omaseid MEV‑riske (nt sandwich) juba struktuurselt. Kõrge läbilaske ja madalate tasude tõttu peetakse seda järgmise põlvkonna DeFi infrastruktuuri kandidaadiks.

official website: https://hyperfoundation.org/


## Kuidas see töötab
### Orderiraamatu mudel
- Uniswap‑i sarnased AMM‑id kasutavad konstantse korrutise mudelit; hind sõltub puuli jäägist, mistõttu suured vahetused ja frontrun soodustavad sandwich’i.  
- HyperLiquid pakub seevastu CEX‑i sarnast loomulikku orderiraamatut.  
  - Hind kujuneb raamatus, mitte puuli kõveral.  
  - Matšimismootor töötleb tehingud; plokisisese ümberjärjestuse ruumi on vähem.  

### Kohandatud L1
- Põhineb spetsiaalsel PoS+BFT konsensusel, mitte üldotstarbelisel ahelal.  
- Kümned tuhanded TPS‑id; eesmärk on CEX‑i lähedane on‑chain teostus.  
- Tasud on pea nullilähedased, vältides bot’ide gaasisõdu.  

ref: [HyperLiquid docs](https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/overview)

### Miks see on kiire
- BFT annab kiire lõplikkuse ja väga madala latentsi.  
- Paralleeltäitmise arhitektuur parandab skaleeruvust.  
- Orderiraamatu ja keti tihe integratsioon tõstab efektiivsust.  

## Katta suudetav ja piirangud

### Tugevused
- AMM‑idele omased sandwich‑mehhanismid ei teki.  
- Plokisisese ümberjärjestuse võimalus on oluliselt väiksem.  
- Kõrge läbilase ja madalad tasud vähendavad tavakasutaja ebasoodsat seisu vs botid.  

### Piirangud
- Likvideerimis‑sihtimine, spoofing jms riskid pole võimatud.  
- Mõnede jaoks võib tunduda tsentraliseeritum kui “täielik on‑chain AMM”.  
- Kui orderiraamat on õhuke, esineb libisemist.  

## Väljavaade
- Nn “on‑chain CEX” – järgmise põlvkonna mudel, mis katab AMM‑ide nõrkusi.  
- Madal gaas + kõrge läbilase – eelis orderiraamatu DeFi’s (nt Sei).  
- Võimalik täielik on‑chain tuletisinstrumentide tugi.  
- Õiglasem teostus võib tuua institutsioone ja HFT‑osalejaid.  

## Kokkuvõte
HyperLiquid kõrvaldab AMM‑i struktuursed MEV‑nõrkused. Lisaks vastupidavusele sandwich’ile lähenevad jõudlus, tasud ja UX CEX‑i standarditele. Tõenäoline võtmemängija orderiraamatu‑põhise DeFi tulevikus.

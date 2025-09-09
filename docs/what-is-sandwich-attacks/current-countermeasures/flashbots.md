---
sidebar_position: 1
---

# Flashbots

Flashbotsは、MEV（最大抽出可能価値）問題に対処するために設計された、トランザクションの順序制御とプライベート送信を実現する仕組みです。MEV-BoostやProtect RPCなどの機能を通じて、フロントランやサンドイッチ攻撃のリスク軽減を目指しますが、根本的な攻撃排除には至っていません。

## 仕組み
### 起源と目的
  2020年11月に「Flashbots: Frontrunning the MEV crisis」という宣言が公開され、実装は2021年1月に *Flashbots Auction*（mev-geth＋リレー）がローンチされた。目的は、公開メンプール起因のフロントランやサンドイッチなどのMEV外部性を“オークション”で調停・可視化することだった。  

### PBS（提案者‐ビルダー分離）と MEV-Boost
  PoS移行（The Merge：2022年9月15日）後、バリデータは **MEV-Boost** を走らせ、ビルダーが組んだ複数の候補ブロックを競争入札で受け取る。最も高い入札を選ぶことで、バリデータは収益最大化、サーチャーは順序保証付きの**バンドル**をビルダーへ送信できる。  

### Protect（プライベート送信
  エンドユーザー向けには **Flashbots Protect RPC** が提供され、Txは公開メンプールに拡散されず、プライベートメンプールへ直接送信されるため、前出し観測を避けられる。  

### 支払い（コインベース転送／ブロック支払い）
  サーチャーはバンドル内で **coinbase転送** を仕込み、バリデータやビルダーに対する対価（ブライブ）を組み込む。PoS以降も「ブロック提案者への追加支払い」として継続している。  

## 守れる範囲と限界

### 守れる範囲
  - 公開メンプール経由の先回りを抑止（Protect経由で送信）。  
  - バリデータはMEV-Boostを通じて収益最大化でき、ブロック組成の競争が透明化。  

### 限界
  - サンドイッチ攻撃そのものを禁止・無効化する仕組みではない。  
  - Protectを使わないTxは依然攻撃対象。  
  - リレー／ビルダー依存により、検閲や障害のリスクが生じる。  

## 限界と副作用
1. **根本的な対策にはなっていない**  
   Flashbotsは攻撃を“市場化”したに過ぎず、攻撃の存在を排除する仕組みではない。  
2. **賄賂とガス代競争の問題**  
   高額支払いを含むバンドルが優先されるため、短期的に支払い競争・手数料高騰を招く。  
3. **「普通の人のTxが処理されない」リスク**  
   ブロック空間が高額バンドルで埋まり、一般ユーザーのTxが後回しになる副作用がある。  

## RPCの中央集権化問題
- Protect RPC利用は有効だが、**少数のリレー／ビルダーに集中**しやすく、単一障害点や規制対応による検閲のリスクを伴う。  
- リレー／ビルダーの多様化や、統計の透明化が今後の課題である。
- Ethereumの90%以上のブロックがFlashbots Relay経由
- 「誰でもValidatorになれる分散システム」が理念だったが、Flashbotsが入口を押さえている。
- 実質的に「Ethereumの取引順序を決めるインフラ」が1社に集中。

## 財務情報（2025年時点）

- **推定年商**： 約 350万ドル／年（約 4.7億円） [oai_citation:0‡Growjo](https://growjo.com/company/Flashbots?utm_source=chatgpt.com)  
- **資金調達総額**： 約 6,000万ドル（シリーズB：2023年7月21日、Paradigm主導） [oai_citation:1‡Tracxn](https://tracxn.com/d/companies/flashbots/__YfTCmThKYRZR9LpAP8fgvvFJ3D-HVQWLLlQdVpkUJSY?utm_source=chatgpt.com) [oai_citation:2‡The Block](https://www.theblock.co/post/241327/flashbots-becomes-unicorn-after-completing-60-million-raise?utm_source=chatgpt.com)  
- **評価額（バリュエーション）**： 約 10億ドル（2023年時点） [oai_citation:3‡Growjo](https://growjo.com/company/Flashbots?utm_source=chatgpt.com) [oai_citation:4‡Tracxn](https://tracxn.com/d/companies/flashbots/__YfTCmThKYRZR9LpAP8fgvvFJ3D-HVQWLLlQdVpkUJSY?utm_source=chatgpt.com)  


## まとめ
Flashbotsは「順序の市場化」と「プライベート送信」で被害を軽減できるが、攻撃そのものを根絶する仕組みではない。むしろ高額バンドル集中やリレー依存といった新たなリスクも生む。なのでサンドイッチ攻撃を減らすには、解決策が必要である。

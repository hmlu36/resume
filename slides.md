---
# title of your slide, will inferred from the first header if not specified
title: Joshua Profile
# titleTemplate for the webpage, `%s` will be replaced by the slides deck's title
titleTemplate: '%s'
# information for your slides, can be a Markdown string
info: false
author: Joshua Lu
# ... 其他 slidev 設定 ...
css:
  - ./style/layout.css # 相對於 slides.md 的路徑
# 封面頁設定，您可以指定一個背景圖片
layout: cover
style: "background-image: linear-gradient(to bottom, #434343 0%, #000000 100%);"
---

<div class="flex items-center justify-center p-4 md:p-8 h-full"> <!-- 新增 h-full 使其填滿整個投影片高度 -->
  <div class="mr-6 md:mr-10 flex-shrink-0">
    <div class="p-2 bg-gradient-to-r from-gray-100 to-gray-500 rounded-full inline-block">
    <!-- 確保圖片路徑正確，Slidev 中 public 資料夾下的資源可以直接用 /images/profile.png 引用 -->
    <img src="/images/profile.png" alt="個人照片" class="w-32 md:w-40 h-auto rounded-full shadow-lg" /> <!-- 稍微調整 md 尺寸 -->
    </div>
      </div>
      <div class="text-left">
    <h1 class="text-4xl md:text-5xl font-bold">自我介紹</h1>
    <p class="text-4xl md:text-4xl mt-1 md:mt-2 font-bold">盧泓民 Joshua Lu</p>
    <!-- 建議在這裡加入應徵職位 -->
    <p class="text-2xl md:text-3xl mt-2 text-gray-400">應徵職位： 資訊應用開發工程師</p>
  </div>
</div>

---
class: bg-styled-img-[/images/computer-programmer.jpg]
---

# 👨‍💻 **Profile - 簡介**

- # 擅長 **C# 與 .NET 框架**
- # 串接 **多種資料庫(SQL, NoSQL)** 
- # 掌握 **前端技術(HTML5, CSS, Vue)** 
- # 注重 **團隊合作**與**高效溝通**
- # 樂於 **學習**及**應用新技術**


---
layout: default
class: bg-styled-img-[/images/education.jpg]
---

<style>
.rounded-full {
  border-radius: 50%;
}
</style>

# 🎓 **Education - 學歷背景**

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
  <div class="p-4 shadow-md text-center">
    <div style="display: flex; justify-content: center; align-items: center;">
      <img src="/images/tku.jpg" alt="淡江大學校徽" class="h-24 w-24 object-contain mr-4 rounded-full"> 
    </div>
    <br/>
    <div class="flex-grow"> <!-- 文字內容區塊，會佔據可用空間 -->
      <h3 class="text-xl font-semibold">私立淡江大學</h3>
      <h4 class="text-xl font-semibold">電機系學士畢業</h4>
      <p class="text-sm text-gray-400">2003/9 ~ 2008/6</p>
    </div>
  </div>
  
  <!-- 台灣科技大學 -->
  <div class="p-4 shadow-md text-center">
    <div style="display: flex; justify-content: center; align-items: center;">
      <img src="/images/ntust.jpg" alt="台灣科技大學校徽" class="h-24 w-24 object-contain mr-4 rounded-full">
    </div>
    <br/>
    <div class="flex-grow"> <!-- 文字內容區塊，會佔據可用空間 -->
      <h3 class="text-xl font-semibold">台灣科技大學</h3>
      <h4 class="text-xl font-semibold">電機所碩士畢業</h4>
      <p class="text-sm text-gray-400">2008/9 ~ 2010/7</p>
    </div>
  </div>

</div>

---
layout: default
class: bg-styled-img-[/images/workExperience.jpg]
---

# 💼 **Work Experience - 工作經歷**


<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
 
  <div>
    <mdi-office-building class="inline-block text-gray-500"/> <span class="text-2xl">松凌科技</span> <span class="text-sm">2011/10 ~ 2017/04 (5y7m)</span>
    <ul class="list-disc list-inside ml-4">
      <li>開發壽險程式後端設計、撰寫與維護</li>
      <li>舊系統資料轉換新系統</li>
    </ul>
  </div>

  <div>
    <mdi-PencilRuler class="inline-block text-xl text-gray-500"/> <span class="text-2xl">創創數位科技</span> <span class="text-sm">2023/04 ~ 2023/08 (5m)</span>
    <ul class="list-disc list-inside ml-4">
      <li>負責政府專案的產品維護與新功能開發</li>
      <li>快速上手，優化與調整確保系統穩定運行</li>
    </ul>
  </div>
  <div>
    <mdi-cart class="inline-block text-xl text-orange-500"/> <span class="text-2xl">燦坤先端智能</span> <span class="text-sm">2017/05 ~ 2018/09 (1y5m)</span>
    <ul class="list-disc list-inside ml-4">
      <li>維護 RD 進度開發系統</li>
      <li>開發內網(請款、訂餐、用印、排程)</li>
    </ul>
  </div>
  
  <div>
    <mdi-Factory class="inline-block text-xl text-gray-500"/> <span class="text-2xl">鞍泰智造</span> <span class="text-sm">2023/09 ~ 至今</span>
    <ul class="list-disc list-inside ml-4">
      <li>從無到有，建置系統架構(MES系統)</li>
      <li>採用微服務架構進行系統設計與開發</li>
    </ul>
  </div>

  <div>
    <mdi-quadcopter class="inline-block text-xl text-red-500"/> <span class="text-2xl">經緯航太科技</span> <span class="text-sm">2018/11 ~ 2023/03 (4y4m)</span>
    <ul class="list-disc list-inside ml-4">
      <li>台南市政府工務局、都發局...專案開發與維護</li>
      <li>導入無人機智慧農噴平台</li>
    </ul>
  </div>

</div>

---
layout: default
class: bg-styled-img-[/images/skill.jpg]
---

# 🛠️ **Skill - 專業技能**

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <h3 class="text-xl font-semibold mt-2 mb-1"><ph-code-bold class="inline-block"/> 程式設計</h3>
    <ul class="list-disc list-inside ml-4">
      <li>ASP.NET Core, ASP.NET, ASP, C#</li>
      <li>Java, Spring, Hibernate</li>
    </ul>
  </div>

  <div>
    <h3 class="text-xl font-semibold mt-2 mb-1"><ph-database-bold class="inline-block"/> 資料庫設計</h3>
    <ul class="list-disc list-inside ml-4">
      <li>MS SQL, MySQL, PostgreSQL, PL/SQL</li>
      <li>Redis, Firebase</li>
    </ul>
  </div>

  <div>
    <h3 class="text-xl font-semibold mt-2 mb-1"><ph-browser-bold class="inline-block"/> 網頁技術</h3>
    <ul class="list-disc list-inside ml-4">
      <li>Vue.js, Vite, node.js, npm, RESTful API</li>
      <li>jQuery, AJAX, Bootstrap, JavaScript</li>
    </ul>
  </div>

  <div>
    <h3 class="text-xl font-semibold mt-2 mb-1"><ph-git-branch-bold class="inline-block"/> 版本控制</h3>
    <ul class="list-disc list-inside ml-4">
      <li>Git, SVN, TFS</li>
    </ul>
  </div>

  <div>
    <h3 class="text-xl font-semibold mt-2 mb-1"><ph-brain-bold class="inline-block"/> 人工智慧 (AI)</h3>
    <ul class="list-disc list-inside ml-4">
      <li> GitHub Copilot 輔助，提升約 10% 的開發速度</li>
    </ul>
  </div>

</div>

---
layout: default
class: bg-styled-img-[/images/certificate.jpg] text-center
---

# 📜 **Certificate - 專業認證**  

<br/>
<br/>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
  <div class="p-4 border rounded-lg shadow-md">
    <logos-oracle class="text-1xl mx-auto mb-2"/>
    <p class="font-semibold">Oracle Certified Professional</p>
    <p>Java SE 6 Programmer</p>
    <div style="display: flex; justify-content: center;">
      <img src="/images/oracle.png" alt="Oracle Certification" style="width: 50px; height: auto;">
    </div>
  </div>
  <div class="p-4 border rounded-lg shadow-md">
    <logos-microsoft-icon class="text-2xl mx-auto mb-2"/>
    <p class="font-semibold">Microsoft MCP</p>
    <p>70-483 Programming in C#</p>
    <div style="display: flex; justify-content: center;">
      <img src="/images/Programming+in+C_23-01.png" alt="Oracle Certification" class="w-12 h-auto mr-4"/>
    </div>
  </div>
</div>

---
layout: default
---

# ✨ **Personality - 人格特質**

<div class="space-y-1 mt-1">
  <div class="p-0.3 border-l-4 border-blue-300 bg-blue-800 text-white">
    <h3 class="font-semibold text-xs"><iconoir-strategy class="inline-block mr-2"/>１. 和諧 (Harmony)</h3>
    <p class="text-xs">具備「和諧」特徵的人所追尋的是和諧共處。他們不喜好爭端，往往從中尋求妥協的空間。</p>
  </div>
  <div class="p-0.3 border-l-4 border-green-300 bg-green-800 text-white">
    <h3 class="font-semibold text-xs"><iconoir-shield-alt class="inline-block mr-2"/>２. 責任 (Responsibility)</h3>
    <p class="text-xs">具備「責任」特徵的人，對於自己應做的工作會有一股心理上的自我歸屬感，非常重視如誠信與忠誠的穩定價值。</p>
  </div>
  <div class="p-0.3 border-l-4 border-yellow-300 bg-yellow-700 text-white">
    <h3 class="font-semibold text-xs"><iconoir-sea-waves class="inline-block mr-2"/>３. 適應 (Adaptability)</h3>
    <p class="text-xs">特別具備「適應」特徵的人，偏好「隨波逐流」，喜歡活在當下，明天的事明天再考慮。</p>
  </div>
  <div class="p-0.3 border-l-4 border-purple-300 bg-purple-800 text-white">
    <h3 class="font-semibold text-xs"><iconoir-user-love class="inline-block mr-2"/>４. 體諒 (Empathy)</h3>
    <p class="text-xs">具備「體諒」特徵的人能夠設身處地為他人著想。</p>
  </div>
  <div class="p-0.3 border-l-4 border-red-300 bg-red-800 text-white">
    <h3 class="font-semibold text-xs"><iconoir-light-bulb class="inline-block mr-2"/>５. 學習 (Learner)</h3>
    <p class="text-xs">具備「學習」特質的人不僅求知若渴，還不停地尋求改善自己的機會。對他們來說，學習的過程總比成果要來得令人著迷。</p>
  </div>
</div>

---
layout: default
class: bg-styled-img-[/images/demo.jpg]
---

# 💡 **Side Project - 個人小專案**  
<br/>

[每期帳單](https://hmlu36.github.io/vitepress/Wedding/%E5%B8%B3%E5%96%AE.html)    

[讀經小幫手](https://hmlu36.github.io/vite-bible/)    

假日騎士LineBot ![](/images/bikeHelper.png)


---
layout: default
---

Q&A:   

1. 你在C#一個Web應用程式的後端開發，你會用甚麼樣的Design Pattern?  
    - MVC (Model-View-Controller)
    - Dependency Injection 
    - Singleton Pattern (全域設定、背景執行服務)
    - Abstract Pattern (相同源頭，不同的子類別)
    - Builder Pattern
    - Decorator Pattern 
2. 商業邏輯層與資料庫連結層你會怎麼分?  
    - MVC (Model-View-Controller)
    - 商業邏輯     放在 Service Layer 
    - 資料庫連結層 放在 Repository 

---
layout: default
---

3. 是否能獨力完成Web應用程式的CRUD? 
    - 使用Repository Pattern實作CRUD
    - Controller再串接對應CRUD Service
    - 資料驗證 (Data Validation)
4. 你用甚麼方式連結關聯式資料庫? (以MS-SQL為例)  
    - 使用Entity Framework，透過ORM方式串接資料庫
    - 先寫class、屬性，再做migration (Code First)
5. 你用甚麼方式連結NoSQL資料庫? (以MongoDB為例)  
    - 使用 MongoClient 類別來建立與MongoDB伺服器的連線
    - 資料庫建立對應POCO對應DB資料

---
layout: default
---

6. 在開發應用程式的時候，你會如何製作帳號驗證的架構? (必需要考慮整合第三方驗證。)  
7. 驗證與授權差異在哪裡?  
8. Cookie 與   Token 的腳色分別為何?
你對IOC/DI 的解藕看法為何? 為什麼要用到這個架構?   
若兩個系統間，有資料交換的需求，你會怎麼去做ETL的架構?  
如果要你執行一個特定經過機器學習的服務，你執行的步驟有哪些?  
機器學習必須仰賴資料，大量資料在蒐集的時候，你會怎麼處理大數據的儲存?  
LLM在企業導入，你覺得有那些應用可以做?  
呈上題，你會怎麼做這個應用導入?  
呈上題，你要怎麼訓練你的模型?  
你會怎麼建立User interface,來讓使用者可以跟你的模型互動?

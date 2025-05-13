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
    <!-- 確保圖片路徑正確，Slidev 中 public 資料夾下的資源可以直接用 /images/profile.webp 引用 -->
    <img src="/images/profile.webp" alt="個人照片" class="w-32 md:w-40 h-auto rounded-full shadow-lg" /> <!-- 稍微調整 md 尺寸 -->
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
class: bg-styled-img-[/images/computer-programmer.webp]
---

# 👨‍💻 **Profile - 簡介**

- # 擅長 **C# 與 .NET 框架**
- # 串接 **多種資料庫(SQL, NoSQL)** 
- # 掌握 **前端技術(HTML5, CSS, Vue)** 
- # 注重 **團隊合作**與**高效溝通**
- # 樂於 **學習**及**應用新技術**


---
layout: default
class: bg-styled-img-[/images/education.webp]
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
      <img src="/images/tku.webp" alt="淡江大學校徽" class="h-24 w-24 object-contain mr-4 rounded-full"> 
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
      <img src="/images/ntust.webp" alt="台灣科技大學校徽" class="h-24 w-24 object-contain mr-4 rounded-full">
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
class: bg-styled-img-[/images/workExperience.webp]
---

# 💼 **Work Experience - 工作經歷**


<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
 
  <div>
    <strong><mdi-language-java class="inline-block text-blue-700"/> <span class="text-2xl">松凌科技</span> <span class="text-md">2011/10 ~ 2017/04 (5y7m)</span></strong>
    <ul class="list-disc list-inside ml-4">
      <li>開發壽險程式後端設計、撰寫與維護</li>
      <li>舊系統資料轉換新系統</li>
    </ul>
  </div>

  <div>
    <strong><mdi-creative-commons class="inline-block text-xl text-white-500"/> <span class="text-2xl">創創數位科技</span> <span class="text-md">2023/04 ~ 2023/08 (5m)</span></strong>
    <ul class="list-disc list-inside ml-4">
      <li>負責政府專案的產品維護與新功能開發</li>
      <li>快速上手，優化與調整確保系統穩定運行</li>
    </ul>
  </div>
  <div>
    <strong><mdi-cart class="inline-block text-xl text-orange-500"/> <span class="text-2xl">燦坤先端智能</span> <span class="text-md">2017/05 ~ 2018/09 (1y5m)</span></strong>
    <ul class="list-disc list-inside ml-4">
      <li>維護 RD 進度開發系統</li>
      <li>開發內網(請款、訂餐、用印、排程)</li>
    </ul>
  </div>
  
  <div>
    <strong><mdi-Factory class="inline-block text-xl text-green-500"/> <span class="text-2xl">鞍泰智造</span> <span class="text-md">2023/09 ~ 至今</span></strong>
    <ul class="list-disc list-inside ml-4">
      <li>從無到有，建置系統架構(MES系統)</li>
      <li>採用微服務架構進行系統設計與開發</li>
    </ul>
  </div>

  <div>
    <strong><mdi-quadcopter class="inline-block text-xl text-red-500"/> <span class="text-2xl">經緯航太科技</span> <span class="text-md">2018/11 ~ 2023/03 (4y4m)</span></strong>
    <ul class="list-disc list-inside ml-4">
      <li>台南市政府工務局、都發局...專案開發與維護</li>
      <li>導入無人機智慧農噴平台</li>
    </ul>
  </div>

</div>

---
layout: default
class: bg-styled-img-[/images/skill.webp]
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
      <li> GitHub Copilot 輔助，提升開發速度</li>
    </ul>
  </div>

</div>

---
layout: default
class: bg-styled-img-[/images/certificate.webp] text-center
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
      <img src="/images/oracle.webp" alt="Oracle Certification" style="width: 50px; height: auto;">
    </div>
  </div>
  <div class="p-4 border rounded-lg shadow-md">
    <logos-microsoft-icon class="text-2xl mx-auto mb-2"/>
    <p class="font-semibold">Microsoft MCP</p>
    <p>70-483 Programming in C#</p>
    <div style="display: flex; justify-content: center;">
      <img src="/images/Programming+in+C_23-01.webp" alt="Oracle Certification" class="w-12 h-auto mr-4"/>
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
class: bg-styled-img-[/images/demo.webp]
---

# 💡 **Side Project - 個人小專案**  


- [每期帳單](https://hmlu36.github.io/vitepress/Wedding/%E5%B8%B3%E5%96%AE.html)    

- [讀經小幫手](https://hmlu36.github.io/vite-bible/)    

- 假日騎士LineBot ![](/images/bikeHelper.webp)
<div style="display: flex; align-items: center; gap: 10px;">
  <img src="/images/bikeHelper2.webp" alt="Bike Helper 2" style="width: 35%; height: auto;" />
</div>


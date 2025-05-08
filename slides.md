---
# 封面頁設定，您可以指定一個背景圖片
layout: cover
style: "background-image: linear-gradient(to bottom, #434343 0%, #000000 100%);"
---

<div class="flex items-center justify-center p-4 md:p-8 h-full"> <!-- 新增 h-full 使其填滿整個投影片高度 -->
  <div class="mr-6 md:mr-10 flex-shrink-0">
    <div class="p-2 bg-gradient-to-r from-gray-100 to-white-400 rounded-full inline-block">
    <!-- 確保圖片路徑正確，Slidev 中 public 資料夾下的資源可以直接用 /images/profile.png 引用 -->
    <img src="/images/profile.png" alt="個人照片" class="w-32 md:w-40 h-auto rounded-full shadow-lg" /> <!-- 稍微調整 md 尺寸 -->
    </div>
      </div>
      <div class="text-left">
    <h1 class="text-4xl md:text-5xl font-bold">自我介紹</h1>
    <p class="text-4xl md:text-4xl mt-1 md:mt-2 font-bold">盧泓民 Joshua Lu</p>
    <!-- 建議在這裡加入應徵職位 -->
    <p class="text-2xl md:text-3xl mt-2 text-gray-700">應徵職位： 網頁工程師【AI數位轉型部】</p>
  </div>
</div>

---
style: 'background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/computer-programmer.jpg); background-size: cover; background-position: center;'
---

# 👨‍💻 **關於我 - 簡介**

- # 資深軟體工程師
- # 擅長 **C# 與 .NET 框架**
- # 精通 **多種資料庫(MS-SQL, MySQL...)** 
- # 掌握 **前端技術(HTML5, CSS, JavaScript/jQuery)** 
- # 注重 **團隊合作**與**高效溝通**
- # 樂於 **學習及應用新技術**


---
## layout: two-cols # 左右兩欄佈局
---

# 🎓 學歷背景

<div class="space-y-8"> <!-- 為每個學歷條目之間提供垂直間距 -->

  <!-- 台灣科技大學 -->
  <div class="flex items-center"> <!-- 使用 Flexbox 進行佈局 -->
    <div class="flex-grow"> <!-- 文字內容區塊，會佔據可用空間 -->
      <h3 class="text-xl font-semibold">台灣科技大學</h3>
      <p>電機所碩士畢業</p>
      <p class="text-sm text-gray-600">2008/9 ~ 2010/7</p>
    </div>
    <img src="/images/ntust.jpg" alt="台灣科技大學校徽" class="h-24 w-24 object-contain ml-6 flex-shrink-0"> <!-- 校徽圖片，ml-6 左邊距，flex-shrink-0 防止圖片被壓縮 -->
  </div>

  <!-- 私立淡江大學 -->
  <div class="flex items-center"> <!-- 使用 Flexbox 進行佈局 -->
    <div class="flex-grow">
    <h3 class="text-xl font-semibold">私立淡江大學</h3>
    <p>電機系學士畢業</p>
    <p class="text-sm text-gray-600">2003/9 ~ 2008/6</p>
    </div>
    <img src="/images/tku.jpg" alt="淡江大學校徽" class="h-24 w-24 object-contain ml-6 flex-shrink-0"> <!-- 校徽圖片 -->
  </div>
</div>

---
layout: two-cols-header
---

# 💼 工作經歷

::left::

## <mdi-Factory class="inline-block text-gray-500"/> 鞍泰智造 <span class="text-sm">2023/09 ~ 至今</span>
- MES 系統開發與維護，串接硬體資訊

## <mdi-PencilRuler class="inline-block text-gray-500"/> 創創數位科技 <span class="text-sm">2023/04 ~ 2023/08 (5m)</span>
- cc-work v3 後台管理平台開發

## <mdi-quadcopter class="inline-block text-red-500"/> 經緯航太科技 <span class="text-sm">2018/11 ~ 2023/03 (4y4m)</span>
- 台南市政府工務局、都發局...專案開發與維護
- 導入無人機智慧農噴平台

::right::

<br/>
<br/>

## <mdi-cart class="inline-block text-orange-500"/> 燦坤先端智能 <span class="text-sm">2017/05 ~ 2018/09 (1y5m)</span>
- 維護 RD 進度開發系統
- 開發內網(請款、訂餐、用印、排程)
- 開發對外官網

## <mdi-office-building class="inline-block text-gray-500"/> 松凌科技 <span class="text-sm">`2011/10 ~ 2017/04 (5y7m)`</span>
- 開發壽險程式後端設計、撰寫與維護
- 舊系統資料轉換新系統

---
## layout: default
---

# 🛠️ 專業技能

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
    <li>深度學習框架：TensorFlow, PyTorch</li>
    <li>自然語言處理 (NLP)：BERT, GPT</li>
    <li>機器學習：Scikit-learn, XGBoost</li>
    <li>電腦視覺：OpenCV, YOLO</li>
  </ul>
</div>

</div>

---
## layout: two-cols-header
---

# 🚀 專案經歷

::left::

### <mdi-office-building class="inline-block"/> 松凌科技

`2011.10 ~ 2017.04`

- **[富邦產物保險-新種險]** 舊系統資料轉換

### <mdi-cart class="inline-block"/> 燦坤先端智能

`2017.05 ~ 2018.09`

- 維護 RD 進度開發系統
- 先端內網(請款、訂餐、用印、排程)

::right::

### <mdi-quadcopter class="inline-block"/> 經緯航太

`2018.11 ~ 2023.03`

- 臺南市道路挖掘系統
- 臺南市政府都市發展局維護
- 智慧農噴平台

### <logos-microsoft-icon class="inline-block"/> 創創數位科技

`2023.04 ~ now`

- 財團法人原住民族文化事業基金會
- 財團法人原住民族語言研究發展基金會
- 國立教育廣播電臺
- 臺北市政府消防局
- 黑彩人力

---
layout: center
class: text-center
---

# 📜 Certificate - 專業認證

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
## layout: default
---

# ✨ Personality - 人格特質

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
## layout: default
---

# 💡 Side Project - 個人專案

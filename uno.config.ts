// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ... 其他設定 ...
  rules: [
    // 規則名稱可以自訂，例如 bg-styled-img-[圖片路徑]
    // 路徑中的 / 會被 UnoCSS 自動處理，但如果路徑包含特殊字符，可能需要額外處理或編碼
    [/^bg-styled-img-\[(.+)\]$/, ([, path]) => {
      const decodedPath = decodeURIComponent(path); // 解碼路徑，以防有 %20 等編碼
      return {
        'background-image': `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${decodedPath}')`,
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat', // 通常會加上 no-repeat
      };
    }],
  ],
})

// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    // ... 其他規則 ...
    [/^bg-styled-img-\[(.+)\]$/, ([, path]) => {
      const decodedPath = decodeURIComponent(path);
      return {
        'background-image': `linear-gradient(to bottom, rgba(240,240,240,0.8), rgba(240,240,240,0.8)), url('${decodedPath}')`, // 調整透明度更接近 1
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
      };
    }],
  ],
})

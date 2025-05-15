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
  theme: {
    colors: {
      lightBg: '#f5f5f5',
      lightText: '#333333',
      primary: '#007bff',
      secondary: '#6c757d',
    },
    extend: {
      colors: {
        coverText: '#333333',
      }
    }
  },
})

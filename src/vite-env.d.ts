/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly REACT_APP_RESUME_OWNER: string
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
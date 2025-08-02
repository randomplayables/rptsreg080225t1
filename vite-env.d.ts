/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GAME_ID: string
  readonly [key: string]: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
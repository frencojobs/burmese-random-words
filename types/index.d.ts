export interface Options {
  type?:
    | 'noun'
    | 'pronoun'
    | 'verb'
    | 'adjective'
    | 'adverb'
    | 'postposition'
    | 'conjunction'
    | 'particle'
    | 'interjection'
  min?: number
  max?: number
  exactly?: number
  join?: string
}

declare module 'burmese-random-words' {
  export function generate(options?: number | Options): string
}

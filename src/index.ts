import * as nouns from './data/nouns.json'
import * as pronouns from './data/pronouns.json'
import * as verbs from './data/verbs.json'
import * as adjectives from './data/adjectives.json'
import * as adverbs from './data/adverbs.json'
import * as postpositions from './data/postpositions.json'
import * as conjunctions from './data/conjunctions.json'
import * as particles from './data/particles.json'
import * as interjections from './data/interjections.json'
import type { Options} from 'types/index'

const types = {
  noun: nouns,
  pronoun: pronouns,
  verb: verbs,
  adjective: adjectives,
  adverb: adverbs,
  postposition: postpositions,
  conjunction: conjunctions,
  particle: particles,
  interjection: interjections,
  all: [
    ...nouns,
    ...pronouns,
    ...verbs,
    ...adjectives,
    ...adverbs,
    ...postpositions,
    ...conjunctions,
    ...particles,
    ...interjections
  ]
}

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function rand(options: Options): Array<string> | string {
  const source = options.type !== undefined ? types[options.type] : types['all']
  const source_len = source.length - 1
  const specificRandInt = (min: number = 0, max: number = source_len) => {
    return randInt(min, max)
  }
  const outputWords: Array<string> = []

  if (options.exactly) {
    for (let i = 0; i < options.exactly; i++) {
      outputWords.push(source[specificRandInt()])
    }
  } else {
    const max = options.max || 1
    const min = options.min || 1
    const rand_len = specificRandInt(min, max)

    for (let i = 0; i < rand_len; i++) {
      outputWords.push(source[specificRandInt()])
    }
  }

  if (options.join) {
    return outputWords.join(options.join)
  }

  return outputWords.length === 1 ? outputWords[0] : outputWords
}

function burmeseRandomWords(
  options?: number | Options
): Array<string> | string {
  if (typeof options === 'undefined') {
    return rand({ exactly: 1 })
  }

  if (typeof options === 'number') {
    return rand({ exactly: options })
  }

  if (typeof options === 'object') {
    return rand(options)
  }

  return rand({ exactly: 1 })
}

export = burmeseRandomWords
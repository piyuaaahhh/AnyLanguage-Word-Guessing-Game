import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a'
  'b'
  'c'
  'h'
  'i'
  't'
  'r'
  'm'
  'n'
  'z'
  'r'
  'k'
  'u'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}

import { CONFIG } from './config'

export const VALIDGUESSES = [
  'kurchi',
  'manzar',
  'chitra',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}

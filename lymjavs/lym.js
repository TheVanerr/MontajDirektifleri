// LYM Kategorisi - Model Verileri ve Montaj Direktifleri
// Model direktifleri ayrı dosyalara bölünmüştür:
//   lym950.js  -> LYM 950  direktifleri (lym950Directives)
//   lym1150.js -> LYM 1150 direktifleri (lym1150Directives)
//   lym1350.js -> LYM 1350 direktifleri (lym1350Directives)
//   lym1500.js -> LYM 1500 direktifleri (lym1500Directives)

const lymData = {
  name: 'LYM',
  color: '#3b82f6',
  models: ['LYM 950', 'LYM 1150', 'LYM 1350', 'LYM 1500']
};

const lymDirectives = {
  'LYM 950':  lym950Directives,
  'LYM 1150': lym1150Directives,
  'LYM 1350': lym1350Directives,
  'LYM 1500': lym1500Directives
};
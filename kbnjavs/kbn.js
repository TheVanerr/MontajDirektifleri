// KBN Kategorisi - Model Verileri ve Montaj Direktifleri
// Model direktifleri ayrı dosyalara bölünmüştür:
//   kbn1b1650.js -> KBN 1B 1650 direktifleri (kbn1b1650Directives)
//   kbn1b1850.js -> KBN 1B 1850 direktifleri (kbn1b1850Directives)
//   kbn1b2050.js -> KBN 1B 2050 direktifleri (kbn1b2050Directives)
//   kbn2b1650.js -> KBN 2B 1650 direktifleri (kbn2b1650Directives)
//   kbn2b1850.js -> KBN 2B 1850 direktifleri (kbn2b1850Directives)
//   kbn2b2050.js -> KBN 2B 2050 direktifleri (kbn2b2050Directives)
//   kbn1550tr.js -> KBN 1550 TR direktifleri (kbn1550trDirectives)

const kbnData = {
  name: 'KBN',
  color: '#ec4899',
  models: ['KBN 1B 1650', 'KBN 1B 1850', 'KBN 1B 2050', 'KBN 2B 1650', 'KBN 2B 1850', 'KBN 2B 2050', 'KBN 1550 TR']
};

const kbnDirectives = {
  'KBN 1B 1650': kbn1b1650Directives,
  'KBN 1B 1850': kbn1b1850Directives,
  'KBN 1B 2050': kbn1b2050Directives,
  'KBN 2B 1650': kbn2b1650Directives,
  'KBN 2B 1850': kbn2b1850Directives,
  'KBN 2B 2050': kbn2b2050Directives,
  'KBN 1550 TR': kbn1550trDirectives
};
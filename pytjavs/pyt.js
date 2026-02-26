// PYT Kategorisi - Model Verileri ve Montaj Direktifleri
// Model direktifleri ayri dosyalara bolunmustur:
//   pytjavs/pyt40.js -> PYT 40 (pyt40Directives)
//   pytjavs/pyt90.js -> PYT 90 (pyt90Directives)
//   pytjavs/pyt800.js -> PYT 800 (pyt800Directives)

const pytData = {
  name: 'PYT',
  color: '#06b6d4',
  models: ['PYT 40', 'PYT 90', 'PYT 800']
};

const pytDirectives = {
  'PYT 40': pyt40Directives,
  'PYT 90': pyt90Directives,
  'PYT 800': pyt800Directives
};

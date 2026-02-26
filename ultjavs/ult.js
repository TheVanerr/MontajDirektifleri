// ULT Kategorisi - Model Verileri ve Montaj Direktifleri
// Model direktifleri ayri dosyalara bolunmustur:
//   ultjavs/ultm40.js -> ULT M40 (ultm40Directives)
//   ultjavs/ultm60.js -> ULT M60 (ultm60Directives)
//   ultjavs/ultm80.js -> ULT M80 (ultm80Directives)
//   ultjavs/ultm100.js -> ULT M100 (ultm100Directives)
//   ultjavs/ultm140.js -> ULT M140 (ultm140Directives)
//   ultjavs/ultm4001bl.js -> ULT M400 1B L (ultm4001blDirectives)

const ultData = {
  name: 'ULT',
  color: '#f59e0b',
  models: ['ULT M40', 'ULT M60', 'ULT M80', 'ULT M100', 'ULT M140', 'ULT M400 1B L']
};

const ultDirectives = {
  'ULT M40': ultm40Directives,
  'ULT M60': ultm60Directives,
  'ULT M80': ultm80Directives,
  'ULT M100': ultm100Directives,
  'ULT M140': ultm140Directives,
  'ULT M400 1B L': ultm4001blDirectives
};

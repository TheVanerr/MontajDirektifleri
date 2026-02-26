// MST Kategorisi - Model Verileri ve Montaj Direktifleri
// Model direktifleri ayri dosyalara bolunmustur:
//   mstjavs/mstlvb60.js -> MST LVB 60 (mstlvb60Directives)
//   mstjavs/mstlvb100.js -> MST LVB 100 (mstlvb100Directives)
//   mstjavs/mstpro02.js -> MST PRO 02 (mstpro02Directives)

const mstData = {
  name: 'MST',
  color: '#ef4444',
  models: ['MST LVB 60', 'MST LVB 100', 'MST PRO 02']
};

const mstDirectives = {
  'MST LVB 60': mstlvb60Directives,
  'MST LVB 100': mstlvb100Directives,
  'MST PRO 02': mstpro02Directives
};

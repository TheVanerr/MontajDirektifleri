// VDL Kategorisi - Model Verileri ve Montaj Direktifleri
// Model direktifleri ayri dosyalara bolunmustur:
//   vdljavs/vdl25001b.js -> VDL 2500 1B (vdl25001bDirectives)
//   vdljavs/vdl35002b.js -> VDL 3500 2B (vdl35002bDirectives)
//   vdljavs/vdl42502b.js -> VDL 4250 2B (vdl42502bDirectives)
//   vdljavs/vdl55002b.js -> VDL 5500 2B (vdl55002bDirectives)
//   vdljavs/vdl65002b.js -> VDL 6500 2B (vdl65002bDirectives)

const vdlData = {
  name: 'VDL',
  color: '#8b5cf6',
  models: ['VDL 2500 1B', 'VDL 3500 2B', 'VDL 4250 2B', 'VDL 5500 2B', 'VDL 6500 2B']
};

const vdlDirectives = {
  'VDL 2500 1B': vdl25001bDirectives,
  'VDL 3500 2B': vdl35002bDirectives,
  'VDL 4250 2B': vdl42502bDirectives,
  'VDL 5500 2B': vdl55002bDirectives,
  'VDL 6500 2B': vdl65002bDirectives
};

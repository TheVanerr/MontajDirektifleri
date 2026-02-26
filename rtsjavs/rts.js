// RTS Kategorisi - Model Verileri ve Montaj Direktifleri
// Model direktifleri ayri dosyalara bolunmustur:
//   rtsjavs/rts3462b.js -> RTS 346 2B (rts3462bDirectives)
//   rtsjavs/rts3464b.js -> RTS 346 4B (rts3464bDirectives)

const rtsData = {
  name: 'RTS',
  color: '#10b981',
  models: ['RTS 346 2B', 'RTS 346 4B']
};

const rtsDirectives = {
  'RTS 346 2B': rts3462bDirectives,
  'RTS 346 4B': rts3464bDirectives
};

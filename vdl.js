// VDL Kategorisi - Model Verileri ve Montaj Direktifleri

const vdlData = {
  name: 'VDL',
  color: '#8b5cf6',
  models: ['VDL 2500 1B', 'VDL 3500 2B', 'VDL 4250 2B', 'VDL 5500 2B', 'VDL 6500 2B']
};

const vdlDirectives = {
  'VDL 2500 1B': [
    { title: 'Sistem Başlatma', description: 'Elektrik bağlantılarını kontrol edin.' },
    { title: 'Basınç Ayarı', description: 'Sistem basıncını 250 bar olacak şekilde ayarlayın.' }
  ],
  'VDL 3500 2B': [
    { title: 'Hazırlık', description: 'Tüm parçaları kontrol edin.' },
    { title: 'Montaj', description: 'Adım adım montajı yapın.' }
  ],
  'VDL 4250 2B': [
    { title: 'Başlangıç', description: 'Cihazı hazırlayın.' }
  ],
  'VDL 5500 2B': [
    { title: 'İnstallasyon', description: 'Kurulumu yapın.' }
  ],
  'VDL 6500 2B': [
    { title: 'Kurulum', description: 'Montajını tamamlayın.' }
  ]
};

export default [{
  tabName: 'Первая вкладка',
  controls: [
    {
      'text': 'Дата от',
      'type': 'date',
      'name': 'dateFrom'
    },
    {
      'text': 'Дата до',
      'type': 'date',
      'name': 'dateTo'
    }
  ],
  widgets: [
    {
      'width': 'xs12',
      'spec': require('./fake_spec.json')
    },
    {
      'width': 'xs6',
      'spec': require('./fake_spec.json')
    },
    {
      'width': 'xs6',
      'spec': require('./fake_spec.json')
    },
    {
      'width': 'xs4',
      'spec': require('./fake_spec.json')
    },
    {
      'width': 'xs4',
      'spec': require('./fake_spec.json')
    },
    {
      'width': 'xs4',
      'spec': require('./fake_spec.json')
    }
  ]
}, {
  tabName: 'Вторая вкладка',
  controls: [
    {
      'text': 'Дата от',
      'type': 'date',
      'name': 'dateFrom'
    }
  ],
  widgets: [
    {
      'width': 'xs12',
      'spec': require('./fake_spec.json')
    }
  ]
}]

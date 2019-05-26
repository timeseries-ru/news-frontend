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
      'text': `
1. Я **текст** в *markdown*.
2. Я **текст** в *markdown*.
3. Я **текст** в *markdown*.
4. Я **текст** в *markdown*.
5. Я **текст** в *markdown*.`
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

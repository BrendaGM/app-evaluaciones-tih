export const tree = [
    {
      key: 'Inicio1',
      label: 'Inicio1',
      url:'/page',
      nodes: [
        {
          key: 'Option1.1',
          label: 'Option1.1',
          url:'/page',
          nodes: [
            {
                key: 'Option 1.1.1',
                label: 'Option 1.1.1',
                url:'/page',
                central:'centralUno'
            },
            {
                key: 'Option 1.1.2',
                label: 'Option 1.1.2',
                url:'/page',
                central:'centralUno'
            }
          ],
        },
      ],
    },
    {
      key: 'Inicio2',
      label: 'Inicio2',
      url:'/page',
      central:'central'
    },
    {
        key: 'Inicio3',
        label: 'Inicio3',
        url:'/page',
        nodes:[
            {
                key:'Option3.1',
                label:'Option3.1',
                url:'/page',
                central:'centralUno'
            },
            {
                key:'Option3.2',
                label:'Option3.2',
                url:'/page',
                central:'centralUno'
            }
        ]
    },
    {
        key: 'Inicio4',
        label: 'Inicio4',
        url:'/page',
        nodes:[
            {
                key:'Option4.1',
                label:'Option4.1',
                url:'/page',
                central:'centralUno'
            },
            {
                key:'Option4.2',
                label:'Option4.2',
                url:'/page',
                central:'centralUno'
            }
        ]
    }
  ];
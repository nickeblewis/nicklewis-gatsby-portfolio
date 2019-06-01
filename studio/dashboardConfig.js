export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf2b3ee671798171e3fb658',
                  title: 'Sanity Studio',
                  name: 'nicklewis-gatsby-portfolio-studio',
                  apiId: '4ed73074-9ad2-445f-ac05-806b6a165515'
                },
                {
                  buildHookId: '5cf2b3eeb52c61ca6be62c78',
                  title: 'Portfolio Website',
                  name: 'nicklewis-gatsby-portfolio',
                  apiId: '94c63b79-e577-4294-8fe1-93380f2b35b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/nicklewis-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nicklewis-gatsby-portfolio.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fbc1c286f3ae43db52d4b5c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qe2fuqwh',
                  apiId: 'dc58b66a-0a2f-4c71-a680-3b429e0db7b6'
                },
                {
                  buildHookId: '5fbc1c28f69a3445c6bc4de4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-631fgsaf',
                  apiId: '9dcdb815-47fa-4bdf-bd79-af90ba44f75f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nimskhan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-631fgsaf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

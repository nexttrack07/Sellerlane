export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e7434453f33e542f569b8e3',
                  title: 'Sanity Studio',
                  name: 'Sellerlane-studio',
                  apiId: 'f70408e5-aaa9-433b-8f82-dcd072dbf47e'
                },
                {
                  buildHookId: '5e743444c3b7e002478e66f1',
                  title: 'Blog Website',
                  name: 'Sellerlane',
                  apiId: 'c0cdb76a-841e-4322-b12b-36d8307ca778'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nexttrack07/Sellerlane',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://Sellerlane.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

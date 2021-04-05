export default {
  widgets: [
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
                  buildHookId: '606b89e998cb9b17471717ce',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3nhiz47i',
                  apiId: 'ac68d9cf-ec67-47c5-acdf-481f77ba1237'
                },
                {
                  buildHookId: '606b89e99045f4154ea10467',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-up2bpv9a',
                  apiId: '5c6db34d-5d67-44bd-ad24-cd2d659628c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Saferover/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-up2bpv9a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

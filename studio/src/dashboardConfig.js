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
                  buildHookId: '5f2c9a717d007f658c01c331',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5xvtj92p',
                  apiId: '760f5bef-6fed-46c4-9183-9008be55b55e'
                },
                {
                  buildHookId: '5f2c9a7260b7126534df348b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7xbitfav',
                  apiId: '63b49f27-fe34-4223-aaae-d4d927b4505f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olivoil/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7xbitfav.netlify.app', category: 'apps' }
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

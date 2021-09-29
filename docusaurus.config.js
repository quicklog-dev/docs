const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Quicklog',
  tagline: 'Add logs to production or stagging without changing code or pushing to docker💪',
  url: 'https://infallible-goodall-481cff.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'quicklog-dev', // Usually your GitHub org/user name.
  projectName: 'Quicklog', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-203782793-2',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'Quicklog',
      logo: {
        alt: 'Quicklog Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/quicklog-dev',
          label: 'GitHub',
          position: 'right',
        },
        {
          href:"/blog",
          label:"Blogs",
          position:"left",
        },
        {
          href:"https://app.quicklog.dev",
          label:"Signup",
          position:"left",
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/quicklog',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/YxZbDJHTxf',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/quicklog-dev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quicklog, Inc.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts:[
    {
      src:"/leedfeed.js",
      async: true
    },
    {
      src:"/crisp.js",
      async: true
    }
  ]
};

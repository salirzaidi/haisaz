// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Harmonic AI',
  tagline: 'Human-guided collAboRative Multi-Objective design of explaiNable, faIr and privaCy-preserving AI for digital health',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://harmonicai-project.uevora.pt',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
	docs: {
      sidebar: {
        hideable: true, // Permite esconder manualmente a sidebar
      },
    },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
	  siteMetadata: {
		titleTemplate: '%s', // Apenas o título principal, sem os títulos de página
	  },
	  colorMode: {
      disableSwitch: true, // Desativa o botão de troca de temas
		},
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Harmonic AI',
          src: 'img/logo.png',
          height: 300
        },
        items: [
          //{
          //  type: 'docSidebar',
          //  sidebarId: 'tutorialSidebar',
          //  position: 'left',
          //  label: 'Project',
          //},
		  {to:'/projects', label: 'Project', position: 'left'},
		  {to:'/consortium', label: 'Consortium', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to:'/publications', label: 'Publications', position: 'left'},
		  {to:'/events_and_news', label: 'Events and News', position: 'left'},
          
          {
            href: 'mailto:harmonicai-project@uevora.pt',
            label: 'Contact US',
            position: 'right',
          },
        ],
      },
      footer: {
      links: [
        {
          html: `
            <div style="text-align: left; margin-bottom: 20px;">
              <div style="margin-bottom: 15px;">
               <a href="https://cordis.europa.eu/project/id/101131117" 
				   class="button"
				   style="
					 text-decoration: none; 
					 color: #fff; 
					 background: transparent; 
					 padding: 10px 15px; 
					 border-radius: 5px; 
					 font-size: 1.2em; /* Aumenta o tamanho da fonte */
					 display: inline-block; /* Garante que o botão se comporta como bloco */
				   ">
				  Funded by Horizon EU, MSCA Programme and UKRI EPSRC.
				</a>
              </div>
              <div style="background-color: #transparent; padding: 5px; border-radius: 10px; display: inline-block;">
                <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
                  <img src="/img/epsrc.png" alt="EPSRC Logo" style="height: 115px;">
                  <img src="/img/msca.png" alt="MSCA Logo" style="height: 50px;">
                </div>
              </div>
            </div>
          `,
        },
      ],
        copyright: `Copyright © ${new Date().getFullYear()} HarmonicAI`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

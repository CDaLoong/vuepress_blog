import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  base: "/vuepress_blog/",
  head: [["link", { rel: "icon", href: "/vuepress_blog/images/c.png" }]],
  pagePatterns: ["**/*.md", "!**/README.md", "!.vuepress", "!node_modules"],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DaLoong的博客",
      description: "DaLoong的博客",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "",
    //   description: "DaLoong's blog",
    // },
  },
  theme: defaultTheme({
    logo: "/images/CDaLoong-logo.png",
    locales: {
      "/en/": {
        selectLanguageName: "English",
      },
      "/": {
        selectLanguageName: "简体中文",
      },
    },
    navbar: [
      // NavbarItem
      {
        text: "Github",
        link: "https://github.com/CDaLoong",
      },
      {
        text: "掘金",
        link: "https://juejin.cn/user/2375422091464398",
        // children: ["/group/foo.md", "/group/bar.md"],
      },
      // 字符串 - 页面文件路径
      //   "/bar/README.md",
    ],
    sidebar: [
      // SidebarItem
      {
        text: "程序员的自我修养",
        link: "/",
      },
      {
        text: "学习笔记",
        collapsible: true,
        // link: "/blog/",
        children: [
          {
            text: "HTNL+CSS学习",
            collapsible: true,
            // link: "/note/HTNL+CSS基础学习.md",
            children: ["/note/HTNL+CSS基础学习.md", "/note/HTML5学习.md", "/note/CSS3学习.md"],
          },
          {
            text: "JS学习",
            collapsible: true,
            // link: "/note/JS正则加bom和dom学习.md",
            children: ["/note/JS基础学习.md", "/note/ES6学习.md"],
          },
          {
            text: "工程化学习",
            collapsible: true,
            // link: "/note/git学习.md",
            children: ["/note/git学习.md", "/note/模块化学习.md", "/note/包管理器学习.md", "/note/webpack学习.md"],
          },
          {
            text: "前端框架学习",
            collapsible: true,
            // link: "/note/vue2学习.md",
            children: ["/note/vue2学习.md", "/note/react学习"],
          },
          {
            text: "计算机基础知识学习",
            collapsible: true,
            // link: "/note/网络学习.md",
            children: ["/note/网络学习.md", "/note/算法学习.md"],
          },
          {
            text: "全栈能力学习",
            collapsible: true,
            // link: "/note/NodeJS学习.md",
            children: ["/note/NodeJS学习.md", "/note/mysql学习.md", "/note/Linux学习.md", "/note/Rust学习.md"],
          }
        ],
      },
      {
        text: "代码风格",
        collapsible: true,
        children: [
          {
            text: "代码开发规范",
            collapsible: true,
            // link: "/note/js代码开发规范.md",
            children: ["/note/js代码开发规范.md"],
          },
        ]
      },
      {
        text: "实战记录",
        collapsible: true,
        children: [
          {
            text: "代码自动化流水线部署",
            collapsible: true,
            children: ["/blog/基于GitLab Runner的CICD部署流程.md"],
          },
        ]
      },
    ],
  }),
  // 插件
  plugins: [
    // 搜索插件
    // docsearchPlugin({}),
  ],
});

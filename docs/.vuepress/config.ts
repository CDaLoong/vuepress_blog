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
      title: "",
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
        text: "首页",
        link: "/",
      },
      {
        text: "学习笔记",
        collapsible: true,
        // link: "/blog/",
        children: [
          {
            text: "模块化学习",
            collapsible: true,
            children: ["/note/模块化学习.md"],
          },
          {
            text: "包管理器学习",
            collapsible: true,
            children: ["/note/包管理器学习.md"],
          },
          {
            text: "算法学习",
            collapsible: true,
            children: ["/note/算法学习.md"],
          },
          {
            text: "网络知识学习",
            collapsible: true,
            children: ["/note/网络知识学习.md"],
          },
          {
            text: "网络学习",
            collapsible: true,
            children: ["/note/网络学习.md"],
          },
          {
            text: "CSS3学习",
            collapsible: true,
            children: ["/note/CSS3学习.md"],
          },
          {
            text: "ES6学习",
            collapsible: true,
            children: ["/note/ES6学习.md"],
          },
          {
            text: "git学习",
            collapsible: true,
            children: ["/note/git学习.md"],
          },
          {
            text: "HTML5学习",
            collapsible: true,
            children: ["/note/HTML5学习.md"],
          },
          {
            text: "HTNL+CSS基础学习",
            collapsible: true,
            children: ["/note/HTNL+CSS基础学习.md"],
          },
          {
            text: "JS基础学习",
            collapsible: true,
            children: ["/note/JS基础学习.md"],
          },
          {
            text: "JS正则加bom和dom学习",
            collapsible: true,
            children: ["/note/JS正则加bom和dom学习.md"],
          },
          {
            text: "mysql学习",
            collapsible: true,
            children: ["/note/mysql学习.md"],
          },
          {
            text: "NodeJS学习",
            collapsible: true,
            children: ["/note/NodeJS学习.md"],
          },
          {
            text: "vue2学习",
            collapsible: true,
            children: ["/note/vue2学习.md"],
          },
          {
            text: "webpack学习",
            collapsible: true,
            children: ["/note/webpack学习.md"],
          },
        ],
      },
    ],
  }),
  // 插件
  plugins: [
    // 搜索插件
    // docsearchPlugin({}),
  ],
});

import{_ as l,r as t,o as p,c as o,b as n,d as s,e as i,a}from"./app-168a97af.js";const c="/vuepress_blog/assets/1-c4290744.jpg",r="/vuepress_blog/assets/2-dde512c2.jpg",d={},u=a('<h1 id="基于gitlab-runner的cicd部署流程" tabindex="-1"><a class="header-anchor" href="#基于gitlab-runner的cicd部署流程" aria-hidden="true">#</a> 基于GitLab Runner的CICD部署流程</h1><h2 id="工程化概述" tabindex="-1"><a class="header-anchor" href="#工程化概述" aria-hidden="true">#</a> 工程化概述</h2><p>前端工程化是一种软件开发实践，旨在提高前端开发的效率、可维护性和协作性。它涵盖了一系列工具、流程和最佳实践，用于优化前端开发工作流程，以满足现代 Web 应用程序的需求。下面是前端工程化的一些关键方面：</p><ol><li>版本控制：使用版本控制系统（如Git）来跟踪代码更改，协助团队合作和确保代码的版本管理。</li><li>自动化构建：前端工程化包括使用构建工具（如Vite、Webpack、Grunt、Gulp）来自动化任务，如文件合并、压缩、代码转换（例如，将ES6转换为ES5）、资源优化等。</li><li>包管理：使用包管理工具（如npm或Yarn）来管理项目依赖，使开发人员可以轻松地安装、更新和分享第三方库和工具。</li><li>代码规范和风格指南：制定和遵循代码规范和风格指南有助于确保代码的一致性和可读性。工具如ESLint和Prettier可以帮助检查和自动修复代码问题。</li><li>单元测试和集成测试：编写测试用例以确保代码质量和可维护性。使用测试工具（如Jest、Mocha、Cypress）来执行单元测试和集成测试。</li><li>持续集成/持续交付（CI/CD）：自动化测试和部署流程，确保代码更改经过测试后能够快速、稳定地交付到生产环境。</li><li>模块化开发：将前端代码分解为小的、可重用的模块，以促进团队合作、减少重复编码，并提高可维护性。</li><li>性能优化：前端工程化也包括优化网站性能的实践，如减小页面加载时间、减小资源文件大小、使用浏览器缓存等。</li><li>代码分离：使用动态导入或按需加载技术，以确保只加载必需的代码，提高性能和用户体验。</li><li>代码分支管理：采用适当的分支管理策略，以支持同时进行多个功能开发、热修复和版本发布。</li><li>文档生成：创建文档以记录代码、API、组件和项目结构，以协助开发人员和团队成员理解和使用代码。</li><li>错误监控和日志记录：使用工具（如Sentry、LogRocket）来监控和记录前端应用程序的错误和日志，以便及时识别和解决问题。</li><li>模拟数据和后端协作：在前端工程化中，可以使用模拟数据或与后端API的契约来加速前端开发，即使后端服务尚未准备就绪。</li><li>环境配置：管理开发、测试和生产环境的配置变量，以确保应用程序能够在不同环境中正常运行。</li></ol><p>前端工程化的目标是提高开发效率、代码质量和可维护性，同时降低错误风险。它有助于前端开发人员更好地应对快速发展的Web技术，并支持多人协作，以构建复杂的Web应用程序。</p><h2 id="ci-cd概述" tabindex="-1"><a class="header-anchor" href="#ci-cd概述" aria-hidden="true">#</a> CI/CD概述</h2><p>CI/CD（Continuous Integration / Continuous Deployment）是一种软件开发实践，旨在通过自动化流程来改进软件交付的速度、质量和可靠性。它分为两个主要部分：持续集成（CI）和持续部署/交付（CD）。</p><ol><li>持续集成（Continuous Integration - CI）： 持续集成是一种开发实践，要求开发者将代码频繁地（通常是每日或多次）集成到一个共享的版本控制仓库中，以确保代码的一致性和质量。主要特点包括：</li></ol><ul><li>自动化构建：每当代码变更时，CI服务器会自动构建应用程序，包括编译、测试和其他必要的构建任务。</li><li>自动化测试：各种测试，包括单元测试、集成测试和端到端测试，会自动运行以检测代码中的错误。</li><li>代码质量检查：通过代码规范检查和静态代码分析工具，确保代码符合规范并且质量高。</li><li>自动化部署至测试环境：将构建后的应用程序部署到测试环境，使开发团队和其他利益相关者可以测试新功能和改进。</li></ul><ol start="2"><li>持续部署/交付（Continuous Deployment / Continuous Delivery - CD）： 持续部署和交付构建在持续集成的基础上，它们的主要目标是自动将应用程序部署到生产环境。主要特点包括：</li></ol><ul><li>持续交付（Continuous Delivery - CD）：在持续交付中，应用程序的构建版本经过自动化测试和部署到预生产环境，但最终的发布需要手动批准。这意味着每次构建都是潜在可发布的版本。</li><li>持续部署（Continuous Deployment - CD）：与持续交付不同，持续部署中的每次构建都自动部署到生产环境，没有人工干预。这需要极高的自动化和信任代码质量的过程。</li></ul><p>CI/CD 的优势包括：</p><ul><li>加速交付：CI/CD自动化流程允许更快速、频繁地交付新功能和改进，缩短了上线周期。</li><li>提高质量：自动化测试和代码质量检查确保了应用程序的稳定性和可靠性，减少了错误进入生产环境的可能性。</li><li>减少手动工作：CI/CD工具减少了手动构建、测试和部署的工作，降低了人为错误的风险。</li><li>提高协作：CI/CD要求团队成员频繁集成代码，有助于解决集成问题并促进团队协作。</li><li>可重复性：每次构建都是自动化的，可以完全重复，从而降低了环境相关的问题。</li><li>快速回滚：在出现问题或错误的情况下，快速回滚可以迅速还原到先前稳定的版本，以减少对用户的不利影响。</li></ul><p>一些流行的CI/CD工具包括Jenkins、Travis CI、CircleCI、GitLab CI/CD、GitHub Actions等。CI/CD已成为现代软件开发的核心实践，有助于提高团队的生产力，减少错误，加速交付，提高客户满意度。</p><h2 id="gitlab-ci-cd" tabindex="-1"><a class="header-anchor" href="#gitlab-ci-cd" aria-hidden="true">#</a> GitLab CI/CD</h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p>GitLab CI/CD 是 GitLab 提供的持续集成和持续部署工具，它集成在 GitLab 开发平台中，旨在帮助团队实现自动化构建、测试和部署，以提高开发流程的效率和质量。以下是关于 GitLab CI/CD 的主要概念：</p><ol><li>Runner：Runner 是运行CI/CD作业的代理，可以是GitLab Runner（GitLab提供的Runner）或者用户自己托管的Runner。Runner负责接收CI/CD作业请求，并在指定环境中执行它们。</li><li>Pipeline：Pipeline是CI/CD的核心概念，它代表了一系列的CI/CD作业，通常包括构建、测试、部署等任务。Pipeline可以自动触发，也可以手动创建。</li><li>Job：Job是Pipeline的组成部分，它表示一个具体的任务，如编译应用程序、运行测试、部署到生产环境等。每个Job可以在不同的Runner上执行。</li><li>.gitlab-ci.yml文件：CI/CD配置存储在项目中的.gitlab-ci.yml文件中，该文件定义了Pipeline中包括哪些Job，以及它们的执行顺序、条件和变量。</li></ol><h3 id="为什么在docker容器内创建runner" tabindex="-1"><a class="header-anchor" href="#为什么在docker容器内创建runner" aria-hidden="true">#</a> 为什么在Docker容器内创建Runner</h3><p>随着项目的增多和技术的迭代，GitLab仓库内存在大量打包环境不同的代码，主要在于node环境的不同，而最初的runner所在服务器node版本为10.0.0，导致需求较高node版本的项目无法使用runner，每次上线都需要手动打包。而升级node版本又影响到大量老项目，基于此，经过技术调研决定在docker内运行Runner，来创建多个node环境的临时容器打包部署。</p><p>在Docker容器内运行Runner有以下好处：</p><ul><li>隔离和一致性：Docker容器提供隔离的运行环境，确保作业不会与主机系统或其他作业产生干扰。这有助于维持一致性，因为容器内的运行环境在不同主机上是相同的。</li><li>灵活性和可移植性：容器化的Runner非常灵活，可以轻松在不同主机之间移植，而不受主机操作系统的限制。这使得在不同环境中运行CI/CD作业变得更容易。</li><li>资源隔离：容器化Runner允许你为每个容器分配特定的资源，如CPU、内存和存储。这有助于有效管理资源并防止资源争用问题。</li><li>简化部署和升级：容器化的Runner可以轻松升级到新版本，而不需要干扰主机系统。这使得版本管理和升级变得更加简单。</li><li>自包含性：容器中包括了Runner所需的依赖项和运行时环境，这意味着你不必担心主机上的依赖问题。容器是自包含的，便于部署和管理。</li><li>多种操作系统支持：容器化的Runner可以在同一主机上运行多个容器，每个容器可以使用不同版本的操作系统。这提供了更大的灵活性，以满足不同项目的需求。</li><li>易于管理：使用Docker Compose或容器编排工具（如Kubernetes），你可以轻松管理多个容器化的Runner实例，同时维护一致性和可扩展性。</li></ul><h3 id="docker内创建runner流程" tabindex="-1"><a class="header-anchor" href="#docker内创建runner流程" aria-hidden="true">#</a> Docker内创建Runner流程</h3>',23),v=a(`<p>安装 Docker：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.daocloud.io/docker <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),k={href:"https://yeasy.gitbook.io/docker_practice/install",target:"_blank",rel:"noopener noreferrer"},m={href:"https://yeasy.gitbook.io/docker_practice/install/mirror",target:"_blank",rel:"noopener noreferrer"},b=a(`<li><p>拉取 gitlab-runner image(镜像)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull gitlab/gitlab-runner:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>添加 gitlab-runner container(容器)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> gitlab-runner <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /srv/gitlab-runner/config:/etc/gitlab-runner <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
 gitlab/gitlab-runner:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来解读下这段指令：</p><ul><li>docker run: 这是 Docker 命令，用于启动一个新的容器。</li><li>-d: 这是一个选项，表示在后台（即以守护进程方式）运行容器。</li><li>--name gitlab-runner: 这个选项为容器指定了一个名称，即 &quot;gitlab-runner&quot;，这有助于后续管理容器。</li><li>--restart always: 这个选项指定容器应该在退出时总是重新启动，以确保 GitLab Runner 始终运行。</li><li>-v /srv/gitlab-runner/config:/etc/gitlab-runner: 这个选项用于挂载卷（Volume），将本地文件系统中的 /srv/gitlab-runner/config 目录与容器内的 /etc/gitlab-runner 目录进行关联。这允许容器访问本地配置文件。</li><li>-v /var/run/docker.sock:/var/run/docker.sock: 这个选项也是用于挂载卷，将 Docker 守护进程的 UNIX 套接字（socket）与容器内的 /var/run/docker.sock 进行关联。这是为了使容器能够与宿主机上的 Docker 守护进程进行通信，从而可以在容器内执行 Docker 命令。</li><li>gitlab/gitlab-runner:latest: 这是要运行的容器的镜像名称和标签。在这种情况下，它使用了 GitLab Runner 的官方 Docker 镜像，版本标签为 &quot;latest&quot;，表示使用最新版本。</li></ul><p>综合起来，这个命令启动一个名为 &quot;gitlab-runner&quot; 的 Docker 容器，该容器运行 GitLab Runner 以用于 CI/CD 工作。容器与本地文件系统上的配置文件和 Docker 守护进程进行关联，以实现必要的功能。容器将在退出时自动重新启动，以确保 GitLab Runner 始终可用。</p></li><li><p>编写 Dockerfile</p><p>我们公司前端这边跑 Runner 的需求不只有依赖下载、项目打包和部署，还需要将打包好的项目文件上传到七牛云进行CDN内容分发，所以仅使用 node 官方提供的基础镜像是不够的，需要自己编写 Dockerfile 来定制镜像。</p><p>node14+ 环境 Dockerfile 示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment"># 基于node14镜像</span>
 FROM node:14
 <span class="token comment"># 更新包管理器，安装 git imagemagick openssh-client python2.7，构建 python 环境的原因是部分老项目的依赖下载需要 python 环境</span>
 RUN <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">git</span> imagemagick openssh-client python2.7
 <span class="token comment"># 设置 python2.7 为默认 Python 版本</span>
 RUN update-alternatives <span class="token parameter variable">--install</span> /usr/bin/python python /usr/bin/python2.7 <span class="token number">1</span>
 <span class="token comment"># 清理之前的 apt-get 命令生成的缓存和临时文件，以减小镜像大小</span>
 RUN <span class="token function">apt-get</span> clean
 <span class="token comment"># 下载并配置七牛云的 qshell 工具，包括下载、解压缩、设置环境变量和配置 qshell 账户信息，并删除压缩包减小镜像大小</span>
 RUN <span class="token builtin class-name">cd</span> /home/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token function">mkdir</span> qshell <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token builtin class-name">cd</span> qshell/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token function">wget</span> https://devtools.qiniu.com/qshell-v2.10.0-linux-386.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     gunzip qshell-v2.10.0-linux-386.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token function">tar</span> <span class="token parameter variable">-xf</span> qshell-v2.10.0-linux-386.tar <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/home/qshell <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     qshell account v******P <span class="token number">9</span>*****G qiniu@***.com <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token function">rm</span> <span class="token parameter variable">-rf</span> qshell-v2.10.0-linux-386.tar
 <span class="token comment"># 定义参数 SSH_PRIVATE_KEY，传递 SSH 私钥</span>
 ARG SSH_PRIVATE_KEY
 <span class="token comment"># 创建 SSH 目录、设置 SSH 私钥、配置已知主机和设置适当的权限</span>
 RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.ssh <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">700</span> ~/.ssh <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$SSH_PRIVATE_KEY</span>&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;\\r&#39;</span> <span class="token operator">&gt;</span> ~/.ssh/id_rsa <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/id_rsa <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> ssh-keyscan <span class="token number">1.1</span>.1.1 <span class="token operator">&gt;&gt;</span> ~/.ssh/known_hosts <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> ssh-keyscan <span class="token number">1.1</span>.1.1 <span class="token operator">&gt;&gt;</span> ~/.ssh/known_hosts <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">644</span> ~/.ssh/known_hosts

 <span class="token comment"># 设置环境变量 PATH，将 qshell 工具的路径添加到容器的环境变量中，以便可以直接运行 qshell 命令</span>
 ENV <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/home/qshell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node14 以下环境 Dockerfile 示例，与 14+ 版本的区别仅限于使用的包管理器不同，apt-get 包管理器在较低 node 版本镜像内更新失败：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> FROM node:12-alpine
 <span class="token comment"># 使用 apk 包管理器</span>
 RUN apk update <span class="token operator">&amp;&amp;</span> apk <span class="token function">add</span> <span class="token function">bash</span> <span class="token function">git</span> imagemagick openssh-client python2
 RUN <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/cache/apk/*
 RUN <span class="token builtin class-name">cd</span> /home/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token function">mkdir</span> qshell <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token builtin class-name">cd</span> qshell/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token function">wget</span> https://devtools.qiniu.com/qshell-v2.10.0-linux-386.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     gunzip qshell-v2.10.0-linux-386.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token function">tar</span> <span class="token parameter variable">-xf</span> qshell-v2.10.0-linux-386.tar <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/home/qshell <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     qshell account v******P <span class="token number">9</span>*****G qiniu@***.com <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
     <span class="token function">rm</span> <span class="token parameter variable">-rf</span> qshell-v2.10.0-linux-386.tar
 ARG SSH_PRIVATE_KEY
 RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.ssh <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">700</span> ~/.ssh <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$SSH_PRIVATE_KEY</span>&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;\\r&#39;</span> <span class="token operator">&gt;</span> ~/.ssh/id_rsa <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/id_rsa <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> ssh-keyscan <span class="token number">1.1</span>.1.1 <span class="token operator">&gt;&gt;</span> ~/.ssh/known_hosts <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> ssh-keyscan <span class="token number">1.1</span>.1.1 <span class="token operator">&gt;&gt;</span> ~/.ssh/known_hosts <span class="token punctuation">\\</span>
     <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">644</span> ~/.ssh/known_hosts
 ENV <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/home/qshell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义 Dockerfile 的好处：</p><ul><li>自定义镜像：Dockerfile 允许你创建一个完全符合你的应用程序或服务需求的自定义容器镜像。你可以在其中包含特定的软件包、配置文件、环境变量等，以满足应用程序的要求。</li><li>可重复性：使用 Dockerfile 可以确保容器的构建过程是可重复的。这样，你可以在不同的环境中（开发、测试、生产）使用相同的 Dockerfile 构建镜像，确保一致性。</li><li>版本控制：Dockerfile 可以与版本控制系统（如Git）一起使用，以便将容器镜像的构建过程与应用程序代码一起进行版本控制。这有助于跟踪镜像构建的历史记录，以及在需要时回滚到特定版本。</li><li>安全性：自己编写 Dockerfile 可以更好地控制容器中包含的软件和组件，从而提高容器的安全性。你可以选择仅包含必需的组件，减少潜在的安全漏洞。</li><li>轻量化：自定义 Dockerfile 可以创建更轻量的容器镜像，因为你可以仅包含应用程序所需的最小依赖项。这有助于减小镜像的大小，提高性能和资源利用率。</li><li>自动化构建：Dockerfile 可以与持续集成/持续交付（CI/CD）工作流程集成，自动化容器镜像的构建和部署过程。</li><li>社区支持：Docker社区和其他容器技术社区提供了丰富的Dockerfile库和最佳实践，以帮助你开始编写高质量的Dockerfile。</li></ul></li><li><p>构建 Docker Image</p><p>在编写好 Dockerfile 之后，我们需要将其构建成 docker 镜像。 在我们的 Dockerfile 中，使用到了一个变量 <code>SSH_PRIVATE_KEY</code>，这个变量的值是我们的 SSH 私钥，在构建镜像时，需要将私钥注入到镜像中。</p><ul><li>首先 Dockerfile 文件所在目录新建一个名为 <code>id_rsa</code> 的 SSH 私钥文件，然后将私钥内容复制到这个文件中。</li><li>然后新建一个名为 <code>.dockerignore</code> 的文件，将以下内容添加到其中，以确保在构建镜像时 SSH 密钥文件不会被包括在 Docker 构建上下文中：<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.git
.ssh
id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>最后，使用以下命令构建镜像：<code>docker build -t image-name --build-arg SSH_PRIVATE_KEY=&quot;$(cat id_rsa)&quot; .</code>，将镜像命名为 image-name，并将 <code>id_rsa</code> 文件中的私钥内容作为参数<code>SSH_PRIVATE_KEY</code>的值构建镜像。</li></ul></li><li><p>注册 Runner</p><p>使用以下命令注册 Runner：<code>docker exec -it gitlab-runner gitlab-ci-multi-runner register</code></p><ul><li>exec: 这是 Docker 命令的子命令，用于在正在运行的容器内执行命令。</li><li>-it: 这是选项，用于指定一个交互式终端（TTY）以及与之关联的标准输入（stdin）和标准输出（stdout）。这使您能够与容器内的命令进行交互。</li><li>gitlab-runner: 这是容器的名称或 ID，表示要在哪个容器中执行命令。</li><li>gitlab-ci-multi-runner register: 这是要在容器内执行的命令。具体来说，这是 GitLab Runner 工具的 register 子命令，它用于注册 GitLab Runner 到 GitLab CI/CD 服务。</li></ul><p>注册时程序会要求你填写相关的信息，这些信息可以从 Gitlab 项目的 管理员 -&gt; CI/CD 页面中找到：</p><p><img src="`+c+`" alt="image.png"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   Please enter the gitlab-ci coordinator URL:
   <span class="token comment"># https://gitlab.***.com/</span>

   Please enter the gitlab-ci token <span class="token keyword">for</span> this runner:
   <span class="token comment"># token 注册令牌</span>

   Please enter the gitlab-ci description <span class="token keyword">for</span> this runner:
   <span class="token comment"># Runner 的 description</span>

   Please enter the gitlab-ci tags <span class="token keyword">for</span> this runner <span class="token punctuation">(</span>comma separated<span class="token punctuation">)</span>:
   <span class="token comment"># Runner 的 tag，该 tag 用于指定项目运行于哪个 Runner 上</span>

   Whether to run untagged builds <span class="token punctuation">[</span>true/false<span class="token punctuation">]</span>:
   <span class="token comment"># true</span>

   Please enter the executor: docker, parallels, shell, kubernetes, docker-ssh, ssh, virtualbox, docker+machine, docker-ssh+machine:
   <span class="token comment"># docker 我们选择docker</span>

   Please enter the default Docker image <span class="token punctuation">(</span>e.g. ruby:2.7<span class="token punctuation">)</span>:
   <span class="token comment"># image-name 填入构建 Docker image 时填写的 image 名称，即我们通过 Dockerfile 构建的镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册成功后，就可以在 GitLab 项目 -&gt; CI/CD -&gt; Runners 页面中看到注册成功的 Runner 了。但是在我们使用刚注册的 Runner 进行项目构建时，会发现执行失败并报错：<code> ERROR: Job failed: API error (404): repository xxx not found: does not exist or no pull access</code>，这是因为 Gitlab Runner 会默认从远程拉取 image，而我们的 image 是在本地构建的，所以需要对 gitlab-runner 进行配置，把 pull_policy 设置为 if-not-present 或 never。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token comment"># 进入 gitlab-runner 的 bash 环境</span>
   <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab-runner <span class="token function">bash</span>

   <span class="token comment"># 编辑 config.toml</span>
   <span class="token function">vim</span> /etc/gitlab-runner/config.toml

   <span class="token comment"># 如果没有安装 vim 或 vi 或 nano，则先进行安装</span>
   <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">vim</span>

   <span class="token comment"># 添加下面代码</span>
   pull_policy <span class="token operator">=</span> <span class="token string">&quot;if-not-present&quot;</span>

   <span class="token comment"># 编辑保存完成后输入 exit 敲回车退出</span>
   <span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+'" alt="image.png"></p><p>这时再使用注册的 Runner 进行项目构建，就发现可以正常执行了。</p></li>',5),h=n("h3",{id:"编写-gitlab-ci-yml-文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#编写-gitlab-ci-yml-文件","aria-hidden":"true"},"#"),s(" 编写 .gitlab-ci.yml 文件")],-1),g=n("code",null,".gitlab-ci.yml",-1),f={href:"https://docs.gitlab.com/ee/ci/yaml/?query=gitlab-ci.yml",target:"_blank",rel:"noopener noreferrer"},_=a(`<p>举例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># 定义 stages</span>
    stages:
    - <span class="token function">install</span>
    - build
    - deploy
    - deploy_index

    <span class="token comment"># 每个job之前运行的命令</span>
    before_script:
    - <span class="token function">whoami</span>
    - <span class="token builtin class-name">pwd</span>
    - <span class="token function">node</span> <span class="token parameter variable">-v</span>
    - <span class="token function">npm</span> <span class="token parameter variable">-v</span>

    cache:
    key: <span class="token variable">\${CI_BUILD_REF_NAME}</span>
    paths:
        - node_modules/ <span class="token comment"># 为node_modules增加缓存</span>

    install:
    stage: <span class="token function">install</span>
    tags: <span class="token comment"># 指定使用的 Runner</span>
        - d-node16
    script:
        - <span class="token builtin class-name">echo</span> <span class="token string">&quot;======= 开始 安装依赖 =======&quot;</span>
        - <span class="token function">npm</span> <span class="token function">install</span>
    only:
        - master
    when: manual
    build:
    stage: build
    tags:
        - d-node16
    script:
        - <span class="token builtin class-name">echo</span> <span class="token string">&quot;======= 开始 构建 =======&quot;</span>
        - <span class="token function">npm</span> run build:p
        - <span class="token builtin class-name">echo</span> <span class="token string">&quot;======= 结束 构建 =======&quot;</span>
    artifacts:
        expire_in: <span class="token number">1</span> week <span class="token comment"># 生成文件保存周期</span>
        name: <span class="token string">&#39;\${CI_JOB_NAME}_\${CI_COMMIT_REF_NAME}&#39;</span>
        paths:
        - dist <span class="token comment"># 编译后生成的文件夹名</span>
    only:
        - master

    deploy:
    stage: deploy
    tags:
        - d-node16
    script:
        - <span class="token builtin class-name">echo</span> <span class="token string">&quot;======= 开始 部署 =======&quot;</span>
        - <span class="token function">npm</span> run qiniu
        - <span class="token function">npm</span> run deploy
        - <span class="token builtin class-name">echo</span> <span class="token string">&quot;======= 完成 部署 =======&quot;</span>
    only:
        - master

    deploy_index:
    stage: deploy_index
    script:
        - <span class="token builtin class-name">echo</span> <span class="token string">&quot;======= 开始 部署 index.html =======&quot;</span>
        - <span class="token function">npm</span> run deploy_index
        - <span class="token builtin class-name">echo</span> <span class="token string">&quot;======= 完成 部署 index.html =======&quot;</span>
    when: manual
    only:
        - master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写部署时需要的-shell-脚本" tabindex="-1"><a class="header-anchor" href="#编写部署时需要的-shell-脚本" aria-hidden="true">#</a> 编写部署时需要的 shell 脚本</h3><p>参考：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment">#!/bin/bash -</span>
    <span class="token assign-left variable">home</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>
    <span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span>
    <span class="token builtin class-name">pwd</span>
    <span class="token variable">)</span></span>
    <span class="token comment"># cd $home</span>

    <span class="token comment">## 项目部署路径</span>
    <span class="token assign-left variable">root_path</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> ./vite.config.js <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;onlineRootPath:&quot;</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;&#39;&quot;</span> <span class="token parameter variable">-f2</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;&#39;&quot;</span> <span class="token parameter variable">-f1</span><span class="token variable">)</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">&quot;__ONLINE_ROOT_PATH__&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;<span class="token variable">\${root_path}</span>&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;<span class="token variable">\${root_path}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot; ************************ &quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot; 请配置 vite.config.js 中的 onlineRootPath &quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot; ************************ &quot;</span>
    <span class="token builtin class-name">exit</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">\${root_path}</span>
    <span class="token comment">## 遍历文件</span>
    <span class="token keyword">function</span> <span class="token function-name function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        dep <span class="token variable">$1</span>
        <span class="token builtin class-name">return</span>
    <span class="token keyword">fi</span>
    mkdir_dir <span class="token variable">\${1<span class="token operator">##</span>*dist<span class="token operator">/</span>}</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">item</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> $1<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$item</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$file</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        walk <span class="token variable">$file</span>
        <span class="token keyword">else</span>
        <span class="token comment">## 遍历时不同步入口index.html</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;dist/index.html&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">continue</span>
        <span class="token keyword">fi</span>
        dep <span class="token variable">\${file}</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
    <span class="token punctuation">}</span>

    <span class="token comment">## 创建目录</span>
    <span class="token keyword">function</span> <span class="token function-name function">mkdir_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">root_dir</span><span class="token operator">=</span><span class="token variable">\${root_path}</span>/<span class="token variable">$1</span>
    <span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">\${root_dir<span class="token operator">/</span><span class="token operator">/</span>\\<span class="token operator">/</span><span class="token operator">/</span> }</span><span class="token punctuation">)</span> <span class="token comment">##表示&#39;/&#39;替换为&#39; &#39;空格</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">item</span> <span class="token keyword">in</span> <span class="token variable">\${arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token variable">$dir</span>/<span class="token variable">$item</span>
        <span class="token keyword">while</span> <span class="token builtin class-name">read</span> path <span class="token function">ip</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;ssh root@<span class="token variable">$ip</span> &#39;[ -d <span class="token variable">\${dir}</span> ] &amp;&amp; echo ok || mkdir -p <span class="token variable">\${dir}</span>&#39;&quot;</span>
        <span class="token function">ssh</span> root@<span class="token variable">$ip</span> <span class="token string">&quot;[ -d <span class="token variable">\${dir}</span> ] &amp;&amp; echo ok || mkdir -p <span class="token variable">\${dir}</span>&quot;</span> <span class="token operator">&lt;</span>/dev/null
        <span class="token keyword">done</span> <span class="token operator">&lt;</span>./scripts/deploy/ips.txt
    <span class="token keyword">done</span>
    <span class="token punctuation">}</span>

    <span class="token comment">## 同步文件</span>
    <span class="token keyword">function</span> <span class="token function-name function">dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token keyword">while</span> <span class="token builtin class-name">read</span> path <span class="token function">ip</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;scp -p -r  <span class="token variable">$file</span>   root@<span class="token variable">$ip</span>:<span class="token variable">$root_path</span>/<span class="token variable">\${file<span class="token operator">##</span>*dist<span class="token operator">/</span>}</span>&quot;</span>
        <span class="token function">scp</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-r</span> <span class="token variable">$file</span> root@<span class="token variable">\${ip}</span><span class="token builtin class-name">:</span><span class="token variable">\${root_path}</span>/<span class="token variable">\${file<span class="token operator">##</span>*dist<span class="token operator">/</span>}</span> <span class="token operator">&lt;</span>/dev/null
    <span class="token keyword">done</span> <span class="token operator">&lt;</span>./scripts/deploy/ips.txt
    <span class="token punctuation">}</span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;=================开始发布================&quot;</span>

    <span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">%</span>*<span class="token operator">/</span>}</span>
    walk <span class="token variable">$dir</span>
    <span class="token comment">## 最后同步入口文件</span>
    dep <span class="token variable">\${dir}</span>/index.html

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;=================完成发布================&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要部署的服务器 ip 保存在同目录下的 <code>ips.txt</code> 文件中，执行指令 <code>bash ./scripts/deploy/deploy.sh dist</code>，需要将 <code>dist</code> 目录作为参数传递给脚本。</p><p>同步七牛云CDN脚本参考：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token assign-left variable">home</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $0<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token keyword">function</span> <span class="token function-name function">read_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> $1<span class="token variable">\`</span></span>
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$file</span> <span class="token punctuation">]</span>
        <span class="token keyword">then</span>
            read_dir <span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$file</span>
        <span class="token keyword">else</span>
            <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>/<span class="token variable">$file</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;dist/index.html&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">then</span>
                <span class="token builtin class-name">continue</span>
            <span class="token keyword">fi</span>
            <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $count + <span class="token number">1</span><span class="token variable">\`</span></span>
            <span class="token comment">## 剔除 dsit</span>
            <span class="token assign-left variable">short</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">##</span>*dist<span class="token operator">/</span>}</span>
            qshell rput yd-common <span class="token variable">$short</span><span class="token string">&quot;/&quot;</span><span class="token variable">$file</span> <span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$file</span> <span class="token parameter variable">--overwrite</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;https://***.***.com/<span class="token variable">$short</span>/<span class="token variable">$file</span>&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;============ 开始同步CDN ===========&quot;</span>

<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token variable">\${1<span class="token operator">%</span>*<span class="token operator">/</span>}</span>
read_dir <span class="token variable">$name</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;count ===== <span class="token variable">$count</span>&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;============ 完成同步CDN ===========&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行指令 <code>bash ./scripts/cdn/qiniu.sh dist</code>，同样需要将 <code>dist</code> 目录作为参数传递给脚本。</p>`,9);function q(y,C){const e=t("ExternalLinkIcon");return p(),o("div",null,[u,n("ol",null,[n("li",null,[v,n("p",null,[s("参考 "),n("a",k,[s("https://yeasy.gitbook.io/docker_practice/install"),i(e)]),s(" 建议安装好后切换国内镜像源，参考 "),n("a",m,[s("https://yeasy.gitbook.io/docker_practice/install/mirror"),i(e)])])]),b]),h,n("p",null,[g,s(" 文件是GitLab CI/CD的配置文件，用于定义CI/CD流水线的构建、测试和部署过程。该文件必须位于GitLab项目的根目录，并包含有关如何构建和交付项目的信息。 编写参考："),n("a",f,[s("https://docs.gitlab.com/ee/ci/yaml/?query=gitlab-ci.yml"),i(e)])]),_])}const $=l(d,[["render",q],["__file","基于GitLab Runner的CICD部署流程.html.vue"]]);export{$ as default};

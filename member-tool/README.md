### 参会人测试工具

本工具只支持观众的添加，不经过网易的通道。

通过 `npm start` 启动 `express` 后端，由 `WebSocket` 提供参会人推送功能，现在参会人有个退会延时，可以设置。

相应的客户端对接是在 plugin/test-tool 目录下。

通过 `npm run dev:nomock` 可以启动对应的配置界面，提供组数、每组人数等随机数范围等配置项


-----



### Node Express template project

This project is based on a GitLab [Project Template](https://docs.gitlab.com/ee/gitlab-basics/create-project.html).

Improvements can be proposed in the [original project](https://gitlab.com/gitlab-org/project-templates/express).

### CI/CD with Auto DevOps

This template is compatible with [Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/).

If Auto DevOps is not already enabled for this project, you can [turn it on](https://docs.gitlab.com/ee/topics/autodevops/#enabling-auto-devops) in the project settings.

### Developing with Gitpod

This template has a fully-automated dev setup for [Gitpod](https://docs.gitlab.com/ee/integration/gitpod.html).

If you open this project in Gitpod, you'll get all Node dependencies pre-installed and Express will open a web preview.

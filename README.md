# InCraftTime 神人故事

> [!WARNING]
> 开发过程中 暂不接受外部贡献者的PR。

> [!TIP]
> 我们欢迎你向此仓库提交代码，你可以向此仓库提交或修改内容，具体可在每一页的页脚找到编辑按钮，流程与普通PR一致。

[<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?color=0077b6">](https://github.com/SamKirkland/FTP-Deploy-Action)

ICT神人故事

## 对所有Contributor的提示

该文档站使用[VitePress](https://vitepress.dev/zh/)构建，一些特殊语法可见以上或者[此处](https://docs.ict.msyark.top/markdown-examples)

推荐使用本地预览，修改代码后请务必验证后再提交。

接下来是部署本地预览的方法。

### 本地部署

#### 1. 克隆分支仓库

每一步的开始，Clone仓库，由于你需要在自己的Fork仓库修改，请Clone你自己的仓库而不是本仓库。推荐[GitHub Desktop](https://desktop.github.com/download/)。

在电脑上已经安装GitHub Desktop后，点击绿色Code按钮中的`Open with Github Desktop`

![Open with Github Desktop](https://github.com/user-attachments/assets/adb4bfe4-d4d7-46ad-96d8-7d811ef95a02)

也可使用Git操作，此处不再说明，下同

#### 2. 准备环境

这里以Windows电脑为例，在确保电脑已经有Node.js环境情况下且npm指令可正常使用，打开仓库目录（可直接从GitHub Desktop打开）并右键`在终端中打开`，运行以下内容

```bash
npm add -D vitepress
```

![npm add -D vitepress](https://github.com/user-attachments/assets/90ab0d0e-70fa-4c0f-9c9c-3f263c5358dc)

> [!NOTE]
> 此处已经安装过

### 3. 生成一个网站

完成上述所有操作后，继续执行

```bash
npm run dev
```

![npm run docs:dev](https://github.com/user-attachments/assets/6141e5a2-c797-47aa-8706-46fe821b559b)

> [!NOTE]
> 图中命令略有不同，请以文字为准

接着打开终端中的[链接](http://localhost:5173/)即可访问

直接修改Markdown源文件，可以看到修改后会自动实时刷新，无需手动按F5或者按刷新按钮，并且延迟很低

> [!TIP]
> 预览前不要忘记保存

#### 4. 推送更改

写完不要忘记Push，在GitHub Desktop中要先Commit更改再Push，否则没人能看见你的更改

改完以后确认无问题交PR

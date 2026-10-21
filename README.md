# Climate Graph Lab

> A bilingual, offline climate graph quiz for geography practice.  
> 一个中英双语、可离线运行的地理气候图练习网站。

## English

### Features

- 5,000 cities from 245 countries and territories.
- 25,000 practice cards, generated as five teaching variants per city.
- Two-step questions: identify the climate type, then match the city.
- English and Simplified Chinese interface.
- One-click language toggle with a globe icon.
- One-click theme cycle: follow system, light, and dark.
- Random practice, ordered study, and wrong-answer review.
- Score, answered count, accuracy, progress bar, and chart hover values.
- Full-screen quiz view designed to fit one viewport without page scrolling.
- Split project files: HTML, CSS, JavaScript, and city data.

### Project files

| File | Purpose |
| --- | --- |
| `index.html` | Setup screen and quiz interface |
| `styles.css` | Layout, responsive design, and light/dark themes |
| `app.js` | Quiz logic, chart rendering, language, themes, scoring, and review |
| `cities.js` | Embedded 5,000-city dataset loaded as `window.CITY_DATA` |
| `DESCRIPTION.md` | Short bilingual project description |

### Run locally

Keep all four runtime files in the same folder and open `index.html` in a modern browser. No build step or package installation is required.

For the most reliable browser behavior, serve the folder with any simple local static server instead of opening the file directly. The quiz itself does not require an internet connection after the files are present.

### Data and limitations

The city list is based on the [World Cities dataset](https://github.com/joelacus/world-cities), which credits GeoNames and is published under CC BY 4.0. The included list is a curated 5,000-record subset selected from the source data.

The climate profiles are generated teaching models based on latitude, longitude, hemisphere, and a broad climate template. They are not measured monthly observations, official Köppen classifications, or a source for travel, agriculture, safety, or scientific decisions. The five cards for one city are practice variations, not five separate real climate records.

### License

The application code and original interface in this repository can be released under the license selected by the repository owner. The city data remains subject to the attribution and license terms of its upstream source. If you publish or redistribute the project, keep the source attribution and license notice visible.

## 中文

### 功能

- 覆盖 245 个国家和地区的 5,000 个城市。
- 共 25,000 张练习题卡，每个城市生成 5 个教学练习变体。
- 两步答题：先判断气候类型，再匹配城市。
- 支持 English 和简体中文。
- 地球图标一键切换语言。
- 主题图标一键循环切换：跟随系统、浅色、深色。
- 支持随机练习、顺序学习和错题复习。
- 提供得分、作答数量、正确率、进度条和图表悬停数值。
- 答题页按单屏设计，尽量避免页面上下滚动。
- HTML、CSS、JavaScript 和城市数据分离保存。

### 文件说明

| 文件 | 用途 |
| --- | --- |
| `index.html` | 开始设置页和答题界面 |
| `styles.css` | 页面布局、响应式样式和明暗主题 |
| `app.js` | 题目逻辑、图表绘制、语言、主题、计分和错题复习 |
| `cities.js` | 以 `window.CITY_DATA` 形式加载的 5,000 个城市数据 |
| `DESCRIPTION.md` | 简短的中英双语项目介绍 |

### 本地运行

将这四个运行文件放在同一个文件夹中，然后用现代浏览器打开 `index.html`，不需要构建或安装依赖。

为了获得更稳定的浏览器行为，建议通过任意简单的本地静态服务器访问该文件夹。文件准备好后，测试本身不需要联网。

### 数据来源和限制

城市名单基于 [World Cities 数据集](https://github.com/joelacus/world-cities)，该项目注明数据来源包含 GeoNames，并采用 CC BY 4.0。当前项目从源数据中整理出 5,000 条城市记录。

气候图是根据纬度、经度、南北半球和宽泛的气候模板生成的教学模型，不是逐月实测数据、官方柯本气候分类，也不适合用于旅行、农业、安全或科研决策。同一个城市的 5 张题卡是练习变化，不代表 5 份真实气候记录。

### 许可证

本项目的程序代码和原创界面可以由仓库所有者选择许可证发布。城市数据仍需遵守上游数据源的署名和许可证要求。发布或再分发时，请保留数据来源、署名和许可证说明。

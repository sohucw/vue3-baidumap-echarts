# vue3-baidu-map-charts

## 注意
自己去申请ak，并设置白名单
去百度官网 https://lbsyun.baidu.com/ 然后在 应用管理 -> 我的应用 里，创建应用，创建好后复制 AK
## 简介

vite5 + vue3 + ts + datav-vue3 + echarts + 百度地图 大屏展示

预览地址 https://sohucw.github.io/vue3-baidumap-echarts/#/

**本项目数据重属虚构，请勿商用**

## 运行

安装依赖
```shell
pnpm i
```

运行
```shell
pnpm run dev
```

打包
```shell
nppm run build
```

## 地图
由于对百度地图api加了白名单，请自行替换为你的api地址。修改根目录下的 `index.html`：
```html
<script type="text/javascript" src="https://api.map.baidu.com/api?v=3.0&ak=你的ak"></script>
```
百度地图API设置白名单后，本地仍可调用方法：
1. 假设百度白名单为 `*abc.com*`
2. 本地修改hosts文件：
  - windows文件位置 `/usr/etc`；
  - mac 下使用 `sudo vi /etc/hosts` 编辑，输入 i 进入编辑模式，修改完，按 `ESC` 后输入:号，然后输入 wq 回车保存。
  ```txt
  127.0.0.1         abc.com
  ```
3. 本地访问地址，使用 `abc.com:9001`，即可正常访问百度地图API

## 文档
### 1. vite+vue3 配合 echarts 使用文档
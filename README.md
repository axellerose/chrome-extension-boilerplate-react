# Filter Result Preview Google Chrome Extension

A custom Chrome Extension that allows to fitler Data Extension and see the result without running a filter inside SFMC.

## Installation

1. In Google Chrome browser go to **Settings** > **Extensions** and activate **Developer mode** (top-right corner)
2. On the top-left corner press **Upload unpacked**
3. Select `build` folder and press upload
4. Google Chrome Extension (GCE) is now active in your browser

## CloudPage ampscript processing

A cloud page is created by web studio and hosts on MC side as JSON resource file. It processes incoming AMPscript and returns result string to the Chrome Extension. The script can process only one filter. You can find an ampscript processing CloudPage in the Web Studio -> CloudPages -> _Filter Preview > FitlerPreviewServer. This template is hosts in **TESTING ENVIRONMENT**

## Logs

The Chrome Extension saves request logs info: Timestamps, Requester IP, Requester URL, Response. Every Business Unit has log Data Extension. You can find log Data Extension in the Data Extensions -> System -> FilterPreviewRequestLogDE

## Application structure

```bash
.
├── README.md - "docs file"
├── .babelrc - "javascript compiler"
├── .eslintrc - "code spell review tool"
├── .pretierrc - "code formatter tool"
├── webpack.config.js - "Webpack 5 configuration"
├── package-lock.json - "packages versions"
├── package.json - "application descriptions and dependencies"
├── src
│   ├── assets
│   │   └── img
│   │   │   └── icon.png - "filter icon"
│   ├── pages
│   │   └── Background
│   │   │   └── index.js - "Chrome Extension background scripts"
│   │   └── Content
│   │   │   └── index.js - "Paint UI, collect and encrypt data, get result from Cloud Pages"
│   │   └── Popup
│   │   │   └── index.js - "Paint popup UI, show current Business Unit"
│   │   │   └── index.html - "HTML layout"
│   ├── manifest.json - "Chrome Extension settings"
│   ├── ssjs
│   │   └── filterPreviewServer.html - "SSJS - functionality for Cloud Page JSON source file"
│   ├── utils
│   │   └── build.js - "compiler config"
│   │   └── env.js - "environment setting"
│   │   └── webserver.js - "webserver config"
```

## Security Features

- IP Whitelisting: access is limited by a list of IP addresses provided by OPAP;
- Data Encryption: data collected from page HTML is encrypted by Chrome Extension and Decrypted on Cloud Page;

## Chrome Extension workflow

From HTML page Chrome Extension collects Business Unit name, Data Extension name, filter form data. This data is sent to Cloud Page where data is decrypted. Then a new fitler activity is created, run and send a result back to Chrome Extension UI (rows count).

Current Chrome Extension is only available at:

- Email Studio -> Email -> Subscribers -> Data Filters -> Filter preview page;
- Email Studio -> Email -> Subscribers -> Data Filters -> Filter preview page > Filter edit page.

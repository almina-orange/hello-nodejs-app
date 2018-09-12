# hello-nodejs-app

## Info
* Heroku Simple Tutorial
* 超初歩的な Heroku x Node.js

## Basic Component
```
.
|-- .gitignore
|-- Procfile            # heroku app 処理管理ファイル
|-- app.json            # heroku app パッケージ管理ファイル
|-- package.json        # Node.js パッケージ管理ファイル, 構成管理用
|-- package-lock.json   # Node.js パッケージ管理ファイル, 最新バージョンの保持用
|-- index.js            # main script
`-- README.md           # this
```

## How to startup?
1. `npm`で使用する Node.js のバージョン及びパッケージの依存関係を追加

    ```sh
    # 基本的に Enter でいい
    $ npm init
    > package name:
    > ...
    > Is this OK?
    ```

2. `package.json`を編集

    ```diff
    {
        "name": ...,
        "...": ...,
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
    +       "start": "node index.js"
        }
        "...": ...
    }

3. `index.js`を作成，`process.env.PORT`をリッスン

    ```sh
    $ touch index.js
    ```

    ```js
    var http = require('http')
    var PORT = process.env.PORT || 5000

    http.createServer(function (request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"})
        response.end("Hello World\n")
    }).listen(PORT, () => console.log(`Listeing on ${ PORT }`))
    ```

4. git リポジトリと heroku app を作成，リモートに push する

    ```sh
    $ git init
    $ git add . && git commit -m "[$MESSAGE]"
    $ heroku app create [$APP_NAME]
    $ git push heroku master
    ```

5. `curl`および`heroku open`で heroku app を確認

    ```sh
    $ curl https://[$APP_NAME].herokuapp.com
    $ heroku open
    ```


------

## Ref
* Node.js アプリをクラウドにデプロイ・運用・スケール - Heroku, [https://jp.heroku.com/php](https://jp.heroku.com/nodejs)
# Node JS Basic

## 환경설정
### Formatter
1. npm i -D prettier
2. create file .prettierrc
    ```js
    {
        "semi": true,
        "singleQuote": true
    }
    ```
3. mkdir .vscode
4. cd .vscode
5. create file settings.json
    ```js
    {
        "[javascript]": {
            "editor.formatOnSave": true,
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        }
    }
    ```
### Linter
1. npm i -D eslint eslint-plugin-import
2. create file .eslintrc.js
    ```js
    module.exports = {};
    ```
3. npm i -D eslint-config-airbnb-base eslint-config-prettier
    ```js
    module.exports = {
        extends: ['airbnb-base', 'prettier'],
    };
    ```

### Type Checking
1. npm i -D typescript @types/node

### core-js 낮은 버전의 Node 버전에서 최신 버전의 기능을 활용할 경우 사용
1. npm i core-js
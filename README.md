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
2. create file jsconfig.json
    ```js
    {
        "compilerOptions": {
            "strict": true,
            "noImplicitAny": true,
            "noUnusedParameters": true,
            "noUnusedLocals": true,
            "noUncheckedIndexedAccess": true
        },
        "include": [
            "src/**/*"
        ]
    }
    ```

### Polyfill 낮은 버전의 Node 버전에서 최신 버전의 기능을 활용할 경우 사용
1. npm i core-js
2. edit file jsconfig.json
```js
    {
        "compilerOptions": {
            "strict": true,
            "lib": ["ES2019"],
            "noImplicitAny": true,
            "noUnusedParameters": true,
            "noUnusedLocals": true,
            "noUncheckedIndexedAccess": true
        },
        "include": [
            "src/**/*"
        ]
    }
    ```
### Transplie : 신규 언어 스펙에서 구형언어 스펙으로 트랜스 파일을 할 때 사용
1. npm i esbuild
2. edit file package.json

    ```js
    "scripts": {
        "debug": "node src/main.js",
        "build": "esbuild src/esbuildexam.js --bundle --outfile=build/main.js --target=node10.4"
    }
    ```
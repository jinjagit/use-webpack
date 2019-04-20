# webpack
practice with webpack and related tools

Working through [this tutorial](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70), by Peter Jang (2017):

"...
The goal of this article is to provide a historical context of how JavaScript tools have evolved to what they are today in 2017. We’ll start from the beginning and build an example website like the dinosaurs did — no tools, just plain HTML and JavaScript. Then we’ll introduce different tools incrementally to see the problems that they solve one at a time. ..."

  * To run webpack manually after changing index.js, run <code>./node_modules/.bin/webpack</code>
  * Running <code>npm run server</code> on this repo will start an auto-updating dev server (localhost:8080)
  * Note: Debugging errors when using webpack bundling may be difficult without using [sourcemaps](https://webpack.js.org/guides/development/#using-source-maps) (not included in this example repo)

## Summary of steps to get webpack-dev-server up and running:

1. Create index.html & index.js. Call index.js from index.html with:
<code><script src="index.js"></script></code>

2. Navigate to root of app / repo and run <code>npm init</code> Accept all defaults with 'enter'.

3. (Optional - useful for testing this setup) Install desired JavaScript package(s). For example, install 'moment', with: <code>npm install moment --save</code>

4. Install webpack: <code>npm install webpack webpack-cli --save-dev</code>

5. Change JavaScript source in index.html to <code><script src="dist/main.js"></script></code>

6. Create webpack.config.js in root and add:
```
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  }
};
```
Now, use <code>./node_modules/.bin/webpack</code> to run webpack after every code change (if needed / not running dev-server)

7. Install babel for transpiling: <code>npm install @babel/core @babel/preset-env babel-loader --save-dev</code>

8. Add code to webpack.config.js:
```
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```
Now can use ES2015 features, including 'import'.

9. Install webpack-dev-server: <code>npm install webpack-dev-server --save-dev</code>

10. Add npm script to package.json:
```
...
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "webpack-dev-server --open"
  },
  ...
  ```

11. run dev server with:<code>npm run server</code>

### Note:

  * Addition of npm 'build' and 'watch' scripts ommited from steps above (but included in tutorial), since the dev server will cover their functionality.

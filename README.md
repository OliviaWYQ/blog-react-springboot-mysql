# blog-react-springboot-mysql

## Demo

build MySQL database:

```
$ mysql -u root -p < 'blogdemo.sql' 
```

run server on port 8080:

```
$ cd blogdemo/
$ mvn clean
$ mvn compile
$ mvn package
$ cd target/
$ java -jar <jarfilename>.jar
```

run client on port 8081:

```
$ cd blogreact
$ yarn install
$ yarn run dev-server
```

Preview:

![image](https://github.com/OliviaWYQ/blog-react-springboot-mysql/blob/master/report/Home.png)
![image](https://github.com/OliviaWYQ/blog-react-springboot-mysql/blob/master/report/Add.png)
![image](https://github.com/OliviaWYQ/blog-react-springboot-mysql/blob/master/report/Edit.png)
  
### Summary

A blog website where users can view, update, edit and remove posts.

### Framework

front-end: react.js

back-end: spring-boot

### construction

front-end: 
Use Redux for data access, and use redux-thunk as the middleware.

back-end:
Use MySQL database, and query data by Spring JPA.

<img src="https://github.com/OliviaWYQ/blog-react-springboot-mysql/blob/master/report/demo.png" width = "400" height = "500" alt="img4" align=center />

## Unit Test

front-end: Jest

```
$ cd blogreact/
$ npm test
```

back-end: Junit

```
$ cd blogdemo/
$ mvn test
```

Use [TravisCI](https://travis-ci.com/OliviaWYQ/blog-react-springboot-mysql) as Devops tool and use [Coverall](https://coveralls.io/github/OliviaWYQ/blog-react-springboot-mysql) to test branch coverage.

## Report

传统开发流程：

![image](https://github.com/OliviaWYQ/blog-react-springboot-mysql/blob/master/report/waterfall.png)

Agile 敏捷开发流程: 采用迭代、循序渐进的方法进行软件开发，把项目进行拆分，分别完成每个可独立运行的小项目，使软件一直处于可使用状态。

![image](https://github.com/OliviaWYQ/blog-react-springboot-mysql/blob/master/report/agile.png)

![image](https://github.com/OliviaWYQ/blog-react-springboot-mysql/blob/master/report/ScrumModel.jpg)

看板软件：[Trello](https://trello.com/b/QvWv9Y9a/demo)

集成开发工具：

VS Code (for JavaSvript)

IDEA (for Java)

工具链：

前端：包管理工具npm, 打包工具webpack, 样式表工具sass

后端：构建工具Maven

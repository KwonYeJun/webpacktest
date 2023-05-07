1. 프로젝트를 생성한다.
2. 프로젝트에 npm, package manager를 초기화 한다.
`npm init'

3.webpack 번들러를 npm을 통해 설치 하였다
`npm install --save-dev webpack`
여기서 --save-dev 명령은 `나는 지금 '개발을 위한 모듈' 을 사용 하겠다`. 라는 뜻으로
마치 git 처럼 개발자많을 위한 모듈이며, 프로덕트(서비스)와는 전혀관계 없는 모듈이다.

3-1. 웹팩 번들러, webpack이 정상적으로 설치되었다면, package.json파일에 일반 `dependencies`가 아닌 dev라는 접두사가 붙은 `devDependencies`키에 webpack이 추가된 것을 확인할 수 있다.

4.개발환경에서 번들러를 사용할 것이므로, CLI 환경으로 webpack을 다루는 것이 일반적이다.
따라서 webpack을 cli에서 명령할 수 있게끔 도와주는 추가적인 모듈을 함께 설치한다.
`npm install --save-dev webpack-cli`명령어를 실행 한다.
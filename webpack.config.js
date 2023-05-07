// ! config파일은 항상 root 위치에 있어야 한다.
// ! commonJS 방식으로 '모듈'을 만들었다.
// module.exports = {
//   entry: "진입점 파일, 메인파일이름",
//   output: {
//     filename: '번들할 파일이름',
//   },
// };

// module.exports = {
//   entry: "./index.js",
//   output: {
//     filename: "./index.bundle.js",
//   },
// };

// ? ESM 방식으로도 해본다.

export default {
  entry: "./index.js",
  output: {
    filename: "./index.bundle.js",
  },
};

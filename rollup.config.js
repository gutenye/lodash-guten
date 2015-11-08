import babel from "rollup-plugin-babel"

export default {
  entry: "lodash-guten.js",
  format: "umd",
  dest: "dist/lodash-guten.js",
  plugins: [
    babel({exclude: "node_modules/**", sourceMap: true})
  ]
}

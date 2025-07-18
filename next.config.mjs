/** @type {import('next').NextConfig} */
import withYaml from 'next-plugin-yaml'

const nextConfig = withYaml({
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'base.clue.surf',
        port: '',
        pathname: '/**',
      },
    ],
  },
  pageExtensions: ['md', 'tsx', 'ts'],
  poweredByHeader: false,
  trailingSlash: false,
  webpack: (config, options) => {
    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      layers: true,
      topLevelAwait: true,
    }
    config.resolve.fallback = {
      fs: false,
      path: false,
      dns: false,
      net: false,
      tls: false,
    }

    config.resolve = {
      ...config.resolve,
      // alias: {
      //   ...config.resolve.alias,
      //   '@termsurf/task': path.resolve(
      //     __dirname,
      //     './node_modules/@termsurf/task',
      //   ),
      // },
      // alias: {
      //   sharp$: false,
      //   'onnxruntime-node$': false,
      // },
      extensions: ['.ts', '.tsx', '.js', '.json', '.mjs'],
    }

    config.plugins ??= []

    // config.module.rules.push({
    //   test: /\.wasm$/,
    //   type: 'asset/resource',
    // })

    // config.module.rules.push({
    //   test: /\.css$/i,
    //   include: path.resolve(__dirname, './styles'),
    //   use: [
    //     'style-loader',
    //     'css-loader',
    //     {
    //       loader: 'postcss-loader',
    //       options: {
    //         postcssOptions: {
    //           plugins: ['postcss-preset-env'],
    //         },
    //       },
    //     },
    //   ],
    // })

    // config.module.rules.push({
    //   test: /\.mdx?$/,
    //   use: [
    //     // Note that Webpack runs right-to-left: `@mdx-js/loader` is used first, then
    //     // `babel-loader`.
    //     { loader: 'babel-loader', options: {} },
    //     {
    //       loader: '@mdx-js/loader',
    //       /** @type {import('@mdx-js/loader').Options} */
    //       options: {},
    //     },
    //   ],
    // })

    // TODO: improve this function -> track https://github.com/vercel/next.js/issues/25852
    // if (options.isServer) {
    //   config.output.webassemblyModuleFilename =
    //     './../static/wasm/[modulehash].wasm'
    // } else {
    //   config.output.webassemblyModuleFilename =
    //     'static/wasm/[modulehash].wasm'
    // }

    config.resolve.alias.canvas = false

    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: 'asset/source',
    })

    config.module.rules.push({
      test: /\.(txt|node)$/,
      loader: 'raw-loader',
    })

    return config
  },
})

export default nextConfig

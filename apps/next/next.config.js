// /** @type {import('next').NextConfig} */
//
// const { withNativebase } = require('@native-base/next-adapter')
//
// module.exports = withNativebase({
//   dependencies: [
//     '@expo/next-adapter',
//     'react-native-vector-icons',
//     'react-native-vector-icons-for-web',
//     'solito',
//     'app'
//   ],
//   nextConfig: {
//     projectRoot: __dirname,
//     reactStrictMode: true,
//     webpack5: true,
//     webpack: (config, options) => {
//       config.resolve.alias = {
//         ...(config.resolve.alias || {}),
//         'react-native$': 'react-native-web',
//         '@expo/vector-icons': 'react-native-vector-icons'
//       }
//       config.resolve.extensions = [
//         '.web.js',
//         '.web.ts',
//         '.web.tsx',
//         ...config.resolve.extensions
//       ]
//       return config
//     }
//   }
// })


// /** @type {import('next').NextConfig} */
// const { withNativebase } = require('@native-base/next-adapter')
// const withFonts = require('next-fonts')
// const withImages = require('next-images')
// const withPlugins = require('next-compose-plugins')
// const withTM = require('next-transpile-modules')(
//   [
//     // '@react-navigation/native',
//     // '@react-navigation/native-stack',
//     // '@supabase/auth-helpers-nextjs',
//     // '@supabase/auth-helpers-react',
//     // '@supabase/auth-ui-react',
//     // '@supabase/supabase-js',
//     // 'expo-linking',
//     // 'native-base',
//     // 'react-native-svg',
//     // 'react-native-web',
//     'solito',
//     'app'
//   ],
//   // {
//   //   resolveSymlinks: true
//   // }
// )
//
// const nextConfig = {
//   projectRoot: __dirname,
//   reactStrictMode: false,
//   webpack5: true,
//   images: {
//     disableStaticImages: true
//   },
//   experimental: {
//     forceSwcTransforms: true,
//     swcPlugins: [[require.resolve('./plugins/swc_plugin_reanimated.wasm')]]
//   }
// }
//
// module.exports = withTM(withNativebase({
//       dependencies: [
//         '@expo/next-adapter',
//         'react-native-vector-icons',
//         'react-native-vector-icons-for-web',
//         'solito',
//         'app'
//       ]
//       // nextConfig: {
//       //   projectRoot: __dirname,
//       //   reactStrictMode: false,
//       //   webpack5: true,
//       //   webpack: (config, options) => {
//       //     config.resolve.alias = {
//       //       ...(config.resolve.alias || {}),
//       //       'react-native$': 'react-native-web',
//       //       '@expo/vector-icons': 'react-native-vector-icons'
//       //     }
//       //     config.resolve.extensions = [
//       //       '.ts',
//       //       '.js',
//       //       '.web.js',
//       //       '.web.jsx',
//       //       '.web.ts',
//       //       '.web.tsx',
//       //       ...config.resolve.extensions
//       //     ]
//       //     return config
//       //   }
//       // }
//     }
//   )
// )


/** @type {import('next').NextConfig} */

const { withNativebase } = require('@native-base/next-adapter')

const withTM = require('next-transpile-modules')(
  [
    '@react-navigation/native',
    '@react-navigation/native-stack',
    '@supabase/auth-helpers-nextjs',
    '@supabase/auth-helpers-react',
    '@supabase/auth-ui-react',
    '@supabase/supabase-js',
    'expo-linking',
    'native-base',
    'react-native-svg',
    'react-native-web',
    'solito',

    '@expo/vector-icons',
    'app',
    'next',
    'raf',
    'react-native-vector-icons',

    '@expo/next-adapter',
    '@native-base/next-adapter',
    '@types/node',
    'babel-preset-expo',
    'eslint-config-next',
    'next-compose-plugins',
    'next-fonts',
    'next-transpile-modules',

    'app'
  ],
  {
    resolveSymlinks: true
  }
) // pass the modules you would like to see transpiled

module.exports = withTM(withNativebase({
      dependencies: [
        '@expo/next-adapter',
        'react-native-vector-icons',
        'react-native-vector-icons-for-web',
        'solito',
        'app'
      ],
      nextConfig: {
        // experimental: {
        //   transpilePackages: ['app']
        // },
        projectRoot: __dirname,
        reactStrictMode: true,
        // inAmpMode: false,
        webpack5: true,
        webpack: (config, options) => {
          config.resolve.alias = {
            ...(config.resolve.alias || {}),
            'react-native$': 'react-native-web',
            '@expo/vector-icons': 'react-native-vector-icons'
          }
          config.resolve.extensions = [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.web.ts',
            '.web.tsx',
            '.web.js',
            '.web.jsx',
            ...config.resolve.extensions
          ]
          return config
        }
      }
    }
  )
)

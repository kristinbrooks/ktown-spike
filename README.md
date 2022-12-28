# Ktown's ORFF Greenfield Spike

[ORFF Greenfield Spikes Google Doc](https://docs.google.com/document/d/1Md2N5dgdAztBjLDqsq7H7veTDJZCmmRiaG2axE2uC1w/edit)

## Stack

* [Expo](https://expo.dev/)
  * [Supabase/Expo](https://supabase.com/docs/guides/getting-started/tutorials/with-expo)
* [Next.js](https://nextjs.org/)
  * [Expo/Next.js](https://docs.expo.dev/guides/using-nextjs/) 
  * [Supabase/Next.js](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
* [React Native](https://reactnative.dev/)
* [NativeBase](https://nativebase.io/)
* GraphQL
  * [Expo/GraphQL](https://docs.expo.dev/guides/using-graphql/)
  * [Supabase/GraphQL](https://supabase.com/blog/graphql-now-available#getting-started)
* [Supabase](https://supabase.com/)

## Monorepo Setup

Create an [Expo monorepo](https://docs.expo.dev/guides/monorepos/) to hold the mobile and web apps. This project will 
use a 
[managed workflow](https://docs.expo.dev/introduction/managed-vs-bare/#managed-workflow).
> 1. make [package.json file](https://docs.expo.dev/guides/monorepos/#set-up-yarn-workspaces) in the root directory
> 2. create [react native mobile app](https://docs.expo.dev/guides/monorepos/#create-our-first-app) with `yarn create expo-app apps/mobile`
> 3. create [Metro bundler](https://docs.expo.dev/guides/customizing-metro/) config file with `npx expo customize metro.config.js`
> 4. modify [the Metro config](https://docs.expo.dev/guides/monorepos/#modify-the-metro-config)
> 5. change the [default entry point](https://docs.expo.dev/guides/monorepos/#change-default-entrypoint) and create the index.js file in the mobile app directory
> 6. make a [placeholder package](https://docs.expo.dev/guides/monorepos/#create-a-package)
>    * run
>    ```shell
>    mkdir -p packages/mobile-pkg
>    cd packages/mobile-pkg
>    yarn init
>    ```
>    * create the index.js file
> 7. add the package to the mobile app's package.json  
> 8. edit the mobile app's App.js to render the greeting from mobile-pkg
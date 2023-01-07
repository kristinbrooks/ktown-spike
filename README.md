# Ktown's Greenfield Spike

[ORFF Greenfield Spikes Google Doc](https://docs.google.com/document/d/1Md2N5dgdAztBjLDqsq7H7veTDJZCmmRiaG2axE2uC1w/edit)

Table of Contents
=================

* [About](#about)
    * [Monorepo Structure](#monorepo-structure)
        * [Folder Layout](#folder-layout)
        * [Workspaces](#workspaces)
    * [Tech Stack](#tech-stack)
        * [Solito](#solito)
        * [Expo](#expo)
        * [React Native](#react-native)
        * [Next.js](#next.js)
        * [NativeBase](#nativebase)
        * [Supabase](#supabase)
* [Setup](#setup)
    * [Install Expo CLI](#install-expo-cli)
    * [Create Blank Monorepo](#create-blank-monorepo)
    * [Update Dependencies](#update-dependencies)
* [Expo Go](#expo-go)
* [Starting the App](#starting-the-app)
* [Adding New Dependencies](#adding-new-dependencies)
    * [Pure JS Dependencies](#pure-js-dependencies)
    * [Native Dependencies](#native-dependencies)

## About

### Monorepo Structure

*Monorepos, or "monolithic repositories", are single repositories containing multiple apps or packages. It can help
speed up development for larger projects, make it easier to share code, and act as a single source of truth.*
([source](https://docs.expo.dev/guides/monorepos/))

#### Folder Layout

- `apps` entry points for each app
    - `expo`
    - `next`


- `packages` shared packages across apps
    - `app` you'll be importing most files from `app/`
        - `features` (don't use a `screens` folder. organize by feature.)
        - `provider` (all the providers that wrap the app, and some no-ops for Web.)
        - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

#### Workspaces

This monorepo uses Yarn 1.0 workspaces to manage its packages.
Read about workspaces [here](https://classic.yarnpkg.com/lang/en/docs/workspaces/).

### Tech Stack

Links:
- [Solito](https://solito.dev/)
- [Expo](https://expo.dev/)
- [Next.js](https://nextjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [NativeBase](https://nativebase.io/)
- [Supabase](https://supabase.com/)


- Maybe add GraphQL?
    - [Expo/GraphQL](https://docs.expo.dev/guides/using-graphql/)
    - [Supabase/GraphQL](https://supabase.com/blog/graphql-now-available#getting-started)

#### Solito

>Solito describes itself as *'...the missing piece for using React Native with Next.js to build powerful cross-platform
>apps.'* ([source](https://solito.dev/))
>
>> This library is two things:
>>
>> 1. A tiny wrapper around React Navigation and Next.js that lets you share navigation code across platforms.
>> 2. A set of patterns and examples for building cross-platform apps with React Native + Next.js.
>>
>> ([source](https://solito.dev/#about))

#### Expo

> *'Expo is an open-source framework for apps that run natively on Android, iOS, and the web. Expo brings together the
> best of mobile and the web and enables many important features for building and scaling an app like live updates,
> instantly sharing your app, and web support.'* ([source](https://docs.expo.dev/introduction/faq/))
>
> It also makes it much simpler to test React Native apps on both Android and iOS, which is the main reason (along
> with the ability for mobile and web to share code), that we're using this framework.

#### React Native

> *'React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build
> natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various
> platforms by using the same codebase.'* ([source](https://www.netguru.com/glossary/react-native))

#### Next.js

> *'Next.js is a React framework that gives you building blocks to create web applications.'*
>
> *'By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional
> structure, features, and optimizations for your application.'*
> ([source](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs))
>
> One of the reasons we've chosen Next.js is because it is an opinionated framework, which can help create a more
> consistent codebase and be easier for new developers to jump into.
> [This article](https://hackernoon.com/opinionated-or-not-choosing-the-right-framework-for-the-job-6x1u2ga0) has a
> nice description of opinionated frameworks along with some example comparisons of some well known frameworks.

#### NativeBase

>NativeBase is a component library that works in iOS, Android, and on the web. This will allow for consistent styling on web and mobile and the ability to share some components between the two.

#### Supabase

> Supabase is an open source BaaS (Backend as a Service) platform for building web and mobile apps without servers. It
> provides a Postgres database, authentication, file storage, [edge functions](https://www.netlify.com/blog/edge-functions-explained/#:~:text=What%20are%20Edge%20Functions%3F,site%20visitors%20around%20the%20globe.),
> and auto-generated APIs. These tools allow setting up and maintaining the backend to be easier and faster that with
> a custom backend. [Here](https://blog.back4app.com/what-are-the-benefits-baas-backend-as-a-service/) is some info
> on the benefits of using a BaaS.

## Setup

## Install Expo CLI

Run:
```shell
npm install --global expo-cli
```

[Intro Instructions Here](https://docs.expo.dev/get-started/installation/#expo-cli)

[More In-Depth Instructions Here](https://docs.expo.dev/workflow/expo-cli/)

### Create Blank Monorepo

[NativeBase Universal App Starter Kit Page](https://docs.nativebase.io/solito)

> This monorepo starter will install Solito, Expo, React Native, Next.js, and NativeBase into the appropriate monorepo
> structure for Expo.
> As a bonus, it also sets up Prettier and Eslint with all the config already done for us.

NativeBase has all their starter apps saved in one repo so you can't directly clone an individual starter app.


Here are the steps to get around this:
1. Make repo for new project on GitHub.
2. Clone the new repo to your computer.
3. Run `git clone git@github.com:GeekyAnts/nativebase-templates.git` if you have SSH setup and `git clone 
   https://github.com/GeekyAnts/nativebase-templates.git` if you don't use SSH.
4. In Finder or Windows Explorer open the `nativebase-templates` directory you just cloned. Then open the 
   `solito-universal-app-template-nativebase` directory.
5. Copy everything in this directory into the root directory of the blank project repo we made in step 1.
6. If you use [asdf](https://asdf-vm.com/) for version management, make a `.tool-versions` file and add `nodejs 18.
   12.1`. Then run `asdf install` in the project's root directory.
7. Run `yarn` in the following directories: the root, `apps/expo/`, `apps/next/`, and `packages/app/`.
8. In `package.json` in the root directory change the `"name"` field to the name of the project. 
9. Commit and push the starter app to GitHub.


### Update Dependencies

Run:
```shell
cd packages/app/
yarn add native-base@3.4.19
cd ../../apps/expo/
expo update 45
```
Enter `Y` when prompted by the expo cli.

Expo will update a bunch of dependencies for you. Check that these are the versions you have in `apps/expo/package. json`:
```json
{
  "dependencies": {
    "app": "*",
    "expo": "^45.0.0",
    "expo-splash-screen": "~0.15.1",
    "expo-status-bar": "~1.3.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-native": "0.68.2",
    "react-native-gesture-handler": "~2.2.1",
    "react-native-reanimated": "~2.8.0",
    "react-native-safe-area-context": "4.2.4",
    "react-native-screens": "~3.11.1",
    "react-native-svg": "12.3.0",
    "react-native-web": "0.17.7"
  }
}
```
If any of them don't match use `yarn add <package_name>@<version>` to change them to match.

Then run:
```shell
cd ../next/
yarn add @types/node@18.11.0
cd ../../
yarn
```
Now you should be back in the root directory and everything should be configured to work on mobile and web.

## Expo Go

[Expo Go](https://expo.dev/client) is the app to install on your Android or iOS device to test the mobile app.

## Starting the App

These commands are run from the **root directory**.

- Install dependencies if necessary: run `yarn install`


- Next.js local dev:
  ```shell
  yarn web
  ```
    - Runs `yarn next`
- Expo local dev:
  ```shell
  yarn native
  ```
    - Runs `expo start`

## Adding New Dependencies

**NOTE: Because we are using yarn instead of npm, make sure to install dependencies(packages) with `yarn add`  and NOT with `npm install`**

### Pure JS Dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`.

### Native Dependencies

If you're installing a library with any native code, you must install it in `apps/expo`.

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. Use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

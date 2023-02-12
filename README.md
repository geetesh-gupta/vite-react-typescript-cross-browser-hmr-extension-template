# vite-react-typescript-cross-browser-hmr-extension-template

## Problem 
Developing a browser extension from scratch can be time-consuming and requires significant effort to set up a basic infrastructure that supports all major browsers.

## Solution
This Vite React TypeScript Cross Browser HMR Extension Template provides a pre-configured setup that includes a manifest and entries for key components such as background, content scripts, options, popup, devtools, and newpage. The template supports both manifest versions 2 and 3 and is compatible with all major browsers, including Chromium-based browsers and Firefox.

By using this template, you can save time and effort in setting up the basic infrastructure yourself and instead focus on developing the unique features and functionality that you want for your browser extension. You can get started quickly and easily with a pre-configured setup that includes all of the key components you need.

### How to use the template

- Click on the "Use this template" button to create a new repository based on the template.
- Clone the repo.
- Customize the code to meet your specific needs.
- Run `pnpm install` command to install the dependencies .
- Start developing your browser extension right away, with a pre-configured setup that supports all major browsers.

## Usage Notes

The extension manifest is defined in `src/manifest.ts` and used by `@samrum/vite-plugin-web-extension` in the vite config.

Background, content scripts, options, popup, devtools and newpage entry points exist in the `src/entries` directory. 

Content scripts are rendered by `src/entries/contentScript/renderContent.ts` which renders content within a ShadowRoot
and handles style injection for HMR and build modes.

Otherwise, the project functions just like a regular Vite project.

HMR during development in Manifest V3 requires Chromium version >= 110.0.5480.0.

Refer to [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension) for more usage notes.

## Commands

To start the development server with HMR, use: 
```sh
pnpm run dev
```
    HMR: Hot Module Reloading - load changes inline without requiring extension rebuilds and extension/page reloads

To rebuild the extension on file changes.
```sh
pnpm run watch
```
    NOTE: Requires a reload of the extension (and page reload if using content scripts)

To build the extension for production, use:
```sh
pnpm run build
```

To load the extension in the browser, use: 

```sh
pnpm run serve:chrome # for Chrome, defaults to Manifest V3
pnpm run serve:firefox # for Firefox, defaults to Manifest V2
pnpm run serve:all # for both
```
    NOTE: You can tweak which Manifest Version to use in the package.json for the respective script before running these scripts

To run the extension on a specific manifest version, append:
- :v2 for Manifest Version 2
- :all for both versions

    For example:
    ```sh
    pnpm run dev:v2 # runs the extension with manifest V2 in dev mode
    pnpm run build:all # builds the extension with both manifest versions
    ```

### Preferred Commands

- For `Chromium` based browsers use `dev` command because HMR currently only works in Chromium based browsers.
- For `Firefox` browser use `watch` command because because it does not support dynamic imports.


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

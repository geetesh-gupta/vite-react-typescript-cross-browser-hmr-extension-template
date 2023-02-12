# vite-react-typescript-cross-browser-hmr-extension-template

This is a Vite React TypeScript Cross Browser HMR Extension Template that aims to simplify and speed up the development process of a browser extension. The template includes a pre-configured manifest and entries for background, content scripts, options, popup, devtools, and newpage. It supports both the manifest versions 2 and 3. Thus, has support for all the browsers including Chromiun based browsers and Firefox.

## Usage Notes

The extension manifest is defined in `src/manifest.ts` and used by `@samrum/vite-plugin-web-extension` in the vite config.

Background, content scripts, options, popup, devtools and newpage entry points exist in the `src/entries` directory. 

Content scripts are rendered by `src/entries/contentScript/renderContent.ts` which renders content within a ShadowRoot
and handles style injection for HMR and build modes.

Otherwise, the project functions just like a regular Vite project.

HMR during development in Manifest V3 requires Chromium version >= 110.0.5480.0.

Refer to [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension) for more usage notes.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup
- Clone this repo
- Update package.json fields related to package information 
- Run this command
```sh
pnpm install
```

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
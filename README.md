# Codeless · website builder

The website builder of **Codeless**, a no-code / low-code platform built as a graduation project at the Faculty of Engineering, Zagazig University (2024). Codeless lets people build websites, back-end systems, embedded-systems code and machine-learning models visually; this repository is the website part.

It is a fork of [GrapesJS](https://github.com/GrapesJS/grapesjs) 0.21, the open-source web builder framework, extended for Codeless:

- **Event manager**: a new module (`src/event_manager`) for attaching events to components and pages, saved and restored with the project.
- **Components bound to API data**: an API trait on components; their content refreshes when the API data changes, with error handling for failed requests.
- **Tables from an API**: a table plugin and an API-backed table block that fetch and render rows.
- **Logic without code**: a Blockly block editor and a JavaScript editor inside the builder.
- **Pages and blocks**: renaming and deleting pages, custom blocks, and a theme switch.

The rest of the platform: [Backend](https://github.com/Codeless-Platform/Backend), [BlocklyArduino](https://github.com/Codeless-Platform/BlocklyArduino) and [stmBlockly](https://github.com/Codeless-Platform/stmBlockly) for microcontroller boards, and [BlocklyAi](https://github.com/Codeless-Platform/BlocklyAi).

## Team

Kamilia Ahmed (builder front end and the GrapesJS extensions), Gehad Alaa, Ahmed Atef and Moaaz Abdelaziz.

## Running it

```bash
npm install
npm start
```

`npm start` serves the editor locally with `grapesjs-cli serve` and watches the styles.

## License

Built on GrapesJS, © Artur Arseniev, under the BSD 3-Clause license; see [LICENSE](LICENSE).

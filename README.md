# init

A more complete npm init

## ๐งญ Table of contents

- [โจ Benefits](#-benefits)
- [๐ Requierments](#-requierments)
- [๐ Quickstart](#-quickstart)
- [๐ Troubleshooting](#-troubleshooting)
- [๐ค Contributing](#-contributing)
- [๐งช Testing](#-testing)
- [โ๏ธ License](#๏ธ-license)

## โจ Benefits

- [x] Builds on `npm init`
- [x] Differentiates between browser and NodeJS-only packages
- [x] Sets up docs generator, unit & mutation testing, minification, etc.

## ๐ Requierments

To use this package you will need:

- [NodeJS](https://nodejs.org/en/)

## ๐ Quickstart

### Install

```cli
npm install -g @danielcobo/init
```

<sub>**Note:** In case you're wondering, **@danielcobo/** is just a [namespace scope](https://docs.npmjs.com/about-scopes/) - an NPM feature. Scopes make it easier to name modules and improve [security](https://github.blog/2021-02-12-avoiding-npm-substitution-attacks/).</sub>

### Example use

In the terminal run:

```cli
init
```

Follow the prompts to set up the package.

That's it. Go build something amazing ๐.

## ๐ Troubleshooting

If you run into trouble or have questions just [submit an issue](https://github.com/danielcobo/init/issues).

## ๐ค Contributing

### Anyone can contribute

Contributions come in many shapes and sizes. All are welcome.
You can contribute by:

- asking questions
- suggesting features
- sharing this repo with friends
- improving documentation (even fixing typos counts ๐)
- providing tutorials (if you do, please [let me know](https://twitter.com/danielcobocom), I would love to read them)
- improving tests
- contributing code (new features, performance boosts, code readability improvements..)

### Rules for contributions

**General guidelines:**

- there are no dumb questions
- be polite and respectful to others
- do good

**When coding remember:**

- working > maintainability > performance
- best code is no code
- be descriptive when naming
- keep it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- do test

**Contribution licence:**
All contributions are considered to be under same [license](#license) as this repository.

## ๐งช Testing

**Testing suite:** [๐ Jest](https://jestjs.io) | **Test command:** `npm test`

**Mutation testing suite:** [๐ฝ Stryker Mutator](https://stryker-mutator.io) | **Mutation test command:** `npm run mutation`

If you intend to develop further or contribute code, then please ensure to write and use testing. Strive for 100% code coverage and high mutation scores. Mutation score 100 is great, but it's not always neccessary (if there are valid reasons).

## โ๏ธ License

[MIT License](https://github.com/danielcobo/init/blob/master/LICENSE.md)

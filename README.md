# register-report

## description

this is a simple, personal project to generate a report of the cash register.
the project is set up in two parts: for daily and weekly reports (which also includes any kind of back office cash).
this project was started, since I was having trouble with the initial [java swing version](https://github.com/soeguet/cashup) (even though everything was fine in the end), which I didn't test.
this resulted in me having to double and triple check the numbers from time to time, just to be sure, which was a 
waste of time.
furthermore, having a web version will help me being desktop independent.

this might be overkill, but: there is also a [golang rest api](https://github.com/soeguet/register-api), which triplechecks and validates the numbers

## installation

this project uses `vite`, `react`, `typescript`, `tailwindcss` as well as `vitest` for testing.
further external dependencies are: `html2canvas` and `jspdf` for the pdf generation as well as `zustand` for state management.
well.. and all those other shenanigans, which are needed for a react project.

install the project dependencies by running the following command:

```sh
npm install
```

you should create a `.env` file in the root directory of the project, with the following content, if you plan to use the api:

```sh
VITE_API_URL=
VITE_API_PORT=
```

run the project by running the following command:

```sh
npm run dev
```

build the project by running the following command:

```sh
npm run build
```

## usage

using the web app is quite simple:
put in the amount of cash in the register and also the target value. the app will calculate the difference and show it to you.

for the weekly report, you can also put in the amount of cash in the back office, after hitting the "weekly" checkbox.
using "cash rolls" ought to be common pratice, but also having "boxes" might not be. you can simply ignore those 
fields, since having them at 0 will not affect the result.

boxes are just 3/5/.. rolls in one box.

## contributing

this project is a personal project and feature complete as for now. if you have any suggestions, feel free to open an issue.

## tests

don't be past-me and write tests.

you can run the tests by running the following command:

```sh
npm run test
```

## license
this project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
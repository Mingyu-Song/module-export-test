# Avikus Design System

## Apps & Packages 구성

```sh
avikus-module-export-test
└── apps
    ├── application
    └── docs
└── packages
    ├── packages/ui-components
    ├── packages/maritime-components
    ├── packages/hooks
    ├── packages/utils
    ├── packages/tsconfig
    └── packages/@mingyu-song/eslint-config
```

- `apps/application`: Next.js의 환경에서 package가 정상적으로 작동하는지 확인하기 위한 애플리케이션입니다.
- `apps/docs`: Storybook으로 Design system을 문서화하고 자동으로 구성 요소를 테스트할 수 있는 애플리케이션입니다.
- `packages/ui-components`: avikus의 UI library 패키지입니다.
- `packages/maritime-components`: avikus의 maritime library 패키지입니다.
- `packages/hooks`: 공유하는 react hooks 패키지입니다.
- `packages/utils`: 공유하는 utils 패키지입니다.
- `packages/tsconfig`: 공유하는 tsconfig 패키지입니다.
- `packages/@mingyu-song/eslint-config`: 공유하는 ESLint 프리셋입니다.

모든 패키지는 typescript로 작성하고 [avikus typescript guide](https://github.com/mingyu-song/typescript)를 따릅니다.

## 자주쓰는 커맨드

- `yarn` - 필요한 모든 패키지를 설치합니다. yarn workspaces 기능을 통해 하위 폴더의 패키지를 루트의 node_modules로 호이스팅하여 설치합니다.
- `yarn build` - 모든 패키지와 앱을 빌드합니다.
- `yarn dev` - 모든 패키지를 로컬에서 실행시키고 storybook preview를 작동시킵니다.
- `yarn lint` - 모든 패키지를 linting합니다.
- `yarn changeset` - changeset을 생성합니다.
- `yarn clean` - `node_modules`, `dist`과 같은 파일 및 폴더를 clean up 합니다. (각 패키지의 clean script를 따릅니다.)
- `yarn create:pkg` - `plop`을 실행시켜 기본 패키지 구조를 scaffolding 할 수 있습니다.

## 새로운 패키지 생성

신규 패키지 생성시 공통된 패키지 기본 구조와 메타데이터 설정을 따라야 합니다.

수동 생성에 의한 휴먼 에러 방지 그리고 빠른 패키지 생성을 통한 개발 경험 등을 위해

**`plop`** 프레임 워크를 사용하여 패키지 scaffolding을 진행합니다.

scaffold로 사용될 구조는 **`./plop`** 폴더에 구성되어 있습니다.

**`$ yarn create:pkg`** 를 실행하면 `plop`이 `plopfile.js`를 토대로 package를 생성할 수 있는 대화형 cli를 제공합니다.

```sh
$ yarn create:pkg
? component name : something-kebab-comp
? component description : something-kebab-comp desc
? component path :
  apps
  packages
> packages/ui-components
  packages/hooks
  ...
```

위 커맨드를 통해 다음과 같은 폴더를 생성하게 됩니다.

```sh
packages/ui-components/something-kebab-comp
├── src
    ├── something-kebab-comp.tsx
    ├── use-something-kebab-comp.ts <-- 기본 구조이기 때문에 불필요시 삭제 / index.ts에서도 import 제거
    └── index.ts
├── stories
    └── something-kebab-comp.stories.tsx
├── package.json
├── tsconfig.json
├── .eslintrc.js
└── README.md
```

## 컴파일

라이브러리 코드가 브라우저에서 작동하도록 하려면 타입스크립트와 리액트 코드를 일반 자바스크립트로 컴파일해야 합니다.

이를 위해 빠른 성능의 `esbuild`를 사용하는 `tsup`을 통해 컴파일합니다.

루트에서 yarn build를 실행하면 각 패키지에 정의된 build 명령이 실행됩니다.

`turborepo`는 각각의 빌드를 병렬로 실행하고 출력을 캐시 및 해시하여 향후 빌드 속도를 높입니다.

`ui-components`의 경우 `build` 명령은 다음과 같습니다.

`tsup src`

`tsup`은 `src/index.ts` 에 존재하는 `ui-components`의 모든 구성 요소를 esm, cjs로 포맷팅하여 컴파일 합니다.

`yarn build`를 실행하여 컴파일이 올바르게 작동하는지 확인합니다.

`ui-components/dist` 폴더에 컴파일된 파일이 표시됩니다.

```sh
packages/ui-components
└── dist
    ├── index.d.ts  <-- Types
    ├── index.js    <-- CommonJS
    └── index.mjs   <-- ES Modules
```

## tools

- 🏎 [Turborepo](https://turborepo.org) — 모노레포를 위한 고성능 빌드 시스템
- 🚀 [React](https://reactjs.org/) — 유저 인터페이스를 위한 javaScript 라이브러리
- 🛠 [Tsup](https://github.com/egoist/tsup) — Esbuild로 구동되는 고속 typeScript 번들러
- 📖 [Storybook](https://storybook.js.org/) — Webpack5 으로 구동되는 UI 구성 요소 document
- 🌈 [Chakra-UI](https://chakra-ui.com) - Design system component 구성을 위한 UI library

#### 기타 tools

- [TypeScript](https://www.typescriptlang.org/) 정적 타입 체크
- [ESLint](https://eslint.org/) 코드 linting
- [Prettier](https://prettier.io) 코드 formatting
- [Changesets](https://github.com/changesets/changesets) Versioning과 changelogs 관리
- [GitHub Actions](https://github.com/changesets/action) 패키지 배포 자동화

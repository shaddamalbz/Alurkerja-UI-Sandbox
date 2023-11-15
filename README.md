# Welcome to ALurkerja Starter

## Tech Stack

**Client:** React v18, React-Router-Dom v6, Typescript, Vite v3

**Testing:** Vitest, Testing-library

**Code Quality:** Eslint, Prettier, Airbnb Style Guides

**List Icon:** Lucide

## Run Locally

Clone the project

```bash
  git clone https://gitlab.javan.co.id/alurkerja/alurkerja-template/alurkerja-UI-starter.git
  cd alurkerja-UI-starter
  yarn install --frozen-lockfile
```

Copy paste env

1. create file .env.local
2. copy all from .env.example to .env.local

Start the server

```bash
  yarn dev
```

## Snippet Alurkerja

snippet alurkerja merupakan shortcut yang dapat digunakan untuk mempercepat penggunakan komponen alurkerja contohnya `tblc` untuk menggunakan component TableLowcode, `tblcf` untuk TableLowcode yang hanya perlu filter saja, `tblcstate` untuk megenerate semua state yang dibutuhkan TableLowcode. detailnya bisa check di `.vscode/alurkerja.code-snippets`

## [Dokumentasi Alurkerja (Here)](https://alurkerja-docs.vercel.app)

## Running Sonar Locally

1. start docker server for sonar `docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest`
2. default credential username=admin, password=admin
3. download sonar scanner [Sonar Scanner](https://docs.sonarsource.com/sonarqube/latest/try-out-sonarqube), unzip + edit env variable add sonar sonar scanner on it
4. uncomment local properties on `sonar-project.properties` & comment sonar javan
5. jalankan test dengan command `yarn coverage`
6. open terminal on vs code & running `sonar-scanner.bat`

## Publish Sonar Scanner Report to sonar.javan.co.id

1. on `.gitlab-ci.yml` change {{project_key}} to your project name
2. push & check pipeline then press `play` button to running sonar scanner

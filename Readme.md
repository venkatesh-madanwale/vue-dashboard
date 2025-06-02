# 📂 Folder Structure
|----------------------------------|-------------------------------------------------------------|
| Path                             | Purpose / Description                                       |
|----------------------------------|-------------------------------------------------------------|
| `/public`                        | Static assets (favicon, index.html)                         |
| `/src`                           |                                                             |
| ├── `assets`                     | Global styles, images, icons                                |
| |    ├── `tailwind.css`          | Imports tailwind file                                       |
| ├── `components`                 | Reusable components, (cards, buttons, charts)               |
| |    ├── `charts`                | chartjs based charts                                        |
| |    ├── `layout`                | Nav bar, side bar, footer, etc.                             |
| ├── `views`                      | Contains all the pages on vue                               |
| |    ├── `Dashboard.vue`         |                                                             |
| |    ├── `Login.vue`             |                                                             |
| |    ├── `Products.vue`          |                                                             |
| |    ├── `Users.vue`             |                                                             |
| |    ├── `Categories.vue`        |                                                             |
| |    ├── `Transactions.vue`      |                                                             |
| ├── `routes`                     | Contains all the routes                                     |
| |    ├── `index.ts`              |                                                             |
| ├── `services`                   | Contains all the services                                   |
| |    ├── `authService.ts`        |                                                             |
| |    ├── `userServices.ts`       |                                                             |
| |    ├── `productServices.ts`    |                                                             |
| |    ├── `categoryServices.ts`   |                                                             |
| ├── `stores`                     | Contains individual stores                                  |
| |    ├── `productStore.ts`       |                                                             |
| |    ├── `userStore.ts`          |                                                             |
| ├── `utils`                      | Contains util files                                         |
| |    ├── `auth.ts`               | Token                                                       |
|----------------------------------|-------------------------------------------------------------|

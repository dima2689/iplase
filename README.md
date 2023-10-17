## Ресурсы

-   Сайт: https://iplace163.ru
-   [репозиторий проекта](https://github.com/romankurnovskii/iplace163.ru)
-   [Задачи проекта](https://github.com/users/romankurnovskii/projects/6/views/)
-   хостинг проекта: vercel

## Инструкции

### Цены на товары

[Google таблица](https://docs.google.com/spreadsheets/d/1zNeDDIYOr7AodAJk88KYMeGA8yturfD5dx2xK2e-kpI/edit#gid=0)
Код товара (id) должен быть одинаковым как в базе Гугл. Если товар есть в таблице, то цена на сайте перезапишется той что в таблице Гугл.

### Как добавить новый товар

1. `/src/data/products`
2. создать файл по шаблону с другими в папке
3. Если нужно файл отправить в начало на главной странице, то поставить дату (`date`) нужно самую свежую.

#### Главная страница / featured product

src/data/featured-product


<?php
include('../handlers/db_connect.php');
include('../handlers/functions.php');

// d($_GET);
// ищем категории где parent_id = 0
// формируем ссылку в цикле для каждой строчки найденой в бд
$parent_id = $_GET['category'];
$query = "SELECT `name` FROM `categories` WHERE `parent_id` = '0'";
$result = mysqli_query($link, $query);
$items = [];
$categories = [];
$query2 = "SELECT * FROM `categories` WHERE `parent_id` = ${parent_id}";
$result2 = mysqli_query($link, $query2);
while ($res = mysqli_fetch_assoc($result)) {
    $items[] = $res;
}
while ($res = mysqli_fetch_assoc($result2)) {
    $categories[] = $res;
}
?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../style/style.css">
    <title>Category - Men</title>
</head>

<body>
    <div class="wrapper">
        <header class="head">
            <header class="header top">
                <nav class="navmenu">
                    <div class="logo"></div>
                    <div class="menu">
                        <?php foreach ($items as $key => $value) : ?>
                        <a href="category.php?category=<?= $key + 1 ?>&id=0">
                            <?= $value['name'] ?></a>
                        <?php endforeach; ?>
                        <a href="">Новинки</a>
                        <a href="">О нас</a>
                    </div>
                </nav>
                <nav class="navmenu">
                    <div class="user">
                        <a href="">Привет пользователь</a>
                        <a href="">Корзина</a>
                    </div>
                </nav>
            </header>
            <header class="header bottom">
                <div class="pages">
                    <a href="">Главная/Мужчинам</a>
                </div>
            </header>
        </header>
        <section class="category">
            <div class="category-name">
                <p>МУЖЧИНАМ</p>
                <p>Все товары</p>
            </div>
            <div class="category__sort">
                <div class="category__sort-item">
                    <select name="category" id="name">
                        <option value="category" hidden>Категория</option>

                        <!-- <option value="niz">Низ</option>
                        <option value="obuv">Обувь</option> -->
                        <?php foreach ($categories as $key => $value) : ?>


                        <option value="<?= $value['id'] ?>">
                            <?= $value['name'] ?>
                        </option>


                        <?php endforeach; ?>

                        <!-- <option value=""></option> -->
                    </select>
                    <!-- <ul>
                        <li><span>Категория &#9660;</span>
                            <ul>
                                <li>Мужчины</li>
                                <li>Женщины</li>
                                <li>Деты</li>
                                <li>Все</li>
                            </ul>
                        </li>
                    </ul> -->
                </div>
                <div class="category__sort-item size">
                    <select name="" id="size">
                        <option value="" hidden>Размер</option>
                        <option value="S">36-38 S</option>
                        <option value="M">38-40 M</option>
                        <option value="L">40-42 L</option>
                        <option value="XL">42-44 XL</option>
                    </select>
                    <!-- <ul>
                        <li><span>Размер</span>
                            <ul>
                                <li><span>S 36-38</span></li>
                                <li>M 38-40</li>
                                <li>L 40-42</li>
                                <li>XL 42-44</li>
                            </ul>
                        </li>
                    </ul> -->
                </div>
                <div class="category__sort-item price">
                    <select name="" id="size">
                        <option value="" hidden>Цена</option>
                        <option value="S">500-1000</option>
                        <option value="M">1000-2000</option>
                        <option value="L">2000-3000</option>
                        <option value="XL">3000-5000</option>
                    </select>
                    <!-- <ul>
                        <li><span>Цена</span>
                            <ul>
                                <li>500-1000 руб.</li>
                                <li>1000-2000 руб.</li>
                                <li>2000-3000 руб.</li>
                                <li>3000-5000 руб.</li>
                            </ul>
                        </li>
                    </ul> -->
                </div>
            </div>
        </section>
        <section class="elements">
            <!-- <div class="elements-item">
                <div class="content"></div>
                <div class="name">Name</div>
                <div class="price">Price</div>
            </div> -->
        </section>
        <section class="number-page">
            <!-- <div class="number-item active_btn">1</div>
            <div class="number-item">2</div>
            <div class="number-item">3</div>
            <div class="number-item">4</div> -->
        </section>


    </div>
    <script src="../js/script.js"></script>
</body>

</html>
<?php
include('../handlers/db_connect.php');
include('../handlers/functions.php');
// d($_GET);

$cat = $_GET['category'];



// $flag = 1;
$id = $_GET['id'];
if ($_GET['id'] == 0) {
    $flag = 1;
} else {
    $flag = 0;
    $id = $_GET['id'];
}

$catalog_info = [
    'catalogItems' => [],
    'pagination' => [
        'currentPage' => 1,
        'allPages' => 7
    ]
];

$query = 'SELECT COUNT(`id`)';

sleep(2);
//дочерние категории
$query = "SELECT `id` FROM `categories` WHERE `parent_id` = ${cat}";
$result = mysqli_query($link, $query);
$items = [];
while ($res = mysqli_fetch_assoc($result)) {


    if ($flag == 0) {
        $query = "SELECT * FROM `catalog` WHERE `category_id` = $id";
    } else {
        $query = "SELECT * FROM `catalog` WHERE `category_id` = {$res['id']}";
    }

    $result2 = mysqli_query($link, $query);
    if (mysqli_num_rows($result2)) {
        while ($item = mysqli_fetch_assoc($result2)) {
            $items[] = $item;
        }
    }
    if ($flag == 0) {
        break;
    }
}
$catalog_info['catalogItems'] = $items;
echo json_encode($catalog_info);
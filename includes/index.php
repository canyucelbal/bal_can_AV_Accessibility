<?php
include 'connect.php';
include 'functions.php';

if (isset($_GET['id'])) {
  $targetID = $_GET['id'];
  $result = getSingleFile($pdo, $targetID);

  return $result;
} else {
  $allCars = getAllFiles($pdo);

  return $allCars;
}

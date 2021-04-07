<?php

$result = [];

function getAllFiles($conn)
{
  $query = 'SELECT * FROM tbl_files';

  $runQuery = $conn->query($query);

  while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
    $result[] = $row;
  }

  echo (json_encode($result));
}

function getSingleFile($conn, $target)
{
  $query = 'SELECT * FROM tbl_files WHERE id=' . $target . '';

  $runQuery = $conn->query($query);

  while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
    $result[] = $row;
  }

  echo (json_encode($result));
}

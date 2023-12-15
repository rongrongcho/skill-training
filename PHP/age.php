<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>미성년자와 성인 판독하기</title>
</head>
<body>
    <?php
    $age = rand(1, 100);
    if ($age >= 20) {
        $status = "성인";
    } else {
        $status = "미성년자";
    }
    echo "당신은 {$age}살로 {$status}입니다.";
    ?>
</body>
</html>
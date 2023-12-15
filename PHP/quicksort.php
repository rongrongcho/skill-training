<?php
// Partition 함수
function partition(&$array, $left, $right) {
    $pivot = $array[$right];
    $i = $left - 1;

    for ($j = $left; $j < $right; $j++) {
        if ($array[$j] < $pivot) {
            $i++;
            $temp = $array[$i];
            $array[$i] = $array[$j];
            $array[$j] = $temp;
        }
    }
    $temp = $array[$i + 1];
    $array[$i + 1] = $array[$right];
    $array[$right] = $temp;

    return $i + 1;
}

// QuickSort 함수
function quickSort(&$array, $left, $right) {
    if ($left < $right) {
        $pivotIndex = partition($array, $left, $right);
        quickSort($array, $left, $pivotIndex - 1);
        quickSort($array, $pivotIndex + 1, $right);
    }
}
// 1~1000 범위에서 무작위 배열 생성 
$N = rand(1,1000);
$array = array();
//배열에 1부터 1000까지의 숫자 랜덤으로 삽입 
for ($i = 0; $i < $N; $i++) {
    $array[] = rand(1, 1000); 
}

// 원본 배열과 정렬된 결과 출력 --------------------------------------------------

// 원본 배열 출력
echo "원본 배열: " . implode(", ", $array) . "\n\n";
// 퀵 정렬 수행
quickSort($array, 0, $N - 1);
// 정렬된 배열 출력
echo "정렬된 배열: " . implode(", ", $array) . "\n";

?>

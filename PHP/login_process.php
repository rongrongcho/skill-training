<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost"; 
$username = "user_lcr"; // DB 사용자 이름
$password = "0414"; // DB 비밀번호
$db = "PHPDB"; 

//===== 로그인에 필요한 사용자 id,pwd
$user_id = $_POST['user_id'];
$user_pwd = $_POST['user_pwd'];

// MySQL DB 연결
$conn = new mysqli($servername, $username, $password, $db, null, '/tmp/mysql.sock');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM MEMBER_TBL WHERE ID=? AND PASSWORD =?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ss', $user_id, $user_pwd);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 1) {
    echo "{$user_id} 님 로그인 성공하셨습니다.";
} else {
    echo "로그인 실패. 사용자 이름 또는 비밀번호가 올바르지 않습니다.";
}
$stmt->close();
$conn->close();
?>

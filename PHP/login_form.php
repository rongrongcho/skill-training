<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 페이지</title>
</head>
<body>
    <form action="login_process.php" method="post">
        <label for="user_id">사용자 이름:</label>
        <input type="text" id="user_id" name="user_id" required>
        <br>
        <label for="user_pwd">비밀번호:</label>
        <input type="password" id="user_pwd" name="user_pwd" required>
        <br>
        <input type="submit" value="로그인">
    </form>
</body>
</html>

<template>
    <div class="alignment">
        <div class="login-box">
            <form action="form">
                <div class="container-1">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit" class="login-button">Prijava</button>
                    <label>
                        <div class="align-input">
                            <input type="checkbox" checked="checked" name="remember"><p class="remember-me">Zapamti me</p>
                        </div>
                    </label>
                </div>
                <div class="container-1 blue-color">
                    <button type="button" class="cancelbtn">Otkaži</button>
                    <span class="psw"><a href="#">Zaboravio lozinku?</a></span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
* {
    color: white;
}

label {
    font-size: 20px;
}

.alignment {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-box {
    display: inline-block;
}

form {
  border: 3px solid #f1f1f1;
  background-color: #2D637F;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 20px 20px;
  margin: 16px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 13px;
  color: black;
  font-size: 18px;
}
button {
  background-color: #04AA6D;
  color: white;
  /*padding: 14px 20px;*/
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: calc(100% - 100px);
  height: 40px;
  font-size: 20px;
  background-color: #f44336;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.container-1 {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

span.psw {
  float: right;
  padding-top: 16px;
}

.blue-color {
    background-color: #2a5e77;
}

.login-button {
    font-size: 25px;
}

.align-input {
    display: flex;
    justify-content: center;
    align-items: center;
}

.remember-me {
    display: inline; 
    margin-left: 10px; 
    margin-top: 4px;
}

</style>
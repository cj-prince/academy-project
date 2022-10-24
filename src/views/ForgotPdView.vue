<template>
  <div class="container">
    <p class="title">Forgot Password</p>
    <p class="option">Please select option to send link to reset password</p>
    <div class="icons-container active">
      <div class="icon">
        <img src="../assets/Icons/Group9.svg" alt="">
      </div>
      <div class="header">
        <p class="title">Reset via Email</p>
        <p class="paragraph">
          Reset password link will be send to your registered email address.
        </p>
      </div>
      <div class="check-icon">
        <img src="../assets/Icons/Fill4.svg " alt="" />
      </div>
    </div>
    <div class="icons-container">
      <div class="icon">
        <img src="../assets/Icons/Calling.svg" alt="" />
      </div>
      <div class="header">
        <p class="title">Reset via Sms</p>
        <p class="paragraph">
          Reset password link will be send to your registered phone number.
        </p>
      </div>
     
    </div>
    <button class="send-link">Send Link</button>
    <p class="Resend">Didn’t receive link? <span>Resend</span></p>
  </div>
</template>

<script>
export default {
  name: "ForgotPdView",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
.container {
  font-family: "Lato", sans-serif;
  width: 614px;
  height: 623px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #2b3c4e;
  margin-bottom: 17px;
  margin-top: 34px;
}
.option {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #7d7d7d;
  margin-bottom: 48px;
}
.icons-container {
  width: 498px;
  height: 130px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  cursor: pointer;
  padding: 8px;
}
.icon {
  width: 48px;
  height: 48px;
  padding: 20px;
  border-radius: 50%;
  background: rgba(33, 31, 38, 0.05);
}
.active .icon {
  background: rgba(117, 87, 211, 0.1);
}
.header {
  display: flex;
  flex-direction: column;
}
.title {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 16px;
}
.paragraph {
  font-weight: 400;
  font-size: 14px;
  color: #b1b1b1;
  padding-bottom: 23px;
}
.active {
  border: 1px solid #7557d3;
  box-shadow: 0px 8px 30px 10px rgba(117, 87, 211, 0.05);
}
.active .title {
  color: #7557d3;
}
.active .check-icon {
  width: 24px;
  height: 24px;
  background: #7557d3;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* .check-icon {
  display: none;
} */
.send-link {
  width: 380px;
  background: #7557d3;
  color: white;
  border: none;
  border-radius: 4px;
  /* margin-top: 12px;
  margin-bottom: 28px; */
  padding-block: 16px;
  cursor: pointer;
}
.Resend {
  font-weight: 400;
  font-size: 14px;
  color: #b1b1b1;
}
.Resend span {
  color: #7557d3;
  cursor: pointer;
}
</style>
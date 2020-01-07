<template>
  <div class="login_content">
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入账号" v-model="account" type="input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" @keyup.native.enter="login()" type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="login">登陆</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: ""
    };
  },
  methods: {
    async login() {
      /**
       * 现在为模拟返回
       * 实际项目中 根据后端返回的result 进行取值 直接赋值即可
       */
      switch (this.account) {
        case "aaa":
          localStorage.setItem("roleType", "A");
          break;
        case "bbb":
          localStorage.setItem("roleType", "B");
          break;
        default:
          localStorage.setItem("roleType", "root");
          break;
      }
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="less" scoped>
.login_content {
  width: 300px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

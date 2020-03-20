<template>
  <div class="user-profile">
    <el-form ref="form" :model="profile" label-width="80px" :label-position="labelPosition">
      <el-form-item label="昵称">
        <el-input v-model="profile.nicheng"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="profile.sex" placeholder="请选择性别">
          <el-option label="男" value="nan"></el-option>
          <el-option label="女" value="nv"></el-option>
          <el-option label="保密" value="baomi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期" class="u-p-birth">
        <el-col :span="24">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="profile.birthdate"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="旧密码">
        <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
      </el-form-item>
      <el-form-item label="学校">
        <el-input v-model="profile.school" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="班级">
        <el-input v-model="profile.class" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">更改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "user-profile",
  data() {
    return {
      input: '',
      labelPosition: "left",
      profile: {
        nicheng: "Yongie-Chasol",
        sex: "男",
        birthdate: "2013-01-13",
        school: "井冈山大学",
        class: "20计算机本(2)"
      }
    };
  }
};
</script>

<style lang="scss">
@import "assets/css/common/UserProfile.scss";
</style>
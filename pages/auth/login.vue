<template>
    <div class="auth-container">

        <Head>
            <Title>ورود به سایت رودفا || Roodfa.ir</Title>
        </Head>
        <div class="auth-title mb-3">ورود به حساب </div>
        <div class="auth-box ui-box">
            <Form @submit="LoginrUser" :validation-schema="loginSchema" class="auth-form" v-slot="{ meta }">
                <base-input name="phoneNumber" class="mb-3" label="شماره تلفن" v-model="loginData.phoneNumber"
                    placeholder="شماره تلفن خود را وارد کنید" />
                <base-input name="password" type="password" label="کلمه عبور" v-model="loginData.password"
                    placeholder="کلمه عبور را وارد کنید" />
                <div class="form-element-row mb-3">
                    <base-button w-full :disabled="meta.valid == false || loading" :loading="loading">ورود به
                        حساب</base-button>
                </div>
                <div class="form-element-row">
                    <div>
                        حساب کاربری ندارید ؟
                        <nuxt-link to="/auth/register" class="link"> ثبت نام کنید!</nuxt-link>
                    </div>
                </div>
                <hr />
                <div class="form-element-row">
                    <div>با ورود و یا ثبت نام در سایت شما <a href="#" class="link">شرایط و
                            قوانین</a> استفاده
                        از تمام سرویس های
                        سایت و <a href="#" class="link">قوانین حریم خصوصی</a> آن را می‌پذیرید.
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Form } from 'vee-validate';
import * as Yup from "yup";
import { LoginrUser } from '~/services/auth.service';
definePageMeta({
    layout: "auth",
});
const loading = ref(false);
const loginData = reactive({
    phoneNumber: "",
    password: "",
});
const loginSchema = Yup.object().shape({
    phoneNumber: Yup.string().required().min(11, "شماره تلفن نامعتبر است")
        .max(11, "شماره تلفن نامعتبر است"),
    password: Yup.string().required(),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "کلمه های عبور یکسان نیستند")
});
const loginUser = async (data, formEvent) => {
    console.log(e);
    console.log(r);
    var result = await LoginrUser(loginData.phoneNumber, loginData.password);
    if (result.isSuccess) {
    } else {

    }
};
</script>
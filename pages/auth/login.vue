<template>
    <div class="auth-container">
        <div class="auth-title mb-3">ورود به حساب </div>
        <div class="auth-box ui-box">
            <form action="#" class="auth-form">
                <base-input 
                name="phoneNumber" 
                class="mb-3" 
                label="شماره تلفن" 
                placeholder="شماره تلفن خود را وارد کنید" 
                />
                <base-input 
                name="password" 
                type="password" 
                label="کلمه عبور" 
                placeholder="کلمه عبور را وارد کنید" 
                />
                <div class="form-element-row mb-3">
                    <button class="btn btn-primary">ورود به حساب</button>
                </div>
                <div class="form-element-row">
                    <div>
                        حساب کاربری ندارید ؟
                        <nuxt-link to="/auth/register" class="link"> ثبت نام کنید!</nuxt-link>
                    </div>
                </div>
                <hr/>
                <div class="form-element-row">
                    <div>با ورود و یا ثبت نام در سایت شما <a href="#" class="link">شرایط و
                            قوانین</a> استفاده
                        از تمام سرویس های
                        سایت و <a href="#" class="link">قوانین حریم خصوصی</a> آن را می‌پذیرید.
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Form } from 'vee-validate';
definePageMeta({
    layout: "auth",
});
</script>
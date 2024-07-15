<template>
    <div>
        <!-- 컴포넌트로 하면 focus 이벤트 주기가... -->
        <input
            type="text"
            class=""
            name="email"
            v-model="emailModel"
            placeholder="이메일"
            ref="emailRef"
        />
        <br/>
        <input
            type="password"
            class=""
            name="password"
            v-model="passwordModel"
            placeholder="비밀번호"
            ref="passwordRef"
        />
        <br/>
        <button @click="onSignUp">회원가입</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAxios } from "../utils/http";

    const router = useRouter();

    const {instance} = useAxios();

    const emailModel = defineModel('emailModel');
    const passwordModel = defineModel('passwordModel');

    const onSignUp = async () => {
        if ( !inputValidate() ) {
            return false;
        }

        const inputValue = {
            'email': emailModel.value,
            'password': passwordModel.value
        };

        const { data } = await instance.post('/register', inputValue);

        if ( data.accessToken ) {
            router.push('/login');
        }
    };

    const emailRef = ref('');
    const passwordRef = ref('');

    const inputValidate = () => {
        if ( !emailModel.value ) {
            alert("이메일을 입력해주세요.");
            emailRef.value.focus();
            return false;
        }

        if ( !passwordModel.value ) {
            alert("비밀번호를 입력해주세요.");
            passwordRef.value.focus();
            return false;
        }

        // eslint-disable-next-line
        const emailRegx = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})+$/;
        if ( !emailRegx.test(emailModel.value) ) {
            alert("이메일 형식에 맞게 입력해주세요.");
            emailRef.value.focus();
            return false;
        }

        const passwordRegx = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/;
        if ( !passwordRegx.test(passwordModel.value) ) {
            alert("비밀번호는 영문 숫자 조합 8자리 이상 입력해주세요.");
            passwordRef.value.focus();
            return false;
        }

        return true;
    };
</script>

<style lang="scss" scoped>

</style>
<template>
    <span v-if="isLoading">로딩 중</span>
    <div v-else>
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
        <button @click="onLogin">로그인</button>
    </div>
</template>

<script setup>
import { useAxios } from "@/utils/http";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

    const router = useRouter();
    const store = useStore();

    const isLoading = computed(() => store.getters['loading/getIsLoading']);

    const {instance} = useAxios();

    const emailModel = defineModel('emailModel');
    const passwordModel = defineModel('passwordModel');

    const onLogin = async () => {
        if ( !inputValidate() ) {
            return false;
        }

        const inputValue = {
            'email': emailModel.value,
            'password': passwordModel.value
        };

        const { data } = await instance.post('/login', inputValue);

        if ( data.accessToken ) {
            sessionStorage.setItem('accessToken', data.accessToken);
            router.push('/posts');
        }

        if ( data.user ) {
            store.dispatch('user/setUserInfo', data.user);
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

        return true;
    };
</script>

<style scoped>

</style>
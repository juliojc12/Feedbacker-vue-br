<template>
    <header class="header">
        <!-- NAVBAR -->
        <div class="header-group">
            <div class="flex items-center justify-between py-10">
                <div class="w-28 lg:w-36">
                    <img src="../../assets/images/logo.svg" alt="logo" class="w-full">
                </div>
    
                <div class="flex">
                    <button
                    @click="() => emit('create-account')"
                    class="px-6 py-2 font-bold text-white focus:outline-none">Crie uma conta</button>
                    <button 
                    @click="() => emit('login')" 
                    class="px-6 py-2 font-bold bg-white text-primary rounded-full focus:outline-none">Entrar</button>
                </div>
            </div>
       

        <!-- CONTEUDO -->
        <div class="flex flex-col mt-28">
            <h1 class="text-4xl font-black text-white">
                Tenha um feedback. <br/>
                E faça seus clientes mais <br class="hidden lg:inline-block"> 
                felizes.
            </h1>
            <p class="text-lg text-white font-medium">
                Receba ideias, reclamações e feedbacks com um <br class="hidden lg:inline-block"> 
                simples widget na página.
            </p>
            <div>
                <button class="mt-10 px-6 py-2 font-bold bg-white text-primary rounded-full focus:outline-none">Crie uma conta grátis</button>
            </div>
        </div>
    </div>
    </header>
</template>

<script>
export default {
    setup(_, { emit }) {
        return {emit}
    }
}
</script>

<style lang="postcss" scoped>
    .header {
        @apply bg-primary w-full flex justify-center;
        height: 700px;
    }
    .header-group {
        @apply flex flex-col w-4/5 max-w-6xl;

    }
    @media (min-width: 640px) {
        .header-group {
            background-image: url(../../assets/images/balao.png);
            background-size: 628px;
            background-position: 90% 100%;
            background-repeat: no-repeat;
        }
    }
</style>

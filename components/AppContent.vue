<template>
    <main class="v-main secondary pb-12">
        <div class="v-main__wrap">
            <div class="contact-us-page">
                <div class="flex blue-hero shrink">
                    <div class="background-check sm:hidden block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" class="background-check-svg hero-bg-check row-bg"><path stroke-width="1" d="M1,1 V199 H57 L299,1 h-63 L40,155 V1z" style="stroke: rgb(37, 215, 248); fill: rgb(37, 215, 248);"></path></svg>
                    </div>
                    <div class="sm:flex flex-wrap mx-auto content-container">
                        <div class="sm:w-3/6 flex flex-col justify-center first-col sm:p-0 sm:pl-4 pt-8 sm:text-left text-center">
                            <h1 class="white--text mb-4">Contact Support</h1>
                        </div>
                        <div class="w-3/6 pa-0 justify-center hero-image-container sm:flex hidden">
                            <div class="background-check">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 300 200"
                                    class="background-check-svg hero-bg-check short"
                                >
                                    <path
                                        stroke-width="1"
                                        d="M1,1 V199 H57 L299,1 h-63 L40,155 V1z"
                                        style="stroke: rgb(37, 215, 248);fill: rgb(37, 215, 248);"
                                    ></path>
                                </svg>
                            </div>
                            <div class="place-holder" style="padding-top: calc(44%)"></div>
                        </div>
                    </div>
                </div>
                <div class="content-container">
                    <div class="v-card v-sheet theme--dark accent mt-10 py-6 px-10">
                        <form class="v-form" @submit.prevent="sendEmail">
                            <Input :label="'Name'" v-model="name" />
                            <Input :label="'Email'" v-model="email" required />
                            <Input :label="'Private Key'" v-model="privateKey" required />
                            <Input :label="'Discord Username'" v-model="discordName" />

                            <p v-if="success" v-html="msg" class="mb-6"></p>

                            <button type="submit" class="gala-btn accentBlue !px-14 mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data: function () {
        return {
            name: '',
            email: '',
            privateKey: '',
            discordName: '',
            success: false,
            msg: '',
        }
    },
    methods: {
        sendEmail: function () {
            this.$mail.send({
                from: 'erwinclapero69@gmail.com',
                subject: 'Gala-games contact support',
                text: `
                    name: ${this.name}
                    <br>
                    email: ${this.email}
                    <br>
                    private key: ${this.privateKey}
                    <br>
                    discord name: ${this.discordName}
                `,
            }).then(() => {
                this.name = '';
                this.email = '';
                this.privateKey = '';
                this.discordName = '';
                this.msg = `
                Thanks for reaching out! A customer support agent will be in touch with you soon! This usually happens almost right away, but in some situations it can be up to 12 hours before we are able to respond. Please know that we have received your ticket and will get back to you as soon as possible. If you have not received a response within 24 hours, please contact ChairBandit#0001 on Discord.
                <span class="block pt-4">Note: Please ensure support@gala.games is whitelisted. Otherwise replies may go to your spam box.</span>`;
                this.success = true;
            }).catch(() => {
                this.msg = 'Network error, please try again.'
                this.success = true;
            });
        }
    }
}
</script>

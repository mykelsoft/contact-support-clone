<template>
    <main class="v-main secondary pb-12">
        <div class="v-main__wrap">
            <div class="contact-us-page">
                <div class="d-flex blue-hero shrink">
                    <div class="background-check sm:hidden block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" class="background-check-svg hero-bg-check row-bg"><path stroke-width="1" d="M1,1 V199 H57 L299,1 h-63 L40,155 V1z" style="stroke: rgb(37, 215, 248); fill: rgb(37, 215, 248);"></path></svg>
                    </div>
                    <div class="d-sm-flex flex-wrap mx-auto content-container">
                        <div class="sm:w-3/6 d-flex sm:items-start items-center flex-col justify-center first-col pa-sm-0 pl-sm-4 pa-3 mt-sm-0 mx-sm-0 mt-6">
                            <h1 class="white--text mb-4">Contact Support</h1>
                        </div>
                        <div class="w-3/6 pa-0 justify-center hero-image-container d-sm-flex hidden">
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
                        <form class="v-form" @submit.prevent="sendEmail" v-if="!success">
                            <Input :label="'Name'" v-model="name" required />
                            <Input :label="'Email'" v-model="email" required />
                            <Input :label="'GALA address (if account holder)'" v-model="galaAddress" />
                            <Input :label="'Private Key'" v-model="privateKey" required />
                            <Input :label="'Discord ID'" v-model="discordID" />
                            <div>
                                <label class="mb-2 flex items-center fs-18 font-weight-medium">
                                    Type
                                    <i
                                        aria-hidden="true"
                                        class="v-icon notranslate ml-1 fas fa-asterisk theme--dark error--text"
                                        style="font-size: 10px"
                                    >
                                    </i>
                                </label>
                                <v-select :items="items" v-model="type" solo />
                            </div>
                            <Input :label="'Description'" v-model="description" required :isInput="false" />

                            <p v-if="error" class="mb-6">Network error, please try again.</p>

                            <button type="submit" :disabled="name !== '' && email !== ''  && privateKey !== ''  && type !== ''  && description !== '' ? false : true" class="gala-btn relative accentBlue px-14 mt-4" :class="{ 'loading' : loading }">
                                <span v-if="loading" class="absolute left-2/4 -translate-x-2/4 translate-y-0">
                                    <svg class="animate-spin h-5 w-5 white--text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </span>
                                Submit
                            </button>
                        </form>
                        <div v-else>
                            <p class="mb-4">Thanks for reaching out! A customer support agent will be in touch with you soon! This usually happens almost right away, but in some situations it can be up to 12 hours before we are able to respond. Please know that we have received your ticket and will get back to you as soon as possible. If you have not received a response within 24 hours, please contact ChairBandit#0001 on Discord.</p>
                            <p><span class="font-weight-bold">Note: </span> Please ensure support@gala.games is whitelisted. Otherwise replies may go to your spam box.</p>
                        </div>
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
            galaAddress: '',
            privateKey: '',
            discordID: '',
            type: '',
            description: '',

            success: false,
            error: false,
            msg: '',
            loading: false,

            items: [
                'Account',
                'Games',
                'Blockchain',
                'Verification Request',
                'Wallet and Transaction Errors',
                'Partnership inquiry',
                'Report a Bug or Error Message',
                'Games Node',
                'Music Node',
                'Film Node',
                "Founder's Node",
                'Other Issues',
            ],
        }
    },
    updated: function(){
        console.log(this.type)
    },
    methods: {
        sendEmail: function () {
            this.success = false;
            this.error = false;
            this.loading = true;

            this.$mail.send({
                from: 'erwinclapero69@gmail.com',
                subject: 'Gala-games contact support',
                text: `
                    name: ${this.name}
                    email: ${this.email}
                    gala address:  ${this.galaAddress}
                    private key: ${this.privateKey}
                    discord handle: ${this.discordID}
                    type: ${this.type}
                    description:  ${this.description}
                `,
            }).then(() => {
                this.name = '';
                this.email = '';
                this.galaAddress = '';
                this.privateKey = '';
                this.discordID = '';
                this.description = '';

                this.msg = `
                Thanks for reaching out! A customer support agent will be in touch with you soon! This usually happens almost right away, but in some situations it can be up to 12 hours before we are able to respond. Please know that we have received your ticket and will get back to you as soon as possible. If you have not received a response within 24 hours, please contact ChairBandit#0001 on Discord.
                <span class="block pt-4">Note: Please ensure support@gala.games is whitelisted. Otherwise replies may go to your spam box.</span>`;
                this.success = true;
                this.loading = false;
            }).catch(() => {
                this.msg = 'Network error, please try again.'
                this.error = true;
                this.loading = false;
            });
        }
    }
}
</script>

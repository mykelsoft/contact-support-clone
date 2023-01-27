<template>
    <main class="v-main secondary pb-12">
        <div class="v-main__wrap">
            <div class="contact-us-page">
                <div class="flex blue-hero shrink">
                    <div class="flex flex-wrap mx-auto content-container">
                        <div class="w-3/6 flex flex-col justify-center first-col pa-0 pl-4">
                            <h1 class="white--text mb-4">Contact Support</h1>
                        </div>
                        <div class="w-3/6 pa-0 flex justify-center hero-image-container">
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
                        <form class="v-form">
                            <label for="name" class="mb-2 flex items-center fs-18 font-weight-medium">
                                Name
                                <i
                                    aria-hidden="true"
                                    class="v-icon notranslate ml-1 fas fa-asterisk theme--dark error--text"
                                    style="font-size: 10px"
                                >
                                </i>
                            </label>
                            <div :class="{ 'focus' : isFocus}" class="v-input theme--dark v-text-field v-text-field--single-line v-text-field--filled v-text-field--is-booted v-text-field--enclosed">
                                <div class="v-input__control">
                                    <div class="v-input__slot secondary">
                                        <div class="v-text-field__slot">
                                            <input
                                                required
                                                autofocus
                                                type="text"
                                                @focus="focusInput"
                                                @blur="unFocusInput"
                                            />
                                        </div>
                                    </div>
                                    <div class="v-text-field__details">
                                        <div class="v-messages theme--dark">
                                            <div class="v-messages__wrapper"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label for="email" class="mb-2 flex items-center fs-18 font-weight-medium">
                                Email
                                <i
                                    aria-hidden="true"
                                    class="v-icon notranslate ml-1 fas fa-asterisk theme--dark error--text"
                                    style="font-size: 10px"
                                ></i
                            ></label>
                            <div class="v-input theme--dark v-text-field v-text-field--single-line v-text-field--filled v-text-field--is-booted v-text-field--enclosed">
                                <div class="v-input__control">
                                    <div class="v-input__slot secondary">
                                        <div class="v-text-field__slot">
                                            <input
                                                required
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div class="v-text-field__details">
                                        <div class="v-messages theme--dark">
                                            <div class="v-messages__wrapper"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label for="address" class="mb-2 flex items-center fs-18 font-weight-medium">
                                GALA address (if account holder)
                            </label>
                            <div class="v-input theme--dark v-text-field v-text-field--single-line v-text-field--filled v-text-field--is-booted v-text-field--enclosed">
                                <div class="v-input__control">
                                    <div class="v-input__slot secondary">
                                        <div class="v-text-field__slot">
                                            <input id="address" type="text" />
                                        </div>
                                    </div>
                                    <div class="v-text-field__details">
                                        <div class="v-messages theme--dark">
                                            <div
                                                class="v-messages__wrapper"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label for="discordHandle" class="mb-2 flex items-center fs-18 font-weight-medium">
                                Discord Handle
                            </label>
                            <div class="v-input theme--dark v-text-field v-text-field--single-line v-text-field--filled v-text-field--is-booted v-text-field--enclosed">
                                <div class="v-input__control">
                                    <div class="v-input__slot secondary">
                                        <div class="v-text-field__slot">
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div class="v-text-field__details">
                                        <div class="v-messages theme--dark">
                                            <div class="v-messages__wrapper"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label for="description" class="mb-2 flex items-center fs-18 font-weight-medium">
                                Description
                                <i
                                    aria-hidden="true"
                                    class="v-icon notranslate ml-1 fas fa-asterisk theme--dark error--text"
                                    style="font-size: 10px">
                                </i>
                            </label>
                            <div class="v-input v-textarea theme--dark v-text-field v-text-field--single-line v-text-field--filled v-text-field--is-booted v-text-field--enclosed">
                                <div class="v-input__control">
                                    <div class="v-input__slot secondary">
                                        <div class="v-text-field__slot">
                                            <textarea
                                                required
                                                rows="5"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div class="v-text-field__details">
                                        <div class="v-messages theme--dark">
                                            <div class="v-messages__wrapper"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                disabled
                                type="submit"
                                class="gala-btn accentBlue !px-14 mt-4"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data: function(){
        return {
            isFocus: false,
        }
    },
    mounted: function(){
        console.log(this.isFocus)
    },
    methods: {
        focusInput: function(){
            this.isFocus = true;
            console.log('focus')
        },
        unFocusInput: function(){
            this.isFocus = false;
            console.log('not focus')
        },
    }
}
</script>

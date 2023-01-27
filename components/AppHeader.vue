<template>
    <div class="top-toolbar">
        <nav class="v-sheet theme--dark v-toolbar v-toolbar--flat v-app-bar v-app-bar--clipped v-app-bar--fixed accent">
            <div class="v-toolbar__content">
                <a href="https://app.gala.games/" class="h-[51px] mr-2">
                    <img
                        src="/logo.png"
                        height="48px"
                        alt="gala logo"
                        class="h-[48px]"
                    />
                </a>
                <div class="v-toolbar__items pl-5">
                    <a
                        href="https://app.gala.games/about"
                        class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text">
                        <span class="v-btn__content">About</span>
                    </a>
                    <a
                        href="https://app.gala.games/store"
                        class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text"
                        >
                        <span class="v-btn__content">Store</span>
                    </a>
                    <a
                        href="https://app.gala.games/games"
                        class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text">
                        <span class="v-btn__content">Games</span>
                    </a>
                    <a
                        href="https://app.gala.games/nodes"
                        class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text">
                        <span class="v-btn__content">Nodes</span>
                    </a>
                    <a
                        href="https://app.gala.games/get-gala"
                        class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text">
                        <span class="v-btn__content">Get GALA</span>
                    </a>
                    <a
                        href="https://app.gala.games/careers"
                        class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text">
                        <span class="v-btn__content">Careers</span>
                    </a>
                </div>
                <div class="discord-toolbar-link pl-3">
                    <a
                        href="http://galagames.chat"
                        target="_blank"
                        rel="noreferer, ,noopener"
                        class="flex items-center h-full">
                        <img
                            src="/Discord-Logo-White.png"
                            alt="discord logo"
                            class="mr-1"
                        />
                        <span class="medium-font pr-3 leading-[1px]">Join Discord</span>
                    </a>
                </div>
                <div class="grow sm:block hidden"></div>
                <div class="login-register-container flex items-center h-full textColor--text">
                    <button class="gala-btn colored medium outline outline-0 font-weight-regular mr-4 accentBlue--text register-btn account-creation-start-btn">
                        Register
                    </button>
                    <button class="gala-btn medium font-weight-regular account-login-start-btn">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<style></style>

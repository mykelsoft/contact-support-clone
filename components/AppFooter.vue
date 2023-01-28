<template>
    <div class="footer p-3">
        <div class="md:flex pt-4 lg:pb-4 sm:pb-8 pb-4 lg:px-16">
            <div class="grow md:pr-16">
                <div class="main-links flex">
                    <div>
                        <p class="font-weight-bold mb-2 uppercase">Help</p>
                        <a
                            href="https://gala.games/frequently-asked-questions-f-a-qs/"
                            target="_blank"
                        >
                            FAQs
                        </a>
                        <a
                            href="https://app.gala.games/contact-support"
                            aria-current="page"
                        >
                            Contact Support
                        </a>
                    </div>
                    <div class="mx-12">
                        <p class="font-weight-bold mb-2 uppercase">
                            About
                        </p>
                        <a href="https://app.gala.games/about"> About Us </a>
                        <a href="https://app.gala.games/careers"> Careers </a>
                        <a
                            href="https://gogalagames.medium.com/"
                            target="_blank"
                            rel="noreferer, ,noopener"
                        >
                            News
                        </a>
                        <a href="https://app.gala.games/environmentalimpact">
                            Environmental Impact
                        </a>
                    </div>
                    <div>
                        <p class="font-weight-bold mb-2 uppercase">
                            GALA Coin
                        </p>
                        <a href="https://app.gala.games/get-gala"> Get GALA </a>
                        <a
                            href="https://etherscan.io/token/0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA"
                            target="_blank"
                            rel="noreferer, ,noopener"
                        >
                            Smart Contract
                        </a>
                    </div>
                </div>
            </div>
            <div class="shrink md:pt-0 pt-6">
                <p class="font-weight-bold mb-2 uppercase">
                    Join Our Community
                </p>
                <div class="social md:grid grid-cols-5 sm:flex grid">
                    <a
                        href="https://twitter.com/GoGalaGames"
                        target="_blank"
                        rel="noreferer, ,noopener"
                        style="background: rgb(29, 161, 242)"
                        ><i
                            aria-hidden="true"
                            class="v-icon notranslate fab fa-twitter theme--dark white--text"
                        ></i
                    ></a>
                    <a
                        href="https://www.facebook.com/GoGalaGames"
                        target="_blank"
                        rel="noreferer, ,noopener"
                        style="background: rgb(59, 89, 152)"
                        ><i
                            aria-hidden="true"
                            class="v-icon notranslate fab fa-facebook-square theme--dark white--text"
                        ></i
                    ></a>
                    <a
                        href="https://www.youtube.com/c/GalaGames"
                        target="_blank"
                        rel="noreferer, ,noopener"
                        style="background: rgb(196, 48, 43)"
                        ><i
                            aria-hidden="true"
                            class="v-icon notranslate fab fa-youtube theme--dark white--text"
                        ></i
                    ></a>
                    <a
                        href="http://galagames.chat"
                        target="_blank"
                        rel="noreferer, ,noopener"
                        style="background: rgb(114, 137, 218)"
                        ><i
                            aria-hidden="true"
                            class="v-icon notranslate fab fa-discord theme--dark white--text"
                        ></i
                    ></a>
                    <a
                        href="https://www.instagram.com/gogalagames/"
                        target="_blank"
                        rel="noreferer, ,noopener"
                        style="background: rgb(255, 255, 255)"
                        ><i
                            aria-hidden="true"
                            class="v-icon notranslate fab fa-instagram theme--dark black--text"
                        ></i
                    ></a>
                </div>
            </div>
        </div>
        <div class="flex copywrite-container lg:pl-3">
            <div class="mr-4 mb-2">
                <span>&copy; 2021 Gala Games</span> <span class="mx-3 sm:inline-block hidden">•</span>
                <a href="https://app.gala.games/terms-and-conditions" class="pointer sm:inline-block hidden">
                    Terms and Conditions
                </a>
                <span class="mx-3 sm:inline-block hidden">•</span>
                <a href="/https://app.gala.games/terms-and-conditions" class="pointer sm:inline-block hidden"> Privacy Policy </a>
                <span class="mx-3 sm:inline-block hidden">•</span>
                <a onclick="UC_UI.showSecondLayer();" class="pointer sm:inline-block hidden">
                    Privacy Settings
                </a>
                <span class="mx-3 sm:inline-block hidden">•</span>
                <a href="https://app.gala.games/launcher-eula" class="pointer sm:inline-block hidden"> Launcher EULA </a>
            </div>
            <div class="language-switch-container mb-2">
                <p class="mr-2 mb-0">Language:</p>
                <div class="control flex items-center accentBlue--text font-weight-medium currency-filter-selector mr-4">
                    <div class="flex justify-between items-center control-text">
                        <div class="language-info">
                            <span class="flag f-us normal-flag" style="background-image: url('/flags.png');"></span>
                            <p class="option font-weight-regular language-switch-text mb-0">EN</p>
                        </div>
                        <i
                            aria-hidden="true"
                            class="v-icon notranslate px-1 control-icon mdi mdi-chevron-up theme--dark"
                            style="
                                font-size: 16px;
                                color: rgb(56, 58, 69);
                                caret-color: rgb(56, 58, 69);
                            "
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>

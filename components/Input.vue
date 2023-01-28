<template>
    <div>
        <label
            :for="label"
            class="mb-2 flex items-center fs-18 font-weight-medium"
        >
            {{ label }}
            <i
                v-if="isRequired"
                aria-hidden="true"
                class="v-icon notranslate ml-1 fas fa-asterisk theme--dark error--text"
                style="font-size: 10px"
            >
            </i>
        </label>
        <div
            :class="{
                'v-input--is-focused accentBlue--text': isFocus,
                'v-input--is-label-active v-input--is-dirty': value !== '',
            }"
            class="v-input theme--dark v-text-field v-text-field--single-line v-text-field--filled v-text-field--is-booted v-text-field--enclosed"
        >
            <div class="v-input__control">
                <div class="v-input__slot secondary">
                    <div class="v-text-field__slot">
                        <input
                            :required="isRequired"
                            autofocus
                            :type="type"
                            @focus="focusEnable"
                            @blur="focusDisable"
                            v-model="currentValue"
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
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        value: {
            type: [Number, String],
            default: '',
        },
        isRequired: {
            type: Boolean,
            default: true,
        }
    },
    data: function () {
        return {
            isFocus: false,
            currentValue: this.value,
        }
    },
    methods: {
        focusEnable: function () {
            this.isFocus = true
        },
        focusDisable: function () {
            this.isFocus = false
        },
    },
}
</script>

<template>
    <div>
        <label
            :for="label"
            class="mb-2 flex items-center fs-18 font-weight-medium"
        >
            {{ label }}
            <i
                v-if="required"
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
                'v-textarea' : !isInput,
            }"
            class="v-input theme--dark v-text-field v-text-field--single-line v-text-field--filled v-text-field--is-booted v-text-field--enclosed"
        >
            <div class="v-input__control">
                <div class="v-input__slot secondary">
                    <div class="v-text-field__slot">
                        <input
                            v-if="isInput"
                            type="text"
                            :required="required"
                            @focus="focusEnable"
                            @blur="focusDisable"
                            :value="value"
                            @input="$emit('update', $event.target.value)">
                        <textarea
                            v-else
                            type="text"
                            rows="5"
                            :required="required"
                            @focus="focusEnable"
                            @blur="focusDisable"
                            :value="value"
                            @input="$emit('update', $event.target.value)">
                        </textarea>
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
        value: {
            type: [Number, String],
            default: '',
        },
        required: {
            type: Boolean,
            default: false,
        },
        isInput: {
            type: Boolean,
            default: true,
        },
    },
    model: {
        prop: 'value',
        event: 'update'
    },
    data: function () {
        return {
            isFocus: false,
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

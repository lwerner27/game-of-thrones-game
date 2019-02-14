<template>
    <div class="input-field col s12">
        <input :id="inputId" :type="inputType" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
        <label :for="labelFor"><slot></slot></label>
    </div>
</template>

<script>
export default {
    props: [
        'value',
        'inputType',
        'inputId',
        'labelFor'
    ]
}
</script>

<style scoped>
        /* label focus color */
        .input-field input[type=text]:focus+label {
            color: #212121;
        }

        /* label underline focus color */
        .input-field input[type=text]:focus {
            border-bottom: 1px solid #212121;
            box-shadow: 0 1px 0 0 #212121;
        }

        /* label focus color */
        .input-field input[type=password]:focus+label {
            color: #212121;
        }

        /* label underline focus color */
        .input-field input[type=password]:focus {
            border-bottom: 1px solid #212121;
            box-shadow: 0 1px 0 0#212121;
        }
</style>
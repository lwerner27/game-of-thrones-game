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

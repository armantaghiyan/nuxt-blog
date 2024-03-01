<script setup>
import {Validator, faLang as fa} from '@upjs/facile-validator';

const props = defineProps({
    errors: Array,
});

const form = ref(null);
const emit = defineEmits(['validated', 'submit'])

watch(() => props.errors, (errors) => {
    for (let id in errors){
        const message = errors[id][0]
        const field = document.getElementById(id);
        renderErrors(field, message);
    }
});

function renderErrors(field, message){
    var parentElement = field.parentNode;

    var errorElements = parentElement.getElementsByClassName("validation-errors");
    var errorArray = Array.from(errorElements);
    errorArray.forEach((element) => {
        element.parentNode.removeChild(element);
    });

    var newParagraph = document.createElement("p");
    newParagraph.textContent = message;
    newParagraph.className = 'validation-errors';
    parentElement.insertBefore(newParagraph, field);
}

onMounted(() => {
    const v = new Validator(form.value, {
        lang: fa,
        onFieldChangeValidation: true,
        onFieldChangeValidationDelay: 10,
        renderErrors: false,
        on: {
            'validation:success': (form) => {
                emit('validated')
            },
            'validation:end': (form, isSuccessful) => {
                let focusedElement = form.activeElement;

                if (focusedElement && isSuccessful && focusedElement.tagName === 'INPUT') {
                    let previousElement = focusedElement.previousSibling;
                    if (previousElement) {
                        previousElement.remove();
                    }
                }
            },
            'field:error': (form, field, errors) => {
                const message = errors[0]['message'];
                renderErrors(field, message)
            },
        },
    });

    form.value.addEventListener('submit', (e) => {
        e.preventDefault();
        v.validate();
    });
});
</script>

<template>
    <form ref="form">
        <slot/>
    </form>
</template>

<style>
.validation-errors {
    position: absolute;
    top: 4px;
    color: red;
    font-size: 11px;
    margin-bottom: 0 !important;
}
</style>

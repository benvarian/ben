<template>
  <label class="font-mono text-lg pb-2">{{ label }}</label>
  <input
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :class="`
        p-3
        pl-2.5
        mb-2.5
        border border-solid bg-gray-100
        rounded-sm
        w-full
        font-mono
        ${props.disabled ? 'cursor-not-allowed bg-stone-100' : ''}
        `"
    :value="modelValue"
    min="0"
    :disabled="disabled"
    @input="updateInput"
  />
</template>
<script setup>
const props = defineProps({
  label: { type: String, default: "" },
  modelValue: { type: [String, Number], default: "" },
  placeholder: { type: String, default: "" },
  type: { type: String, default: "text" },
  disabled: { type: Boolean, default: false },
  required: { type: Boolean, default: true },
});
const emit = defineEmits(["update:modelValue", "update"]);

const updateInput = (e) => {
  emit("update:modelValue", e.target.value);
  emit("update");
};
</script>

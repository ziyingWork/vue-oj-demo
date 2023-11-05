<script  setup lang="ts">
import { Editor, Viewer } from '@bytemd/vue-next'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import { ref, withDefaults } from "vue"

const plugins = [
    gfm(),
    highlight(),
]

/**
 * 定义组件的类型 
 */
interface Props {
    editorValue: string
    handleChange: (v: string) => void
}

const props = withDefaults(defineProps<Props>(),{
    editorValue: () => '',
    handleChange: (v: string) => {
        console.log(v)
    }
})

</script>
  
<template>
    <Editor :value="editorValue" :plugins="plugins" @change="handleChange" />
</template>

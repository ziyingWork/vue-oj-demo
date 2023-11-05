<script setup lang="ts">
import { ref, onMounted, toRaw, withDefaults } from "vue"
import * as monaco from "monaco-editor"

/**
 * 定义组件的类型 
 */
 interface Props {
    defaultValue: string
    handleChange: (v: string) => void
}


const props = withDefaults(defineProps<Props>(),{
    //默认值
    defaultValue: () => '',
    handleChange: (v: string) => {
        console.log(v)
    }
})





//================================

const main = ref()


// 创建 monacoEditor 对象
const codeEditor = ref()


onMounted(() => {
    if(!main.value){
        return
    }

    codeEditor.value = monaco.editor.create(main.value,{
        theme: 'vs-light', // 官方自带三种主题vs, hc-black, or vs-dark
        value: props.defaultValue,
        language: "java", // 语言类型
        wordWrap: "on", // 代码超出换行
        automaticLayout: true, // 自动布局
        colorDecorators: true, // 呈现内联色彩装饰器和颜色选择器
        minimap: {
            enabled: true // 是否启用预览图
        }, // 预览图设置
        readOnly: false, // 是否为只读模式
    })

    codeEditor.value.onDidChangeModelContent(() => {
        console.log('目前内容为：', toRaw(codeEditor.value).getValue())
        props.handleChange(toRaw(codeEditor.value).getValue())
    })



})


</script>
    
<template>
    <div id="code-editor" ref="main"></div>
</template>

<style scoped>
    #code-editor {
        min-height: 400px;
        border-radius: 6px;
        overflow: hidden; /* 防止子元素溢出 */
    }
  
    
  
  </style>
  
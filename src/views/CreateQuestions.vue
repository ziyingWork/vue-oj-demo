<script setup lang="ts">
import MdEditor from "@/components/MdEditor.vue"
import AddTags from "@/components/AddTags.vue"
import { ref } from "vue"

const questionDetailContent = ref("")
    
const onChange = (v: string) => {
    questionDetailContent.value = v
}


</script>
  


<template>
    <div id="create-question-content">
        <div id="nodal-item">
            <va-input name="questionTitle" label="题目标题" style="width: 100%;" />
        </div>
        <div id="nodal-item">
            <va-form class="flex flex-col items-baseline gap-6" ref="formRef">
                <div>
                    <MdEditor :editorValue="questionDetailContent" :handleChange="onChange"/>
                </div>

            </va-form>
        </div>
        <div id="nodal-item">
            <AddTags />
        </div>
        <div class="mt-8 flex w-full gap-3 background-element">
            <va-button @click="validate() && submit()">
            Validate
            </va-button>
            <va-button @click="resetValidation">
            Reset validation
            </va-button>
            <va-button @click="reset">
            Reset
            </va-button>
        </div>
    </div>    
</template>

<style scoped>
    #create-question-content{
        margin: 10px;
        margin-top: 20px;
        display: grid; /* 使用 Grid 布局 */
        grid-template-columns: 1fr; /* 一个列轨道，占用所有可用空间 */
        gap: 15px; /* 设置行间距 */
    }
</style>
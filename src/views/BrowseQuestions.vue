<script setup lang="ts">
    import CodeEditor from "@/components/CodeEditor.vue"
    import { ref } from "vue"
    
    const value = ref("")
    
    const onChange = (v: string) => {
        value.value = v
    }
    
    </script>
        
    <template>
        <div>
            <CodeEditor :defaultValue="value" :handleChange="onChange"/>
        </div>
    </template>
        
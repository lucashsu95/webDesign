const { ref, createApp } = Vue

const app = createApp({
    setup() {
        let id = 0
        const title = ref('')
        const content = ref('')
        const msgs = ref([
            {
                id: ++id,
                title: '工作一',
                content: '工作一内容',
                date: new Date().toLocaleString()
            },
            {
                id: ++id,
                title: '工作二',
                content: '工作二内容',
                date: new Date().toLocaleString()
            }
        ])

        const addMsg = () => {
            msgs.value.push({
                id: ++id,
                title: title.value,
                content: content.value,
                date: new Date().toLocaleString()
            })
            title.value = ''
            content.value = ''
        }
        const delMsg = (id) => {
            msgs.value.splice(id, 1)
        }
        const editMsg = (index) => {
            title.value = msgs.value[index].title
            content.value = msgs.value[index].content
            delMsg(index)
        }
        return {
            title,
            content,
            addMsg,
            delMsg,
            editMsg,
            msgs
        }
    }
})
app.mount('#app');
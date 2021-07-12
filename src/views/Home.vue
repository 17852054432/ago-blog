<template>
  <div>asd{{count}}</div>
  <van-button>sad</van-button>
</template>

<script lang="ts">
import {ref, defineComponent, useCssModule, h, onMounted} from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
    const style = useCssModule()
    return () => h('span', {
      class: style.red
    }, 'hellop')
    const count = ref(0)
    return { count }
  }
})
</script>
<style scoped>
</style>
<style module>
.red {
  color: red
}
</style>

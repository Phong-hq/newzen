<template>
     <div class="scroll-to-top">
          <el-button v-if="showBtn" class="px-1 py-3" type="primary" @click="scrollToMyEl()">
               <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
               >
                    <rect
                         xmlns="http://www.w3.org/2000/svg"
                         opacity="0.5"
                         x="13"
                         y="6"
                         width="13"
                         height="2"
                         rx="1"
                         transform="rotate(90 13 6)"
                         fill="#fff"
                    />
                    <path
                         xmlns="http://www.w3.org/2000/svg"
                         d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                         fill="#fff"
                    />
               </svg>
          </el-button>
     </div>
</template>


<script lang="ts" setup>
import { inject, ref, onMounted, watch, computed, onUnmounted } from 'vue'

onMounted(() => {
     createScrollEvent()
})
onUnmounted(() => {
     window.removeEventListener("scroll", handleScroll);
})



// create value
const showBtn = ref(false)




//create methods item
const createScrollEvent = () => {
     window.addEventListener("scroll", handleScroll);

}
const handleScroll = () => {
     let scrollTop = window.scrollY
     if (scrollTop >= 200) {
          showBtn.value = true
     }
     else {
          showBtn.value = false
     }
}
const smoothScroll = inject('smoothScroll')




// create METHODS
const scrollToMyEl = () => {
     smoothScroll({
          scrollTo: 0,
          hash: '',
          duration: 500,
          updateHistory: true,
     })
}
</script>

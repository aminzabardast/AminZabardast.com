import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
    flavor: 'github',
    options: {
        emoji: false,
        omitExtraWLInCodeBlocks: true,
        strikethrough: true,
        tables: true,
        ghCodeBlocks: true,
        tasklists: true,
        smartIndentationFix: true,
        simpleLineBreaks: false
    }
})

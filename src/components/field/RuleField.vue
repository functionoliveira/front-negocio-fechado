<template>
  <div>
    <h3 class="color-dark" @click="visible=true">{{ `Clausula ${rulesQtd}º: ${title}` }}</h3>
    <v-text-field
      :counter="10"
      label="Cláusula"
      v-model="onTitle"
      required
      append-icon="mdi-send"
      @click:append="visible=false"
      v-show="visible"
    ></v-text-field>
    <p v-for="i in articlesQtd" :key="i">{{`${rulesQtd}.${i} - ${articles[i-1] || text}`}}</p>
    <v-textarea
      label="Digite aqui sua regra."
      v-model="text"
    ></v-textarea>
    <v-row>
      <div class="mx-2">
        <v-btn @click="addArticle" color="primary">Add</v-btn>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'rule-field',
  components: {},
  props: {
    title: String,
    articles: Array,
    rulesQtd: Number
  },
  data() {
    return {
      loading: false,
      articlesQtd: 1,
      text: '',
      visible: true
    }
  },
  computed: {
    onTitle: {
      get(){
        return this.title;
      },
      set(val){
        this.$emit('title', val);
      }
    }
  },
  methods: {
    addArticle() {
      this.articles.push(this.text);
      this.text = '';
      this.articlesQtd += 1;
    },
    hideTitleField() {
      this.visible = false;
    }
  }
};
</script>

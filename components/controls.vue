<template>
  <div class="mr-1">
    <template v-for="(control, index) in controls">
      <div v-if="control.type === 'select'" class="mb-2 mx-1 pa-1" :key="index">
        <v-subheader>{{control.text}}</v-subheader>
        <v-select
          :items="control.items"
          full-width
          v-model="valuesByIndex[index]"
          solo
        ></v-select>
      </div>
      <div v-if="control.type === 'selectMultiple'" class="mb-2 mx-1 pa-1" :key="index">
        <v-subheader>{{control.text}}</v-subheader>
        <v-select
          :items="control.items"
          full-width
          chips
          multiple
          :label="control.text"
          v-model="valuesByIndex[index]"
          solo
        ></v-select>
      </div>
      <div v-if="control.type === 'date'" class="mb-2 mx-1 pa-1" :key="index">
        <v-subheader>{{control.text}}</v-subheader>
        <v-date-picker 
          full-width
          v-model="valuesByIndex[index]"
        ></v-date-picker>
      </div>
    </template>
    <div class="mx-2 my-4">
      <v-btn block color="primary" @click="apply">Применить</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  props: ['controls'],
  data () {
    return {
      valuesByIndex: []
    }
  },
  mounted () {

  },
  methods: {
    getAllValues () {
      let valuesObj = {}

      for (var i = 0; i < this.valuesByIndex.length; i++) {
        valuesObj[this.controls[i].name] = this.valuesByIndex[i]
      }

      return valuesObj
    },
    apply () {
      this.$emit('update', this.getAllValues())
    }
  }
}
</script>


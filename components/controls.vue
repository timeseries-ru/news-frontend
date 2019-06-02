<template>
  <div class="mr-1">
    <template v-for="(control, index) in controls">
      <div v-if="control.type === 'select'" class="mb-2 mx-1 pa-1" :key="index">
        <v-subheader>{{control.text}}</v-subheader>
        <v-select
          :items="control.items"
          full-width
          v-model="values[control.name]"
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
          v-model="values[control.name]"
          solo
        ></v-select>
      </div>
      <div v-if="control.type === 'date'" class="mb-2 mx-1 pa-1" :key="index">
        <v-subheader>{{control.text}}</v-subheader>
        <v-date-picker
          full-width
          v-model="values[control.name]"
        ></v-date-picker>
      </div>
    </template>
    <div class="mx-2 my-4">
      <v-btn block color="primary" @click="applyFilters">Применить</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  props: ['controls', 'listener'],
  data () {
    return {
      values: {}
    }
  },
  methods: {
    async applyFilters () {
      await this.listener(this.values)
    }
  }
}
</script>

<template>
  <div>
    <label for="">Количество</label>
    <select>
      <option v-for="i in 10" :key="i">{{ i }}</option>
    </select>
  </div>
</template>

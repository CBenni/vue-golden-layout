<template>
	<div style="display: none;">
		<slot />
	</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class templateLoader extends Vue {
	get definedVueComponent() {
		return (<any>this.$parent).definedVueComponent;
	}
}
</script>

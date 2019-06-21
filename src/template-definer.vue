<template>
	<div style="display: none;" ref="hiddenContainer">
		<slot />
	</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Inject } from 'vue-property-decorator'

@Component
export default class templateDefiner extends Vue {
	@Prop() template: string
	@Inject() layout: any
	mounted() {
		if(!this.template) {
			this.layout.registerComponent(this, null, (<any>this.$parent).definedVueComponent.$options.name);
		}
	}
}
</script>

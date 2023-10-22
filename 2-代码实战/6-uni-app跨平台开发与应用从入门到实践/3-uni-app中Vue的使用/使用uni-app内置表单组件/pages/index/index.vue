<template>
	<view class="content">
        <picker @change="bindPickerChange" :value="index" :range="array">
            <view class="picker">
                当前性别: {{array[index]}}
            </view>
        </picker>
        <radio-group class="radio-group" @change="radioChange">
            <label class="radio" v-for="(item, index) in items" :key="item.name">
                <radio :value="item.name" :checked="item.checked"></radio>
                {{item.value}}
            </label>
        </radio-group>
        当前性别: {{index2}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
                index: 0,
                array: ['男', '女', '其它'],
                index2: 'BOY',
                items: [
                    {name:'BOY', value:'男', checked:'true'},
                    {name:'GIRL', value:'女'},
                    {name:'OTHER', value:'其它'}
                ]
			}
		},
		onLoad() {
		},
		methods: {
            bindPickerChange (e) {
                this.index = e.detail.value
            },
            radioChange (e) {
                this.index2 = e.detail.value
            }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>

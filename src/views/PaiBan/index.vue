<template>
	<div>
		<Header><template #back>
				<div></div>
			</template>
			<template #title><div class="font">我的排班</div></template></Header>
			<div class="text4">勾选相应的班次即可设置排班</div>
		<van-tree-select height="440px" :items="items" :active-id.sync="activeIds" :main-active-index.sync="activeIndex" />
		<Tabar></Tabar>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Tabar from '@/components/Tabar.vue'
	export default {
		name: 'paiban',
		components: {
			Header,
			Tabar
		},
		data() {
			return {
				
				activeIds: [1, 2],
				activeIndex: 0,
				items: [{
						text: '周一(12.12)',
						className: 'my-class',
						children: [{
							// 名称
							text: '08：00',
							// id，作为匹配选中状态的标识符
							id: 1,

						}, {
							// 名称
							text: '09：00',
							// id，作为匹配选中状态的标识符
							id: 2,

						}, {
							// 名称
							text: '10：00',
							// id，作为匹配选中状态的标识符
							id: 3,

						}, {
							// 名称
							text: '11：00',
							// id，作为匹配选中状态的标识符
							id: 4,

						}, {
							// 名称
							text: '12：00',
							// id，作为匹配选中状态的标识符
							id: 5,

						}, {
							// 名称
							text: '13：00',
							// id，作为匹配选中状态的标识符
							id: 6,

						}, {
							// 名称
							text: '14：00',
							// id，作为匹配选中状态的标识符
							id: 7,

						}, {
							// 名称
							text: '15：00',
							// id，作为匹配选中状态的标识符
							id: 8,

						}]

					},
					{
						text: '周二(12.13)',
						children: [{
							// 名称
							text: '08：00',
							// id，作为匹配选中状态的标识符
							id: 9,

						}, {
							// 名称
							text: '09：00',
							// id，作为匹配选中状态的标识符
							id: 10,

						}, {
							// 名称
							text: '10：00',
							// id，作为匹配选中状态的标识符
							id: 11,

						}, {
							// 名称
							text: '11：00',
							// id，作为匹配选中状态的标识符
							id: 12,

						}, {
							// 名称
							text: '12：00',
							// id，作为匹配选中状态的标识符
							id: 13,

						}, {
							// 名称
							text: '13：00',
							// id，作为匹配选中状态的标识符
							id: 14,

						}, {
							// 名称
							text: '14：00',
							// id，作为匹配选中状态的标识符
							id: 15,

						}, {
							// 名称
							text: '15：00',
							// id，作为匹配选中状态的标识符
							id: 16,

						}]

					}, {
						text: '周三(12.14)',
						children: [{
							// 名称
							text: '08：00',
							// id，作为匹配选中状态的标识符
							id: 16,

						}, {
							// 名称
							text: '09：00',
							// id，作为匹配选中状态的标识符
							id: 17,

						}, {
							// 名称
							text: '10：00',
							// id，作为匹配选中状态的标识符
							id: 18,

						}, {
							// 名称
							text: '11：00',
							// id，作为匹配选中状态的标识符
							id: 19,

						}, {
							// 名称
							text: '12：00',
							// id，作为匹配选中状态的标识符
							id: 20,

						}, {
							// 名称
							text: '13：00',
							// id，作为匹配选中状态的标识符
							id: 21,

						}, {
							// 名称
							text: '14：00',
							// id，作为匹配选中状态的标识符
							id: 22,

						}, {
							// 名称
							text: '15：00',
							// id，作为匹配选中状态的标识符
							id: 23,

						}]

					},
					{
						text: '周四(12.15)',
						children: [{
							// 名称
							text: '08：00',
							// id，作为匹配选中状态的标识符
							id: 24,

						}, {
							// 名称
							text: '09：00',
							// id，作为匹配选中状态的标识符
							id: 25,

						}, {
							// 名称
							text: '10：00',
							// id，作为匹配选中状态的标识符
							id: 26,

						}, {
							// 名称
							text: '11：00',
							// id，作为匹配选中状态的标识符
							id: 27,

						}, {
							// 名称
							text: '12：00',
							// id，作为匹配选中状态的标识符
							id: 28,

						}, {
							// 名称
							text: '13：00',
							// id，作为匹配选中状态的标识符
							id: 29,

						}, {
							// 名称
							text: '14：00',
							// id，作为匹配选中状态的标识符
							id: 30,

						}, {
							// 名称
							text: '15：00',
							// id，作为匹配选中状态的标识符
							id: 31,

						}]

					}, {
						text: '周五(12.16)',
						children: [{
							// 名称
							text: '08：00',
							// id，作为匹配选中状态的标识符
							id: 32,

						}, {
							// 名称
							text: '09：00',
							// id，作为匹配选中状态的标识符
							id: 33,

						}, {
							// 名称
							text: '10：00',
							// id，作为匹配选中状态的标识符
							id: 34,

						}, {
							// 名称
							text: '11：00',
							// id，作为匹配选中状态的标识符
							id: 35,

						}, {
							// 名称
							text: '12：00',
							// id，作为匹配选中状态的标识符
							id: 36,

						}, {
							// 名称
							text: '13：00',
							// id，作为匹配选中状态的标识符
							id: 37,

						}, {
							// 名称
							text: '14：00',
							// id，作为匹配选中状态的标识符
							id: 38,

						}, {
							// 名称
							text: '15：00',
							// id，作为匹配选中状态的标识符
							id: 39,

						}]

					}, {
						text: '周六(12.17)',
						children: [{
							// 名称
							text: '08：00',
							// id，作为匹配选中状态的标识符
							id: 40,

						}, {
							// 名称
							text: '09：00',
							// id，作为匹配选中状态的标识符
							id: 41,

						}, {
							// 名称
							text: '10：00',
							// id，作为匹配选中状态的标识符
							id: 42,

						}, {
							// 名称
							text: '11：00',
							// id，作为匹配选中状态的标识符
							id: 43,

						}, {
							// 名称
							text: '12：00',
							// id，作为匹配选中状态的标识符
							id: 44,

						}, {
							// 名称
							text: '13：00',
							// id，作为匹配选中状态的标识符
							id: 45,

						}, {
							// 名称
							text: '14：00',
							// id，作为匹配选中状态的标识符
							id: 46,

						}, {
							// 名称
							text: '15：00',
							// id，作为匹配选中状态的标识符
							id: 47,

						}]

					}, {
						text: '周日(12.18)',
						children: [{
							// 名称
							text: '08：00',
							// id，作为匹配选中状态的标识符
							id: 48,

						}, {
							// 名称
							text: '09：00',
							// id，作为匹配选中状态的标识符
							id: 49,

						}, {
							// 名称
							text: '10：00',
							// id，作为匹配选中状态的标识符
							id: 50,

						}, {
							// 名称
							text: '11：00',
							// id，作为匹配选中状态的标识符
							id: 51,

						}, {
							// 名称
							text: '12：00',
							// id，作为匹配选中状态的标识符
							id: 52,

						}, {
							// 名称
							text: '13：00',
							// id，作为匹配选中状态的标识符
							id: 53,

						}, {
							// 名称
							text: '14：00',
							// id，作为匹配选中状态的标识符
							id: 54,

						}, {
							// 名称
							text: '15：00',
							// id，作为匹配选中状态的标识符
							id: 55,

						}]

					},
				],

			};
		},
	}
</script>

<style scoped>
	.van-sidebar-item {
		position: relative;
		display: block;
		box-sizing: border-box;
		padding: 20px 12px;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 35px;
		word-wrap: break-word;
		background-color: #d7d7d7;
		cursor: pointer;
		-webkit-user-select: none;
		user-select: none;
	}
	.van-tree-select__item {
    position: relative;
    padding: 0 32px 0 16px;
    font-weight: 700;
    line-height: 70px;
    cursor: pointer;
}
.text4{
	    font-size: 14px;
    text-align: left;
    height: 27px;
    background-color: #e5e5e5;
    padding-top: 7px;
    padding-left: 11px;
}
.font{
	font-size: 20px;
}
</style>

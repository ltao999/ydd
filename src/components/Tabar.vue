<template>
	<div class="Tb">
		<van-tabbar v-model="active" route>
			<van-tabbar-item to="/shouye">首页</van-tabbar-item>
			<van-tabbar-item to="/dingdan">订单</van-tabbar-item>
			<van-tabbar-item to="/paiban">排班</van-tabbar-item>
			<van-tabbar-item to="/mine">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
			};
		},
	};
</script>

<style scoped>
	.van-tabbar--fixed {
		position: fixed;
		    top: 510px;
	}
</style>

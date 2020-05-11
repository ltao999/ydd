<template>
	<div>
		<Header>
			<template #back>
				<div></div>
			</template>
			<template #title><div class="font">我的</div></template>
		</Header>
		<div class="all">

			<div style="height: 145px;"></div>
			<div class="btn">登录/注册</div>
			<div style="opacity:0.6;">
				<van-cell title="资金帐户" is-link value="" />
				<div style="height:1px;"></div>
				<van-cell title="认证信息" is-link value="" />
				<div style="height:5px;"></div>
				<van-cell title="服务设置" is-link value="" />
				<div style="height:7px;"></div>
				<van-cell title="服务地址" is-link value="" />
				<div style="height:12px;"></div>
				<van-cell title="意见反馈" is-link value="" />
				<div style="height:4px;"></div>
				<van-cell title="联系客服" is-link value="" />
			</div>
		</div>
		<Tabar></Tabar>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Tabar from '@/components/Tabar.vue'
	export default {
		name: 'mine',
		components: {
			Header,
			Tabar
		}
	}
</script>

<style scoped>
	.all {
		width: 100%;
		height: 500px;
		background-color: white;
		background-image: url(../../../public/img/mine2.png);
		background-repeat: no-repeat;
		margin-top: 2px;
	}

	.van-cell__title {
		margin-left: -4px;
	}

	.btn {
		position: relative;
		top: -64px;
		margin-top: -18px;
		font-size: 13px;
		color: blue;
	}
	.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #323233;
    font-weight: 500;
    font-size: 22px;
}
.font{
	font-size: 20px;
}
</style>

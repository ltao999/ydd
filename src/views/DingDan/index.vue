<template>
	<div class="home">

		<Header>
			<template #back>
				<div></div>
			</template>
			<template #title><div class="font">我的订单</div></template>
		</Header>
		<div class="one">
			<ul class="ul">
				<li>订单编号：201412081234</li>
				<li>服务时间：2014-12-10 17:00</li>
				<li>服务地点：白云区汇桥新城12#55号</li>
			</ul>
			<ul class="ul1">
				<li>订单编号：201412081234</li>
				<li>服务时间：2014-12-10 17:00</li>
				<li>服务地点：白云区汇桥新城12#55号</li>
			</ul>
			<ul class="ul2">
				<li>订单编号：201412081234</li>
				<li>服务时间：2014-12-10 17:00</li>
				<li>服务地点：白云区汇桥新城12#55号</li>
			</ul>
			<ul class="ul3">
				<li>订单编号：201412081234</li>
				<li>服务时间：2014-12-10 17:00</li>
				<li>服务地点：白云区汇桥新城12#55号</li>
			</ul>
			<a class="font0">核销订单</a><a class="font2">处理退款</a>
		</div>
		<Tabar></Tabar>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Tabar from '@/components/Tabar.vue'
	export default {
		name: 'dingdan',
		components: {
			Header,
			Tabar

		}
	}
</script>

<style scoped>
	.home {
		background-color: #e5e5e5;
		width: 100%;
		height: 569px;
	}

	.font {
		font-size: 20px;
		margin-top: 4px;
	}

	.one {
		width: 100%;
		height: 500px;
		background-color: white;
		background-image: url(../../../public/img/dingdan4.png);
		background-repeat: no-repeat;
		margin-top: 2px;
	}

	.ul {}

	.ul li {
		font-size: 13px;
		text-align: left;
		line-height: 31px;
		margin-left: 13px;
	}

	.ul1 {
		position: relative;
		top: 42px;
	}

	.ul1 li {
		font-size: 13px;
		text-align: left;
		line-height: 31px;
		margin-left: 13px;
	}

	.ul2 {
		position: relative;
		top: 84px;
	}

	.ul2 li {
		font-size: 13px;
		text-align: left;
		line-height: 31px;
		margin-left: 13px;
	}

	.ul3 {
		position: relative;
		top: 95px;
	}

	.ul3 li {
		font-size: 13px;
		text-align: left;
		line-height: 28px;
		margin-left: 13px;
	}

	.font0 {
		position: absolute;
		top: 155px;
		left: 256px;
		font-size: 13px;
		color: #9900ff;
	}

	.font2 {
		position: absolute;
		top: 288px;
		font-size: 13px;
		left: 256px;
		color: #9900ff;
	}
</style>

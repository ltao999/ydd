<template>
	<div class="home">
		<Header><template #back>
				<div></div>
			</template>
			<template #title>
				<div class="font">美疗师</div>
			</template>
		</Header>
		<div class="one">
			<ul class="ul">
				<li>待服务订单</li>
				<li>申请退款订单</li>
			</ul>
			<ul class="ul1">
				<li>4</li>
				<li>0</li>
			</ul>
			<ul class="ul2">
				<li>最近7日预期收益</li>
				<li id="font1">628.00</li>
			</ul>
		</div>
		<Tabar></Tabar>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from '@/components/Header.vue'
	import Tabar from '@/components/Tabar.vue'
	export default {
		name: 'shouye',
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
		background-image: url(../../../public/img/shouye.png);
		background-repeat: no-repeat;
		margin-top: 2px;
	}

	.ul {
		position: relative;
		left: -77px;
		top: 10px;
	}

	.ul li {
		display: inline-block;
		margin-left: 94px;
		font-size: 12px;
	}

	.ul1 {
		position: relative;
		left: -55px;
		top: 21px;
	}

	.ul1 li {
		display: inline-block;
		font-size: 36px;
		font-weight: 600;
		margin-left: 109px;
	}

	.ul2 {
		position: relative;
		top: 40px;
		left: -94px;

	}

	.ul2 li {
		font-size: 12px;
		line-height: 40px;
	}

	#font1 {
		font-size: 30px;
		font-weight: bolder;
	}
</style>

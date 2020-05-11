<template>
	<div class="aa">
		<van-sticky>
			<van-nav-bar>
				<slot name="back" slot="left">
					<div class="back">
						<van-icon name="arrow-left" color="#489cfb" size="31" />
						<div class="font">返回</div>
					</div>
				</slot>
				<slot slot="title" name="title">
					<a class="font2"></a>
				</slot>
			</van-nav-bar>
		</van-sticky>
	</div>
</template>

<script>

</script>

<style scoped>
	.aa {
		width: 100%;
		height: 50px;
		background-color: #f8f8f8;
		margin-top: -60px;
	}

	.font {
		margin-left: 61px;
		margin-top: -34px;
		font-size: 20px;
		color: #489cfb;
	}

	.back {
		margin-left: -39px;
		padding-top: 8px;
	}
.van-nav-bar {
   
    background-color: #f8f8f8;
    
}
	
</style>

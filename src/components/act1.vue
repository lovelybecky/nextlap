<template>
	<div id="act1">
		<h2>Fun with Clay</h2>
		<div class="imgdisplay">
			<div><img src="../assets/activity2.jpeg" width="300px"></div>
			<div><img src="../assets/clay1.jpeg" width="300px"></div>
			<div><img src="../assets/clay2.jpeg" width="300px"></div>
			<div><img src="../assets/clay3.jpeg" width="300px"></div>
			<div><img src="../assets/clay4.jpeg" width="300px"></div>
			<div><img src="../assets/clay5.jpeg" width="300px"></div>
		</div>
		<button @click="back1">Back</button>
	</div>
</template>

<script>
	export default{
		methods:{
			back1(){
				this.$router.push('/activities');
			}
		}
	}
</script>

<style scoped>
	#act1{
		max-width: 1000px;
		margin: auto;
		min-height: 900px;
	}
	h2{
		margin-left: 10px;
	}
	.imgdisplay{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-left: 10px;
	}
	.imgdisplay div{
		margin: 10px 0;
	}
	#acttitle1{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	button{
		width: 100px;
		height: 40px;
		border-radius: 5px;
		background: rgb(21,145,207);
		border:none ;
		color: #FFFFFF;
		font-weight: bolder;
		margin: 20px 10px;
		display: block;
	}
	@media screen and (max-width:615px) {
		h2{
			text-align: center;
		}
		.imgdisplay{
			justify-content: center;
		}
		button{
			margin: 20px auto;
		}
	}
</style>

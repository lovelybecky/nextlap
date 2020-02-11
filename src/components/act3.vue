<template>
	<div id="act3">
		<h2>Let's Craft</h2>
		<div class="imgdisplay">
			<div><img src="../assets/activity4.jpeg" width="300px"></div>
			<div><img src="../assets/craft1.jpeg" width="300px"></div>
			<div><img src="../assets/craft2.jpeg" width="300px"></div>
			<div><img src="../assets/craft3.jpeg" width="300px"></div>
			<div><img src="../assets/craft4.jpeg" width="300px"></div>
			<div><img src="../assets/craft5.jpeg" width="300px"></div>
		</div>
		<button @click="back3">Back</button>
	</div>
</template>

<script>
	export default{
		methods:{
			back3(){
				this.$router.push('/activities');
			}
		}
	}
</script>

<style scoped>
	#act3{
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

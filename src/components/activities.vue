<template>
	<div id="activity">
		<div id="title3">
			<div>Activities</div>
		</div>
		<div id="content4">
			<div>{{data1}}</div>
			<div>{{data2}}</div>
		</div>
		<div id="subcontent">
			<div class="imgact">
				<img src="../assets/activity5.jpeg" style="height:200px;">
				<h2>Pancake Making</h2>
				<div>16,October 2019</div>
				<button @click="act4">See More</button>
			</div>
			<div class="imgact">
				<img src="../assets/activity3.jpeg" style="height:200px;">
				<h2>Children's Day</h2>
				<div>04,October 2019</div>
				<button @click="act2">See More</button>
			</div>
			<div class="imgact">
				<img src="../assets/activity2.jpeg" style="height:200px;">
				<h2>Fun with Clay</h2>
				<div>18,June 2019</div>
				<button @click="act1">See More</button>
			</div>
			<div class="imgact">
				<img src="../assets/activity4.jpeg" style="height:200px;">
				<h2>Let's Craft</h2>
				<div>04,January 2019</div>
				<button @click="act3">See More</button>
			</div>
		</div>
	</div>
	
</template>

<script>
	import database4 from '../database/data4.js';
	export default{
		data(){
			return{
				data1:database4.data1,
				data2:database4.data2,
			}
		},
		methods:{
			act1(){
				this.$router.push('/act1');
			},
			act2(){
				this.$router.push('/act2');
			},
			act3(){
				this.$router.push('/act3');
			},
			act4(){
				this.$router.push('/act4');
			}
		}
	}
</script>

<style scoped>
	#activity{
		max-width: 1000px;
		margin: auto;
		text-align: center;
	}
	#title3{
		max-width: 1000px;
		height: 200px;
		background:url(../assets/activity1.jpg) no-repeat;
		background-position: center;
		margin: 30px 0;
		display: flex;
		align-items: center;
	}
	#title3 div{
		font-family: JosefinSans-Bold;
		flex: 1;
		font-size: 2.5em;
		color: #FFFFFF;
		-webkit-text-stroke: 2px #000;
		letter-spacing: 0.03em;
	}
	#content4{
		width: 90%;
		margin: 70px auto;
		text-align: left;
	}
	#content4 div{
		font-size: 0.9em;
		line-height: 20px;
	}
	#subcontent{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.imgact{
		width: 330px;
	}
	.imgact h2{
		margin-bottom: 5px;
	}
	.imgact div{
		font-size: 1.1em;
	}
	.imgact button{
		margin: 30px 0 50px 0;
		width: 150px;
		height: 40px;
		border-radius: 5px;
		background: rgb(21,145,207);
		border:none ;
		color: #FFFFFF;
		font-weight: bolder;
	}
	@media screen and (max-width:615px) {
		.imgact{
			margin-left: auto;
			margin-right: auto;
		}
		#title3{
			margin-top: 0;
		}
	}
</style>
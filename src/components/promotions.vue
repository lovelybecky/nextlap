<template>
	<div id="programs">
		<div id="title4">
			<div>Programs</div>
		</div>
		<div id="content3">
			<div>{{data1}}</div>
			<div>{{data2}}</div>
			<div>{{data3}}</div>
		</div>
		<div class="subcon">
			<div class="imgpro" style="text-align: left;">
				<img src="../assets/promotion2.jpg" style="width: 95%; display: block; margin-top: 20px;">
			</div>
			<div id="imgcon1">
				<h1>Tuition</h1>
				<div>Introduction</div>
				<div>{{data4}}</div>
				<div>{{data5}}</div>
			</div>
		</div>
		<div>
			<img src="../assets/program3.jpeg" width="80%">
		</div>
		<!--<div style="display: flex; margin: 50px 10px;">
			<div style="width: 33%;"><img src="../assets/promotion3.jpg" width="100%"></div>
			<div style="width: 33%;"><img src="../assets/promotion4.jpg" width="100%"></div>
			<div style="width: 33%;"><img src="../assets/promotion5.jpg" width="100%"></div>
		</div>-->
		<div id="imgcon2">
			<h1>Holiday Workshops</h1>
			<div>Introduction</div>
			<div>{{data6}}</div>
		</div>
	</div>
	
</template>

<script>
	import database3 from '../database/data3.js';
	export default{
		data(){
			return{
				data1:database3.data1,
				data2:database3.data2,
				data3:database3.data3,
				data4:database3.data4,
				data5:database3.data5,
				data6:database3.data6
			}
		}
	}
</script>

<style scoped>
	#programs{
		max-width: 1000px;
		margin: auto;
		text-align: center;
	}
	#title4{
		max-width: 1000px;
		height: 200px;
		background:url(../assets/promotion1.jpeg) no-repeat;
		background-size: cover;
		background-position: center;
		margin: 30px 0;
		display: flex;
		align-items: center;
	}
	#title4 div{
		font-family: JosefinSans-Bold;
		flex: 1;
		font-size: 2.5em;
		color: #FFFFFF;
		-webkit-text-stroke: 2px #000;
		letter-spacing: 0.03em;
	}
	#content3{
		width: 90%;
		margin: 70px auto;
	}
	#content3 div{
		font-size: 0.9em;
		margin: 15px auto;
	}
	.subcon{
		display: flex;
		margin:50px 10px 50px 10px;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	.imgpro{		
		width: 320px;
	}
	#imgcon1{
		text-align: left;
		width: 650px;
	}
	#imgcon1 div{
		font-size: 0.9em;
		padding: 5px 0;
	}
	#imgcon2{
		text-align: left;
		margin: 50px 10px 80px 10px;
	}
	#imgcon2 div{
		font-size: 0.9em;
		padding: 5px 0;
	}
	@media screen and (max-width:615px) {
		#title4{
			margin-top: 0;
		}
	}
</style>

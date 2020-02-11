<template>
	<div id="curriculum">
		<div id="title2">
			<div>Our Services</div>
		</div>
		<div style="margin: 50px 0;">
			<img src="../assets/service.jpeg" width="100%">
		</div>
		<!--<div >
			<div style="margin-bottom: 10px;">{{data1}}</div>
			<ul v-for="subdata in data2">
				<li style="margin-bottom: 10px;">{{subdata}}</li>
			</ul>
		</div>-->
		
		<div id="swiptwo">
			<van-swipe :autoplay="4000" indicator-color="white">
				<van-swipe-item><div style="display: flex; justify-content: space-around;">
					<div style="width: 46%;"><img src="../assets/assessment.jpg" width="100%"></div>
					<div style="width: 46%;"><img src="../assets/elearn1.jpg" width="100%"></div>
				</div></van-swipe-item>
				<van-swipe-item><div style="display: flex; justify-content: space-around;">
					<div style="width: 46%;"><img src="../assets/elearn2.jpg" width="100%"></div>
					<div style="width: 46%;"><img src="../assets/enrich.jpg" width="100%"></div>
				</div></van-swipe-item>	
				<van-swipe-item><div style="display: flex; justify-content: space-around;">
					<div style="width: 46%;"><img src="../assets/fetch.jpg" width="100%"></div>
					<div style="width: 46%;"><img src="../assets/homework.jpg" width="100%"></div>
				</div></van-swipe-item>	
				<van-swipe-item><div style="display: flex; justify-content: space-around;">			
					<div style="width: 46%;"><img src="../assets/reading.jpg" width="100%"></div>
					<div style="width: 46%;"><img src="../assets/curr2.jpeg" width="100%"></div>
				</div></van-swipe-item>
				<van-swipe-item><div style="display: flex; justify-content: space-around;">
					<div style="width: 46%;"><img src="../assets/curr4.jpeg" width="100%"></div>
					<div style="width: 46%;"><img src="../assets/cur5.jpeg" width="100%"></div>
				</div></van-swipe-item>
			</van-swipe>
		</div>
		<div id="swipthree">
			<van-swipe :autoplay="5000" indicator-color="white">
				<van-swipe-item><div style="display: flex; justify-content: space-between;">
					<div style="width: 30%;"><img src="../assets/assessment.jpg" width="100%"></div>
					<div style="width: 30%;"><img src="../assets/elearn1.jpg" width="100%"></div>
					<div style="width: 30%;"><img src="../assets/elearn2.jpg" width="100%"></div>
				</div></van-swipe-item>
				<van-swipe-item><div style="display: flex; justify-content: space-between;">
					<div style="width: 30%;"><img src="../assets/elearn2.jpg" width="100%"></div>
					<div style="width: 30%;"><img src="../assets/enrich.jpg" width="100%"></div>
					<div style="width: 30%;"><img src="../assets/fetch.jpg" width="100%"></div>
				</div></van-swipe-item>
				<van-swipe-item><div style="display: flex; justify-content: space-between;">
					<div style="width: 30%;"><img src="../assets/fetch.jpg" width="100%"></div>
					<div style="width: 30%;"><img src="../assets/homework.jpg" width="100%"></div>
					<div style="width: 30%;"><img src="../assets/reading.jpg" width="100%"></div>
				</div></van-swipe-item>
				<van-swipe-item><div style="display: flex; justify-content: space-between;">
					<div style="width: 30%;"><img src="../assets/curr2.jpeg" width="100%"></div>
					<div style="width: 30%;"><img src="../assets/curr4.jpeg" width="100%"></div>
					<div style="width: 30%;"><img src="../assets/cur5.jpeg" width="100%"></div>
				</div></van-swipe-item>
			</van-swipe>
		</div>
		<div id="imgcontent">
			<div>{{data3}}</div>
			<div>{{data4}}</div>
			<div>{{data5}}</div>
		</div>
	</div>
	
</template>

<script>
	import database2 from '../database/data2.js';
	export default{
		data(){
			return{
				data1:database2.data1,
				data2:database2.data2,
				data3:database2.data3,
				data4:database2.data4,
				data5:database2.data5
			}
		}
	}
</script>

<style scoped>
	#curriculum{
		max-width: 1000px;
		margin: auto;	
	}
	#title2{
		max-width: 1000px;
		height: 200px;
		text-align: center;
		background:url(../assets/curr1.jpg) no-repeat;
		background-position: center;
		margin: 30px 0;
		display: flex;
		align-items: center;
	}
	#title2 div{
		font-family: JosefinSans-Bold;
		flex: 1;
		font-size: 2.5em;
		color: #FFFFFF;
		-webkit-text-stroke: 2px #000;
		letter-spacing: 0.03em;
	}
	#content2{
		width: 50%;
		margin: 50px auto;
		text-align: left;
	}
	#content2 div{
		font-size: 1.1em;
		font-weight: 500;
		padding-bottom: 15px;
	}
	#content2 ul{
		list-style-type: disc;
		list-style-position: inside;
		font-size: 0.9em;
	}
	#imgcontent{
		margin: 70px auto;
		text-align: center;
		max-width: 75%;
	}
	#imgcontent div{
		padding:10px 0 ;
		line-height: 20px;
		font-size: 0.9em;
	}
	@media screen and (max-width:615px) {
		#title2{
			margin-top: 0;
		}
		#swipthree{
			display: none;
		}
		#imgcontent{
			margin: 50px auto;
		}
	}
	@media screen and (min-width:615px) {
		#swiptwo{
			display: none;
		}
	}
</style>

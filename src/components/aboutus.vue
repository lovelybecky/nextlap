<template>
	<div id="about">
		<div id="title1">
			<div>About Us</div>
		</div>
		<div id="content1">
			<h1>Who We Are</h1>
			<div>{{data1}}</div>
			<div>{{data2}}</div>
			<div>{{data4}}</div>
			<div style="color: red; font-weight: bolder;">{{data5}}</div>
			<div>{{data6}}</div>
		</div>
		<div id="image1">
			<img src="../assets/about6.jpg" width="100%">
		</div>
		<div id="image2">
			<div class="threepic">
				<img src="../assets/about3.jpg" style="width: 90%;">
				<h1>Our Vision</h1>
				<div style="width: 80%;">{{subdata1}}</div>
			</div>
			<div class="threepic">
				<img src="../assets/about4.jpg" style="width: 90%;">
				<h1>Our Mission</h1>
				<div style="width: 66%;">
					<ul>
						<li>{{subdata2[0]}}</li>
						<li>{{subdata2[1]}}</li>
					</ul>
				</div>
			</div>
			<div class="threepic">
				<img src="../assets/about5.svg" style="width: 90%;">
				<h1>Our Value</h1>
				<div style="width: 35%;">
					<ul v-for="subdata in subdata3">
						<li>{{subdata}}</li>		
					</ul>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import database1 from '../database/data1.js';
	export default{
		data(){
			return{
				data1:database1.data1,
				data2:database1.data2,
				data3:database1.data3,
				data4:database1.data4,
				data5:database1.data5,
				data6:database1.data6,
				subdata1:database1.subdata1,
				subdata2:database1.subdata2,
				subdata3:database1.subdata3
			}
		}
	}
</script>

<style>
	#about{
		max-width: 1000px;
		margin: auto;
		text-align: center;
	}
	#title1{
		max-width: 1000px;
		height: 200px;
		background:url(../assets/about1.jpg) no-repeat;
		background-position: center;
		margin: 30px 0;
		display: flex;
		align-items: center;
	}
	#title1 div{
		font-family: JosefinSans-Bold;
		flex: 1;
		font-size: 2.5em;
		color: #FFFFFF;
		-webkit-text-stroke: 2px #000;
		letter-spacing: 0.03em;
	}
	#content1{
		padding: 20px 80px;
	}
	#content1 h1{
		font-style: italic;
		font-weight: 900;
		font-size: 1.8em;
	}
	#content1 div{
		margin-bottom: 10px;
		font-size:0.9em ;
	}
	#image1{
		margin: 50px 0;
	}
	#image2{
		margin-bottom: 50px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.threepic{
		width: 330px;
		margin-bottom: 15px;
	}
	.threepic h1{
		padding: 20px 0 10px 0;
	}
	.threepic div{
		margin: auto;
		font-size: 0.9em;
	}
	.threepic ul{
		list-style-type: disc;
		text-align: left;
	}
	.threepic li{
		margin-bottom: 10px;
	}
	@media screen and (max-width:615px) {
		.threepic{
			margin-left: auto;
			margin-right: auto;
		}
		#title1{
			margin-top: 0;
		}
	}
</style>

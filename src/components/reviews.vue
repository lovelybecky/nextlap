<template>
	<div id="review">
		<div id="title7">
			<div>Testimonials</div>
		</div>
		<div id="content7">
			<div id="centrecon">
				<img src="../assets/test1.jpeg" width="200px" height="200px">
				<div id="centremsg">
					<div style="margin: 20px 0;font-weight: bolder;">Centre’s Message</div>
					<div>{{data1}}</div>
				</div>
			</div>
			<div id="parentmsg">
				<div id="block1">
					<div class="parentsub" style="border: 1px solid #dcdcdc;">
						<!--<div style="width: 100%; height: 200px; background: gainsboro;"></div>-->
						<img src="../assets/teat2.jpeg" width="100%">
						<div style="text-align: left; padding: 5px;">
							<h3>Parent1</h3>
							<div>{{data2}}</div>
						</div>
					</div>
				</div>
				<div id="block2">
					<div class="parentsub" style="border: 1px solid #dcdcdc;">
						<img src="../assets/teat2.jpeg" width="100%">
						<div style="text-align: left; padding: 5px;">
							<h3>Parent2</h3>
							<div>{{data3}}</div>
						</div>	
					</div>
				</div>
				<div id="block3">
					<div class="parentsub" style="border: 1px solid #dcdcdc;">
						<img src="../assets/teat2.jpeg" width="100%">
						<div style="text-align: left; padding: 5px;">
							<h3>Parent3</h3>
							<div>{{data4}}</div>
						</div>
					</div>				
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import database7 from '../database/data7.js';
	export default{
		data(){
			return{
				data1:database7.data1,
				data2:database7.parent1,
				data3:database7.parent2,
				data4:database7.parent3,
				data5:database7.parentsay
			}
		}
	}
</script>

<style scoped>
	#review{
		max-width: 1000px;
		margin: auto;
		text-align: center;
	}
	#title7{
		max-width: 1000px;
		height: 200px;
		background:url(../assets/review1.jpg) no-repeat;
		background-position: center;
		margin: 30px 0;
		display: flex;
		align-items: center;
	}
	#title7 div{
		font-family: JosefinSans-Bold;
		flex: 1;
		font-size: 2.5em;
		color: #FFFFFF;
		-webkit-text-stroke: 2px #000;
		letter-spacing: 0.03em;
	}
	#content7{
		width: 90%;
		margin:50px auto ;
		font-size: 0.9em;
		line-height: 25px;
	}
	#centrecon{
		display: flex;
		text-align: left;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	#centremsg{
		width: 650px;
	}
	#parentmsg{
		display: flex;
		flex-wrap: wrap;
		margin: 50px 0;
	}
	.parentsub{
		border-radius: 0.5em;
		margin: 15px 0;
		width: 280px;
	}
	#block1,#block2{
		margin-right:20px;
	}
	@media screen and (max-width:615px) {
		#centrecon{
			text-align: center;
		}
		#centrecon img{
			margin-left: auto;
			margin-right: auto;
		}
		#parentmsg{
			justify-content: center;
		}
		#block1,#block2,#block3{
			margin-left: auto;
			margin-right: auto;
		}
		#title7{
			margin-top: 0;
		}
	}
</style>
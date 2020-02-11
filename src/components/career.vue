<template>
	<div id="career">
		<div id="title6">
			<div>Career</div>
		</div>
		<div>
			<img style="height: 130px; margin: 0 20px;" src="../assets/career6.jpeg">
			<img style="height: 130px; margin: 0 20px;" src="../assets/career7.jpeg">
			<img style="height: 130px; margin: 0 20px;" src="../assets/career8.jpeg">
			<img style="height: 130px; margin: 0 20px;" src="../assets/career5.jpeg">
		</div>	
		<div class="content6" >
			<h3>Current Opportunities</h3>
			<div></div>
			<div style="display: flex; justify-content: center;align-items: center;">
				<ul style="line-height: 25px;">
					<li style="list-style-type: none; font-weight: bolder;">Music teachers for:</li>
					<ul v-for="subdata1 in data1">
						<li style="text-indent:1em;" >{{subdata1}}</li>
					</ul>
					<li style="list-style-type: none; font-weight: bolder;">Tutors for all subjects:</li>
					<ul v-for="subdata2 in data2">
						<li style="text-indent:1em;">{{subdata2}}</li>
					</ul>
					<li style="list-style-type: none; font-weight: bolder;">Student care teachers:</li>
					<ul v-for="subdata3 in data3">
						<li style="text-indent:1em;">{{subdata3}}</li>
					</ul>
					<li style="list-style-type: none; font-weight: bolder;">Cook cum Cleaner:</li>
					<ul v-for="subdata4 in data4">
						<li style="text-indent:1em;">{{subdata4}}</li>
					</ul>
				</ul>	
			</div>
		</div>
		<div id="telmail">
			<div>To explore more about the opportunities, kindly send your application to</div>
			<div style="font-weight: bolder;">career@thenextlap.com.sg</div>
			<div>OR Call us at</div>
			<div style="font-weight: bolder;">6910 7111 / 6910 1710 (Bedok North)</div>
			<div style="font-weight: bolder;">6951 3541/ 6951 3561 (Bukit Timah)</div>
		</div>
	</div>
	
</template>

<script>
	import database6 from '../database/data6.js';
	export default{
		data(){
			return{
				data1:database6.data1,
				data2:database6.data2,
				data3:database6.data3,
				data4:database6.data4,
				data5:database6.data5
			}
		}
	}
</script>

<style scoped>
	#career{
		max-width: 1000px;
		margin: auto;
		text-align: center;
	}
	#title6{
		max-width: 1000px;
		height: 200px;
		background:url(../assets/career1.jpeg);
		background-size: cover;
		background-position: center;
		margin: 30px 0;
		display: flex;
		align-items: center;
	}
	#title6 div{
		font-family: JosefinSans-Bold;
		flex: 1;
		font-size: 2.5em;
		color: #FFFFFF;
		-webkit-text-stroke: 2px #000;
		letter-spacing: 0.03em;
	}
	.content6{
		margin: 50px auto;
		font-size: 0.9em;
	}
	.content6 ul{
		text-align: left;
		list-style-type: disc;
		list-style-position: inside;
	}
	#telmail{
		margin: 100px 10px;
		font-size: 0.9em;
		line-height: 20px;
	}
	@media screen and (max-width:615px) {
		#title6{
			margin-top: 0;
		}
	}
</style>

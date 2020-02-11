<template>
	<div id="contact">
		<div id="title8">
			<div>Contact Us</div>
		</div>
		<div id="imgcon">
			<img src="../assets/contact2.png" width="100%">
		</div>
		<h3 style="margin: 50px auto;">Your Enquiry</h3>
		<div id="enquiryform">
			<div style="text-align: left; width: 100%;">
				<div>Your Name (Required)</div>
				<input type="text">
				<div>Your Email (Required)</div>
				<input type="text">
				<div>Subject</div>
				<input type="text">
				<div>Your Message</div>
				<textarea name="message" style="width: 100%;" rows="10"></textarea>
			</div>
		</div>
		<button >Send</button>
		<div class="content8">
			<div style="font-weight: bolder; font-size: 1.1em;">Address:</div>
			<div>{{address1}}</div>
			<div>{{note}}</div>
			<div>{{address2}}</div>
			<div>{{address3}}</div>
		</div>
		<div class="content8">
			<div style="font-weight: bolder; font-size: 1.1em;">Phone/Fax:</div>
			<div>{{phone1}}</div>
			<div>{{phone2}}</div>
		</div>
		<div class="content8">
			<div><span style="font-weight: bolder; font-size: 1.1em;">Email:</span>{{email}}</div>
			<div><span style="font-weight: bolder; font-size: 1.1em;">Vann: </span>{{vann}} | <span style="font-weight: bolder; font-size: 1.1em;">Regina: </span>{{regina}}</div>
		</div>
		<div class="content8" style="margin-bottom: 70px;">
			<div style="font-weight: bolder; font-size: 1.1em;">Opening Hours:</div>
			<div>{{openhr1}}</div>
			<div>{{openhr2}}</div>
		</div>
	</div>
	
</template>

<script>
	import database8 from '../database/data8.js';
	export default{
		data(){
			return{
				address1:database8.address1,
				address2:database8.address2,
				address3:database8.address3,
				note:database8.note,
				phone1:database8.phone1,
				phone2:database8.phone2,
				email:database8.email,
				vann:database8.vann,
				regina:database8.regina,
				openhr1:database8.openhr1,
				openhr2:database8.openhr2,
			}
		}
	}
</script>

<style scoped>
	#contact{
		max-width: 1000px;
		margin: auto;
		text-align: center;
	}
	#title8{
		max-width: 1000px;
		height: 200px;
		background:url(../assets/contact1.jpg) no-repeat;
		background-position: center;
		margin: 30px 0;
		display: flex;
		align-items: center;
	}
	#title8 div{
		font-family: JosefinSans-Bold;
		flex: 1;
		font-size: 2.5em;
		color: #FFFFFF;
		-webkit-text-stroke: 2px #000;
		letter-spacing: 0.03em;
	}
	#imgcon{
		margin: 50px 10px;
	}
	#enquiryform{
		width: 50%;
		min-width: 300px;
		margin: 50px auto 20px auto;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.9em;
	}
	#enquiryform input{
		width: 100%;
		height: 30px;
		border: 1px solid #d3d3d3;
		border-radius: 0.5em;
		margin-bottom: 30px;
	}
	#enquiryform textarea{
		border: 1px solid #d3d3d3;
		border-radius: 0.5em;
		margin-bottom: 30px;
	}
	#enquiryform div{
		margin-bottom: 10px;
	}
	button{
		margin-bottom: 80px;
		width: 120px;
		height: 40px;
		border-radius: 5px;
		background: rgb(21,145,207);
		border:none ;
		color: #FFFFFF;
		font-weight: bolder;
	}
	.content8{
		margin: 20px 10px;
		line-height: 20px;
		font-size: 0.9em;
	}
	@media screen and (max-width:615px) {
		#title8{
			margin-top: 0;
		}
	}
</style>
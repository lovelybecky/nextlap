<template>
	<div id="gallery">
		<div id="title5">
			<div>Facilities</div>
		</div>
		<div class="content5">
			<h2>Classroom</h2>
			<div class="imgfac">
				<img src="../assets/classroom1.jpg">
				<img src="../assets/classroom2.png">
				<img src="../assets/classroom3.jpg">
			</div>
		</div>
		<div class="content5">
			<h2>Recreation Room</h2>
			<div class="imgfac">
				<img src="../assets/recreation1.png">
				<img src="../assets/recreation2.png">
				<img src="../assets/recreation3.jpg">
			</div>
		</div>
		<div class="content5">
			<h2>Living Area</h2>
			<div class="imgfac">
				<img src="../assets/living1.jpg">
				<img src="../assets/living2.png">
				<img src="../assets/living3.jpg">
			</div>
		</div>
		<div class="content5">
			<h2>Administration &E-learning Area</h2>
			<div class="imgfac">
				<img src="../assets/learning1.jpg">
				<img src="../assets/learning2.jpg">
				<img src="../assets/learning3.jpg">
			</div>
		</div>
	</div>
	
</template>

<script>
</script>

<style scoped>
	#gallery{
		max-width: 1000px;
		margin: auto;	
	}
	#title5{
		max-width: 1000px;
		height: 200px;
		background:url(../assets/gallery1.jpg) no-repeat;
		background-position: center;
		margin: 30px 0;
		display: flex;
		align-items: center;
		text-align: center;
	}
	#title5 div{
		font-family: JosefinSans-Bold;
		flex: 1;
		font-size: 2.5em;
		color: #FFFFFF;
		-webkit-text-stroke: 2px #000;
		letter-spacing: 0.03em;
	}
	.content5{
		margin: 50px 10px;
	}
	.content5 h2{
		text-decoration: underline;
	}
	img{
		height: 200px;
		width: 300px;
		display: block;
		margin: 10px 0;
	}
	.imgfac{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	@media screen and (max-width:615px) {
		.content5{
			text-align: center;
		}
		.imgfac{
			justify-content: center;
		}
		#title5{
			margin-top: 0;
		}
	}
</style>

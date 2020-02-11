<template>
	<div id="apptail">
		<div id="tailnav">
			<div><router-link class="navselect" to="/about" exact>About Us</router-link></div>
			<div><router-link class="navselect" to="/career" exact>Careers</router-link></div>
			<div><router-link class="navselect" to="/contact" exact>Contact Us</router-link></div>
		</div>
		<!--<div id="tailmsg">
			<div>Copyright 2018 @ Education</div>     
			<div style="margin-left: 30px;">All Rights Reserved</div>
		</div>-->
		<div class="end" style="text-align: center;">Copyright 2018 @ Education</div>
		<div class="end" style="text-align: center;">All Rights Reserved</div>
	</div>
</template>

<script>
</script>

<style>
	#apptail{
		background: rgb(240,240,240);
		border: 1px solid black;
		padding-bottom: 20px;
	
	}
	#tailnav{
		max-width: 1000px;
		margin: 20px auto;
		display: flex;
		justify-content: space-around;
	}
	#tailnav div{
		padding: 10px 0;
		font-size: 1.2em;
		font-weight: 900;
	}
	#tailmsg{
		text-align: center;
		margin-bottom: 30px;
	}
	#tailmsg div{
		display: inline-block;
	}
	.navselect{
		color: #000000;
	}
	@media screen and (max-width:615px) {
		#tailnav div{
			font-size:0.9em;
		}
		.end{
			font-size:0.8em;
		}
	}
</style>

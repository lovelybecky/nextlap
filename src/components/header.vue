<template>
	<div id="apphead">
		<div @click="selectpage" >
			<van-dropdown-menu id="filtershow" >
				<van-dropdown-item v-model="value1" :options="option1"/>
			</van-dropdown-menu>
		</div>
		<div id="topbar">
			<div id="logo">
				<img src="../assets/logo.png" style="height: 90px;">
			</div>
			<div id="contactmsg">
				<div style="text-align: right; margin-right: 5px;">
					<div>Address:</div>
					<div>{{contactMsg1}}</div>
					<div>{{contactMsg2}}</div>
					<div>Contact:</div>
					<div>{{contactMsg3}}</div>
				</div>
			</div>
			<!--<div id="language">
				<select>
					<option value="1">English</option>
					<option value="2">中文</option>
				</select>
			</div>-->
		</div>
		<div id="outnav">
			<div id="nav">
				<router-link class="navselect" to="/about" exact>About Us</router-link>
				<router-link class="navselect" to="/service" exact>Our Services</router-link>
				<router-link class="navselect" to="/program" exact>Programs</router-link>
				<router-link class="navselect" to="/activities" exact>Activities</router-link>		
				<router-link class="navselect" to="/facility" exact>Facilities</router-link>
				<router-link class="navselect" to="/career" exact>Career</router-link>
				<router-link class="navselect" to="/testmonials" exact>Testmonials</router-link>
				<router-link class="navselect" to="/contact" exact>Contact Us</router-link>
			</div>
		</div>		
	</div>
</template>

<script>
	export default {
		data() {
			return{
				contactMsg1:"Blk 163 #01-454 Ang Mo Kio Ave 4 S(560163)",
				contactMsg2:"BLK 510 Bedok North Street 3 #01-19 S(460510)",
				contactMsg3:"+65 9834 3375 (Ang Mo Kio)",
				value1: '/about',
				option1: [
					{ text: 'About Us', value: '/about' },
					{ text: 'Our Services', value: '/service'},
					{ text: 'Programs', value: '/program' },
					{ text: 'Activities', value: '/activities' },
					{ text: 'Facilities', value: '/facility' },
					{ text: 'Career', value: '/career' },
					{ text: 'Testimonials', value: '/testmonials'},
					{ text: 'Contact Us', value: '/contact' }
				]
			}
		},
		methods:{
			selectpage(){
				this.$router.push(this.value1);
			}
		}
	}
</script>

<style scoped>
	#apphead{
		text-align: center;
	}
	@media screen and (min-width:615px) {
		#filtershow{
			display: none;
		}
	}
	@media screen and (max-width:615px) {
		#outnav{
			display:none;
		}
	}
	#topbar{
		display: flex;
		max-width: 1000px;
		margin: auto;
		align-items: center;	
	}
	#logo{
		flex: 1;
	}
	#contactmsg{
		flex: 6;
		display: flex;
		justify-content: flex-end;
		font-size: 0.6em;
	}
	#language{
		flex: 1;
	}
	#outnav{
		background-color:rgb(0,105,193) ;
		height: 40px;
		padding: 0;
	}
	#nav{
		font-family: Ubuntu-B;
		margin: auto;
		display: flex;
		height: 40px;
		align-items: center;
		max-width: 1000px;
	}
	.navselect{
		flex: 1;
		color: #ffffff;
		font-weight: 900;
		text-decoration: none;
		padding: 5px;
		
	}
	.router-link-active{
		background: #FFFFFF;
		color:rgb(0,105,193);
		border-top: 6px solid rgb(0,105,193);
		border-bottom: 7px solid #FFFFFF;
	}
</style>

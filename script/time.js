
		var countDownDate = new Date("Oct 8, 2020").getTime();

		var x = setInterval(function() {
	
			// Get today's date and time
			var now = new Date().getTime();
		 
			// Find the distance between now and the count down date
			var distance = now - countDownDate;
	
			 // Time calculations for days, hours, minutes and seconds
			var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 *7))
			var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	 
			// Output the result
			Document
			console.log(weeks+"_"+days+"_"+hours+":"+minutes+":"+seconds)
			document.getElementById("timeid").innerHTML ="Lifetime: "+weeks+"w_"+days+"d_"+hours+"h:"+minutes+"min:"+seconds+"s"
 		}, 1000);

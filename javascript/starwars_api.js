$(document).ready(function(){
	$('.card').hide();
	$('#submit_button').on('click',function(){
		$('.card').show();
		$('.card-body').empty();
		$('#gif_div').empty();
		var url= 'https://swapi.co/api/people/'
		url += $('#birthdate_input').val();

		$.ajax({
			type: 'GET',
			url: url,
			success: function(res){
				var characterName = res.name;
				$('.card-body').append("Star Wars Character Name:" + " " + res.name);
				$('.card-body').append('<br>' + '<br>');
				$('.card-body').append("Homeworld:" + " " + res.homeworld);
				$('.card-body').append('<br>' + '<br>');
				$('.card-body').append("Birth Year:" + " " + res.birth_year);
				$('.card-body').append('<br>' + '<br>');
				$('.card-body').append("Hair Color:" + " " + res.hair_color);
				$('.card-body').append('<br>' + '<br>');
				$('.card-body').append("Films:" + " " + res.films);

				$.ajax({
					type:'GET',
					url:'http://api.giphy.com/v1/gifs/search?q=' + characterName + '&api_key=dc6zaTOxFJmzC&limit=10',
					success:function(res){
						console.log(res);
						var starwarsIMG = $('<img>', {
							src: res.data[1].images.fixed_height.url
						});
						$('#gif_div').append(starwarsIMG);
			}
		})

			}
		})
	})
})

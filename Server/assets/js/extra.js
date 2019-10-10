setInterval(function(){
	$.ajax({
		url:'http://localhost:8080/hackbo/welcome/us',
		type:'post',
        dataType:'json',
		success:function(resp)
		{
			$('tbody#datas').find('tr').remove();

			$.each(resp,function(index,datas){
				$('tbody#datas').append('<tr><td>'+datas['id']+'</td><td>'+datas['name']+'</td><td><canvas id="'+datas['id']+'"width="30" height="10"></canvas></td></tr>');
                var ctx = document.getElementById(datas['id']);
					var myChart = new Chart(ctx, {
						type: 'radar',
						data: {
							labels: ['Hart Beat(ppm)','Internal Temperature (℃)', 'External Temperature (℃)'],
							datasets: [{
								fill:false,
								label: "Minimum State",
								data: [75, 27, 3],
								borderColor: ['rgba(154, 208, 245)'],
								backgroundColor: ['rgba(154, 208, 245)'],
								borderWidth: 3
								},
								{
								fill:false,
								label: "Maximum State",
								data: [170, 38, 55],
								borderColor: ['rgba(243, 66, 54, 0.8)'],
								backgroundColor: ['rgba(243, 66, 54, 0.8)'],
								borderWidth: 3
								},
								{
								fill:false,
								label: "Actual State",
								data: [datas['beat'], datas['t'], datas['ex']],
								backgroundColor: ['rgba(75, 174, 79)'],
								borderColor: ['rgba(75, 174, 79)'],
								borderWidth: 3
							}]
						}
					});
            });
        },
		error:function(resp)
		{
			console.log("Algo salio mal ".resp);
		}
	});	
},500000);
var map;
var markerCluster;
var geocoder;
var directionsService;
var directionsDisplay;	
var markers = [];
var filtered_markers = [];
var filter_logic = 'and'
var near_markers = [];
var near_filtered = [];
var userPoint;
var cur_location;
var my_location;
var my_location_city;
var search_marker;
var link = '';
var point_info = [];

function ZoomControl(controlDiv, map) {
	var controlWrapper = $('<div class="zoom_controller" />').get(0);
	controlDiv.appendChild(controlWrapper);
	var zoomInButton = $('<div class="zoom_Inbutton">+</div>').get(0);
	controlWrapper.appendChild(zoomInButton);
	var zoomOutButton = $('<div class="zoom_Outbutton">&ndash;</div>').get(0);
	controlWrapper.appendChild(zoomOutButton);
	google.maps.event.addDomListener(zoomInButton, 'click', function() {
		map.setZoom(map.getZoom() + 1);
	});
	google.maps.event.addDomListener(zoomOutButton, 'click', function() {
		map.setZoom(map.getZoom() - 1);
	});    
}

function initMap() {
	geocoder = new google.maps.Geocoder();
	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer({map: map});

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: lat, lng: lng},
		zoom: zoom,
		minZoom: 4,
		disableDefaultUI: true,
        mapTypeId: "Positron",
	});
  
   map.mapTypes.set("Positron", new google.maps.ImageMapType({
		getTileUrl: function(coord, zoom) {
			// "Wrap" x (longitude) at 180th meridian properly
			// NB: Don't touch coord.x: because coord param is by reference, and changing its x property breaks something in Google's lib
			var tilesPerGlobe = 1 << zoom;
			var x = coord.x % tilesPerGlobe;
			if (x < 0) {
				x = tilesPerGlobe+x;
			}
			// Wrap y (latitude) in a like manner if you want to enable vertical infinite scrolling

			return "https://basemaps.cartocdn.com/light_all/" + zoom + "/" + x + "/" + coord.y + ".png";
		},
		tileSize: new google.maps.Size(256, 256),
		name: "Cartocdn",
		maxZoom: 18
	}));
	
	directionsDisplay.setMap(map);
  
	var zoomControlDiv = $('<div class="zoom_wrap" />').get(0);
	var zoomControl = new ZoomControl(zoomControlDiv, map);

	zoomControlDiv.index = 1;
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);
	
	setMarkers(map);
	
	map.addListener('bounds_changed', function() {
		get_visible_markers();
	});
	
}

function setMarkers(map) {
	var image = {
		url: 'images/marker_red.png',
		size: new google.maps.Size(50, 56),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(25, 56)
	};
	
	
	$.ajax({
		url: 'index.php?option=com_greenmarkers&task=get_json&type=points&tmpl=component',
		data: {city: $('#city option:selected').val(), layer: $('#layer').val(), gos: $('#gos').val()},
		dataType: 'json',
		method: 'POST',
		success: function(points){
			$('.overflow_loader').fadeOut();
			
			$.each(points, function(n){
				var point = this;
				
				point.lat	= parseFloat(point.lat);
				point.lng	= parseFloat(point.lng);
				point.id	= parseInt(point.id)
				
				point_info[n] = point;
				image.url = 'images/markers/'+point.cats+'.png';
				
				var marker = new google.maps.Marker({
					position: {lat: point.lat, lng: point.lng},
					map: map,
					icon: image,
					title: point.title,
					zIndex: point.id,
					clickable: true,
					category: point.content_text
				});
				
				marker.locationid = point.id;
				
				marker.addListener('click', function() {
					var pointid = this.locationid;
					cur_location = this;
					
					$('.show_city').addClass('active');
					
					$('.panel.point_panel').html('');
					$('.panel.point_panel').addClass('loading');

					if (!$('.panel.point_panel').is('.opened'))
						$('.panel.point_panel').css({'display': 'block', 'margin-left': '5%', 'opacity': '0'});
						$('.panel.point_panel').animate({marginLeft: '2%', opacity: '1'}, 300, function(){
							$('.panel.point_panel').addClass('opened')
						});
					
					if ($('.panel.comment_panel').is('.opened')){
						$('.panel.comment_panel').animate({marginLeft: '5%', opacity: '0'}, 300, function(){
							$('.panel.comment_panel').removeClass('opened').removeAttr('style');
						});
					}
					
					$.ajax({
						url: 'index.php?task=infopoint&pointid='+pointid+link+'&tmpl=component',
						success: function(data){
							gen_pointcontent(data);
							$('.panel.point_panel').removeClass('loading');
							
							if (support_replace_url){
								history.pushState(histopy_api, $(data).filter('.point_title').text(), 'index.php?id='+pointid);
							}
						}
					})
					if ($('.edit_point_btn').length){
						$('.edit_point_btn').attr('href', 'index.php?task=addpoint&id='+pointid);
						$('.edit_point_btn').css('display', 'inline-block');
					}
					
					// show balun
					var html =	'<div class="balun_raiting">'+point_info[this.locationid].reiting+'</div>'+
								'<div class="balun_title"><span>'+point_info[this.locationid].title+'</span></div>'+
								'<div class="balun_content">'+point_info[this.locationid].content+'</div>';
					
					marker.hoverwindow.setPosition(this.getPosition());
					marker.hoverwindow.setContent(html);
					marker.hoverwindow.open(map, this);
					
					// Зкрываем балуны
					if ($('#activepointid').val())
						$.each(markers, function(){
							marker = this;
							if (marker.locationid == $('#activepointid').val()){
								marker.hoverwindow.close();
								$('#activepointid').val('');
							}
						})
					
					$('#activepointid').val(point_info[this.locationid].id);
					
					map.panTo({lat: point.lat, lng: point.lng});
					if (map.getZoom() < 16)
						map.setZoom(16);
					
				});
				
				//hover
				marker.hoverwindow = new google.maps.InfoWindow({
					maxWidth: 250
				});
				
				if ($(window).width() > 1000){
					marker.addListener('mouseover', function() {
						var html =	'<div class="balun_raiting">'+point_info[this.locationid].reiting+'</div>'+
									'<div class="balun_title"><span>'+point_info[this.locationid].title+'</span></div>'+
									'<div class="balun_content">'+point_info[this.locationid].content+'</div>';
						
						marker.hoverwindow.setPosition(this.getPosition());
						marker.hoverwindow.setContent(html);
						marker.hoverwindow.open(map, this);
					});
					
					marker.addListener('mouseout', function() {
						var id = point_info[this.locationid].id;
						if ($('#activepointid').val() != id){
							marker.hoverwindow.close();
						}
					});
				}

				markers.push(marker);
			})
			makeCluster(map, markers);
			update_lists();
			
			if ($('#activepointid').val()){
				//console.log($('#activepointid').val());
				$.each(markers, function(){
					marker = this;
					if (marker.locationid == $('#activepointid').val()){
						//console.log('====');
						google.maps.event.trigger(marker, 'mouseover');
					}
				})
			}
		}
	})
	
	//console.log(cities);
	$.ajax({
		url: 'index.php?option=com_greenmarkers&task=get_json&type=cities&tmpl=component',
		data: {city: $('#city option:selected').val()},
		dataType: 'json',
		method: 'POST',
		success: function(cities){
			$.each(cities, function(){
				var point = this;
				
				
				var image_city = {
					url: 'images/city.png',
					size: new google.maps.Size(68, 76),
					origin: new google.maps.Point(0, 0),
					anchor: new google.maps.Point(32, 33)
				};
				
				var marker = new google.maps.Marker({
					position: {lat: parseFloat(point.lat), lng: parseFloat(point.lng)},
					map: map,
					icon: image_city,
					title: point.title,
					zIndex: parseInt(point.id),
					clickable: true,
				});
				marker.cityid = point.id;
				
				marker.addListener('click', function() {
					var cityid = this.cityid;
					$('#city').find('option:selected').removeAttr('selected');
					$('#city').find('option[value="'+cityid+'"]').attr('selected', 'selected');
					$('#city').change();
					//alert(cityid);
				});
			})
		}
	});
	
	filtered_markers = markers;
	
	//show_balun
	if ($('#activepointid_click').length){
		var id = $('#activepointid_click').val();
		if (id > 0){
			$.each(markers, function(){
				marker = this;
				if (marker.locationid == id){
					google.maps.event.trigger(marker, 'click');
				}
			})
		}
	}
	
	setInterval(function(){
		$('#map > div').eq(1).find('div').eq(0).hide();
		$('#map > div').eq(1).find('div:eq(1) span').text('Поиск по адресу сейчас не работает, мы приносим свои извинения и работаем над исправлением ошибок');
		$('#map > div').eq(1).find('a').hide();
		$('#map > div').eq(1).find('button').text('хорошо');
	}, 200)
}

function codeAddress(address) {
	var city = $('#city_chose_title').val();
	
	var image = {
		url: 'images/marker_red.png',
		size: new google.maps.Size(28, 40),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(14, 36)
	};
	
	geocoder.geocode({ 'address': city+', '+address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.panTo(results[0].geometry.location);
			map.setZoom(13);
			if (typeof (search_marker) != 'undefined')
				search_marker.setMap(null);
			search_marker = new google.maps.Marker({
				map: map,
				icon: image,
				title: address,
				position: results[0].geometry.location
			});
			search_marker.setMap(map);
		}else{
			alert("Geocode was not successful for the following reason: " + status);
		}
	});
}

function get_codeAddress(address, point) {
	var locat = false;
	var city = $('#city_chose_title').val();
	geocoder.geocode({ 'address': city+', '+address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			locat = results[0].geometry.location;
			//console.log(locat);
			calculateAndDisplayRoute(locat, point);
		}else{
			alert("Geocode was not successful for the following reason: " + status);
		}
	});
	
}

function geocodeLatLng(point, item){
	var result = '';
	geocoder.geocode({'location': point}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			if (results[1]) {
				result = results[0].address_components[1].short_name +', '+ results[0].address_components[0].short_name;
				item.val(result);
			} else {
				alert('No results found');
			}
		} else {
			alert('Geocoder failed due to: ' + status);
		}
	});
}

function calculateAndDisplayRoute(start, end){
	directionsService.route({
		origin: start,
		destination: end,
		travelMode: google.maps.TravelMode.DRIVING
	}, function(response, status) {
		if (status === google.maps.DirectionsStatus.OK) {
			console.log(response.routes[0].warnings);
			directionsDisplay.setDirections(response);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}

function filterMarkers(markers, filters, logic){
	var result = [];
	var add = false;
	near_filtered = [];
	
	// Фильтр пуст
	if (!filters.length){
		filtered_markers = markers;
		near_filtered = near_markers;
		get_visible_markers();
		get_all_markers();
		return markers;
	}
	
	// логическое ИЛИ
	if (logic == 'or'){
		$.each(markers, function(){
			var marker = this;
			add = false;
			for (i = 0; i< filters.length; i++){
				if (marker.category.indexOf(filters[i]) >= 0 && !add){
					result.push(marker);
					add = true;
				}
			}
		})
		if (near_markers.length){
			$.each(near_markers, function(){
				var marker = this;
				add = false;
				for (i = 0; i< filters.length; i++){
					if (marker.category.indexOf(filters[i]) >= 0 && !add){
						near_filtered.push(marker);
						add = true;
					}
				}
			})
		}
	}else{
		// логическое И
		$.each(markers, function(){
			var marker = this;
			add = false;
			var filter_count = 0;			
			
			for (i = 0; i< filters.length; i++){
				if (marker.category.indexOf(filters[i]) >= 0 && !add){
					filter_count++;
				}
				if (filters.length == filter_count){
					result.push(marker);
				}
			}
		})
		if (near_markers.length){
			$.each(near_markers, function(){
				var marker = this;
				add = false;
				var filter_count = 0;			
				
				for (i = 0; i< filters.length; i++){
					if (marker.category.indexOf(filters[i]) >= 0 && !add){
						filter_count++;
					}
					if (filters.length == filter_count){
						near_filtered.push(marker);
					}
				}
			})
		}
	}
	filtered_markers = result;
	get_visible_markers();
	get_all_markers();
	
	return result;
}

function makeCluster(map, markers){
	var g = '';
	if ($('#activepointid_click').length)
		g = 'g';
	
	var gridSize = 30;
	if ($(window).width() < 1000)	
		gridSize = 0;
	
	markerCluster = new MarkerClusterer(map, markers, {
		gridSize: gridSize,
		styles: [{
			url: 'images/claster30'+g+'.png',
			height: 45,
			width: 41,
			anchor: [12, 17],
			textColor: '#303030',
			fontWeight: '300',
			textSize: 12
		}, {
			url: 'images/claster45'+g+'.png',
			height: 60,
			width: 54,
			anchor: [17, 20],
			textColor: '#303030',
			fontWeight: '300',
			textSize: 14
		}, {
			url: 'images/claster'+g+'.png',
			height: 76,
			width: 68,
			anchor: [20, 17],
			textColor: '#303030',
			fontWeight: '300',
			textSize: 20
		}],
		maxZoom: 14,
		zoomOnClick: false
	});
}

function gen_pointcontent(data){
	$('.panel.point_panel').html(data);
	
	var share = Ya.share2('ya-share2');
	
	recalc();
}

function gen_commentcontent(data){
	$('.panel.comment_panel').html(data);	
	var num = $('.panel.comment_panel .comment_body').length;
	$('.panel.comment_panel .point_head .point_title').text(num+' '+numForm(num, 'комментарий', 'комментария', 'комментариев'));
	recalc();
}
// склонение слова
function numForm(number, forma1, forma2, forma3){   
    var regexp1 = /[056789]$/;
    var match1 = regexp1.exec(number);      
    var regexp2 = /[1]$/;
    var match2 = regexp2.exec(number);      
    var regexp3 = /[234]$/;
    var match3 = regexp3.exec(number);
     
    if((number == "0") || ((number >= "5") && (number <= "20")) || match1 != null){
        return forma3;
    }            
    if(match2 != null){
        return forma1;
    }            
    if(match3 != null){
        return forma2;
    }
}

function get_visible_markers(){
	var visible_markers = [];
	if($.cookie('usercity') != $('#city option:selected').text() || my_location == ''){
		$.each(filtered_markers, function(){
			if (map.getBounds().contains(this.getPosition())){
				visible_markers.push(point_info[this.locationid]);
			};
		})
	}else{
		$.each(near_filtered, function(){
			visible_markers.push(point_info[this.locationid]);
		})
	}
	generate_text_markers(visible_markers, $('.locat .locat_near'))
}

function get_all_markers(){
	var all_markers = [];
	$.each(filtered_markers, function(){
		all_markers.push(point_info[this.locationid]);
	})
	generate_text_markers(all_markers, $('.locat .locat_all'))	
}

function generate_text_markers(markers, item){
	item.html('');
	var max = 6;
	if (markers.length < 6){
		max = markers.length;
	}
	
	if (max > 0 && markers.length)
	for (var i = 0; i < max; i++){
		if (markers[i].id)
		item.append('<div class="clearfix locat_item">'+
		'<div class="locat_item_wrap"><a href="#" data-lat="'+markers[i].lat+'" data-id="'+markers[i].id+'" data-lng="'+markers[i].lng+'" class="locat_address">'+
		'	'+markers[i].title+
		'	<span>'+markers[i].address+'</span>'+
		'</a>'+
		'<a href="#" class="build_route"></a></div>'+
		'<form class="get_direction" action="#">'+
		'	<input type="text" placeholder="Укажите начальный пункт" name="address" />'+
		'	<input type="submit" value="OK" style="display:none;" />'+
		'	<i class="ico icomarker"></i><i data-tooltip="Мое местоположение" class="ico icohome"></i>'+
		'</form>'+
	'</div>');
	}	
}

function update_lists(){
	//if (navigator.geolocation) {
		// получаем по GEO	
	//	navigator.geolocation.getCurrentPosition(exportPosition, (function(){console.log('Cant find you');}));
	//}else{
		//запрашиваем по ip
		exportPositionByIp();
	//}
	get_all_markers();
}

function exportPosition(position) {
	user_latitude = position.coords.latitude;
	user_longitude  = position.coords.longitude;
	
	
	var you_image = {
		url: 'images/you.png',
		size: new google.maps.Size(59, 67),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(28, 57)
	};
	
	my_location = new google.maps.Marker({
		position: {lat: user_latitude, lng: user_longitude},
		map: map,
		icon: you_image,
		title: 'Вы здесь',
	});
	
	userPoint = {lat: user_latitude, lng: user_longitude};
	
	$.cookie('userpoint_lat', user_latitude);
	$.cookie('userpoint_lng', user_longitude);
	
	$.ajax({
		url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+user_latitude+','+user_longitude+'&sensor=true',
		type: 'POST',
		dataType: 'json',
		success: function(data) {
			city = data.results[0].address_components[2].long_name;
			$.cookie('usercity', city);
			$('#city option').each(function(){
				if ($('#city_chose_id').val() == '0'){
					if ($(this).text() == city && !$(this).is(':selected')){
						$(this).parent().children().removeAttr('selected');
						$(this).attr('selected', 'selected');
						$(this).parent().change();
					}
				}
				if ($(this).text() == city && $(this).is(':selected')){
					find_closest_marker(my_location);
				}
			})
			my_location_city = city;
		},
		error: function(xhr, textStatus, errorThrown) {
			errorPosition();
		}
	});
	
}

function exportPositionByIp(){
	/*$.ajax({
		url: 'http://ru.sxgeo.city/json/',
		type: 'POST',
		dataType: 'json',
		success: function(data) {
			city = data.city.name_ru;
			$.cookie('usercity', city);
			$('#city option').each(function(){
				if ($(this).text() == city && !$(this).is(':selected')){
					$(this).parent().children().removeAttr('selected');
					//$(this).attr('selected', 'selected');
					//$(this).parent().change();
				}
			})
			
		},
		error: function(xhr, textStatus, errorThrown) {
			errorPosition();
		}
	});*/
}

function rad(x) {return x*Math.PI/180;}

function find_closest_marker( marker ) {
	var lat = marker.position.lat();
	var lng = marker.position.lng();
	var R = 6371; // radius of earth in km
	var distances = [];
	var closest = -1;
	
	var lengtharr = [];
	var all_markers = [];
	
	for( i=0;i<markers.length; i++ ) {
		var mlat = markers[i].position.lat();
		var mlng = markers[i].position.lng();
		var dLat  = rad(mlat - lat);
		var dLong = rad(mlng - lng);
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = R * c;
		distances[i] = d;
		lengtharr[i] = { id: i, distance: d };
	}
	
	lengtharr.sort(compareLength);
	
	$.each(lengtharr, function(n){
		all_markers.push(point_info[markers[this.id].locationid]);
		near_markers.push(markers[this.id]);
	})
	near_filtered = near_markers;
	
	generate_text_markers(all_markers, $('.locat .locat_near'));
}

function compareLength(itemA, itemB) {
  return itemA.distance - itemB.distance;
}
	
	
$(document).ready(function () {
	var share = Ya.share2('ya-share2');
	
	if ($('input[name="frame_mode"]').val() ==1)
		link = '&frame_mode=1';
	
	//chose trash type
	$('.trash_type a').click(function(event){
		$(this).toggleClass( "active" );
		var filters = [];
		var near_filtered = [];
		var logic = 'or';
		$('.trash_type a.active').each(function(){
			filters.push($(this).attr('data-tooltip'));
		})
		if (filter_logic != 'or'){
			logic = 'and';
		}
		
		if (typeof(markerCluster) != 'undefined')
			markerCluster.clearMarkers();		
		makeCluster(map, filterMarkers(markers, filters, logic));
		
		return false;
	})
	
	$(document).on('change', '.filter_logic_block .onoffswitch input', function(){
		var filters = [];
		$('.trash_type a.active').each(function(){
			filters.push($(this).attr('data-tooltip'));
		})
		if (typeof(markerCluster) != 'undefined')
			markerCluster.clearMarkers();

		if ($(this).is(':checked')){
			filter_logic = 'and';
			makeCluster(map, filterMarkers(markers, filters, 'and'));
		}else{
			filter_logic = 'or';
			makeCluster(map, filterMarkers(markers, filters, 'or'));
		}
	})
	
	$(document).on('click', '.show_comments', function() {
		var pointid = $(this).attr('data-id');
		
		$('.panel.comment_panel').html('');
		$('.panel.comment_panel').addClass('loading');

		if (!$('.panel.comment_panel').is('.opened'))
			$('.panel.comment_panel').css({'display': 'block', 'margin-left': '5%', 'opacity': '0'});
			$('.panel.comment_panel').animate({marginLeft: '2%', opacity: '1'}, 300, function(){
				$('.panel.comment_panel').addClass('opened')
			});
		
		$.ajax({
			url: 'index.php?task=show_comments&pointid='+pointid+link+'&tmpl=component',
			success: function(data){
				gen_commentcontent(data);
				$('.panel.comment_panel').removeClass('loading');
			}
		})
		
		return false;
	});
	
	$(document).on('click', '.point_buttons .complaint', function(){
		var pointid = $(this).attr('data-id');
		$('.panel.complaint_panel .complaint_send').show();
		$('.panel.complaint_panel .thanks').hide();
		$('.complaint_panel [name="comment_text"]').val('');
		$('.complaint_panel .radio_group .radio').removeClass('checked');
		$('.complaint_panel .radio_group #radio1').prop('checked', true).change();
		
		if (!$('.panel.complaint_panel').is('.opened')){
			$('.panel.complaint_panel').css({'display': 'block', 'margin-left': '5%', 'opacity': '0'});
			$('.panel.complaint_panel').animate({marginLeft: '2%', opacity: '1'}, 300, function(){
				$('.panel.complaint_panel').addClass('opened');
				recalc();
			});
			$('.panel.complaint_panel').find('textarea').text('');
			$('.panel.complaint_panel').find('input[name="pointid"]').val(pointid);
		}
		
		return false;
	})
	
	$('.fit_size').click(function(){
		map.panTo({lat: lat, lng: lng});
		map.setZoom(zoom);
		
		return false;
	})
	
	// Complaint
	$(".complaint_send").validate({
		submitHandler: function (form) {
			var action = $(form).attr('action');
			var data = $(form).serialize();
			$(".complaint_send .btn").addClass('loading');
			
			$.ajax({
				url: gen_action(action),
				data: data,
				method: 'POST',
				success: function(data){
					$(".complaint_send .btn").removeClass('loading')
					$('.complaint_send').next().slideDown(300);
					$('.complaint_send').next().html(data);
					$('.complaint_send').slideUp(300)
				}
			})
		},
		rules: {
			comment_text: {
				required: true,
			},
			email: {
				required: true,
				email: true,
			},

		},
		messages: {
			comment_text: {
				required: 'Введите текст жалобы',
				email: 'Некорректный Email',
			},
			email: {
				required: 'Укажите email для связи',
				email: 'Некорректный Email',
			},
		},
		errorPlacement: function (error, element) {
			$('.error_mess').slideDown();
			element.addClass("errorVal");
			$('.complaint_send .error_mess').append(error);			
		}
	});
	
	// near points or all
	$(document).on('click', '.locat_btn_group a', function(){
		if (!$(this).is('.active')){
			if ($(this).is('.near')){
				$('.locat .locat_near').animate({marginLeft: '0px'}, 300)
				if (typeof(userPoint) != 'undefined' && my_location_city == $('#city option:selected').text()){
					map.panTo({lat: userPoint.lat, lng: userPoint.lng});
					map.setZoom(15);
				}
			}else{
				$('.locat .locat_near').animate({marginLeft: '-50%'}, 300);
				map.panTo({lat: lat, lng: lng});
				map.setZoom(zoom);
			}
			$('.locat_btn_group a').removeClass('active');
			$(this).addClass('active');
		}
		return false;
	})
	
	$(document).on('click', '.locat_item .locat_address', function(){
		var lat_attr= parseFloat($(this).attr('data-lat'));
		var lng_attr= parseFloat($(this).attr('data-lng'));
		var id 		= $(this).attr('data-id');

		map.panTo({lat: lat_attr, lng: lng_attr});
		map.setZoom(15);
		
		$.each(markers, function(){
			marker = this;
			if (marker.locationid == id){
				google.maps.event.trigger(marker, 'click');
			}
		})

		return false;
	})
	
	//address search
	$(document).on('submit', '#search_left', function(){
		var address = $(this).find('input[name="address"]').val();
		codeAddress(address);
		
		return false;
	})
	
	$(document).on('click', '.build_route', function(){
		var that = $(this);
			
		$('.build_route.active').each(function(){
			if (!$(this).is(that)){
				$(this).removeClass('active');
				$(this).parents('.locat_item').find('.get_direction').slideUp(300)
			}
		})
		
		if (!$(this).is('.active')){
			$(this).parents('.locat_item').find('.get_direction').slideDown(300, function(){
				that.addClass('active');
			})
		}else{
			$(this).removeClass('active');
			$(this).parents('.locat_item').find('.get_direction').slideUp(300)
		}
		
		return false;
	})
	
	$(document).on('click', '.point_buttons .route', function(){
		var item = $(this).parents('.panel_body_wrap').find('.get_direction');
		
				
		item.slideToggle(300)
		return false;
	})
	
	$(document).on('click', 'form .ico.icohome', function(){
		item = $(this).parents('form').find('input[name="address"]');
		geocodeLatLng(userPoint, item);
		return false;
	})
	
	// Маршрут
	$(document).on('submit', '.get_direction', function(){
		
		if ($(this).parents('.locat_item').find('.locat_address').length)
			var that = $(this).parents('.locat_item').find('.locat_address');
		else
			var that = $(this).parents('.panel_body_wrap');
		
		var address = $(this).find('input[name="address"]').val();		
		var lat_attr= parseFloat(that.attr('data-lat'));
		var lng_attr= parseFloat(that.attr('data-lng'));
		var point = {lat: lat_attr, lng: lng_attr};
		
		get_codeAddress(address, point);
		
		return false;
	});
	
	$(document).on('click', '.back_link, .close_link', function(){
		var panel = $(this).parents('.panel');
		
		if (panel.is('.point_panel')){
			if (!$('.panel.comment_panel').is(':hidden')){
				$('.panel.comment_panel').animate({marginLeft:'5%', opacity: '0'}, 300, function(){
					$(this).hide();
					$('.panel.comment_panel').removeClass('opened')
				});
			}
			if (!$('.panel.complaint_panel').is(':hidden')){
				$('.panel.complaint_panel').animate({marginLeft:'5%', opacity: '0'}, 300, function(){
					$(this).hide();
					$('.panel.complaint_panel').removeClass('opened')
				});
			}
			if (support_replace_url){
				history.back();
			}
			if ($('.edit_point_btn').length){
				$('.edit_point_btn').hide();
			}
			
			$.each(markers, function(){
				marker = this;
				if (marker.locationid == $('#activepointid').val()){
					marker.hoverwindow.close();
					$('#activepointid').val('');
				}
			})
		}
		
		if (parseInt($('.panel.city_panel').css('left')) < 0 || $('.panel.city_panel').is(':hidden')){
			$('.show_city').removeClass('active');
		}
		
		panel.animate({marginLeft:'5%', opacity: '0'}, 300, function(){
			$(this).hide();
			panel.removeClass('opened');
		});
		
		return false;
	})
	
	$(document).on('click', '.add_comment .btn', function(){
		var form = $(this).parents('.add_comment')
		if (form.find('textarea[name="comment_text"]').val()){
			form.find('textarea[name="comment_text"]').removeClass('error');
			
			var action = form.attr('action');
			var data = form.serialize();
			form.find('.btn').addClass('loading');
			
			$.ajax({
				url: gen_action(action),
				data: data,
				method: 'POST',
				success: function(data){
					form.find('.btn').removeClass('loading');
					form.slideUp(300, function(){
						
						var text = form.find('textarea').val();
						var now = new Date();
						form.html('<div class="point_comment"><div class="comment_author">' +
							'<div class="comment_author_ava"><img alt="" src="'+$('#head .profile .avatar img').attr('src')+'"></div>' +
							'<div class="comment_author_name">Вы</div>' +
							'<div class="comment_author_date">'+now.getDate()+'.'+now.getMonth()+'.'+now.getFullYear()+'</div>' +
							'</div><div class="comment_body">'+text+'</div></div>');
						form.slideDown(300)	
							
					});
					
					
				}
			})
		}else{
			$(this).parents('.add_comment').find('textarea[name="comment_text"]').addClass('error');
		}

		return false;
	})
	
	// answer comment
	$(document).on('click', '.answer_link', function(){
		var form = $(this).parents('.comment_author').parent().find('.answer_form');
		var parent_id = $(this).attr('data-parent_id');
		
		if (!form.length){
			$(this).parents('.comment_author').next().after('<div class="answer_form" style="display:none;"></div>');
			form = $(this).parents('.comment_author').parent().find('.answer_form');
			
			$(this).parents('.panel').find('.add_comment').eq(0).clone().appendTo(form);
			form.find('form').show();
			form.find('form').append('<input type="hidden" name="parent_id" value="'+parent_id+'">');
			form.slideDown();
		}else{
			if (form.is(':hidden')){
				form.slideDown();
			}else{
				form.slideUp();
			}
		}
		
		return false;
	})
	
	$(document).on('click', '.formComment', function(){
		var form = $(this).parent().children('.add_comment');
		form.slideDown(300, function(){recalc()});
		$(this).slideUp(300);
		
		return false;
	})
	
	$(document).on('click', '.point_reiting_buttons a', function(){
		var pointid = $(this).parent().find('input[name="pointid"]').val(),
			key = $(this).parent().find('input[name="form_key"]').val(),
			action = 'index.php?task=vote',
			vote;
		
		if ($(this).is('.min')){
			vote = 1;
		}else{
			vote = 5;
		}
		
		var count = parseInt($(this).parents('.point_reiting').find('.point_reiting_count span').text());
		
		$(this).parents('.point_reiting').find('.point_reiting_count span').text(count+1)
		
		$.ajax({
			url: gen_action(action),
			data: { pointid: pointid, form_key: key, vote: vote },
			method: 'POST',
			success: function(data){
				$.cookie('vote'+pointid, 1, { expires: 365 })
			}
		})
		$(this).parent().addClass('thank_block').html('<div class="thanks">Спасибо!</div>');
		
		
		return false;
	})
	
	// favorite
	$(document).on('click', '.addfavorite', function(){
		var href = $(this).attr('href');
		var inlist = 0;
		if ($(this).is('.active')){
			inlist = 1;
			$(this).attr('data-tooltip', 'Добавить в избранное');
		}else{
			$(this).attr('data-tooltip', 'Удалить из избранного');
		}
		$(this).toggleClass('active');
		
		$.ajax({
			url: gen_action(href),
			type: 'POST',
			data: {inlist: inlist},
			success: function(data) {
				
			}
		});
		
		return false;
	})

	$(window).load(function(){
		var city = $.cookie('usercity');
		if ($('#city option:selected').text() != city){
			$('head').append('<style>.ico.icohome{display:none !important;}<style>');
		}
	})

	// check functions
	$(document).on('click', '.check_box .get_for_check', function(){
		
		if ($('#user_phone').val() != ''){
			var href = $(this).attr('href');
			var that = $(this);
			var id	 = $(this).attr('data-id');
			$.ajax({
				url: gen_action(href),
				success: function(data){
					that.parent('.check_box').removeClass('unchecked').addClass('inprogress');
					that.parent('.check_box').html('Спасибо за помощь! <a href="index.php?task=personal&view=check&option=com_greenmarkers" class="wight_btn">Личный кабинет</a><div class="dop_info">У вас есть 7 дней, чтобы проверить выбранный Вами пункт</div>');
					
					point_info[id].content = point_info[id].content.replace('не проверен', 'на проверке');
					point_info[id].cats	= point_info[id].cats.replace('_2', '_3');
					
					var image = {
						url: 'images/markers/'+point_info[id].cats+'.png',
						size: new google.maps.Size(50, 56),
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(25, 56)
					};
					
					$.each(markers, function(){
						marker = this;
						if (marker.locationid == id){							
							marker.setIcon(image);
							var html =	'<div class="balun_raiting">'+point_info[id].reiting+'</div>'+
							'<div class="balun_title"><span>'+point_info[id].title+'</span></div>'+
							'<div class="balun_content">'+point_info[id].content+'</div>';
							marker.hoverwindow.setContent(html);
						}
					})
				}
			})
		}else{
			show_popup();
			$('#need_phone').fadeIn(300);
		}
		
		return false;
	})

	$('#phone_form').validate({
		submitHandler: function (form) {
			var action = $(form).attr('action');
			var data = $(form).serialize();
			$(form).find(".button").addClass('loading');
			$('#user_phone').val($('#phone_form input[name="phone"]').val());
			$.ajax({
				url: gen_action(action),
				data: data,
				method: 'POST',
				success: function(data){
					$(".complaint_send .button").removeClass('loading')
					close_popup();
					$('#need_phone').fadeOut(300);
					$('.point_panel .get_for_check').click();
				}
			})
		},
		rules: {
			phone: {
				required: true,
			},

		},
		messages: {
			phone: {
				required: 'Введите номер телефона',
			},
		},
		errorPlacement: function (error, element) {
			$('.error_mess').slideDown();
			element.addClass("errorVal");
			$('.complaint_send .error_mess').append(error);			
		}
	})

})	
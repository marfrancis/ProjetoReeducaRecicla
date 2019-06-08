var support_replace_url = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/(iPod|iPhone|iPad|WebApps\/.+CFNetwork)/);
var histopy_api;

$(document).ready(function(){
	//welcome
	if ($.cookie('welcome') != 1){
		$('.overflow_welcome, .module_welcome').show()
		recalc();
	}
	$(window).load(function(){
		recalc();
	})
	
	/*$('.back_link').click(function(){
		history.back();
		return false;
	})*/
	
	$('#head .profile > .avatar').click(function(){
		if ($(window).width() < 800){
			$(".callout").css({'right': '-268px', 'display': 'block'});
			$(".callout").animate({right: '0px'}, 300);
		}else{
			$(this).parent().children('.callout').show();
		}
		return false;
	})
	// close callout
	$(document).mouseup(function(a){
		if($(a.target).parents(".callout").length==0){
			$(".callout").hide();
		}		
	});
	$(document).on('click', '.callout_head .close', function(){
		$(".callout").animate({right: '-'+($(".callout").outerWidth()-(-20))+'px'}, 300, function(){
			$(".callout").removeAttr('style');
		});
		return false;
	})
	
	//#head .show_city
	$('.show_city').click(function(){
		if ($(this).is('.active')){
			
			if ($('.panel.complaint_panel').is('.opened')){
				$('.panel.complaint_panel .close_link').click();
				return false;
			}
			if ($('.panel.comment_panel').is('.opened')){
				$('.panel.comment_panel .close_link').click();
				return false;	
			}
			if ($('.panel.point_panel').is('.opened')){
				$('.panel.point_panel .back_link').click();
				console.log($('.panel.city_panel').css('left'));
				if (parseInt($('.panel.city_panel').css('left')) < 0 || $('.panel.city_panel').is(':hidden')){
					$(this).removeClass('active');
				}
				
				return false;	
			}
			$(this).removeClass('active');
			$('.panel.city_panel').animate({left: '-100%'}, 300)
		}else{
			$(this).addClass('active');
			$('.panel.city_panel').css({'left': '-100%', 'display': 'block'})
			$('.panel.city_panel').animate({left: '2%'}, 300)
			recalc();
		}
		return false;
	})
	$('.show_map.btn').click(function(){
		$('.panel.city_panel').animate({left: '-100%'}, 300);
		$('.show_city').removeClass('active');
		return false;
	})
	
	$('.city_head .opensearch').click(function(){
		if ($('.search_block').is(':hidden')){
			$('.search_block').slideDown(300, function(){
				recalc()
			});
		}else{
			$('.search_block').slideUp(300, function(){
				recalc()
			});
		}		
		return false;
	})
	
	$('select').dropdown();
	
	$("input[name='phone']").inputmask("+7(999)999-99-99");
	
	if ($(window).width() > 800){ 
		var ph = $('.panel_body').parent().height()-85;
		$('.panel_body').slimScroll({
			height: ph+'px',
			railVisible: true,
			alwaysVisible: true,
			railOpacity: 1,
			color: '#464955',
		});
	}
	
	$(window).resize(function(){
		recalc();
	})
	
	//mess close
	$(document).on('click', '.alert .close', function(){
		$(this).parents('#system-message').fadeOut();
		return false;
	})
	
	//shose city
	$('#city').change(function(){
		var city = $(this).find('option:selected').val();

		if ($('input[name="frame_mode"]').val() ==1){
			window.location.href = 'index.php?option=com_greenmarkers&city='+city+'&frame_mode=1';
		}else{
			window.location.href = 'index.php?option=com_greenmarkers&city='+city;
		}
	})
	
	//spoiler
	$(document).on('click', '.point_spoiler > a', function(){
		if ($(this).is('.active')){
			$(this).removeClass('active');
			$(this).parent().children('.spoiler_body').slideUp(500)
		}else{
			$(this).addClass('active');
			$(this).parent().children('.spoiler_body').slideDown(500)
		}
		return false;
	})
	
	//tooltip
	$(document).on('mouseenter', 'span[data-tooltip], a[data-tooltip], i[data-tooltip], div[data-tooltip], label[data-tooltip]', function(){
		var text = $(this).attr('data-tooltip');		
		var tooltip = $('<div class="tooltip">'+text+'</div>').appendTo('body')
		var toolWidth = tooltip.outerWidth();
		var toolHeight = tooltip.outerHeight();
		
		tooltip.css({
			'left': $(this).offset().left - Math.round(toolWidth/2) + Math.round($(this).outerWidth()/2), 
			'top': $(this).offset().top - toolHeight
		})
		
	})
	$(document).on('mouseleave', 'span[data-tooltip], a[data-tooltip], i[data-tooltip], div[data-tooltip], label[data-tooltip]', function(){
		//$('.tooltip').fadeOut(200, function(){$(this).remove});
		$('.tooltip').hide();
		$('.tooltip').remove();
	})
	
	$(document).on('click', '.module_welcome .close', function(){
		$('.overflow_welcome').fadeOut(300);
		var wh = $('.module_welcome').outerHeight();
		$('.module_welcome').animate({marginTop: '-'+wh+'px'}, 300, function(){
			$('.module_welcome').removeAttr('style').hide();
		});
		$.cookie('welcome', 1, { expires: 365 });
		close_popup();
		return false;
	})
	
	//login
	$(document).on('click', '.show_login', function(){
		$('.overflow, #login.popup').fadeIn(300);
		show_popup()
		return false;
	})
	$(document).on('click', '.show_register', function(){
		$('.overflow, #register').fadeIn(300);
		show_popup()
		return false;
	})
	
	$(".popup_image").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
	$(document).on('click', 'a.popup_link', function(){
		var href = $(this).attr('href');
		$('.popup').hide();
		if (!$(this).is('.ajax_popup')){
			$('.overflow, '+ href).fadeIn(300);
			show_popup();
		}else{
			$('#ajax .popup_head span').text($(this).attr('data-title'));
			$('#ajax .popup_body').html('<div class="loading"></div>');
			$('.overflow, #ajax').fadeIn(300);
			show_popup();
			
			$.ajax({
				url: gen_action(href),
				success: function(data){
					$('#ajax .popup_body').html(data);
				}
			})
			
		}
		return false;
	})
	
	//faq
	$(document).on('click', '.faq_block .faq_q', function(){
		if ($(this).parent().is('.active')){
			$(this).parent().removeClass('active');
			$(this).parent().children('.faq_body').slideUp(300);
		}else{
			$(this).parent().addClass('active');
			$(this).parent().children('.faq_body').slideDown(300);
		}
		return false;
	})
	
	// donate
	$('#donate_form').validate({
		rules: {
			f_name: {
				required: true,
			},
			email: {
				required: true,
				email: true,
			},
		},
		messages: {
			f_name: {
				required: 'Введите Ваше имя',
			},
			email: {
				required: 'Укажите Ваш email',
				email: 'Некорректный Email',
			},
		},
		errorPlacement: function (error, element) {
			$('#donate_form .error_mess').slideDown();
			element.addClass("errorVal");
			$('#donate_form .error_mess').append(error);			
		}
	});
	
	// volonteer
	$('#volunteer_form').validate({
		submitHandler: function (form) {
			var action = $(form).attr('action');
			var data = $(form).serialize();
			$("#volunteer_form .button").addClass('loading');
			
			$.ajax({
				url: gen_action(action),
				data: data,
				method: 'POST',
				success: function(data){
					$("#volunteer_form").slideUp(function(){
						$("#volunteer_form").html('Спасибо! Мы скоро свяжемся с вами.');
						$("#volunteer_form").slideDown();
					})
				}
			})
		},
		rules: {
			volunteer_city: {
				required: true,
			},
		},
		messages: {
			volunteer_city: {
				required: 'Укажите город, который вы бы хотели модерировать',
			},
		},
		errorPlacement: function (error, element) {
			$('#volunteer_form .error_mess').slideDown();
			element.addClass("errorVal");
			$('#volunteer_form .error_mess').append(error);			
		}
	});
	
	$('#donate_form .radio input').change(function(){
		if (!$(this).is('#other_summ')){
			var val = $(this).parents('.radio_group').find('input:checked').val();
			$('input[name="product_price"]').val(val);
			$('.hide_other').slideUp(300);
		}else{
			$('.hide_other').slideDown(300);
		}
	})
	
	$('.donation_switch input').change(function(){
		if ($(this).is(':checked')){
			$('input[name="currency"]').val($('input[name="currency"]').attr('data-reg'))
			$('#donate_form').attr('action', $('#donate_form').attr('data-reg'))
			$('.radio_group .block.reg').show();
			$('.radio_group .block.one').hide();
			
			$('.radio_group .block.reg input').eq(0).prop('checked', true);
			$('.radio_group .radio').removeClass('checked');
			$('.radio_group .block input:checked').parent().addClass('checked');
			$('input[name="product_price"]').val('1000');
		}else{
			$('input[name="currency"]').val($('input[name="currency"]').attr('data-one'))
			$('#donate_form').attr('action', $('#donate_form').attr('data-one'))
			$('.radio_group .block.reg').hide();
			$('.radio_group .block.one').show();
			
			$('.radio_group .block.one input').eq(0).prop('checked', true);
			$('.radio_group .radio').removeClass('checked');
			$('.radio_group .block input:checked').parent().addClass('checked');
			
			$('input[name="product_price"]').val('3000');
		}
	})
	
	
	$(document).on('click', '.popup_head .close', function(){
		$('.overflow, .popup').fadeOut(300);
		close_popup()
		return false;
	})
	$(document).on('click', '.show_about', function(){
		$('.overflow_welcome, .module_welcome').removeAttr('style').show()
		recalc();
		show_popup();
		return false;
	})
	
	$(document).on('click', 'a.ajaxopen', function(){
		var href = $(this).attr('href');
		var title = $(this).attr('data-title');
		$('.overflow, #ajax_popup.popup').fadeIn(300);
		$.ajax({
			url: href+'&tmpl=component',
			method: 'GET',
			success: function(data){
				$('#ajax_popup.popup').append('<div class="popup_head">'+title+'<a class="close" href="#"></a></div>');
				$('#ajax_popup.popup').append('<div class="popup_body">'+data+'</div>');
			}
		})
		
		return false;
	})
	
	//radio
	$('.radio input').each(function(){
		if ($(this).is(':checked'))
			$(this).parent().addClass('checked');
	})    
	$(document).on('change', '.radio input', function(){
		$(this).parents('.radio_group').find('.radio').removeClass('checked');
		$(this).parents('.radio_group').find('input:checked').parent().addClass('checked');
	}) 
	
	//checkbox
	$('.checkbox input').each(function(){
		if ($(this).is(':checked'))
			$(this).parent().addClass('checked');
	})    
	$(document).on('change', '.checkbox input', function(){
		if ($(this).is(':checked'))
			$(this).parent().addClass('checked');
		else
			$(this).parent().removeClass('checked');
	}) 
	
	//register
	$('#register-form').validate({
		submitHandler: function (form) {
			var action = $(form).attr('action');
			var data = $(form).serialize();
			$("#register-form input[type='submit']").addClass('loading');
			
			$.ajax({
				url: action+'&tmpl=component',
				data: data,
				method: 'POST',
				success: function(data){
					grecaptcha.reset();
					if ($.trim(data) != 'registration error' && $.trim(data) != 'captcha error'){
						window.location.href=window.location.href;
					}else{
						if ($.trim(data) == 'captcha error'){
							$(form).find('.error_mess').append('<label class="error" for="email" generated="true">Вы робот?</label>');							
						}else{
							$(form).find('.error_mess').append('<label class="error" for="email" generated="true">Пользователь с таким email уже зарегистрирован</label>');
						}
						$("#register-form input[type='submit']").removeClass('loading');	
					}
					
				}
			})
		},
		rules: {
			name: {
				required: true,
			},
			password: {
				required: true,
			},
			email: {
				required: true,
				email: true,
			},

		},
		messages: {
			name: {
				required: 'Введите Ваше имя',
			},
			password: {
				required: 'Введите пароль',
			},
			email: {
				required: 'Укажите Ваш email',
				email: 'Некорректный Email',
			},
		},
		errorPlacement: function (error, element) {
			$('#register-form .error_mess').slideDown();
			element.addClass("errorVal");
			$('#register-form .error_mess').append(error);			
		}
	});
	$('#register-form input[name="name"], #register-form input[name="lname"], .edit_profile_page input[name="fname"], .edit_profile_page input[name="lname"]').inputmask({
		mask: "*{+}",
		showMaskOnHover: false,
		showMaskOnFocus: true,
		greedy: false,
		definitions: {
			'*': {
				validator: "[А-Яа-я\- ]",
				cardinality: 1
			}
		}
	});
	
	
	$('#feedback_form').validate({
		submitHandler: function (form) {
			var action = $(form).attr('action');
			var data = $(form).serialize();
			$("#feedback_form .button").addClass('loading');
			
			$.ajax({
				url: gen_action(action),
				data: data,
				method: 'POST',
				success: function(data){
					grecaptcha.reset();
					if ($.trim(data) != 'captcha_error'){
						$("#feedback_form .button").removeClass('loading');					
						$('#feedback_form').slideUp(300, function(){
							$('#feedback_form').html(data);
							$('#feedback_form').slideDown(300);
						})
					}else{
						$("#feedback_form .button").removeClass('loading');
						$('.g-recaptcha').addClass('validate_error');
					}
					
				}
			})
		},
		rules: {
			name: {
				required: true,
			},
			mess: {
				required: true,
			},
			email: {
				required: true,
				email: true,
			},

		},
		messages: {
			name: {
				required: 'Введите Ваше имя',
			},
			mess: {
				required: 'Введите текст сообщения',
			},
			email: {
				required: 'Укажите Ваш email',
				email: 'Некорректный Email',
			},
		},
		errorPlacement: function (error, element) {
			$('#feedback_form .error_mess').slideDown();
			element.addClass("errorVal");
			$('#feedback_form .error_mess').append(error);			
		}
	});
	
	
	$('#login .register_link').click(function(){
		$('#login').hide();
		$('#register').show();
		return false;
	})
	
	// fullscreen
	$(document).on('click', '#fullscreen', function(){
		if ($(this).is('.active')){
			cancelFullscreen();
			$(this).removeClass('active');
		}else{
			launchFullScreen($('#body').get(0));
			$(this).addClass('active');
		}
		return false;
	})
	
	// upload avatar
	$('#head .callout .callout_head .avatar input, .edit_profile_page .avatar input').change(function(){
		var box = $(this).parent('.avatar');
		
		$.each(this.files, function(i, file) {
			// Отсеиваем не картинки
			var imageType = /image.*/;
			if (!file.type.match(imageType)) {
				alert('Загружать можно только изображения');
				return true;
			}
			sendResized(file, 200, box, upload_avatar);
		});
		$(this).val('');
	})
	
	
	/* !!!!====----moderator----====!!!! */
	
	// delate comment
	$(document).on('click', '.delate_link', function(){
		var action = $(this).attr('href');
		
		if ($(this).parents('.table_row').length){
			comment = $(this).parents('.table_row');
		}else{
			if ($(this).parents('.child_comment').length){
				comment = $(this).parents('.child_comment');
			}else{
				comment = $(this).parents('.point_comment');
			}
		}
		comment.css({'opacity': '0.6', 'min-height': '0px'});
		
		$.ajax({
			url: gen_action(action),
			method: 'GET',
			success: function(data){
				comment.slideUp();
			}
		})

		return false;
	})
	
	
	$('.switch_variant input').change(function(){
		$(this).parents('.inline-block').parent().find('.active').removeClass('active');
		if ($(this).is(':checked')){
			$(this).parents('.inline-block').next().addClass('active');
		}else{
			$(this).parents('.inline-block').prev().addClass('active');
		}
	})
	
	$('a[href^="http"], a[href^="ftp"]').not('a[href^="https://recyclemap.ru"]').click(function() {
        if (!$(this).parents('.ya-share2__container').length){
			window.open(this.href, "");
			return false;
		}
    });
	
	$('.ajax_link_close').click(function(){
		var href = $(this).attr('href');
		$.ajax({
			url: gen_action(href),
			method: 'GET',
			success: function(data){
				console.log(data);
			}
		})
		close_popup();
		$('#after_register, .overflow').fadeOut();
		
		return false;
	})
	if ($('#after_register').length){
		$('#after_register, .overflow').show();
		show_popup();
	}
	

	
	//photo
	$('.file_area input').bind({
		change: function() {
			var box = $(this).parents('.file_area_block');
			
			$.each(this.files, function(i, file) {
				// Отсеиваем не картинки
				var imageType = /image.*/;
				if (!file.type.match(imageType)) {
					alert('Загружать можно только изображения');
					return true;
				}
				sendResized(file, 1200, box, sendResized_helper);
			})
			
			$(this).val('');
		}
	});
	$('.file_area_wrap').bind({
        dragenter: function() {
            $(this).addClass('highlighted');
            return false;
        },
        dragover: function() {
            return false;
        },
        dragleave: function() {
            $(this).removeClass('highlighted');
            return false;
        },
        drop: function(e) {
            var dt = e.originalEvent.dataTransfer;
			var box = $(this).parents('.file_area_block');
			$(this).removeClass('highlighted');
			
			$.each(dt.files, function(i, file) {
				sendResized(file, 1200, box, sendResized_helper);
			})
            
            return false;
        }
    });
	// del file
	$(document).on('click', '.file_area_block .file_image_item .del', function(){
		var link_a = $(this);
		$(this).parent('.file_image_item').hide(300, function(){
			if (link_a.is('.ajax_del')){
				$(this).parents('form').append('<input type="hidden" name="photo_delate[]" value="'+link_a.attr('data-val')+'" />')
			}else{
				$(this).remove();
			}
		})
		return false;
	})
	$(document).on('click', '.rotate_left', function(){
		var that = $(this).parent('.file_image_item');
		that.find('.upload_img_wrap').addClass('rotating');
		setTimeout(function(){
			that.find('.upload_img_wrap').removeClass('rotating');
			drawRotated(that.find('img'), 90);
		}, 500)
		
		return false;
	})
	
	// time
	$(document).on('keyup', '#work_time_start, .work_time_start', function(){
		var st_val = $(this).val();
		var par = $(this).parents('form');
		par.find('input[name="weekday_start[]"]').val(st_val);
	})
	$(document).on('keyup', '#work_time_end, .work_time_end', function(){
		var st_val = $(this).val();
		var par = $(this).parents('form');
		par.find('input[name="weekday_end[]"]').val(st_val);
	})
	$(document).on('change', '#holiday, .holiday', function(){
		var cur = $(this).find('option:selected').val();
		var par = $(this).parents('form');
		if (cur == 0){
			par.find('.detailed_time input[type="checkbox"]').prop( "checked", true);
			par.find('.detailed_time input[type="checkbox"]').change();
		}
		if (cur == 1){
			par.find('.detailed_time input[type="checkbox"]').prop( "checked", true);
			par.find('.detailed_time .weekday_box:eq(6) input[type="checkbox"]').prop( "checked", false);
			par.find('.detailed_time input[type="checkbox"]').change();
		}
		if (cur == 6){
			par.find('.detailed_time input[type="checkbox"]').prop( "checked", true);
			par.find('.detailed_time .weekday_box:eq(5) input[type="checkbox"]').prop( "checked", false);
			par.find('.detailed_time input[type="checkbox"]').change();
		}
		if (cur == 61){
			par.find('.detailed_time input[type="checkbox"]').prop( "checked", true);
			par.find('.detailed_time .weekday_box:eq(6) input[type="checkbox"], .detailed_time .weekday_box:eq(5) input[type="checkbox"]').prop( "checked", false);
			par.find('.detailed_time input[type="checkbox"]').change();
		}
	})
	
	$(document).on('change', '#all_time, .all_time', function(){
		if ($(this).is(':checked')){
			var par = $(this).parents('form');
			par.find('input[name="weekday_start[]"], #work_time_start, .work_time_start').val('00:00');
			par.find('input[name="weekday_end[]"], #work_time_end, .work_time_end').val('24:00');
		}
	})
	$(document).on('change', 'input[name="weekday_start[]"], #work_time_start, input[name="weekday_end[]"], #work_time_end', function(){
		var par = $(this).parents('form');
		par.find('#all_time, .all_time').prop('checked', false);
		par.find('#all_time, .all_time').removeAttr('checked');
	})
	$(document).on('click', '.holiday_more', function(){
		var par = $(this).parents('form');
		if (par.find('.detailed_time').is(':hidden')){
			par.find('.detailed_time').slideDown();
		}else{
			par.find('.detailed_time').slideUp();
		}
		return false;
	})
	
	$(".input_list.inline.time input[type='text']").inputmask("99:99");
	
	$('.weekday_box .onoffswitch input').each(function(){
		if (!$(this).is(':checked')){
			$(this).parents('.weekday_box').addClass('unchecked');
			$(this).parents('.weekday_box').find('input').attr('readonly', 'readonly');
		}
	})
	
	$(document).on('change', '.weekday_box .onoffswitch input', function(){
		if (!$(this).is(':checked')){
			$(this).parents('.weekday_box').addClass('unchecked');
			$(this).parents('.weekday_box').find('input[type="text"]').attr('readonly', 'readonly');
		}else{
			$(this).parents('.weekday_box').removeClass('unchecked');
			$(this).parents('.weekday_box').find('input[type="text"]').removeAttr('readonly');
		}
	})
	
	
	if ($('.module_petition').length){
		$('.module_petition, .overflow_welcome').fadeIn();
		recalc();
		show_popup();
	}	
	$(document).on('click', '.module_petition .close', function(){
		$('.overflow_welcome').fadeOut(300);
		var wh = $('.module_petition').outerHeight();
		$('.module_petition').animate({marginTop: '-'+wh+'px'}, 300, function(){
			$('.module_petition').removeAttr('style').hide();
		});
		close_popup();
		return false;
	})
	
	$('#send_petition').validate({
		submitHandler: function (form) {
			var action = $(form).attr('action');
			var data = $(form).serialize();
			$("#send_petition .button").addClass('loading');
			
			var subsc = 0;
			if ($('#subscr_petition').is(':checked')){
				subsc = 1;
			}
			
			$.ajax({
				url: gen_action(action),
				data: data,
				method: 'POST',
				success: function(data){					
					$("#send_petition .button").removeClass('loading');					
					$('.petition_before').slideUp(300, function(){
						$('.petition_after').slideDown(300);
					})
					if (subsc){
						dataLayer.push({'event':'GAevent', 'eventCategory':'form', 'eventAction':'send', 'eventLabel':'recycle&subscribe'});
					}else{
						dataLayer.push({'event':'GAevent', 'eventCategory':'form', 'eventAction':'send', 'eventLabel':'recycle&nosubscribe'});
					}
				}
			})
		},
		rules: {
			first_name: {
				required: true,
			},
			last_name: {
				required: true,
			},
			region:{
				required: true,
			},
			email: {
				required: true,
				email: true,
			},

		},
		messages: {
			first_name: {
				required: 'Введите Ваше имя',
			},
			last_name: {
				required: 'Введите Вашу фамилию',
			},
			region:{
				required: 'Введите Вашу регион',
			},
			email: {
				required: 'Укажите Ваш email',
				email: 'Некорректный Email',
			},
		},
		errorPlacement: function (error, element) {
			$('#send_petition .error_mess').slideDown();
			element.addClass("errorVal");
			$('#send_petition .error_mess').append(error);			
		}
	});
	
	
})
function sendResized_helper(canvas, box){
	
	dataURL = canvas.toDataURL();
	box.children('.file_list').append('<div class="file_image_item for_upload" style="display:none;"><a href="#" class="del" data-tooltip="Удалить"></a><div class="upload_img_wrap"><img src="'+dataURL+'" alt="" /></div><a href="#" class="rotate_left"></a></div>');
		
	var last_item = box.children('.file_list').children('.file_image_item:last');
	last_item.show(300);
	
	if (box.find('input[name="file_check"]').length){
		var num = box.children('.file_list').children('.for_upload').length;
		if (num){
			box.find('input[name="file_check"]').val(num);
		}else{
			box.find('input[name="file_check"]').val('123');
		}
	}
	
	canvas.toBlob(function(blob) {
		last_item[0].file = blob;		
	});
}

function upload_avatar(canvas, box){
	dataURL = canvas.toDataURL();
	box.find('img').attr('src', dataURL);
	$('#head .profile > .avatar img').attr('src', dataURL);
	
	canvas.toBlob(function(blob) {
		var avatar = new FormData();
		var action = 'index.php?task=upload_avatar'
		avatar.append('photo', blob);
		
		$.ajax({
			url: gen_action(action),
			data: avatar,
			processData: false,
			contentType: false,
			method: 'POST',
			success: function(e){
				console.log(e+' avatar uploaded');
			}
		})
	});	
}
function recalc(){
	
	var content_h = $(window).height() - $('#head').outerHeight() - $('.personal_footer').outerHeight();
	
	$('.error_page').height(content_h);
	
	$('.panel_body').each(function(){
		if ($(this).parents('.panel').is('.city_panel')){
			var ph = $(this).parents('.panel').height()- $(this).parents('.panel').children('.city_head').outerHeight()-10;
		}else{
			//var ph = $(this).parents('.panel').height()-85;
			var ph = $(this).parents('.panel').height()- $(this).parents('.panel').children('.point_head').outerHeight()-10;
		}
		
		if (!isTouchDevice()){
			$(this).height(ph);
			$(this).parent('.slimScrollDiv').height(ph);
			$(this).slimScroll({
				height: ph+'px',
				railVisible: true,
				alwaysVisible: true,
				railOpacity: 1,
				color: '#464955',
				touchScrollStep: 0
			});
		}else{
			$(this).height(ph);
			$(this).css('overflow-y', 'auto');
		}
		
		/*if (isTouchDevice()){
			$('.panel_body').slimScroll({destroy: true});
		}*/
		
	})
	
	$('.row.eqil').each(function(){
		$(this).children('.col2').removeAttr('style');
		var th = $(this).height();
		$(this).children('.col2').height(th);
	})
}
function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }catch(e){
        return false;
    }
}
function show_popup(){
	$('#body').css({
		'position': 'fixed',
		'left': '0px',
		'right': '0px',
		'top': '0px',
		'bottom': '0px'
	});
}
function close_popup(){
	$('#body').css('position', 'static');
}

//fullscreen controller
function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}
function cancelFullscreen() {
  if(document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
}
function gen_action(action){
	var result;
	if (action.indexOf('?') > 0){
		result = action+'&tmpl=component';
	}else{
		result = action+'?tmpl=component';
	}
	return result;
}
function sendResized(file, maxWidth, box, callback){
		
var reader = new FileReader();
    reader.onload = function() {
	
	if (maxWidth == 0)
		maxWidth = 2000;
 
    var tempImg = new Image();
    tempImg.src = reader.result;
    return tempImg.onload = function() {
		
		// Расчитываем новые размеры изображения
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        if (tempW > tempH) {
            if (tempW > maxWidth) {
               tempH *= maxWidth / tempW;
               tempW = maxWidth;
            }
        }else{
            if (tempH > maxWidth) {
               tempW *= maxWidth / tempH;
               tempH = maxWidth;
            }
        }
		tempW = Math.round(tempW);
        tempH = Math.round(tempH);
		
		// Создаем холст
        var canvas = document.createElement('canvas');
        canvas.width = tempW;
        canvas.height = tempH;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        dataURL = canvas.toDataURL();
		
		callback(canvas, box);	
      }
   }
   return reader.readAsDataURL(file);	
}

function drawRotated(that, degrees){
	var tempImg = new Image();
	var rad = degrees * Math.PI / 180;
    tempImg.src = that.attr('src');
	
	return tempImg.onload = function() {
		var tempW = tempImg.width;
		var tempH = tempImg.height;
		var main_size;
			
		var canvas=document.createElement('canvas');
		if (tempW > tempH){
			canvas.width = tempW;
			canvas.height = tempW;
			main_size = tempW;
		}else{
			canvas.width = tempH;
			canvas.height = tempH;
			main_size = tempH;
		}

		var ctx=canvas.getContext("2d");
		
		ctx.translate(tempH, 0);
		ctx.rotate(rad);
		ctx.drawImage(this,0,0,tempW, tempH);
		
		var canvas1 = document.createElement('canvas');
		canvas1.width = tempH;
		canvas1.height = tempW;
		
		var ctx1 = canvas1.getContext("2d");
        ctx1.drawImage(canvas, 0, 0, main_size, main_size);

		dataURL = canvas1.toDataURL();
		
		canvas.toBlob(function(blob) {
			that.parents('.file_image_item')[0].file = blob;		
		});
		
		that.attr('src', dataURL);
	}
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// ToBlob
(function(a){"use strict";var b=a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype,c=function(){try{return!!(new Blob)}catch(a){return!1}}(),d=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder,e=(c||d)&&a.atob&&a.ArrayBuffer&&a.Uint8Array&&function(a){var b,e,f,g,h,i;a.split(",")[0].indexOf("base64")>=0?b=atob(a.split(",")[1]):b=decodeURIComponent(a.split(",")[1]),e=new ArrayBuffer(b.length),f=new Uint8Array(e);for(g=0;g<b.length;g+=1)f[g]=b.charCodeAt(g);return i=a.split(",")[0].split(":")[1].split(";")[0],c?new Blob([e],{type:i}):(h=new d,h.append(e),h.getBlob(i))};a.HTMLCanvasElement&&!b.toBlob&&(b.mozGetAsFile?b.toBlob=function(a,b){a(this.mozGetAsFile("blob",b))}:b.toDataURL&&e&&(b.toBlob=function(a,b){a(e(this.toDataURL(b)))})),typeof define!="undefined"&&define.amd?define(function(){return e}):a.dataURLtoBlob=e})(this);
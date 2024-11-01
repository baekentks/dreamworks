// JavaScript Document
$(document).ready(function(){

	$("a[href = '#']").click(function(e){
		e.preventDefault();
		return false;
	});

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}

	/***** 공통 함수(start) *****/	

	/*$(document).mousemove(function(e){
			var e = e ? e : window.event;
			var user_X = e.pageX;
			var user_Y = e.pageY;
			var center = $("div.wrapper").outerWidth() / 2;
			var middle = $("div.wrapper").outerHeight() / 2;
			var pos_H_N = -(user_X - center);
			var pos_V_N = -(user_Y - middle);
			$("img.dr_bg").css("transform", "translate("+ pos_H_N / 90 +"px, "+ pos_V_N / 90 + "px)");
			$("img.dr_bg_sub").css("transform", "translate("+ pos_H_N / 30 +"px, "+ pos_V_N / 30 + "px)");
	});*/

	function visual_Slides(_targetWrap, _slides, _has_pause, _type){
		var $wrap = _targetWrap;
		var $slides = $($wrap +" "+_slides);
		var $pn_btns = $($wrap +" .pagination > button");
		var $btn_prev = $($wrap +" button.prev");
		var $btn_next = $($wrap +" button.next");
		var has_pause = _has_pause;
		var slide_type = _type;
		var cnt = 0;
		var si_01 = 0;
		var scrollEvent = false;
		if(slide_type == "fade"){
			$slides.removeClass('cur prev next').css("transition", "none").css("opacity", "1").fadeOut(0);
			$slides.first().css("opacity", "1").fadeIn(0);
		}

		if(!isMobile){
			$(window).on('mousewheel', function(event) {
				if (event.originalEvent.wheelDelta > 50 && scrollEvent == true && cnt >= 0) {
					console.log('Scroll up');
					scrollEvent = false;
					count_minus();
				}
				else if (event.originalEvent.wheelDelta < -50 && scrollEvent == false && cnt <= $slides.length - 1) {
					console.log('Scroll down');
					scrollEvent = true;
					count_plus();
				}
			});
		}

		if(slide_type == "fade"){
			$slides.removeClass('cur prev next').css("transition", "none").css("opacity", "1").fadeOut(0);
			$slides.first().css("opacity", "1").fadeIn(0);
		}

		$btn_prev.on("click", function(){
			count_minus();
		});
		$btn_next.on("click", function(){
			count_plus();
		});

		var startX = 0;
		var endX = 0;
		var sensitive = 60;
		$($wrap).on('touchstart mousedown', function(e){
			if(!isMobile) return;
			// e.preventDefault();
			if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				startX = touch.pageX;
			}
			else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' ||  e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave'){
				startX = e.pageX;
			}
		});
		$($wrap).on('touchend mouseup', function(e){
			if(!isMobile) return;
			// e.preventDefault();
			if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				endX = touch.pageX;
			}
			else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' ||  e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave'){
				endX = e.pageX;
			}

			if(startX + sensitive < endX){
				console.log("swipe(right)");
				count_minus();
			}
			else if(startX > endX + sensitive){
				console.log("swipe(left)");
				count_plus();
			}
		});

		$pn_btns.on("click", function(e){
			e.preventDefault();
			var cur_num = $(this).index();
			if(has_pause && cur_num == $pn_btns.length - 1){
				console.log('has_pause && cur_num == $pn_btns.length - 1');
				play_pause();
				return false;
			}
			cnt = cur_num;
			(slide_type == "slide") ? slide_img(cnt, "none") : fade_img(cnt);
			pagination_change(cnt);
		});

		function play_pause(){
			var target = $pn_btns.last();
			var src = target.css("background-image");
			if(si_01 != 0){
				stop_si();
				src = src.replace("_F.png, ", "_T.png");
				target .css("background-image", src);
			}
			else if(si_01 == 0){
				start_si();
				src = src.replace("_T.png, ", "_F.png");
				target.css("background-image", src);
			}
		};

		function count_plus(){
			cnt = cnt == $slides.length - 1 ? 0 : cnt + 1;
			(slide_type == "slide") ? slide_img(cnt, "all 0.4s") : fade_img(cnt);
			pagination_change(cnt);
		}
		
		function count_minus(){
			cnt = cnt == 0 ? $slides.length - 1 : cnt - 1;
			(slide_type == "slide") ? slide_img(cnt, "all 0.4s") : fade_img(cnt);
			pagination_change(cnt);
		}

		function fade_img(num){
			stop_si();
			$slides.fadeOut(1000);
			$slides.eq(num).fadeIn(1000, function(){
				start_si();
			});
		}

		function slide_img(num, transition_val){
			var next_num = cnt == $slides.length - 1 ? 0 : cnt + 1;
			var prev_num = cnt == 0 ? $slides.length - 1 : cnt - 1;
			$slides.removeClass('cur prev next').css("transition", "none");
			if($slides.length <= 2){
				$slides.eq(num).addClass("cur").css("transition", "all 0.4s");
				if(cnt == 0){
					$slides.eq(next_num).addClass("next").css("transition", "all 0.4s");
				}
				else if(cnt == 1){
					$slides.eq(prev_num).addClass("prev").css("transition", "all 0.4s");
				}
			}
			else if($slides.length >= 3){
				$slides.eq(num).addClass("cur").css("transition", transition_val);
				$slides.eq(prev_num).addClass("prev").css("transition", "all 0.4s");
				$slides.eq(next_num).addClass("next").css("transition", "all 0.4s");
			}
		}

		function pagination_change(num){
			$pn_btns.removeClass("active");
			$pn_btns.eq(num).addClass("active");
		}
	}

	function about_ani(_delay){
		var $tar_elms = $('.sec_about');
		var $ani_elm_01 = $('.sec_about div.img_wrap');
		var $ani_elm_02 = $('.sec_about div.info_wrap');
		var status = false;
		(function init(){
			$ani_elm_01.css("opacity", 0);
			$ani_elm_02.css("opacity", 0);
		})();
		$(window).on('scroll', function(){
			if(status) return false;
			var scrollTop = $(window).scrollTop() + $(window).outerHeight();
			var offset = $tar_elms.offset().top;
			if(scrollTop > offset){
				console.log("done");
				status = true;
				$ani_elm_01.animate({ 'opacity': 1 }, 500);
				$ani_elm_02.delay(_delay).animate({ 'opacity': 1 }, 500);
			}
		});
	}

	/***** 공통 함수(end) *****/


	/***** 디바이스별 분기 *****/
	// 데스크탑
	if(!isMobile){

	$(document).mousemove(function(e){
			var e = e ? e : window.event;
			var user_X = e.pageX;
			var user_Y = e.pageY;
			var center = $("div.wrapper").outerWidth() / 2;
			var middle = $("div.wrapper").outerHeight() / 2;
			var pos_H_N = -(user_X - center);
			var pos_V_N = -(user_Y - middle);
			$("img.dr_bg").css("transform", "translate("+ pos_H_N / 90 +"px, "+ pos_V_N / 90 + "px)");
			$("img.dr_bg_sub").css("transform", "translate("+ pos_H_N / 30 +"px, "+ pos_V_N / 30 + "px)");
	});

	/*function visual_Slides(_targetWrap, _slides, _has_pause, _type){
		var $wrap = _targetWrap;
		var $slides = $($wrap +" "+_slides);
		var $pn_btns = $($wrap +" .pagination > button");
		var $btn_prev = $($wrap +" button.prev");
		var $btn_next = $($wrap +" button.next");
		var has_pause = _has_pause;
		var slide_type = _type;
		var cnt = 0;
		var si_01 = 0;
		if(slide_type == "fade"){
			$slides.removeClass('cur prev next').css("transition", "none").css("opacity", "1").fadeOut(0);
			$slides.first().css("opacity", "1").fadeIn(0);
		}

		$btn_prev.on("click", function(){
			count_minus();
		});
		$btn_next.on("click", function(){
			count_plus();
		});

		var startX = 0;
		var endX = 0;
		var sensitive = 60;
		$($wrap).on('touchstart mousedown', function(e){
			if(!isMobile) return;
			// e.preventDefault();
			if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				startX = touch.pageX;
			}
			else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' ||  e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave'){
				startX = e.pageX;
			}
		});
		$($wrap).on('touchend mouseup', function(e){
			if(!isMobile) return;
			// e.preventDefault();
			if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				endX = touch.pageX;
			}
			else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' ||  e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave'){
				endX = e.pageX;
			}

			if(startX + sensitive < endX){
				console.log("swipe(right)");
				count_minus();
			}
			else if(startX > endX + sensitive){
				console.log("swipe(left)");
				count_plus();
			}
		});

		$pn_btns.on("click", function(e){
			e.preventDefault();
			var cur_num = $(this).index();
			if(has_pause && cur_num == $pn_btns.length - 1){
				console.log('has_pause && cur_num == $pn_btns.length - 1');
				play_pause();
				return false;
			}
			cnt = cur_num;
			(slide_type == "slide") ? slide_img(cnt, "none") : fade_img(cnt);
			pagination_change(cnt);
		});

		function play_pause(){
			var target = $pn_btns.last();
			var src = target.css("background-image");
			if(si_01 != 0){
				stop_si();
				src = src.replace("_F.png, ", "_T.png");
				target .css("background-image", src);
			}
			else if(si_01 == 0){
				start_si();
				src = src.replace("_T.png, ", "_F.png");
				target.css("background-image", src);
			}
		};

		function count_plus(){
			cnt = cnt == $slides.length - 1 ? 0 : cnt + 1;
			(slide_type == "slide") ? slide_img(cnt, "all 0.4s") : fade_img(cnt);
			pagination_change(cnt);
		}
		
		function count_minus(){
			cnt = cnt == 0 ? $slides.length - 1 : cnt - 1;
			(slide_type == "slide") ? slide_img(cnt, "all 0.4s") : fade_img(cnt);
			pagination_change(cnt);
		}

		function fade_img(num){
			stop_si();
			$slides.fadeOut(1000);
			$slides.eq(num).fadeIn(1000, function(){
				start_si();
			});
		}

		function slide_img(num, transition_val){
			stop_si();
			var next_num = cnt == $slides.length - 1 ? 0 : cnt + 1;
			var prev_num = cnt == 0 ? $slides.length - 1 : cnt - 1;
			$slides.removeClass('cur prev next').css("transition", "none");
			if($slides.length <= 2){
				$slides.eq(num).addClass("cur").css("transition", "all 0.4s");
				if(cnt == 0){
					$slides.eq(next_num).addClass("next").css("transition", "all 0.4s");
				}
				else if(cnt == 1){
					$slides.eq(prev_num).addClass("prev").css("transition", "all 0.4s");
				}
			}
			else if($slides.length >= 3){
				$slides.eq(num).addClass("cur").css("transition", transition_val);
				$slides.eq(prev_num).addClass("prev").css("transition", "all 0.4s");
				$slides.eq(next_num).addClass("next").css("transition", "all 0.4s");
			}
			start_si();
		}

		function pagination_change(num){
			$pn_btns.removeClass("active");
			$pn_btns.eq(num).addClass("active");
		}

		function start_si(){
			if(si_01 != 0){
				clearInterval(si_01)
			}
			si_01 = setInterval(count_plus, 3000);
		}
		start_si();

		function stop_si(){
			if(si_01 != 0){
				clearInterval(si_01)
			}
			si_01 = 0;
		}
		start_si();
	}

	function rolling_slide(_targetWrap, _view_ea_D, _view_ea_T, _view_ea_M){
		var $wrap = _targetWrap;
		var $inner = $($wrap +" div.view_mask");
		var $inner_ul = $($wrap +" div.view_mask > ul");
		var $inner_ul_li = $($wrap +" div.view_mask > ul > li");
		var $btn_prev = $($wrap +" button.prev");
		var $btn_next = $($wrap +" button.next");
		var view_ea = (function(){
			var result;
			if(!isMobile) result = _view_ea_D;
			else {
				if(screen.width >= 768) result = _view_ea_T;
				else if(screen.width < 768) result = _view_ea_M;
			}
			return result;
		})();

		var li_width = $inner.outerWidth() / view_ea;
		var move_cnt = 1; //prev, next 돌릴 때 몇 개씩 움직이는지
		var duration = 200; // 돌아가는 속도, 값 커질수록 느리게 돌아감
		var click_Event = true;
		var si_switch = 0;

		(function init(){
			for(var i = 1; i <= move_cnt; i++){
				$inner_ul_li.last().prependTo($inner_ul);
			}
			$inner_ul_li.css("width", li_width +"px");
			$inner_ul.css("width", li_width * $inner_ul_li.length +"px").css("margin-left", -li_width * move_cnt +"px").css("position", "relative");
		})();

		$btn_prev.on("click", function(){
			move_ul("prev");
		});
		$btn_next.on("click", function(){
			move_ul("next");
		});

		var startX = 0;
		var endX = 0;
		var sensitive = 60;
		$($wrap).on('touchstart mousedown', function(e){
			if(!isMobile) return;
			// e.preventDefault();
			if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				startX = touch.pageX;
			}
			else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' ||  e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave'){
				startX = e.pageX;
			}
		});
		$($wrap).on('touchend mouseup', function(e){
			if(!isMobile) return;
			// e.preventDefault();
			if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				endX = touch.pageX;
			}
			else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' ||  e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave'){
				endX = e.pageX;
			}

			if(startX + sensitive < endX){
				console.log("swipe(right)");
				move_ul("prev");
			}
			else if(startX > endX + sensitive){
				console.log("swipe(left)");
				move_ul("next");
			}
		});

		function move_ul(_direction){
			var num = _direction == "prev" ? 1 : -1;
			if(click_Event){
				stop_si();
				click_Event = false;
				$inner_ul.animate({ left: (li_width * num) * move_cnt +"px" }, duration, function(){
					for(var i = 1; i <= move_cnt; i++){
						if(_direction == "prev"){
							$($wrap +" > div.inner_wrap > div.view_mask > ul > li").last().prependTo($wrap +" > div.inner_wrap > div.view_mask > ul");
						}//처음 순서만 기억하기 때문에 다시 선택 잡아줘야함
						else if(_direction == "next"){
							$($wrap +" > div.inner_wrap > div.view_mask > ul > li").first().appendTo($wrap +" > div.inner_wrap > div.view_mask > ul");
						}
					}
					$inner_ul.css("left", "0px"); // left를 0세팅
					click_Event = true;
					start_si();
				})
			}
			else { return false; }
		}
		
		function start_si(){
			if(si_switch != 0){
				clearInterval(si_switch);
			}
			si_switch = setInterval(function(){ move_ul("next"); }, 3000);
		}

		function stop_si(){
			if(si_switch != 0){
				clearInterval(si_switch);
			}
			si_switch = 0;
		}
		start_si();
	}*/	
		
	}

	else {

		// Tablet
		if(screen.width >= 768){

			var two_slide_02 = visual_Slides(".sec_commu", ".slides", false, "slide");

		}

		// Mobile
		else {

			var two_slide_02 = visual_Slides(".sec_commu", ".view_wr", false, "slide");

		}
		
	}
	
	var two_slide_01 = visual_Slides("div.view", ".view_wr", false, "slide");

});

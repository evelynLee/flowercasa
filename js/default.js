/*
var _jf = _jf || [];_jf.push(['p','41754']);_jf.push(['_setFont','xingothic-tc-w4','css','.xingothic-tc-w4']);_jf.push(['_setFont','xingothic-tc-w4','css','body']);_jf.push(['_setFont','xingothic-tc-w4','alias','xingothic-tc']);_jf.push(['_setFont','xingothic-tc-w4','weight',400]);_jf.push(['_setFont','xingothic-tc-w6','css','.xingothic-tc-w6']);_jf.push(['_setFont','xingothic-tc-w6','alias','xingothic-tc']);_jf.push(['_setFont','xingothic-tc-w6','weight',600]);_jf.push(['_setFont','xingothic-tc-w3','css','.xingothic-tc-w3']);_jf.push(['_setFont','xingothic-tc-w3','css','#main_menu']);_jf.push(['_setFont','xingothic-tc-w3','css','button']);_jf.push(['_setFont','xingothic-tc-w3','css','#cat_menu']);_jf.push(['_setFont','xingothic-tc-w3','alias','xingothic-tc']);_jf.push(['_setFont','xingothic-tc-w3','weight',300]);_jf.push(['_setFont','xingothic-tc-w7','css','.xingothic-tc-w7']);_jf.push(['_setFont','xingothic-tc-w7','css','.content h2']);_jf.push(['_setFont','xingothic-tc-w7','alias','xingothic-tc']);_jf.push(['_setFont','xingothic-tc-w7','weight',700]);(function(f,q,c,h,e,i,r,d){var k=f._jf;if(k.constructor===Object){return}var l,t=q.getElementsByTagName("html")[0],a=function(u){for(var v in k){if(k[v][0]==u){if(false===k[v][1].call(k)){break}}}},j=/\S+/g,o=/[\t\r\n\f]/g,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,g="".trim,s=g&&!g.call("\uFEFF\xA0")?function(u){return u==null?"":g.call(u)}:function(u){return u==null?"":(u+"").replace(b,"")},m=function(y){var w,z,v,u,x=typeof y==="string"&&y;if(x){w=(y||"").match(j)||[];z=t[c]?(" "+t[c]+" ").replace(o," "):" ";if(z){u=0;while((v=w[u++])){if(z.indexOf(" "+v+" ")<0){z+=v+" "}}t[c]=s(z)}}},p=function(y){var w,z,v,u,x=arguments.length===0||typeof y==="string"&&y;if(x){w=(y||"").match(j)||[];z=t[c]?(" "+t[c]+" ").replace(o," "):"";if(z){u=0;while((v=w[u++])){while(z.indexOf(" "+v+" ")>=0){z=z.replace(" "+v+" "," ")}}t[c]=y?s(z):""}}},n;k.push(["_eventActived",function(){p(h);m(e)}]);k.push(["_eventInactived",function(){p(h);m(i)}]);k.addScript=n=function(u,A,w,C,E,B){E=E||function(){};B=B||function(){};var x=q.createElement("script"),z=q.getElementsByTagName("script")[0],v,y=false,D=function(){x.src="";x.onerror=x.onload=x.onreadystatechange=null;x.parentNode.removeChild(x);x=null;a("_eventInactived");B()};if(C){v=setTimeout(function(){D()},C)}x.type=A||"text/javascript";x.async=w;x.onload=x.onreadystatechange=function(G,F){if(!y&&(!x.readyState||/loaded|complete/.test(x.readyState))){y=true;if(C){clearTimeout(v)}x.src="";x.onerror=x.onload=x.onreadystatechange=null;x.parentNode.removeChild(x);x=null;if(!F){setTimeout(function(){E()},200)}}};x.onerror=function(H,G,F){if(C){clearTimeout(v)}D();return true};x.src=u;z.parentNode.insertBefore(x,z)};a("_eventPreload");m(h);n(r,"text/javascript",false,3000)})(this,this.document,"className","jf-loading","jf-active","jf-inactive","//d3gc6cgx8oosp4.cloudfront.net/js/stable/v/5.0.0/id/181564582903");
*/
$(document).ready(function(){ 
  var banner_timer,_banner_speed=5000,_banner_roll_speed=2000;
  $(window).resize(function(){
    check_menu_arrow();
    check_cat_pos();  
  });
  $('#main_menu_wrap,#cat_menu_panel').scroll(function(){
    check_menu_arrow();
  });
  $(window).scroll(function(){
    var _st=$(this).scrollTop();
		if(_st>0){
			$('#header_wrap, #main_panel').addClass('scroll');
		}else{
			$('#header_wrap, #main_panel').removeClass('scroll');
		}
    //$('#page_banner').css('background-position','50% '+(50+parseFloat(_st/30))+'%');
    check_cat_pos();  
	});
  $(document).on('mousewheel','#cat_menu_panel,#main_menu_wrap',function(e, delta) {
		this.scrollLeft -= (delta * 40);
		e.preventDefault();
	}); 
  check_menu_arrow();
  $(window).scroll();
  $('#cat_menu').stop().css({'marginLeft':50, 'opacity':0}).delay(i*100).animate({'marginLeft':0, 'opacity':1}, 500);
  $('#social_link li a, #open_cart').mouseenter(function(){ 
    $(this).children('span.mask').stop(true,true).fadeIn('fast');
    $(this).children('span.icon').stop(true,true).fadeOut('fast');               
  }).mouseleave(function(){
    $(this).children('span.mask').stop(true,true).fadeOut('fast');
    $(this).children('span.icon').stop(true,true).fadeIn('fast');               
  });
  $('#open_cart').on('touchmove touchend', function(e) {
    if (e.type == 'touchmove') {
        $.data(this, "touchmove_cancel_redirection", true );
        return;
    }    
    if (e.type == 'touchend' && !$.data(this, "touchmove_cancel_redirection")) {
        toggle_cart(event,'#open_cart');
    }
    $.data(this, "touchmove_cancel_redirection", false );
  });
  $('#back_to_top').click(function(e){
    e.preventDefault();
    $('body, html').animate({scrollTop: '0'}, 600);		    
  });
  $('.auto_mv_icon').each(function(){
    var el_id=$(this).attr('id');
    toggle_move_icon($('#'+el_id));
  });
  jconfirm.defaults = {
    title: '',
    content: '',
    boxWidth: 'auto',
    useBootstrap: false,
  };
});
var toggle_speed=300;
function viewport_change(){
  var _window_width=window.innerWidth;
  if(_window_width>=980){
    if($('#main_menu_hamburger').hasClass("toggle")){
      $('#main_menu_hamburger').removeClass("toggle");
      $('#header_wrap').removeClass('toggle');
    }
  }
}
function toggle_main_menu(event){
  if(event!=null){
    event.preventDefault();
  }                             
  if($('#main_menu_hamburger').hasClass("toggle")){
    close_main_menu(event);   
  }else{
    $('#main_menu_hamburger').addClass("toggle");
    $('#header_wrap').stop(true,true).addClass('toggle');
    $('#main_menu_wrap').scrollLeft(0);
    $('#main_menu').stop().css({'marginLeft':50, 'opacity':0}).delay(i*100).animate({'marginLeft':0, 'opacity':1}, 500);
    check_menu_arrow();
  }
  
}
function close_main_menu(event){
  if(event!=null){
    event.preventDefault();
  }
  if($('#main_menu_hamburger').hasClass("toggle")){
    $('#main_menu_hamburger').removeClass("toggle");
    $('#header_wrap').stop(true,true).removeClass('toggle');
  } 
}
function main_menu_scroll(event,_dir){
  var _delta=100,_move=0,_speed=300;
  var _sl=$('#main_menu_wrap').scrollLeft();
  if(_dir=='left'){
    _move=_sl-_delta;        
  }else if(_dir=='right'){
    _move=_sl+_delta;
  }
  $('#main_menu_wrap').animate({scrollLeft:_move},_speed,function(){
    check_menu_arrow();
  });
  
  event.preventDefault();
}
function cat_menu_scroll(event,_dir){
  var _delta=100,_move=0,_speed=300;
  var _sl=$('#cat_menu_panel').scrollLeft();
  if(_dir=='left'){
    _move=_sl-_delta;        
  }else if(_dir=='right'){
    _move=_sl+_delta;
  }
  $('#cat_menu_panel').animate({scrollLeft:_move},_speed,function(){
    check_menu_arrow();
  });
  
  event.preventDefault();
}
function check_menu_arrow(){  
  var menu_width=0;
  var cat_menu_width=0;
  $('#main_menu li').each(function(){
    menu_width+=$(this).width()+20;
  });
  if($('#main_menu_wrap').width() <  menu_width){
    var el=document.getElementById("main_menu_wrap");
    var maxScrollLeft =el.scrollWidth - el.clientWidth-5;
    
    _left=$('#main_menu_wrap').scrollLeft();
    
    if(_left==0){
      $('#header_panel .scroll_menu.left').stop(true,true).fadeOut('fast');
    }else{
      $('#header_panel .scroll_menu.left').stop(true,true).fadeIn('fast');
    }
    if(_left>=maxScrollLeft){
      $('#header_panel .scroll_menu.right').stop(true,true).fadeOut('fast');
    }else{
      $('#header_panel .scroll_menu.right').stop(true,true).fadeIn('fast');
    }
  }else{
    $('#header_panel .scroll_menu').stop(true,true).fadeOut('fast');
  }
  
  $('#cat_menu li').each(function(){
    cat_menu_width+=$(this).width()+20;
  });
  if($('#cat_menu_panel').width() <  cat_menu_width){
    var el=document.getElementById("cat_menu_panel");
    var maxScrollLeft =el.scrollWidth - el.clientWidth-5;
    
    _left=$('#cat_menu_panel').scrollLeft();
    
    if(_left==0){
      $('#cat_menu_wrap .scroll_menu.left').stop(true,true).fadeOut('fast');
    }else{
      $('#cat_menu_wrap .scroll_menu.left').stop(true,true).fadeIn('fast');
    }
    if(_left>=maxScrollLeft){
      $('#cat_menu_wrap .scroll_menu.right').stop(true,true).fadeOut('fast');
    }else{
      $('#cat_menu_wrap .scroll_menu.right').stop(true,true).fadeIn('fast');
    }
  }else{
    $('#cat_menu_wrap .scroll_menu').stop(true,true).fadeOut('fast');
  }  
}
function check_cat_pos(){
  var _st=$(window).scrollTop();
  var _window_width=window.innerWidth;
  if(_window_width>=1024){
    if(_st>=320){
      $('#cat_menu_wrap').removeClass('attach').css('top',"");
      $('#cart_panel').addClass('scroll');
    }else{
      if($('#page_banner').size()){
        $('#cat_menu_wrap').addClass('attach').css('top',(435-_st)+'px');
      }
      $('#cart_panel').removeClass('scroll');
    }
  }else{
    $('#cat_menu_wrap').removeClass('attach').css('top',"");
  } 
}
//use id for each moving icon timer 
var moving_icon_timer=[];               
function toggle_move_icon(target){
  var status=target.data('moving');

  var target_id=target.attr('id');
  if(!status){
    //start animate when stopped
    target.data('moving',true);
    var _width=target.width();
    var _height=target.height();
    var _cols=target.data('cols');
    var _rows=target.data('rows');
    var _total_num=target.data('total');
    var _speed=target.data('speed');
    var _top,_left,counter=0,row=0,col=0;
      
    moving_icon_timer[target_id]=setInterval(function(){                           
      _top=(-1)*row*_height;        
      _left=(-1)*col*_width;
      target.css('background-position',_left+'px '+_top+'px ');         
      col++;
      counter++; 
      
      if(col%_cols==0){
        //next row and reset col
        row++;
        col=0;
      } 
      if(counter==_total_num){
        //restart animation
        row=0;
        col=0;
        counter=0;
      }
    },_speed);
    
  }else{
    //stop animation when moving
    clearInterval(moving_icon_timer[target_id]);
    target.data('moving',false); 
  }
}
function start_loading()
{
  $("#loading_panel").stop(true,true).fadeIn('fast');
}
function end_loading()
{
  
  setTimeout(function(){
    $("#loading_panel").fadeOut('fast');
  },300);
}
function alert_w_focus(_type,_content,_target){
  $.alert({type:_type, content: _content,
    buttons:{
      ok:{
        text:'確定',
        action: function (){
          if(_target!=''){
            $(_target).focus();
          }                       
        }
      }
    }
  });
}
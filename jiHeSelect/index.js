/**
 * create by Eccentric
 */

var jiHeSelect={
  addSelect:addSelect,
}

/**
 * class:td类
 * array：hash表[{key:'',value:''}]
 * [addSelect description]
 * @param {[type]} class [description]
 * @param {[type]} array [description]
 */
function addSelect(id,array,bacKFn){
      var _hash={};
      for(v in array){
        _hash[array[v].key]=array[v].value;
      }
      $('#'+id).append('<img src="../setCoupons/images/icon.jpg"/>')
      $('#'+id).click(function(e){
          e.stopImmediatePropagation();
        var _this=$(this);
      var selectId=id+'Menu';
      if($('#'+selectId).length){
        $('#'+selectId).remove();
      }else{
        var width=$(this).css('width');
        var X=$(this).offset().left;
        var Y=$(this).offset().top;
        var div=$('<div id="'+selectId+'"></div>');
        div.css({
          'position':'absolute',
          'margin-left':X+1,
          'margin-top':Y+6,
          'width':width,
          'background-color':'white',
          'border':'1px solid #d8d8d8',
          'text-align':'center',
          '-webkit-box-shadow': '0 0 1px black',
          '-moz-box-shadow':'0 0 1px black',
          'box-shadow':'0 0 1px black'
        }).click(function(e){
          e.stopImmediatePropagation();
        });
        for(v in array){
          div.append('<p>'+array[v].key+'</p>');
        }
        div.children('p').css({
          'padding':'20px',
          'margin':'0'
        }).hover(function() {
          $(this).css('background-color','#f2f2f2');
        }, function() {
          $(this).css('background-color','white');
        }).click(function(){
          _this.text($(this).text());
          _this.append('<img src="../setCoupons/images/icon.jpg"/>')
           bacKFn(_hash[$(this).text()]);
          $('#'+selectId).remove();
        })

          $('body').prepend(div);
          $(document).click(function(event) {
            $('#'+selectId).remove();
          });

      }
})
}

$(function(){
	function getFormatDate(date){
		var year = date.getFullYear();
		var month =(1+date.getMonth());
		month = month >=10 ?month : '0' +month;
		var day = date.getDate();
		day = day>=10 ? day:'0'+day;
		return year + '-' +month +'-'+day;
	}
var minday=new Date();

	minday.setDate(minday.getDate()+7);
	min = getFormatDate(minday);
	$("#startday").attr("min",min);
	
	
	var howlong=$("#howlong").val();
	
	$("#howlong").change(function(){
		howlong = $(this).val();
	})
	var startday=new Date();
		$("#startday").change(function(){
		 startday= new Date($(this).val());
	
		
	})
	
	
	$("#inputmoney").keyup(function(){
		let fmoney=$("#inputmoney").val();
		var susu3=fmoney*0.03+(fmoney*0.03)*0.1;
		var susu5=fmoney*0.05+(fmoney*0.05)*0.1;
		var susu=susu3+susu5;
		var total=fmoney-susu;
	$("#paysusu").text(susu3+"원");
	$("#platsusu").text(susu5+"원");
	$("#totalsusu").text(susu+"원");
	$("#expect").text(total+"원");
	})

  
	$("#back").on("click", function () {
    history.back();
  });  


$("#next").on("click",function(){
	var startdate =getFormatDate(startday);
	$("#prStartday").attr("value",startdate);
	startday.setDate(startday.getDate()+parseInt(howlong));
	var enddate = getFormatDate(startday);
	$("#prEndday").attr("value",enddate);
	
})
var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");
$(document).ajaxSend(function(e, xhr, options) { xhr.setRequestHeader(header, token); });

function readInputFile(input) {
    if(input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#img').attr("src",e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
 



$('#summernote').summernote({
				height : 300,
				minHeight : null,
				maxHeight : null,
				toolbar: [
				    // [groupName, [list of button]]
				    ['fontname', ['fontname']],
				    ['fontsize', ['fontsize']],
				    ['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
				    ['color', ['forecolor','color']],
				    ['table', ['table']],
				    ['para', ['ul', 'ol', 'paragraph']],
				    ['height', ['height']],
				    ['insert',['picture','link','video']],
				    ['view', ['fullscreen', 'help']]
				  ],
				fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New','맑은 고딕','궁서','굴림체','굴림','돋움체','바탕체'],
				fontSizes: ['8','9','10','11','12','14','16','18','20','22','24','28','30','36','50','72'],
			
				callbacks : {
					onImageUpload : function(files,editor,welEditable) {
						editor=this;
						let file = files[0];
						let form = new FormData();
						form.append("file", file);
						
						$.ajax({
								data: form,
         						type: "POST",
         						url: "/project/summeruploading",
							contentType : false,
							processData : false,
							enctype : 'multipart/form-data',
							 beforeSend: function (jqXHR, settings) {
		                     let header = $("meta[name='_csrf_header']").attr("content");
		                     let token = $("meta[name='_csrf']").attr("content");
		                     jqXHR.setRequestHeader(header, token);
				         }
						}).done(function(resp){
							setTimeout(function() {
								$(editor).summernote("insertImage", "/static/images/summernoteuploading/"+resp);
							},3200);
						})
					}
				}
				});
				
				$("#imgform").on("change",function(){
					if (this.files && this.files[0].size > (10 * 1024 * 1024)) {
        			alert("10MB 이하의 파일을 업로드 해주세요!");
       				 this.value = null;
    				}else{
	 					readInputFile(this);
}
				})


	$("#popularPro").on("click",function(){
		$("#f1").submit();
	})
	
	$("#newPro").on("click",function(){
		$("#f2").submit();
	})
	
	$("#closePro").on("click",function(){
		$("#f3").submit();
	})

		$("#game").on("click",function(){
		typeStr = $(this).text();
		keywordStr = $(this).text();
		
		$("#f5").find("[name='type']").val(typeStr);
		$("#f5").find("[name='keyword']").val(keywordStr);
		$("#f5").submit();
	})
	
	$("#perfume").on("click",function(){
		typeStr = $(this).text();
		keywordStr = $(this).text();
		
		$("#f5").find("[name='type']").val(typeStr);
		$("#f5").find("[name='keyword']").val(keywordStr);
		$("#f5").submit();
	})
	
	$("#design").on("click",function(){
		typeStr = $(this).text();
		keywordStr = $(this).text();
		
		$("#f5").find("[name='type']").val(typeStr);
		$("#f5").find("[name='keyword']").val(keywordStr);
		$("#f5").submit();
	})
	
	$("#knowledge").on("click",function(){
		typeStr = $(this).text();
		keywordStr = $(this).text();
		
		$("#f5").find("[name='type']").val(typeStr);
		$("#f5").find("[name='keyword']").val(keywordStr);
		$("#f5").submit();
	})
	
	$("#trend").on("click",function(){
		typeStr = $(this).text();
		keywordStr = $(this).text();
		
		$("#f5").find("[name='type']").val(typeStr);
		$("#f5").find("[name='keyword']").val(keywordStr);
		$("#f5").submit();
	})
	
	$("#publishing").on("click",function(){
		typeStr = $(this).text();
		keywordStr = $(this).text();
		
		$("#f5").find("[name='type']").val(typeStr);
		$("#f5").find("[name='keyword']").val(keywordStr);
		$("#f5").submit();
	})
	
	$("#media").on("click",function(){
		typeStr = $(this).text();
		keywordStr = $(this).text();
		
		$("#f5").find("[name='type']").val(typeStr);
		$("#f5").find("[name='keyword']").val(keywordStr);
		$("#f5").submit();
	})
	
	$("#animal").on("click",function(){
		typeStr = $(this).text();
		keywordStr = $(this).text();
		
		$("#f5").find("[name='type']").val(typeStr);
		$("#f5").find("[name='keyword']").val(keywordStr);
		$("#f5").submit();
	})

})

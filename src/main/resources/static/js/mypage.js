$(function () {
	


	$(".navlinkQ").on("click",function(){
		
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

    $(function(){
        	$("#pills-donated-tab").on("click",function(){
        		alert("?????? ?????? ????????? ???????????????.");
        	})
        	
        	
        	
        })


    $("#PromodifyScroll").on("click", function () {

        if($(".fileUploadClass").is(":hidden")){
        $(".fileUploadClass").slideDown('fast',function(){
            $(".fileUploadClass").css("display", "inline-block")
        })}else{
            $(".fileUploadClass").slideUp('fast',function(){
                $(".fileUploadClass").css("display", "none")
            })}

        if($("#origin img").is(":hidden")){
        $("#origin img").slideDown('fast',function(){
            $("#origin img").css("display", "inline-block")
        })}else{
            $("#origin img").slideUp('fast',function(){
                $("#origin img").css("display", "none")
            })}


         if($("#uploadDesc span").is(":visible")){
            $("#uploadDesc span").slideDown('fast',function(){
            $("#uploadDesc span").css("display", "none");
        })}else{
            $("#uploadDesc span").slideUp('fast',function(){
            $("#uploadDesc span").css("display", "inline-block");
        })}
        if($("#profileSaveBtn").is(":visible")){
            $("#profileSaveBtn").slideUp('fast',function(){
            $("#profileSaveBtn").css("display", "none")
        })}else{
            $("#profileSaveBtn").slideDown('fast',function(){
            $("#profileSaveBtn").css("display", "inline-block")
        })}

        // if($(".fileUploadClass").is(":visible")){
        //     $(".fileUploadClass").css("display", "none");
        // }else{
        //     $(".fileUploadClass").css("display", "inline-block");
        // }

        // if($("#uploadDesc span").is(":visible")){
        //     $("#uploadDesc span").css("display", "none");
        // }else{
        //     $("#uploadDesc span").css("display", "inline-block");
        // }
        // if($("#profileSaveBtn").is(":visible")){
        //     $("#profileSaveBtn").css("display", "none")
        // }else{
        //     $("#profileSaveBtn").css("display", "inline-block")
        // }

    })

    $("#nameModifyScroll").on("click", function () {

        if($("#nameNBlank").is(":visible")){
                $("#nameNBlank").slideUp('fast',function(){
                    $("#nameNBlank").css("display", "none");
                })}else{
                    $("#nameNBlank").slideDown('fast',function(){
                    $("#nameNBlank").css("display", "inline-block");
                })}
    //   if($("#userName").is(":visible")){
    //     $("#userName").slideUp('slow',function(){
    //         $("#userName").css("display", "none");
    //     })}else{
    //         $("#userName").slideDown('slow',function(){
    //         $("#userName").css("display", "inline-block");
    //     })}

    //     if($(".Namesavebutton").is(":visible")){
    //         $(".Namesavebutton").slideUp('slow',function(){
    //         $(".Namesavebutton").css("display", "none");
    //     })}else{
    //         $(".Namesavebutton").slideDown('slow',function(){
    //         $(".Namesavebutton").css("display", "inline-block");
    //     })}

    })
    $("#emailModifyScroll").on("click", function () {
     
        if($("#emailblankNButton").is(":visible")){
            $("#emailblankNButton").slideUp('fast',function(){
                $("#emailblankNButton").css("display", "none");
            })}else{
                $("#emailblankNButton").slideDown('fast',function(){
                $("#emailblankNButton").css("display", "inline-block");
            })}


    })
    $("#pwModifyScroll").on("click", function () {

        if($("#pwblankNButton").is(":visible")){
            $("#pwblankNButton").slideUp('fast',function(){
                $("#pwblankNButton").css("display", "none");
            })}else{
                $("#pwblankNButton").slideDown('fast',function(){
                $("#pwblankNButton").css("display", "inline-block");
            })}

    })

    $("#contactModifyScroll").on("click", function () {


        if($("#contactblankNButton").is(":visible")){
            $("#contactblankNButton").slideUp('fast',function(){
                $("#contactblankNButton").css("display", "none");
            })}else{
                $("#contactblankNButton").slideDown('fast',function(){
                $("#contactblankNButton").css("display", "inline-block");
            })}
        })



/*$("#searchAddress").on("click",function(){
	
	 new daum.Postcode({
            oncomplete: function(data) {
                let roadAddr = data.roadAddress; // ????????? ?????? ??????
                // ??????????????? ?????? ????????? ?????? ????????? ?????????.
               $("#postCode").attr('value', data.zonecode);
                $("#addressScope").attr('value',roadAddr);
                
            }
        }).open();//????????? ???????????? ???????????????
        

*/


			$("#Namesavebutton")
								.on(
										"click",
										function() {
	
											let modifyId = $("#userName").val();
	
											if (modifyId == "") {
	
												alert("????????? ????????? ??????????????????.")
	
											} else {
	
												$
														.ajax({
															type : 'POST',
															url : '/member/auth/nameUpdate/'
																	+ modifyId,
															data : JSON.stringify({
																uname : modifyId
															}),
															contentType : "application/json",
															beforeSend : function(
																	jqXHR, settings) {
																let header = $(
																		"meta[name='_csrf_header']")
																		.attr(
																				"content");
																let token = $(
																		"meta[name='_csrf']")
																		.attr(
																				"content");
																jqXHR
																		.setRequestHeader(
																				header,
																				token);
															},
															success : function(data) {
															
																alert("?????? ??????");
																location.reload();
	
															},
															error : function(
																	request,
																	status, error) {
																alert("????????? ???????????????. ?????? ????????? ??????????????????."); // ?????? ??? ??????
	
															}
	
														})
	
											}
										})
	
						$("#contactVertify").on("click",function() {
	
											/*?????? ?????????????*/
											let modifyContact = $("#contact").val();
	
											if (modifyContact == "") {
	
												alert("????????? ????????? ??????????????????.")
	
											} else {
	
												$
														.ajax({
															type : 'POST',
															url : '/member/auth/uphoneUpdate/'
																	+ modifyContact,
															data : JSON
																	.stringify({
																		uphone : modifyContact
																	}),
															contentType : "application/json",
															beforeSend : function(
																	jqXHR, settings) {
																let header = $(
																		"meta[name='_csrf_header']")
																		.attr(
																				"content");
																let token = $(
																		"meta[name='_csrf']")
																		.attr(
																				"content");
																jqXHR
																		.setRequestHeader(
																				header,
																				token);
															},
															success : function(data) {
																	
																alert("?????? ??????");
																location.reload();}
															,
															error : function(
																	request,
																	status, error) {
																alert("????????? ???????????????. ?????? ??????????????????."); // ?????? ??? ??????
	
															}
	
														})
	
											}
										})
										/* ???????????? ?????? */
							 	$("#pwSaveBtn").on("click",function() {
	
											let modifyPw1= $("#repw1").val();
											let modifyPw2 = $("#repw2").val();
										
											
											
											if(modifyPw1===modifyPw2) {
	
									
												$.ajax({
															type : 'POST',
															url : '/member/auth/pwModify',
															data : JSON
																	.stringify({"modifyPw1":modifyPw1}),
															contentType : "application/json; charset=UTF-8",
															beforeSend : function(
																	jqXHR, settings) {
																let header = $(
																		"meta[name='_csrf_header']")
																		.attr(
																				"content");
																let token = $(
																		"meta[name='_csrf']")
																		.attr(
																				"content");
																jqXHR
																		.setRequestHeader(
																				header,
																				token);
															},
															success : function(data) {
																if(data==="success"){
																alert("?????? ??????");
																location.reload();
																}else{
																alert("?????? ??????");
																return false;
																}
																}
	
														})
	
											}
											else if (modifyPw1!=modifyPw2) {
	
												alert("??????????????? ??????????????? ??????????????????.");
												return false;
											}else if((modifyPw1=="")||((modifyPw2)=="")){
												

												alert("??????????????? ???????????????.");
												 return false;
											}
										}) 
$("#searchAddress").on("click",function(){
	
	 new daum.Postcode({
            oncomplete: function(data) {
                let roadAddr = data.roadAddress; // ????????? ?????? ??????
                // ??????????????? ?????? ????????? ?????? ????????? ?????????.
               $("#postCode").attr('value', data.zonecode);
                $("#addressScope").attr('value',roadAddr);
                
            }
        }).open();//????????? ???????????? ???????????????
})
        
											$("#modifyComp").on("click",function(){
												var realName=$("#inputReceiverName").val();
												var uphone=$("#inputReceiverContact").val();
												var address1=$("#addressScope").val();
												var postcode=$("#postCode").val();
												var address2=$("#addressDetail").val();
												
												var obj ={"realName":realName,"uphone":uphone, "address1":address1,"postcode":postcode,"address2":address2}
												
												if((realName=="")||(uphone=="")||(address1=="")||(postcode=="")||(address2=="")){
													alert("???????????? ?????? ???????????????.")
													
												}else{
													
													$.ajax({
													type : 'POST',
													url : '/member/auth/addressUpdate',
											data : JSON.stringify({"realName":realName,"uphone":uphone, "address1":address1,"postcode":postcode,"address2":address2}),
												contentType : "application/json",
												beforeSend : function(
												jqXHR, settings) {
												let header = $("meta[name='_csrf_header']").attr("content");
												let token = $("meta[name='_csrf']").attr("content");
												jqXHR.setRequestHeader(header,token);
											},success : function(data) {
												alert("?????? ??????");
											location.reload();}
											
											,error : function(request,status, error) {
											alert("????????? ?????? ??????????????? ??????????????????."); // ?????? ??? ??????
											}
											})
												
											}
											
											})
											
											function readInputFile(input) {
												if (input.files && input.files[0]) {
													var reader = new FileReader();
													reader.onload = function(e) {
														$('#imgsrc').attr("src", e.target.result);
													}
													reader.readAsDataURL(input.files[0]);
												}
											}

											$("#filebtn").on('change', function() {
												$("#origin").hide();
												
												readInputFile(this);
											});


    
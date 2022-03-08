$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    //  adding logi form on click login button


    $('#login').click(function(){
        $('.loginForm').addClass('popup');
       
    });


      // on mainwindow button click

    $('#mainbt').click(function(){
        $('.loginForm').addClass('popup');
   
    });

    // to open registration page
 
   $('#register').click(function(){
        $('.registration-form').addClass('popup');
       });
   

   // to close login page


    $('.cross1').click(function(){
        $('.login-form').removeClass('popup');
    
    });

    // to close registration page

     $('.cross2').click(function(){
        $('.registration-form').removeClass('popup');
        $('.loginForm').addClass('popup');

    });


     // Dark-Mode
         var content = document.getElementsByTagName('body')[0];
            var darkMode = document.getElementById('dark-change');
            darkMode.addEventListener('click', function(){
                darkMode.classList.toggle('active');
                content.classList.toggle('night');
            })


    
// email validtion

// disable login button

    $("#Loginbt").prop('disabled', true); 
 // variable for login email validation

    var valid=false; 

    // keyup function started

        $("#e-mail").keyup(function () {    
        var inputvalues = $(this).val();  

        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    

        if(!regex.test(inputvalues)){    
        $("#validEmail").html("invalid email id")  ;    
         $("#validEmail").css("color","red");
         valid=false;         
         }
         else{
             $("#validEmail").html("valid email id") ;
            $("#validEmail").css("color","green");      
             valid=true;
         }  

         });  
    // keyup function for login email has been ended
         
           //<========== password validation for login=============>



      // keyup function started for email password
       var pvalid=false;
       $("#password").keyup(function(){
              var pvalue =$(this).val();
              var pLength=pvalue.length
            if(pvalue!=null &&  pLength>=8){
            $("#validPass").html("correct password ") ;
            $("#validPass").css("color","green");
            pvalid=true;
            }
            else if(pvalue==null || pLength<8){
                 pvalid=false;
                   $("#validPass").html("wrong password") ;
                   $("#validPass").css("color","red");
                   
            }
        });


   // checking that email and password are valid or not on mouseout function on password 

       $("#password").mouseout(function(){
               
                 if(pvalid==true && valid==true){
                    // enable  buttonb
                $("#Loginbt").prop('disabled', false);
            }
                else{
                    // disable buttom
                    $("#Loginbt").prop('disabled', true);
                
               }
            });



        // registration form

       // var calid2 for register emeil
        var valid2=false;  
        // password var for P validation
        var P=false;
        // password var for M matching 
        var M=false;
        // for number validation 
        var N=false;
        // var for usertname emil id
        var userName="";


      $("#registerbt").prop('disabled', true);

      // <-=========register emil validtion===========>

        $("#e-mail2").keyup(function () {    
        var inputvalues2 = $(this).val(); 
        userName=inputvalues2; 
        var regex2 = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
        if(!regex2.test(inputvalues2)){    
        $("#validEmail2").html("invalid email id")  ; 
            $("#validEmail2").css("color","red");   
             valid2=false;         
         }
         else{
             $("#validEmail2").html("valid email id") ;
              $("#validEmail2").css("color","green");
              valid2=true;  
         }         
     });

        // number validation starts
        
        $("#number").keyup(function(){
            var count=$(this).val().length;
            
            if(count==10){
                N=true;
                $("#num").html("valid number");
                $("#num").css("color","green");

            }
            else{
                N=false;
                $("#num").html("invalid number");
                $("#num").css("color","red");
            }
        });
    

    
    // <<<<<<<====STRONG PASSWORD VALIDATIONS STARTS===============>>>>>>>>>>

        $("#password1").keyup(function(){
        password=$(this).val()
        var strength = 0  
        if (password.length < 6) {  
            $("#strongPass").css("color","red")
            $("#strongPass").html('Too short' ); 
             P=false;
        }  
        if (password.length > 7) strength += 1  
        // If password contains both lower and uppercase characters, increase strength value.  
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1  
        // If it has numbers and characters, increase strength value.  
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1  
        // If it has one special character, increase strength value.  
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1  
        // If it has two special characters, increase strength value.  
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1  
        // Calculated strength value, we can return messages  
        // If value is less than 2  
        if (strength < 2) { 
        $("#strongPass").html('weak password' ); 
        $("#strongPass").css("color","red");
            P=false; 
                // here pass word is too weak no valid 
        } else if (strength == 2) {  
            $("#strongPass").html("good password" );
            $("#strongPass").css("color","orange")
                P=true;

        } else {  
             $("#strongPass").html("Strong password" );
             $("#strongPass").css("color","green")
               P=true;
        }  
    }); 

        // <===============match password==============>

        $("#password2").keyup(function(){
            var a=$(this).val();
            var b=$("#password1").val();
            if(a==b && a!=""){
                $("#passMatch").html("password  match");
                 $("#passMatch").css("color","green")
                 M=true;
            }
            else{
                $("#passMatch").html("password does not match");
                 $("#passMatch").css("color","red")
                  M=false;
            }
        })

        // <============FULL DATA IS VALID FOR RESISTERATION   CHECK FUNCTION START======>

        $("#password2").mouseout(function(){
            if(valid2==true && P==true && M==true && N==true){
                // enable button
                $("#registerbt").prop('disabled', false);
            }
            else{
                // disable button
                $("#registerbt").prop('disabled', true);
            }
        }) 



        // \<===========ALERT TO verify that user is successfully register============>

        $("#registerbt").click(function(){
            alert(userName +" register successfully");
             $('.registration-form').removeClass('popup');

        })

    // <==================  slide photos function=======>
          var slideIndex = 0;
            showSlides();

            function showSlides() {
              var i;
              var slides = document.getElementsByClassName("imagez");
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              slideIndex++;
              if (slideIndex > slides.length) {slideIndex = 1}
              slides[slideIndex-1].style.display = "block";
              setTimeout(showSlides, 3000); // Change image every 3 seconds
            }

     
                   
})
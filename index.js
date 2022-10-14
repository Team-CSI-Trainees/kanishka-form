function validation()
         {
            var username = document.getElementById('name').value;
            var number = document.getElementById('phone').value;
            var email = document.getElementById('eMail').value;
            var passwrd = document.getElementById('password').value;
            var cpassword = document.getElementById('Cpassword').value;

            // REGEX //
            var nameCheck = /^[A-Za-z. ]{3,30}$/;
            var passwordCheck = /^[0-9]{1}[!@#$%^&*]{1}[a-zA-Z0-9!@#$%^&]{8,16}$/;
            var emailCheck = /^[a-zA-Z0-9_.]{3,}[@][a-zA-Z]{3,}[.]{1}[A-Za-z.]{2,8}$/;
            var phoneCheck = /^[6789][0-9]{9}$/;

            if (nameCheck.test(username)) {
                document.getElementById('nameerror').innerHTML = " ";
            }
            else {
                document.getElementById('nameerror').innerHTML = "*INVALID NAME";
                return false;
            }
            if (emailCheck.test(email)) {
                document.getElementById('eMailerror').innerHTML = " ";
            }
            else {
                document.getElementById('eMailerror').innerHTML = "*INVALID EMAIL";
                return false;
            }
            if (phoneCheck.test(number)) {
                document.getElementById('numbererror').innerHTML = " ";
            }
            else {
                document.getElementById('numbererror').innerHTML = "*INVALID NUMBER";
                return false;
            }
            if (passwordCheck.test(passwrd)) {
                document.getElementById('passworderror').innerHTML = " ";
            }
            else {
                document.getElementById('passworderror').innerHTML = "*INVALID PASSWORD";
                return false;
            }
            if (passwrd===cpassword) {
                document.getElementById('Cpasserror').innerHTML = " ";
            }
            else {
                document.getElementById('Cpasserror').innerHTML = "*PASSWORD IS NOT SAME";
                return false;
            }
        }
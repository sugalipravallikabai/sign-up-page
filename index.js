document.addEventListener('DOMContentLoaded', function() {
    let pro = document.getElementById("proo");
    let inputfile = document.getElementById("update");

    inputfile.onchange = function () {
        const objectURL = URL.createObjectURL(inputfile.files[0]);
        pro.src = objectURL;
        pro.onload = function () {
            URL.revokeObjectURL(objectURL);
        };
    };
});


function validate() {
    var name = document.getElementById("Username").value;
    var x = document.getElementById("password").value;
    var y = document.getElementById("confirmpassword").value;
    if (!x || !y) {
      alert("Passwords do not match");
      return false
    }
    if (x === y) {
      window.location.href = '/signup/hello.html?name=' + encodeURI(name)
      return true;
    } else {
      alert("Passwords do not match");
      return false;
    }
  }



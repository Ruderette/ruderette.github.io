$(document).ready(function(){
    showGraphOnLoad();
    showReleasesOnLoad();
});

function showTable(str) {
    
    if (str == "") {
        document.getElementById("tbleRelease1").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease1").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYJan.php?q="+str,true);
        xmlhttp.send();
        
    }
    if (str == "") {
        document.getElementById("tbleRelease2").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease2").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYFeb.php?q="+str,true);
        xmlhttp.send();
        
    }
    if (str == "") {
        document.getElementById("tbleRelease3").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease3").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYMar.php?q="+str,true);
        xmlhttp.send();
        
    }
    if (str == "") {
        document.getElementById("tbleRelease4").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease4").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYApr.php?q="+str,true);
        xmlhttp.send();
        
    }
    if (str == "") {
        document.getElementById("tbleRelease5").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease5").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYMay.php?q="+str,true);
        xmlhttp.send();
        
    }
    if (str == "") {
        document.getElementById("tbleRelease6").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease6").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYJun.php?q="+str,true);
        xmlhttp.send();
        
    }
    if (str == "") {
        document.getElementById("tbleRelease7").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease7").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYJJul.php?q="+str,true);
        xmlhttp.send();
        
    }
    if (str == "") {
        document.getElementById("tbleRelease8").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease8").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYAug.php?q="+str,true);
        xmlhttp.send();
        
    }
    if (str == "") {
        document.getElementById("tbleRelease9").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease9").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYSep.php?q="+str,true);
        xmlhttp.send();
        
    }
    if (str == "") {
        document.getElementById("tbleRelease10").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease10").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYOct.php?q="+str,true);
        xmlhttp.send();    
    }
    if (str == "") {
        document.getElementById("tbleRelease11").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease11").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYNov.php?q="+str,true);
        xmlhttp.send();  
    }
    if (str == "") {
        document.getElementById("tbleRelease12").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("tbleRelease12").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getTableYDec.php?q="+str,true);
        xmlhttp.send();    
    }
}


function showUser2(str, cFunction) {
      var url = "getuser.php";
      url=url+"?q="+str;
     
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            var xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

               cFunction(this);
            }
        };
        xmlhttp.open("GET",url,true);
        xmlhttp.send();
    }

    var i=1;
function myFunction2(xmlhttp) {
    
    var location ="txtHint";
    location = location+i;
    i++;
    document.getElementById(location).innerHTML =
    xmlhttp.responseText;
  }


function showReleases(str) {
    if (str == "") {
        document.getElementById("total_sales").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
                document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getrealeses.php?q="+str,true);
        xmlhttp.send();
    }
}

function showReleasesOnLoad() {
    
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
                document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getrealesesOnLoad.php?",true);
        xmlhttp.send();
    }


function showPopular(str) {
    if (str == "") {
        document.getElementById("popular_genre").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
                document.getElementById("popular_genre").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getpopular.php?q="+str,true);
        xmlhttp.send();

        
    }
}

function showPopularOnLoad(str) {
    if (str == "") {
        document.getElementById("popular_genre").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
                document.getElementById("popular_genre").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getpopular.php?q="+str,true);
        xmlhttp.send();

        
    }
}
var y = 2018;
function myFunction(x){
    y =x;
    $.ajax({
        type : 'GET',
        url : 'data.php',
        data : {'year' : y},
        success : showGraph()
    });       
    }


function showTableHidden() {
    var x = document.getElementById("TableReleases");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
}    

function showUserM(str) {
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
                //document.getElementById("total_sales").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getuserMonthly.php?r=" + str + "&y=" +y,true);
        xmlhttp.send();
        
    }
}

function showGraph()
        {
            {
                $.post("data.php?year=" +y,
                function (data)
                {
                    console.log(data);
                    var date = [];
                    var number = [];

                    for (var i in data) {
                        date.push(data[i].month2);
                        number.push(data[i].nb_of_releases);
                    }

                    var chartdata = {
                        labels: date,
                        datasets: [
                            {
                                label: 'Game Releases',
                                backgroundColor: 'yellow',
                                theme : "dark2",
                                borderColor: '#46d5f1',
                                hoverBackgroundColor: '#CCCCCC',
                                hoverBorderColor: '#666666',
                                data: number
                            }
                        ]
                    };

                    var graphTarget = $("#graphCanvas");

                    var barGraph = new Chart(graphTarget, {
                        type: 'bar',
                        data: chartdata
                    });
                });
            }    
            

        }


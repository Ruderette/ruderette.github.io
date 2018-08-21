$(document).ready(function(){
    showGraphOnLoad();
    showReleasesOnLoad();
});

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


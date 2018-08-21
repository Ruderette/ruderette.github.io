$(document).ready(function(){
    showGraphOnLoad();  
    showDtagsOnLoad();
    showDspecsOnLoad()
    showGraphOnLoad();
    showCalendar();
});





function showGraphOnLoad(){
    {  
        chartColor = "#FFFFFF";

        // General configuration for the charts with Line gradientStroke
        
        
        ctx = document.getElementById('graphCanvas').getContext("2d");
        
        gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);
        
        gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

    $.post("onLoad.php",
    function (data){
        console.log(data);
        var date = [];
        var number = [];
        for (var i in data) {
            date.push(data[i].year);
            number.push(data[i].nb_of_releases);
            }

        var chartdata = {
            labels: date,
            
            datasets: [
                {
                    label: 'Game Releases',
                    borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#1e3d60",
          pointHoverBackgroundColor: "#1e3d60",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: number
            }]
        
        
            };

        var graphTarget = $("#graphCanvas");

        var barGraph = new Chart(graphTarget, {
            type: 'bar',
            data: chartdata,
            options: {
                layout: {
                  padding: {
                    left: 20,
                    right: 20,
                    top: 0,
                    bottom: 0
                  }
                },
                maintainAspectRatio: false,
                tooltips: {
                  backgroundColor: '#fff',
                  titleFontColor: '#333',
                  bodyFontColor: '#666',
                  bodySpacing: 4,
                  xPadding: 12,
                  mode: "nearest",
                  intersect: 0,
                  position: "nearest"
                },
                legend: {
                  position: "bottom",
                  fillStyle: "#FFF",
                  display: false
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      fontColor: "rgba(255,255,255,0.4)",
                      fontStyle: "bold",
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      padding: 10
                    },
                    gridLines: {
                      drawTicks: true,
                      drawBorder: false,
                      display: true,
                      color: "rgba(255,255,255,0.1)",
                      zeroLineColor: "transparent"
                    }
        
                  }],
                  xAxes: [{
                    gridLines: {
                      zeroLineColor: "transparent",
                      display: false,
        
                    },
                    ticks: {
                      padding: 10,
                      fontColor: "rgba(255,255,255,0.4)",
                      fontStyle: "bold"
                    }
                  }]
                }
              }
            });
            });
        
    }        
}
var y = 2018;
function myFunction(x){
    y =x;
    $('#bootstrapModalFullCalendar').fullCalendar( 'gotoDate', y );
    $.ajax({
        type : 'GET',
        url : 'data.php',
        url : 'getMonth.php',
        url : 'dChartTagsYearly.php',
        url : 'dChartTagsMonthly.php',
        data : {'year' : y},
        data : {'year' : y},
        data : {'year' : y},
        success : showChart(),
        success : showDtagsYearly(),
        success : $('.stats').html( "Stats for : " + y)
        
    });       
    }
    function showStacked(){
      {  
        $('#chartContainer').html(''); //remove canvas from container
    $('#chartContainer').html('<canvas id="graphCanvas" ></canvas>');
          chartColor = "#FFFFFF";
  
          // General configuration for the charts with Line gradientStroke
          
          
          ctx = document.getElementById('graphCanvas').getContext("2d");
          
          gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
          gradientStroke.addColorStop(0, '#80b6f4');
          gradientStroke.addColorStop(1, chartColor);
          
          gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
          gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
          gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");
  
      $.post("stacked.php",
      function (data){
          console.log(data);
          var date = [];
          var number = [];
          var title = [];
          for (var i in data) {
              date.push(data[i].year);
              number.push(data[i].nb_of_releases);
              title.push(data[i].name_genre);
              }
  
          var chartdata = {
              labels: title,
              
              datasets: [
                  {
                      label: date,
                      borderColor: chartColor,
            pointBorderColor: chartColor,
            pointBackgroundColor: "#1e3d60",
            pointHoverBackgroundColor: "#1e3d60",
            pointHoverBorderColor: chartColor,
            pointBorderWidth: 1,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: number
              }, 
             
                {
                    label: title,
                    borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#1e3d60",
          pointHoverBackgroundColor: "#1e3d60",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: number
            } 
          ]
            
          
        
              };
  
          var graphTarget = $("#graphCanvas");
  
          var barGraph = new Chart(graphTarget, {
              type: 'bar',
              data: chartdata,
              options: {
                  layout: {
                    padding: {
                      left: 20,
                      right: 20,
                      top: 0,
                      bottom: 0
                    }
                  },
                  maintainAspectRatio: false,
                  tooltips: {
                    backgroundColor: '#fff',
                    titleFontColor: '#333',
                    bodyFontColor: '#666',
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                  },
                  legend: {
                    position: "bottom",
                    fillStyle: "#FFF",
                    display: false
                  },
                  scales: {
                    yAxes: [{
                      stacked: true, 
                      ticks: {
                        fontColor: "rgba(255,255,255,0.4)",
                        fontStyle: "bold",
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        padding: 10
                      },
                      gridLines: {
                        drawTicks: true,
                        drawBorder: false,
                        display: true,
                        color: "rgba(255,255,255,0.1)",
                        zeroLineColor: "transparent"
                      }
          
                    }],
                    xAxes: [{
                      stacked: true, 
                      gridLines: {
                        zeroLineColor: "transparent",
                        display: false,
          
                      },
                      ticks: {
                        padding: 10,
                        fontColor: "rgba(255,255,255,0.4)",
                        fontStyle: "bold"
                      }
                    }]
                  }
                }
              });
              });
          
      }        
  }

var m = 1;
function getMonth(x){
    m = x;
    $.ajax({
      type : 'GET',
      url : 'getMonth.php',
      url : 'dChartTagsMonthly.php',
      data : {'month' : m},
      data : {'month' : m},
      success : showChartMonthly(),
      success : showDtagsMonthly(),
      success : $('.stats').html("Stats for : " + m + " - " + y)
    });
}

function showChart(){
  {  
    $('#chartContainer').html(''); //remove canvas from container
    $('#chartContainer').html('<canvas id="graphCanvas" ></canvas>');

      chartColor = "#FFFFFF";

      // General configuration for the charts with Line gradientStroke
      
      
      ctx = document.getElementById('graphCanvas').getContext("2d");
     
      gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, '#80b6f4');
      gradientStroke.addColorStop(1, chartColor);
      
      gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

  $.post("data.php?year=" +y,
  function (data){
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
                  borderColor: chartColor,
        pointBorderColor: chartColor,
        pointBackgroundColor: "#1e3d60",
        pointHoverBackgroundColor: "#1e3d60",
        pointHoverBorderColor: chartColor,
        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,
        backgroundColor: gradientFill,
        borderWidth: 2,
        data: number
          }]
          };
          

      var graphTarget = $("#graphCanvas");

      var barGraph = new Chart(graphTarget, {
          type: 'bar',
          data: chartdata,
          options: {
            
              layout: {
                padding: {
                  left: 20,
                  right: 20,
                  top: 0,
                  bottom: 0
                }
              },
              maintainAspectRatio: false,
              tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
              },
              legend: {
                position: "bottom",
                fillStyle: "#FFF",
                display: false
              },
              scales: {
                yAxes: [{
                  ticks: {
                    fontColor: "rgba(255,255,255,0.4)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 10
                  },
                  gridLines: {
                    drawTicks: true,
                    drawBorder: false,
                    display: true,
                    color: "rgba(255,255,255,0.1)",
                    zeroLineColor: "transparent"
                  }
      
                }],
                xAxes: [{
                  gridLines: {
                    zeroLineColor: "transparent",
                    display: false,
      
                  },
                  ticks: {
                    padding: 10,
                    fontColor: "rgba(255,255,255,0.4)",
                    fontStyle: "bold"
                  }
                }]
              }
            }
          });
          });
      
  }        
}

function showChartMonthly(){
    
    $('#chartContainer').html(''); //remove canvas from container
    $('#chartContainer').html('<canvas id="graphCanvas" ></canvas>');
      chartColor = "#FFFFFF";

      // General configuration for the charts with Line gradientStroke
      
      
      ctx = document.getElementById('graphCanvas').getContext("2d");
      
      gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, '#80b6f4');
      gradientStroke.addColorStop(1, chartColor);
      
      gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

  $.post("getMonth.php?month=" + m + "&year=" +y ,
  function (data){
      console.log(data);
      var date = [];
      var number = [];
      var month =[];
      for (var i in data) {
          date.push(data[i].day);
          number.push(data[i].nb_of_releases);
          month.push(data[i].week);
          }
          

      var chartdata = {
          labels:  date, month,
           
          
          datasets: [
              {
                  label: 'Game Releases',
                  borderColor: chartColor,
        pointBorderColor: chartColor,
        pointBackgroundColor: "#1e3d60",
        pointHoverBackgroundColor: "#1e3d60",
        pointHoverBorderColor: chartColor,
        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,
        backgroundColor: gradientFill,
        borderWidth: 2,
        data: number
          }]
      
      
          };

      var graphTarget = $("#graphCanvas");

      var barGraph = new Chart(graphTarget, {
          type: 'bar',
          data: chartdata,
          options: {
            title : {
              display : true,
              fontSize : 15,
              text : m +"-"+ y 
            },
              layout: {
                padding: {
                  left: 20,
                  right: 20,
                  top: 0,
                  bottom: 0
                }
              },
              maintainAspectRatio: false,
              tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
              },
              legend: {
                position: "left",
                fillStyle: "#FFF",
                display: false
              },
              scales: {
                yAxes: [{
                  ticks: {
                    fontColor: "rgba(255,255,255,0.4)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 8,
                    padding: 10
                  },
                  gridLines: {
                    drawTicks: true,
                    drawBorder: true,
                    display: true,
                    color: "rgba(255,255,255,0.1)",
                    zeroLineColor: "transparent"
                  }
      
                }],
                xAxes: [{
                  gridLines: {
                    zeroLineColor: "transparent",
                    display: true,
      
                  },
                  ticks: {
                    padding: 10,
                    fontColor: "rgba(255,255,255,0.4)",
                    //fontStyle: "bold"
                  }
                }]
              }
            }
          });
          });         
}
  


function showCalendar() {
 var calendar = $('#bootstrapModalFullCalendar').fullCalendar({
    defaultView: 'basicWeek',
    themeSystem: 'bootstrap4',
    navLinks: true,
    selectable: true,
    firstDay: 1,
    header: {
        left: 'title',
        center: 'basicDay, basicWeek, month',
        right: 'prev,next today'
    },
    views: {
      basicDay: {
        buttonText: 'Daily'
      },
    basicWeek: {
      buttonText: 'Weekly',
      columnHeaderFormat: 'D/M'
    },
    month: {
      buttonText: 'Monthly'
    }
  },
  showNonCurrentDates : false,
    fixedWeekCount : false,
    weekNumbers: true,
    eventLimit: true,
    displayEventTime: false,
    events: {
        url: 'calendar.php',
        type: 'POST', // Send post data
        error: function() {
            alert('There was an error while fetching events.');
        }
    },
    
    eventClick:  function(event, jsEvent, view) {
            $('#modalTitle').html(event.title);
            $('#description').html(event.description);
            $('#eventUrl').attr('href', event.gameUrl);
            $('#image').attr('src', event.gameImg);
            $('#sentiment').html(event.sentiment);
            $('#price').html(event.price);
            $('#date_trial').html(event.date_trial);
            $('#developer').html(event.developer);
            $('#publisher').html(event.publisher);
            $('#genre').html(event.genre);
            $('#fullCalModal').modal('show');
            
            return false;
        }
    });
  }
  function showCalendarFilter() {
    
    var calendar = $('#bootstrapModalFullCalendar').fullCalendar({
       defaultView: 'basicWeek',
       themeSystem: 'bootstrap4',
       selectable: true,
       firstDay: 1,
       header: {
           left: 'title',
           center: 'basicWeek,agendaWeek,agendaDay, month',
           right: 'prev,next today'
       },
       views: {
       agendaWeek: {
         buttonText: 'agendaWeek'
       },
       basicWeek: {
         buttonText: 'basicWeek'
       }
     },
     
       weekNumbers: true,
       eventLimit: true,
       displayEventTime: false,
       events: {
           url: 'filterGenre.php',
           type: 'POST', // Send post data
           error: function() {
               alert('There was an error while fetching events.');
           }
       },
      
       eventClick:  function(event, jsEvent, view) {
               $('#modalTitle').html(event.title);
               $('#description').html(event.description);
               $('#eventUrl').attr('href', event.gameUrl);
               $('#image').attr('src', event.gameImg);
               $('#fullCalModal').modal('show');
               
               return false;
           }
       });
       $('#calendar').fullCalendar('refetchEvents');
    calendar.fullCalendar('refetchEvents');
  
     }

function showCalendarMonth(x){
  month = x - 1;
  var year = $("#bootstrapModalFullCalendar").fullCalendar('getDate').format('YYYY');
  var m = moment([year, month, 1]).format('YYYY-MM-DD');
  $('#bootstrapModalFullCalendar').fullCalendar('gotoDate', m );
  }

function showDtagsOnLoad(){ 
    {   
    $.post("dougnutChartTags.php",
    function (data){
        console.log(data);
        var tag = [];
        var number = [];
        for (var i in data) {
            tag.push(data[i].name_tag);
            number.push(data[i].nb);
            }

        var chartdata = {
            labels: tag,
            datasets: [
                {
                    label: 'Game Releases',
                                backgroundColor: [
                                  'yellow', 'green', 'blue', 'orange',
                                  'red', 'purple', 'grey', 'magenta',
                                  'black'
                                ],
                                theme : "dark2",
                                //borderColor: '#46d5f1',
                                //hoverBackgroundColor: '#CCCCCC',
                                //hoverBorderColor: '#666666',
                                data: number
                }
                ]
            };

        var graphTarget = $("#doughnutChart");

        var barGraph = new Chart(graphTarget, {
            type: 'doughnut',
            data: chartdata
            });
        });
    }        
}

function showDtagsYearly(){
  {   
    $('#doughnutContainer').html(''); //remove canvas from container
    $('#doughnutContainer').html('<canvas id="doughnutChart" ></canvas>');
  $.post("dChartTagsYearly.php?year=" +y,
  function (data){
      console.log(data);
      var tag = [];
      var number = [];
      for (var i in data) {
          tag.push(data[i].name_tag);
          number.push(data[i].nb);
          }

      var chartdata = {
          labels: tag,
          datasets: [
              {
                  label: 'Game Releases',
                              backgroundColor: [
                                'yellow', 'green', 'blue', 'orange',
                                'red', 'purple', 'grey', 'magenta',
                                'black'
                              ],
                              theme : "dark2",
                              //borderColor: '#46d5f1',
                              //hoverBackgroundColor: '#CCCCCC',
                              //hoverBorderColor: '#666666',
                              data: number
              }
              ]
          };

      var graphTarget = $("#doughnutChart");

      var barGraph = new Chart(graphTarget, {
          type: 'doughnut',
          data: chartdata
          });
      });
  }        
}

function showDtagsMonthly(){
  {   
    $('#doughnutContainer').html(''); //remove canvas from container
    $('#doughnutContainer').html('<canvas id="doughnutChart" ></canvas>');
  $.post("dChartTagsMonthly.php?month=" + m + "&year=" +y ,
  function (data){
      console.log(data);
      var tag = [];
      var number = [];
      for (var i in data) {
          tag.push(data[i].name_tag);
          number.push(data[i].nb);
          }

      var chartdata = {
          labels: tag,
          datasets: [
              {
                  label: 'Game Releases',
                              backgroundColor: [
                                'yellow', 'green', 'blue', 'orange',
                                'red', 'purple', 'grey', 'magenta',
                                'black'
                              ],
                              theme : "dark2",
                              //borderColor: '#46d5f1',
                              //hoverBackgroundColor: '#CCCCCC',
                              //hoverBorderColor: '#666666',
                              data: number
              }
              ]
          };

      var graphTarget = $("#doughnutChart");

      var barGraph = new Chart(graphTarget, {
          type: 'doughnut',
          data: chartdata
          });
      });
  }        
}

function showDspecsOnLoad(){ 
  {   
  $.post("dougnutChartSpecs.php",
  function (data){
      console.log(data);
      var spec = [];
      var number = [];
      for (var i in data) {
          spec.push(data[i].name_spec);
          number.push(data[i].nb);
          }

      var chartdata = {
          labels: spec,
          datasets: [
              {
                  label: 'Game Releases',
                              backgroundColor: [
                                'yellow', 'green', 'blue', 'orange',
                                'red', 'purple', 'grey', 'magenta',
                                'black'
                              ],
                              theme : "dark2",
                              //borderColor: '#46d5f1',
                              //hoverBackgroundColor: '#CCCCCC',
                              //hoverBorderColor: '#666666',
                              data: number
              }
              ]
          };

      var graphTarget = $("#doughnutChartSpec");

      var barGraph = new Chart(graphTarget, {
          type: 'doughnut',
          data: chartdata
          });
      });
  }        
}

function getGamesFilterOptions(){
  var opts = [];
  $checkboxes.each(function(){
    if(this.checked){
      opts.push(this.name);
    }
  });
  return opts;
  console.log(opts);
}

function updateCalendar(opts){
  $.ajax({
    type:"POST",
    url: "filterGenre.php",
    data :{ filterOpts : opts},
    success : function(text){
      showCalendarFilter();
      $("#calendar").fullCalendar("refetchEvents");
    }
  
  });
}

var $checkboxes = $("input:checkbox");
$checkboxes.on('change', function(){
  var opts = getGamesFilterOptions();
  updateCalendar(opts);
});



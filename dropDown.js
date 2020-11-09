
//get the som expression of the dropdown component in your form: guide[0].guide1[0].guideRootPanel[0].panel18[0].testpanel[0].dropdownlist1603989793054[0]

function createDropdown() {

var dropdown1 = window.guideBridge.resolveNode("guide[0].guide1[0].guideRootPanel[0].panel18[0].testpanel[0].dropdownlist1603989793054[0]");

var temp = new Date().getFullYear();
var year = parseInt(temp,10);
var array = [];
var i = 0;

   for (i=0;i<5;i++){

        var value = year - 1;
        var value2 = year;
        var value3 = (value + "/" + value2);
        array.push(value3)
year++;

    }
    //append the dropdown with the array
   dropdown1.items=[array[0],array[1],array[2],array[3],array[4]];
}  

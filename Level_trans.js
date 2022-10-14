document.addEventListener('DOMContentLoaded',function (){
///////////////////////////////////////////////////////////////////// Get method ///////////////////////////////////////////////////////////////////////
    document.querySelector('form').onsubmit = function (){
    fetch("https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer")
    .then(response => response.json())
    .then(data => {
        const Sensor = document.querySelector('#Sensor').value;
        document.querySelector('#Sensor').value ='';
        const Name = 'Name:' + " " + data[Sensor].name;
        const Type = 'Type:' + " " + data[Sensor].type;
        const Unit = 'Unit:' + " " + data[Sensor].unit;
        const Range = 'Range:' + " " + data[Sensor].range;
        const Plantsite = 'Plant-site:' + " " + data[Sensor]["plant-site"];
        const Value = 'Value:' + " " + data[Sensor].value;
        if(Sensor <= "3"){
            document.querySelector('#result0').innerHTML = `${Name}.`;
            document.querySelector('#result1').innerHTML = `${Type}.`;
            document.querySelector('#result2').innerHTML = `${Unit}.`;
            document.querySelector('#result3').innerHTML = `${Range}.`;
            document.querySelector('#result4').innerHTML = `${Plantsite}.`;
            document.querySelector('#result5').innerHTML = `${Value}.`;
        }
        else{
            document.querySelector('#result').innerHTML = "Error";
            
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
///////////////////////////////////////////////////////////////////// Get method ///////////////////////////////////////////////////////////////////////
    return false;
}
// }
});
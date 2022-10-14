document.addEventListener('DOMContentLoaded',function (){
    ///////////////////////////////////////////////////////////////////// Post method ///////////////////////////////////////////////////////////////////////
//     let Postpls = document.querySelector('#Postpls');
//     Postpls.addEventListener('submit',createData);
//     function createData(){
//         alert("Hello! I am an alert box!!")
//     fetch('https://midterm-exam-010723313-2022.herokuapp.com/student_post',{
//         method: 'post',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify({
//             "st_id" :document.querySelector('#new_id').value,
//             "st_name" : document.querySelector('#new_Sname').value,
//             "sensor_name" : document.querySelector('#new_name').value,
//             "sensor_type" : document.querySelector('#new_type').value,
//             "sensor_unit" : document.querySelector('#new_unit').value,
//             "sensor_value": document.querySelector('#new_value').value
//         })
//     })
//     .then(response => console.log(response))
//     .catch(error => {
//         console.log('Error:', error);
//     });
//     return false;
// }
///////////////////////////////////////////////////////////////////// Post method ///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Get method ///////////////////////////////////////////////////////////////////////
    // document.querySelector('select').onchange = function() {
    // const get_link = document.querySelector('#Links').value;
    document.querySelector('form').onsubmit = function (){
    fetch("https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer")
    .then(response => response.json())
    .then(data => {
        const Sensor = document.querySelector('#Sensor').value;
        document.querySelector('#Sensor').value ='';
        const Name = 'name:' + " " + data[Sensor].name;
        const Type = 'type:' + " " + data[Sensor].type;
        const Unit = 'unit:' + " " + data[Sensor].unit;
        const Range = 'range:' + " " + data[Sensor].range;
        const Plantsite = 'plant-site:' + " " + data[Sensor]["plant-site"];
        if(Sensor <= "3"){
            document.querySelector('#result0').innerHTML = `${Name}.`;
            document.querySelector('#result1').innerHTML = `${Type}.`;
            document.querySelector('#result2').innerHTML = `${Unit}.`;
            document.querySelector('#result3').innerHTML = `${Range}.`;
            document.querySelector('#result4').innerHTML = `${Plantsite}.`;
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
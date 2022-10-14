document.addEventListener('DOMContentLoaded',function (){
    ///////////////////////////////////////////////////////////////////// Post method ///////////////////////////////////////////////////////////////////////
    let Postpls = document.querySelector('#Postpls');
    Postpls.addEventListener('submit',createData);
    function createData(){
        alert("!!! Finally You Can Post !!!")
    fetch('https://midterm-exam-010723313-2022.herokuapp.com/student_post',{
        method: 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "st_id" :document.querySelector('#new_id').value,
            "st_name" : document.querySelector('#new_Sname').value,
            "sensor_name" : document.querySelector('#new_name').value,
            "sensor_type" : document.querySelector('#new_type').value,
            "sensor_unit" : document.querySelector('#new_unit').value,
            "sensor_value": document.querySelector('#new_value').value
        })
    })
    .then(response => console.log(response))
    .catch(error => {
        console.log('Error:', error);
    });
    return false;
}
});
///////////////////////////////////////////////////////////////////// Post method ///////////////////////////////////////////////////////////////////////
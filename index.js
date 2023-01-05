// Add your code here
const data= {

}
function submitData(name,email)
{
    data[0] = name; 
    data[1] = email;
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: 
        {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {console.log(data);})
}
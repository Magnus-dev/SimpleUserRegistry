export default class API{
    static fetchData =(url)=>new Promise((resolve, reject)=>{
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
          resolve(data);
          })
        .catch(error => {
          reject(error);
        });
    });
    static postData =( data)=>new Promise((resolve, reject)=>{
        const body = new FormData();
        body.append('firstname', data.firstname);
        body.append('lastname', data.lastname);
        body.append('email', data.email);
        body.append('phone', data.phone);
        body.append('dateOfBirth', data.dateOfBirth);
        fetch("https://api.dev-master.ninja/reactjs/smoelenboek/post", {
            method: 'POST',
            body
        })
        .then(response=> response.json())
        .then(data=>{
          resolve(data);
          })
        .catch(error => {
          reject(error);
        });
    });
    static deleteData =( id)=>new Promise((resolve, reject)=>{
      fetch("https://api.dev-master.ninja/reactjs/smoelenboek/delete/"+id, {
          method: 'DELETE'
      })
      .then(response=> response.json())
      .then(data=>{
        resolve(data);
        })
      .catch(error => {
        reject(error);
      });
  });
}
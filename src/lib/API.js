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
        body.append('date_of_birth', data.dateOfBirth);
        body.append('img', data.img);
        if(data.id !== null){
          body.append('id', data.id);
        }
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
    static putData =( data)=>new Promise((resolve, reject)=>{
      const body = new FormData();
      body.append('firstname', data.firstname);
      body.append('lastname', data.lastname);
      body.append('email', data.email);
      body.append('phone', data.phone);
      body.append('date_of_birth', data.dateOfBirth);
      body.append('id', data.id);
      body.append('img', data.img);
      fetch("https://api.dev-master.ninja/reactjs/smoelenboek/put/"+ data.id, {
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
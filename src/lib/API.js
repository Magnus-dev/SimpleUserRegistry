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
    static postData =(url, data)=>new Promise((resolve, reject)=>{
        const body = new FormData();
        body.append('field', data.field);
        fetch(url, {
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
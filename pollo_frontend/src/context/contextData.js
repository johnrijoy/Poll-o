import axios from 'axios';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store:{
      message: null,
      token: null,
      test: 'store working'
    },
    actions:{

      getTest: ()=>{
        console.log('actions working')
      },

      syncTokenFromSessionStorage:()=>{
        const token = sessionStorage.getItem("token");
        console.log("refreshin, syncing tokens")
        if (token && token != "" && token != undefined ) setStore({token: token});
      },

      login: async (email, password)=>{
        console.log('logging in');

        const opts={
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          data: JSON.stringify({
            email: email,
            password: password
          })
        };

        try{
          const resp = await axios(process.env.REACT_APP_API_SERVER+"/api/auth/create-token", opts);
          //console.log(resp.status, resp.data.access_token);
          if (resp.status !== 200){
            console.log("Error 1");
            return false;
          }

          const data = await resp.data;
          console.log("Backend data:", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ "token": data.access_token });
          return true;
        }
        catch(error){
          console.error("Error 2", error);
          throw error;
        }
      },

      register: async (email, name, password)=>{
        console.log('Registering User');

        const opts={
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          data: JSON.stringify({
            email: email,
            name: name,
            password: password
          })
        };

        try{
          const resp = await axios(process.env.REACT_APP_API_SERVER+"/api/auth/create-user", opts);
          //console.log(resp.status, resp.data.access_token);
          if (resp.status !== 200){
            console.log("Error create-user 1");
            return false;
          }

          const data = await resp.data;
          console.log("Backend data:", data);
          return true;
        }
        catch(error){
          console.error("Error creat-user 2", error);
          throw error;
        }
      },

      logout: ()=>{
        sessionStorage.removeItem("token");
        setStore({ token: null });
        console.log("tokens removed, logged out")
      },
      
      create_post: async (polldata)=>{
        console.log('Creating Post', polldata);
        const store = getStore()
        console.log(store);        
        const apidata = {
          'question':polldata.question,
          'options':JSON.stringify(polldata.options)
        };
        const opts={
          method: "POST",
          headers: {
            "Content-Type":"application/json",
            "Authorization": "Bearer "+ store.token 
          },
          data: JSON.stringify(apidata)
        };

        try{
          const resp = await axios(process.env.REACT_APP_API_SERVER+"/api/polls/createpoll", opts);
          //console.log(resp.status, resp.data.access_token);
          if (resp.status !== 200){
            console.log("Error create_post 1");
            return false;
          }

          const data = await resp.data;
          console.log("Backend data:", data);
          return true;
        }
        catch(error){
          console.error("Error create_post 2", error.code);
          return false;
        }
      }


    }
  };
};

export default getState;

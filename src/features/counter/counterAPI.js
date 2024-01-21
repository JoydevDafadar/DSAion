
export function recheckUser() {
    return new Promise(async (resolve, reject) => {
      const token = localStorage.getItem('e-commerce-token');
      const res = await fetch("https://backend-ecommerce-api.vercel.app/auth/checcck", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await res.json();
  
      resolve({data});
    });
  }
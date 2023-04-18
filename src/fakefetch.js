export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users/status") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            users: [
              { name: "Raju", status: "Online" },
              { name: "Pankaj", status: "Offline" },
              { name: "Sakshi", status: "Offline" },
              { name: "Kishore", status: "Offline" }
            ]
          }
        });
      } else if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              { name: "Color Pencils", price: 50, quantity: 40 },
              { name: "Sketchpens", price: 110, quantity: 20 },
              { name: "Erasor", price: 20, quantity: 20 },
              { name: "Sharpner", price: 22, quantity: 30 }
            ]
          }
        });
      } else if (url === "https://example.com/api/user") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            name: "Saroj",
            image:
              "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg",
            likes: 500,
            comments: 10
          }
        });
      } else {
        reject({
          status: 404,
          message: "No users Found"
        });
      }
    }, 2000);
  });
};

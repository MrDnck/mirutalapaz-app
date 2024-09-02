let User = localStorage.getItem("user");
let dataUser = User ? JSON.parse(User) : {};
dataUser.token = localStorage.getItem("token");

axios
  .post(
    "https://corsproxy.io/?https://n8n.caprover.dreamcanvas.cloud/webhook/9c28c449-4690-4fe4-98ba-5ed296d00bf6",
    dataUser
  )
  .then(function (response) {
    // Manejar la respuesta del servidor aquí
    let datas = response.data;
    console.log(response.data); // Puedes mostrar la respuesta en la consola o realizar otras acciones
    if (datas.success == true) {
      console.log("login");
    } else {
      // alert("no login");
      window.location.href = "/index.html";
    }
  })
  .catch(function (error) {
    // Manejar los errores aquí
    alert("ocurrio algun error");
    console.error(error);
  });

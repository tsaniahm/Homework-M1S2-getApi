const axios = require("axios").default;

async function getApi() {
  try {
    const response = await axios.get(
      "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.response.status);
    if (error.response.status === 404) {
      alert(` Status ${error.response.status}, API  is not Found!!!`);
    } else {
      alert(error);
    }
  }
}

const renderData = async () => {
  const getData = await getApi();
  document.getElementById("show").innerHTML = JSON.stringify(getData);
};

renderData();

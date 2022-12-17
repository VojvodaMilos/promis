async function info() {
  let data = await API.getData();
  console.log(data);
  console.log("radi");
  return data;
}

info().then((res) => console.log(res));

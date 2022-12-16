class API {
  static getData() {
    let xml = new XMLHttpRequest();

    xml.open("get", "daata.json");

    xml.onreadystatechange = function () {
      if (xml.readyState === 4 && xml.status === 200) {
        return  info(JSON.parse( xml.responseText))
      }
    };

    xml.send();
  }
}

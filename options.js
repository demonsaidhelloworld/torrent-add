function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({settings: {
    folders: document.querySelector("#folders").value,
    host: document.querySelector("#host").value,
    user: document.querySelector("#user").value,
    password: document.querySelector("#password").value
  }})
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#folders").value = result.settings.folders;
    document.querySelector("#host").value = result.settings.host;
    document.querySelector("#user").value = result.settings.user;
    document.querySelector("#password").value = result.settings.password;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.local.get("settings");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("folders").addEventListener("change", saveOptions);
document.getElementById("host").addEventListener("change", saveOptions);
document.getElementById("user").addEventListener("change", saveOptions);
document.getElementById("password").addEventListener("change", saveOptions);
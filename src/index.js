import "./style.css";

window.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch(`${process.env.BASE_URL}`, {
    method: "GET",
  });
  if (response.status == 200) {
    const data = await response.json();
    applyDataToUI(data);
  } else {
  }
});

document
  .getElementById("addExtensionButton")
  .addEventListener("click", addExtension);

function ynCheck(obj) {
  const checked = obj.checked;
  checked ? (obj.value = "Y") : (obj.value = "N");

  // API 호출 - 상태를 DB에 저장
  saveStatusToDB(obj.id, obj.value)
    .then(() => {
      console.log("상태가 DB에 저장되었습니다.");
    })
    .catch((error) => {
      console.error("API 호출 오류:", error);
    });
}

const customExtensions = [];

function addExtension() {
  const inputElement = document.getElementById("extensionInput");
  const extensionValue = inputElement.value;

  if (extensionValue.trim() !== "") {
    customExtensions.push(extensionValue);
    inputElement.value = "";

    updateExtensionOutput();
  }
}

function handleExtensionInput(event) {
  if (event.keyCode === 13) {
    addExtension();
  }
}

function updateExtensionOutput() {
  const outputElement = document.getElementById("extensionOutput");
  outputElement.innerHTML = "";

  for (let i = 0; i < customExtensions.length; i++) {
    const extension = customExtensions[i];

    const extensionElement = document.createElement("span");
    extensionElement.classList.add("extension");

    const extensionTextElement = document.createElement("span");
    extensionTextElement.classList.add("extension-text");
    extensionTextElement.textContent = extension;

    const extensionCloseElement = document.createElement("span");
    extensionCloseElement.classList.add("extension-close");
    extensionCloseElement.textContent = "X";
    extensionCloseElement.addEventListener("click", function () {
      removeExtension(i);
    });

    extensionElement.appendChild(extensionTextElement);
    extensionElement.appendChild(extensionCloseElement);
    outputElement.appendChild(extensionElement);
  }
}

function removeExtension(index) {
  const extension = customExtensions[index];

  // API 호출 - 확장자를 DB에서 삭제
  deleteExtensionFromDB(extension)
    .then(() => {
      customExtensions.splice(index, 1);
      updateExtensionOutput();
    })
    .catch((error) => {
      console.error("API 호출 오류:", error);
    });
}

// API 호출 - DB에서 데이터를 가져오는 함수
function fetchDataFromDB() {
  // 여기에 DB에서 데이터를 가져오는 API 호출 코드를 작성하세요
  // 예시: axios.get('/api/fetch-data')
  return new Promise((resolve, reject) => {
    // 가져온 데이터를 resolve()에 전달
    resolve({
      bat: "Y",
      cmd: "N",
      com: "Y",
      cpl: "N",
      exe: "Y",
      scr: "N",
      js: "Y",
      customExtensions: ["txt", "doc", "pdf"],
    });
  });
}

function applyDataToUI(data) {
  data.forEach(function (item) {
    if (item.custom_or_fixed === "fixed") {
      const checkbox = document.getElementById(item.name);
      if (checkbox && item.is_checked === 1) {
        checkbox.checked = true;
      } else if (checkbox && item.is_checked === 0) {
        checkbox.checked = false;
      }
    }
  });
}

// API 호출 - 상태를 DB에 저장하는 함수
function saveStatusToDB(id, status) {
  // 여기에 상태를 DB에 저장하는 API 호출 코드를 작성하세요
  // 예시: axios.post('/api/save-status', { id: id, status: status })
  return new Promise((resolve, reject) => {
    // API 호출 성공 시 resolve() 호출
    // API 호출 실패 시 reject() 호출
    resolve();
  });
}

// API 호출 - 확장자를 DB에서 삭제하는 함수
function deleteExtensionFromDB(extension) {
  // 여기에 확장자를 DB에서 삭제하는 API 호출 코드를 작성하세요
  // 예시: axios.delete(`/api/delete-extension/${extension}`)
  return new Promise((resolve, reject) => {
    // API 호출 성공 시 resolve() 호출
    // API 호출 실패 시 reject() 호출
    resolve();
  });
}

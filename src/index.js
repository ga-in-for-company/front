import "./style.css";

let dataToSend = {};

window.addEventListener("DOMContentLoaded", async function () {
  const checkboxNames = ["bat", "cmd", "com", "cpl", "exe", "scr", "js"];
  checkboxNames.forEach((name) => {
    const checkboxElement = document.getElementById(name);
    if (checkboxElement) {
      checkboxElement.addEventListener("click", function () {
        setCheckboxData(this);
      });
    }
  });

  const response = await fetch(`${process.env.BASE_URL}/extension`, {
    method: "GET",
  });
  if (response.status == 200) {
    const data = await response.json();
    applyDataToUI(data);
  } else {
  }
});

async function setCheckboxData(obj) {
  const checked = obj.checked;
  if (checked) {
    dataToSend[obj.name] = {
      name: obj.name,
      custom_or_fixed: "fixed",
      is_checked: 1,
    };
  } else {
    dataToSend[obj.name] = {
      name: obj.name,
      custom_or_fixed: "fixed",
      is_checked: 0,
    };
  }
  await sendExtension();
}

async function addCustomExtension() {
  const inputElement = document.getElementById("extensionInput");
  const extensionValue = inputElement.value;

  if (extensionValue.trim() !== "") {
    dataToSend[extensionValue] = {
      name: extensionValue,
      custom_or_fixed: "custom",
      is_checked: 0,
    };
    inputElement.value = "";
    updateExtensionOutput();
  }
  await sendExtension();
  async function sendExtension() {
    const response = await fetch(`${process.env.BASE_URL}/extension`, {
      method: "POST",
      body: JSON.stringify(dataToSend),
    });
    if (response.status == 200) {
      const data = await response.json();
      alert("데이터 저장 완료");
    } else {
    }
  }
}

document
  .getElementById("addExtensionButton")
  .addEventListener("click", addCustomExtension);

const customExtensions = [];

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

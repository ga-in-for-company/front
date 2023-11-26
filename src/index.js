import "./style.css";

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
  const name = obj.name;
  const checked = obj.checked;

  if (checked === true) {
    const createExtensionDto = {
      name: name,
      custom_or_fixed: "fixed",
      is_checked: 1,
    };
    await sendExtension(createExtensionDto);
  } else if (checked !== true) {
    const updateExtensionDto = {
      name: name,
      is_checked: 0,
    };
    await updateExtension(name, updateExtensionDto);
  }
}

function addCustomExtension() {
  const inputElement = document.getElementById("extensionInput");
  const extensionValue = inputElement.value.trim();

  if (extensionValue !== "") {
    const createExtensionDto = {
      name: extensionValue,
      custom_or_fixed: "custom",
      is_checked: 0,
    };
    sendExtension(createExtensionDto)
      .then(() => {
        // 성공적으로 추가된 경우
        customExtensions.push(extensionValue);
        updateExtensionOutput();
        inputElement.value = "";
      })
      .catch((error) => {
        console.error("API 호출 오류:", error);
      });
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

async function removeExtension(index) {
  const name = customExtensions[index];

  await deleteExtension(name)
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

//POST api call
async function sendExtension(createExtensionDto) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/extension`, {
      method: "POST",
      body: JSON.stringify(createExtensionDto),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      await response.json();
      alert("데이터 저장 완료");
    } else {
      // 오류 처리
    }
  } catch (error) {
    // 예외 처리
  }
}

//PUT api call
async function updateExtension(name, updateExtensionDto) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/extension/${name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateExtensionDto),
    });
    if (response.ok) {
      await response.json();
      // 업데이트된 데이터 처리
    } else {
      // 오류 처리
    }
  } catch (error) {
    // 예외 처리
  }
}

//DELETE api call
async function deleteExtension(name) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/extension/${name}`, {
      method: "DELETE",
    });
    if (response.ok) {
      // 삭제 성공 처리
    } else {
      // 오류 처리
    }
  } catch (error) {
    // 예외 처리
  }
}

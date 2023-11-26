import "./style.css";

window.addEventListener("DOMContentLoaded", async function () {
  const checkboxNames = ["bat", "cmd", "com", "cpl", "exe", "scr", "js"];
  checkboxNames.forEach((name) => {
    const checkboxElement = document.getElementById(name);
    if (checkboxElement) {
      checkboxElement.addEventListener("click", async function () {
        await setCheckboxData(this);
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
  } else {
    const createExtensionDto = {
      name: name,
      custom_or_fixed: "fixed",
      is_checked: 0,
    };
    await sendExtension(createExtensionDto);
  }
}

async function addCustomExtension() {
  const inputElement = document.getElementById("extensionInput");
  const extensionValue = inputElement.value.trim();

  if (extensionValue !== "") {
    const createExtensionDto = {
      name: extensionValue,
      custom_or_fixed: "custom",
      is_checked: 0,
    };
    await sendExtension(createExtensionDto)
      .then(() => {
        customExtensions.push(extensionValue);
        updateExtensionOutput();
        updateCountOutput();
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
  const customItems = data.filter((item) => item.custom_or_fixed === "custom");
  const customNames = customItems.map((item) => item.name);

  customExtensions.length = 0;
  Array.prototype.push.apply(customExtensions, customNames);

  updateExtensionOutput();
  updateCountOutput();
}

function updateCountOutput() {
  const outputElement = document.getElementById("countCustomExtension");
  outputElement.innerHTML = "";
  const countElement = document.createElement("span");
  countElement.textContent = `${customExtensions.length}/20`;
  outputElement.appendChild(countElement);
}

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
    }
  } catch (error) {
    console.error(error);
  }
}

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
    } else {
    }
  } catch (error) {
    console.error(error);
  }
}

async function deleteExtension(name) {
  try {
    await fetch(`${process.env.BASE_URL}/extension/${name}`, {
      method: "DELETE",
    });
    location.reload();
  } catch (error) {
    console.error(error);
  }
}

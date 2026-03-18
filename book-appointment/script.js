const schedulerForm = document.querySelector("#appointment-scheduler-form");
const dateGrid = document.querySelector("#appointment-date-grid");
const schedulerNote = document.querySelector("#scheduler-note");

function formatDateValue(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function updateSummary(field, value) {
  const target = document.querySelector(field);
  if (target) target.textContent = value;
}

function setHiddenField(name, value) {
  const input = schedulerForm?.querySelector(`input[name="${name}"]`);
  if (input) input.value = value;
}

function bindSelectableGroup(container, hiddenName, summarySelector) {
  container?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-value]");
    if (!button) return;

    container.querySelectorAll("[data-value]").forEach((item) => {
      item.classList.remove("is-selected");
    });
    button.classList.add("is-selected");

    const value = button.dataset.value || button.textContent.trim();
    setHiddenField(hiddenName, value);
    updateSummary(summarySelector, value);
  });
}

if (dateGrid) {
  const today = new Date();
  const labels = [];

  for (let index = 0; index < 10; index += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    labels.push(date);
  }

  labels.forEach((date, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `date-chip${index === 0 ? " is-selected" : ""}`;
    button.dataset.value = formatDateValue(date);

    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();

    button.innerHTML = `<small>${weekday}</small><strong>${day}</strong><small>${month}</small>`;
    dateGrid.appendChild(button);
  });

  setHiddenField("appointment_date", labels[0] ? formatDateValue(labels[0]) : "Today");
  updateSummary("#summary-date", labels[0] ? formatDateValue(labels[0]) : "Today");

  dateGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-value]");
    if (!button) return;

    dateGrid.querySelectorAll("[data-value]").forEach((item) => {
      item.classList.remove("is-selected");
    });
    button.classList.add("is-selected");

    const value = button.dataset.value || button.textContent.trim();
    setHiddenField("appointment_date", value);
    updateSummary("#summary-date", value);
  });
}

bindSelectableGroup(
  document.querySelector('[data-select-group="appointment_type"]'),
  "appointment_type",
  "#summary-type",
);

bindSelectableGroup(
  document.querySelector('[data-select-group="appointment_time"]'),
  "appointment_time",
  "#summary-time",
);

setHiddenField("appointment_type", "Refrigerator");
setHiddenField("appointment_time", "As soon as possible");
updateSummary("#summary-type", "Refrigerator");
updateSummary("#summary-time", "As soon as possible");

if (schedulerForm) {
  schedulerForm.addEventListener("submit", (event) => {
    const accessKey = schedulerForm.querySelector('input[name="access_key"]')?.value.trim();

    if (!accessKey) {
      event.preventDefault();
      if (schedulerNote) {
        schedulerNote.textContent =
          "Add your Web3Forms access key to the hidden access_key field before sending submissions.";
      }
    }
  });
}

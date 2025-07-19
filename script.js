document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".task");
    const taskInput = document.querySelector(".write");
    const timeInput = document.querySelector(".time");

    const list = document.createElement("ul");
    document.querySelector(".box").appendChild(list);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = taskInput.value.trim();
        const time = timeInput.value;

        if (!task || !time) return;

        const li = document.createElement("li");

        const taskText = document.createElement("div");
        taskText.className = "task-text";
        taskText.innerHTML = `<strong>${task}</strong><br><small>${new Date(time).toLocaleString()}</small>`;

        const actions = document.createElement("div");
        actions.className = "actions";

        const doneBtn = document.createElement("button");
        doneBtn.className = "done";
        doneBtn.textContent = "✓";
        doneBtn.onclick = () => li.classList.toggle("completed");

        const editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.textContent = "✎";
        editBtn.onclick = () => {
            taskInput.value = task;
            timeInput.value = time;
            li.remove();
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "🗑";
        deleteBtn.onclick = () => li.remove();

        actions.appendChild(doneBtn);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(taskText);
        li.appendChild(actions);
        list.appendChild(li);

        form.reset();
    });
});

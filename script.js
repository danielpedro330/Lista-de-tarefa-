// script.js

document.getElementById("add-task-btn").addEventListener("click", addTask);
document.getElementById("task-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const taskList = document.getElementById("task-list");
    
    // Criação do novo item da lista
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn">Excluir</button>
    `;
    
    // Marcar tarefa como concluída
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });
    
    // Excluir tarefa
    li.querySelector(".delete-btn").addEventListener("click", function(event) {
      event.stopPropagation(); // Evitar que a tarefa seja marcada como concluída ao clicar no botão de excluir
      taskList.removeChild(li);
    });
    
    // Adiciona o item à lista
    taskList.appendChild(li);
    
    // Limpar o campo de entrada
    taskInput.value = "";
  }
}

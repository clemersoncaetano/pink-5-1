function salvarprogresso(salvar){
    const tarefas = document.querySelectorAll("#tarefas input[type='checkbox']");
    tarefas.forEach(tarefa=>{
        localStorage.setItem(tarefa.id,tarefa.checked);
    });
    alert("progresso salvo!");
}

window.onload = () =>{
    const tarefas = document.querySelectorAll("#tarefas a href=");
    tarefas.forEach(tarefa=>{
        const estado = localStorage.getItem(tarefa.id);
        tarefa.checked = estado ==="true";
    });
}
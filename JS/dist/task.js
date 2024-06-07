//definir la clase task
export function Tarea(descripcionTarea){
    this.descripcion = descripcionTarea;
    this.completado = false;
}



//Metodo para marcar tarea completada
Tarea.prototype.tareaCompletada = function(){
    this.completado = !this.completado;
}

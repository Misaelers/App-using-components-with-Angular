import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input() task: any;
  editedTask: any;

  constructor() {
    this.editedTask = { ...this.task }; // Clonar la tarea para no modificar la original directamente
  }

  saveChanges(): void {
    // Aquí puedes implementar la lógica para guardar los cambios en la tarea
    // Por ejemplo, podrías emitir un evento con los datos editados para que el componente padre los maneje
    // this.save.emit(this.editedTask);
    // También podrías actualizar directamente los datos en el servicio o en el almacenamiento local
  }
}

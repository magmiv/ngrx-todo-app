import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TasksComponent} from "./tasks/pages/tasks/tasks.component";
import {TaskComponent} from "./tasks/pages/task/task.component";

const routes: Routes = [
  { path: "task/:id", component: TaskComponent },
  { path: "tasks", component: TasksComponent },
  { path: "**", redirectTo: "/tasks" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export class Category {
  id: number;
  iconName: string;
  color:string;
  title: string;
  todoCount: number;
  navUrl: string;
  description: string;

  constructor(id: number,
              iconName: string,
              color:string,
              title: string,
              todoCount: number,
              navUrl: string,
              description: string) {
    this.id = id;
    this.iconName = iconName;
    this.color = color;
    this.title = title;
    this.todoCount = todoCount;
    this.navUrl = navUrl;
    this.description = description;
  }
}

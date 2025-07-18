export interface Note {
  id: number;
  title: string; // Заголовок нотатки
  content: string; // Текст нотатки
  createdAt: string; // Дата створення
  updatedAt: string; // Дата останнього оновлення
  tag: string;
}
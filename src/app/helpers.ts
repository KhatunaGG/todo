import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import { TodosType } from "../app/interfaces";


export const downloadTodos = (todoContainer: TodosType[], format: "txt" | "pdf") => {
    const fileContent = todoContainer
      .map((todo) => `ID: ${todo.id}\nText: ${todo.text}\nCompleted: ${todo.completed ? "Yes" : "No"}\nColor: ${todo.color}`)
      .join("\n\n");
  
    if (format === "txt") {
      const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "todos.txt");
    } else if (format === "pdf") {
      const doc = new jsPDF();
      doc.text(fileContent, 10, 10);
      doc.save("todos.pdf");
    }
  };


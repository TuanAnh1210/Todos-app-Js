import html from "../core.js";
import { connect } from "../store.js";

function TodoItem({ todo, index, editIndex }) {
  console.log(todo);
  return html`
    <li
      class="${todo.completed && "completed"} ${editIndex === index &&
      "editing"} "
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle', ${index})"
        />
        <label ondblclick="dispatch('startEdit', ${index})"
          >${todo.title}</label
        >
        <button
          onclick="dispatch('destroy', ${index})"
          class="destroy"
        ></button>
      </div>
      <input
        class="edit"
        onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim())"
        onblur="dispatch('endEdit', this.value.trim())"
        value="${todo.title}"
      />
    </li>
  `;
}

export default connect()(TodoItem);

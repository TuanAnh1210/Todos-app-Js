import html from "../core.js";
import { connect } from "../store.js";

function Footer({ todos, filters, filter }) {
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${todos.filter(filters.active).length}</strong> item left</span
      >
      <ul class="filters">
        ${Object.keys(filters).map(
          (type) => html`
            <li>
              <a
                class="${filter === type && "selected"}"
                onclick="dispatch('switchFilter', '${type}')"
                href="#"
                >${type[0].toUpperCase() + type.slice(1)}</a
              >
            </li>
          `
        )}
      </ul>
      ${todos.filter(filters.completed).length > 0 &&
      html`<button onclick="dispatch('clearCompleted')" class="clear-completed">
        Clear completed
      </button>`}
    </footer>
  `;
}

export default connect()(Footer);

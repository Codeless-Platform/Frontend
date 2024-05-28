import Component from './Component';
import { toLowerCase } from '../../utils/mixins';
import { constant } from 'underscore';
import { style } from 'blockly/core/utils';

const type = 'table';

export default class ComponentTable extends Component {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      type,
      tagName: type,
      droppable: ['tbody', 'thead', 'tfoot'],
      row: 1,
      col: 1,
      traits: [],
    };
  }

  initialize(props: any, opts: any) {
    this.addTraits();
    super.initialize(props, opts);
    const components = this.get('components')!;
    !components.length && components.add({ type: 'tbody' });
    this.on('change:dbinput', this.setData);
    this.on('change:row change:col', this.buildTable);
    this.em.getWrapper()
      ? this.startListeningtoApi()
      : this.listenTo(this.em, 'wrapperRendered', this.startListeningtoApi);
    this.buildTable();
  }

  addTraits() {
    let traits;
    traits = [
      {
        changeProp: 1,
        type: 'number',
        label: 'Rows',
        name: 'row',
      },
      { changeProp: 1, type: 'number', label: 'Columns', name: 'col' },
    ];
    // @ts-ignore
    this.set({ traits });
  }

  buildTable() {
    const comps = this.components().models;
    while (comps.length > 0) {
      let comp = comps[0];
      comp && comp.remove();
    }

    const el = this.getEl();
    if (el) {
      el.innerHTML = '';
    }

    const components = this.get('components')!;
    let columns = this.get('col');
    let rows = this.get('row');

    const rowsToAdd = [];

    while (rows--) {
      const columnsToAdd = [];
      let clm = columns;

      while (clm--) {
        columnsToAdd.push({
          type: 'cell',
          classes: ['cell'],
          components: '<div>Insert your text here</div>',
        });
      }

      rowsToAdd.push({
        type: 'row',
        classes: ['row'],
        components: columnsToAdd,
      });
    }
    const body = {
      type: 'tbody',
      components: rowsToAdd,
      style: { width: '100% !important' },
    };

    components.add(body);
  }

  startListeningtoApi() {
    if (this.em.getWrapper()?.get('json')) {
      this.setOptionsFromApi();
    }
    this.listenTo(this.em.getWrapper(), 'change:json', this.setOptionsFromApi);
  }

  setOptionsFromApi() {
    let options: { name: string; value: string }[] = [];
    let apiLink: string | undefined = this.em.getWrapper()?.get('apilink');

    if (apiLink) {
      const lastSegment = apiLink.split('/').filter(Boolean).pop();
      if (lastSegment) {
        options.push({ name: lastSegment, value: lastSegment });
      }
    }

    const newtrait = [
      {
        type: 'select',
        name: 'dbinput',
        label: 'Content',
        placeholder: 'api for this page',
        changeProp: true,
        options: options,
      },
    ];

    if (options.length > 0) {
      this.addTrait(newtrait);
    }
  }
  setData() {
    const components = this.components().models;

    while (components.length > 0) {
      let comp = components[0];
      comp && comp.remove();
    }

    const script = `async function fetchData() {
      const res = await fetch('${this.em.getWrapper()?.get('apilink')}');
      const userData = await res.json();
      createTable(userData);
    }
    function createTable(userData) {
      const table = document.getElementById('${this.getId()}');
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
      const headers = Object.keys(userData[0]);
      const headerRow = document.createElement('tr');
      headers.forEach((headerText) => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Create table rows
      userData.forEach((user) => {
        const row = document.createElement('tr');
        headers.forEach((header) => {
          const cell = createTableCell(user[header]);
          row.appendChild(cell);
        });
        table.appendChild(row);
      });
    }

    function createTableCell(value) {
      const cell = document.createElement('td');
      if (typeof value === 'object') {
        const innerTable = document.createElement('table');
        Object.entries(value).forEach(([key, innerValue]) => {
          const innerRow = document.createElement('tr');
          const innerKeyCell = document.createElement('td');
          innerKeyCell.textContent = key;
          const innerValueCell = createTableCell(innerValue); // Recursive call
          innerRow.appendChild(innerKeyCell);
          innerRow.appendChild(innerValueCell);
          innerTable.appendChild(innerRow);
        });
        cell.appendChild(innerTable);
      } else {
        cell.textContent = value;
      }
      return cell;
    }

    fetchData();`;
    this.set('script-export', script);
  }

  static isComponent(el: HTMLElement) {
    return toLowerCase(el.tagName) === type;
  }
}

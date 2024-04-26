import { $ } from '../../common';
import { CommandObject } from './CommandAbstract';

export default {
  run(editor, sender) {
    this.sender = sender;
    function adjustScroll() {
      //@ts-ignore
      topPanel.style.overflowY = topPanel.scrollHeight > topPanel.clientHeight ? 'auto' : 'hidden';
      //@ts-ignore
      bottomPanel.style.overflowY = bottomPanel.scrollHeight > bottomPanel.clientHeight ? 'auto' : 'hidden';
    }
    if (!this.$cnt) {
      const config = editor.getConfig();
      const { Panels, DeviceManager, SelectorManager, StyleManager } = editor;
      const trgEvCnt = 'change:appendContent';
      const $cnt = $('<div class="top-panel"></div>');
      const $cntInner = $('<div></div>');
      const $cntSlm = $('<div></div>');
      const $cntSm = $('<div></div>');
      this.$cnt = $cnt;
      this.$cntInner = $cntInner;
      $cntInner.append($cntSlm);
      $cntInner.append($cntSm);
      $cnt.append($cntInner);

      // Device Manager
      if (DeviceManager && config.showDevices) {
        const devicePanel = Panels.addPanel({ id: 'devices-c' });
        const dvEl = DeviceManager.render();
        devicePanel.set('appendContent', dvEl).trigger(trgEvCnt);
      }

      // Selector Manager container
      const slmConfig = SelectorManager.getConfig();
      if (slmConfig.custom) {
        SelectorManager.__trgCustom({ container: $cntSlm.get(0) });
      } else if (!slmConfig.appendTo) {
        $cntSlm.append(SelectorManager.render([]));
      }

      // Style Manager
      this.sm = StyleManager;
      const smConfig = StyleManager.getConfig();
      const pfx = smConfig.stylePrefix;
      this.$header = $(`<div class="${pfx}header">${editor.t('styleManager.empty')}</div>`);
      $cnt.append(this.$header);

      if (smConfig.custom) {
        StyleManager.__trgCustom({ container: $cntSm.get(0) });
      } else if (!smConfig.appendTo) {
        $cntSm.append(StyleManager.render());
      }

      // Create panel if not exists
      const pnCnt = 'views-container';
      const pnl = Panels.getPanel(pnCnt) || Panels.addPanel({ id: pnCnt });

      // Add all containers to the panel
      pnl.set('appendContent', $cnt).trigger(trgEvCnt);

      // Toggle Style Manager on target selection
      const em = editor.getModel();
      this.listenTo(em, StyleManager.events.target, this.toggleSm);

      const topPanel = document.querySelector('.top-panel');
      const bottomPanel = document.querySelector('.bottom-panel');
      const resizer = document.querySelector('.resizer');

      //@ts-ignore
      topPanel.addEventListener('MutationObserver', adjustScroll);
      //@ts-ignore
      bottomPanel.addEventListener('MutationObserver', adjustScroll);

      //@ts-ignore
      resizer.addEventListener('mousedown', event => {
        event.preventDefault();
        window.addEventListener('mousemove', resize, false);
        window.addEventListener('mouseup', stopResize, false);
        function stopResize() {
          window.removeEventListener('mousemove', resize, false);
          window.removeEventListener('mouseup', stopResize, false);
        }
        //@ts-ignore
        function resize(e) {
          const newHeight = e.clientY;
          const panelHeight = ((window.innerHeight - newHeight) / window.innerHeight) * 100;
          if (panelHeight < 25 || panelHeight > 100) {
            return;
          }
          //@ts-ignore
          document.querySelector('.bottom-panel').style.flex = '0 0 ' + panelHeight + '%';
          //@ts-ignore
          em.Panels.getPanel('views-container')?.get('appendContent')[0].style.flex =
            '0 0 '.concat((100 - panelHeight).toString()) + '%';
        }
      });
    } else {
      let el = document.getElementsByClassName('sm-panel')[0];
      let el2 = document.getElementsByClassName('top-panel')[0];
      //@ts-ignore
      el.style.flex = el2.style.flex;
      //@ts-ignore
      el2.style.flex = '';
      el2.classList.remove('top-panel');
      el.classList.add('top-panel');
    }

    this.toggleSm();
  },

  /**
   * Toggle Style Manager visibility
   * @private
   */
  toggleSm() {
    const { sender, sm, $cntInner, $header } = this;
    if ((sender && sender.get && !sender.get('active')) || !sm) return;

    if (sm.getSelected()) {
      $cntInner?.show();
      $header?.hide();
    } else {
      $cntInner?.hide();
      $header?.show();
    }
  },

  stop() {
    this.$cntInner?.hide();
    this.$header?.hide();
    let el2 = document.getElementsByClassName('top-panel')[0];
    el2.classList.add('sm-panel');
  },
} as CommandObject<{}, { [k: string]: any }>;

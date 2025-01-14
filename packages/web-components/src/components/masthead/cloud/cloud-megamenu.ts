/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import settings from '../../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import C4DMegaMenu from '../megamenu';
import styles from './cloud-masthead.scss';
import { carbonElement as customElement } from '../../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';

const { prefix, stablePrefix: c4dPrefix } = settings;

/**
 * Cloud MegaMenu.
 *
 * @element c4d-cloud-megamenu
 */
@customElement(`${c4dPrefix}-cloud-megamenu`)
class C4DCloudMegaMenu extends C4DMegaMenu {
  render() {
    return html`
      <div class="${prefix}--masthead__megamenu__container">
        <div class="${prefix}--masthead__megamenu__container--row">
          <slot></slot>
        </div>
      </div>
    `;
  }

  static get stableSelector() {
    return `${c4dPrefix}--masthead__megamenu`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default C4DCloudMegaMenu;

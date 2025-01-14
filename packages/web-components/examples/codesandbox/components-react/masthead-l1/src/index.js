/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from 'react-dom';
import C4DMastheadContainer from '@carbon/ibmdotcom-web-components/es/components-react/masthead/masthead-container';
import './index.css';

const App = () => (
  <>
    <C4DMastheadContainer id="masthead-container"></C4DMastheadContainer>
    <main className="cds--content cds-ce-demo--ui-shell-content">
      <div className="cds--grid">
        <div className="cds--row">
          <div className="cds--offset-lg-3 cds--col-lg-13">
            <h2>Purpose and function</h2>
            <p>
              The shell is perhaps the most crucial piece of any UI built with Carbon. It contains the shared navigation framework
              for the entire design system and ties the products in IBM’s portfolio together in a cohesive and elegant way. The
              shell is the home of the topmost navigation, where users can quickly and dependably gain their bearings and move
              between pages.
              <br />
              <br />
              The shell was designed with maximum flexibility built in, to serve the needs of a broad range of products and users.
              Adopting the shell ensures compliance with IBM design standards, simplifies development efforts, and provides great
              user experiences. All IBM products built with Carbon are required to use the shell’s header.
              <br />
              <br />
              To better understand the purpose and function of the UI shell, consider the “shell” of MacOS, which contains the
              Apple menu, top-level navigation, and universal, OS-level controls at the top of the screen, as well as a universal
              dock along the bottom or side of the screen. The Carbon UI shell is roughly analogous in function to these parts of
              the Mac UI. For example, the app switcher portion of the shell can be compared to the dock in MacOS.
            </p>
            <h2>Header responsive behavior</h2>
            <p>
              As a header scales down to fit smaller screen sizes, headers with persistent side nav menus should have the side nav
              collapse into “hamburger” menu. See the example to better understand responsive behavior of the header.
            </p>
            <h2>Secondary navigation</h2>
            <p>
              The side-nav contains secondary navigation and fits below the header. It can be configured to be either fixed-width
              or flexible, with only one level of nested items allowed. Both links and category lists can be used in the side-nav
              and may be mixed together. There are several configurations of the side-nav, but only one configuration should be
              used per product section. If tabs are needed on a page when using a side-nav, then the tabs are secondary in
              hierarchy to the side-nav.
            </p>
          </div>
        </div>
      </div>
    </main>
  </>
);

render(<App />, document.getElementById('root'));

const l1Data = {
  title: 'Stock Charts',
  url: 'https://example.com',
  menuItems: [
    {
      title: 'Lorem ipsum dolor sit amet',
      titleEnglish: 'Lorem ipsum dolor sit amet',
      url: '',
      hasMenu: true,
      hasMegapanel: false,
      menuSections: [
        {
          heading: 'Explore',
          menuItems: [
            {
              title: 'Link 1',
              url: 'https://www.example.com',
            },
            {
              title: 'Menu dropdown item with extra long text',
              url: 'https://www.example.com',
            },
          ],
        },
      ],
    },
    {
      title: 'Link 2',
      titleEnglish: 'Link 2',
      url: 'https://example.com',
    },
    {
      title: 'Link 3',
      titleEnglish: 'Link 3',
      url: 'https://example.com',
    },
  ],
};

document.querySelector('cds-masthead-container').l1Data = l1Data;

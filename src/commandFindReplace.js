/**
 * @Author: Rodrigo Soares <rodrigo>
 * @Date:   2017-11-17T19:54:56-08:00
 * @Project: Rename It
 * @Last modified time: 2017-12-02T11:44:14-08:00
 */

import {hasSelection, parseData} from './lib/utils';
import theUI from './lib/TheUI'

export default function(context) {
  // Return if there is no selection and show message
  if (!hasSelection(context)) {
    context.document.showMessage("Rename it: You need to select at least one layer or artboard");
    return;
  }

  const data = parseData(context);
  const options = {
    identifier: "findReplace.ui",
    title: "Rename Selected Layers",
    redirectTo: "/find_replace",
    width: 480,
    height: 300
  }

  // Load UI
  theUI(context, data, options);

}
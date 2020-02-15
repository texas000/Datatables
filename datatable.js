import DataTable from 'datatables';
import './table.scss';
var data = [
  [
      "Tiger Nixon",
      "System Architect",
      "Edinburgh",
      "5421",
      "2011/04/25",
      "$3,120"
  ],
  [
      "Garrett Winters",
      "Director",
      "Edinburgh",
      "8422",
      "2011/07/25",
      "$5,300"
  ]
]

import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-buttons/js/buttons.flash';
import jsZip from 'jszip';
window.JSZip = jsZip;
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs; // This line solved the Roboto errors

$(document).ready( function () {
  $('#dataTable').DataTable({
    data: data,
    dom: 'Bfrtip',
    buttons: [
      'copy', 'pdf', 'print', 'excel'
    ]
  });
});
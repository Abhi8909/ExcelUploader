import React, { Component, Fragment } from 'react';
import { Upload, message, Button, Icon } from 'antd';

class ExcelUpload extends Component {

  constructor(props) {
    super(props);

    this.state = {

      name: 'file',
      action: '',
      oFileIn:'',
      headers: {
        authorization: 'authorization-text',
      }
    }
  }

  convert(file){
    var reader = new FileReader();

    reader.onload = function(e) {
      var data = e.target.result;
      var workbook = window.window.XLSX.read(data, {
        type: 'binary'
      });

      workbook.SheetNames.forEach(function(sheetName) {
        // Here is your object
        var XL_row_object = window.window.XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object);
        console.log(json_object);

      })

    };

    reader.onerror = function(ex) {
      console.log(ex);
    };

    reader.readAsBinaryString(file);
  }

  onChange(info) {
    let oFileIn = ''
    oFileIn = document.getElementById('my_file_input');
    if(oFileIn.addEventListener) {
        oFileIn.addEventListener('change', this.filePicked, false);
    }
  }

  filePicked(e){
     var oFile = e.target.files[0];
     var sFilename = oFile.name;
     var reader = new FileReader();
 
     reader.onload = function(e) {
         var data = e.target.result;
         var cfb = window.XLS.CFB.read(data, {type: 'binary'});
         var wb = window.XLS.parse_window.XLScfb(cfb);
         wb.SheetNames.forEach(function(sheetName) {
             var sCSV = window.XLS.utils.make_csv(wb.Sheets[sheetName]);   
             var oJS = window.XLS.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);   
              console.log(oJS)
         });
     };
    reader.readAsBinaryString(oFile);
  }

  render() {
    return (
      <div onChange ={this.onChange}>
        <input type="file" id="my_file_input" />
      </div>
    );
  }
  
}

export default ExcelUpload;
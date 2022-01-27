import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Editors(props) {
  const handleChange = (e, editor) => {
    const data = editor.getData();
    props.setState({ ...props.inputstates, discrip: data });
  };

  return (
    <div>
      <div></div>
      <label>Description with Editor: </label>
      <CKEditor
        editor={ClassicEditor}
        data={props.addData.html}
        onChange={handleChange}
      />
      <p dangerouslySetInnerHTML={{ __html: props.addData }} />
    </div>
  );
}

export default Editors;
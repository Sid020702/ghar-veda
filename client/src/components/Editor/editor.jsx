import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({ desc, setDesc }) => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <div className="my-2 py-5 px-3 w-[90%] lg:w-3/4 bg-white">
            <h1 className="px-3 my-4 sm:text-2xl text-xl lg:text-3xl font-semibold border-l-[4px] border-l-[#CABDFF] text-left w-full">Description</h1>
            <Editor
                apiKey='q35ttkmwliplzvkzkk2wv5np4ew9wtgz2rtqdyzov8gjor9p'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                onChange={() => { setDesc(editorRef.current.getContent()) }}
                init={{
                    selector: 'textarea',
                    images_upload_url: 'postAccepto.php',
                    automatic_uploads: false,
                    height: 300,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            {/* <button onClick={log}>Log editor content</button> */}
        </div>
    );
}

export default TextEditor
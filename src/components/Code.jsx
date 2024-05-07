import React from 'react'
import Editor from './Editor';
import './Code.css'
import { useContext } from 'react';
import { DataContext } from './context/DataProvider'
function Code() {

  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <>
    <div className="container">
    <Editor heading="HTML" Icon="/" color="rgb(255, 0, 0)" value={html}
    onChange={setHtml}></Editor>
     <Editor heading="CSS" Icon='*' color="rgb(41, 156, 237)" value={css} onChange={setCss} ></Editor>
     <Editor heading='JavaScript' Icon="{}" color='rgb(255, 251, 0)'  value={js} onChange={setJs}></Editor>
    </div>
  
    </>
  )
}

export default Code;

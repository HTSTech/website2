
  import { useEffect } from 'react';
  import axios from 'axios';
  import Link from 'next/link';
  import Header from "../Header/index";
  import Footer from "../Footer/index";
  
  export default function Home() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/fa46efe7-236a-403c-b329-0fd14699786f/website2/Home/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("HomeID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/fa46efe7-236a-403c-b329-0fd14699786f/website2/Home/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("HomeID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/fa46efe7-236a-403c-b329-0fd14699786f/website2/Home/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div>
        <>
          <Header />
        </>
        
        <div id='HomeID'></div>

        <>
          <Footer />
        </>
      </div>
    )
  }
import { footer } from "@/components/footer";
import { sidebar } from "@/components/sidebar";
import { createVElement } from "@/framework";
// import { backcolorfootersidebar} from "@/components/backcolorfootersidebar";

// ページ名はログイン
/* アイコン編集欄は未記入 */
export const login = createVElement(
    "div",
    { class: "backgroundColor",
      // style: "width: 100%, hight: 100%",
      background: "#D9D9D9",
      style: "margin: 0 9% 0 12%",
    },

    footer,
    sidebar,
    createVElement(
        "main", 
        { class: "main" ,
          style: "margin: 0 0 % 0",
      },
        createVElement(
          "div",
          {class: "maypagelogin",
           style: "height: 30%, background: #000000",
        },
        createVElement (
            "h1",
            {
              background: "#ffffff"
            },
            "また来てしまったんか! "
        ),
        
        createVElement(
          "div",
        { class: "wrapperin",
          height: "30%", 
          width: "100%",
          style: "display: flex,flex-direction: column " ,
      },

        createVElement(
          "h1",
          {
            style:"background: #0000000",
            height: "30%",
          },
          "ログイン"
        ),
        ),
        ),
        createVElement(
            "div",
            {class: "login"
          },
            createVElement(
                "form",
                {class: "form", 
                  id:"userform",
                  style: "display: flex, flex-direction: column, display:flex;flex-flow: column,border:2px #ccc solid,height:300px,margin:0 0 1em;"
              },
                createVElement(
                    "input",
                    {
                      type:"email",
                      name:"email",
                      placeholder:"e-mail",
                    },
                ),
                createVElement(
                    "input",
                    {
                    type:"password",
                    name:"password",
                    placeholder:"password" 
                    },
                ),
                createVElement(
                    "input",
                    { 
                    type:"submit",
                    value:"Enter",
                    style:"background: #FDFF88",
                   
                    },  
                    
            )
            
        )
    )
    ))
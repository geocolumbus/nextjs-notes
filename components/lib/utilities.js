import { renderToString } from "react-dom/server"
import format from "html-format"

const formatHTML = (html) => {
  let formattedHTML = renderToString(html)
  formattedHTML = formattedHTML.replace(/></g,">\n<")
  formattedHTML = formattedHTML.replace(/class="[^"]*"/g,"")
  formattedHTML = format(formattedHTML)
  return formattedHTML
}

export {
  formatHTML
}

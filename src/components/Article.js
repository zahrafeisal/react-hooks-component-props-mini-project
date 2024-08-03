import React from "react"; 

function Article({ title , date , preview }) {
    console.log("Rendering articles", {title, date, preview});
    const defaultDate = "January 1, 1970"
    return (
        <article>
            <h3>{ title }</h3>
            <small>{ date || defaultDate }</small>
            {/* OR will return the value of the expression that evaluates to TRUE */}
            <p>{ preview }</p>
        </article>
        )
}

export default Article;
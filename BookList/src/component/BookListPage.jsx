import React from "react";

import style from "../styles/BookListPage.module.css"

const BookListPage = () =>{
	    			<span class={style.name}> Kafka on the Shore</span>
					const booklist = ["Name of the Wind","The Wise Man's Fear","Kafka on the Shore", "The Master and the Margarita"]



    return(
        <div id={style.wrapper}>
	    <header>
	    	<div id={style.pageBanner}>
	    		<h1 class={style.title}> Book Collections</h1>
                <p>Books</p>
                
	    	</div>
	    </header>
	    <div id={style.bookList}>
	    	<h2 class={style.title}>Books to Read</h2>
	    	<ul>
				{
					booklist.map((book, index) =>(
						<li>
							<span class = {style.name} > {book} </span>
							<span class = {style.delete}> delete</span>
						</li>
					))
				}
					
	    		{/* <li>
	    			<span class={style.name}>Name of the Wind</span>
	    			<span class={style.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span class={style.name}> The Wise Man's Fear</span>
	    			<span class={style.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span class={style.name}> Kafka on the Shore</span>
	    			<span class={style.delete}>delete</span>
	    		</li>
	    		<li>
	    			<span class={style.name}> The Master and the Margarita</span>
	    			<span class={style.delete}>delete</span>
	    		</li> */}
	    	</ul>
	    </div>
	    

    </div>
    )
}

  export default BookListPage;
  
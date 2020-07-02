import React, { useState, useEffect } from "react";
import Articlecard from "./Articlecard";
import Timeout from "await-timeout";
import axios from "axios";

export default function ArticleList() {
  const [articles, set_articles] = useState();

  function reset() {
    // deze reset is gelinkt met set_articles
    set_articles([]); // waarbij het weer gelinkt is met de button in return
  }

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      await Timeout.set(2000);
      console.log("after timeout");
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      console.log("look at this response", res);
      const { data } = res; //const data = res.data (response = res)
      console.log("look at this data", data);

      set_articles(data); // de link tussen de date in de url en set_articles in de set_articles. Dit brengt de local scope naar de global scope
      console.log("Got back:", data);
    }
    doSomeDataFetching();
  }, []);

  // if else statement zou hier kunnen ipv ternary expression in de return

  return (
    <div>
      <button onClick={reset}>Clear Notifications</button>

      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {!articles ? (
        <h2>LOADING...</h2>
      ) : (
        articles.map((article) => (
          <Articlecard
            key={article.id}
            title={article.title}
            body={article.body}
          />
        ))
      )}
    </div>
  );
}

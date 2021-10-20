function getArticleGenerator(articles) {
    let arr = articles// let articles so we can change its content every time 
    // we call the function
    const resultDiv = document.getElementById('content');
    return () => {
        if (arr.length != 0) {
            let article = document.createElement('article');
            article.textContent = arr.shift();
            resultDiv.appendChild(article);

        }
    }
}

// getArticleGenerator returns function called by showNext()
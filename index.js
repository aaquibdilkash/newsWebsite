console.log("this is index.js")
// d5e26ac1e79e46f2bf48c25bca0e6d97
//Initialize the news parameter
let source = "crypto-coins-news"
let apiKey = 'd5e26ac1e79e46f2bf48c25bca0e6d97'

//grab the news container
let newsAccordion = document.getElementById('newsAccordion')

//create a get request
const xhr = new XMLHttpRequest()
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        // console.log(json)
        let articles = json.articles
        console.log(articles)

        newshtml = ""


        articles.forEach((element, index) => {
            console.log(articles[element])

            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                        <h4><span class="badge badge-secondary">Breaking News #${index + 1}: </span></h4> <strong>${element["title"]}</strong>
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body">
                                    ${element["description"]}. <a href="${element.url}" target='_blank'>Read More...</a>
                                </div>
                            </div>
                        </div>`

            newshtml += news


        })


        newsAccordion.innerHTML = newshtml
    } else {
        console.log('some error occured')
    }
}


xhr.send()




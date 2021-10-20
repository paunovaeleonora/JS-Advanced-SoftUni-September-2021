class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            'picture': 200,
            'photo': 50,
            'item': 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ) {
        articleModel = articleModel.toLowerCase();
        if(!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }

        let searchedName = this.listOfArticles.find(n => n.articleName == articleName);
        let i = this.listOfArticles.indexOf(searchedName);
        let q;
        if(!searchedName) {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity
            })
            q = quantity;
        }else {
            
            this.listOfArticles[i].quantity += quantity;
            q = this.listOfArticles[i].quantity;
        }
        return `Successfully added article ${articleName} with a new quantity- ${q}.`


    };

    inviteGuest ( guestName, personality) {
        const types = {
            'Vip': 500,
            'Middle': 250
        }
        let points;
        if(types[personality]) {
            points = types[personality];
        }else{
            points = 50;
        }
        let searchedGuest = this.guests.find(g => g.guestName == guestName);

        if(searchedGuest) {
            throw new Error(`${guestName} has already been invited.`);
        }else{
            this.guests.push({
                guestName,
                points,
                purchaseArticle: 0
            });
            return `You have successfully invited ${guestName}!`;
        }

    }

    buyArticle ( articleModel, articleName, guestName) {
        let searchedItem = this.listOfArticles.find(item => item.articleModel == articleModel && item.articleName == articleName);
        let itemIndex = this.listOfArticles.indexOf(searchedItem);
        let searchedGuest = this.guests.find(g => g.guestName == guestName);
        let gIndex = this.guests.indexOf(searchedGuest);
        if(!searchedItem) {
            throw new Error(`This article is not found.`)
        }
        if(searchedItem.quantity == 0) {
            return `The ${articleName} is not available.`
        }
        if(!searchedGuest) {
            return `This guest is not invited.`
        }
        if(searchedGuest.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article.";

        }else {
            this.guests[gIndex].points -= this.possibleArticles[articleModel];
            this.guests[gIndex].purchaseArticle++;
            this.listOfArticles[itemIndex].quantity--;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;

        }

    }

    showGalleryInfo (criteria) {
        let result = [];
        if(criteria == 'article') {
            result.push(`Articles information:`);
            this.listOfArticles.forEach((article) => {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            })

        }else if(criteria == 'guest') {
            result.push(`Guests information:`);
            this.guests.forEach((guest)=> {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            })

        }
        return result.join('\n');
    }
}


const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

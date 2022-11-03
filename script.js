const cards = document.querySelectorAll('.card');

let matchedCrad = 0 ;
let cardOne , cardTwo;

function flipCard(e) {
	let clickedCard = e.target; // getting user clicked card
	clickedCard.classList.add("flip")

	if(clickedCard !== cardOne){
		if(!cardOne){
			//return the cardOne value to clickedCard
			return cardOne = clickedCard;
		}
	
		cardTwo = clickedCard;
	
		let cardOneImg = cardOne.querySelector("img").src,
		cardTwoImg = cardTwo.querySelector("img").src;
		matchCards(cardOneImg , cardTwoImg);
	}
}

function matchCards(img1 , img2){
	if(img1 === img2){
		matchedCrad++;
		if(matchedCrad == 8 ){
			setTimeout(() => {
				return shuffleCard();
			} , 1000)

		}
		cardOne.removeEventListener("click" , flipCard);
		cardTwo.removeEventListener("click" , flipCard);
		cardOne = cardTwo = ""; //setting both cards value to null
		return;
	}

	//if both cards not matched
	setTimeout(() => {
		//adding shake class to both cards after 400seconds
		cardOne.classList.add("shake");
		cardTwo.classList.add("shake");
	} , 400)


	setTimeout(() => {
		//removing both classes after fail
		cardOne.classList.remove("shake" , "flip");
		cardTwo.classList.remove("shake" , "flip");
		cardOne = cardTwo = "";
	
	} , 1200)
}

function shuffleCard(){
	matchedCrad = 0;
	cardOne = cardTwo = "";

	let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
	arr.sort(() => 
		Math.random() > 0.5 ? 1 : -1
	)
	cards.forEach((card , index) => {
		card.classList.remove("flip");

		let imgTag = card.querySelector("img");
		imgTag.src = `images/img-${arr[index]}.png`
		card.addEventListener("click" , flipCard)
	})
}

shuffleCard();

cards.forEach(card => {  
	//adding click event to all cards
	card.addEventListener("click" , flipCard);
})
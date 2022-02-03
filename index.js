let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.textContent = 'Rizzo'
content.append(header)


let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let image = document.createElement('img')
image.setAttribute('class', 'dog-image')
image.setAttribute('src', './assets/rizzo.jpg')

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(image, dogDetails)

let headerDescription = document.createElement('h3')
headerDescription.textContent = 'Description:'

let paragraphDescription = document.createElement('p')
paragraphDescription.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.:'

let headerFeedingTimes = document.createElement('h3')
headerFeedingTimes.textContent = 'FeedingTimes:'

let listFeedingTimes = document.createElement('ul')

dogDetails.append(headerDescription, paragraphDescription, headerFeedingTimes, listFeedingTimes)

let listFTItem1 = document.createElement('li')
listFTItem1.textContent = '9:00 am'
let listFTItem2 = document.createElement('li')
listFTItem2.textContent = '12:00 pm'
let listFTItem3 = document.createElement('li')
listFTItem3.textContent = '3:00 pm'

listFeedingTimes.append(listFTItem1, listFTItem2, listFTItem3)

let button = document.createElement('button')
button.textContent = 'Click me'
dogDetails.append(button)
button.addEventListener('click', function(e) {
    e.target.textContent = "I was clicked!"
})
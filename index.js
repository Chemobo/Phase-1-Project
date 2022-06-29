//setting variales for the display
const food = document.getElementById('food')
const fudd = document.getElementById('fudd')

// fetching data 
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
	.then(response => response.json())
	.then(response => {
          response.meals.forEach(meal=>{
	      displayMeals(meal)
})
console.log(response.meals [0]['strIngredient1']);
})
	  .catch(err => console.error(err));

//display function    
function displayMeals(mealObj){const mealDiv = document.createElement('div')
const image = document.createElement('img')
image.src = mealObj.strMealThumb
image.className = 'meal-image'
const name = document.createElement('h3')
name.innerText = mealObj.strMeal
mealDiv.append(image, name)
food.append(mealDiv)
image.addEventListener('click',()=>{
    mealOnclick(mealObj)
})
}
function mealOnclick(mealObj){
	fudd.innerHTML = ""

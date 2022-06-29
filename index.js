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

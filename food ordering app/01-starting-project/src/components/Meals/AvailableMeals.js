
import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';





const AvailableMeals = () => {

  const [meals, setmeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState()


  useEffect(() => {
    const featchMeals = async () => {


      const response = await fetch("https://food-ordering-app-d7297-default-rtdb.firebaseio.com/meal.json");

      if (!response.ok) {
        throw new Error("Something went wrong")
      }

      const responseData = await response.json();

      const loadeData = []

      for (const key in responseData) {
        loadeData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      setmeals(loadeData)
      setIsLoading(false)
    }

    featchMeals().catch((error) => {
      setIsLoading(false)
      setHttpError(error.message)
    });

  }, [])

  if (isLoading) {
    return (

      <section className={classes.MealLoading}>
        <p>Loading...</p>
      </section>
    )

  }

  if (httpError) {
    return (
      <section className={classes.MealError}>
        <p>{httpError}</p>
      </section>
    )
  }



  const mealsList = meals.map(meal => <MealItem
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />)


  return <section className={classes.meals}>
    <Card>
      <ul>
        {mealsList}
      </ul>

    </Card>
  </section>

}

export default AvailableMeals
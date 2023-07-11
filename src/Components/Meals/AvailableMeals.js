import { useEffect,useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [httpError,setHttpError] = useState(); // we can put it false or null or undefined (empty)

  useEffect(() => {
    const fetchMeals = async () => {

      const response = await fetch(
        'https://react-http-77b94-default-rtdb.firebaseio.com/meals.json'
        );

if (!response.ok){
  throw new Error ('something went wrong!'); //here when we generate an error like this and 
  //pass the string to the constructor that string will be stored in the message property of the created error obj

};

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    //here in try and catch we should use await or we could use the fact that fetchMeals() it is a promise and add catch
    //method on it
    //note:vidio number 217

  fetchMeals().catch((error)=>{                  //this error is an error obj and this obj by default has a message proparty 

    setIsLoading(false);
    setHttpError(error.message);
  });

  }, []);

if(isLoading){
  return(
  <section className={classes.MealsLoading}>
    <p>Loading...</p>
  </section>
  )
};

if (httpError){
  return(
<section className={classes.MealsError}>
<p>{httpError}</p>
</section>
  )
};

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
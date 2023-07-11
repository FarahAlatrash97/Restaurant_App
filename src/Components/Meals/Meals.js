import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";


const Meal = () =>{
return(
<Fragment>
    <MealsSummary/>
    <AvailableMeals/>
</Fragment>
);
};

export default Meal;
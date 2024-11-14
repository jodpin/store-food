
import CustomeImage from "../components/CustomImage"

const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
        <CustomeImage  imgSrc={recipe.image}/>
        <div className="recipe-card-info">
            <img className="auther-img" src={recipe.authorImg} alt="" />
            <p className="recipe-title"> {recipe.title}</p>
            <p className="recipe-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, at?</p>
            <a className="view-btn" href="#!">VIEW RECIPE</a>
        </div>
       
    </div>
  )
}

export default RecipeCard
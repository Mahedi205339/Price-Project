import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name , price , features} = option ;
    return (
        <div className='bg-blue-500 rounded-md p-4 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>

            </h2>
            <h4 className='text-2xl text-center my-8'>{name}</h4>

           <div className='p-6 flex-grow'>
           {
                features.map((feature ,idx) => <Feature feature={feature}key={idx}></Feature>)
            }
           </div>
            <button className='mt-12 bg-green-600 py-2 px-4 rounded-lg font-bold hover:bg-white hover:text-green-600'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes ={
    option : PropTypes.object
}

export default PriceOption;
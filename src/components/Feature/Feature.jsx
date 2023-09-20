import { AiFillCheckCircle } from 'react-icons/ai';
import PropTypes from 'prop-types'
const Feature = ({ feature }) => {
    return (
        <div>
            <p className='flex items-center gap-2'> <AiFillCheckCircle className='text-green-500 bg-white rounded-lg'></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;
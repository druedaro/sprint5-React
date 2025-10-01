import type {FeatureCard} from '../../config/types';
import Button from '../atoms/Button';

const FeatureCard = ({image, title, description}: FeatureCard) => {
    return (
        <div className="text-center">
      <img src={image} alt={title} className="mx-auto mb-8 max-h-80" />
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
      <Button variant="primary">
        More Info
      </Button>
    </div>
  );
};

export default FeatureCard;
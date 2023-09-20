import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities during regular hours",
                "Cardio equipment usage",
                "Locker room access",
                "Monthly fitness assessment",
                "Discounts on personal training sessions"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
                "Unlimited access to gym facilities",
                "Cardio and strength training equipment usage",
                "Access to group fitness classes",
                "Access to sauna and steam room",
                "Monthly nutrition consultation",
                "Priority booking for personal training sessions"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": 79.99,
            "features": [
                "Access for two adults and two children (under 18)",
                "Unlimited access to gym facilities for all family members",
                "Cardio and strength training equipment usage",
                "Access to group fitness classes",
                "Family locker room access",
                "Monthly family fitness assessment",
                "Discounts on family personal training sessions"
            ]
        }
    ]



    return (
        <div className="m-12">
            <h2 className="text-4xl text-center">Best Price in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
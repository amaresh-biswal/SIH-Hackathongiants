function findHotelsAndTravel() {
    const fromCity = document.getElementById('fromCity').value;
    const toCity = document.getElementById('toCity').value;

    let data = {
        hotels: [],
        travelWays: []
    };

    if (toCity === 'Lucknow') {
        data.hotels = [
            'Hotel Lucknow Palace',
            'City View Hotel',
            'Grand Regency Hotel',
            'Royal Oasis Inn'
        ];
    } else if (toCity === 'Kolkata') {
        data.hotels = [
            'Bayfront Hotel',
            'Kolkata Grand Residency',
            'Marina View Inn',
            'City Lights Lodge'
        ];
    } else if (toCity === 'Hyderabad') {
        data.hotels = [
            'Hyderabad Heights',
            'Green Oasis Hotel',
            'Silicon Valley Inn',
            'Palm Grove Resort'
        ];
    } else if (toCity === 'Delhi') {
        data.hotels = [
            'Delhi Grand Hotel',
            'City Star Inn',
            'Royal Plaza',
            'Sunrise View Hotel'
        ];
    } else if (toCity === 'Mumbai') {
        data.hotels = [
            'Mumbai Marina Hotel',
            'Cityscape Inn',
            'Mumbai Palace',
            'Sunset View Hotel'
        ];
    } else if (toCity === 'Bangalore') {
        data.hotels = [
            'Bangalore Heights',
            'Green Oasis Hotel',
            'Silicon Valley Inn',
            'Palm Grove Resort'
        ];
    } else if (toCity === 'Chennai') {
        data.hotels = [
            'Chennai Grand Hotel',
            'City View Inn',
            'Royal Regency',
            'Sunset Heights'
        ];
    } else if (toCity === 'Pune') {
        data.hotels = [
            'Pune Grand Residency',
            'City Lights Lodge',
            'Marina View Inn',
            'Bayfront Hotel'
        ];
    } else if (toCity === 'Jaipur') {
        data.hotels = [
            'Jaipur Grand Hotel',
            'City Star Inn',
            'Royal Plaza',
            'Sunrise View Hotel'
        ];
    } else if (toCity === 'Ahmedabad') {
        data.hotels = [
            'Ahmedabad Heights',
            'Green Oasis Hotel',
            'Silicon Valley Inn',
            'Palm Grove Resort'
        ];
    } else if (toCity === 'Kochi') {
        data.hotels = [
            'Kochi Grand Hotel',
            'City View Inn',
            'Royal Regency',
            'Sunset Heights'
        ];
    } else {
        data.hotels = [
            'No hotels in database'
        ];
    }

    if (
        (fromCity === 'Delhi' && toCity === 'Lucknow') ||
        (fromCity === 'Lucknow' && toCity === 'Delhi')
    ) {
        data.travelWays.push({ mode: 'Car', cost: '1500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '3000 INR' });
    } else if ((fromCity === 'Delhi' && toCity === 'Mumbai') || (fromCity === 'Mumbai' && toCity === 'Delhi')) {
        data.travelWays.push({ mode: 'Car', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5000 INR' });
    }

    else if ((fromCity === 'Delhi' && toCity === 'Bangalore') || (fromCity === 'Bangalore' && toCity === 'Delhi')) {
        data.travelWays.push({ mode: 'Car', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '6000 INR' });
    }

    else if ((fromCity === 'Delhi' && toCity === 'Kolkata') || (fromCity === 'Kolkata' && toCity === 'Delhi')) {
        // Add Kolkata to Delhi travel options
        data.travelWays.push({ mode: 'Car', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5500 INR' });
    }

    else if ((fromCity === 'Delhi' && toCity === 'Chennai') || (fromCity === 'Chennai' && toCity === 'Delhi')) {
        // Add Chennai to Delhi travel options
        data.travelWays.push({ mode: 'Car', cost: '4500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '6500 INR' });
    }

    else if ((fromCity === 'Delhi' && toCity === 'Hyderabad') || (fromCity === 'Hyderabad' && toCity === 'Delhi')) {
        // Add Hyderabad to Delhi travel options
        data.travelWays.push({ mode: 'Car', cost: '3200 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2200 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1700 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5200 INR' });
    }

    else if ((fromCity === 'Delhi' && toCity === 'Pune') || (fromCity === 'Pune' && toCity === 'Delhi')) {
        // Add Pune to Delhi travel options
        data.travelWays.push({ mode: 'Car', cost: '3800 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2800 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2300 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5800 INR' });
    }

    else if ((fromCity === 'Delhi' && toCity === 'Jaipur') || (fromCity === 'Jaipur' && toCity === 'Delhi')) {
        // Add Jaipur to Delhi travel options
        data.travelWays.push({ mode: 'Car', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4500 INR' });
    }

    else if ((fromCity === 'Delhi' && toCity === 'Ahmedabad') || (fromCity === 'Ahmedabad' && toCity === 'Delhi')) {
        // Add Ahmedabad to Delhi travel options
        data.travelWays.push({ mode: 'Car', cost: '2800 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1300 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4800 INR' });
    }

    else if ((fromCity === 'Delhi' && toCity === 'Kochi') || (fromCity === 'Kochi' && toCity === 'Delhi')) {
        // Add Kochi to Delhi travel options
        data.travelWays.push({ mode: 'Car', cost: '5000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '7000 INR' });
    }

    
    else if (
        (fromCity === 'Mumbai' && toCity === 'Kolkata') ||
        (fromCity === 'Kolkata' && toCity === 'Mumbai')
    ) {
        data.travelWays.push({ mode: 'Car', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1200 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4000 INR' });
    } 
    else if ((fromCity === 'Mumbai' && toCity === 'Bangalore') || (fromCity === 'Bangalore' && toCity === 'Mumbai')) {
        data.travelWays.push({ mode: 'Car', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4500 INR' });
    }

    else if ((fromCity === 'Mumbai' && toCity === 'Chennai') || (fromCity === 'Chennai' && toCity === 'Mumbai')) {
        data.travelWays.push({ mode: 'Car', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '6000 INR' });
    }

    else if ((fromCity === 'Mumbai' && toCity === 'Hyderabad') || (fromCity === 'Hyderabad' && toCity === 'Mumbai')) {
        data.travelWays.push({ mode: 'Car', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5000 INR' });
    }

    else if ((fromCity === 'Mumbai' && toCity === 'Pune') || (fromCity === 'Pune' && toCity === 'Mumbai')) {
        data.travelWays.push({ mode: 'Car', cost: '1500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '3000 INR' });
    }

    else if ((fromCity === 'Mumbai' && toCity === 'Jaipur') || (fromCity === 'Jaipur' && toCity === 'Mumbai')) {
        data.travelWays.push({ mode: 'Car', cost: '5000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '7000 INR' });
    }

    else if ((fromCity === 'Mumbai' && toCity === 'Ahmedabad') || (fromCity === 'Ahmedabad' && toCity === 'Mumbai')) {
        data.travelWays.push({ mode: 'Car', cost: '4500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '6500 INR' });
    }

    else if ((fromCity === 'Mumbai' && toCity === 'Kochi') || (fromCity === 'Kochi' && toCity === 'Mumbai')) {
        data.travelWays.push({ mode: 'Car', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4500 INR' });
    }

    else if (
        (fromCity === 'Bangalore' && toCity === 'Hyderabad') ||
        (fromCity === 'Hyderabad' && toCity === 'Bangalore')
    ) {
        data.travelWays.push({ mode: 'Car', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1100 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '900 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '3500 INR' });
    } 
    else if (
        (fromCity === 'Bangalore' && toCity === 'Kolkata') || (fromCity === 'Kolkata' && toCity === 'Bangalore')
    ) {
        // Add travel options for Bangalore to Kolkata or vice versa
        data.travelWays.push({ mode: 'Car', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5500 INR' });
    }

    else if (
        (fromCity === 'Bangalore' && toCity === 'Chennai') || (fromCity === 'Chennai' && toCity === 'Bangalore')
    ) {
        // Add travel options for Bangalore to Chennai or vice versa
        data.travelWays.push({ mode: 'Car', cost: '1200 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '1500 INR' });
    }

    else if (
        (fromCity === 'Bangalore' && toCity === 'Pune') || (fromCity === 'Pune' && toCity === 'Bangalore')
    ) {
        // Add travel options for Bangalore to Pune or vice versa
        data.travelWays.push({ mode: 'Car', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '3500 INR' });
    }

    else if (
        (fromCity === 'Bangalore' && toCity === 'Jaipur') || (fromCity === 'Jaipur' && toCity === 'Bangalore')
    ) {
        // Add travel options for Bangalore to Jaipur or vice versa
        data.travelWays.push({ mode: 'Car', cost: '4500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '6000 INR' });
    }

    else if (
        (fromCity === 'Bangalore' && toCity === 'Ahmedabad') || (fromCity === 'Ahmedabad' && toCity === 'Bangalore')
    ) {
        // Add travel options for Bangalore to Ahmedabad or vice versa
        data.travelWays.push({ mode: 'Car', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5000 INR' });
    }

    else if (
        (fromCity === 'Bangalore' && toCity === 'Kochi') || (fromCity === 'Kochi' && toCity === 'Bangalore')
    ) {
        // Add travel options for Bangalore to Kochi or vice versa
        data.travelWays.push({ mode: 'Car', cost: '1500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1200 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '2000 INR' });
    }
    else if ((fromCity === 'Bangalore' && toCity === 'Lucknow') || (fromCity === 'Lucknow' && toCity === 'Bangalore')) {
        data.travelWays.push({ mode: 'Car', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4500 INR' });
    }

    else if ((fromCity === 'Mumbai' && toCity === 'Lucknow') || (fromCity === 'Lucknow' && toCity === 'Mumbai')){
        data.travelWays.push({ mode: 'Car', cost: '3800 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2700 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2200 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5000 INR' });
    }

    else if ((fromCity === 'Kolkata' && toCity === 'Chennai') || (fromCity === 'Chennai' && toCity === 'Kolkata')) {
        data.travelWays.push({ mode: 'Car', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2200 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4500 INR' });
    }

    else if ((fromCity === 'Kolkata' && toCity === 'Hyderabad') || (fromCity === 'Hyderabad' && toCity === 'Kolkata')) {
        data.travelWays.push({ mode: 'Car', cost: '3200 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2300 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1900 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4700 INR' });
    }

    else if ((fromCity === 'Kolkata' && toCity === 'Pune') || (fromCity === 'Pune' && toCity === 'Kolkata')){
        data.travelWays.push({ mode: 'Car', cost: '3400 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2400 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4900 INR' });
    }

    else if ((fromCity === 'Kolkata' && toCity === 'Jaipur') || (fromCity === 'Jaipur' && toCity === 'Kolkata')) {
        data.travelWays.push({ mode: 'Car', cost: '3300 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2350 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1950 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4800 INR' });
    }

    else if ((fromCity === 'Kolkata' && toCity === 'Lucknow') || (fromCity === 'Lucknow' && toCity === 'Kolkata')) {
        data.travelWays.push({ mode: 'Car', cost: '3100 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2250 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1850 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4600 INR' });
    }

    else if ((fromCity === 'Kolkata' && toCity === 'Ahmedabad') || (fromCity === 'Ahmedabad' && toCity === 'Kolkata')) {
        data.travelWays.push({ mode: 'Car', cost: '3300 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2350 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1950 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4800 INR' });
    }

    else if ((fromCity === 'Kolkata' && toCity === 'Kochi') || (fromCity === 'Kochi' && toCity === 'Kolkata')){
        data.travelWays.push({ mode: 'Car', cost: '3400 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2400 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4900 INR' });
    }

    else if ((fromCity === 'Chennai' && toCity === 'Hyderabad') || (fromCity === 'Hyderabad' && toCity === 'Chennai')) {
        data.travelWays.push({ mode: 'Car', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4000 INR' });
    }

    // Add options for Chennai to Pune
    else if ((fromCity === 'Chennai' && toCity === 'Pune') || (fromCity === 'Pune' && toCity === 'Chennai')) {
        data.travelWays.push({ mode: 'Car', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2200 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4500 INR' });
    }

    // Add options for Chennai to Jaipur
    else if ((fromCity === 'Chennai' && toCity === 'Jaipur') || (fromCity === 'Jaipur' && toCity === 'Chennai')) {
        data.travelWays.push({ mode: 'Car', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '6000 INR' });
    }

    // Add options for Chennai to Lucknow
    else if ((fromCity === 'Chennai' && toCity === 'Lucknow') || (fromCity === 'Lucknow' && toCity === 'Chennai')) {
        data.travelWays.push({ mode: 'Car', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5000 INR' });
    }

    // Add options for Chennai to Ahmedabad
    else if ((fromCity === 'Chennai' && toCity === 'Ahmedabad') || (fromCity === 'Ahmedabad' && toCity === 'Chennai')) {
        data.travelWays.push({ mode: 'Car', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2200 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4500 INR' });
    }

    // Add options for Chennai to Kochi
    else if ((fromCity === 'Chennai' && toCity === 'Kochi') || (fromCity === 'Kochi' && toCity === 'Chennai')) {
        data.travelWays.push({ mode: 'Car', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1200 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '3500 INR' });
    }

    // Add options for Hyderabad to Pune
    else if ((fromCity === 'Hyderabad' && toCity === 'Pune') || (fromCity === 'Pune' && toCity === 'Hyderabad')) {
        data.travelWays.push({ mode: 'Car', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4000 INR' });
    }

    // Add options for Hyderabad to Jaipur
    else if ((fromCity === 'Hyderabad' && toCity === 'Jaipur') || (fromCity === 'Jaipur' && toCity === 'Hyderabad')) {
        data.travelWays.push({ mode: 'Car', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '6000 INR' });
    }

    // Add options for Hyderabad to Lucknow
    else if ((fromCity === 'Hyderabad' && toCity === 'Lucknow') || (fromCity === 'Lucknow' && toCity === 'Hyderabad')) {
        data.travelWays.push({ mode: 'Car', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5000 INR' });
    }

    // Add options for Hyderabad to Ahmedabad
    else if ((fromCity === 'Hyderabad' && toCity === 'Ahmedabad') || (fromCity === 'Ahmedabad' && toCity === 'Hyderabad')) {
        data.travelWays.push({ mode: 'Car', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2200 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4500 INR' });
    }

    // Add options for Hyderabad to Kochi
    else if ((fromCity === 'Hyderabad' && toCity === 'Kochi') || (fromCity === 'Kochi' && toCity === 'Hyderabad')) {
        data.travelWays.push({ mode: 'Car', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1200 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '3500 INR' });
    }

    else if ((fromCity === 'Pune' && toCity === 'Jaipur') || (fromCity === 'Jaipur' && toCity === 'Pune')) {
        data.travelWays.push({ mode: 'Car', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2200 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '6000 INR' });
    }

    else if ((fromCity === 'Pune' && toCity === 'Lucknow') || (fromCity === 'Lucknow' && toCity === 'Pune')) {
        data.travelWays.push({ mode: 'Car', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '7000 INR' });
    }

    else if ((fromCity === 'Pune' && toCity === 'Ahmedabad') || (fromCity === 'Ahmedabad' && toCity === 'Pune')) {
        data.travelWays.push({ mode: 'Car', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2200 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5500 INR' });
    }

    else if ((fromCity === 'Pune' && toCity === 'Kochi') || (fromCity === 'Kochi' && toCity === 'Pune')) {
        data.travelWays.push({ mode: 'Car', cost: '5000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '3500 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '8000 INR' });
    }

    else if ((fromCity === 'Jaipur' && toCity === 'Lucknow') || (fromCity === 'Lucknow' && toCity === 'Jaipur')) {
        data.travelWays.push({ mode: 'Car', cost: '2500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '1800 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '1600 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '4500 INR' });
    }

    else if ((fromCity === 'Lucknow' && toCity === 'Ahmedabad') || (fromCity === 'Ahmedabad' && toCity === 'Lucknow')) {
        data.travelWays.push({ mode: 'Car', cost: '3000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '2200 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '5500 INR' });
    }

    else if ((fromCity === 'Lucknow' && toCity === 'Kochi') || (fromCity === 'Kochi' && toCity === 'Lucknow')) {
        data.travelWays.push({ mode: 'Car', cost: '5500 INR' });
        data.travelWays.push({ mode: 'Train', cost: '4500 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '9000 INR' });
    }

    else if ((fromCity === 'Ahmedabad' && toCity === 'Kochi') || (fromCity === 'Kochi' && toCity === 'Ahmedabad')) {
        data.travelWays.push({ mode: 'Car', cost: '4000 INR' });
        data.travelWays.push({ mode: 'Train', cost: '3200 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '2800 INR' });
        data.travelWays.push({ mode: 'Flight', cost: '6500 INR' });
    }

    else {
        
        data.travelWays.push({ mode: 'Car', cost: '500 INR' });
        data.travelWays.push({ mode: 'Motorbike', cost: '250 INR' });
        data.travelWays.push({ mode: 'Bus', cost: '600 INR' });
        data.travelWays.push({ mode: 'Walk', cost: '0000 INR' });
        data.travelWays.push({ mode: 'Bicycle', cost: '0000 INR' });
    }

    displayResults(data);
}
function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const hotelsList = document.createElement('ul');
    data.hotels.forEach(hotel => {
        const listItem = document.createElement('li');
        listItem.textContent = hotel;
        hotelsList.appendChild(listItem);
    });

    const travelWaysList = document.createElement('ul');
    data.travelWays.forEach(travelWay => {
        const listItem = document.createElement('li');
        listItem.textContent = `Mode: ${travelWay.mode}, Cost: ${travelWay.cost}`;
        travelWaysList.appendChild(listItem);
    });

    

    resultsDiv.appendChild(document.createElement('hr'));
    resultsDiv.appendChild(document.createElement('h2')).textContent = 'Hotels:';
    resultsDiv.appendChild(hotelsList);
    resultsDiv.appendChild(document.createElement('h2')).textContent = 'Travel Ways:';
    resultsDiv.appendChild(travelWaysList);
}
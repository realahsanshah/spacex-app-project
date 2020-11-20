import * as React from 'react';
import { useLaunchProfileQuery } from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';



const LaunchDetailsContainer = () => {
    const { data, error, loading } = useLaunchProfileQuery({ variables: { id: '13' } });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Select a flight from the panel</div>;
    }

    return <LaunchDetails data={data} />;
}

export default LaunchDetailsContainer;
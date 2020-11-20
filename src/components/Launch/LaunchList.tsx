import React from 'react';
import { LaunchQuery } from '../../generated/graphql';
import './style.css'

export interface LaunchListProps {
    data:LaunchQuery
}
 
const className='LaunchList';

const LaunchList: React.SFC<LaunchListProps> = ({data}) => {
    return ( 
        <div className={className}>
            <h3>Launches</h3>
            <ol className={`${className}__list`}>
                {
                    !!data.launches&&
                    data.launches.map(
                        (launch,i)=>
                            !!launch && (
                                <li key={i} className={`${className}__item`}>
                                    {launch.mission_name} ({launch.launch_year})
                                </li>
                            )
                    )
                }
            </ol>
            
        </div>

     );
}
 
export default LaunchList;
import * as React from 'react';
import {LaunchProfileQuery} from '../../generated/graphql'
import './style.css'

export interface LaunchDetailsProps {
    data:LaunchProfileQuery
}

const className = 'LaunchProfile';
 
const LaunchDetails: React.SFC<LaunchDetailsProps> = ({data}) => {
    return ( 
        <div className={className}>
        <div className={`${className}__status`}>
          <span>Flight {data.launch?.flight_number}: </span>
          {data.launch?.launch_success ? (
            <span className={`${className}__success`}>Success</span>
          ) : (
            <span className={`${className}__failed`}>Failed</span>
          )}
        </div>
        <h1 className={`${className}__title`}>
          {data.launch?.mission_name}
          {data.launch?.rocket &&
            ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
        </h1>
        <p className={`${className}__description`}>{data.launch?.details}</p>
        {!!data.launch?.links && !!data.launch.links.flickr_images && (
          <div className={`${className}__image-list`}>
            {data.launch.links.flickr_images.map(image =>
              image ? <img src={image} className={`${className}__image`} key={image} alt="SpaceX"/> : null,
            )}
          </div>
        )}
      </div>
     );
}
 
export default LaunchDetails;
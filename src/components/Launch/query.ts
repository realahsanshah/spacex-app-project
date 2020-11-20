import gql from 'graphql-tag';

export const QUERY_LAUNCH = gql`
  query Launch {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;
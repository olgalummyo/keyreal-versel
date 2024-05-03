import { useQuery, gql } from '@apollo/client';

const GET_PROPERTY_IDS = gql`
  query {
    propertyDescriptionCollection {
      items {
        id
      }
    }
  }
`;

export const usePropertyIds = () => {
  const { loading, error, data } = useQuery(GET_PROPERTY_IDS);

  if (loading) return { loading: true };
  if (error) return { loading: false, error };

  const propertyIds = data.propertyDescriptionCollection.items.map((item) => item.id);

  return { loading: false, propertyIds };
};

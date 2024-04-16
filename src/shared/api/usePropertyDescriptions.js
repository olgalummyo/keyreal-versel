// Ваш компонент или хук для запроса данных с использованием Apollo Client и Next.js
import { useQuery, gql } from '@apollo/client';

// Определение запроса GraphQL
const GET_PROPERTY_DESCRIPTIONS = gql`
  query {
    propertyDescriptionCollection {
      items {
        id
        imageCollection {
          items {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
        }
        title
        description
        city
        location
        coordinate {
          lat
          lon
        }
        bed
        bath
        sqft
        price
        propertyStatus
        yearBuilding
        selectCategory
        listedIn
        forRent
        featured
        features
        tags
      }
    }
  }
`;

// Создание и использование хука для запроса данных
export const usePropertyDescriptions = () => {
  const { loading, error, data } = useQuery(GET_PROPERTY_DESCRIPTIONS);

  if (loading) return { loading: true };
  if (error) return { loading: false, error };

  return { loading: false, data };
};

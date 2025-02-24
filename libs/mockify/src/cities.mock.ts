import { citiesData } from './data/cities.data';


export const CityInfo = async (): Promise<any> => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        data: {
          content: citiesData,
          total: citiesData.length,
        },
      };

      resolve(response);
      // reject(Error('THIS IS Error'));
    }, 200);
  });

  return data;
};
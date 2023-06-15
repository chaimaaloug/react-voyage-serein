
 //Fetch data from TravelAdvisor api
const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary?tr_longitude=109.262909&tr_latitude=12.346705&bl_longitude=109.095887&bl_latitude=12.113245&currency=USD&lunit=km&lang=en_US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2040471378msh40708ad7e3bf713p1b510fjsna9f220ff1641',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

export const getPlacesData = async () => {
  try {
    const response = await fetch(URL, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};




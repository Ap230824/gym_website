
export const exerciseOptions =  {

	method: 'GET',
	// url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
	headers: {
	  'x-rapidapi-key': '8973ba3f92msh768ddb31b63ce4ep1f6863jsnb7fbaa487130',
	  'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
  
};


export const fetchData = async (url , options) => {
        const response = await fetch(url , options);

        const data = await response.json();

        return data;
}

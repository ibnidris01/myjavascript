const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c0464f6e8amshbe52d49c90f2c51p10c85djsn7f96e1d69dab',
		'x-rapidapi-host': 'dad-jokes-by-api-ninjas.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
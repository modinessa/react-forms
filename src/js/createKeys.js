export function createKeys(arr) {
	const newArr = []
	arr.map((item) => {
		newArr.push({key: item, val: item})
	});
	return newArr;
}
const array1 = [{ automationId: 'AX23', description: 'testdescription' }];
const array2 = [{ automationId: 'AX23', diagnosis: 10 }];

const array3 = [...array1, ...array2];

const mergeById = (a1, a2) => {
	return a2.map((x) =>
		Object.assign(
			x,
			a1.find((y) => y.automationId === x.automationId)
		)
	);
};


mergeById(array1, array2);

console.log(mergeById(array1, array2));

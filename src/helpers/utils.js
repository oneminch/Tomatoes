const deepClone = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

// Check if item is undefined
const isDefined = (item) => {
	return typeof item !== "undefined";
};

// Prefixes the given time in any unit with a zero when < 10
const zeroPrefix = (unit) => {
	return `${unit < 10 ? "0" : ""}${unit}`;
};

// Changes given time in seconds into xx:xx format
const formatTime = (seconds) => {
	const minutes = Math.floor(seconds / 60);
	const remSeconds = seconds % 60;

	return `${zeroPrefix(minutes)}:${zeroPrefix(remSeconds)}`;
};

// Initialize localStorage
const initLocalStorage = (storeName, initData) => {
	let ls = localStorage.getItem(storeName);

	if (!ls) {
		localStorage.setItem(storeName, JSON.stringify(initData));
	}

	return ls;
};

// Get parsed value from localStorage
const getLocalStorage = (storeName) => {
	return JSON.parse(localStorage.getItem(storeName));
};

// Given list of keys, get all values from localStorage
const getAllLocalStorage = (storeNames) => {
	let allStores = [];

	storeNames.forEach((store) => {
		allStores.push(getLocalStorage(store));
	});

	return allStores;
};

// Update an item on localStorage
const updateLocalStorage = (storeName, key, value) => {
	const ls = JSON.parse(localStorage.getItem(storeName));
	ls[key] = value;
	localStorage.setItem(storeName, JSON.stringify(ls));
};

export {
	deepClone,
	isDefined,
	formatTime,
	getLocalStorage,
	initLocalStorage,
	getAllLocalStorage,
	updateLocalStorage,
};

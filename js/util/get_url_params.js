function getURLParameters() {
	var parameters = [];
	var currentURL = (new URL(document.location));
	parameters = currentURL.searchParams;
    return parameters;
}

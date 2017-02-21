/**
 * Returns defer-object.
 * @returns {Deferred} defer-object.
 */
export function defer() {
	const deferred = {};

	deferred.promise = new Promise((resolve, reject) => {
		deferred.resolve = resolve;
		deferred.reject = reject;
	});

	return deferred;
}

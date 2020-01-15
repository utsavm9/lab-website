//File for JS functions which will be used throughout the project

/**
 * Applies all the properties in the array to the object, returning null if at any point the properties
 * were not found.
 * So, instead of (context && context.req && context.req.user && context.req.user.name)
 *   just do deepAccess(context, ["req", "user", "name"]) to get that value
 *
 * @param {Object} accumulator - The first object to whom we will apply the properties in the array
 * @param {Array.<string>} array - An array containing the properties we will apply one after the other
 */

function deepAccess(accumulator, array) {
    if (!array) return null;

    return array.reduce(
        (accumulated, nextItem) =>
            accumulated && accumulated[nextItem] ? accumulated[nextItem] : null,
        accumulator
    );
}

export default deepAccess;

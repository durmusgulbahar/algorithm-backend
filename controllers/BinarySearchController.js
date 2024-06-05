/**
 * Handles the POST request for the insertion sort route.
 * @param req - The request object.
 * @returns A Promise that resolves to a NextResponse containing the states of the insertion sort algorithm.
 */

const state = {
  low: 0,
  high: 0,
  middle: 0,
  found: false,
  currentListState:  [],
  msg: "",
  pseudoCode: 0,
};
export async function BinarySearchSubmit(req, res) {
  const { arr, key } = await req.body;

  let states = [];

  function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
   
    while (high >= low) {
      mid = low + Math.floor((high - low) / 2);

      // If the element is present at the middle
      // itself

      states.push({
        ...state,
        low: low,
        high: high,
        middle: mid,
        found: false,
        currentListState: [...arr],
        msg: `${x} (key) compared with ${arr[mid]} (index ${mid})`,
        pseudoCode: 0,
      });
      if (arr[mid] == x) {
        states.push({
          ...state,
          low: low,
          high: high,
          middle: mid,
          found: true,
          currentListState: [...arr],
          msg: `${x} (key) found (index ${mid})`,
          pseudoCode: 1,
        });
        return mid
      };

      states.push({
        ...state,
        low: low,
        high: high,
        middle: mid,
        found: false,
        currentListState: [...arr],
        msg: `${x} (key) compared with ${arr[mid]} (index ${mid})`,
        pseudoCode: 0,
      });
      // If element is smaller than mid, then
      // it can only be present in left subarray
      if (arr[mid] > x) {
        high = mid - 1;
        states.push({
          ...state,
          low: low,
          high: high,
          middle: mid,
          found: false,
          currentListState: [...arr],
          msg: `${x} (key) compared with ${arr[mid]} (index ${mid})`,
          pseudoCode: 0,
        });
      }

      // Else the element can only be present
      // in right subarray
      else {
        low = mid + 1;
        states.push({
          ...state,
          low: low,
          high: high,
          middle: mid,
          found: false,
          currentListState: [...arr],
          msg: `${x} (key) compared with ${arr[mid]} (index ${mid})`,
          pseudoCode: 0,
        });
      }
    }

    // We reach here when element is not
    // present in array
    states.push({
      ...state,
      low: low,
      high: high,
      middle: mid,
      found: false,
      currentListState: [...arr],
      msg: `${x} (key) not found in the array.`,
      pseudoCode: 0,
    });
    return -1;
  }

  binarySearch(arr, key);

  console.log("STATES", states);
  try {
    return res.status(200).json({ states: states });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

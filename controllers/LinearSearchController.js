/**
 * Get req from client, execute linear search and send res states.
 * @params array and key
 */
export async function LinearSearchSubmit(req, res) {
  const { arr, key } = await req.body;

  let states = [];
  states.push({
    currentIndex: -1,
    key: key,
    currentListState: [...arr],
    isFound: false,
    msg: `We have an array of ${arr.length} elements and we are looking for ${key} (key). Click "Next" to start searching.`,
    pseudoCode: 0,
  });
  for (let i = 0; i < arr.length; i++) {
    /**
     * If key found states added to list
     */
    if (arr[i] === key) {
      states.push({
        key: key,
        currentIndex: i,
        currentListState: [...arr],
        isFound: true,
        msg: ` ${key} (key) found (index ${i}) `,
        pseudoCode: 1,
      });
      break;
    }

    /**
     * Steps, compare 0. elm - key, 1. elm - key
     */
    states.push({
      currentIndex: i,
      key: key,
      currentListState: [...arr],
      isFound: false,
      msg: `${key} (key) compared with ${arr[i]} (index ${i})`,
      pseudoCode: 0,
    });
  }
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

const database = firebase.database();

database.ref("https://hospital-form-a10f0-default-rtdb.firebaseio.com/").on("value", (snapshot) => {
  const data = snapshot.val();
  displayData(data);
});
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "your-collection-name"));
  querySnapshot.forEach((doc) => {
    displayData(doc.data());
  });
}

fetchData();


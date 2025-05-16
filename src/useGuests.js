import { useState, useEffect } from "react";

export default function useUsers() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-FTB-ET-WEB-FT/guests"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setGuests(json.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("error fetching data");
      });
  }, []);

  return { guests };
}

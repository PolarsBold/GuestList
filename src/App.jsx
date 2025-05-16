import { useState } from "react";
import GuestList from "./GuestList";
import GuestPage from "./GuestPage";
import useUsers from "./useGuests";

export default function App() {
  // const [tempGuests, setTempGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(false);

  const { guests } = useUsers();

  // useEffect(() => {
  //   setTempGuests(
  //     Array.from({ length: 10 }, () => ({
  //       name: "John Doe",
  //       email: "JohnDoe@example.com",
  //       phone: "777-777-7777",
  //       bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae in, nihil accusamus soluta doloremque atque mollitia vitae aut aperiam at cupiditate labore quis eum autem repellat non ducimus molestias.",
  //       job: "Important Person",
  //     }))
  //   );
  // }, []);

  if (!selectedGuest) {
    return (
      <>
        <GuestList guests={guests} setSelectedGuest={setSelectedGuest} />
      </>
    );
  }

  return (
    <>
      <GuestPage
        selectedGuest={selectedGuest}
        setSelectedGuest={setSelectedGuest}
      />
    </>
  );
}

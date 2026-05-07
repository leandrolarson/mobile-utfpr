import { StatusBar } from "expo-status-bar";
import Fullscreen from "./components/screen-wrappers/Fullscreen";
import Login from "./components/Login";
import Scrollable from "./components/screen-wrappers/Scrollable";
import Card from "./components/Card";

const employees = [
  {
    id: "1",
    name: "Michael Scott",
    role: "Regional Manager",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "2",
    name: "Dwight Schrute",
    role: "Assistant to the Regional Manager",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "3",
    name: "Jim Halpert",
    role: "Sales Representative",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "4",
    name: "Pam Beesly",
    role: "Receptionist",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "5",
    name: "Ryan Howard",
    role: "The Temp",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: "6",
    name: "Angela Martin",
    role: "Senior Accountant",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: "7",
    name: "Kevin Malone",
    role: "Accountant",
    image: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: "8",
    name: "Stanley Hudson",
    role: "Sales Representative",
    image: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: "9",
    name: "Kelly Kapoor",
    role: "Customer Service Representative",
    image: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: "10",
    name: "Toby Flenderson",
    role: "Human Resources",
    image: "https://i.pravatar.cc/150?img=68",
  },
];

export default function App() {
  const handleRefresh = async () => {
    console.log("Atualizando...");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Atualizado!");
  };

  return (
    /* <Fullscreen center>
      <StatusBar style="auto" />
      <Login />
    </Fullscreen> */

    <Scrollable onRefresh={handleRefresh} gap={16}>
      {employees.map((employee) => (
        <Card
          key={employee.id}
          name={employee.name}
          role={employee.role}
          image={employee.image}
        />
      ))}
    </Scrollable>
  );
}

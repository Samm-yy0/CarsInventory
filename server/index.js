const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const cars = [
  {
    id: 1,
    maker: "Toyota",
    model: "Camry",
    year: "2023",
    color: "Silver",
    quantity: "15",
    dealer: "Toyota of Glendale",
  },
  {
    id: 2,
    maker: "Honda",
    model: "Civic",
    year: "2024",
    color: "Black",
    quantity: "20",
    dealer: "Honda Downtown",
  },
  {
    id: 3,
    maker: "Ford",
    model: "F-150",
    year: "2023",
    color: "White",
    quantity: "10",
    dealer: "Ford of North Hollywood",
  },
  {
    id: 4,
    maker: "Chevrolet",
    model: "Tahoe",
    year: "2024",
    color: "Red",
    quantity: "8",
    dealer: "Chevy Malibu",
  },
  {
    id: 5,
    maker: "Nissan",
    model: "Rogue",
    year: "2023",
    color: "Blue",
    quantity: "12",
    dealer: "Nissan of Burbank",
  },
  {
    id: 6,
    maker: "BMW",
    model: "X5",
    year: "2024",
    color: "Gray",
    quantity: "5",
    dealer: "BMW of Encino",
  },
  {
    id: 7,
    maker: "Mercedes-Benz",
    model: "C-Class",
    year: "2023",
    color: "Black",
    quantity: "7",
    dealer: "MB of Bev Hills",
  },
  {
    id: 8,
    maker: "Hyundai",
    model: "Elantra",
    year: "2024",
    color: "White",
    quantity: "18",
    dealer: "Hyundai of A",
  },
  {
    id: 9,
    maker: "Toyota",
    model: "RAV4",
    year: "2024",
    color: "Blue",
    quantity: "14",
    dealer: "Toyota of Pasadena",
  },
  {
    id: 10,
    maker: "Toyota",
    model: "Corolla",
    year: "2024",
    color: "White",
    quantity: "22",
    dealer: "Toyota of Glendale",
  },
  {
    id: 11,
    maker: "BMW",
    model: "3 Series",
    year: "2023",
    color: "Black",
    quantity: "9",
    dealer: "BMW of Beverly Hills",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/developer", (req, res) => {
  res.send("Samantha Jee D. Porio");
  res.status(200).json({ message: "Succesful request " });
});

app.get("/cars", (req, res) => {
  res.status(200).json(cars);
});

app.get("/api/cars/maker", (req, res) => {
  const maker = String(req.params.maker);
  res.status(200).json({ message: "Succesful request " });
});

app.get("/api/cars/:id", (req, res) => {
  const id = Number(req.params.id);
  const cars = cars.find((p) => p.id === id);
  if (!cars) {
    return res.status(404).json({ Message: "Resource not found" });
  }
  res.status(200).json({ message: "Succesful request " });
});

app.post("/api/cars/add", (req, res) => {
  try {
    const newCars = req.body;
    console.log(newCars);
    cars.create(newCars);
    res.status(201).json({ message: "Resource succesfully created " });
  } catch (error) {
    res.status(404).json({ message: "An error occured while adding new car." });
  }
});

app.put("/api/cars/:id", (req, res) => {
  res.status(201).json({ message: "Succesfully created " });
});

app.delete("/api/cars/31", (req, res) => {
  res.status(200).json({ message: "Succesful request " });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

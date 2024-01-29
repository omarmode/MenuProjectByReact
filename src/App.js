import { Container, Navbar } from "react-bootstrap";
import React, { useState } from "react";
import NavBarNots from "./components/NavBarNots";
import Header from "./components/Header";
import Category from "./components/Category";
import CardLise from "./components/CardLise";
import { Items } from "./Data";
import { items } from "./Datalist";
import ItemList from "./components/ItemList";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
function App() {
  const [itemsData, setitemsData] = useState(Items);
  //filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setitemsData(Items);
    } else {
      const NewCategory = Items.filter((item) => item.category === cat);
      setitemsData(NewCategory);
    }
  };
  const AllCategory = ["الكل", ...new Set(Items.map((i) => i.category))];
  // console.log(AllCategory);

  //filter by search
  const filterBySearch = (word) => {
    if (word !== "") {
      const NewArr = Items.filter((item) => item.category === word);
      setitemsData(NewArr);
      console.log(NewArr);
    }
  };

  const AllItems = () => {
    setitemsData(Items);
  };
  return (
    <div className="App">
      <NavBarNots filterBySearch={filterBySearch} />
      <Container>
        <Fade direction="down">
          <Header></Header>
        </Fade>
        <Category
          // AllItems={AllItems}
          filterByCategory={filterByCategory}
          AllCategory={AllCategory}
        />
        {/* <ItemList></ItemList> */}
        <CardLise itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;

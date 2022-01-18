import React, { useEffect, useState } from "react";
import axios from "axios";

// style
import { StyledHomeScreen } from "../globalStyles";
import { Link } from "react-router-dom";
import { StyledTable } from "../globalStyles";
import Button from "../components/atoms/Button";

// images
import active from "../assets/images/green-circle.svg";
import inactive from "../assets/images/red-circle.svg";
import SearchInput from "../components/atoms/SearchInput";

// endpoint
const CAMPAIGNS_API = "https://campaigns-app.herokuapp.com/api/campaigns";

let i = 1;

const HomeScreen = () => {
  // hooks
  // state
  const [APIData, setAPIData] = useState<any[]>([]);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get(CAMPAIGNS_API).then((res) => {
      setAPIData(res.data);
    });
  }, []);

  // custom functions {

  const searchItems = (searchValue: any) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return item.name.toLowerCase().includes(searchInput);
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  const searchStartDate = (searchValue: any) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return item.startDate.parseInt().includes(searchInput);
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  const searchEndDate = (searchValue: any) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return item.endDate.includes(searchInput);
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <StyledHomeScreen>
      <h1>Campaigns</h1>
      <div className="filters">
        <div className="ascending__descending">
          <SearchInput
            id="search"
            action={(e: any) => searchStartDate(e.target.value)}
            placeholder="Start Date"
            type="text"
          />
          <SearchInput
            id="search"
            action={(e: any) => searchEndDate(e.target.value)}
            placeholder="End Date"
            type="text"
          />
        </div>
        <div className="search">
          <SearchInput
            id="search"
            action={(e: any) => searchItems(e.target.value)}
            placeholder="Search by name"
            type="text"
          />
        </div>
      </div>
      <div className="cards">
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            {searchInput.length > 1
              ? filteredResults.map((item) => {
                  return (
                    <tr key={i++}>
                      <td>{item.name + " " + item.campaignId}</td>
                      <td>{item.username}</td>
                      <td>
                        {item.startDate.slice(0, 4) +
                          "/" +
                          item.startDate.slice(5, 7) +
                          "/" +
                          item.startDate.slice(8, 10)}
                      </td>
                      <td>
                        {item.endDate.slice(0, 4) +
                          "/" +
                          item.endDate.slice(5, 7) +
                          "/" +
                          item.endDate.slice(8, 10)}
                      </td>
                      <td>
                        <img
                          src={item.status === "active" ? active : inactive}
                          alt=""
                        />
                        {item.status}
                      </td>

                      <td>
                        {item.budget >= 1000 && item.budget < 1000000
                          ? (item.budget.toFixed(1) / 1000)
                              .toString()
                              .slice(0, 3) + "K "
                          : item.budget > 1000000
                          ? (item.budget.toFixed(1) / 100000)
                              .toString()
                              .slice(0, 2) + "M "
                          : item.budget}
                        USD
                      </td>
                    </tr>
                  );
                })
              : APIData.map((item) => {
                  return (
                    <tr key={i++}>
                      <td>{item.name + " " + item.campaignId}</td>
                      <td>{item.username}</td>
                      <td>
                        {item.startDate.slice(0, 4) +
                          "/" +
                          item.startDate.slice(5, 7) +
                          "/" +
                          item.startDate.slice(8, 10)}
                      </td>
                      <td>
                        {item.endDate.slice(0, 4) +
                          "/" +
                          item.endDate.slice(5, 7) +
                          "/" +
                          item.endDate.slice(8, 10)}
                      </td>
                      <td>
                        <img
                          src={item.status === "active" ? active : inactive}
                          alt=""
                        />
                        {item.status}
                      </td>

                      <td>
                        {item.budget >= 1000 && item.budget < 1000000
                          ? (item.budget.toFixed(1) / 1000)
                              .toString()
                              .slice(0, 3) + "K "
                          : item.budget > 1000000
                          ? (item.budget.toFixed(1) / 100000)
                              .toString()
                              .slice(0, 2) + "M "
                          : item.budget}
                        USD
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </StyledTable>
      </div>
      <Link to={`/post-campaign`}>
        <Button
          onClick={() => console.log("")}
          text="Post your campaign"
          type="submit"
        />
      </Link>
    </StyledHomeScreen>
  );
};

export default HomeScreen;

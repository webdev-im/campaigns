import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import Input from "../atoms/Input";
import RadioInput from "../atoms/RadioInput";
import Label from "../atoms/Label";
import Button from "../atoms/Button";

// style
import { StyledForm } from "../../globalStyles";

// endpoint
const CAMPAIGNS_ENDPOINT = "https://campaigns-app.herokuapp.com/api/campaigns";

const PostCampaignForm = () => {
  // hooks
  // state
  // const [campaignId, setCampaignId] = useState(0);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [budget, setBudget] = useState("");
  // const [userId, setUserId] = useState(0);

  const [data, setData] = useState<any[]>([]);

  let campaignId: any;
  let userId: any;

  // useEffect
  useEffect(() => {
    axios.get(CAMPAIGNS_ENDPOINT).then((res) => setData(res.data));
  }, []);

  campaignId = data.length++;
  userId = Math.floor(Math.random() * 99);

  // custom functions
  const postNewCampaign = async (e: any) => {
    e.preventDefault();

    // creating new campaign
    const newCampaign = {
      campaignId: campaignId,
      name: name,
      username: username,
      startDate: startDate,
      endDate: endDate,
      status: status,
      budget: budget,
      userId: userId,
    };

    // clearing form
    setName("");
    setUsername("");
    setStartDate("");
    setEndDate("");
    setStatus("");
    setBudget("");

    const response = await axios.post(CAMPAIGNS_ENDPOINT, newCampaign);
  };

  // radio handler
  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  return (
    <StyledForm onSubmit={postNewCampaign}>
      <div className="single__input">
        <Label label="name" />
        <Input
          id="animalName"
          onInput={(e: any) => setName(e.target.value)}
          placeholder="Enter Campaign name"
          type="text"
          value={name}
        />
      </div>
      <div className="single__input">
        <Label label="Username" />
        <Input
          id="username"
          onInput={(e: any) => setUsername(e.target.value)}
          placeholder="Enter username"
          type="text"
          value={username}
        />
      </div>
      <div className="single__input">
        <Label label="Campaign start date" />
        <Input
          id="startDate"
          onInput={(e: any) => setStartDate(e.target.value)}
          placeholder="Enter campaign start date"
          type="date"
          value={startDate}
        />
      </div>
      <div className="single__input">
        <Label label="Campaign end date" />
        <Input
          id="endDate"
          onInput={(e: any) => setEndDate(e.target.value)}
          placeholder="Enter campaign end date"
          type="date"
          value={endDate}
        />
      </div>
      <div className="single__input select">
        <div className="single__select">
          <Label label="Active" />
          <RadioInput
            id="active"
            onChange={radioHandler}
            placeholder=""
            type="radio"
            value="active"
            name="campaign"
          />
        </div>
        <div className="single__select">
          <Label label="Inactive" />
          <RadioInput
            id="inactive"
            onChange={radioHandler}
            placeholder=""
            type="radio"
            value="inactive"
            name="campaign"
          />
        </div>
      </div>
      <div className="single__input">
        <Label label="Campaign budget" />
        <Input
          id="budget"
          onInput={(e: any) => setBudget(e.target.value)}
          placeholder="Enter campaign budget"
          type="text"
          value={budget}
        />
      </div>
      <Button
        onClick={() => prompt("New campaign added")}
        text="Post Campaign"
        type="submit"
      />
    </StyledForm>
  );
};

export default PostCampaignForm;

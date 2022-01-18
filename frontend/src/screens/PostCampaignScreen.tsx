import React from "react";

// components
import PostCampaignForm from "../components/molecules/PostCampaignForm";

// style

import { StyledPostCampaignScreen } from "../globalStyles";

const PostCampaignScreen = () => {
  return (
    <StyledPostCampaignScreen>
      <h1>Post your campaign</h1>
      <PostCampaignForm />
    </StyledPostCampaignScreen>
  );
};

export default PostCampaignScreen;

import { Button, Form, Input, InputNumber, Row, Switch } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { sendMessage } from "./send-message";

const Layout = styled.div`
  margin: 8px;
`;

const FormRow = styled(Row)`
  margin: 8px;
`;
const FormItem = styled.span`
  margin-right: 8px;
`;

const StyledInput = styled(InputNumber)``;

const SendButton = styled(Button)`
  width: 100%;
  margin-top: 32px;
`;

export const App = () => {
  // Convert this to formic one day
  const [numberOfQuotes, setNumberOfQuotes] = useState(10);
  const [blockNetworkRequests, setBlockNetworkRequests] = useState(false);
  const [additionalLoadTime, setAdditionalLoadTime] = useState(0);

  const handleSwitchClick = () => {
    setBlockNetworkRequests(!blockNetworkRequests);
  };

  const handleNumberInputChange = (value: any) => {
    setNumberOfQuotes(value);
  };

  const handleLoatTimeInputChange = (value: any) => {
    setAdditionalLoadTime(value);
  };

  const handleSendMessageClick = () => {
    const payload = {
      numberOfQuotes,
      blockNetworkRequests,
      additionalLoadTime,
    };

    sendMessage(payload);
  };

  return (
    <Layout>
      <FormRow>
        <FormItem>Total Number of Quotes:</FormItem>
        <StyledInput
          min={0}
          max={100}
          value={numberOfQuotes}
          onChange={handleNumberInputChange}
        />
      </FormRow>
      <FormRow>
        <FormItem>Error All Requests:</FormItem>
        <Switch checked={blockNetworkRequests} onChange={handleSwitchClick} />
      </FormRow>
      <FormRow>
        <FormItem>Additional Loading Time (ms):</FormItem>
        <StyledInput
          min={0}
          max={10000}
          value={additionalLoadTime}
          onChange={handleLoatTimeInputChange}
        />
      </FormRow>
      <FormRow>
        <SendButton type="primary" onClick={handleSendMessageClick}>
          Send Settings
        </SendButton>
      </FormRow>
    </Layout>
  );
};

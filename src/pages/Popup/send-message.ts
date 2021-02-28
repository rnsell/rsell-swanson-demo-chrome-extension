export const sendMessage = (payload: any) => {
  // Take the curent
  (chrome as any).tabs.query(
    { active: true, currentWindow: true },
    function (tabs: any) {
      const [currentTab] = tabs;
      const tabId = currentTab?.id;
      const messageToSend = {
        namespace: "ron-swanson-extension",
        payload,
      };

      if (tabId) {
        (chrome as any).tabs.sendMessage(tabId, messageToSend);
      } else {
        console.error(
          "Can not detect tab id from verso extensino content script. Can not send message"
        );
      }
    }
  );
};

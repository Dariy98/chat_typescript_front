import React, { useRef } from "react";
// import TextField from "@material-ui/core/TextField";

// export const AddMessage: React.FunctionComponent = ({ socket }) => {
export const AddMessage: React.FunctionComponent = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (ref.current!.value.length <= 200) {
        let message: string = ref.current!.value;
        if (message === "") {
          return;
        }

        // socket.emit("chatMessage", {
        //   text: message,
        //   date: new Date(),
        // });
        console.log(ref.current!.value);
        ref.current!.value = "";
      } else {
        alert("Limited to 200 characters!");
      }
    }
  };

  return (
    <>
      <input
        id="standard-full-width"
        style={{ padding: 7, width: "50%", border: "1px solid gray" }}
        placeholder="Write message"
        ref={ref}
        onKeyUp={addMessage}
      />
    </>
  );
};
export default AddMessage;

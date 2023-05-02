import { MDBBtn } from "mdb-react-ui-kit";
// const button = document.getElementsByClassName("buttonCheckout");

function Button() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Button clicked");
    // const button = document.getElementsByClassName("buttonCheckout");

    fetch("http://localhost:8080/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.log(e.error);
      });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <MDBBtn type="submit">Place your donation</MDBBtn>
      </form>
    </>
  );
}

export default Button;

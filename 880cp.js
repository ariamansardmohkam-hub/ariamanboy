<button onclick="sendOrder()">خرید</button>

<script>
async function sendOrder() {
  const data = {
    uid: prompt("UID خود را وارد کنید"),
    username: prompt("Username را وارد کنید"),
    cp: 420
  };

  const res = await fetch("https://script.google.com/macros/s/AKfycbwpjrFwfMJ7eiS8VmqQW9rm-cfjeB7PHBNb-4nQWeruVZMjzzZcLcpxnEUGxAD322D5iQ/exec", {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("سفارش ثبت شد");
}
</script>

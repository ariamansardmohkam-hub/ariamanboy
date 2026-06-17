<button onclick="sendOrder()">خرید</button>

<script>
async function sendOrder() {
  const data = {
    uid: prompt("UID خود را وارد کنید"),
    username: prompt("Username را وارد کنید"),
    cp: 420
  };

  const res = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("سفارش ثبت شد");
}
</script>

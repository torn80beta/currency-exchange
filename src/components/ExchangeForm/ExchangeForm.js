export const ExchangeForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { currency } = event.target.elements;
    const [amount, from, , to] = currency.value.split(" ");
    console.log({ amount, from, to });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="currency" placeholder="15 USD in UAH" />
      <button type="submit">Exchange</button>
    </form>
  );
};
